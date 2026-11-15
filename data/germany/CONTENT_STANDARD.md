# TRAVEL — CONTENT STANDARD V3

## 1. Single source of truth

For German postal-code data, the only authoritative production rules are:

1. `schema.json` — machine-readable structure and validation rules.
2. `CONTENT_STANDARD.md` — semantic/content rules.

Every new JSON record MUST comply with both.

No new JSON may be created outside these rules. Do not add fields, sections, facts, categories, source practices or content patterns ad hoc.

The standard is the quality contract for TRAVEL.

**Version 3: every fact belongs to exactly one postcode, and its primary map location must lie inside that postcode's official boundary. Facts and pins must never be duplicated across neighboring postcodes. Relevant surrounding places outside the postcode may be mentioned only as context in the text; they must not be added as separate facts or map pins. The geographic-enrichment preservation rules remain unchanged: they do not authorize rewriting, shortening, expanding, re-ranking, or retranslating existing facts during a coordinate-enrichment pass.**

**Retained from Version 1.2:** fact selection and ordering must reflect the actual identity and relevance of each specific place. No subject category has automatic priority. Version 2.0 preserves all rules from Version 1.2 and adds two binding clarifications: one unambiguous representative place per postcode, and target-language explanations for local names and cultural references.

---

## 2. Core philosophy

TRAVEL is not a database that tries to fill every postcode with the same amount of text.

TRAVEL is a curated database of places. Each postcode receives as much information as the place genuinely deserves.

Quality, relevance and local significance are more important than quantity.

A postcode may have 3 excellent facts. Another may have 15. Both are correct.

NEVER invent or expand content merely to hit a quota.

The target is not:

> “How many facts can we put into this postcode?”

The target is:

> “What would a visitor, researcher or local tourism professional genuinely want to know about this place if they arrived here?”

---

## 3. Mandatory discovery before writing

Before writing any facts, the creator MUST first perform a structured significance check of the postcode. Wider surroundings may be researched for context, but only facts with a verified primary location genuinely belonging to the postcode area may be included. Establish that connection through reliable postal, administrative, institutional, address or other location-specific sources. Do not download, inspect or validate postcode polygons, and do not perform polygon-based boundary checks.

Do not begin by collecting random facts.

First determine what the place is and what stories define it.

### 3.1 Local significance check

Actively investigate whether the postcode or its relevant geographic surroundings are connected with:

- major historical events;
- important settlements or historic villages;
- UNESCO or other internationally significant heritage;
- nationally or regionally important monuments;
- important people;
- important religious, cultural or artistic history;
- major industries, factories or technical achievements;
- famous brands or products;
- automobile, railway, aviation, shipping or other transport history;
- mining, energy or other major resource industries;
- important trade routes or infrastructure;
- military history;
- major scientific or educational institutions;
- protected landscapes and nature;
- unusual geological or archaeological features;
- major tourist attractions;
- distinctive local traditions;
- unusual documented stories or hidden gems;
- other facts with significance clearly greater than ordinary local trivia.

Where they exist, identify and consider all genuinely significant landmarks and notable places: internationally or nationally known attractions as well as smaller sites of local or regional importance. Do not omit a defining monument, historic building, palace, memorial, museum or other major local attraction merely because it is less prominent in general search results.

### 3.2 Significant stories must not be missed

If research reveals a historically, culturally, technically, industrially, naturally or regionally important story, it MUST be considered for inclusion even if:

- it is not a conventional tourist attraction;
- it is associated with an industry or product rather than a monument;
- it is no longer active;
- it is mainly remembered by a particular generation;
- it is surprising rather than famous;
- the place has already reached an arbitrary number of facts.

A significant industrial or cultural story is not filler.

For example, a place known for a major automobile brand, vehicle production, railway technology or industrial product should not receive only generic “history” facts while that defining story is omitted.

---

## 4. Relevance determines selection and order

There is no universal subject hierarchy for TRAVEL. The actual identity of each place determines which stories are most important and which facts appear first.

Before finalizing a record, determine what the specific area is best known for, what genuinely shaped its identity, why people visit or recognize it, and which stories most clearly explain why the place matters.

Order facts by their real significance and relevance to that place—not by the order in which research discovered them, by how easy they are to source, or by an automatic preference for nature, industry, technology, tourism, history, famous people, or hidden gems.

Examples:
- If a place is best known for a castle and a famous film shot there, the film connection and castle history may come before secondary landscape details.
- If a place is known as a gateway to distinctive rocks, a national park, or exceptional scenery, nature and landscape may come before a less relevant historical personality.
- If a place is defined by a major industrial, technical, scientific, or transport achievement, that story may lead.
- If its identity is primarily shaped by a historic event, cultural tradition, architecture, a person, or another local story, that subject may lead instead.

These are examples, not templates. Apply the rule independently to each postcode. Do not force a place into a category or give any category priority just because it appears in this standard's research checklist.

Include every fact that is genuinely relevant, distinct, sufficiently supported, and useful—even if the final record contains 10, 15, or more facts. Do not remove good facts to meet a preferred length. Equally, do not add facts just to make a record look comprehensive. Relevance, evidence, and distinct value determine inclusion.

The defining story or stories should generally appear first. Strong secondary facts follow in descending order of relevance. Hidden gems are valuable, but must not be placed above a more defining story simply because they are surprising.

This rule governs both **which facts are included and the order in which they are presented**. Preserve the same factual priorities across all translations.

---

## 5. Geographic scope — postcode-specific facts

**A fact belongs to exactly one postal-code area, and its primary location must genuinely belong to that postcode.** This is a binding geographic rule for all TRAVEL records.

Establish the connection using reliable postal, administrative, address, institutional or other location-specific evidence. Do not use postcode polygons or perform polygon-based boundary checks.

Binding rules:

