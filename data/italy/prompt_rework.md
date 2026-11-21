# TRAVEL — ITALY CAP REWORK PROMPT

## 1. Purpose and binding documents

This prompt defines the mandatory workflow for researching, reworking, geographically verifying, translating and validating existing Italian CAP records in TRAVEL / EuropeExplorer.

This is a full research and editorial rework, not a mechanical conversion of an old record. Treat existing content as working material, not as unquestionable truth.

Use these documents together:

1. `data/italy/COUNTRY_PROFILE.md` — Italian postal, geographic and administrative interpretation.
2. `data/italy/schema.json` — exact JSON structure, required fields, data types and controlled values.
3. `data/italy/CONTENT_STANDARD.md` — binding research, geographic, editorial, source and translation requirements.

The schema defines what may be stored. The Country Profile defines the geographic concepts. The Content Standard defines what quality and evidence are required. This prompt defines how to perform the work.

**Do not silently modify, reinterpret or override these documents.** If they conflict, stop the affected operation, identify the exact conflict and request a controlled documentation/schema decision. Never invent a new field, enum value, language, status or data structure to work around a conflict.

Preserve the shared TRAVEL / EuropeExplorer architecture where the underlying concept is common. Apply Italian postal, geographic, administrative and source rules where they differ from Czechia or Germany.

## 2. Italian CAP record geography — one CAP, one record, all associated Comuni

This is the mandatory project-wide rule for Italian records.

- **One CAP always remains one production record.** Never split a shared CAP into one record per Comune and never create multiple records with the same CAP.
- The CAP is our project content/indexing unit. It may cover one Comune, several Comuni or an urban postal zone. Its content is the complete defensible geographic area associated with that CAP.
- Set `city` to the official names of **all Comuni associated with the CAP**, using current ISTAT names. If there is more than one, list the names in one string separated by commas. Do not select one Comune as a supposed representative or organizational anchor.
- Determine the Comune list from the best available authoritative evidence for the CAP assignment and the physical municipal locations covered by it. Poste Italiane is the primary postal authority; ISTAT is the authority for current Comune names and administrative identity. A post-office branch address may help identify a locality, but its existence alone does not prove that it is the only office serving the CAP or define the full CAP area.
- Do not require identification of one exclusive serving post office. Do not hold up a record merely because Poste Italiane does not publish a single CAP-to-serving-office relationship.
- If a CAP is associated with more than one intermediate territorial unit or Regione, represent all applicable official names in the corresponding string field, separated by commas. Never silently choose one. If the scope cannot be established reliably, document the precise uncertainty and do not guess.
- `district` is not a list of settlements or Comuni. Use it only for a genuinely relevant, documented sub-municipal locality when the record itself requires one; otherwise use null.
- `representative_place` and `representative_point` describe one useful map anchor for the CAP's overall area. They do not designate a representative Comune, postal office or boundary centroid.
- The municipality list is administrative orientation only. It does not partition the content and does not determine where facts belong.

### 2.1 Full CAP research area — content is independent of Comune

Research the entire defensible geographic area associated with the CAP, across all its Comuni, settlements and localities.

- Search for attractions, heritage, nature, history, people, traditions, technical sites and stories throughout the CAP area.
- Do not organise, quota, split or filter facts by Comune. Do not require a fact to be associated with one of the names in `city` as a separate editorial classification.
- A fact may be located in any settlement or locality within the CAP area. Its map coordinates must identify the real physical location of the subject, regardless of municipal affiliation.
- Use the Comune and locality names as research search terms and geographic context, not as containers to which facts must be assigned.
- Keep one fact in the one most defensible primary CAP record. Avoid duplicate facts across different CAP records, but do not create separate Comune records inside one CAP.
- Do not expand the CAP area to an entire Comune or neighbouring tourist region without evidence. Equally, do not narrow it to one municipal seat or post-office address.

### 2.2 Settlement identity and map representation

Distinguish Comune from frazione, località, borgata, quartiere, rione and other local designations. These terms are not interchangeable and their legal meaning can vary by region and municipality.

- Use official Comune identities for the `city` list and administrative classification.
- Preserve locally supported names and types of frazioni and località when describing or locating a fact.
- A frazione does not become a Comune merely because it has a distinct name, a church, a square or a strong local identity.
- Do not invent a CAP for a settlement or assume that a named frazione has its own CAP.
- Do not omit a settlement from research merely because it has no separate CAP.
- Do not use `district` as a substitute list of Comuni or as a container for all CAP settlements.
- A fact about a specific locality must be pinned at the actual subject or a meaningful point in that locality, not at a distant municipal seat.

## 3. Italian postal and administrative verification

### 3.1 CAP identity and current assignment

The Italian CAP is a five-digit string. Always preserve leading zeroes.

Use Poste Italiane as the primary authority for the current CAP system, published CAP assignments, urban CAP zones and postal-service information within its remit.

