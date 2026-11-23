# Slovak final audit — 97101–972xx

- Audit date: 2026-11-23
- Canonical source: `Wildwavestylez/travel` (GitHub)
- Audit instructions: `data/slovakia/prompt_audit.md` v1.1
- Scope: all 32 postcode records explicitly present in `data/slovakia/sequence.json` matching `97101` and `972xx`; no postcode added or removed.
- Scope inventory: 97101, 97201, 97202, 97205, 97211, 97212, 97213, 97214, 97215, 97216, 97217, 97221, 97222, 97223, 97224, 97225, 97226, 97227, 97228, 97229, 97231, 97232, 97241, 97242, 97243, 97244, 97245, 97246, 97247, 97248, 97251, 97271.
- Inventory result: 32 records; 222 facts; 0 placeholders; 32 initially validated; 0 initially published.
- Final lifecycle result: 32 remain `validated`; 0 published; 0 placeholders. No V5 publication or Neon sync was authorized by this audit-only instruction.

## Completed checks

- Read current Slovak audit prompt, schema, country profile, Content Standard, rework prompt and sequence.
- All 32 records fetched from their canonical GitHub paths.
- All 32 records pass the implemented structural/schema checks: 0 schema errors, invalid enum values, duplicate fact IDs or source URL references missing from the top-level source registry.
- All seven language branches exist in all records; translation fact IDs and order match the Czech source; `translations.cs` matches the Czech source facts.
- The map-category values in all records are valid under the current Slovak schema.
- Database Viewer index: all 32 `city` and `status` values match their canonical records; no index mismatches.
- Cross-postcode title/topic scan: no clear duplicate fact/story requiring reassignment was confirmed. The scan preserved established primary assignments and did not use postcode boundaries as hard editorial boundaries.
- Major-area coverage check: records include the defining Prievidza/Bojnice historic core and castle, Prepoštská prehistoric site, Piarist heritage, local historical events, railway/industrial heritage, Handlová mining and Carpathian-German history, Slovak National Uprising stories, archaeological sites, protected landscape and documented regional traditions. No clearly essential missing major subject was established in this audit pass.
- Existing non-null coordinates were not blanket-rechecked or moved.

## Correction saved

- Record: `97211`, `fact_001`, German translation title.
- Defect: Czech word `Kostel` remained in the German title.
- Correction: `Kirche Mariä Schnee und ihr älteres Kunsterbe`.
- GitHub record commit: `8212c11ff3522309df8ceae96fe4078672a56353`.
- GitHub record blob SHA after read-back: `915d020434417cccebb1515b567179b7e8c182c7`.
- Database index update commit: `9a72f985aeac24029ff6408ee0b94f75abdc1e44`.
- Read-back confirmed corrected title, unchanged `validated` status and unchanged version metadata.
- No other confirmed Czech/Slovak language contamination in the scanned fact prose and non-Czech translations was identified. Slovak official names and proper nouns were retained.

## Open items — REVIEW REQUIRED

### Missing fact locations

There are 60 facts with `location: null` in 23 records. These must be evaluated individually against the Slovak Content Standard location hierarchy. Do not copy the postcode representative point automatically. Where the story is genuinely area-level and has no exact site, use a justified municipal/public orientation point or `postal_area` point with honest accuracy; where a more specific site can be established, use it. Do not invent coordinates.

| Postcode | Facts with null location |
|---|---|
| 97211 | fact_005 |
| 97212 | fact_004, fact_006, fact_007 |
| 97213 | fact_006 |
| 97214 | fact_001, fact_002, fact_003 |
| 97216 | fact_005, fact_007, fact_008, fact_009 |
| 97221 | fact_002, fact_003, fact_007 |
| 97222 | fact_002, fact_006 |
| 97223 | fact_003, fact_004, fact_006, fact_007, fact_008 |
| 97224 | fact_001, fact_006 |
| 97227 | fact_002, fact_005 |
| 97228 | fact_005, fact_006, fact_007, fact_008 |
| 97229 | fact_001 |
| 97231 | fact_001, fact_004 |
| 97232 | fact_001, fact_004, fact_005 |
| 97241 | fact_001, fact_003, fact_004 |
| 97242 | fact_001, fact_002, fact_003, fact_005 |
| 97243 | fact_006, fact_007 |
| 97244 | fact_004, fact_006, fact_007 |
| 97245 | fact_005 |
| 97246 | fact_004 |
| 97247 | fact_001, fact_002, fact_003, fact_005 |
| 97248 | fact_002, fact_004, fact_005, fact_006 |
| 97251 | fact_001, fact_013 |

### Postal-geography evidence

Four records explicitly retain `verification.geographic_test_data = false`; the postal/geographic verification is therefore not complete enough to pass:

- 97211 — Lazany
- 97212 — Nedožery-Brezany
- 97215 — Kľačno
- 97216 — Pravenec

The records describe address evidence, but the geographic test flag is false and must not be changed to true without performing and documenting the required check. Keep these records `validated`.

### Record-level results

- `PASS` on the structural, language-alignment, source-reference and map-category checks: all 32 records.
- `REVIEW REQUIRED` for null fact locations: the 23 records listed above.
- `REVIEW REQUIRED` for postal-geography evidence: 97211, 97212, 97215, 97216.
- Overall block result: `REVIEW REQUIRED`; do not publish until all material open items are resolved and cross-postcode checks remain complete.

## Version, publication and downstream systems

- No record had a `data_version` property; no version value was added or changed.
- No record status was changed to `published`; audit-only instruction does not authorize publication.
- Neon was not modified. It is only a production mirror after explicit V5 + published authorization.
- Dropbox backup was not performed. Per the Slovak prompt, it is the final operation and requires the user's explicit instruction.
- GitHub remains canonical.

## Next action

Resolve the 60 missing fact locations individually and complete the geographic verification for 97211, 97212, 97215 and 97216. Re-read and validate only changed records, synchronize the corresponding `database_index.json` entries, then reassess the full block for publication eligibility. Preserve all fact IDs, source URLs, primary assignments and version metadata.
