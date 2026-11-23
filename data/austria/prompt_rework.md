# TRAVEL — AUSTRIA PLZ RESEARCH / REWORK PROMPT

## Authority, completeness and operating contract

This is the complete, approved Austrian research and rework instruction. It defines the final production requirements and is used together with `schema.json`, `COUNTRY_PROFILE.md` and `CONTENT_STANDARD.md`. The shared TRAVEL record structure, Austrian four-digit PLZ format, geographic eligibility rules, source hierarchy, research depth, editorial requirements, translations and location rules are settled and apply immediately.

**Final-state rule:** every project specification must describe the finished system and the complete standard that applies now. Do not introduce preparation-only standards, provisional requirements, future additions, placeholders or wording that postpones a defined requirement. If a required project document or production structure is incomplete or conflicts with this contract, correct that source document first and then continue the actual work against the complete standard. Do not stop content work merely because an unrelated preparatory artifact is missing when the required facts can be responsibly verified from authoritative sources.

**Data lifecycle and file layout:** `sequence.json` is the canonical inventory and work order. Every sequence item has exactly one file at `data/austria/records/{postcode}.json`, using the same flat directory structure as Slovakia. Initially each file is a valid minimal placeholder containing only `postcode` and `status: "placeholder"` (optional `data_version` may be omitted or null). Rework replaces the placeholder with the complete schema-valid record and sets `status` to `validated` only after the full record is finished and validated. A separate final audit follows; passed records are prepared as V5, approved and then marked `published` on GitHub. Only published GitHub records are copied to Neon. Placeholder records are not content-audit or publication candidates. GitHub is the authoritative working and publication source; Neon is the published copy. These lifecycle gates govern record status; they do not make the specification, schema or standard provisional.

## Required inputs

Before processing any Austrian PLZ:
1. Read `data/austria/schema.json`.
2. Read `data/austria/COUNTRY_PROFILE.md`.
3. Read `data/austria/CONTENT_STANDARD.md`.
4. Read the canonical Austrian inventory/sequence and the existing record for the requested PLZ, if present. Treat the sequence as the complete production scope, not as a preparation task.
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
5. Establish the Bundesland and applicable political Bezirk/statutory-city context.
5. Select a defensible representative place and coordinates for the entire PLZ content unit.
6. Conduct broad German-language discovery across the full geographic scope, using the thematic checklist in the Content Standard.
7. Identify major and less obvious locally significant places, stories, people, heritage, nature, science, industry and visitor experiences.
8. Verify each candidate fact with sources competent for its claims.
9. Establish the actual physical location of each fact and its defensible relationship to the selected PLZ area.
10. Check for duplicate or competing primary assignments in neighbouring records.
11. Write concise but substantive Czech source-language facts and complete all seven required translations.
12. Build the complete JSON using only approved schema fields and controlled values.
13. Validate the entire JSON against the approved schema and all Content Standard requirements.
14. Save the complete reworked JSON to `data/austria/records/{postcode}.json`, replacing the minimal placeholder. Set `status` to `validated` only after the complete record passes schema and content validation. Never save a partial content record as `validated`.
15. Rework completion and publication are distinct lifecycle states. A completed rework is `validated`, not `published`. Do not mark a record `published` during rework; publication follows only after the separate final audit, V5 preparation and approval.

## Austrian authority routing — mandatory

Before researching a PLZ, use the complete source catalogue in `data/austria/COUNTRY_PROFILE.md`, section "Official authorities and source hierarchy". Select sources by the claim being verified; do not treat a general search result or a single authority as proof of every field.

Minimum source routing:
- PLZ existence, postal destination and postal purpose: Österreichische Post Postlexikon, its current PLZ directory and legend; cross-check the inventory with RTR's current monthly Open Data publication.
- Geographic address/PLZ relationship and coordinates: BEV Adressregister / official address search. Do not infer a polygon from address points.
- Municipality, political Bezirk, statutory city, Bundesland and identifiers: Statistik Austria current regional divisions and Gemeindeverzeichnis. These are search metadata only and do not determine the content boundary.
- Local geographic context: basemap.at, BEV and the relevant official provincial/municipal GIS.
- Monuments: Bundesdenkmalamt lists and applicable legal instruments; remember that the published Denkmalliste itself is not legally binding.
- UNESCO: Österreichische UNESCO-Kommission and UNESCO World Heritage Centre.
- Protected nature: Umweltbundesamt overview plus the competent provincial authority or protected-area administration for exact boundaries/status.
- Geology: GeoSphere Austria.
- History: Österreichisches Staatsarchiv, relevant Landes-/Stadt-/Gemeindearchiv, Österreichische Nationalbibliothek ANNO, museums and specialist literature.
- Visitor operation/access: official site operator or responsible institution; tourism portals are discovery aids, not substitutes for legal, historical or scientific evidence.