- Verify that the CAP exists and that its current postal assignment is supported by an authoritative, current source.
- Use the actual published assignment; never derive a Comune, Provincia, Regione, postal territory or exact polygon from the CAP digits alone.
- Distinguish ordinary locality CAPs, urban CAP zones and patterns that serve groups of municipalities.
- Do not assume one CAP equals one Comune or that every Comune has only one CAP.
- A PO box, casella postale, organisation or institutional correspondence address does not by itself establish a separate geographic territory or invalidate a geographic CAP.
- Do not treat an address shown on an organisation's website as proof of the geographic CAP of its physical location until the purpose and physical address have been checked.
- If sources disagree, investigate what each CAP/address represents. Do not automatically move a fact, alter a record or change the project sequence.

Third-party CAP directories may help discover a candidate or cross-check a result, but they do not override Poste Italiane and must not be treated as the canonical national inventory without verification.

### 3.2 Comune coverage for a CAP

The purpose of this check is to establish the complete set of Comuni associated with the CAP, not to select one serving post office.

1. Verify the current CAP assignment and its geographic scope using Poste Italiane's published CAP information and other competent postal evidence.
2. Identify the Comuni physically covered by that CAP using current ISTAT identities and reliable address/locality evidence.
3. Record every associated Comune name in `city`, separated by commas, using one CAP record only.
4. Identify all applicable intermediate territorial units and Regioni for `county` and `state`; list multiple official values separated by commas when necessary.
5. Record the evidence and any real limitations in the existing verification fields. Do not invent a serving-office relationship or require one exclusive office to be identified.

A list of post-office branches may corroborate that a Comune is associated with a CAP, but it does not by itself prove that the listed branches exhaust the CAP's full geographic coverage. Where the full Comune set cannot be established conclusively, use the best defensible evidence, state the limitation precisely and do not present an incomplete list as officially exhaustive.

### 3.3 Administrative hierarchy

Use ISTAT as the principal reference for current official Comune names and codes, current territorial classifications, and relationships among Comuni, intermediate units and Regioni. Use current releases and record their reference date where relevant.

The conceptual navigation hierarchy is:

`Italia → Regione → intermediate territorial unit → Comune → CAP`

The intermediate unit may be a Provincia, Città metropolitana, Provincia autonoma, Libero consorzio comunale or another currently relevant territorial/statistical unit. Preserve the official current type and name. Do not flatten special arrangements into an inaccurate generic province.

Pay particular attention to:

- the autonomous Provinces of Bolzano/Bozen and Trento;
- Valle d'Aosta/Vallée d'Aoste and its special territorial arrangement;
- Sicily's Liberi consorzi comunali and Città metropolitane;
- current Sardinian territorial reorganisation;
- Friuli-Venezia Giulia, where former provinces may remain in older/statistical material without being current provincial administrative authorities;
- official bilingual or multilingual names.

Use the current ISTAT classification rather than old static lists, outdated maps or assumptions based on familiar historical province names.

### 3.4 Sub-municipal geography

For the names and locations of frazioni, località, borgate, quartieri, rioni and other local places, use the best available official Comune, regional, cadastral, address, mapping or specialist sources.

ISTAT is the reference for official Comuni and statistical/administrative classification; do not assume it provides a complete national register of every frazione or local place.

Where no single national register establishes a sub-municipal locality, verify it using competent local evidence. Prefer official Comune documentation, municipal plans, official locality lists, regional geographic portals, address records and authoritative local institutions. Use additional reliable mapping or specialist sources to establish the physical location.

Record the locally supported designation. Do not convert a local name into an official administrative unit without evidence.

## 4. Geographic assignment of facts — full area, one primary CAP

CAP is a postal identifier and a project content/indexing layer. It is not automatically an administrative boundary, Comune boundary, tourist region or exact polygon.

- Every fact must have exactly one primary CAP record.
- Verify the actual physical location of the subject and its defensible geographic relationship to the CAP.
- Research across the full CAP area and all associated Comuni.
- Do not assign a fact merely because its source mentions a Comune, Region, tourist area or CAP in a postal/correspondence address.
- Do not assign an external place to the current CAP merely because it is nearby or useful as context.
- A large or linear feature may extend across several CAPs. Choose one defensible primary CAP using its principal location, main section, representative point, main entrance, verified address or strongest local association.
- Do not duplicate the same attraction, physical site or continuous story in multiple CAP records. Separate facts are appropriate only where they concern genuinely distinct objects or independently significant stories.
- Once a geographic assignment is well supported and closed, treat it as stable. Reopen it only when concrete new evidence shows the original assignment was wrong or materially misleading.
- Do not reconstruct obscure historical CAP boundaries as a routine requirement. Use current postal assignment, address/locality evidence, official descriptions and defensible geographic points.
- Do not create CAP polygons or a historical boundary-change register as part of ordinary rework.

### 4.1 Institutional addresses and misleading CAPs

A CAP printed on a museum, church, company, archive, municipality or attraction website may be a correspondence, billing, head-office, PO-box or institutional address.

For a fact's geographic assignment:

1. identify the actual physical location of the subject;
2. identify the actual visitor/physical address where applicable;
3. distinguish it from correspondence, billing, registered-office and PO-box addresses;
4. verify the physical address or location using the competent Italian geographic/address evidence;
5. establish the CAP relationship using the appropriate postal source;
6. compare it with the project's authorised CAP processing scope, if one has been formally created.

