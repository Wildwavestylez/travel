# TRAVEL — REWORK PROMPT FOR EXISTING SLOVAK POSTCODE RECORDS

## Version and authority

**REWORK PROMPT V1.0 — CZECH-METHOD BASED, SLOVAK NATIONAL IMPLEMENTATION**

Use this prompt together with the current:
1. `data/slovakia/schema.json`
2. `data/slovakia/COUNTRY_PROFILE.md`
3. `data/slovakia/CONTENT_STANDARD.md`

The schema defines the exact record structure, required fields, data types, enums and nullability. The Country Profile defines Slovak postal, geographic and administrative meaning. The Content Standard is binding for research, evidence, editorial quality, locations, translations and preservation. This prompt turns those requirements into an efficient operational workflow.

If any instruction conflicts with the current schema, Country Profile or Content Standard, do not silently choose a workaround. Stop the affected operation, identify the exact conflict and resolve it at document level. Never weaken a binding standard for convenience.

**Methodological basis:** this prompt deliberately follows the proven structure and safeguards of the current Czech rework prompt. German rework guidance may be used as a secondary operational reference where it improves queue continuity or efficiency, but it does not replace the Czech methodology. Only Slovak national authorities, administrative concepts, postal realities and Slovak schema values may be used for Slovak records.

## 1. Purpose, scope and protected boundaries

Rework existing Slovak geographic PSČ records into the current Slovak production standard. This is a complete research and editorial rework, not a mechanical conversion or a translation-only pass.

- Work only on the intended Slovak record in the existing production dataset.
- The production country discriminator is `country_code = 'SK'`.
- Update the existing record for its exact five-digit postcode; do not create duplicate rows or new postcode records during ordinary rework.
- Preserve the existing row identity and unrelated metadata.
- Do not modify Czech or German records, schemas, prompts, standards, sequence files or country data.
- Do not change database structure, tables, columns, RLS, triggers, permissions, application code or shared architecture.
- Do not create new fields, categories, enums, lifecycle states or language variants.
- Do not infer postcode polygons or claim polygon-level boundary certainty.
- Do not import Czech RÚIAN/ČSÚ procedures or German Deutsche Post/PLZ procedures.
- Do not treat the old record as authoritative. Existing facts are leads and working material, not guaranteed truth.

Keep useful verified facts. Correct, replace or remove false, weak, generic, duplicated, irrelevant, promotional or unsupported content. Add significant missing stories. Do not preserve the old fact count as a quota.

## 2. Slovak postal and administrative authority — mandatory

Use the source hierarchy in the Slovak Content Standard and Country Profile. Each authority is competent only for its own type of claim:

1. **Slovenská pošta** — primary postal authority for PSČ existence, geographic use, postal assignment, identification of the serving post office and distinction between geographic and special-purpose codes.
2. **Register adries SR (RAGEO), Ministry of Interior of the Slovak Republic** — address and address-point evidence; corroborates the physical placement of addresses, buildings and localities. Do not assume it is a complete authoritative register of postal delivery coverage.
3. **ŠÚ SR and official registers of territorial/spatial units** — official names and administrative relationships of kraje, okresy and obce.
4. **ÚGKK SR / official ZBGIS and national mapping resources** — geographic identification and coordinate corroboration.
5. **Official municipalities, regional authorities, national-park administrations, heritage institutions, museums, archives, universities and specialist institutions** — evidence for individual facts and their physical locations.

Never use one source to prove a claim outside its remit. A postal lookup does not by itself prove a tourist site's coordinates. An address point does not by itself establish the complete postal delivery area. A municipal website does not automatically prove which post office serves a PSČ.

### 2.1 Mandatory meaning of `city` — physical location of the serving post office

For every record, identify the actual post office serving the geographic PSČ and verify the municipality in which that post-office building is physically located.

- Set top-level `city` to exactly that one municipality/town.
- Example: if the serving post office is physically located in Snina, set `city: "Snina"`, even if the delivery area also includes Dolná nad Hornou or other localities.
- Do not select the first municipality in a list of localities served.
- Do not select the largest or most populous municipality in the delivery area.
- Do not select an arbitrary “main”, “representative” or best-known locality.
- Do not put all served municipalities or settlements into `city`.
- Do not infer the post-office municipality from the postcode digits or a search snippet.

