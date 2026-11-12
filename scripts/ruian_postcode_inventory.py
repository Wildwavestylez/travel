#!/usr/bin/env python3
"""Download and aggregate every municipality CSV in the official nationwide RUIAN archive.

The source is the public ČÚZK Atom feed. This script creates an audit dataset only;
it never edits sequence.json.
"""
from __future__ import annotations

import csv
import io
import json
import re
import urllib.request
import zipfile
import xml.etree.ElementTree as ET
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin

FEED_URL = "https://atom.cuzk.gov.cz/RUIAN-CSV-ADR-ST/RUIAN-CSV-ADR-ST.xml"
OUT = Path("ruian-output")
OUT.mkdir(exist_ok=True)
UA = "WildwaveStylez-Travel-RUIAN-Audit/1.1"


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as response:
        return response.read()


def local(tag: str) -> str:
    return tag.rsplit("}", 1)[-1].lower()


def norm(s: str) -> str:
    table = str.maketrans({
        "č": "c", "ř": "r", "š": "s", "ž": "z", "ý": "y", "á": "a",
        "í": "i", "é": "e", "ě": "e", "ů": "u", "ú": "u", "ó": "o",
        "ď": "d", "ť": "t", "ň": "n",
    })
    return re.sub(r"[^a-z0-9]", "", s.lower().translate(table))


def decode_csv(raw: bytes) -> tuple[str, str]:
    for enc in ("utf-8-sig", "cp1250", "utf-8"):
        try:
            return raw.decode(enc), enc
        except UnicodeDecodeError:
            continue
    raise RuntimeError("Could not decode a CSV member as UTF-8 or Windows-1250.")


def detect_fields(reader: csv.DictReader) -> dict[str, str | None]:
    headers = {norm(h): h for h in (reader.fieldnames or []) if h}

    def choose(*names: str) -> str | None:
        for name in names:
            if norm(name) in headers:
                return headers[norm(name)]
        for normalized, original in headers.items():
            if any(norm(name) in normalized for name in names):
                return original
        return None

    return {
        "postcode": choose("PSC", "POSTALCODE", "POSTCODE"),
        "municipality": choose("NAZEV_OBCE", "OBEC", "MUNICIPALITYNAME"),
        "municipality_part": choose("NAZEV_CASTI_OBCE", "CAST_OBCE", "MUNICIPALITYPARTNAME"),
        "city_district": choose("NAZEV_MOMC", "MESTSKY_OBVOD_CAST", "NAZEV_MESTSKEHO_OBVODU_CASTI"),
        "prague_district": choose("NAZEV_MOP", "MESTSKY_OBVOD_PRAHY"),
        "validity": choose("PLATNOST_OD", "DATUM_PLATNOSTI", "DATEOFVALIDITY"),
    }


feed = ET.fromstring(get(FEED_URL))
feeds = [(FEED_URL, feed)]
seen_feed_urls = {FEED_URL}
for base_url, doc in list(feeds):
    for node in doc.iter():
        attrs = {local(k): v for k, v in node.attrib.items()}
        href = attrs.get("href") or attrs.get("src") or attrs.get("url") or ""
        rel = attrs.get("rel", "").lower()
        typ = attrs.get("type", "").lower()
        if href:
            resolved = urljoin(base_url, href)
            if rel == "alternate" and ("atom+xml" in typ or resolved.lower().endswith(".xml")):
                if resolved not in seen_feed_urls:
                    seen_feed_urls.add(resolved)
                    feeds.append((resolved, ET.fromstring(get(resolved))))

candidates = []
feed_diagnostics = []
for base_url, doc in feeds:
    entries = [el for el in doc.iter() if local(el.tag) in ("entry", "item")]
    for scope in [doc] + (entries if entries else []):
        title = ""
        updated = ""
        for child in scope.iter():
            tag = local(child.tag)
            if tag == "title" and not title:
                title = (child.text or "").strip()
            elif tag in ("updated", "pubdate") and not updated:
                updated = (child.text or "").strip()
            attrs = {local(k): v for k, v in child.attrib.items()}
            href = attrs.get("href") or attrs.get("src") or attrs.get("url") or ""
            rel = attrs.get("rel", "").lower()
            typ = attrs.get("type", "").lower()
            if href:
                resolved = urljoin(base_url, href)
                feed_diagnostics.append((resolved, rel, typ, title))
                if ".zip" in resolved.lower() or "zip" in typ or rel == "enclosure":
                    candidates.append((updated, resolved, title))

candidates = list(dict.fromkeys(candidates))
if not candidates:
    raise RuntimeError(
        "Official ČÚZK Atom feed contained no downloadable ZIP link. "
        f"Feed documents={len(feeds)}, diagnostic_links={feed_diagnostics[:30]!r}. "
        "Refusing to guess a URL."
    )

candidates.sort(key=lambda x: x[0], reverse=True)
updated, zip_url, title = candidates[0]
archive = get(zip_url)