Never move facts or alter a CAP solely because an institution's website displays a different postal code.

## 5. Fact location and map coordinates

The fact's physical location is independent of the CAP's `representative_point` and legacy `access_point`.

The Italian schema's `facts[].location` object contains:

- `name` — name of the actual object, place or meaningful fallback point;
- `address` — verified physical address, or null where no reliable street address exists;
- `lat` and `lon` — WGS84 coordinates;
- `type` — one permitted value from the Italian schema;
- `accuracy` — one permitted value from the Italian schema;
- `source` — direct URL supporting the chosen geographic point.

Do not invent coordinates. Do not copy `representative_point` or `access_point` automatically. Do not duplicate location metadata in translated fact objects.

### 5.1 Mandatory location hierarchy

Actively seek a meaningful map point for every fact that can reasonably be located. A defensible approximate point is better than null, but never pretend an approximate point is exact.

Use this hierarchy:

1. **Specific physical object:** place the pin at the actual location of the building, monument, museum, bridge, station, artwork, archaeological structure or other subject.
2. **Large or dispersed site:** choose a representative point inside the actual site, such as a main entrance, visitor access, central path, principal structure or other meaningful point within the park, archaeological area, reserve, lake, forest, industrial complex or historic ensemble.
3. **Historical event or vanished site:** use a documented approximate location if one can be established. Otherwise choose a meaningful public orientation point in the actual locality associated with the story and mark the accuracy honestly.
4. **History of a Comune or urban district:** use its historic centre, principal square, municipal building or another clearly relevant public orientation point.
5. **Transport or infrastructure:** use the relevant station, port, terminal, bridge, crossing or infrastructure node.
6. **Local theme without one precise object:** choose the most suitable public orientation point in the locality genuinely associated with the subject. For a fact about the CAP as a whole, use the CAP representative point only if it genuinely serves that purpose.

### 5.2 Special mandatory rule — frazione and località

If a fact concerns a specific frazione, borgata, località, village or other sub-municipal settlement, its map pin must represent that specific place.

**If the exact location of the fact cannot be established, use the centre or a meaningful public orientation point of that frazione/località itself. Do not move the pin to the piazza, town hall or municipal centre of the parent Comune merely because that point is easier to find.**

This applies even if the frazione is several kilometres from the municipal seat. A parent Comune's town hall ten kilometres away is not a geographically honest substitute for a fact about the frazione.

Examples of acceptable fallback points, when genuinely located in the relevant frazione/località:

- its principal piazza or square;
- its local church or historic centre;
- its documented settlement centre;
- a locally recognised public orientation point.

The `name` must identify the actual point used. If the pin is at the centre of a frazione, name that centre or the actual square/place — do not name the distant municipal town hall and do not imply that the fact occurred at an exact site that remains unknown.

Use `accuracy = approximate` for a general locality-centre fallback, or the most appropriate permitted schema value for the actual uncertainty. Use `exact` only for a verified exact location. Use `area_representative` for a representative point within a large area and `historical_approximate` for an uncertain historical location, exactly as allowed by the schema.

### 5.3 Accuracy and evidence

- The source for the location must support the existence and position of the point used.
- Content sources must separately support the historical, cultural, natural or other story.
- A source proving the location of a square or local centre need not prove that an uncertain historical event happened exactly there; the text and pin must make the distinction clear.
- Never place a pin at a convenient point with no genuine relationship to the subject.
- If a meaningful specific, approximate, representative or orientation point can be responsibly identified, do not use null merely because exact coordinates are unavailable.
- Use null only when no defensible point can be established. Record the reason in working notes; do not invent an explanation or coordinates.
- Choose `type` only from the exact controlled values in `schema.json`. Never improvise a type. If a recurring real-world type is missing, flag it for a separate schema review.
- Do not infer `type` from `map_category`. They represent different things.

## 6. CAP representative place and legacy access point

Every record requires one `representative_place` and its matching `representative_point`. Choose a specific, identifiable place or geographic feature that genuinely characterises the CAP area. It is a record-level map anchor, not the serving post office by definition, not the centroid of a CAP polygon and not the location of every fact.

The representative place may be a settlement, historic centre, urban quarter, landscape, heritage site, industrial area, port, island locality or another genuinely representative feature of the overall CAP area. It does not need to be in any particular Comune. Do not choose a famous attraction solely because it is famous. Do not list multiple alternatives.

The `access_point` is a separate legacy TRAVEL navigation point used for practical vehicle approach/navigation. It is not the representative point, post office by definition, fact location or CAP boundary.

`representative_point` is required. `access_point` is a separate nullable field: use a practical, geographically defensible navigation point only when it has a clear purpose and has been checked; otherwise use `null`. Set `verification.access_point_verified` to true only if a non-null access point has actually been checked; never claim verification that did not happen.

## 7. Italian source hierarchy and evidence

Use the authority competent for the specific claim. No single institution is authoritative for every postal, administrative, address, historical, cultural, natural or visitor claim.

### 7.1 Postal and administrative sources

