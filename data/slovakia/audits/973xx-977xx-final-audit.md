# Slovak final audit — 973xx–977xx

- Audit date: 2026-11-24
- Canonical repository: `Wildwavestylez/travel`
- Audit instructions: `data/slovakia/prompt_audit.md`
- Supporting standards: `data/slovakia/schema.json`, `data/slovakia/CONTENT_STANDARD.md`, `data/slovakia/sequence.json`, `data/slovakia/database_index.json`
- Scope: all 40 postcode records explicitly present in `data/slovakia/sequence.json` with numeric values from 97300 through 97799. No postcode was added to or removed from the sequence.
- Scope inventory: 97401, 97404, 97405, 97409, 97411, 97602, 97603, 97611, 97613, 97631, 97632, 97633, 97634, 97637, 97639, 97644, 97645, 97646, 97652, 97653, 97655, 97656, 97657, 97661, 97662, 97663, 97664, 97666, 97667, 97668, 97669, 97671, 97673, 97675, 97681, 97696, 97697, 97698, 97701, 97703.
- Inventory result: 40 records; 271 facts in the 38 non-placeholder records; 38 records remain `validated`; 2 remain `placeholder` (97653 and 97671); 0 published.
- Audit result: **PASS WITH DOCUMENTED EXCEPTIONS**.
- Publication: not authorized and not performed. No status was changed to `published`; no `data_version` was added or changed.
- Sequence: unchanged.
- Database Viewer index: all 40 postcode entries match the canonical records' `city` and `status`. No index write was necessary because those fields did not change and the read-back comparison found no mismatch.

## Completed checks

- Read the Slovak audit prompt and checked the schema, Content Standard, sequence and Database Viewer index.
- Fetched and checked all 40 canonical records.
- All 40 records pass the implemented schema/structure validation after the corrections below. No duplicate fact IDs or invalid category/map-category/location enum values were found.
- All seven language branches (`cs`, `de`, `en`, `es`, `fr`, `it`, `nl`) exist in each non-placeholder record. Translation fact IDs and order match the Czech source. `translations.cs` matches the root Czech `facts` title and text exactly.
- All fact-level source URLs and all non-null `location.source` URLs are present in the record-level `sources` registry.
- No obvious Czech-language contamination was detected in the non-Czech translations during the lexical scan. This is a screening check, not a substitute for native-speaker stylistic proofreading.
- Existing non-null map coordinates were not blanket-rechecked or moved. Eleven previously null locations were given responsible exact, approximate or area-representative points. The seven new facts below also received map locations.
- Cross-postcode review of the newly added subjects and the related records found no duplicate story requiring reassignment. In particular, the Špania Dolina village story is distinct from the Donovaly fact about the route of the Špaňodolinský water system; Samo Chalupka is distinct from Ján Chalupka; the Kalište memorial story is distinct from the Donovaly and Heľpa SNP stories.

## Major-area coverage review

The additional coverage survey identified the following important omissions in the existing records. They have now been added as sourced, translated facts:

- **97401**
  - `fact_005` — Matej Bel, his work at the Banská Bystrica evangelical grammar school and the memorial plaque at Dolná 47.
  - `fact_006` — Banská Bystrica as the principal political and military centre of the Slovak National Uprising, with the SNP Memorial and Museum as the key institution of remembrance.
  - `fact_007` — the 1861 Vienna Memorandum prepared in Banská Bystrica by Štefan Moyses and Karol Kuzmány.
  - `fact_008` — Špania Dolina's copper-mining heritage, the Thurzo–Fugger enterprise, the klopačka and the historic mining water system.
- **97405**
  - `fact_004` — Radvanský jarmok, its 1655 market privilege, first documented fair in 1657 and continuing intangible-heritage tradition. The point is the historic pilgrimage anchor in Radvaň; the story is assigned by its historical origin, not by the present-day city-fair venue.
- **97611**
  - `fact_006` — Kalište, the burned settlement, its role in the so-called Partisan Republic and the SNP Museum memorial area.