The same physical post-office municipality determines the administrative fields:
- `county` = the official okres containing that municipality;
- `state` = the official samosprávny kraj containing that municipality;
- `district` = only a documented relevant part within that same municipality, where applicable; otherwise `null`.

Do not derive `county` or `state` from another municipality merely served by the post office. Do not put a neighbouring municipality in `district`.

**Important distinction:** the post-office municipality determines the administrative fields, but it does not narrow the research scope. Research the full defensible geographic area of the PSČ, including all relevant municipalities, settlements, municipal parts, landscape and localities it serves.

If the serving post office cannot be reliably identified, or several facilities/listings create a material ambiguity, record the exact evidence and blocker. Do not guess the municipality and do not mark the postal check complete.

### 2.2 Geographic versus special-purpose codes

Establish that the code is a real geographic delivery PSČ. Exclude PO-box, post-office-box, large-recipient and other organization-specific codes that do not represent a mappable geographic area.

Do not create, delete, renumber or replace a postcode based on a directory result, an institution's mailing address or a neighbouring code. A code absent from one search result is a discrepancy to investigate, not automatic proof of invalidity.

### 2.3 Postal address is not geographic assignment

A PSČ displayed on a museum, company, authority, church, association or other institution's website may be a correspondence, billing, registered-office, P.O. Box or central-mail address. It is not automatically the geographic PSČ of the physical site.

Before assigning a fact:
1. establish the actual physical location of the subject;
2. identify its physical address/address point where one exists;
3. corroborate the address and geographic placement through RAGEO or another appropriate official geographic source;
4. distinguish visitor/physical address from correspondence, billing, registered-office and P.O. Box details;
5. establish the geographic PSČ connection using appropriate postal and geographic evidence.

Do not let a website's contact postcode override stronger evidence about the physical site. If a material conflict remains unresolved, record it and do not move the fact or change the postcode on that basis.

## 3. Production storage — mandatory

Production records are stored in the existing shared production dataset. For Slovak records:

- Production table: `public.postal_codes`.
- Country discriminator: `country_code = 'SK'`.
- JSON record payload: existing JSONB column `content`.
- Locate the pre-existing row by the exact five-digit postcode and confirm that its country discriminator is `SK` before writing.
- Update only that existing row. Preserve its row identity and unrelated metadata.
- Do not create duplicate rows, new tables or missing postcode rows during ordinary rework.
- If the row is missing, ambiguous or has a different country discriminator, stop and report the exact issue. Never guess or change the country identifier.
- Never read-modify-write or otherwise alter rows belonging to another country.
- Do not change database structure, RLS, application code, permissions or the Slovak schema during ordinary rework.
- Validate the complete record against `data/slovakia/schema.json` before saving.
- After saving, read the same row back and verify the postcode, `country_code`, stored `content` and status.

Do not save a production record as a standalone JSON file in GitHub as a substitute for the prepared production row. GitHub contains the rules, schema and reference documents; the production database remains the record store.

## 4. Efficient operation, API limits and safe continuation — mandatory

These rules reduce repeated work and rate-limit failures without reducing evidence or content quality.

1. **Load shared documents once per work session.** At the start, read the current Slovak schema, Country Profile, Content Standard and this prompt. Record their commit/version identifiers. Reuse them for subsequent postcodes in the same session unless a version changes, a file was incomplete or a concrete conflict appears.
2. **Build a short research plan.** List candidate subjects and material open questions before searching. Combine closely related searches when practical. Do not repeat the same query or URL when its result is already sufficient and no change or gap is suspected.
3. **Research only what remains unverified.** Once a competent source establishes a claim and the appropriate source establishes its location/postcode relationship, stop redundant searching. Do not omit a required check merely to save calls.
4. **Limit concurrency.** Avoid large parallel bursts. Normally make no more than two external research requests concurrently. Perform database writes sequentially. Prefer a supported batch read over many separate reads.
5. **Handle HTTP 429 and equivalent rate limits.** Stop further requests to the affected service immediately. Respect `Retry-After` when supplied. Otherwise use exponential waits of approximately 2, 4, 8, 16 and 32 seconds. Do not send parallel retries to the same service. After at most five failed attempts, mark that source `RATE LIMITED`, preserve the last state and continue only with independent work. A rate limit is not a successful verification.
6. **Maintain a safe checkpoint.** Before interruption, handoff or context exhaustion, record the postcode, completed steps, sources used, evidence obtained, open questions, last error/time and exact next action. Resume at the first incomplete step; do not repeat completed research or validation.
7. **Validate locally wherever possible.** Check JSON structure, schema, IDs, translations and consistency locally against already loaded data. Do not call an external service for a check that can be performed reliably in memory.
8. **Use one targeted database read and write cycle.** Read only the target Slovak row. Verify its identity before writing. Make one targeted update, then one read-back. If a write reports an error, first check whether it nevertheless persisted; never blindly repeat an UPDATE.
9. **Never claim false completion.** An unavailable source, timeout or rate limit does not prove a fact. Mark only the affected check as pending/unverified, complete independent safe work and carry the blocker forward.

