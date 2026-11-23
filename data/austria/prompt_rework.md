# TRAVEL — AUSTRIA PLZ RESEARCH / REWORK PROMPT (working baseline)

## Status

Working operational draft only. Do not use for production until `schema.json`, `COUNTRY_PROFILE.md` and `CONTENT_STANDARD.md` have been reviewed and approved together, and the canonical storage workflow is settled.

## Required inputs

Before processing any Austrian PLZ:
1. Read `data/austria/schema.json`.
2. Read `data/austria/COUNTRY_PROFILE.md`.
3. Read `data/austria/CONTENT_STANDARD.md`.
4. Read the approved Austrian inventory/sequence and any existing record or progress ledger.
5. Confirm the exact PLZ scope assigned by the user.

## Geographic unit and eligibility gate

One complete four-digit Austrian PLZ is one content unit. Preserve it as a string. Do not split it into smaller records for individual addresses, buildings, streets or letter-level details.

**Process only geographic PLZ with a demonstrable geographic delivery territory.** Exclude PO-box/Postfach-only codes, company- or institution-specific codes without their own territory, post-office/branch codes, sorting/distribution-centre codes and other purely operational/non-geographic codes. A business using an ordinary geographic PLZ does not make that PLZ a company-specific code.

Before any content research, verify the code against official Austrian postal information and establish its geographic relationship using competent official geographic/administrative sources. If the geographic status or extent is unclear, stop and report the unresolved case; do not create a record or guess. Do not infer a boundary from the code digits, a postal-office address or an online directory label. A PLZ need not have a polygon: document only supported address-point, locality or municipality relationships.

Research the full defensible area associated with the selected PLZ. If the code relates to multiple settlements, include the relevant discoveries across that geographic scope without creating separate micro-records.

## Research workflow

1. Confirm the exact four-digit code and its inclusion in the approved geographic-only inventory.
2. Apply the eligibility gate: confirm from official online postal sources that the code is not PO-box-only, company/institution-only without territory, a branch, sorting/distribution-centre or other operational/non-geographic code.
3. Establish the actual geographic scope using official geographic/address and administrative sources. Do not assume a polygon exists.
4. Identify the associated municipality/municipalities and relevant localities using authoritative evidence.
4. Establish the Bundesland and applicable political Bezirk/statutory-city context.
5. Select a defensible representative place and coordinates for the entire PLZ content unit.
6. Conduct broad German-language discovery across the full geographic scope, using the thematic checklist in the Content Standard.
7. Identify major and less obvious locally significant places, stories, people, heritage, nature, science, industry and visitor experiences.
8. Verify each candidate fact with sources competent for its claims.
9. Establish the actual physical location of each fact and its defensible relationship to the selected PLZ area.
10. Check for duplicate or competing primary assignments in neighbouring records.
11. Write concise but substantive Czech source-language facts and complete all seven required translations.
12. Build the complete JSON using only approved schema fields and controlled values.
13. Validate the entire JSON against the approved schema and all Content Standard requirements.
14. Save only through the approved canonical storage workflow once that workflow is documented.

## Source access policy

- Work online-first using official public registers, search interfaces and institutional sources.
- Do not build a bulk-download workflow or maintain local copies of national datasets by default.
- Use an official downloadable dataset only when a necessary fact or relationship cannot be reliably verified online, or a reproducible comparison genuinely requires it; document the publisher, dataset/version and access date.

## Non-negotiable rules

- Process geographic PLZ only; exclude PO-box-only, company/institution-only without territory, branch, sorting/distribution-centre and other purely operational/non-geographic codes.
- If geographic eligibility or territorial scope cannot be established, stop and report the uncertainty instead of guessing.
- Do not invent facts, source URLs, administrative relationships, postcode boundaries or coordinates.
- Do not split four-digit PLZ into address-level production records.
- Do not treat an address/contact postcode as proof of a site's physical PLZ.
- Do not use one fact's location as another fact's location.
- Do not copy the representative point into fact locations.
- Do not create production data or change lifecycle states while the storage/publication decision is unresolved.
- If a material source or geographic conflict cannot be resolved, report it rather than guessing.