groups = defaultdict(lambda: {
    "address_points": 0, "municipalities": set(), "municipality_parts": set(),
    "city_districts": set(), "prague_districts": set(), "validity_dates": set()
})
total_rows = 0
blank_postcode_rows = 0
csv_names: list[str] = []
encodings: set[str] = set()
delimiters: set[str] = set()
detected_fields: dict[str, str | None] | None = None
missing_municipality_postcodes: set[str] = set()

with zipfile.ZipFile(io.BytesIO(archive)) as zf:
    csv_names = sorted(n for n in zf.namelist() if n.lower().endswith(".csv"))
    if not csv_names:
        raise RuntimeError("Downloaded ZIP contains no CSV files.")

    for csv_name in csv_names:
        decoded, encoding = decode_csv(zf.read(csv_name))
        encodings.add(encoding)
        sample = decoded[:20000]
        try:
            dialect = csv.Sniffer().sniff(sample, delimiters=";,\t|")
        except csv.Error:
            dialect = csv.excel
        delimiters.add(dialect.delimiter)
        reader = csv.DictReader(io.StringIO(decoded), dialect=dialect)
        if not reader.fieldnames:
            raise RuntimeError(f"CSV has no header row: {csv_name}")
        fields = detect_fields(reader)
        if not fields["postcode"] or not fields["municipality"]:
            raise RuntimeError(
                f"Could not identify postcode and municipality columns in {csv_name}. "
                f"Detected fields: {fields}; headers: {reader.fieldnames}"
            )
        if detected_fields is None:
            detected_fields = fields
        elif fields["postcode"] != detected_fields["postcode"] or fields["municipality"] != detected_fields["municipality"]:
            raise RuntimeError(
                f"CSV column mapping differs in {csv_name}: {fields}; "
                f"first file mapping: {detected_fields}"
            )

        for row in reader:
            total_rows += 1
            psc = re.sub(r"\s+", "", (row.get(fields["postcode"]) or ""))
            if not psc:
                blank_postcode_rows += 1
                continue
            if not re.fullmatch(r"\d{5}", psc):
                continue
            item = groups[psc]
            item["address_points"] += 1
            for key in ("municipality", "municipality_part", "city_district", "prague_district", "validity"):
                col = fields.get(key)
                value = (row.get(col) or "").strip() if col else ""
                if value:
                    target = {
                        "municipality": "municipalities",
                        "municipality_part": "municipality_parts",
                        "city_district": "city_districts",
                        "prague_district": "prague_districts",
                        "validity": "validity_dates",
                    }[key]
                    item[target].add(value)

missing_municipality_postcodes = {
    psc for psc, item in groups.items() if not item["municipalities"]
}
if missing_municipality_postcodes:
    raise RuntimeError(
        "Municipality aggregation produced empty values for postcodes: "
        + ", ".join(sorted(missing_municipality_postcodes)[:50])
    )

result = []
for psc, item in sorted(groups.items()):
    result.append({
        "postcode": psc,
        "address_points": item["address_points"],
        "municipalities": sorted(item["municipalities"]),
        "municipality_parts": sorted(item["municipality_parts"]),
        "city_districts": sorted(item["city_districts"]),
        "prague_districts": sorted(item["prague_districts"]),
        "validity_dates": sorted(item["validity_dates"]),
    })

payload = {
    "source": "ČÚZK RÚIAN – nationwide address points CSV",
    "feed_url": FEED_URL,
    "feed_entry_title": title,
    "detected_csv_fields": detected_fields,
    "feed_updated": updated,
    "download_url": zip_url,
    "downloaded_at_utc": datetime.now(timezone.utc).isoformat(),
    "archive_csv_files": len(csv_names),
    "archive_members_sample": csv_names[:10],
    "csv_encodings": sorted(encodings),
    "csv_delimiters": sorted(delimiters),
    "total_csv_rows": total_rows,
    "rows_without_postcode": blank_postcode_rows,
    "unique_postcodes": len(result),
    "postcodes": result,
    "method_note": "Every CSV member in the official nationwide ZIP archive is processed and aggregated. A postcode is included only if it occurs on at least one address point. This is a reference inventory, not an automatic edit of the production sequence."
}
(OUT / "ruian_postcodes.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
with (OUT / "ruian_postcodes.csv").open("w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["postcode","address_points","municipalities","municipality_parts","city_districts","prague_districts"])
    for item in result:
        w.writerow([item["postcode"], item["address_points"], "; ".join(item["municipalities"]), "; ".join(item["municipality_parts"]), "; ".join(item["city_districts"]), "; ".join(item["prague_districts"])])
(OUT / "ruian_import_manifest.json").write_text(
    json.dumps({k: v for k, v in payload.items() if k != "postcodes"}, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8"
)
print(json.dumps({
    k: payload[k] for k in (
        "feed_entry_title", "feed_updated", "archive_csv_files", "csv_encodings",
        "csv_delimiters", "detected_csv_fields", "total_csv_rows",
        "unique_postcodes", "rows_without_postcode"
    )
}, ensure_ascii=False, indent=2))
