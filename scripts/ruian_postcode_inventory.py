#!/usr/bin/env python3
"""Download the official nationwide RUIAN address-point CSV and aggregate territorial postcodes.

The source is the public ČÚZK Atom feed:
https://atom.cuzk.gov.cz/RUIAN-CSV-ADR-ST/RUIAN-CSV-ADR-ST.xml
This script creates an audit dataset only; it never edits sequence.json.
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

FEED_URL = "https://atom.cuzk.gov.cz/RUIAN-CSV-ADR-ST/RUIAN-CSV-ADR-ST.xml"
OUT = Path("ruian-output")
OUT.mkdir(exist_ok=True)
UA = "WildwaveStylez-Travel-RUIAN-Audit/1.0"

def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as response:
        return response.read()

def local(tag: str) -> str:
    return tag.rsplit("}", 1)[-1].lower()

feed = ET.fromstring(get(FEED_URL))
entries = [el for el in feed.iter() if local(el.tag) == "entry"]
candidates = []
for entry in entries:
    title = ""
    links = []
    updated = ""
    for child in entry.iter():
        tag = local(child.tag)
        if tag == "title" and not title:
            title = (child.text or "").strip()
        elif tag == "updated":
            updated = (child.text or "").strip()
        elif tag == "link":
            href = child.attrib.get("href", "")
            rel = child.attrib.get("rel", "")
            typ = child.attrib.get("type", "")
            if href:
                links.append((href, rel, typ))
    for href, rel, typ in links:
        if ".zip" in href.lower() or "zip" in typ.lower() or rel == "enclosure":
            candidates.append((updated, href, title))
if not candidates:
    raise RuntimeError("Atom feed contained no downloadable ZIP enclosure; refusing to guess a URL.")

# The feed is ordered newest-first on some servers, but sort explicitly by updated timestamp.
candidates.sort(key=lambda x: x[0], reverse=True)
updated, zip_url, title = candidates[0]
archive = get(zip_url)
with zipfile.ZipFile(io.BytesIO(archive)) as zf:
    csv_names = [n for n in zf.namelist() if n.lower().endswith(".csv")]
    if not csv_names:
        raise RuntimeError("Downloaded ZIP contains no CSV file.")
    # Nationwide feed is expected to contain one CSV; select the largest CSV if multiple exist.
    csv_name = max(csv_names, key=lambda n: zf.getinfo(n).file_size)
    raw = zf.read(csv_name)

decoded = None
for enc in ("utf-8-sig", "cp1250", "utf-8"):
    try:
        decoded = raw.decode(enc)
        encoding = enc
        break
    except UnicodeDecodeError:
        pass
if decoded is None:
    raise RuntimeError("Could not decode CSV as UTF-8 or Windows-1250.")

sample = decoded[:20000]
try:
    dialect = csv.Sniffer().sniff(sample, delimiters=";,\t|")
except csv.Error:
    dialect = csv.excel
reader = csv.DictReader(io.StringIO(decoded), dialect=dialect)
if not reader.fieldnames:
    raise RuntimeError("CSV has no header row.")

def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", s.lower().replace("č","c").replace("ř","r").replace("š","s").replace("ž","z").replace("ý","y").replace("á","a").replace("í","i").replace("é","e").replace("ě","e").replace("ů","u").replace("ú","u").replace("ó","o").replace("ď","d").replace("ť","t").replace("ň","n"))

headers = {norm(h): h for h in reader.fieldnames if h}
def choose(*names):
    for name in names:
        if norm(name) in headers:
            return headers[norm(name)]
    for normalized, original in headers.items():
        if any(norm(name) in normalized for name in names):
            return original
    return None

fields = {
    "postcode": choose("PSC", "POSTALCODE", "POSTCODE"),
    "municipality": choose("NAZEV_OBCE", "OBEC", "MUNICIPALITYNAME"),
    "municipality_part": choose("NAZEV_CASTI_OBCE", "CAST_OBCE", "MUNICIPALITYPARTNAME"),
    "city_district": choose("NAZEV_MOMC", "MESTSKY_OBVOD_CAST", "NAZEV_MESTSKEHO_OBVODU_CASTI"),
    "prague_district": choose("NAZEV_MOP", "MESTSKY_OBVOD_PRAHY"),
    "validity": choose("PLATNOST_OD", "DATUM_PLATNOSTI", "DATEOFVALIDITY"),
}
if not fields["postcode"]:
    raise RuntimeError(f"Could not identify postcode column. CSV headers: {reader.fieldnames}")

groups = defaultdict(lambda: {
    "address_points": 0, "municipalities": set(), "municipality_parts": set(),
    "city_districts": set(), "prague_districts": set(), "validity_dates": set()
})
total_rows = 0
blank_postcode_rows = 0
for row in reader:
    total_rows += 1
    psc = re.sub(r"\s+", "", (row.get(fields["postcode"]) or ""))
    if not psc:
        blank_postcode_rows += 1
        continue
    # Keep only valid Czech five-digit postal codes; preserve source anomalies separately in diagnostics.
    if not re.fullmatch(r"\d{5}", psc):
        continue
    item = groups[psc]
    item["address_points"] += 1
    for key in ("municipality", "municipality_part", "city_district", "prague_district", "validity"):
        col = fields.get(key)
        value = (row.get(col) or "").strip() if col else ""
        if value:
            target = "validity_dates" if key == "validity" else key + ("s" if key != "municipality_part" else "s")
            item[target].add(value)

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
    "feed_updated": updated,
    "download_url": zip_url,
    "downloaded_at_utc": datetime.now(timezone.utc).isoformat(),
    "archive_member": csv_name,
    "csv_encoding": encoding,
    "csv_delimiter": dialect.delimiter,
    "total_csv_rows": total_rows,
    "rows_without_postcode": blank_postcode_rows,
    "unique_postcodes": len(result),
    "postcodes": result,
    "method_note": "A postcode is included only if it occurs on at least one address point in the official RÚIAN CSV. This is a reference inventory, not an automatic edit of the production sequence."
}
(OUT / "ruian_postcodes.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
with (OUT / "ruian_postcodes.csv").open("w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["postcode","address_points","municipalities","municipality_parts","city_districts","prague_districts"])
    for item in result:
        w.writerow([item["postcode"], item["address_points"], "; ".join(item["municipalities"]), "; ".join(item["municipality_parts"]), "; ".join(item["city_districts"]), "; ".join(item["prague_districts"])])
(OUT / "ruian_import_manifest.json").write_text(json.dumps({k:v for k,v in payload.items() if k != "postcodes"}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({k: payload[k] for k in ("feed_entry_title","feed_updated","archive_member","csv_encoding","csv_delimiter","total_csv_rows","unique_postcodes","rows_without_postcode")}, ensure_ascii=False, indent=2))