- Every fact MUST have one primary real-world location genuinely associated with the postcode record to which the fact belongs.
- Do not assign a fact to a postcode merely because it is nearby, in the same city, district, county or region, or thematically connected.
- Each fact may be assigned to one postcode record only. Never duplicate the same fact or physical attraction in neighboring postcode records.
- A fact about a site associated with more than one area may be included only when its primary local connection to the current postcode is clear and supported. If that connection is ambiguous, flag it for editorial review.
- A surrounding place that belongs to another postcode may be mentioned briefly as context when genuinely useful, but it MUST NOT become a separate fact, map pin, representative place or location assigned to this postcode.
- Research may examine wider surroundings to understand context and discover relevant stories. Research scope does not expand the geographic scope of facts.
- A fact tied to an area-wide custom, tradition, personality or other phenomenon may use the postcode's representative point only where the standard's relevant fallback rule permits it and the fact genuinely belongs to that postcode.
- If the local connection or location cannot be reliably confirmed, mark the fact for verification. Do not guess, move coordinates to a convenient point, or silently retain an uncertain pin.

### 5.1 One representative place and one representative point

Every postcode MUST have exactly **one specific representative place** in `representative_place`. The corresponding `representative_point` coordinates MUST identify that same place and must be supported as belonging to the postcode area.

Binding rules:

- Select one clearly identifiable, real-world place or site that best represents the postcode.
- Enter one place only. Do NOT list two or three alternatives, several attractions, a collection of landmarks, or a broad group of places in this field.
- The representative place must be specific enough to identify and locate unambiguously. Prefer a named, mappable site or object, such as a particular square, building, monument, museum, station, park feature or other clearly defined location.
- The representative point must point directly to the selected representative place. It must not point to a different attraction, a second candidate, a general district center, or an arbitrary point elsewhere in the postcode.
- The place and coordinates must form one consistent pair: a reader or map user looking up the coordinates should arrive at the named representative place.
- Choose the single strongest representative candidate based on its relevance to the postcode, local significance, geographic fit and ability to represent the area. Do not choose several places to avoid making an editorial decision.
- If no famous attraction exists, select another suitable, verifiable and precisely mappable place that genuinely represents the area. Do not invent a landmark or use a vague area name merely to fill the field.
- Keep the representative place genuinely associated with the postcode. Do not select a famous place elsewhere in the city simply because it is better known.
- Translations may explain the selected place in the target language, but must preserve the identity of the same one place. Translation must not introduce additional candidates.

This one-place rule applies ONLY to the representative-place field and its corresponding representative coordinates. It does NOT limit the number of distinct facts, provided every fact independently satisfies the postcode-association rule above.

The representative place and `representative_point` are separate from `access_point`. This rule does not authorize changing, combining, auditing or redefining access-point data. Access-point handling remains governed by its existing rules and schema.

## 6. Build the story before building the fact list

After research, identify the strongest stories and organize them conceptually before writing individual facts.

Prefer a coherent local narrative where one exists.

A strong sequence may look like:

**origin → development → important people → industry/technology → cultural significance → present-day legacy → nature/hidden gem**

This is especially valuable when several facts describe different periods of the same local story.

Example:

A city with a major automotive history may have a meaningful chain such as:

**founder/person → company/brand → later industrial development → vehicle production → museum/present-day legacy**

Such connected facts are often more valuable than five unrelated attractions.

Do not force a narrative where none exists.

---

## 7. What every postcode should answer

A user arriving virtually at a postcode should understand:

- what kind of place this is;
- why it is worth noticing;
- what is historically, culturally or naturally important;
- what significant things exist in the relevant surrounding area;
- what surprising or lesser-known facts can be discovered here.

A professional tourism, heritage or regional-development user should ideally find at least some information that is genuinely useful or unexpectedly interesting.

---

## 8. Content categories

Facts may belong to one or more of these conceptual areas:

- nature_and_landscape
- heritage_and_monuments
- architecture_and_urbanism
- history
- culture_and_industry
- people
- geography_and_context
- tourism_and_surroundings
- hidden_gem
- local_story
- other_verified_significance

Use **architecture_and_urbanism** for facts whose main significance concerns architecture, urban planning, settlement design, housing estates, urban development or notable building concepts and ensembles. This includes historically or technically significant residential planning and modernist or post-war architectural experiments. Use **heritage_and_monuments** when the primary focus is the heritage or monument status and historical significance of a specific protected building or site. The categories may be conceptually related, but choose the one that best describes the fact's central subject.

These are content categories, NOT a fixed order.

---

## 9. Priority

Categories do not have equal automatic priority. The importance of the individual fact determines its position.

### Priority A — exceptional significance

Examples:

- UNESCO designation
- national park
- nationally or internationally important monument
- exceptional natural feature
- major historical event
- person of exceptional significance with a strong connection to the place
- historically important company, invention, technology or industrial achievement with national or international relevance

### Priority B — exceptional hidden gem

A hidden gem can be small and local but may rank highly if it is unusually surprising, distinctive and well documented.

Examples:

- an unexpectedly important local site;
- a rare or unusual surviving feature;
- a little-known historical, cultural, technical or natural story;
- a distinctive place or object with significance disproportionate to its size or fame;
- a documented local fact that would strongly satisfy the TRAVEL “I know this place, but I did not know that” test.

Hidden gems must still be genuinely interesting, specific, surprising or unusually useful. A small object is not automatically a Priority B fact.

### Priority C — strong regional significance

Examples:

- important protected natural area
- significant historic building
- important industrial heritage
- major regional tourist attraction
- significant historical personality
- important transport/technical heritage
- regionally important company, product or production history

### Priority D — local significance

Examples:

- lesser-known local historical personality
- local craft or industry
- smaller historic structure
- local historical event
- locally important natural feature

Priority is contextual. A fact may move higher or lower when compared with the other facts for that postcode.

---

## 10. Nature and landscape

Nature is a first-class TRAVEL topic, not filler.

For every postcode, actively check whether the place or its relevant surroundings include:

