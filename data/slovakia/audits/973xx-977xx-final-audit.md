# Slovak final audit — 973xx–977xx

- Audit date: 2026-11-24
- Canonical repository: `Wildwavestylez/travel`
- Audit instructions: `data/slovakia/prompt_audit.md`
- Supporting standards: `data/slovakia/schema.json`, `data/slovakia/CONTENT_STANDARD.md`, `data/slovakia/sequence.json`, `data/slovakia/database_index.json`
- Scope: all 40 postcode records explicitly present in `data/slovakia/sequence.json` with numeric values from 97300 through 97799. No postcode was added to or removed from the sequence.
- Scope inventory: 97401, 97404, 97405, 97409, 97411, 97602, 97603, 97611, 97613, 97631, 97632, 97633, 97634, 97637, 97639, 97644, 97645, 97646, 97652, 97653, 97655, 97656, 97657, 97661, 97662, 97663, 97664, 97666, 97667, 97668, 97669, 97671, 97673, 97675, 97681, 97696, 97697, 97698, 97701, 97703.
- Inventory result after publication: 40 records; 271 facts in the 38 complete records; 38 are `published` at `data_version = 5`; 2 remain `placeholder` (97653 and 97671).
- Audit result: **PASS WITH DOCUMENTED EXCEPTIONS**.
- Publication: explicitly authorized by the user after the audit. All 38 complete records were set to `status = published` and `data_version = 5`; the two placeholders were excluded.
- Sequence: unchanged.
- Database Viewer index: all 40 postcode entries match the canonical records' `city` and `status`. No index write was necessary because those fields did not change and the read-back comparison found no mismatch.

## Completed checks

- Read the Slovak audit prompt and checked the schema, Content Standard, sequence and Database Viewer index.
- Fetched and checked all 40 canonical records.
- All 40 records pass the implemented schema/structure validation after the corrections below. No duplicate fact IDs or invalid category/map-category/location enum values were found.
- All seven language branches (`cs`, `de`, `en`, `es`, `fr`, `it`, `nl`) exist in each non-placeholder record. Translation fact IDs and order match the Czech source. `translations.cs` matches the root Czech `facts` title and text exactly.
- All fact-level source URLs and all non-null `location.source` URLs are present in the record-level `sources` registry.
- No obvious Czech-language contamination was detected in the non-Czech translations during the lexical scan. This is a screening check, not a substitute for native-speaker stylistic proofreading.
- Existing non-null map coordinates were not blanket-rechecked or moved. Fifteen previously null locations have now been given responsible exact, approximate, historical-approximate or area-representative points. The seven new facts below also received map locations. Four further nulls were resolved in the follow-up location pass using the fallback hierarchy in `prompt_rework.md` and `prompt_audit.md`.
- Cross-postcode review of the newly added subjects and the related records found no duplicate story requiring reassignment. In particular, the Špania Dolina village story is distinct from the Donovaly fact about the route of the Špaňodolinský water system; Samo Chalupka is distinct from Ján Chalupka; the Kalište memorial story is distinct from the Donovaly and Heľpa SNP stories.

## Major-area coverage review

The additional coverage survey identified the following important omissions in the existing records. They have now been added as sourced, translated facts:

- **97401**
  - `fact_005` — Matej Bel, his work at the Banská Bystrica evangelical grammar school and the memorial plaque at Dolná 47.
  - `fact_006` — Banská Bystrica as the principal political and military centre of the Slovak National Uprising, with the SNP Memorial and Museum as the key institution of remembrance.
  - `fact_007` — the 1861 Vienna Memorandum prepared in Banská Bystrica by Štefan Moyses and Karol Kuzmány.
  - `fact_008` — Špania Dolina's copper-mining heritage, the Thurzo–Fugger enterprise, the klopačka and the historic mining water system.
- **97405**
  - `fact_004` — Radvanský jarmok, regular markets documented from the 14th century, the 1655 privilege from Emperor Leopold I, the first fair under the name Radvanský jarmok in 1657 and its continuing intangible-heritage tradition. The point is the historic pilgrimage anchor in Radvaň; the story is assigned by its historical origin, not by the present-day city-fair venue.
- **97611**
  - `fact_006` — Kalište, the burned settlement, its role in the so-called Partisan Republic and the SNP Museum memorial area.
- **97681**
  - `fact_009` — Samo Chalupka, his life and work in Horná Lehota, the memorial room, trail and grave.

