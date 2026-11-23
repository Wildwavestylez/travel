# Austria — TRAVEL data

This directory contains the approved country-specific specification and the working data area for Austrian geographic PLZ records.

## Setup status

**Country methodology and technical foundation: complete and approved.** The Austrian Country Profile, Content Standard, shared-compatible schema, location-type dictionary and operational rework/audit prompts are aligned. Official source authorities and claim-specific source routing are documented.

The next execution stage is to populate the agreed geographic-only PLZ sequence and prepare the JSON working files on GitHub. The sequence scaffold is currently empty by design; this is a data-preparation stage, not an unresolved methodology or approval decision. No claim is made that Austrian production records have already been reworked, audited, converted to V5 or published.

## Core files

- `schema.json` — approved shared TRAVEL record structure. It matches the Czech technical schema, with the Austrian four-digit PLZ pattern and country-specific descriptions.
- `location_types.json` — country-local copy of the shared 130-entry controlled fact-location type dictionary. Its identifiers and order match the Czech dictionary and the schema enum.
- `COUNTRY_PROFILE.md` — approved Austrian postal, geographic, administrative and source-authority specification.
- `CONTENT_STANDARD.md` — approved TRAVEL editorial, research, evidence, geographic, translation and production-lifecycle standard adapted to Austria. PLZ is the content layer; administrative divisions are supporting search metadata.
- `prompt_rework.md` — approved operational instructions for full research and rework, including mandatory Austrian authority routing.
- `prompt_audit.md` — approved, separate final-audit instructions and publication gates.
- `sequence.json` — canonical Austrian geographic-only PLZ inventory and work order. It is currently an empty preparation scaffold and is the next item to populate.
 
## Production unit and inclusion rule

One Austrian four-digit geographic PLZ is one project indexing/content unit. Preserve the complete four-digit code as a string. Do not split it into records for individual streets, buildings, house numbers or other tiny postal subdivisions. Research the full defensible geographic scope of the selected PLZ and include relevant discoveries within that scope. Where a code covers several localities, represent that coverage without creating duplicate micro-records.

**Geographic PLZ only:** include a code only when reliable evidence establishes that it identifies a real geographic delivery area or territory that can be researched as a place. Exclude PO-box/Postfach-only codes, company-specific or institution-specific codes without their own geographic territory, post-office/branch codes, sorting and distribution-centre codes, and other purely operational or non-geographic codes. A company located inside an ordinary geographic PLZ does not make that PLZ a company-specific code.

Do not assume that a PLZ has a precise polygon. If official sources establish only associated municipalities, localities or address points, record only that supported relationship. Never invent boundaries or assign every place in a municipality to a PLZ without evidence.

## Source access policy — online first

Use authoritative public online sources as the default research method. Do not create a bulk-download pipeline or maintain local copies of national datasets merely for convenience. Consult official online registers and search interfaces directly; use an official downloadable file only when a required fact cannot be reliably established online or when a reproducible comparison genuinely requires it. Record the exact source, relevant page/dataset and verification date.

## Approved data workflow

`GitHub preparation → Rework → Audit → V5 → Published on GitHub → copy to Neon`

GitHub is the authoritative working and publication source. Rework and audit are performed against GitHub working records. Failed records return to rework. Only records that pass the final audit and V5 preparation may be marked `published`. Neon receives the published GitHub copy and is not used as an alternative editing source.

## Next execution stage

1. Populate `sequence.json` using the already agreed geographic-only PLZ inventory and selection rules.
2. Prepare the JSON working files against the approved schema.
3. Run the full rework and separate final audit.
4. Prepare V5, publish the approved records on GitHub and copy the published records to Neon.

The country-level methodology, schema compatibility, source authorities and operational workflow are settled. The remaining steps above are execution of the approved process, not pending design decisions.
