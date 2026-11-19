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

- Work only on the intended Slovak JSON record in `Wildwavestylez/travel`.
- The canonical identity is the exact five-digit `postcode` and its file path `data/slovakia/records/{postcode}.json`; do not add a `country_code` field.
- Update the existing JSON file for its exact postcode; do not create duplicate files or new postcode records during ordinary rework.
- Preserve the existing file identity, fact IDs, source IDs and unrelated content.
- Do not modify Czech or German records, schemas, prompts, standards, sequence files or country data.
- Do not change the Slovak schema during ordinary rework, or modify application code or shared architecture.
- Do not create ad hoc fields, categories, enums, lifecycle states or language variants. Use only the schema-defined `status` and optional `data_version` fields for the agreed lifecycle.
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

## 3. Production storage and lifecycle — GitHub is the sole record store for Slovakia

**Slovak postcode records MUST NOT be stored in Supabase.** GitHub is the sole source of truth for Slovak production records.

Repository: `Wildwavestylez/travel`

- Store each Slovak postcode as one standalone JSON file at `data/slovakia/records/{postcode}.json`, using the exact five-digit postcode without a space (for example, `81101.json`).
- Do not create, query, update, synchronize or use Supabase rows for Slovak PSČ. Do not use `public.postal_codes`, `country_code = 'SK'` or a Supabase JSONB payload.
- The JSON root must contain `postcode` and `status`. The only permitted lifecycle values are:
  - `placeholder` — a deliberately empty geographic postcode record. It contains only `postcode` and `status`, plus optional `data_version`. It contains no content fields and is not shown on the map.
  - `validated` — the complete content rework has passed its record-level validation and is waiting for the separate final audit. It is not shown on the map.
  - `published` — the record has passed the applicable final audit and is eligible for map display.
- Never use `draft`. Never store a completed content record as `placeholder`.
- A placeholder becomes `validated` only after the full content rework is complete, all seven languages and geographic fields are ready, and the complete JSON passes the Slovak schema.
- Rework never sets a record to `published`. Only the separate successful final audit may do that.
- If a previously published record is explicitly reopened and its content or geographic data is materially changed, set it back to `validated` until it passes the audit again. If no substantive change is made, preserve its existing status.
- `data_version` is independent of `status`. Preserve its existing value exactly. Do not add, increment, reset or otherwise change it during rework. A version change is permitted only after the complete requested audit scope has passed and only on the user's explicit instruction.
- The Europe Explorer map must load Slovak records with `status = 'published'` only. It must never display `placeholder` or `validated` records.
- Before creating a file, check whether the exact path already exists. For rework, fetch and preserve the existing file; update it rather than creating a duplicate or differently named copy.
- Never overwrite an existing file without first fetching its current content and blob SHA.
- Validate the complete JSON against `data/slovakia/schema.json` before committing.
- After every create/update, fetch the exact GitHub path again and verify the persisted JSON, postcode, status, unchanged `data_version`, schema compliance and resulting blob SHA.
- Keep the derived Database Viewer index `data/slovakia/database_index.json` synchronized after every Slovak record create/update. Fetch its current content and blob SHA, update only the matching `postcode` entry's `city` and `status` from the verified canonical record (use `city: null` when the record has no city), preserve the sequence order and all other entries, then fetch the index again and verify the changed entry. This index is a read/search cache only; the individual record JSON files remain the sole source of truth. Never use the index to establish or overwrite canonical record content.
- A placeholder is the sole intentional exception to the full content requirements: it must remain empty and must validate against the placeholder branch of the schema. Never commit partial content under `validated`.
- Do not modify Czech or German record storage or workflows.

**Completion evidence:** a Slovak rework is saved only when the GitHub create/update succeeds and a subsequent fetch confirms the exact file content and lifecycle state. Git commit history is the persistence/change record.

If the target path is ambiguous, a filename conflict exists, or the existing file cannot be fetched, stop and report the exact issue. Never guess a path or silently create a second record.

## 4. Efficient operation, API limits and safe continuation — mandatory

These rules reduce repeated work and rate-limit failures without reducing evidence or content quality.

