# Slovak final audit — 97101–972xx

- Audit date: 2026-11-23
- Canonical source: `Wildwavestylez/travel` (GitHub)
- Audit instructions: `data/slovakia/prompt_audit.md` v1.1
- Scope: all 32 postcode records explicitly present in `data/slovakia/sequence.json` matching `97101` and `972xx`; no postcode added or removed.
- Scope inventory: 97101, 97201, 97202, 97205, 97211, 97212, 97213, 97214, 97215, 97216, 97217, 97221, 97222, 97223, 97224, 97225, 97226, 97227, 97228, 97229, 97231, 97232, 97241, 97242, 97243, 97244, 97245, 97246, 97247, 97248, 97251, 97271.
- Inventory result: 32 records; 222 facts; 0 placeholders; 32 initially validated; 0 initially published.
- Audit result: `PASS` for all 32 records.
- Authorized publication result (2026-11-24): all 32 audited records set to `data_version: 5` and `status: published` after the user explicitly authorized V5 publication.
- The derived Database Viewer index was updated for the same 32 records; all other postcode entries and sequence order were preserved.
- The Slovakia Explorer generation workflow completed successfully on 2026-11-24 (run `45292935419`): `data/slovakia/explorer_index.json` now reports 162 published V5 records and 989 fact map points; all 32 audited postcodes are present. The Pages deployment also completed successfully (run `45292935979`).
- During the full-sequence Explorer build, two pre-existing records outside this audit scope (`97655` and `97656`) were found to be missing the required root `status` field even though the Database Viewer index already classified both as `validated`. Only the missing lifecycle field was restored on each record; their content, facts, translations and version metadata were not changed. Both remain `validated` and are not included as newly published records by this audit.

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

## Location corrections completed in this continuation

The following 29 fact locations were filled with explicit source-backed exact, approximate, area-representative or historical-approximate points. Each changed record was fetched before writing, updated at its canonical path, fetched again and checked for unchanged `validated` status and unchanged version metadata. Its `database_index.json` city/status entry was then synchronized and read back.

- 97211: fact_005 — Lazany historic-settlement orientation point; exact location of former poorhouse house no. 145 remains unknown.
- 97212: fact_004 — Via Magna route orientation point; fact_006 — municipal office orientation point for the two historic settlements; fact_007 — present-day Marian chapel location in Brezany.
- 97213: fact_006 — Vyšehradné settlement orientation point for the Mendel and Richter houses.
- 97214: fact_001, fact_002, fact_003 — Tužina official settlement-centre coordinate; the old mill/brewery position remains explicitly approximate.
- 97216: fact_005 — former Baťa/Tatra furniture industrial complex at Pravenec 419; fact_007, fact_008 and fact_009 — Poluvsie historic-settlement orientation points (not falsely presented as the exact church or Števke house locations).
- 97221: fact_002, fact_003 — historic-approximate village orientation points for finds recorded only by house numbers; fact_007 — settlement orientation point for local fujara-making tradition.
- 97222: fact_006 — Horné Vestenice settlement orientation point for the Croatian merchants’ cross; exact roadside-cross position remains unverified.
- 97223: fact_003, fact_006, fact_007 — Dolné Vestenice settlement orientation points with honest accuracy; fact_008 — VEGUM industrial site at Gumárenská 337.
- 97224: fact_001 — Diviacka Nová Ves settlement orientation point; fact_006 — Vrbany local-settlement orientation point.
- 97227: fact_002 — Dobročná locality orientation point; the exact medieval mine position remains unknown; fact_005 — Liešťany orientation point for the three-chapel group across Liešťany, Lomnica and Dobročná.
- 97228: fact_005 — Valaská Belá settlement orientation point for embroidery tradition; fact_006 — approximate centre of the Rysia protected area; fact_007 — Podskalie locality orientation point near the Belanka stream, not the exact gorge; fact_008 — Škrípov (Studienka) locality orientation point near the documented execution site and memorial.
- 97229: fact_001 — Čavoj settlement orientation point; exact historic mine locations remain unknown.

No fact IDs, fact prose, source lists, primary postcode assignments, record status or version metadata were changed by these location repairs. All records remain `validated`.


## Open items — REVIEW REQUIRED

### Missing fact locations

<escape>There are currently no facts with `location: null` in the 32-record audit scope.</escape> Sixty fact locations have been repaired or assigned a documented fallback point and read back from GitHub. All affected Database Viewer index entries were checked and their `city` and `status` values already matched the canonical records. The location hierarchy in the Slovak Content Standard has been applied: exact object/site where established, then a meaningful point within an extended site, then a clearly named public orientation point when the historic location cannot be responsibly pinned. No postcode representative point was copied automatically and no coordinates were invented.

| Postcode | Facts with null location |
|---|---|
| — | None |

### Additional location corrections — batch 97231–97245

Fourteen fact locations were added across seven records and verified by GitHub read-back:

