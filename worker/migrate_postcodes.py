import json
import os
import sys
import time
from pathlib import Path

import requests
from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]
SCHEMA_PATH = ROOT / "data" / "germany" / "schema.json"
STANDARD_PATH = ROOT / "data" / "germany" / "CONTENT_STANDARD.md"

SUPABASE_URL = os.environ["SUPABASE_URL"].rstrip("/")
SUPABASE_KEY = os.environ["SUPABASE_SECRET_KEY"]
OPENAI_KEY = os.environ["OPENAI_API_KEY"]
MODEL = os.environ.get("OPENAI_MODEL", "gpt-6-luna")

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=representation",
}

def supabase_get(limit=20):
    url = f"{SUPABASE_URL}/rest/v1/postal_codes"
    params = {
        "select": "postal_code,city,district,region,representative_name,latitude,longitude,content,data_version,status",
        "country_code": "eq.DE",
        "data_version": "lt.2",
        "order": "postal_code.asc",
        "limit": str(limit),
    }
    r = requests.get(url, headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()

def supabase_update(postal_code, content):
    url = f"{SUPABASE_URL}/rest/v1/postal_codes"
    params = {
        "country_code": "eq.DE",
        "postal_code": f"eq.{postal_code}",
        "data_version": "lt.2",
    }
    payload = {
        "content": content,
        "data_version": 2,
        "status": "published",
    }
    r = requests.patch(url, headers=HEADERS, params=params, json=payload, timeout=30)
    r.raise_for_status()
    rows = r.json()
    if len(rows) != 1:
        raise RuntimeError(f"Expected exactly one updated row for {postal_code}, got {len(rows)}")
    return rows[0]

def openai_rewrite(record, schema, standard):
    prompt = f"""
You are the production worker for TRAVEL — German postcode migration.

Rewrite ONE EXISTING German postcode record into the CURRENT production JSON.
This is a full rewrite, not a mechanical conversion.

ABSOLUTE RULES:
- Follow data/germany/schema.json exactly.
- Follow data/germany/CONTENT_STANDARD.md exactly.
- Return JSON only.
- Do not add fields.
- Do not invent facts, coordinates, source URLs, people, monuments or history.
- Research the postcode and relevant surrounding area with web search before writing.
- Prefer official, primary, archive, museum, university and specialist sources.
- Every important factual claim must be traceable through the sources array.
- Use 3 excellent facts rather than filler. No quota.
- Nature and meaningful surrounding geography must be checked.
- Facts must pass the WOW test from CONTENT_STANDARD.md.
- Fact IDs must be sequential: fact_001, fact_002, ...
- Keep the same fact IDs and meaning across all six languages.
- Required translation languages: cs, de, en, es, fr, it.
- Czech is the canonical internal version.
- Translate naturally. NEVER copy English text into Spanish, French or Italian.
- Verify the five-digit German postcode, place, administrative context, representative place and coordinates.
- access_point must be a real, usable point appropriate for reaching the representative place.
- verification must truthfully reflect what was checked.
- Do not include promotional/commercial filler.
- Do not use Wikipedia as the sole source for important claims when a stronger source exists.

CURRENT DATABASE RECORD:
{json.dumps(record, ensure_ascii=False, indent=2)}

SCHEMA:
{json.dumps(schema, ensure_ascii=False, indent=2)}

CONTENT STANDARD:
{standard}
"""

    payload = {
        "model": MODEL,
        "tools": [{"type": "web_search"}],
        "input": prompt,
        "text": {
            "format": {
                "type": "json_object"
            }
        },
    }

    r = requests.post(
        "https://api.openai.com/v1/responses",
        headers={
            "Authorization": f"Bearer {OPENAI_KEY}",
            "Content-Type": "application/json",
        },
        json=payload,
        timeout=240,
    )
    r.raise_for_status()
    data = r.json()

    text_parts = []
    for item in data.get("output", []):
        if item.get("type") == "message":
            for part in item.get("content", []):
                if part.get("type") == "output_text":
                    text_parts.append(part.get("text", ""))

    if not text_parts:
        raise RuntimeError("OpenAI returned no output_text")

    raw = "".join(text_parts).strip()
    return json.loads(raw)

def validate(record):
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    validator = Draft202012Validator(schema)
    errors = sorted(validator.iter_errors(record), key=lambda e: list(e.path))
    if errors:
        msg = "\n".join(
            f"{'/'.join(map(str, e.path))}: {e.message}" for e in errors[:20]
        )
        raise ValueError(f"Schema validation failed:\n{msg}")

    expected = [f"fact_{i:03d}" for i in range(1, len(record["facts"]) + 1)]
    actual = [f["id"] for f in record["facts"]]
    if actual != expected:
        raise ValueError(f"Fact IDs are not sequential: {actual}")

    for lang in ("cs", "de", "en", "es", "fr", "it"):
        ids = [f["id"] for f in record["translations"][lang]["facts"]]
        if ids != actual:
            raise ValueError(f"Translation fact IDs differ in {lang}")

    if record["postcode"] == "":
        raise ValueError("Empty postcode")

def main():
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    standard = STANDARD_PATH.read_text(encoding="utf-8")

    processed = 0
    failed = []

    # Keep a safety margin below the GitHub 55-minute job timeout.
    deadline = time.time() + 48 * 60

    while time.time() < deadline:
        queue = supabase_get(limit=10)
        if not queue:
            print("TRAVEL migration complete: no German records with data_version < 2 remain.")
            return

        for record in queue:
            if time.time() >= deadline:
                break

            pc = record["postal_code"]
            try:
                print(f"Processing {pc} ...", flush=True)
                rewritten = openai_rewrite(record, schema, standard)
                validate(rewritten)

                if rewritten["postcode"] != pc:
                    raise ValueError(
                        f"Model changed postcode from {pc} to {rewritten['postcode']}"
                    )

                updated = supabase_update(pc, rewritten)
                if updated.get("data_version") != 2:
                    raise RuntimeError(
                        f"Write verification failed for {pc}: {updated}"
                    )

                processed += 1
                print(f"OK {pc} (processed={processed})", flush=True)

            except Exception as exc:
                failed.append((pc, str(exc)))
                print(f"FAILED {pc}: {exc}", file=sys.stderr, flush=True)

        # Refresh the queue from Supabase before another batch.
        time.sleep(2)

    print(f"Worker time limit reached. Processed: {processed}")
    if failed:
        print("Failures:")
        for pc, reason in failed:
            print(f"- {pc}: {reason}")

if __name__ == "__main__":
    main()