1. **Load shared documents and the canonical sequence once per work session.** At the start, read the current Slovak schema, Country Profile, Content Standard, this prompt and `data/slovakia/sequence.json`. Record their commit/version identifiers. Verify the sequence structure, declared count, five-digit postcode format and uniqueness, and confirm that each queued postcode has its exact record file under `data/slovakia/records/`. Reuse these loaded files for subsequent postcodes in the same session unless a version changes, a file was incomplete or a concrete conflict appears.
2. **Build a short research plan.** List candidate subjects and material open questions before searching. Combine closely related searches when practical. Do not repeat the same query or URL when its result is already sufficient and no change or gap is suspected.
3. **Research only what remains unverified.** Once a competent source establishes a claim and the appropriate source establishes its location/postcode relationship, stop redundant searching. Do not omit a required check merely to save calls.
4. **Limit concurrency.** Avoid large parallel bursts. Normally make no more than two external research requests concurrently. Perform GitHub writes sequentially. Prefer a supported batch read over many separate reads.
5. **Handle HTTP 429 and equivalent rate limits.** Stop further requests to the affected service immediately. Respect `Retry-After` when supplied. Otherwise use exponential waits of approximately 2, 4, 8, 16 and 32 seconds. Do not send parallel retries to the same service. After at most five failed attempts, mark that source `RATE LIMITED`, preserve the last state and continue only with independent work. A rate limit is not a successful verification.
6. **Maintain a safe checkpoint.** Before interruption, handoff or context exhaustion, record the postcode, completed steps, sources used, evidence obtained, open questions, last error/time and exact next action. Resume at the first incomplete step; do not repeat completed research or validation.
7. **Validate locally wherever possible.** Check JSON structure, schema, IDs, translations and consistency locally against already loaded data. Do not call an external service for a check that can be performed reliably in memory.
8. **Use one targeted GitHub read/write cycle.** Fetch only the target JSON file and its current blob SHA. Verify the exact postcode and current status before writing. Make one create/update, then one read-back. If a write reports an error, first check whether it nevertheless persisted; never blindly repeat an update.
9. **Never claim false completion.** An unavailable source, timeout or rate limit does not prove a fact. Mark only the affected check as pending/unverified, complete independent safe work and carry the blocker forward.

**Operating principle:** load once → research deliberately → preserve evidence → validate locally → write once → verify once → continue.

## 5. Canonical sequence, queue and continuation

`data/slovakia/sequence.json` is the **canonical and binding production sequence** for Slovak geographic postcodes. It already exists in the repository. Use it to determine the project's complete postcode scope and the order in which records are processed.

### 5.1 Sequence is authoritative

- At the beginning of a work session, read the current `data/slovakia/sequence.json` from GitHub and record its commit/blob identifier.
- The `sequence` array is the canonical ordered list. Follow its exact order; do not independently sort it, infer a different order, or replace it with search results or another dataset.
- Verify that `count` equals the actual number of entries in `sequence`, every entry is a five-digit string, and there are no duplicates.
- Verify that each sequence entry has exactly one corresponding file at `data/slovakia/records/{postcode}.json`. A missing file, unexpected extra record, duplicate, malformed code or count mismatch is a queue-integrity issue: report it and do not silently repair the sequence or create/delete records as part of ordinary rework.
- Slovakia's current sequence format has a single `sequence` array; it does not use the Czech `groups` structure. Do not add or expect `groups` unless the Slovak sequence format is explicitly changed at project level.
- The sequence defines project membership and processing order; it does not by itself prove a code's current postal validity, serving post office, delivery area or geographic boundaries. Verify those independently for each postcode under the Slovak Content Standard.
- A code discovered outside the sequence is only a lead for a separate review. Do not add it to the sequence, create a record for it, or reassign facts to it during ordinary rework.
- Changing `sequence.json` is a separate project-level operation requiring documented official evidence and the user's explicit approval. Ordinary rework must never change it.

### 5.2 Selecting the next record and lifecycle

