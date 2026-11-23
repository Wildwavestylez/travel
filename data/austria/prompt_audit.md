# TRAVEL — AUSTRIA PLZ FINAL AUDIT PROMPT (working baseline)

## Status and separation

Working draft only. It becomes operational only after the Austrian schema, Country Profile, Content Standard and storage/publication workflow are approved.

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
3. Check the defensible geographic scope and associated municipality/locality relationships.
4. Verify Bundesland and political Bezirk/statutory-city context using official administrative sources.
5. Check representative place and coordinates.
6. Review fact locations for physical accuracy and connection to the PLZ content area.
7. Check source support for material factual claims.
8. Check all seven translations for completeness, factual fidelity and natural language.
9. Check duplicate or misplaced facts across the requested audit scope.
10. Validate the complete JSON against the approved schema.

For the entire requested area, check whether major nationally, regionally or internationally significant attractions, heritage, historical events, people or natural features are missing. This is a targeted audit check, not a reason to reduce the full research required during rework.

## Source access policy

Use official public online registers, search interfaces and institutional pages as the default. Do not require bulk downloads or local copies. If an official downloadable dataset is essential to resolve a discrepancy, record its publisher, version/publication date and access date.

## Audit outcomes

Do not invent or change lifecycle states until the approved Austrian storage and publication workflow defines them. Record each material issue, supporting evidence, exact affected field/fact and required correction. A record passes only when all applicable checks are supported and the complete record validates.

Never mark a record published, change a data version or modify production storage under this working draft.