**Operating principle:** load once → research deliberately → preserve evidence → validate locally → write once → verify once → continue.

## 5. Queue and continuation

Process only existing eligible Slovak records in the project's established work order, when such an order or queue is actually available.

- Read the current project progress/queue mechanism before selecting the next record.
- Do not invent a Slovak `sequence.json` or assume that a Slovak sequence exists. If no authoritative Slovak queue is present, use only the exact postcode(s) explicitly assigned by the user or the established production work instruction.
- Do not infer that a record is complete merely because it contains facts or has a particular generic status. Confirm the project's completion mechanism and persisted status.
- Process records continuously when instructed to continue; do not ask after every postcode whether to proceed.
- Save and confirm each record separately so an interruption does not lose completed work.
- A successfully reworked and validated record is complete for the rework stage and should be skipped in later runs unless explicitly reopened.
- Reopen a completed record only when the user requests it, concrete new evidence appears, the record materially changes, or the schema/Content Standard changes in a way that affects it. Preserve the previous result and document why it was reopened.
- If one record is blocked, preserve the exact reason and continue to the next eligible record if the issue is isolated.
- At handoff, record the last completed postcode, next eligible postcode and blocked items using the project's existing progress mechanism. Do not create a parallel tracker if one already exists.

A new chat or model is a continuation of the same work, not a reason to restart completed records.

## 6. One-pass workflow for each postcode

Use this sequence once per record:

**READ → POSTAL/ADMIN VERIFY → RESEARCH PASS 1 → RESEARCH PASS 2 → LOCAL SIGNIFICANCE CHECK → DEFINE STORIES → GEOGRAPHIC CHECK → EDIT/KEEP/REMOVE/ADD → TRANSLATE → VALIDATE → SAVE/CONFIRM → NEXT**

Do not split the same record into repeated research rounds, separate language-by-language passes or multiple editorial audits.

### 6.1 Read and assess the existing record

Read the complete existing JSON and validate it against the current Slovak schema before editing.

Classify the record only to determine the amount of work:
- useful content that can be verified and retained;
- weak or incomplete content requiring correction/additions;
- empty or practically empty content requiring research from the beginning.

The classification does not change the quality standard. Existing facts are research leads, not guaranteed truth and not a limit on discovery.

### 6.2 Establish the PSČ identity and geographic scope

Verify the code and its actual postal use with Slovenská pošta or another source competent for the postal claim. Identify the serving post office and its physical municipality. Establish the defensible geographic delivery area using appropriate postal, address and geographic evidence.

Consider all verified municipalities, municipal parts, settlements and localities served by the PSČ. Do not assume that the code equals the post-office municipality or that a postcode directory gives a complete geographic boundary.

Set `city`, `district`, `county` and `state` according to section 2.1. Record any material disagreement between postal and geographic evidence. Do not silently resolve it by choosing the most convenient locality.

### 6.3 Research the area once — mandatory two-pass discovery

Use the old facts as leads, not as a stopping point. Conduct both passes in the same research phase.

**Pass 1 — broad discovery**

Search the PSČ, the post-office municipality, every verified served municipality/locality, local and historical place names, landscape names and known heritage subjects. Use relevant official tourism portals, municipal and regional sources, heritage registers, museums, nature authorities, national-park administrations, specialist institutions, archives, universities and reliable local-history sources.

