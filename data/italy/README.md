# Italy — data workspace

This directory is the country-specific workspace for Italy in the TRAVEL / EuropeExplorer data repository.

## Status

**Preparation only.** No Italian postcode/CAP records are being created or published yet.

## Planned country documents

The Italian country setup will be developed document by document, preserving the shared EuropeExplorer architecture while adapting country-specific geography, postal rules, administrative terminology, authorities and source hierarchy to Italy.

Planned documents:

- `COUNTRY_PROFILE.md` — Italian geographic and administrative interpretation, CAP geography, canonical field meanings, fact locations, source hierarchy and search/filter relationships.
- `schema.json` — Italian record contract, to be designed after the country profile is agreed.
- `CONTENT_STANDARD.md` — Italian content and quality requirements.
- `prompt_rework.md` — workflow for reworking Italian CAP records.
- `prompt_audit.md` — independent audit rules for Italian records.
- `prompt_create.md` — creation workflow for new Italian records.
- `sequence.json` — authoritative processing order of Italian CAP codes, prepared after the CAP inventory is researched and verified.

## Architectural principles

- One Italian CAP is one production unit / record.
- Preserve the shared separation between country profile, schema, content standard and operational prompts.
- Use verified Italian administrative and postal sources; do not mechanically copy Czech or German administrative meanings.
- Keep administrative hierarchy distinct from postal geography: CAP-to-Comune relationships must be researched and represented accurately, including many-to-many cases where they occur.
- Prepare the geography model so future application search and filters can navigate Regione, Provincia / Città Metropolitana, Comune and CAP.
- Do not create, publish or import CAP records until the country documents and sequence are agreed.

This README is only a workspace marker and planning note. It does not establish final Italian schema fields or content rules.