- **Poste Italiane:** current CAP system, published CAP assignments, urban CAP zones, postal service and serving-office information where available.
- **ISTAT:** official Comune names/codes, current Regione and intermediate territorial classifications, statistical/administrative relationships, current territorial reference data and SITUAS resources.
- **ANNCSU:** street names, civic numbers and address records; geographic positioning where supplied. Coverage and coordinate completeness depend on municipal submissions and updates. Missing data is not proof that a place does not exist. ANNCSU does not itself define CAP boundaries.
- **Official Regions and Comuni:** locally recognised frazioni/località, municipal subdivisions, place names, local geographic information and administrative documentation.
- **Official regional/municipal geographic portals and cadastral or mapping authorities:** relevant address, locality and geographic-position verification within their competence.

### 7.2 Cultural, historical and specialist sources

According to the subject, investigate:

- Ministero della Cultura (MiC) and its competent bodies;
- Catalogo Generale dei Beni Culturali and ICCD;
- Soprintendenze and regional heritage authorities;
- state, regional and municipal archives (including Archivio di Stato);
- official museums, archaeological parks, galleries, libraries and cultural institutions;
- universities, research institutes and peer-reviewed specialist publications;
- UNESCO for the status, scope and values of listed properties, including the specific Italian component;
- ISPRA, regional environmental agencies, national parks and protected-area authorities for natural and geological evidence;
- official Regions, Comuni, Città metropolitane, relevant intermediate authorities and official tourism organisations;
- Ministero del Turismo and official national/regional tourism portals for discovery and visitor context.

This is a guide to institutional competence, not a claim that every institution covers every topic or locality. Check that the source actually supports the specific statement and geographic point.

### 7.3 Source quality and traceability

Prefer, in order appropriate to the claim:

1. primary documents, archival records, official registers and catalogues;
2. specialist books, peer-reviewed research, universities and research institutions;
3. official museums, heritage bodies, archaeological parks and protected-area authorities;
4. official regional, municipal and tourism sources;
5. reputable specialist media and cultural publications;
6. general tourism portals, encyclopedias and community sources as discovery leads or supplementary context.

Use multiple independent sources for important facts where available. Repeated copies of the same text are not independent corroboration. Wikipedia may help discover names, topics and references, but must not be the sole or final evidence for an important fact and must not be copied as the model for the finished text.

For every fact:

- define its supporting sources in the top-level `sources` array;
- put the exact source URLs supporting each fact in that fact's `sources` array;
- define every URL used by a fact in the top-level `sources` array as a source object with `title`, `url` and `type`; each `facts[].sources` URL must match a top-level `sources[].url` exactly;
- choose the correct `type` enum from the schema;
- ensure that each significant claim is supported by a source competent for that claim;
- provide a separate geographic source for the map point where required;
- keep source release/reference dates and access/check dates distinct where the source or working record requires them;
- respect copyright, source licences, reuse conditions, attribution, API terms and rate limits.

Do not invent source titles, URLs, release dates or evidence. Do not introduce source IDs or extra source-object properties; the shared schema stores source references as URLs in `facts[].sources` and source metadata as `{title, url, type}` in top-level `sources`. Do not mark an unsupported value as verified.

## 8. Research workflow and operating discipline

Follow this workflow for every CAP:

**READ → IDENTIFY POST OFFICE → VERIFY ADMINISTRATION → MAP THE FULL CAP AREA → DISCOVER → THEMATIC GAP AUDIT → GEOGRAPHIC CHECK → EDITORIAL REVIEW → ASSIGN FACTS → LOCATE MAP POINTS → TRANSLATE → VALIDATE → SAVE ONLY THROUGH AN APPROVED ITALIAN WORKFLOW → NEXT**

### 8.1 Load common documents once

At the start of a work session:

1. Load the current Italian schema, Country Profile and Content Standard.
2. Load this prompt and any approved Italian source/sequence reference documents that actually exist.
3. Record their current commit/version identifiers.
4. Reuse them for subsequent CAPs in the same session unless a version changes, a file is incomplete or a concrete conflict appears.
5. Do not copy Czech or German sequence contents, postal assignments or storage semantics into Italy. Use the currently committed Italian sequence/reference files and the established Neon production contract documented in Section 14; verify their current versions before use.

The Italian `sequence.json` has not been established by this prompt. If it does not exist or has not been formally approved, do not invent a canonical CAP sequence, infer its complete scope or treat an ad hoc list as authoritative. Report the missing prerequisite and work only within an explicitly authorised CAP scope.

### 8.2 Efficient research and API limits

- Prepare a concise list of candidates and unresolved questions before searching.
- Combine related searches into targeted batches where supported.
- Reuse verified evidence and previously loaded reference data. Do not repeat the same query or URL without a reason to suspect a change, error or omission.
- Search for missing evidence, not from scratch for every fact.
- Stop redundant searching once a competent source verifies the claim and the appropriate geographic source verifies the location/assignment.
- Do not reduce research quality merely to reduce the number of requests.
- Standard maximum: two external requests in flight at the same time. Perform writes sequentially.
- Prefer batch reads where available.

### 8.3 HTTP 429 and failed services

When HTTP 429 or an equivalent rate-limit response occurs:

