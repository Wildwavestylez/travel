# Czech RÚIAN postcode reference

This directory contains the latest successfully processed nationwide Czech address-point inventory from the official ČÚZK RÚIAN CSV feed.

## Stable files

- `ruian_postcodes.csv` — **the sole canonical nationwide RÚIAN postcode inventory**. Use this CSV directly in every Czech postcode (PSČ) research, creation, rework and audit window. There is no parallel JSON inventory.
- `ruian_import_manifest.json` — source URL, feed/update metadata, extraction details and aggregate counts.

## How future work windows must use it

1. Read `data/czechia/reference/ruian_postcodes.csv` from the repository's `main` branch before researching Czech PSČ.
2. Find the exact five-digit `postcode` row.
3. Use the CSV columns `address_points`, `municipalities`, `municipality_parts`, `city_districts` and `prague_districts` as the nationwide RÚIAN address-point cross-check. The CSV does not contain `validity_dates`; never infer or fabricate that field.
4. Read `ruian_import_manifest.json` for the source feed, refresh timestamp and processing metadata.
5. Do not download or reprocess the nationwide RÚIAN archive for routine postcode work. Do not repeat checks already answered by this inventory.
5. Use the official RÚIAN source for address-point presence and territorial aggregation. It does not by itself prove that a PO box is or is not the only postal use of a code, nor does it provide coordinates or tourist facts. Verify those separately only when the task requires them.
6. Treat this inventory as a reference source, not as an instruction to change `sequence.json` or production records automatically.

## Refresh

The GitHub Actions workflow `.github/workflows/ruian-postcode-inventory.yml` refreshes this directory monthly and can also be started manually. It commits changes only when the generated reference files differ. A 30-day Actions artifact remains as a secondary backup; routine work must use the permanent CSV inventory and manifest, not the artifact.

## Provenance

Source feed: https://atom.cuzk.gov.cz/RUIAN-CSV-ADR-ST/RUIAN-CSV-ADR-ST.xml

The manifest records the exact feed entry, download URL and processing timestamp for each refresh.