- national park
- nature/protected park
- protected landscape or equivalent
- nature reserve
- natural monument
- significant river, lake or wetland
- mountain or valley
- rock formation
- cave
- geological feature
- exceptional tree
- other notable natural feature

Do not merely name the protected area.

Explain why it matters and what makes it distinctive.

If no meaningful natural feature is relevant, do not invent one.

---

## 11. Researching the wider surroundings

Wider surroundings may be researched to understand the postcode's history, geography and context, and to identify connections that help explain facts located inside the postcode.

However, **a place that belongs to another postcode MUST NOT be included as a separate fact or map pin in this postcode record**, even when it is nearby or historically, geographically or thematically connected.

An external place may be mentioned briefly in the text of an in-boundary fact only when that context is genuinely necessary and does not imply that the external place belongs to this postcode. Do not assign the external place's coordinates to the fact.

Never duplicate one attraction or fact across neighboring postcode records. Each mapped fact belongs to exactly one postcode: the postcode containing its verified primary location.

## 11A. Standardized TRAVEL map categories (shared taxonomy V1)

Every fact MUST have exactly one `map_category`. This is a stable, language-neutral classification of the fact's primary subject and will determine the future Europe Explorer map icon. It does not replace or alter the existing `category` field, which remains the broader editorial/research classification.

Use exactly these 17 values:

| map_category | Indicative symbol | Meaning and assignment rule |
|---|---|---|
| `castle` | 🏰 | Castles, palaces, manor houses, fortresses, forts, fortified residences and ruins of these sites. |
| `religious_site` | ⛪ | Churches, cathedrals, chapels, monasteries, synagogues, mosques, pilgrimage sites and other primarily religious/sacred places. |
| `historical_monument` | 🗿 | Monuments, memorials, commemorative sites, historical monuments, significant fountains and public commemorative/art works not better classified elsewhere. |
| `architecture` | 🏛️ | A single significant building or architectural work whose primary identity is not a castle, religious building, museum or technical heritage site. |
| `historic_city` | 🏙️ | Historic centres, old towns, squares, streets and coherent historic urban ensembles; never a single building. |
| `museum` | 🖼️ | Museums, galleries, open-air museums, collections, memorial/documentation centres and visitor centres primarily presenting or interpreting collections, history or a subject. |
| `archaeological_site` | 🏺 | Archaeological sites, prehistoric settlements, excavations and places whose primary value is archaeological research or surviving archaeological remains. |
| `nature` | 🌳 | Protected areas, natural features, forests, waterfalls, lakes, rivers, habitats, geological phenomena and other natural locations. |
| `viewpoint_landscape` | 🏞️ | Observation towers, viewpoints, panoramas, distinctive scenery and landscape areas whose main visitor value is the view or landscape. |
| `park_garden` | 🌷 | Public and historic parks, gardens, botanical gardens, arboreta, zoos, safari/wildlife parks, bird parks, aquariums and butterfly houses: managed parks and living collections. |
| `technical_heritage` | ⚙️ | Technical, industrial, mining, energy, transport and engineering heritage, historic factories, mines, railways, bridges and infrastructure. |
| `cultural_site` | 🎭 | Theatres, opera houses, concert halls, cultural centres and other physical venues primarily dedicated to live arts or public cultural activity. Not museums. |
| `visitor_attraction` | 🎡 | Significant visitor experiences and attractions without a more precise primary category, such as amusement/water parks, accessible caves and underground sites, historic spas, scenic cruises or visitor-accessible operations. |
| `local_culture` | 🎎 | Local traditions, folklore, customs, crafts, festivals, gastronomic heritage and other intangible/community cultural phenomena, not their separate buildings or cultural venues. |
| `science_site` | 🔭 | Significant, visitor-relevant scientific or research places, such as observatories, planetariums, science centres and accessible research institutions. Ordinary schools or universities do not qualify automatically. |
| `personality` | 👤 | A fact whose primary subject is a specific person with a documented connection to the postcode, regardless of the physical location used for the map pin. |
| `sports_venue` | 🏟️ | Significant stadiums, sports arenas, historic sports grounds and sports complexes with documented visitor, historical or wider public value. |

The symbols are indicative thematic examples only. They are not JSON data or final graphic assets. The future map icon set will be keyed to the stable `map_category` values; changing icon artwork must not require changing data identifiers.

### Binding classification rules

- Choose according to the fact's **primary subject**, not merely the physical object used for the pin.
- Every fact has exactly one map category. Never use combined values, custom variants or ad hoc categories.
- If the primary subject is a specific person, always use `personality`, even when the pin is at their home, workplace, museum, memorial, grave or postcode representative point. An incidental mention of a person does not trigger this category.
- Castles, palaces, forts and fortresses use `castle`; religious buildings and pilgrimage sites use `religious_site`; museums and galleries use `museum`; archaeological locations use `archaeological_site`.
- A coherent historic urban ensemble uses `historic_city`; a single significant building uses `architecture`, unless a more specific category applies.
- A primary technical or industrial identity takes precedence over generic architecture. Historic water infrastructure uses `technical_heritage`; a natural water feature uses `nature`.
- Protected nature and natural features use `nature`; a viewpoint or landscape whose main value is the panorama uses `viewpoint_landscape`.
- Botanical gardens, arboreta, zoos, aquariums and comparable living collections use `park_garden`. Amusement and water parks use `visitor_attraction`.
- A physical venue primarily dedicated to live arts uses `cultural_site`; a museum remains `museum`. Traditions and intangible cultural practices use `local_culture`.
- A `science_site` must have a genuine scientific/research identity and independent visitor, historical or public significance. Ordinary educational institutions do not automatically qualify.
- A significant sports venue uses `sports_venue`; an ordinary local playing field or facility without special significance is not automatically a fact.
- `visitor_attraction` is a fallback only when the primary nature of the place/experience does not fit a more precise category. Do not use it instead of a castle, museum, natural site, technical heritage site, etc.
- UNESCO is not a separate map category. Classify the site by its actual subject.
- Military history does not determine the category by itself: a fortress may be `castle`, a battlefield or memorial site `historical_monument`, and military technology/infrastructure `technical_heritage`.
- Map category does not determine fact priority, order, significance or inclusion. The value is language-neutral and is not translated in the six language versions.
- Map category and geographic location are independent. Never infer the category solely from the type or name of the coordinate point.

