# TRAVEL — CONTENT STANDARD v1.1

## 1. Single source of truth

For German postal-code data, the only authoritative production rules are:

1. `schema.json` — machine-readable structure and validation rules.
2. `CONTENT_STANDARD.md` — semantic/content rules.

Every new JSON record MUST comply with both.

No new JSON may be created outside these rules. Do not add fields, sections, facts, categories, source practices or content patterns ad hoc.

The standard is the quality contract for TRAVEL.

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

Before writing any facts, the creator MUST first perform a structured significance check of the postcode and its relevant surroundings.

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

## 4. Geographic scope — the postcode is not the whole story

The postcode boundary is NOT automatically the boundary of the content.

A postcode may contain several districts, villages, industrial areas, natural areas or historically independent settlements.

Before writing, identify the meaningful places that geographically belong to the postcode.

Relevant surrounding places may also be included when there is a genuine geographic, historical, natural or thematic connection.

The connection MUST be clear in the fact.

Do NOT attach famous places to a postcode merely because they are somewhere in the same city or region.

---

## 5. Build the story before building the fact list

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

## 6. What every postcode should answer

A user arriving virtually at a postcode should understand:

- what kind of place this is;
- why it is worth noticing;
- what is historically, culturally or naturally important;
- what significant things exist in the relevant surrounding area;
- what surprising or lesser-known facts can be discovered here.

A professional tourism, heritage or regional-development user should ideally find at least some information that is genuinely useful or unexpectedly interesting.

---

## 7. Content categories

Facts may belong to one or more of these conceptual areas:

- nature_and_landscape
- heritage_and_monuments
- history
- culture_and_industry
- people
- geography_and_context
- tourism_and_surroundings
- hidden_gem
- local_story
- other_verified_significance

These are content categories, NOT a fixed order.

---

## 8. Priority

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

## 9. Nature and landscape

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

## 10. Relevant surroundings

Important places in the surrounding area may be included when there is a genuine geographic or thematic connection, especially:

- national parks
- major protected landscapes
- significant natural features
- major monuments
- historic towns
- important tourist regions
- significant cultural landscapes
- historically connected industrial or cultural sites

The connection to the postcode should be clear.

---

## 11. History

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

## 12. Industry, technology and cultural memory

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

## 13. Hidden gems

A hidden gem must be genuinely interesting, specific, surprising or unusually useful.

A small object is not automatically a hidden gem.

“An old church exists” is not enough.

If the church has an unusual history, architecture, event, connection or other documented significance, that significance should be explained.

Hidden gems require reliable sources just like major facts.

The ideal hidden gem should create the reaction:

> “I never needed to know this, but I am very glad I know it now.”

---

## 14. Facts must have context

Facts should not be dumped as disconnected trivia.

Where appropriate, connect them into a coherent story:

**place → landscape → history → industry/culture → people → present-day significance.**

A minor fact can be valuable when it helps explain a larger story.

When several facts belong to one major local story, avoid unnecessary repetition. Each fact should add a distinct piece of information.

---

## 15. No arbitrary fact quota

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

## 16. Quality over source count

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

## 17. Source traceability

Important factual claims must be traceable to their sources.

Sources belong in the JSON data.

Sources are evidence, not user-interface content.

The public TRAVEL app should remain clean and readable; it should not display a wall of URLs under every fact.

A purchaser or researcher of the raw dataset must be able to inspect the sources and independently verify a sample of records.

Never use “a local person told us” as a substitute for documented evidence.

Local confirmation may be added in the future as an additional verification layer, but it is NOT required for the current dataset.

---

## 18. Anti-bloat rule

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

## 19. The WOW test

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

## 20. Commercial neutrality

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

## 21. No invented symmetry

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

## 22. Final pre-publication audit

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

Only after this audit should the record be published as complete.

---

## 23. Final production rule

The combination of:

**schema.json + CONTENT_STANDARD.md**

is the single source of truth for TRAVEL content production.

If a future instruction conflicts with this standard, the standard wins unless it is deliberately revised and versioned.

The goal is not “more information”.

The goal is:

**the highest possible density of trustworthy, meaningful and surprising information without ballast.**

And the production principle is:

**Research first. Identify the real stories. Select what matters. Write with context. Verify. Then publish.**
