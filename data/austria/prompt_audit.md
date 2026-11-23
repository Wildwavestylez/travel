# TRAVEL — AUSTRIA PLZ FINAL AUDIT PROMPT

## Status and separation

**Status: Complete and approved operational instruction.** This prompt defines the separate final audit stage in the established Austrian TRAVEL workflow. It is used together with `schema.json`, `COUNTRY_PROFILE.md`, `CONTENT_STANDARD.md` and `prompt_rework.md`.

**Established data workflow:** prepare inventory and JSON working files on GitHub; complete rework on GitHub; perform this separate final audit on the GitHub working records; after a successful audit prepare V5 and mark the approved records `published` on GitHub; only then copy the published GitHub records to Neon. GitHub remains the authoritative working and publication source; Neon receives the published copy.

This prompt defines a separate final audit. Its scope and any audit simplifications must never be transferred to full research, creation or rework requirements in `CONTENT_STANDARD.md` and `prompt_rework.md`.

## Required inputs

Before an audit, load:
- `data/austria/schema.json`
- `data/austria/COUNTRY_PROFILE.md`
- `data/austria/CONTENT_STANDARD.md`
- `data/austria/prompt_rework.md`
- the approved sequence and exact requested PLZ records;
- the canonical audit ledger, if established.

## Audit controls

For every requested PLZ:
1. Confirm the exact four-digit string and approved geographic-only inventory membership.
2. Re-check that official postal evidence supports geographic eligibility and that the code is not PO-box-only, company/institution-only without territory, a branch, sorting/distribution-centre or another operational/non-geographic code.
3. Verify the geographic extent only to the level supported by official evidence; do not assume or invent a polygon.
4. Check the defensible geographic scope and associated municipality/locality relationships.
5. Verify Bundesland and political Bezirk/statutory-city context using official administrative sources.
6. Check representative place and coordinates.
7. Review fact locations for physical accuracy and connection to the PLZ content area.
8. Check source support for material factual claims.
9. Check all seven translations for completeness, factual fidelity and natural language.
10. Check duplicate or misplaced facts across the requested audit scope.
11. Validate the complete JSON against the approved schema.

For the entire requested area, check whether major nationally, regionally or internationally significant attractions, heritage, historical events, people or natural features are missing. This is a targeted audit check, not a reason to reduce the full research required during rework.

## Austrian authority routing — mandatory

Use the source catalogue in `data/austria/COUNTRY_PROFILE.md`, section "Official authorities and source hierarchy". During audit, verify each claim with the institution competent for that claim:
- PLZ existence/purpose: Austrian Post Postlexikon and legend; RTR current Open Data as statutory inventory cross-check.
- Address/coordinate and address-to-PLZ relationship: BEV Adressregister; no inferred PLZ polygon.
- Administrative metadata: Statistik Austria current regional divisions and Gemeindeverzeichnis; metadata only, never content boundaries.
- Local map context: basemap.at, BEV and official provincial/municipal GIS.
- Monument protection: Bundesdenkmalamt and applicable legal instrument; the published Denkmalliste alone is not legally binding.
- UNESCO: Austrian UNESCO Commission and UNESCO World Heritage Centre.
- Nature: Umweltbundesamt overview plus competent provincial authority/area administration.
- Geology: GeoSphere Austria.
- Historical claims: Österreichisches Staatsarchiv, Landes-/Stadt-/Gemeindearchive, ÖNB ANNO, museums and specialist literature.
- Current visitor access/operation: official operator or institution.

Check source competence, exact URL, publication/reference date and checked date. Treat conflicting sources as an audit issue until reconciled. A postal destination is not a municipality; a directory listing is not proof of geographic eligibility; a BEV address point is not proof of a PLZ boundary.

## Source access policy

Use official public online registers, search interfaces and institutional pages as the default. Do not require bulk downloads or local copies. If an official downloadable dataset is essential to resolve a discrepancy, record its publisher, version/publication date and access date.

## Audit outcomes

Record each material issue, supporting evidence, exact affected field/fact and required correction. A record passes only when all applicable checks are supported and the complete record validates.

The audit itself does not silently rewrite the record or mark it `published`. Failed records return to rework on GitHub and must be audited again. Passed records become eligible for V5 preparation. Only after V5 preparation and final approval may the corresponding GitHub records be marked `published`. Neon is updated only by copying the published GitHub records; never publish unaudited or pre-V5 working files to Neon.

## Shared technical audit — mandatory

For every audited Austrian record, check the complete record against `data/austria/schema.json` and the shared TRAVEL technical contract in `data/austria/CONTENT_STANDARD.md`.

1. Confirm the postcode is a four-character string, including any leading zero, and belongs to the approved geographic-only sequence.
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
