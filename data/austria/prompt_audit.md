# TRAVEL — AUSTRIA PLZ FINAL AUDIT PROMPT

## Authority, completeness and separation

This is the complete, approved Austrian final-audit instruction. It defines the final audit requirements and is used together with `schema.json`, `COUNTRY_PROFILE.md`, `CONTENT_STANDARD.md` and `prompt_rework.md`.

**Final-state rule:** project specifications, schemas and content standards describe the complete production system and apply immediately. They must not contain preparation-only requirements, provisional states, future placeholders or language that postpones a defined requirement. If a specification is incomplete or contradictory, correct it against the final shared standard before continuing the affected work. Do not use a missing optional progress ledger or other administrative convenience as a reason to stop a valid audit.

**Data lifecycle and file layout:** each item in `sequence.json` has one file at `data/austria/records/{postcode}.json`, matching Slovakia's flat directory structure. A minimal `placeholder` contains only `postcode` and `status` (plus optional `data_version`) and is not eligible for content audit. A complete reworked and schema-valid record is `validated`; it then receives this separate final audit. Passed records are prepared as V5, approved and marked `published` on GitHub. Only published GitHub records are copied to Neon. GitHub is authoritative; Neon receives the published copy. These record lifecycle gates do not make the project instructions or schema provisional.

This prompt defines only the separate final audit. Its narrower scope and audit simplifications must never be transferred to full research, creation or rework requirements in `CONTENT_STANDARD.md` and `prompt_rework.md`.

This prompt defines a separate final audit. Its scope and any audit simplifications must never be transferred to full research, creation or rework requirements in `CONTENT_STANDARD.md` and `prompt_rework.md`.

## Required inputs

Before an audit, load:
- `data/austria/schema.json`
- `data/austria/COUNTRY_PROFILE.md`
- `data/austria/CONTENT_STANDARD.md`
- `data/austria/prompt_rework.md`
- the approved sequence and exact requested PLZ records;
- any existing audit evidence or issue log relevant to the requested records, if available. An optional ledger is not a prerequisite for performing the audit.

## Audit controls

For every requested PLZ:
1. Confirm the exact four-digit string and approved geographic-only inventory membership.
2. Re-check that official postal evidence supports geographic eligibility and that the code is not PO-box-only, company/institution-only without territory, a branch, sorting/distribution-centre or another operational/non-geographic code.
3. Verify the geographic extent only to the level supported by official evidence; do not assume or invent a polygon.
4. Verify the specific post office / postal facility assigned to the PLZ using Austrian Post evidence, and verify its physical address using the official Filialfinder or another official Austrian Post source.
5. Check that `city` names exactly the political Gemeinde in which that assigned facility is physically located; do not accept Bestimmungsort or the largest associated municipality as a substitute. Check `district`, `county` and `state` against that municipality.
6. Separately check the full geographic PLZ scope and associated settlements/municipalities used for fact research; it must not be reduced to the municipality in `city`.
7. Check representative place and coordinates independently of the post-office location.
8. Review fact locations for physical accuracy and connection to the full PLZ content area.
9. Check source support for material factual claims.
10. Check all seven translations for completeness, factual fidelity and natural language.
11. Check duplicate or misplaced facts across the requested audit scope.
12. Confirm the record is not a minimal `placeholder`; placeholders are inventory entries and must be skipped, not counted as audited. For a `validated` record, validate the complete JSON against the approved schema.

For the entire requested area, check whether major nationally, regionally or internationally significant attractions, heritage, historical events, people or natural features are missing. This is a targeted audit check, not a reason to reduce the full research required during rework.

## Austrian authority routing — mandatory

Use the source catalogue in `data/austria/COUNTRY_PROFILE.md`, section "Official authorities and source hierarchy". During audit, verify each claim with the institution competent for that claim:
- PLZ existence/purpose: Austrian Post Postlexikon and legend; RTR current Open Data as statutory inventory cross-check.
- Assigned post office / Leitort and physical facility address: Austrian Post PLZ information and official Filialfinder or another official Austrian Post facility record.
- Address/coordinate, municipality and address-to-PLZ relationship: BEV Adressregister, with Statistik Austria for official municipality names; no inferred PLZ polygon.
- Administrative metadata: Statistik Austria current regional divisions and Gemeindeverzeichnis; metadata only, never content boundaries.
- Local map context: basemap.at, BEV and official provincial/municipal GIS.
- Monument protection: Bundesdenkmalamt and applicable legal instrument; the published Denkmalliste alone is not legally binding.
- UNESCO: Austrian UNESCO Commission and UNESCO World Heritage Centre.
- Nature: Umweltbundesamt overview plus competent provincial authority/area administration.
- Geology: GeoSphere Austria.
- Historical claims: Österreichisches Staatsarchiv, Landes-/Stadt-/Gemeindearchive, ÖNB ANNO, museums and specialist literature.
- Current visitor access/operation: official operator or institution.