For borderline cases, classify by the primary identity and main message of the fact, apply the precedence rules above, and briefly justify the choice in working notes. If the primary subject cannot be determined, clarify the fact editorially rather than inventing a new category.

### Geographic fallback for facts tied to the postal-code area

The record is about the individual postal-code area. When a fact genuinely belongs to that area but has no single defensible physical point, it must still receive a usable map location so Europe Explorer can display it.

- **Local customs, traditions, language, folklore, cultural identity and other area-wide practices:** use the postcode's existing `representative_point` as the fact location. Do not omit a relevant local fact merely because the practice has no single venue or address.
- **People:** first identify and verify a concrete place in this postcode that the person was connected with (for example birthplace, residence, workplace, place of study, creative work, documented activity, memorial or burial place). Use that place when the relationship is supported.
- If no defensible person-related physical place can be identified within the postcode, use the postcode's `representative_point`. The fact text MUST explicitly explain why the person is important to this particular postal-code area and what the documented local connection is. A biography without a meaningful connection to the postcode is not sufficient.
- For these fallback pins, set `facts[].location.lat` and `lon` to the exact existing `representative_point` coordinates; set `name` to the postcode's `representative_place`; set `type` to `postal_area`; and set `accuracy` to `area_representative`. Do not invent a new coordinate or use `access_point`.
- The `location.source` must support the representative place/point. The fact's own sources must independently support the local custom or the person's connection and significance.
- A fallback pin means that the fact is associated with the postal-code area, not that the custom or person-related event occurred at the representative place itself. Do not imply otherwise in the fact text.
- This fallback applies only to facts belonging to the current postcode. Facts about a wider county, Bundesland or region belong in a separately scoped record, not copied into an individual postcode without a genuine local connection.

This is a map-display assignment for existing postcode-level content. It does not change editorial meaning, selection or wording standards. The shared 17 allowed `map_category` values are defined above. For person-centred facts, `personality` takes precedence over the category of the physical site used for the pin.

During geographic enrichment of protected completed records, preserve every existing fact field and add both `location` and `map_category` as the only permitted new fact-level metadata. Select the map category from the fact's established subject; do not rewrite the fact itself.

---

## 12. History

Historical information should explain the place rather than become a list of dates.

Prefer:

- events that changed the place;
- reasons the settlement developed where it did;
- industry and crafts;
- trade;
- transport;
- wars and major historical events;
- important buildings;
- spa history;
- notable people;
- surviving traces of the past;
- technological and industrial development;
- long-term cultural or social legacy.

A person or minor event should normally be integrated into the relevant historical story rather than presented as isolated trivia.

---

## 13. Industry, technology and cultural memory

Industrial and technical history deserves the same editorial attention as monuments and traditional tourism.

Actively check for:

- factories and production sites;
- important brands;
- vehicles and machinery;
- inventions and engineering;
- railway and transport technology;
- mining and energy;
- shipbuilding;
- aviation;
- chemical, textile, glass, metal or other major industries;
- products strongly associated with the place;
- museums preserving industrial history;
- stories that remain important to regional or generational cultural memory.

Do not reduce such history to a company name and a date.

Explain why the connection matters.

If a product, brand or technology was widely known beyond the locality, that broader significance should be reflected in the fact.

Where a story has strong generational or cultural memory, it may be included when it is documented and relevant. Clearly distinguish documented history from folklore, popular sayings or retrospective local memory.

---

## 14. Hidden gems

A hidden gem must be genuinely interesting, specific, surprising or unusually useful.

A small object is not automatically a hidden gem.

“An old church exists” is not enough.

If the church has an unusual history, architecture, event, connection or other documented significance, that significance should be explained.

Hidden gems require reliable sources just like major facts.

The ideal hidden gem should create the reaction:

> “I never needed to know this, but I am very glad I know it now.”

---

## 15. Facts must have context

Facts should not be dumped as disconnected trivia.

Where appropriate, connect them into a coherent story:

**place → landscape → history → industry/culture → people → present-day significance.**

A minor fact can be valuable when it helps explain a larger story.

When several facts belong to one major local story, avoid unnecessary repetition. Each fact should add a distinct piece of information.

---

## 16. No arbitrary fact quota

There is NO fixed minimum or maximum number of facts.

Do not force every postcode to have:

- the same number of facts;
- the same number of categories;
- the same number of hidden gems;
- the same number of sources.

The correct number is the number required to represent the genuinely significant stories of the place without repetition or filler.

However, a postcode with an unusually rich history should NOT be artificially limited merely to match smaller postcodes.

A major city district, industrial center or historically exceptional place may legitimately require substantially more facts than a small rural postcode.

---

## 17. Quality over source count

There is no required number of sources.

6 good sources are welcome.
3 good sources are welcome.
1 excellent primary source can be better than 6 weak sources.

Never add sources merely to increase the count.

Prefer, where available:

1. primary/official sources;
2. archives, museums, universities and specialist institutions;
3. high-quality journalism;
4. reliable regional/local sources.

Do not treat repeated copies of the same claim as independent confirmation.

---

## 18. Source traceability

Important factual claims must be traceable to their sources.

Sources belong in the JSON data.

Sources are evidence, not user-interface content.

The public TRAVEL app should remain clean and readable; it should not display a wall of URLs under every fact.

A purchaser or researcher of the raw dataset must be able to inspect the sources and independently verify a sample of records.

Never use “a local person told us” as a substitute for documented evidence.

Local confirmation may be added in the future as an additional verification layer, but it is NOT required for the current dataset.