Discover candidates across the whole geographic PSČ area. Do not limit discovery to the municipality named in `city`, the old record or the first general search results.

**Pass 2 — thematic gap audit**

Use section 27.2 of the Slovak Content Standard as a deliberate checklist. Check every relevant theme individually, including:
- castles, ruins, fortifications, manor houses and historic estates;
- churches, monasteries, chapels, synagogues, wooden churches and pilgrimage sites;
- historic centres, squares, streets, bridges and notable architecture;
- museums, galleries, open-air museums, specialist collections and memorial houses;
- archaeology, prehistoric settlement and important discoveries;
- caves, karst, waterfalls, lakes, gorges, peaks, valleys, rock formations and protected habitats;
- viewpoints, towers, observation points and distinctive landscapes;
- parks, gardens, arboreta, historic landscapes, zoos and aquariums where independently significant;
- mines, smelters, factories, mills, dams, power stations, railways, bridges, tunnels and technical heritage;
- historical events, battlefields, uprisings, resistance, persecution and memory sites;
- folk architecture, crafts, regional customs, wooden buildings and open-air heritage;
- people with a demonstrable local connection;
- film, literature, music, theatre and other local cultural history;
- distinctive traditions, historic markets and recurring events with lasting local meaning;
- relevant transport, pilgrimage, cultural, industrial, cycling and hiking routes;
- unusual documented local stories, legends, place-name origins, rare objects and curiosities;
- UNESCO and other formally recognised heritage where geographically relevant.

For each relevant group, working notes must record one of:
- **found and verified**;
- **checked — no qualifying result**;
- **unresolved**.

A generic search does not prove that a category was checked. Both passes are mandatory for ordinary content rework. A relevant unresolved group or material uncertainty about a candidate's identity/location prevents declaring the record complete.

Apply all exclusions in section 20 and section 27.3 of the Content Standard. Do not force irrelevant categories or fill quotas.

**Stop researching** when defining stories and other clearly valuable local facts have been identified, all relevant thematic groups have been checked, and further searches mainly return repetitions, minor details or weaker alternatives. No fixed fact count applies.

### 6.4 Candidate verification and selection

For each candidate, verify:
- exact identity and what the subject is;
- factual details and historical/cultural context;
- actual physical location or a defensible representative location;
- genuine connection to the geographic PSČ area;
- significance under the Slovak Content Standard;
- suitable source support;
- absence of an already assigned duplicate fact.

A nearby attraction does not belong to a PSČ merely because it appears in a search for the post-office municipality. A shared town, okres or regional name alone is not proof of local ownership.

Research the full delivery-area scope, but assign each fact to exactly one primary geographic PSČ. A bridge, park, route, river feature, industrial complex or other subject may cross postcode areas. Choose the most defensible primary assignment using its principal/representative location, main section, verified physical address, relevant access or strongest documented local association. Do not require the whole feature to fit inside one postcode. Once a reasonable assignment is supported and closed, treat it as stable. Reopen only on concrete new evidence that the original assignment was wrong. Do not duplicate the same attraction or continuous story across records.

Do not perform a broad section-wide duplicate audit during ordinary per-record rework. Check enough neighbouring/project context to avoid an obvious known duplicate and to make a defensible primary assignment. The separate final audit handles systematic cross-record duplication and broader coverage.

### 6.5 Editorial rework

Keep verified strong facts. Correct factual errors, misleading wording, weak sources, wrong categories/priorities, translation defects and invalid locations. Remove generic filler, duplicate/near-identical facts, unsupported claims, commercial promotion and subjects that fail the significance or geographic-relevance tests. Add missing defining stories.

Do not:
- preserve the old fact count as a quota;
- impose a minimum or maximum number of facts;
- create artificial symmetry between neighbouring postcodes;
- inflate ordinary objects into attractions;
- include a business merely because it exists or is popular;
- rewrite sound content only for stylistic preference;
- delete a fact solely because its exact location is difficult to establish or it is challenging to translate.

Assign the shared content category and A–D priority according to the Slovak schema and Content Standard. Use the exact schema values. Priority is based on genuine significance, not on how easy a subject is to research or how tourist-oriented it is. Apply the specific definitions for Priority A, B, C and D in the Slovak Content Standard; do not import priority meanings from another country's document.