- Before selecting work, read the sequence and inspect the persisted status of records in sequence order.
- Process the first eligible record in the canonical sequence: `placeholder` means rework has not yet been completed; `validated` means rework is complete and final audit is pending; `published` means the record has passed audit.
- Skip `validated` and `published` records unless the user explicitly reopens them or a documented project-level change requires it. Never use `draft`.
- Do not infer completion from the presence or number of facts. The persisted `status` is authoritative for lifecycle.
- A successfully reworked record must be saved as `validated`; it is complete for the rework stage. Rework never sets `published`.
- If a sequence entry is blocked by a source or verification issue, preserve the exact reason and continue to the next eligible record only if the blocker is isolated and doing so does not compromise queue integrity or a shared prerequisite.
- Process records continuously when instructed to continue; do not ask after every postcode whether to proceed.
- Save and confirm each record separately so an interruption does not lose completed work.
- Reopen a completed record only when the user requests it, concrete new evidence appears, the record materially changes, or the schema/Content Standard changes in a way that affects it. Preserve the previous result and document why it was reopened.
- At handoff, state the last completed postcode, the next eligible postcode in sequence order and any blocked items. Use the project's existing progress mechanism; do not create a parallel tracker if one already exists.

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


For facts about Slovak regional culture and folklore, naming a tradition or translating its name literally is not enough. Explain to readers what it actually refers to, what it looks or sounds like, how it is practised and what local role or meaning it has, using only source-supported details.

- **Language and dialect:** explain whether a term refers to Slovak, a regional dialect, local speech or another historically documented language. Identify where it is used, its evidenced linguistic features and its relationship to local identity. Distinguish dialects from separate languages; do not invent linguistic classifications or claim that a local speech is a separate language without specialist evidence. Because the source-language fact is written in Czech, explain Slovak terms and institutions that a Czech reader may not know as well.
- **Music and instruments:** describe unfamiliar instruments, how they are built or played, their sound or function, and their role in a local ensemble or ceremony where relevant.
- **Traditional dress:** describe recognisable clothing features and local variants, and explain when and by whom the clothing is or was worn. Do not treat all Slovak folk costumes as interchangeable.
- **Dances, festivals and rites:** explain what happens, when and why, who takes part and what the event means in its local, seasonal, religious or community context. Explain local names, processions, masks and ritual actions.
- **Crafts, food and everyday culture:** explain the object, process, technique, ingredients or practical use, and why it is characteristic of the particular locality.
- **Local variation:** distinguish village-level and regional variants. Do not generalise a custom documented in one village to an entire region or Slovakia as a whole.
- **Cultural equivalents:** do not replace a Slovak term with a superficially similar Czech or foreign cultural term unless it is genuinely equivalent. Preserve the original name and explain its meaning.
- **All six non-Czech versions:** independently provide the context needed by readers unfamiliar with Slovakia. Do not rely on the Czech original or on another translation to explain a term. Each version must stand alone.

The reader should be able to picture what they would see, hear or experience. Keep explanations concise, natural and relevant to the specific fact; do not add generic folklore background or unsupported interpretations.

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

For every Czech-original fact in the root `facts[]` array, include the `location` property. Use a complete Slovak-schema location object whenever a meaningful point can be established; use explicit `null` only as the genuine last resort and only where permitted by the schema.

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

Every production record must use Czech as its original/source language in the root `facts[]` array and contain all seven required language versions:
- `cs` — Czech; this must match the Czech original in the root `facts[]` array;
- `de` — German;
- `en` — English;
- `es` — Spanish;
- `fr` — French;
- `it` — Italian;
- `nl` — standard Netherlands Dutch (`nl-NL`), natural for readers in both the Netherlands and Flanders.

Follow the schema exactly:
- all seven translation objects must exist;
- the root `facts[]` title/text are Czech originals; never write them in Slovak;
- `translations.cs` must match the Czech original faithfully and may be text-identical; do not create a separate Slovak (`sk`) version;
- each must contain `representative_place` and `facts`;
- each translated fact must contain `id`, `title` and `text`;
- every language must contain exactly the same fact IDs in the same order;
- Czech-original fact IDs must follow the schema pattern `fact_001`, `fact_002`, etc.;
- geographic location objects and map categories remain only in the Czech-original fact metadata, not in translations.