- **97681**
  - `fact_009` — Samo Chalupka, his life and work in Horná Lehota, the memorial room, trail and grave.

Already-covered major subjects were checked for overlap, including the Hronsek UNESCO wooden church, Čiernohronská forest railway, Dobročský primeval forest, the Heľpa folklore festival, Donovaly's SNP history, the Kremnička and Nemecká wartime memorials, and major local figures such as Jozef Murgaš, Jozef Gregor Tajovský, Jozef Dekret Matejovie, Ján Chalupka and Karol Kuzmány. No further essential missing subject within the 40-code sequence was established in this pass.

### Postal-code scope findings

- The 40-code sequence was compared with the regional postcode list published by SHMU. The only listed code not present in the geographic sequence is **97651**.
- A historical postal-partner listing identifies 97651 as a **Pošta Partner** code for Horná Lehota, while the municipality's current official contact address uses **97681**. The locality and the Samo Chalupka story are therefore covered under 97681; no separate 97651 geographic record was created.
- For **Špania Dolina**, the current municipal contact page uses **97401**, which is also the code shown in the SHMU regional list. Some tourism/third-party entries show conflicting codes (including 97601/97415); the current municipal address and regional list were preferred for this geographic assignment. The discrepancy is documented rather than silently propagated.
- The SNP Museum's public institutional address uses **97559**, which is not a separate entry in the current geographic sequence or the SHMU regional list. Its historical role is covered in the 97401 Banská Bystrica fact; no standalone 97559 record was created.

## Corrections saved

### New facts

- 97401: `fact_005`, `fact_006`, `fact_007`, `fact_008`
- 97405: `fact_004`
- 97611: `fact_006`
- 97681: `fact_009`

All seven new facts have Czech, German, English, Spanish, French, Italian and Dutch titles/texts, source references, valid categories and map locations.

### Existing record repairs

- 97644, `fact_004`: added a source-backed approximate point for the blacksmith's workshop at Mýto pod Ďumbierom 358. Restored the complete `translations.cs` entries for every fact; previously those entries contained IDs only.
- 97668, `fact_007`: added a village-centre orientation point for the archaeological finds in the Heľpa cadastral area.
- 97669, `fact_002` and `fact_008`: added an approximate point for the former ironworks at Nová Maša and an area-representative point for the archaeological coin find in the Pohorelá cadastral area.
- 97675, `fact_011`: added an approximate point for the Ráztocká hoľa reserve.
- 97696, `fact_001` and `fact_004`: added an area-representative point for Medzibrod's historic core and an approximate point for the memorial plaque at Námestie hrdinov SNP 2.
- 97697, `fact_001`, `fact_002` and `fact_004`: added an area-representative point for Nemecká's historic settlement and lace-trading stories, and an approximate orientation point at the Dubová industrial site's main gate for the refinery story.
- 97703, `fact_003`: added an approximate orientation point at the Mazorníkovo, SAD stop by the roundabout below the monument. The Czech and translated texts now distinguish this orientation point from the exact monument location.
- 97646, 97652 and 97655: added the already-used location source URLs to both the fact source lists and the record-level source registries.

### Locations intentionally left null

Nine locations remain null because the available sources do not establish a responsible point within the relevant postcode area. They were not assigned guessed coordinates:

- 97668, `fact_008`: Veľká Stožka is a multi-cadastral protected area; the exact Heľpa section is not reliably pinpointed by the available source.
- 97673, `fact_010`: Hnilecká jelšina is an elongated reserve spanning several cadastral areas; a reliable point within the Telgárt section was not established.
- 97675, `fact_012` and `fact_013`: the protected areas are described through parcel/boundary documentation, without a verified public map point suitable for a pin.
- 97696, `fact_003`: the historic mine is described in the Borovský potok valley, but the entrance or precise mine point is not mapped reliably.
- 97696, `fact_005`: the Mačková reserve is described by its area and elevation, but no reliable point for its boundary/centre was established.
- 97696, `fact_006`: the Vyvieranica spring is associated with the Baništia locality, but the exact springhead was not verified.
- 97697, `fact_006`: the Hradisko archaeological site is described on the southern spur of Čierny diel, but its exact position was not established; the mapped summit point is not a safe substitute for the site within this postcode.
- 97697, `fact_008`: the Dubová hydroelectric plant has an address reference, but its exact plant footprint was not verified on a reliable map.