### 6.6 Fact writing and cultural context

Write concrete, engaging, accurate facts that explain what the subject is, its local connection and why it matters. Distinguish documented history, chronicle accounts, legend, oral tradition and modern interpretation. A legend may be told clearly and engagingly when its cultural importance is real, but identify it as a legend/tradition rather than presenting it as proven history.

Use historical dating proportionately. Do not force an exact year when a supported century, period or approximate date is more accurate. Do not delay completion over a minor date discrepancy that does not alter the story's identity or meaning. Never conceal a material conflict or invent precision.

For international readers, explain unfamiliar Slovak institutions, administrative terms, historical arrangements, religious traditions, architectural forms, regional customs and cultural references when needed. Relevant context may include Great Moravian history, the Kingdom of Hungary, Habsburg rule, Czechoslovakia, modern Slovak statehood, the Slovak National Uprising, and documented Hungarian, German, Jewish, Roma, Rusyn, Ukrainian or other local communities. Include only context supported by evidence and relevant to the particular story. Do not flatten distinct historical periods or identities into present-day national labels.

## 7. Geographic data — mandatory Slovak layer

Follow the full Slovak Content Standard and schema. The three coordinate roles must remain distinct:

1. `representative_point` — one WGS84 point identifying `representative_place` for the postcode record.
2. `access_point` — a secondary legacy/game compatibility point for arrival/navigation. It may be identical to `representative_point`; do not invent a separate point where the representative point is already suitable. It is not a fact location.
3. `facts[].location` — the independently selected physical/map location of each fact.

### 7.1 Representative place and point

Choose one human-readable place/feature that genuinely characterises the geographic PSČ area. It need not be the serving post office, geometric centre or most famous attraction. The coordinates must identify that same representative place and be geographically defensible. Do not copy the post-office coordinates into this field merely because the post office determines `city`.

### 7.2 Access point

Treat `access_point` as a limited compatibility field, not a tourism-content requirement. It may equal `representative_point`. Follow the exact Slovak schema's structure and nullability. Do not spend disproportionate research effort on it and never use it as a substitute for fact locations.

### 7.3 Fact-level location — explicit and meaningful

For every source-language fact, include the `location` property. Use a complete Slovak-schema location object whenever a meaningful point can be established; use explicit `null` only as the genuine last resort and only where permitted by the schema.

Every non-null location must contain the exact required fields:
- `name` — the actual mapped object, feature or orientation point;
- `lat`, `lon` — WGS84 coordinates;
- `type` — one exact permitted value from the Slovak schema's `fact_location.type` enum;
- `accuracy` — one exact permitted value: `exact`, `approximate`, `area_representative` or `historical_approximate`;
- `source` — a direct URL supporting the identification or geographic position of the chosen point;
- `address` — include a verified physical address when one exists; otherwise use `null` as permitted by the schema.

Choose one principal point per fact. Never invent coordinates, guess midpoints, imply false precision or use multiple pins for one fact. The content sources support the story; the location source supports the point. One URL may serve both purposes only if it genuinely supports both.

Use this location hierarchy:

1. **Specific physical object/site:** actual location of the building, monument, museum, bridge, station, memorial, cave entrance or other subject.
2. **Distinct natural feature:** the actual feature or a clearly identified point on it, such as a waterfall, cave entrance, peak, lake access point or named rock formation.
3. **Extended site/area:** a defensible representative point inside the real area, such as a suitable entrance, trail junction, viewpoint or public orientation point within a park, forest, protected area, industrial complex or large heritage site.
4. **Historic site with uncertain exact position:** use the best-supported approximate position. If that cannot be established, use a clearly named public orientation point in the historically connected settlement, such as its square, town hall or municipal office. Mark it `historical_approximate` and name the actual orientation point.
5. **History of a settlement or municipal part:** use its identifiable public centre, square, town hall or another meaningful public reference point.
6. **Transport/infrastructure subject:** use the relevant station, stop, terminal, bridge, junction or infrastructure point.
7. **Area-level story without one physical subject:** use a meaningful point representing the relevant area, or a point suitable for `postal_area` only when the story genuinely concerns the PSČ area as a whole.