- 97231: fact_001 — Ráztočno historic-settlement orientation point for the medieval trade route and toll station; exact archaeological/toll-station position is not established. fact_004 — Jalovec settlement orientation point for the Huňov glassworks and Jozef Lenhart; exact glassworks position is not established.
- 97232: fact_001 — Chrenovec settlement orientation point for the two historical settlements; fact_004 — Brusno orientation point for the relocated Immaculata column (not a claimed exact monument coordinate); fact_005 — Chrenovec orientation point for the 1864 Sunday-school library, whose building is unknown.
- 97241: fact_003 — Koš settlement orientation point for the mining-driven destruction and transformation of the village. fact_001 (Katký kopec archaeology) and fact_004 (Peter Tvrdý's rectory residence) were subsequently given clearly named public orientation points; neither pin is represented as the exact archaeological site or rectory.
- 97242: fact_001 — municipal-office orientation point for the union of Malá and Veľká Lehota; fact_003 — Chata Smrečina orientation point near the bunker and field hospital (the hospital is approximately 250 m away); fact_005 — Chata Smrečina orientation point for the Sekaniny recreation area. fact_002 (former Hôrka open-pit mine) was subsequently given a clearly named public orientation point in Lehota pod Vtáčnikom; it is not represented as the exact mine location.
- 97243: fact_007 — Zemianske Kostoľany settlement orientation point for Tobiáš Masník's birthplace; the exact birth house is not identified. fact_006 (1965 ash-pond failure) was subsequently pinned to the exact memorial plaque commemorating the disaster, not to the unverified original breach point.
- 97244: fact_004 — Dolný Kamenec orientation point for the former paper mill at Pod Brehy; fact_006 — Dolný Kamenec orientation point for the St. Vendelín statue, not its exact position; fact_007 — Dolný Kamenec orientation point for the shared historical seal of both Kamence.
- 97245: fact_005 — Bystričany settlement orientation point for the first mill on the Bystrá stream; exact mill position is not documented.

The added points use explicit orientation-point names and honest `area_representative`, `approximate` or `historical_approximate` accuracy. No fact text, fact ID, fact-level source list, primary postcode assignment, status or version metadata was changed. All seven records remain `validated`; their existing Database Viewer `city` and `status` entries were checked and already matched.

### Additional location corrections — batch 97246–97251

Eight fact locations were added across three records and verified by GitHub read-back:

- 97247: fact_001 — exact mapped location of the Church of St. Stephen in Oslany; fact_002 and fact_003 — Oslany historic-core orientation points for the town's guild history and the 1683 Ottoman attack; fact_005 — Ľubianka locality orientation point, not falsely presented as the exact church or Lourdes grotto.
- 97248: fact_002 — Horná Ves village-centre orientation point near the former manor complex for the St. Vincent Ferrer chapel; fact_004 — Horná Ves settlement orientation point for local craft history; fact_006 — official Radobica municipal-office point as an orientation point for the settlement and its local parts. fact_005 (Dubový diel partisan bunkers) was subsequently assigned a clearly named public orientation point in Horná Ves; it is not represented as the exact bunker site.
- 97251: fact_001 — Handlová settlement orientation point for the founding story; the exact original Krásny Les site remains unlocated. fact_013 (Pstruháre archaeological locality) was subsequently assigned a clearly named orientation point within the Pstruhárska area; it is not represented as the exact archaeological site.

The added points use explicit orientation-point names and honest accuracy labels. No fact text, fact ID, fact-level source list, primary postcode assignment, status or version metadata was changed. All three records remain validated; their existing Database Viewer city and status entries were checked and already matched.

### Additional location corrections — fallback hierarchy batch 97222–97251

The final nine previously null fact locations were resolved using the fallback hierarchy from the Slovak audit and rework prompts:

- 97222 fact_002 — Račice public orientation point for the hillfort traditionally called Zámok/Drahý; not the exact hillfort position.
- 97223 fact_004 — Dolné Vestenice municipal-office orientation point for the Hradová hillfort. The Archaeological Institute identifies the site at Hradová, elevation point 810, but the available source did not provide a coordinate suitable for a precise pin.
- 97241 fact_001 — Koš municipal-office orientation point for Katký kopec; the archaeological study places the hill north of the village but does not establish a defensible exact coordinate. fact_004 — parish church orientation point for Peter Tvrdý's rectory residence; the rectory itself is not separately located.
- 97242 fact_002 — public tourist orientation point in Lehota pod Vtáčnikom for the former Hôrka open-pit mine, identified by the university study at the western edge of the village; the pin is not presented as the exact mine.
- 97243 fact_006 — exact memorial plaque commemorating the 1965 ash-pond disaster; this is the memorial location, not a claim that the original dam breach occurred at the plaque.
- 97246 fact_004 — Čereňany municipal-office orientation point for the prehistoric hillfort reported in the municipality's surroundings; not the exact archaeological site.
- 97248 fact_005 — Horná Ves public tourist orientation point for the partisan base at Dubový diel; the exact bunker coordinates remain unverified.
- 97251 fact_013 — Pstruhárska-area orientation point within the Pstruháre locality for the archaeological story; not the exact findspot.

All fallback names explicitly identify the mapped public point rather than claiming it is the exact historical subject. Accuracy values are marked `historical_approximate` or `approximate` as appropriate. The exact memorial pin in 97243 uses `exact` for the memorial object only. Two pre-existing location-source URLs in 97222 and 97223 were also added to their top-level source registries after the integrity check found them missing.

All eight affected records remain `validated`, with no `data_version` changes. Their Database Viewer index rows were checked and already matched the canonical `city` and `status` values. No fact text, fact ID, primary postcode assignment or translation was changed.

### Postal-geography evidence — completed 2026-11-24

The four previously open records have now been checked against official municipal/statistical evidence, physical geographic context and an independent comprehensive Slovak postcode list. All four now have `verification.geographic_test_data = true`; the evidence and checked date (2026-11-24) were saved in the canonical JSON records and verified by GitHub read-back.

| PSČ | Geographic evidence checked | Result |
|---|---|---|
| 97211 — Lazany | Official Lazany development programme identifies PSČ 972 11; official Poruba basic information independently identifies PSČ 972 11; the Parcelforce Complete Postcode List for Slovakia (Apr 2020) lists both Lazany and Poruba under 972 11. The record's representative municipality Lazany is defensible; research scope includes Poruba. | Geographic code and locality assignment corroborated; no delivery polygon claimed. |
| 97212 — Nedožery-Brezany | Official Community Plan 2023–2027, citing ŠÚ SR, explicitly gives PSČ 972 12 and administrative hierarchy; official municipal address uses 972 12; the Parcelforce list groups Brezany, Nedožery and Nedožery-Brezany under 972 12. | Geographic code and representative municipality corroborated; no delivery polygon claimed. |
| 97215 — Kľačno | Official municipal contact page identifies the physical municipal address as Kľačno 326, 972 15; official geographic profile identifies the settlement centre and surrounding geography; the Parcelforce list identifies Kľačno under 972 15. | Geographic code and representative municipality corroborated; no delivery polygon claimed. |
| 97216 — Pravenec | Official Pravenec Community Plan 2025–2029, citing ŠÚ SR, explicitly gives PSČ 972 16 and administrative hierarchy. The official Poluvsie development plan also gives 972 16 and explicitly states that postal services for Poluvsie are provided by Slovenská pošta from Pravenec; official municipal addresses and the Parcelforce list corroborate Pravenec and Poluvsie under this code. | Geographic code and representative municipality Pravenec corroborated; no delivery polygon claimed. |

The official Slovenská pošta postcode-finder page was consulted, but its interactive per-query result was not available in an extractable form in this audit. This limitation is recorded in each record's `verification.plz_source`; it is not represented as a direct machine-readable Slovenská pošta result. The classification is supported by the combined official municipal/ŠÚ SR evidence and the independent postcode list. No exact postal-delivery boundary or postcode polygon is asserted; the audit prompt does not require one. No material conflict was found.

Record updates:
- 97211 commit `872aba74cf84945200cc22b3e979c362e0161197`; blob `04fcca653544da2ffe977269c4a0a48f408251c4`.
- 97212 commit `9a790992d042a6d1d0fb9bd0642503949f869f90`; blob `383864d947cc7fa35337121f5af40f33522841a6`.
- 97215 commit `30810aead23643e5930a39410d53b109f59901f3`; blob `d182ae4dbd128a714ebf14c755de3ea43d3e3ff4`.
- 97216 commit `8a3c43ad0faa7a4c53cbca8bebd76e3038b34124`; blob `bbc45f8a19d33314332cee11ab65ff09b06a9136`.

Read-back confirmed all four records remain `validated`, retain unchanged version metadata, have `geographic_test_data = true`, and have no null fact locations. Their Database Viewer `city` and `status` entries already matched the canonical records; no index update was needed. `access_point_verified` remains false because no separate access-point verification was part of this audit.

### Record-level results

- `PASS` on structural/schema, language alignment, source-reference and map-category checks: all 32 records.
- `PASS` on geographic postal assignment and representative municipality checks: all 32 records.
- No unresolved material audit blocker remains.
- Overall block result: `PASS`. All 32 records have now been published as V5 under the user's explicit instruction. Neon synchronization and Dropbox backup are separate downstream steps.

## Version, publication and downstream systems

- No record had a `data_version` property; no version value was added or changed.
- No record status was changed to `published`; audit-only instruction does not authorize publication.
- Neon was not modified. It is only a production mirror after explicit V5 + published authorization.
- Dropbox backup was not performed. Per the Slovak prompt, it is the final operation and requires the user's explicit instruction.
- GitHub remains canonical.

## Next action

The 32-record final audit is complete and passes. All fact locations have a non-null evidence-backed point or a justified public orientation point, and all postal-geography checks are documented. Records remain `validated` pending an explicit publication instruction. Preserve all fact IDs, source URLs, primary assignments and version metadata; do not publish V5, sync Neon or create a Dropbox backup without authorization.