1. stop further requests to that service immediately;
2. honour `Retry-After` if supplied;
3. otherwise use exponential delays of approximately 2, 4, 8, 16 and 32 seconds;
4. do not send parallel retries to the same service;
5. after no more than five unsuccessful attempts, mark that source temporarily `RATE LIMITED`;
6. preserve the last state and continue only work that does not depend on that source.

A rate limit, timeout, missing page or inaccessible dataset is not successful verification. Mark only the affected question as unresolved and continue safe independent work.

### 8.4 Checkpoints

Before interruption, waiting or handover, preserve:

- the CAP being processed;
- completed workflow steps;
- sources already checked;
- evidence already obtained;
- unresolved questions and affected fields;
- last error and time, if relevant;
- the exact next action.

On resumption, continue at the first unfinished step. Do not repeat completed research or validation without a reason.

### 8.5 Local validation

Perform structural and consistency checks locally whenever possible. Do not call an external service for a check that can be reliably performed against already loaded data.

After editing a fact, check the affected fact and its language versions. Perform full-record validation once before saving through the established Neon workflow, not after every small edit.

## 9. Two-phase research — mandatory

Both phases are required for a full content rework. They apply across the full CAP area and all associated Comuni, with no municipality-based partition of the facts.

### Phase 1 — broad discovery

1. Verify the CAP and current postal assignment.
2. Identify the complete defensible set of Comuni associated with the CAP and list their current official names in `city`.
3. Verify all applicable `county` and `state` values from the current official administrative affiliation of those Comuni; list multiple values when necessary.
4. Map the complete CAP research area: all relevant Comuni, frazioni, villages, località, urban districts, named settlements and historic localities.
5. Search in Italian and, where useful, in local language variants, bilingual official names and historic place names.
6. Search by CAP and by every associated Comune and locality, as well as local attraction names, people, events, institutions, landscape names and historic terminology. Use these names for discovery only; do not divide facts by Comune.
7. Discover tourist attractions and historical, cultural, natural, artistic, scientific, industrial, military and technical stories.
8. Record candidates, actual locations, CAP relationship, significance, possible duplication and sources.
9. Do not limit discovery to existing facts, the first search results, one municipality, or general tourism pages.

### Phase 2 — thematic gap audit

Use the full thematic checklist in the Italian Content Standard. Actively investigate all relevant categories, including:

- prehistoric, pre-Roman, Greek, Roman, late antique, early Christian, Byzantine, Lombard, medieval, Renaissance, early modern, Risorgimento, modern and contemporary history;
- tourist attractions, monuments, visitor sites and museums;
- architecture, art, archaeology, sacred heritage and cultural institutions;
- people, science, literature, music and intellectual history;
- nature, landscape, geology, protected areas and distinctive species;
- local languages, traditions, festivals, crafts and gastronomic heritage;
- industry, transport, trade, military history, engineering and technical heritage;
- UNESCO and other forms of formal recognition or protection.

Pay particular attention to smaller museums, specialist collections, local archaeological sites, chapels, monasteries, gardens, viewpoints, caves, technical heritage, local festivals, lesser-known people and stories that are easy to miss in broad tourism searches.

For each relevant category, actively look for specific candidates and determine whether they are already covered. A general search or a few tourism portals do not count as a completed thematic check.

In working notes (never add these statuses to production JSON unless the schema is formally changed), classify each relevant category as:

- found and verified;
- checked — no relevant result;
- unresolved.

A CAP is research-complete only when all relevant categories have been checked and no material unresolved question remains. “No relevant result” is a valid outcome. There are no quotas. Never invent facts or add filler to increase the count.

## 10. Editorial rework and fact selection

Keep verified strong facts. Remove or repair generic, duplicated, weak, inaccurate or unsupported facts. Add missing defining stories and meaningful attractions. Do not preserve the old fact count as a quota.

Tourist attractions and stories are both first-class content. Do not automatically prefer history over tourism, tourism over nature, or one editorial category over another. Let the actual identity and significance of the place determine the selection and order.

For each candidate ask:

- What is the actual subject and why is it significant?
- What would a visitor or local resident learn from this fact?
- Is the story distinct from existing facts?
- Is its relationship to the CAP defensible?
- Can its claims and map location be verified?
- Does it provide genuine local discovery value rather than generic description?

Do not combine several unrelated attractions into one overloaded fact merely because they are near each other. Do not split one continuous story artificially into multiple facts.

### 10.1 Writing quality

Write independent, readable, source-based popular history and cultural/geographic storytelling — not advertising, a bare catalogue or an academic paper. Target an average of approximately 500–600 characters including spaces per fact in the base language. Treat this as an editorial average, not a mechanical per-fact limit; never pad a weak subject to reach it.