Already-covered major subjects were checked for overlap, including the Hronsek UNESCO wooden church, Čiernohronská forest railway, Dobročský primeval forest, the Heľpa folklore festival, Donovaly's SNP history, the Kremnička and Nemecká wartime memorials, and major local figures such as Jozef Murgaš, Jozef Gregor Tajovský, Jozef Dekret Matejovie, Ján Chalupka and Karol Kuzmány. No further essential missing subject within the 40-code sequence was established in this pass.

### Postal-code scope findings

- The 40-code sequence was compared with the regional postcode list published by SHMU. The only listed code not present in the geographic sequence is **97651**.
- A historical postal-partner listing identifies 97651 as a **Pošta Partner** code for Horná Lehota, while the municipality's current official contact address uses **97681**. The locality and the Samo Chalupka story are therefore covered under 97681; no separate 97651 geographic record was created.
- For **Špania Dolina**, the current municipal contact page uses **97401**, which is also the code shown in the SHMU regional list. Some tourism/third-party entries show **97601** (and some map listings show **97415**). A 2009 Pošta Partner register confirms that a partner post office operated in Špania Dolina, although that register does not state its code; 97601 may therefore reflect a partner-office/service address rather than the municipality's general geographic code. The current municipal address and regional list were preferred for the geographic assignment. The discrepancy is documented rather than silently propagated.
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
- 97668, `fact_008`: added an area-representative point at the documented locality Za Nihovo in the Heľpa cadastral area (48.79054, 19.98392). The pin is explicitly described as an orientation point, not the reserve boundary or centre.
- 97669, `fact_002` and `fact_008`: added an approximate point for the former ironworks at Nová Maša and an area-representative point for the archaeological coin find in the Pohorelá cadastral area.
- 97675, `fact_011`: added an approximate point for the Ráztocká hoľa reserve.
- 97675, `fact_012`: added the mapped summit of Obrštín as an area-orientation point for the Obrštín old-growth reserve; the text explicitly says this is not the reserve boundary or centre.
- 97696, `fact_001` and `fact_004`: added an area-representative point for Medzibrod's historic core and an approximate point for the memorial plaque at Námestie hrdinov SNP 2.
- 97696, `fact_003`: added Chata Baňa as a historical-approximate orientation point opposite the Murgaš adit portal; the pin is not presented as the precisely surveyed adit entrance.
- 97697, `fact_001`, `fact_002` and `fact_004`: added an area-representative point for Nemecká's historic settlement and lace-trading stories, and an approximate orientation point at the Dubová industrial site's main gate for the refinery story.
- 97697, `fact_006`: added the municipal office in Nemecká as a public historical-approximate orientation point; the archaeological site is stated to lie about 1.5 km north, so the office pin is not misrepresented as the site itself.
- 97703, `fact_003`: added an approximate orientation point at the Mazorníkovo, SAD stop by the roundabout below the monument. The Czech and translated texts now distinguish this orientation point from the exact monument location.
- 97646, 97652 and 97655: added the already-used location source URLs to both the fact source lists and the record-level source registries.

### Locations intentionally left null

Five facts remain null after applying the full location fallback hierarchy. These are not unresolved routine omissions: the available evidence still does not justify a meaningful point inside the correct postcode/cadastral section. The exact remaining cases are:

- 97673, `fact_010`: Hnilecká jelšina spans Telgárt, Vernár, Stratená and Dobšiná. The public NAPANT material identifies the river floodplain and cadastral areas, but the specific Telgárt section is not georeferenced. Coordinates for the reserve's other sections were deliberately not reused.
- 97675, `fact_013`: the legal designation of PR Pralesy Slovenska–Špíglová identifies part of cadastral parcel 1566 and includes an official boundary map, but the available public material does not provide a reliable coordinate for a point inside that polygon. No parcel-map pixel was converted into guessed coordinates.
- 97696, `fact_005`: PR Mačková is documented around elevation point 625 m and by forest-stand boundaries, but no reliable coordinate for a point inside the reserve was established.
- 97696, `fact_006`: the municipality identifies the Vyvieranica resurgence at Baništia and a public event venue called Strážny domček Vyvieranica, but the exact springhead/feature point is not georeferenced. The venue was not substituted for the spring without proof of spatial identity.
- 97697, `fact_008`: the Hydrocentrála Dubová has a regulatory operating address (Janka Kráľa 575), but a reliable coordinate for the plant footprint or a clearly identified orientation point at that address was not verified. The refinery gate and the settlement centre were not substituted.


## Database index and lifecycle