### 18.1 URL syntax — ASCII and percent-encoding (mandatory)

Every URL stored anywhere in a German postcode record MUST be a valid URI and MUST contain ASCII characters only. This applies to all URL fields, including:

- top-level `sources[].url`;
- `facts[].location.source`;
- `photo.url`, when present.

Never paste raw German umlauts or other non-ASCII characters directly into a URL. Convert each non-ASCII character in the URL path or query to its UTF-8 percent-encoded form before saving it. Examples:

- `ä` → `%C3%A4`
- `ö` → `%C3%B6`
- `ü` → `%C3%BC`
- `ß` → `%C3%9F`

For example, `.../Alt-Hohenschönhausen` must be stored as `.../Alt-Hohensch%C3%B6nhausen`.

Do not transliterate, translate, remove, or otherwise rewrite the URL's path or query. Percent-encode the original UTF-8 characters so the destination remains the same. Preserve existing valid percent-encoded sequences; do not double-encode them (for example, do not turn `%C3%B6` into `%25C3%25B6`).

Before publishing a record, inspect every URL field for non-ASCII characters and validate that it is a syntactically valid URI. A URL that contains raw umlauts or other non-ASCII characters is invalid for this dataset, even if a browser appears to open it.

---

## 19. Anti-bloat rule

Never manufacture content to make a postcode look richer.

Do NOT add generic statements such as:

- a church exists;
- a road passes through the town;
- a railway line passes through the area;
- there are shops;
- the landscape is beautiful;
- people live and work here.

Such statements are useful only when the specific fact has meaningful significance and that significance is explained.

If there are only 3 worthwhile facts, publish 3.

More facts are NOT automatically better.

---

## 20. The WOW test

Before a fact is included, ask:

1. Is it true and sourceable?
2. Is it genuinely interesting?
3. Does it say something meaningful about the place?
4. Would a normal user plausibly learn something new?
5. Could a tourism/history/geography professional find it useful?
6. Is it non-generic?
7. Is it free of promotional filler?
8. Is the source strong enough for the claim?
9. Does it represent a significant local story that would otherwise be missed?
10. If it belongs to a larger story, does it add something new rather than repeat another fact?

If the answer is no, improve the fact, find a better source, or leave it out.

The ideal TRAVEL reaction is:

> “I know this place, but I did not know that.”

Then:

> “I checked the source — and it is true.”

---

## 21. Commercial neutrality

Do not turn factual content into free advertising.

Do not routinely promote:

- hotels;
- restaurants;
- local companies;
- commercial services;
- individual businesses.

Commercial entities may be mentioned when they are genuinely part of an important historical, cultural, industrial or geographic fact, but the content must remain informational rather than promotional.

Future advertising belongs in a separate commercial layer.

---

## 22. No invented symmetry

Do not force every postcode to contain the same number of:

- historical facts;
- nature facts;
- famous people;
- hidden gems;
- sources.

A Berlin residential micro-area may legitimately have only a few strong facts.

A historically and naturally exceptional place may legitimately have many.

The dataset must reflect the real significance of the place, not an artificial content quota.

---

## 23. Final pre-publication audit

Before a new postcode is considered complete, the creator MUST perform a final content audit.

Check:

### Geographic completeness
- Did I identify the relevant districts, villages, industrial areas and natural areas belonging to this postcode?
- Did I check meaningful surrounding places with a genuine connection?

### Significance completeness
- Did I check for major history?
- Did I check people?
- Did I check industry and technology?
- Did I check transport?
- Did I check culture and heritage?
- Did I check nature and landscape?
- Did I check archaeology?
- Did I check hidden gems?
- Did I check stories with national, regional or generational significance?

### Editorial quality
- Are the strongest stories included?
- Did I accidentally omit a defining local story?
- Are any facts merely generic?
- Are any facts duplicates or unnecessarily overlapping?
- Does each fact add something distinct?
- Is the number of facts appropriate to the real significance of the place?

### Evidence quality
- Is every important claim sourceable?
- Are primary/official sources used where available?
- Are sources attached to the relevant facts?
- Have folklore and documented history been clearly distinguished?

### Translation quality
- Are all required languages semantically aligned?
- Are translations natural rather than literal?
- Are proper names preserved appropriately while explanatory text remains understandable?

### Proper names, local terminology and cultural context

All six language versions are written for readers who may have no prior knowledge of German language, history, institutions or popular culture. German source material does NOT mean that German terms can be left unexplained in the published content.

The goal is that a reader can understand the fact naturally without opening a German dictionary or having to research an unfamiliar local reference independently.

**Preserve the identity of official names, but explain their meaning and context in the target language whenever the reader may not understand them.**

Binding rules:

- Translate ordinary German words, descriptions, street types, facility types and generic place labels when a clear, natural equivalent exists. For example, translate *Straße* as „ulice“, *Bahnhof* as „nádraží“ and *Einkaufszentrum* as „nákupní centrum“ when these words are descriptive rather than part of an official name.
- Preserve genuine proper names in their original form when translating them would distort or obscure the identity of the place. This includes official names of canals, streets, squares, buildings, institutions, monuments, companies, brands and other named entities when no established target-language name exists.
- Do not invent pseudo-translations or mechanically attach target-language possessive endings to German names. For example, keep **Landwehrkanal** exactly as written in Czech; do not turn it into „Landwehrův kanál“ or another improvised translation.
- When an official name, local term, institution, museum, tradition, media character or cultural reference is unfamiliar or potentially ambiguous to the target audience, explain it naturally at its first relevant mention in each language version.
- The explanation must tell the reader what the thing actually is, what it does, or why it matters. A literal translation or a bare statement that something is famous is not sufficient.
- For cultural references, provide enough context for someone outside Germany to understand their significance. Do not assume that a Czech, Spanish, French, Italian or international English-speaking reader knows a German children's television character, local custom, historical institution or regional expression.
- Use the established conventional translation of a name when one genuinely exists and is familiar to the target audience. Otherwise retain the official name and add a concise explanation in the surrounding sentence.
- Explanations must be accurate, proportionate and relevant to the fact. Do not add long dictionary definitions or unnecessary background where a short clarification is enough.
- Apply this independently in CS, DE, EN, ES, FR and IT. A phrase that is obvious to a German reader may still require explanation in the other five languages. Do not assume that one language's explanation automatically works in another.
- Translations must sound natural to native readers. Do not mechanically copy a German sentence structure or use the same explanatory wording in every language if a more natural local formulation is available.
- Keep the official name and the explanation consistent across all facts in the same record. Explain a term on first relevant use; avoid repeating the full explanation unnecessarily later.

