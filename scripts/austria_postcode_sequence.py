#!/usr/bin/env python3
"""Build the Austrian geographic postcode sequence from the official EDM list."""
from __future__ import annotations

import csv
import io
import json
import re
import urllib.request
from pathlib import Path

URL = (
    "https://www.edm.gv.at/edm_portal/redaList.do"
    "?6578706f7274=1&d-49520-e=1&seqCode=598c5vaxpkprtj&ubastyle_lang=de"
)
ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "data/austria/sequence.json"

request = urllib.request.Request(
    URL,
    headers={"User-Agent": "Wildwavestylez-Travel-PLZ-Inventory/1.0"},
)
with urllib.request.urlopen(request, timeout=60) as response:
    raw = response.read()

text = raw.decode("utf-8-sig")
sample = text[:8192]
try:
    dialect = csv.Sniffer().sniff(sample, delimiters=";,\t")
except csv.Error:
    dialect = csv.excel

codes: set[str] = set()
for row in csv.reader(io.StringIO(text), dialect):
    if not row:
        continue
    candidate = re.sub(r"[^0-9]", "", row[0].strip())
    if re.fullmatch(r"\d{4}", candidate):
        codes.add(candidate)

sequence = sorted(codes, key=int)
if len(sequence) != 2234:
    raise SystemExit(
        f"Expected 2234 official EDM postcode rows, extracted {len(sequence)}; refusing to publish."
    )
if sequence[0] != "1010" or len(sequence) != len(set(sequence)):
    raise SystemExit("Unexpected first postcode or duplicate values; refusing to publish.")
if any(len(code) != 4 for code in sequence):
    raise SystemExit("Invalid postcode format; refusing to publish.")

data = json.loads(TARGET.read_text(encoding="utf-8"))
data["mode"] = "preparation"
data["status"] = "inventory_prepared_pending_review"
data["count"] = len(sequence)
data["sequence"] = sequence
data["notes"] = [
    "Sequence transcribed automatically from the official EDM current list of Austrian postcodes.",
    "The EDM list is based on Statistik Austria regional classification and corresponds to addressing postcodes in the Austrian Post postcode directory; Postfach-only postcode types are excluded by the source.",
    "All entries are four-character strings, unique, and sorted strictly ascending by numeric value.",
    "This is a prepared source inventory for the next project step, not a completed content rework or audit.",
    "Source: https://www.edm.gv.at/edm_portal/redaList.do?seqCode=598c5vaxpkprtj&trigger=true&ubastyle_lang=de",
    "Export retrieved on the workflow run date; source reported 2234 entries."
]
TARGET.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Prepared {len(sequence)} unique Austrian postcodes: {sequence[0]}–{sequence[-1]}")