- `database_index.json`: 40/40 entries match the corresponding record's `city` and `status`; no changes required.
- `sequence.json`: unchanged; no inferred or new postcode was added.
- All 38 complete records are now `published` with `data_version = 5`.
- Placeholders 97653 and 97671 remain `placeholder`.
- All 38 complete records were published as V5; placeholders 97653 and 97671 remain unchanged. The generated Explorer manifest/tile workflow remains a separate GitHub Actions process.

## GitHub record read-back

The following are the latest record commits identified in repository history and the current record blob SHAs after read-back:

| PSČ | Latest commit | Current blob SHA |
|---|---|---|
| 97401 | `4a275ea1d1e5fe3a1d62c81a45d1b6d4e59be989` | `8a9547778c756199ef970b3fa478dbe3642088cc` |
| 97405 | `17856b7f54ee4eff2e06110cb5af6f1d4f5470fd` | `85a29f12c37444662acd19fa2525068021d67265` |
| 97611 | `3e2abe7a646adc72e3863e1d1d16ad76c70c7957` | `de711207da55f2fed4af4d674dee5cddbfbc7700` |
| 97644 | `0a6f0d250d82a85751ee911514f4d93a01364a7f` | `32bbef13a6bc28581c1649b3c970d31ad8be4e6b` |
| 97646 | `37c3fb4e73c8e4ea6c0ad6e339adf201d612fd34` | `58ab381b8d0ccb9284176490168253bdc453f32a` |
| 97652 | `19152bdb0258d99b191d89607b1cedd8f8beee28` | `5312341ed58194e476f17a1e964509788a1688f2` |
| 97655 | `dee1dcf570a54fb306f4b8dc5ea762aeb9b394c4` | `0572f4844cf683ca1a6559036ed4d55ec41064ec` |
| 97668 | `59819c88ff29d301f718a7242d7577756a0f2b2b` | `cd047f5e848bbfd7127bf26f546afd1cdf5be9cf` |
| 97669 | `11fddc93d25f606f208165d054c9e97636788033` | `0b76b364d5cc1fb9b46f66a043485c6f902e78a6` |
| 97675 | `5c525ba524b28dda6ec923c1bfb466d084a83a40` | `5ca96a869a05536daaed304499fe032c6b1001cf` |
| 97681 | `8c58a57a27250b0185081278ec448eb2daa268f8` | `a92cf66e74affb1c6227a2d106e03bc0fedcb0ac` |
| 97696 | `52b71106d36a1a71c054a3d0e201145bdbc32e55` | `11acba693b4b0f0bc50cd94e60f97a871ddbddca` |
| 97697 | `d07baee1a22951468de12ee66e8f3d9d325346de` | `1cfcbd6aefb15f8533d76a53e8107654c031003f` |
| 97703 | `8e87e28917fd88921656e7b13fb2833862045be3` | `f184cf3b8151030590d05ee87978643b33e26b4a` |

## Reference sources for scope and coverage decisions

- [SHMU regional postcode list](https://www.shmu.sk/File/virgo/Zoznam_PSC.pdf)
- [Pošta Partner – historical listing for Horná Lehota, 97651](https://www.postoveznamky.sk/posta-partner-nova-sluzba-slovenskej-posty)
- [Horná Lehota – official municipal page and Samo Chalupka](https://www.horna-lehota.sk/obec-2/osobnosti-obce/)
- [Špania Dolina – official municipal contact page](https://www.spaniadolina.sk/kontakt/)
- [Špania Dolina – conflicting tourism listing](https://slovakia.travel/en/spania-dolina)

---


## Post-audit publication and Neon synchronization — 2026-11-24

- User explicitly authorized the completed audited scope to be published as V5 and copied to the Slovak Neon production mirror.
- GitHub canonical records: 38/38 complete records updated to `status: "published"` and `data_version: 5`; every changed file was fetched back and its postcode, status and version verified.
- Excluded by design: placeholders `97653` and `97671`; both remain empty `placeholder` records and were not assigned a data version.
- `database_index.json`: updated the 38 matching status entries; read-back verified 38 published and 2 placeholders in this scope. Sequence and city values were preserved.
- Neon destination: project `Europe Explorer` (`dry-rain-69965329`), database `neondb`, table `public.slovakia_cap_records`.
- Neon synchronization: 38 idempotent upserts completed, keyed by postcode. Existing `created_at` values were preserved; `updated_at` refreshed. Each batch was read back and its full JSONB record compared structurally with the canonical GitHub JSON.
- Final Neon scope query: exactly 38 requested postcodes returned; all have `workflow_status = published`, `record.status = published` and `record.data_version = 5`. No placeholders or out-of-scope postcodes were synchronized in this operation.
- GitHub remains the canonical source of truth; Neon is the production mirror.