- Start with the actual subject or an interesting supported connection.
- Explain what the place is and why it matters.
- Connect causes, people, events and consequences where the evidence supports them.
- Use concrete names, dates and details when they add value and are verified.
- Technical dimensions, construction dates and architectural styles should support the story, not replace it.
- Avoid empty phrases, tourism clichés, unsupported superlatives and generic descriptions.
- Do not use marketing slogans, purchase calls, company promotion or current offers.
- Do not pad facts with general information unrelated to the specific CAP.
- Do not confuse opening hours or temporary visitor conditions with enduring significance.
- Use appropriate date precision. If the evidence supports a century or approximate period rather than an exact year, do not manufacture precision.
- Distinguish documented history, scholarly interpretation, hypothesis, oral tradition and legend. A legend may be told engagingly when culturally meaningful, but must be identified as a legend/tradition, not presented as proven history.

### 10.2 Priority

Assign exactly one priority permitted by the schema:

- **A — exceptional significance:** internationally or nationally important heritage, event, person, archaeological site, natural phenomenon, artwork or technical achievement.
- **B — exceptional hidden gem:** unusually surprising, distinctive and well-supported story or place that may be less widely known.
- **C — significant regional value:** important regional heritage, person, museum, landscape, tradition, industrial legacy or visitor attraction.
- **D — local value:** well-supported local history, smaller heritage, tradition, natural feature or story that helps explain local identity.

Priority is relative to the CAP and the actual value of the fact. A remarkable local story may outrank a better-known but less locally defining subject. Do not use priority as a substitute for ordering.

### 10.3 Categories

Use only the exact controlled values in the current Italian schema.

Editorial `category` values:

- `nature_and_landscape`
- `heritage_and_monuments`
- `architecture_and_urbanism`
- `history`
- `culture_and_industry`
- `people`
- `geography_and_context`
- `tourism_and_surroundings`
- `hidden_gem`
- `local_story`
- `other_verified_significance`

Map `map_category` values:

- `castle`
- `religious_site`
- `historical_monument`
- `architecture`
- `historic_city`
- `museum`
- `archaeological_site`
- `nature`
- `viewpoint_landscape`
- `park_garden`
- `technical_heritage`
- `cultural_site`
- `visitor_attraction`
- `local_culture`
- `science_site`
- `personality`
- `sports_venue`

Every fact must have exactly one `map_category`. Choose it according to the primary subject, not merely the physical object where the pin is placed. For a fact whose main subject is a specific person, use `personality` even if the pin is at a building or monument.

The physical `location.type` is a separate field and must use only the exact enum values in `schema.json`. Do not confuse it with editorial `category` or `map_category`.

### 10.4 Exclusions and advertising

Do not add as standalone permanent facts:

- ordinary shops, restaurants, hotels, current companies or businesses without independent historical, cultural, technical or visitor significance;
- paid promotion, sponsored content, affiliate material, marketing slogans, company SEO copy or sales-oriented text;
- ordinary services and everyday infrastructure;
- temporary events without enduring historical or cultural value;
- unsupported legends presented as established facts;
- generic regional information without a concrete relationship to the CAP;
- duplicate attractions or stories already assigned to another CAP;
- ordinary graves or cemeteries without exceptional documented heritage, artistic, historical or visitor value;
- large routes or diffuse themes as point facts when they cannot be meaningfully located under the schema.

A company or product may be included only when the fact concerns a documented historical, industrial, cultural or technical legacy, a public museum/visitor site or another independently significant story. Commercial existence alone is not enough.

An official company website may be a source for its own history, collection, museum or technical heritage, but claims of importance should be independently verified where possible.

## 11. Seven languages and international clarity

Every record must contain all seven languages required by the schema:

- `cs` — Czech;
- `de` — German;
- `en` — English;
- `es` — Spanish;
- `fr` — French;
- `it` — Italian;
- `nl` — Dutch.

Every language version must be independently understandable to a reader who may know nothing about Italy, its history, institutions, religions, regional culture or local terminology.

- Translate meaning and necessary context, not just words.
- Preserve correct Italian and local proper names. Do not invent translations of place or artwork names.
- Explain unfamiliar terms such as Comune, Regione, frazione, contrada, sestiere, palio, confraternita, podere, casale or other local expressions when needed for comprehension.
- Explain historical, political, religious, cultural and administrative context at first meaningful use.
- Explain what a local tradition actually involves, how it is practised and what role it has in the community, where supported by sources.
- Preserve the same facts, important details, uncertainty and meaning across all seven versions.
- Do not add new claims, omit essential context or change historical interpretation in translation.
- Do not assume that a reader of any language knows Italian local institutions or customs.

For every fact in every language, ask:

1. Does the reader understand what place, person, event or subject is being described?
2. Are local names and terms understandable?
3. Is the necessary historical, cultural or institutional context present?
4. Is the significance clear?
5. Are the statements accurate, natural and supported?

If any answer is no, revise that language version. Identical fact IDs and fact order must be preserved across the seven translations.

## 12. JSON structure and validation

The complete record must validate against the current `data/italy/schema.json`.

Mandatory top-level fields are:

- `postcode`
- `city`
- `district`
- `county`
- `state`
- `representative_place`
- `representative_point`
- `access_point`
- `facts`
- `photo`
- `verification` (with the exact shared keys and types, including `plz_source`, `geographic_test_data`, `access_point_verified` and the optional compatibility metadata defined by the schema)
- `sources`
- `translations`

Important structural rules:

- `postcode` is exactly five digits stored as a string.
- `city` contains all verified Comuni associated with the CAP, using current ISTAT names separated by commas; it is not restricted to a single post-office Comune.
- `district` is a documented sub-municipal locality only when genuinely relevant, otherwise null; it is not a list of settlements.
- `county` and `state` contain all applicable current official territorial units and Regioni for the associated Comuni, separated by commas where more than one applies.
- `representative_place` and `representative_point` refer to the same representative place.
- `access_point` remains separate.
- Every fact has a unique sequential ID in the format `fact_001`, `fact_002`, etc.
- Every fact has title, text, one permitted editorial category, one priority, a `sources` array of exact source URLs and exactly one permitted map category.
- New or enriched facts must include the `location` property. Use a valid location object when a defensible point exists; use null only as the final justified fallback.
- Every location object must contain the schema-required fields and valid enum values.
- Every URL in `facts[].sources` must match a URL in a top-level source object. Top-level source objects contain exactly `title`, `url` and `type`; do not add IDs or other properties.
- All seven translation objects must exist and contain `representative_place` and `facts`.
- Each translation must contain the same fact IDs in the same order as the source-language facts.
- Translated fact objects contain only the fields allowed by the schema; do not add coordinates or duplicate location metadata to translations.
- `verification.plz_source` must identify the actual source used to verify the CAP. Populate the other verification fields exactly as defined by the shared schema.
- Set `verification.geographic_test_data` to true only after the geographic assignment has actually been checked.
- Set `verification.access_point_verified` to true only after the access point has actually been checked.
- `photo` must follow the schema; use null when no valid, properly attributed photo data is available.
- Do not add undocumented keys, comments, trailing commas, Markdown or explanatory prose inside JSON.

The schema requires `representative_point` and at least one fact. `access_point` is nullable and may be `null` when no defensible practical navigation point is available. Do not fabricate required values.

## 13. Preservation and scope protection

- Keep all existing facts that meet the current standard and are correctly assigned.
- Remove, replace or rewrite a fact only for a clear content, evidence, duplication or geographic reason within the scope of the rework.
- Geographic enrichment alone does not authorise rewriting protected editorial text, shortening facts, changing priorities, changing order or altering translations.
- Do not modify neighbouring CAP records while working on one CAP unless the user explicitly authorises a separate operation.
- Do not move a fact to another CAP, create a duplicate or alter the project scope based on one unverified postal code or institutional address.
- Do not change the schema, Country Profile, Content Standard, application code, database structure or sequence as part of ordinary record rework.
- A suspected missing CAP or sequence discrepancy is a separate research finding, not permission to expand or change the project scope.

## 14. Italian storage and production lifecycle — Neon is canonical

Italy has an established production storage target and lifecycle. The single source of truth for Italian CAP records is the Neon project **Europe Explorer**, database **neondb**, table **public.italy_cap_records**. Do not describe the Italian workspace as preparation-only and do not treat storage as an unapproved future workflow.

The table contract is:
- `postcode`: five-character CAP identifier stored as text;
- `workflow_status`: database-level workflow state;
- `record`: complete Italian CAP record stored as JSONB;
- `created_at` and `updated_at`: database timestamps.

GitHub stores versioned schemas, standards, prompts, sequence and supporting documentation. It is not a second production record store. Do not save Italian production CAP records to GitHub data files, local JSON files, Czech Supabase, the German dataset or another database as an alternative source of truth. The EuropeExplorer application/client has read-only access to Neon; the authorised agent workflow may write through the established Neon connection under the scope and safeguards defined in this section.

### Rework write procedure

- Rework the explicitly requested existing CAP row in `public.italy_cap_records`. Do not create a new CAP row, invent a missing CAP, change the sequence, alter the table, or modify database permissions as part of ordinary rework. If the requested CAP row does not exist, stop and report the exact blocker.
- Before writing, read the current row and confirm its postcode and current workflow state. Preserve unrelated rows and fields.
- Validate the complete JSON record against the current `data/italy/schema.json` and the applicable Content Standard before saving.
- Save the complete record to the JSONB `record` column and set the database `workflow_status` consistently with the content lifecycle below. Do not partially overwrite a record or silently discard existing valid content.
- After every write, perform a fresh read-back from Neon. Verify the exact postcode, full saved JSON record and database `workflow_status`. Do not expect or add root-level JSON `status` or `data_version`; these are not part of the shared Czechia/Italy record schema.
- Use only the established, authorised Neon connection. Never expose credentials or add write access to the Explorer client.

### Automatic correction authority within an explicitly requested scope

When the user explicitly asks to rework or audit an existing CAP or CAP range, that request authorises the agent to save confirmed, safe corrections to the existing production rows within that exact scope. **Do not ask for separate approval for each ordinary correction, fact or language.**

This includes:
- correcting demonstrably wrong, copied, missing, empty, truncated, corrupted or mistranslated `translations[lang].facts[].title/text` values;
- creating a correct independent translation from the Italian master when one or more language fields contain another language's text;
- ensuring `translations.it` exactly mirrors the Italian master `facts[].title/text`;
- correcting clear spelling, grammar, agreement, punctuation and transliteration errors in translations;
- correcting other objectively verifiable, low-risk record errors when the applicable prompt explicitly permits that class of correction.