The point must not mislead readers about the exact location of a historical event or object.

**Null is the last resort.** If a specific, approximate, representative or orientation point can responsibly be established, `location` must not be `null`. Do not discard an otherwise valuable fact merely because its exact location is uncertain. Preserve the fact and represent uncertainty honestly.

Never:
- copy `representative_point` or `access_point` automatically into every fact;
- use a municipality centre as a lazy default;
- place a pin outside an extended site without a defensible reason;
- use an unrelated location type because the correct one is inconvenient;
- invent a Slovak enum value or copy one from the Czech/German schema without checking the Slovak schema;
- use `exact` merely because a map service returns many decimal places.

Check coordinate ranges, WGS84, country/geographic plausibility, match between name/type/coordinates, source support and honest accuracy. If the correct physical type is not available in the Slovak schema, do not improvise; flag the schema-level issue for resolution.

### 7.4 Map category — exactly one per fact

Assign exactly one `map_category` to every fact using only the 17 shared values in the current Slovak schema. It classifies the primary subject of the fact, not the pin location or `location.type`. It is independent of the editorial `category`.

Use the Content Standard's precedence rules. A person-centred fact uses `personality` when the person is the main subject. Do not translate map categories, invent values, duplicate them in translations or infer them from the physical location type. Preserve existing correct values; correct only when evidence or the standard shows they are wrong.

## 8. Seven-language production — one comparative pass

Every production record must contain all seven required languages:
- `cs` — Czech;
- `de` — German;
- `en` — English;
- `es` — Spanish;
- `fr` — French;
- `it` — Italian;
- `nl` — standard Netherlands Dutch (`nl-NL`), natural for readers in both the Netherlands and Flanders.

Follow the schema exactly:
- all seven translation objects must exist;
- each must contain `representative_place` and `facts`;
- each translated fact must contain `id`, `title` and `text`;
- every language must contain exactly the same fact IDs in the same order;
- source-language fact IDs must follow the schema pattern `fact_001`, `fact_002`, etc.;
- geographic location objects and map categories remain only in the source-language fact metadata, not in translations.

Preserve IDs of existing facts that are retained. Do not casually renumber facts or create duplicate IDs. If facts are removed or added, produce one coherent final sequence of unique IDs and align every language exactly.

Write and compare all seven versions together, not one language at a time. Translate meaning, not sentence structure. Preserve names, dates, qualifications and significance. Keep official Slovak proper names and diacritics; do not invent foreign-language names where no established equivalent exists.

Apply the international readability test independently to each language. Explain unfamiliar Slovak terms when needed; do not assume Czech readers automatically understand Slovak institutions or terminology. Do not rely on an explanation present only in Slovak/Czech or English. Each version must stand alone.

Before saving, compare the seven versions side by side for factual equivalence, completeness, naturalness, cultural context and correct names. Correct safe translation issues in one batch. Do not repeat the entire translation review unless a later factual change affects meaning.

## 9. Sources, photographs and record integrity

### 9.1 Sources

Prefer primary and official sources, the institution responsible for the subject, the relevant municipality or region, national-park administration, Slovak heritage authority, museums, archives, universities and specialist institutions. Use reputable specialist and regional sources for corroboration and detail.

- Every fact's source IDs must resolve to the record's top-level `sources` array.
- Every source must support the specific claim for which it is cited.
- A source mentioning only the wider town/region does not prove a specific site's location or a fact's claims.
- The `location.source` URL must directly support the chosen map point.
- Use direct, valid and traceable URLs.
- Never invent facts, citations, source IDs, URLs, authors or publication details.
- Do not collect sources merely to increase their number.
- Record unresolved material evidence gaps honestly.

### 9.2 Photographs

Use a photo only if it genuinely represents the record or an important fact and its origin, author and license can be established. Follow the schema's photo object exactly. Do not invent a photographer, license, source or image URL. A visible online image is not automatically reusable. If a suitable properly documented photo cannot be verified, use `null`. Never use a promotional image that turns the record into advertising.

### 9.3 Record integrity

Follow the exact Slovak schema for every field, required property, type, enum and nullability. Do not add research notes, candidate lists, coverage ledgers, editorial comments or unsupported metadata to production JSON unless the schema explicitly permits them. Keep working notes outside the production record.