If the official sources disagree, record both values and their reference dates and resolve the exact issue. Never silently choose a convenient value. A postal Bestimmungsort is not automatically a municipality; a postal code listing does not prove geographic eligibility; a BEV address point does not prove a PLZ polygon.

## Source access policy

- Work online-first using official public registers, search interfaces and institutional sources.
- Do not build a bulk-download workflow or maintain local copies of national datasets by default.
- Use an official downloadable dataset only when a necessary fact or relationship cannot be reliably verified online, or a reproducible comparison genuinely requires it; document the publisher, dataset/version or reference date and access date.
- Keep evidence for factual claims separate from evidence for map coordinates. Use the source fields defined by the schema for each role.

## Non-negotiable rules

- Process geographic PLZ only; exclude PO-box-only, company/institution-only without territory, branch, sorting/distribution-centre and other purely operational/non-geographic codes.
- If geographic eligibility or territorial scope cannot be established, stop and report the uncertainty instead of guessing.
- Do not invent facts, source URLs, administrative relationships, postcode boundaries or coordinates.
- Do not split four-digit PLZ into address-level production records.
- Do not treat an address/contact postcode as proof of a site's physical PLZ.
- Do not use one fact's location as another fact's location.
- Do not copy the representative point into fact locations.
- Keep untouched inventory files as minimal `placeholder` records. A reworked record must be complete and schema-valid before setting `status: "validated"`. Do not audit or publish placeholders. Do not copy working or unaudited records to Neon. Do not mark a record `published` during rework; that state is reserved for records that have passed the final audit, V5 preparation and approval.
- If a material source or geographic conflict cannot be resolved, report it rather than guessing.

## Shared technical record contract — mandatory

The Austrian record uses the exact shared TRAVEL technical structure in `data/austria/schema.json`. Its object shape, field names, required fields, data types, controlled values, nested fact/source/location structures and seven-language translation structure must remain identical to the Czech origin. The only currently approved schema-level country difference is the Austrian four-digit PLZ pattern. Do not add, remove, rename or repurpose fields ad hoc.

### Stable fact IDs and translations

- Use stable IDs in the exact format permitted by the schema (currently `fact_001`, `fact_002`, etc.).
- Each fact ID must be unique within the record and must appear exactly once in every language branch.
- All seven languages (`cs`, `de`, `en`, `es`, `fr`, `it`, `nl`) must contain the same fact IDs in the same order.
- Translation must preserve meaning, names, dates, geographic relationships, factual nuance and priority. Do not add or omit claims in translation.
- Dutch must use standard Netherlands Dutch (`nl-NL`), natural and clear to readers in both the Netherlands and Flanders.

### Editorial and map categories

- Every fact must have exactly one `category` and exactly one `map_category`, using only values permitted by the Austrian schema.
- The shared 17 `map_category` identifiers and their assignment rules are defined in the shared technical section of `data/austria/CONTENT_STANDARD.md`. Do not invent new values or substitute `category` for `map_category`.
- `map_category` is language-neutral and is not copied into translations.
- The fact's editorial category, map category and physical `location.type` are three distinct classifications. Never infer one automatically from another.

### Fact locations and map pins

- Keep `representative_point`, `access_point` and each `facts[].location` independent.
- Use the map-location hierarchy in `data/austria/CONTENT_STANDARD.md`: exact object point where known; a defensible representative point inside a large site; a clearly labelled approximate public orientation point for a historical/local story when exact coordinates are unavailable; and `null` only when no responsible useful point can be established.
- Use only permitted `accuracy` and `location.type` values. The canonical location-type IDs are maintained in `data/austria/location_types.json` and must match the schema enum exactly.
- The location's `name` describes the actual point used, not a false claim of exact historical location. Its `source` must support the point's existence/location; sources for the story itself remain separate.
- Do not copy the PLZ representative or access point into a fact location unless it genuinely matches the fact-location rule.

### Sequence integrity

- `data/austria/sequence.json` is the canonical project inventory and work order for geographic-only Austrian PLZ.
- Every sequence item must be unique and must use the exact four-character string format.
- Only approved geographic PLZ may appear. Excluded PO-box-only, company/institution-only without territory, branch, sorting/distribution-centre and other non-geographic codes must not enter the sequence.
- Do not infer missing codes from numeric ranges or add codes during ordinary rework. Inventory changes require source verification and an explicit sequence update.
- Austria's current sequence format has no `groups` property. Do not invent or require `groups` unless the shared project architecture formally adopts it for Austria.

### Technical validation before save

Validate the complete JSON against `data/austria/schema.json`. Check all required fields, exact data types, allowed enums, no undeclared properties, four-digit string preservation (including leading zero), stable unique fact IDs, exact seven-language parity, source references, coordinate ranges and all fact-location values. Do not claim validation passed if any check was skipped or a tool could not perform it.