Examples of the required approach:

- **Sandmännchen:** Do not merely write that the Sandmännchen is a famous character. Explain that it is a beloved German television character from children's bedtime programming, known for appearing in stories shown before children go to sleep. Adapt the wording naturally to each target language.
- **Museum für Naturkunde:** Preserve the official museum name where useful, but explain that it is a natural history museum if the target reader might not recognize the German name.
- **Gartenstadt:** Explain the concept as a planned garden suburb or garden city, with housing integrated with green spaces, rather than leaving the German word unexplained.
- **Trudelturm:** Preserve the proper name, but explain its function and connection to aerodynamics or aviation research when it appears in a fact.

Use established conventional translations when they genuinely exist and are familiar to the target audience. Otherwise retain the original proper name and explain its nature in the surrounding sentence if needed. The goal is balanced localization: preserve names, translate meaning, explain unfamiliar context, and keep the prose readable.

Only after this audit should the record be published as complete.

---

## 24. Final production rule

The combination of:

**schema.json + CONTENT_STANDARD.md**

is the single source of truth for TRAVEL content production.

If a future instruction conflicts with this standard, the standard wins unless it is deliberately revised and versioned.

The goal is not “more information”.

The goal is:

**the highest possible density of trustworthy, meaningful and surprising information without ballast.**

And the production principle is:

**Research first. Identify the real stories. Select what matters. Write with context. Verify. Then publish.**


---

## 23. Three distinct coordinate roles — mandatory separation

TRAVEL uses three separate geographic concepts. They serve different purposes and MUST never be substituted for one another.

### 23.1 Postcode representative point — `representative_point`

- Exactly one point for the postcode record.
- Identifies the selected `representative_place`.
- Communicates the single place that best represents the postal-code area.
- It is not a general postcode centroid, an access point, or the location of every fact.

### 23.2 Postcode access point — `access_point`

- Exactly one practical point for arriving at or accessing the postal-code area.
- May be a station, stop, entrance, or another verified access location.
- It does not need to be the representative place.
- It is not a substitute for any fact's own location.

### 23.3 Fact-level location — `facts[].location`

Each individual fact has its own independent `location` property.

- It identifies the real-world place, site, feature, or historically documented location to which that particular fact refers.
- It belongs to the fact, not to the postcode record as a whole.
- It must not be copied from `representative_point` or `access_point` merely because those coordinates are already available.
- It is a single primary location per fact. If a fact mentions several places, select the principal place that the fact is actually about. Do not create multiple locations or invent a midpoint.
- The location object is stored once alongside the source-language fact. Do not duplicate it in any of the six translation objects.

The three roles are therefore:

| Field | Geographic meaning | Scope |
|---|---|---|
| `representative_point` | Where the postcode's representative place is | One per postcode |
| `access_point` | Where a visitor can practically access the postcode area | One per postcode |
| `facts[].location` | Where the subject of this particular fact is located | One per fact |

## 24. Fact location object

When a fact has a defensible geographic location, use this structure:

```json
{
  "name": "Dorfkirche Blankenfelde",
  "address": "Hauptstraße 21, 13159 Berlin",
  "lat": 52.618000,
  "lon": 13.392000,
  "type": "building",
  "accuracy": "exact",
  "source": "https://example.org/source"
}
```

The values above illustrate the structure only; they are not verified coordinates or a usable source.

Required properties:
- `name`: identifiable name of the actual location;
- `lat` and `lon`: WGS84 latitude and longitude;
- `type`: one of the enumerated values in `schema.json`;
- `accuracy`: one of the enumerated confidence/precision values;
- `source`: a direct URL supporting the location.

Optional property:
- `address`: verified address, or `null` where no street address applies.

### Controlled fact-location type vocabulary

The `facts[].location.type` value MUST be selected from the fixed 168-value `enum` defined in `data/germany/schema.json`. This is a controlled vocabulary, not free text: do not invent, translate, abbreviate, or improvise type values in individual records. Use the exact machine-readable value from the schema.

The schema is the single authoritative list of allowed values. The same vocabulary must be kept synchronized with the Germany schema used by EuropeExplorer. Before a newly verified type is used in published postcode data, add it to both schemas and validate the affected records. Do not remove or rename an existing type merely to make the list shorter; any semantic grouping for icons or filters is a separate presentation-layer mapping and must not change the stored type.

The `location` property itself may be `null` when no defensible location can be established. For backward compatibility, legacy facts may temporarily omit the property. New facts and facts processed by the geographic-enrichment workflow MUST explicitly contain `location`, either as a complete object or `null`.

## 25. Location selection and precision

Choose the location according to the actual subject of the fact:

- A building or monument: locate the actual building/site, not its district or postcode center.
- Transport or industrial infrastructure: locate the specific station, facility, structure, or documented site.
- A natural feature: use a defensible representative point within the named feature; use `landscape_area` or `natural_feature` as appropriate and set `accuracy` to `area_representative` when the feature covers an area rather than one point.
- A historical event: use the documented event location. If only an approximate historical location is known, use `historical_approximate`.
- A vanished building or site: use its documented historical location only when evidence supports it; otherwise use `null`.
- A person-related fact: locate the specific local site that makes the person's connection to this postcode meaningful, not the person's unrelated birthplace or a generic district center.