Every source ID must resolve. Every non-null fact location must have the exact required structure and controlled values. Every translation must preserve the corresponding fact identity and order. Do not alter the shared record architecture.

## 10. Basic validation, save and completion

Perform one final basic validation pass after the editorial, geographic and translation work. Confirm:

- the postcode is a verified geographic Slovak PSČ;
- the serving post office is identified and its physical municipality is correctly used for `city`;
- `district`, `county` and `state` correspond to that same post-office municipality;
- the full defensible PSČ area, not just the post-office municipality, was researched;
- facts are accurate, significant, locally connected and adequately sourced;
- both discovery passes and all relevant thematic checks were completed;
- no generic filler, commercial promotion, unsupported claims or accidental within-record duplicates remain;
- cross-boundary facts have one defensible primary PSČ assignment;
- `representative_place` and `representative_point` correspond;
- `access_point` is treated only as secondary compatibility data and may equal the representative point;
- every fact has an explicit `location` property and exactly one valid `map_category`;
- every non-null location has valid WGS84 coordinates, name, type, accuracy and supporting location source;
- `null` is retained only after applying the full fallback hierarchy;
- all source IDs resolve to top-level sources;
- all seven languages are complete, aligned by fact ID/order and independently understandable;
- IDs are unique and conform to the schema;
- photo metadata is valid or `null`;
- all required fields, types, enums, patterns and null values validate against the current Slovak schema;
- no undocumented properties have been added;
- verification flags describe only checks actually performed.

If a check fails, correct that specific issue and validate the correction. Do not restart the entire research or repeat unrelated checks. Do not run the separate section-wide final audit here.

Save the schema-compliant content to the correct field of the existing Supabase row, preserving unrelated metadata. Do not assume the JSON Schema root object is identical to the database row layout. Read the saved row back and verify its postcode, country discriminator, content and status.

### Mandatory status lifecycle

- Completed rework with successful validation → save/retain `status = 'validated'`.
- Completed final audit that passes → save/retain `status = 'published'`.
- Never use `draft` as a staging or parking state for finished work.
- If a required condition genuinely blocks completion, do not claim completion or falsely set `validated`; retain the existing non-complete state and record the exact blocker.
- Never downgrade an already `validated` or `published` record to `draft`.
- Verify the persisted status after every write. A successful content write without confirmation of the required status is not completion.

Do not change schema, tables, RLS, triggers, permissions, database architecture or application code.

## 11. Protected geographic-enrichment exception

This exception applies only when a record is already editorially complete and the task is explicitly limited to adding/verifying the Slovak geographic layer.

Preserve all existing editorial content, fact order, IDs and all seven translations exactly. Change only the authorized geographic metadata: fact-level `location` and any required `map_category`, plus postcode-level geographic fields only where the task explicitly authorizes them. Do not perform editorial discovery, rewrite facts or retranslate during a geographic-only pass.

If a content or translation defect is noticed, record it for a separate editorial task; do not silently change it. The enrichment is complete only when every fact has a meaningful valid location or a justified permitted `null`, every fact has one valid map category, non-null locations are evidenced, and protected content remains unchanged.

The ordinary two-pass editorial research process does not authorize changes to protected content during a geographic-only task.

## 12. Separate final audit

The final audit is a separate phase, performed only after the selected postcode section or work batch has been reworked. It checks cross-postcode duplication/overlap, consistency across completed records, broader postcode coverage and assignment issues.

Do not run this section-wide audit during ordinary per-postcode rework, repeat it for each record or delay the next postcode because it has not yet happened. Use the separate Slovak audit prompt when it is available. Do not invent or substitute the Czech/German audit prompt as the Slovak operational document.

## 13. Operating principle

**Rework each eligible Slovak geographic PSČ once: establish the serving post office and its physical municipality, research the full delivery area in one efficient two-pass phase, write and compare all seven languages together, complete the Slovak geographic layer, validate once, save as `validated`, confirm the persisted record and move forward. Keep the section-wide audit separate.**

The administrative fields describe the municipality containing the serving post office. The research scope remains the full geographic PSČ area. Never confuse those two things.

Never trade accuracy for speed, geographic truth for convenience, content quality for a quota, or editorial independence for promotion.