Check source competence, exact URL, publication/reference date and checked date. Treat conflicting sources as an audit issue until reconciled. A postal Bestimmungsort is not automatically a municipality or the physical location of the assigned post office. Verify `city` from the actual assigned facility address. Audit the full geographic PLZ area for facts independently of the single header municipality. A directory listing is not proof of geographic eligibility; a BEV address point is not proof of a PLZ boundary.

## Source access policy

Use official public online registers, search interfaces and institutional pages as the default. Do not require bulk downloads or local copies. If an official downloadable dataset is essential to resolve a discrepancy, record its publisher, version/publication date and access date.

## Audit outcomes

Record each material issue, supporting evidence, exact affected field/fact and required correction. A record passes only when all applicable checks are supported and the complete record validates.

The audit must not treat a `placeholder` as a failed content record: it is simply not yet ready for audit. The audit itself does not silently rewrite a `validated` record or mark it `published`. Failed records return to rework on GitHub and must be audited again. Passed records become eligible for V5 preparation. Only after V5 preparation and final approval may the corresponding GitHub records be marked `published`. Neon is updated only by copying the published GitHub records; never publish unaudited or pre-V5 working files to Neon.

## Shared technical audit — mandatory

For every audited Austrian record, check the complete record against `data/austria/schema.json` and the shared TRAVEL technical contract in `data/austria/CONTENT_STANDARD.md`.

1. Confirm the postcode is a four-character string, including any leading zero, and belongs to the approved geographic-only sequence. Confirm `status` is `validated` for an audit candidate; skip `placeholder` records and never treat them as content-complete.
2. Confirm `city` is the one municipality containing the physically located post office assigned to the PLZ, and that its official postal and geographic evidence is recorded. Confirm the full fact scope includes all relevant associated settlements, not only that municipality.
2. Confirm the record contains exactly the approved schema properties; no missing required properties, undeclared properties, wrong data types or invalid enum values.
3. Confirm each fact has one valid editorial `category` and exactly one valid `map_category`. The map category must be one of the shared 17 identifiers and must not be inferred from `location.type`.
4. Confirm fact IDs are unique and stable, and that all seven language branches contain exactly the same IDs in exactly the same order.
5. Check that translations preserve the facts' meaning, dates, names, geography and uncertainty without adding or omitting claims.
6. Check that `representative_point`, `access_point` and `facts[].location` are not confused or copied mechanically.
7. For each non-null fact location, verify its `name`, coordinates, `type`, `accuracy` and `source` follow the map-location rules. If `location` is null, check whether a defensible approximate or representative point can be established before accepting null.
8. Confirm all location-type identifiers match both `data/austria/location_types.json` and the schema enum exactly.
9. Check fact source references resolve to entries in the record's `sources` array as required by the schema and project rules.
10. Confirm the audit did not modify the shared schema, sequence or unrelated records. Record any authorized correction to an audited JSON separately; do not mark it `published` as part of the audit.

The audit is a targeted check of completed records; it must not be used to weaken the full research and content-creation requirements in `CONTENT_STANDARD.md` or `prompt_rework.md`.

## Online-first audit evidence

Use official public online sources by default. Do not require bulk downloads or local national datasets. If a downloadable official dataset is essential to resolve a specific discrepancy, document its publisher, dataset/version or publication date and access date.

## Technical audit result

Report the exact number of records checked, schema/structure findings, invalid or missing map categories, translation ID mismatches, fact-location issues, source-reference problems and unresolved cases. Do not claim a full schema validation if only a visual spot-check was performed. Use only the established GitHub workflow and the existing schema/lifecycle conventions; do not invent lifecycle values or bypass the V5 and publication gates.