Never infer coordinates from a place name alone, use a postcode centroid as a shortcut, or copy the representative/access point into a fact. Do not present approximate coordinates as exact.

If the fact concerns a broad area and no meaningful single point can be established, use a defensible area-representative point and label it accordingly. If even that cannot be supported, use `null`.

## 26. Evidence for geographic locations

Every non-null fact location MUST have a source URL that supports the location or enables its independent verification.

Prefer:
1. official address, cadastral, municipal, heritage, transport, or geographic records;
2. official site/operator pages and institutional maps;
3. archives, museums, universities, and specialist geographic/heritage sources;
4. other reliable sources with an explicit location.

The fact's existing `sources` remain unchanged during a coordinate-only enrichment pass. The location object's `source` is a separate direct URL specifically supporting the geographic position. It may also appear in the top-level `sources` list when appropriate, but do not alter existing fact-source references merely to add coordinates.

A URL that only mentions the name of a city or district is not sufficient evidence for the precise location of a building or feature.

## 27. Six-language storage and preservation of existing facts

The location object is stored once on the source-language item in `facts[]`.

Do NOT add coordinates or duplicate `location` objects to:
- `translations.cs.facts[]`
- `translations.de.facts[]`
- `translations.en.facts[]`
- `translations.es.facts[]`
- `translations.fr.facts[]`
- `translations.it.facts[]`

Translation fact IDs and order remain unchanged.

During a geographic-enrichment pass, preserve verbatim:
- every existing fact `id`, `title`, and `text`;
- every existing fact `category`, `priority`, and `sources`;
- all six translation objects, including their representative-place wording and every translated fact ID, title, text, and order;
- all unrelated postcode metadata and verification fields.

The only intended content change in that pass is adding `facts[].location` metadata. Do not rewrite facts to make them easier to geocode. If a factual or translation defect is discovered, report it separately for a separately authorized editorial task.

## 28. Backward compatibility and migration

The schema allows legacy facts to omit `location` so existing records remain readable while the geographic layer is introduced progressively.

This compatibility allowance is not permission to omit locations from newly created facts or from facts included in a geographic-enrichment batch. For those records, every fact must have the `location` property, with either a verified object or explicit `null`.

A record must not be described as fully geographically enriched while any fact still lacks the `location` property. Facts with `location: null` are explicitly reviewed but unresolved; report their count separately from facts with verified coordinates.

Do not change the postcode-level representative or access point merely to make the fact-location layer appear complete. These remain independently verified fields.
---
## 29. Mandatory tourist, landmark and local-discovery research layer (additive)

This section supplements all existing discovery, relevance, geographic, source, editorial, map-category and translation rules. It does not replace or relax them, change the schema, create fields, change controlled vocabularies, or give tourism facts automatic priority.

### 29.1 Objective
For every postcode, investigate what a visitor could genuinely want to see, visit, experience, understand or discover in that exact area. Cover recognizable attractions and less obvious local stories. Do not force every postcode to become a tourist destination or impose a minimum number of facts.

### 29.2 Mandatory thematic checklist
Explicitly check every relevant group. These are research topics, not new schema values:
1. Castles, palaces, manor houses, fortifications, ruins and castle parks.
2. Religious heritage: cathedrals, churches, chapels, monasteries, pilgrimage sites, synagogues, mosques and sacred art.
3. Monuments and public art: statues, fountains, memorials, obelisks, historic markers, sculpture parks and significant installations.
4. Historic settlements and architecture: old towns, squares, gates, town halls, streets, bridges, walls, notable buildings and architectural ensembles, including exceptional modern and post-war architecture.
5. Museums, galleries and collections: historical, archaeological, art, technical, industrial, transport, railway, aviation, military, natural-history and specialist museums; open-air museums, skansens, memorial/documentation centres, notable exhibitions and visitor centres.
6. Archaeology and prehistory: prehistoric sites, burial mounds, megaliths, hillforts, oppida, Roman remains, archaeological landscapes and underground heritage.
7. Protected nature: national and nature parks, protected landscapes, reserves, natural monuments, biosphere reserves, UNESCO natural heritage, geoparks, wetlands, peatlands and old-growth forests.
8. Geology and landforms: rock cities, sandstone formations, caves, karst, gorges, canyons, volcanic and glacial landforms, fossils and exceptional geological viewpoints.
9. Mountains, viewpoints and outdoor routes: peaks, observation towers, panoramas, mountain huts, educational trails, ridge routes, notable hiking/cycling routes, passes and tourist cableways.
10. Water and waterside heritage: waterfalls, lakes, rivers, confluences, springs, gorges, dams, reservoirs, historic ponds, canals, mills, ports and significant water-management structures.
11. Parks, gardens and living collections: botanical gardens, arboreta, historic gardens, palace parks, notable public parks, zoos, wildlife/safari/bird parks, aquariums and butterfly houses.
12. Technical, industrial and transport heritage: mines, quarries, historically significant factories, smelters, power stations, mills, historic railways/stations, bridges, tunnels, viaducts, lighthouses, water towers and engineering works.
13. Memory sites and historical events: battlefields, revolutions/uprisings, memorials, former prisons, concentration-camp and dictatorship memorials, Iron Curtain heritage, treaty/event sites and documented places connected with major disasters or turning points.
14. Visitor attractions and experiences: show caves, underground tours, historic spas, scenic railways, funiculars, sightseeing boats, accessible industrial heritage, theme/amusement/water parks, open-air theatres and notable stadiums.
15. UNESCO and exceptional heritage: cultural/natural sites, cultural landscapes, transnational heritage, historic towns, European Heritage Label and comparable formal designations.
16. Local stories and unusual facts: documented legends, unusual events, mysteries with factual basis, curious customs, records, unusual objects, distinctive place names and stories explaining local identity.
17. People, film, literature, music and culture: homes/workplaces of significant people, film/TV locations, literary places, music history, theatres, opera houses, concert venues and cultural institutions.
18. Traditions, crafts and food heritage: regional customs, traditional crafts, historic markets/fairs, culturally significant festivals, traditional production, breweries, wineries and distilleries where the place has documented visitor or heritage value.
19. Routes and visitor context: significant pilgrimage, cultural, industrial, transport, cycling and hiking routes, border curiosities and other routes/features whose relevant part is genuinely in the postcode.