For translations, match exclusively by stable fact ID, preserve the exact fact meaning, names, dates, nuance and uncertainty, and retain a correct existing translation (including Dutch) rather than rewriting it unnecessarily. Change only the affected `title` and `text` fields. Preserve IDs, order, master facts, sources, locations, categories, priorities, verification data and all unrelated JSONB content.

If the Italian master itself is factually uncertain, source evidence conflicts, a correction would require guessing, or the change would alter editorial meaning, CAP assignment, schema, database structure, sequence, publication state or another protected area, do not make that change automatically. Record the precise issue as `REVIEW REQUIRED` and ask only for the decision that is genuinely needed.

After every write, read the row back from Neon and verify the changed fields, all seven language versions, fact IDs and order, and preservation of unrelated data. Keep `workflow_status` unchanged during ordinary rework and audit corrections. This authority never permits publication, backup, read-only locking, schema changes or edits outside the explicitly requested scope.

### Mandatory content lifecycle

The database-level `workflow_status` is separate from the JSON record and is not a JSON field. Use the established lifecycle values `placeholder`, `validated` and `published`: `placeholder` means the CAP awaits rework; `validated` means the rework is complete and awaits the separate final audit; `published` means the final audit passed and publication was explicitly authorised. A completed rework is saved as `workflow_status = 'validated'`. A record may be set to `published` only after the complete final audit passes and the user explicitly instructs publication. Do not add `status` or `data_version` to the JSONB record; neither exists in the shared canonical record schema. Do not promote a record automatically or apply an unrequested lock.

Do not infer Czech Supabase tables, German storage conventions, endpoints or write APIs for Italy. Do not claim that a record has been saved, validated, published or backed up unless the corresponding operation actually succeeded and, for database writes, the read-back was verified.

## 15. Completion checklist

A CAP is complete only when all applicable checks below pass.

### Postal and administrative identity

- [ ] CAP is a current, verified five-digit string.
- [ ] The complete defensible set of Comuni associated with the CAP has been identified from appropriate evidence.
- [ ] `city` lists all those Comuni using current ISTAT names, separated by commas; no arbitrary single Comune has been selected.
- [ ] `county` and `state` reflect all applicable current intermediate territorial units and Regioni.
- [ ] No exclusive serving post office has been invented or made a prerequisite when the postal authority does not designate one.
- [ ] `district` is used only for a genuinely relevant sub-municipal locality, or is null.

### Full geographic coverage

- [ ] The full CAP research area and all associated Comuni have been investigated.
- [ ] Relevant served Comuni, frazioni, villages, località and other named settlements have been identified.
- [ ] Meaningful settlements can be represented at their own geographic locations where supported.
- [ ] Relevant verified attractions and stories from across the CAP area have been considered.
- [ ] Each fact has one defensible primary CAP assignment and no inappropriate duplication.
- [ ] A fact about a frazione/località is not pinned at a distant parent-Comune centre merely for convenience.

### Map geography

- [ ] Representative place and representative point identify the same genuine place.
- [ ] Access point is separate and has not been confused with the representative point or fact locations.
- [ ] Every meaningfully locatable fact has a source-supported map point.
- [ ] Coordinates refer to the actual object/site or an honest, geographically relevant fallback.
- [ ] Exact, approximate, area-representative and historical-approximate accuracy are distinguished honestly.
- [ ] Null locations remain only where no defensible point can be established.

### Research and editorial quality

- [ ] Broad discovery and thematic gap audit have both been completed.
- [ ] Relevant historical, tourist, cultural, artistic, natural, scientific, industrial, military and technical topics have been checked.
- [ ] Important attractions and defining stories have not been overlooked.
- [ ] Facts are distinct, well-supported, relevant and ordered by actual significance.
- [ ] Stories provide meaningful context and local discovery value without exaggeration.
- [ ] No unsupported claims, advertising, marketing or filler remain.

### Sources, languages and structure

- [ ] Important claims have competent supporting sources.
- [ ] Geographic evidence supports each map point.
- [ ] All seven languages are complete, natural and independently understandable.
- [ ] Fact IDs and order match across all translations.
- [ ] Editorial categories, map categories, priorities and location types use only schema-approved values.
- [ ] Complete JSON validates against the current Italian schema.
- [ ] Verification flags reflect checks actually performed.
- [ ] No unauthorised database or sequence changes have been made.

If a material required check fails, do not claim the CAP is complete. State the precise blocker and finish only the independent safe work.

## 16. Final principle

TRAVEL must represent the entire real geographic area of each CAP without making the JSON administrative naming chaotic.

**One CAP record. All associated Comuni listed in `city`. Full research across the entire CAP area without municipality-based content partitions. Every meaningful attraction and verified fact mapped where it actually belongs.**

The record's administrative anchor must be predictable and easy to audit. Its content and map must remain geographically rich, accurate and complete.

The objective is not the largest number of facts or the longest text. It is a trustworthy map and a collection of stories that can surprise visitors and local residents alike — through depth, discovery and evidence, never through exaggeration.
