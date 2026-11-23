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

## Production unit and inclusion rule

One Austrian four-digit PLZ is one project indexing/content unit. Preserve the complete four-digit code as a string. Do not split it into records for individual streets, buildings, house numbers or other tiny postal subdivisions. Research the full defensible geographic scope of the selected PLZ and include all relevant discoveries within that scope. Where a code covers several localities, represent that coverage without creating duplicate micro-records.

**Geographic PLZ only:** include a code only when reliable evidence establishes that it identifies a real geographic delivery area or territory that can be researched as a place. Exclude PO-box/Postfach-only codes, company-specific or institution-specific codes without their own geographic territory, post-office/branch codes, sorting and distribution-centre codes, and other purely operational or non-geographic codes. A company located inside an ordinary geographic PLZ does not make that PLZ a company-specific code.

Do not assume that a PLZ has a precise polygon. If official sources establish only associated municipalities, localities or address points, record only that supported relationship. Never invent boundaries or assign every place in a municipality to a PLZ without evidence.

## Source access policy — online first

Use authoritative public online sources as the default research method. Do not create a bulk-download pipeline or maintain local copies of national datasets merely for convenience. Consult official online registers and search interfaces directly; use an official downloadable file only when a required fact cannot be reliably established online or when a reproducible comparison genuinely requires it. Record the exact source, relevant page/dataset and verification date. Online availability does not reduce the requirement to verify the actual geographic scope.

## Open decisions

The following must be resolved before production:
1. complete, verified inventory of geographic-only Austrian PLZ and documented exclusions;
2. final geographic assignment and representative-place methodology, including multi-municipality PLZ;
3. canonical production storage, backups and publication gate;
4. exact 1:1 technical parity review against the Czech schema and technical document structure, with only justified Austrian adaptations;
5. approved initial coverage order, beginning with major Austrian cities and nationally significant destinations.

Do not infer these decisions from another country's storage model or postal rules.
