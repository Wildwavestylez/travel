# Austria — data workspace

This directory is the country-specific workspace for Austrian postcode content in TRAVEL / EuropeExplorer.

## Setup status

**Workspace created — country documentation and inventory are being prepared.** No Austrian production records have been created yet. Do not start bulk record creation until the Country Profile, Content Standard, schema and operational prompts have been reviewed together and the storage/publication workflow has been explicitly settled.

## Core files

- `schema.json` — initial shared TRAVEL record structure adapted to four-character Austrian PLZ strings.
- `COUNTRY_PROFILE.md` — Austrian postal, geographic and administrative interpretation; currently a working baseline.
- `CONTENT_STANDARD.md` — initial production principles and research requirements; to be completed and approved.
- `prompt_rework.md` — operational starting instructions for Austrian records; not a substitute for the final standard.
- `prompt_audit.md` — separate final-audit starting instructions.
- `sequence.json` — intentionally empty until the Austrian PLZ inventory and selection policy are researched and approved.

## Production unit

One Austrian four-digit PLZ is one project indexing/content unit. Preserve the complete four-digit code as a string. Do not split it into records for individual streets, buildings, house numbers or other tiny postal subdivisions. Research the full defensible geographic scope of the selected PLZ and include all relevant discoveries within that scope. Where a code covers several localities, represent that coverage without creating duplicate micro-records.

## Open decisions

The following must be resolved before production:
1. authoritative PLZ inventory and treatment of special-purpose/non-geographic codes;
2. final geographic assignment and representative-place methodology;
3. canonical production storage, backups and publication gate;
4. confirmation of shared schema compatibility with the current EuropeExplorer application;
5. approved initial coverage order, beginning with major Austrian cities and nationally significant destinations.

Do not infer these decisions from another country's storage model or postal rules.