The list is deliberately broad. Include only specific, meaningful and geographically valid subjects. Temporary events, ordinary facilities, generic regional themes and businesses do not automatically qualify as permanent postcode facts.

### 29.3 Exclusions
- Do not include ordinary cemeteries, individual graves or routine burial places as tourist facts. Exception: an exceptional documented heritage/visitor site because of architecture, landscape design, historical importance or a significant memorial ensemble. A famous grave alone is insufficient.
- Do not include contemporary companies, shops, restaurants, hotels or ordinary businesses merely because they operate there. A business-related subject qualifies only for documented historical/technical/cultural/industrial heritage, a public museum or visitor centre, a significant visitor experience or another independently valuable local story.
- Do not treat ordinary event listings as permanent attractions. A recurring tradition or historically significant event may qualify when its local importance is documented.
- Do not represent a route as a point fact where its location cannot be accurately represented under the existing schema.
- Contextual mention remains possible when genuinely relevant to another supported fact.

### 29.4 Mandatory two-pass research
**Pass 1 — broad discovery:** establish the exact postcode area under existing geographic rules; search official tourism, heritage, museum, nature, municipal, regional and specialist sources; use postcode, municipality, locality, historic names, local districts, landscape and landmark names, and relevant German-language terms; discover defining attractions and stories without relying only on the old record or first general results; record candidate locations and evidence.

**Pass 2 — category gap audit:** revisit every relevant group in 29.2 one by one; perform targeted searches especially for museums/specialist collections, viewpoints, gardens, zoos/aquariums, caves/underground sites, technical heritage, memorials, local legends, historical events and unusual features; compare findings with the old record and Pass 1; identify omissions, duplicates, weak candidates and facts belonging elsewhere. A category is not checked merely because a broad search was run.

Both passes are mandatory before ordinary editorial completion.

### 29.5 Source strategy
Prefer responsible primary sources: official municipal/regional/national tourism bodies; heritage registers and monument authorities; official museum, gallery, park, zoo, aquarium and attraction sites; national-park/protected-area/nature/geology authorities; municipal and regional archives, museums, local-history institutions and published chronicles; universities and specialist heritage bodies; official UNESCO and other heritage registers. Discovery portals and community sources may reveal candidates, but important facts, exact locations, access status and historical details require stronger verification where available. Existence of an attraction does not prove postcode assignment. Distinguish documented history, recorded tradition and folklore; never present a legend as proven history.

### 29.6 Candidate and postcode verification
For every selected candidate, verify identity, significance, factual details and exact primary location independently. Prove that the location belongs to this postcode under the existing rules; check duplicates and distinguish a physical site from an area-wide story, route or event. Wider-area research does not expand fact geography. If the place belongs to another postcode, do not add it here; if assignment is ambiguous, flag it rather than guessing.

### 29.7 Coverage states and completion
Keep working notes (not production JSON) for every checklist group: **found and verified**; **checked — no qualifying result**; or **unresolved**. A postcode is research-complete only when every relevant group has been checked and no material unresolved issue remains. No qualifying result is valid; invented facts and quota-filling are prohibited. Do not add these statuses to JSON without an explicitly approved schema revision.

### 29.8 Existing editorial rules remain binding
This layer broadens discovery only. Existing rules still govern significance, selection, priority, ordering, evidence, geography, map classification, six-language parity and schema validation. A tourist attraction does not automatically outrank a more important defining local story.
---

## 30. International readability and cultural context

### 30.1 Binding principle

Every fact must be understandable to an international reader who may never have visited Germany and may have no prior knowledge of German history, culture, institutions, traditions or local terminology. This requirement applies to the original text and independently to all six language versions.

Correct translation is not enough. The text must communicate the meaning and the context needed to understand it.

### 30.2 Explain local and country-specific references

- Explain unfamiliar cultural, historical, institutional, political, religious, social and administrative terms at their first meaningful occurrence.
- Preserve genuine proper names, but identify what the named thing is and why it matters when this is not internationally self-evident.
- Explain country-specific institutions, movements, customs, memorial forms, historical events and concepts where a reader from another country would otherwise miss their meaning.
- Add concise context for historical events when necessary to explain what happened, when or why it matters.
- Do not leave essential abbreviations, local administrative labels, dialect expressions or culturally specific references unexplained.

### 30.3 Six-language independence

Apply the requirement separately to cs, de, en, es, fr and it. No language version may rely on context supplied only in another language. All versions must preserve the same factual meaning and necessary explanatory context, expressed naturally in that language. A literal translation that remains opaque to its intended reader is not compliant.

### 30.4 Concision, accuracy and evidence

Explanations must be naturally integrated and proportionate. Do not turn every fact into an encyclopaedia entry or add irrelevant background. Do not invent context, interpretations or significance; explanatory statements must be supported by reliable sources. Keep proper names accurate and do not fabricate translated names.

Example: a reference to Stolpersteine should explain that these are small brass memorial plaques set into pavement, usually outside the last freely chosen homes of people persecuted or murdered by the Nazi regime, with each plaque commemorating an individual. Merely calling them memorial stones does not provide enough context for an unfamiliar reader.

### 30.5 Reader test

For each fact and each language, ask:
1. Can a reader with no prior knowledge identify what the subject is?
2. Are unfamiliar local terms and proper-name references explained where necessary?
3. Is the historical, cultural or institutional context needed to understand the fact present?
4. Can the reader understand why the fact is locally or historically significant?
5. Is every explanation accurate, concise and supported?

If any answer is no, the text is not yet compliant and must be improved during rework.