Preserve IDs of existing facts that are retained. Do not casually renumber facts or create duplicate IDs. If facts are removed or added, produce one coherent final sequence of unique IDs and align every language exactly.

Write the original fact content in Czech. Create the six non-Czech translations from that Czech original, and keep `translations.cs` faithfully aligned with it. Compare all seven language versions together, not one language at a time. Translate meaning, not sentence structure. Preserve names, dates, qualifications and significance. Keep official Slovak proper names and diacritics inside the Czech prose; do not invent foreign-language names where no established equivalent exists. Do not create Slovak-language originals or a `sk` translation.

Apply the international readability test independently to each language. Explain unfamiliar Slovak terms in the Czech original where needed; do not assume Czech readers automatically understand Slovak institutions or terminology. Ensure the six non-Czech translations independently explain relevant context. Do not rely on an explanation present only in Czech or English. Each version must stand alone.

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
- the completed content record is saved with `status = 'validated'` (or remains `published` only if it was not substantively changed);
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
- the Czech original and all seven language versions are complete, aligned by fact ID/order and independently understandable;
- IDs are unique and conform to the schema;
- photo metadata is valid or `null`;
- all required fields, types, enums, patterns and null values validate against the current Slovak schema;
- no undocumented properties have been added;
- verification flags describe only checks actually performed.

If a check fails, correct that specific issue and validate the correction. Do not restart the entire research or repeat unrelated checks. Do not run the separate section-wide final audit here.

### Mandatory GitHub save and verification

- Commit the complete schema-compliant JSON to the exact path `data/slovakia/records/{postcode}.json`, following section 3.
- For a new record, confirm the target file does not already exist before creating it.
- For an existing record, fetch its current content and blob SHA before updating it.
- After the write, fetch the exact path again and verify the saved JSON, postcode, schema compliance and new blob SHA.
- Preserve the file's established identity and do not create alternate filenames or duplicate copies.
- Include the schema-defined `status` field. Save completed rework as `validated`; preserve `data_version` unchanged. A successful GitHub write plus successful read-back is the evidence that the rework has been saved.
- If a required condition genuinely blocks completion, do not commit a partial or misleadingly complete production record. Preserve the exact blocker in the working handoff.

Do not use Supabase for Slovak records. Do not change the schema during ordinary rework, and do not change application code or shared architecture.

## 11. Protected geographic-enrichment exception

This exception applies only when a record is already editorially complete and the task is explicitly limited to adding/verifying the Slovak geographic layer.

Preserve all existing editorial content, fact order, IDs and all seven translations exactly. Change only the authorized geographic metadata: fact-level `location` and any required `map_category`, plus postcode-level geographic fields only where the task explicitly authorizes them. Do not perform editorial discovery, rewrite facts or retranslate during a geographic-only pass.

If a content or translation defect is noticed, record it for a separate editorial task; do not silently change it. The enrichment is complete only when every fact has a meaningful valid location or a justified permitted `null`, every fact has one valid map category, non-null locations are evidenced, and protected content remains unchanged.

The ordinary two-pass editorial research process does not authorize changes to protected content during a geographic-only task.

## 12. Separate final audit

The final audit is a separate phase, performed only after the selected postcode section or work batch has been reworked. It checks cross-postcode duplication/overlap, consistency across completed records, broader postcode coverage and assignment issues.

Do not run this section-wide audit during ordinary per-postcode rework, repeat it for each record or delay the next postcode because it has not yet happened. Use the separate Slovak audit prompt when it is available. Do not invent or substitute the Czech/German audit prompt as the Slovak operational document.

## 13. Operating principle

**Rework each eligible Slovak geographic PSČ once: establish the serving post office and its physical municipality, research the full geographic area in one efficient two-pass phase, write and compare all seven languages together, complete the Slovak geographic layer, validate once, save the JSON as `validated` in `data/slovakia/records/{postcode}.json`, preserve `data_version`, verify it by reading it back from GitHub and move forward. Keep the section-wide audit separate.**

The administrative fields describe the municipality containing the serving post office. The research scope remains the full geographic PSČ area. Never confuse those two things.

Never trade accuracy for speed, geographic truth for convenience, content quality for a quota, or editorial independence for promotion.
