# Germany data

German country documentation, canonical postcode sequence and legacy/example postcode JSON files for TRAVEL.

## Authoritative documents

Load these documents together before German production work:

- `schema.json` — exact JSON payload structure, required fields, data types and controlled values.
- `CONTENT_STANDARD.md` — binding research, geographic, source, editorial, map and translation requirements.
- `COUNTRY_PROFILE.md` — German administrative and geographic interpretation of schema fields.
- `prompt_create.md` — workflow for a new record.
- `prompt_rework.md` — full workflow for reworking an existing record.
- `prompt_audit.md` — separate, narrower final-audit workflow.
- `sequence.json` — canonical ordered project scope of German geographic PLZ.

If documents conflict, stop the affected operation and resolve the document-level conflict. Do not silently weaken the schema or Content Standard.

## Sequence

The current sequence starts at **01067** and contains **8,288** five-digit entries. The `sequence` array is authoritative and ordered. Unlike the Czech sequence format, the German sequence currently has no `groups` array; do not add or expect one. Verify that `count` equals `sequence.length`, that all entries are unique five-digit strings, and that the intended postcode belongs to the sequence before production.

Ordinary creation, rework and audit must not silently add, remove, reorder or renumber sequence entries. A sequence change is a separate project-level operation requiring official evidence and explicit approval.

## Production storage

The current German production records are stored in Supabase `public.postal_codes` with `country_code = 'DE'`. The repository contains the governing documentation and sequence. Use exact postcode filters and the I/O safeguards in `CONTENT_STANDARD.md` and the relevant prompt. Do not automatically compare or synchronize Supabase and Neon.

## Postcode record

The German JSON payload follows `schema.json` and includes postcode and administrative fields, one representative place and point, access-point metadata, facts, source references, verification metadata, photo metadata and all seven required language versions: **cs, de, en, es, fr, it, nl**.

German geographic and postal rules are defined in `COUNTRY_PROFILE.md`; do not import Czech RÚIAN procedures or Czech administrative assumptions.