## Database index and lifecycle

- `database_index.json`: 40/40 entries match the corresponding record's `city` and `status`; no changes required.
- `sequence.json`: unchanged; no inferred or new postcode was added.
- All 38 complete records remain `validated`.
- Placeholders 97653 and 97671 remain `placeholder`.
- No record was published, no `data_version` was added or changed, and no Explorer build or deployment was run.

## GitHub record read-back

The following are the latest record commits identified in repository history and the current record blob SHAs after read-back:

| PSČ | Latest commit | Current blob SHA |
|---|---|---|
| 97401 | `4a275ea1d1e5fe3a1d62c81a45d1b6d4e59be989` | `8a9547778c756199ef970b3fa478dbe3642088cc` |
| 97405 | `190b3ee6247716b48f4cf2a43894c57386c5707f` | `0bf41131a6662f2df520687d331e5ab931dc270c` |
| 97611 | `3e2abe7a646adc72e3863e1d1d16ad76c70c7957` | `de711207da55f2fed4af4d674dee5cddbfbc7700` |
| 97644 | `0a6f0d250d82a85751ee911514f4d93a01364a7f` | `32bbef13a6bc28581c1649b3c970d31ad8be4e6b` |
| 97646 | `37c3fb4e73c8e4ea6c0ad6e339adf201d612fd34` | `58ab381b8d0ccb9284176490168253bdc453f32a` |
| 97652 | `19152bdb0258d99b191d89607b1cedd8f8beee28` | `5312341ed58194e476f17a1e964509788a1688f2` |
| 97655 | `dee1dcf570a54fb306f4b8dc5ea762aeb9b394c4` | `0572f4844cf683ca1a6559036ed4d55ec41064ec` |
| 97668 | `d228c6a3931ac74bd2d314fa04f15c5a9bcb1946` | `3ba0f81e389e46436271456f4199a402f491bae8` |
| 97669 | `11fddc93d25f606f208165d054c9e97636788033` | `0b76b364d5cc1fb9b46f66a043485c6f902e78a6` |
| 97675 | `04ec18b9b4a791fe383a6c81a27185aa36d7f707` | `31fc37d87a4647786356a95678561730d2abfd05` |
| 97681 | `8c58a57a27250b0185081278ec448eb2daa268f8` | `a92cf66e74affb1c6227a2d106e03bc0fedcb0ac` |
| 97696 | `ad0a67366e22ae091c356f606bb74b5cf88c77f1` | `d99b14b0d1ea4ed5249c64d835b0f66f79611658` |
| 97697 | `805a3505cbd3c59e905d33d04b74fa894f4b0574` | `d3978d377e30f390efc3807754cf5aa49250a47d` |
| 97703 | `8e87e28917fd88921656e7b13fb2833862045be3` | `f184cf3b8151030590d05ee87978643b33e26b4a` |

## Reference sources for scope and coverage decisions

- [SHMU regional postcode list](https://www.shmu.sk/File/virgo/Zoznam_PSC.pdf)
- [Pošta Partner – historical listing for Horná Lehota, 97651](https://www.postoveznamky.sk/posta-partner-nova-sluzba-slovenskej-posty)
- [Horná Lehota – official municipal page and Samo Chalupka](https://www.horna-lehota.sk/obec-2/osobnosti-obce/)
- [Špania Dolina – official municipal contact page](https://www.spaniadolina.sk/kontakt/)
- [Špania Dolina – conflicting tourism listing](https://slovakia.travel/en/spania-dolina)

---
