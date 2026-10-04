# TRAVEL — CONTENT STANDARD v1.0

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

Quality and relevance are more important than quantity.

A postcode may have 3 excellent facts. Another may have 15. Both are correct.

NEVER invent or expand content merely to hit a quota.

---

## 3. What every postcode should answer

A user arriving virtually at a postcode should understand:

- what kind of place this is;
- why it is worth noticing;
- what is historically, culturally or naturally important;
- what significant things exist in the relevant surrounding area;
- what surprising or lesser-known facts can be discovered here.

A professional tourism, heritage or regional-development user should ideally find at least some information that is genuinely useful or unexpectedly interesting.

---

## 4. Content categories

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

## 5. Priority

Categories do not have equal automatic priority. The importance of the individual fact determines its position.

### Priority A — exceptional significance
Examples:
- UNESCO designation
- national park
- nationally or internationally important monument
- exceptional natural feature
- major historical event
- person of exceptional significance with a strong connection to the place

### Priority B — strong regional significance
Examples:
- important protected natural area
- significant historic building
- important industrial heritage
- major regional tourist attraction
- significant historical personality
- important transport/technical heritage

### Priority C — local significance
Examples:
- lesser-known local historical personality
- local craft or industry
- smaller historic structure
- local historical event
- locally important natural feature

### Priority D — exceptional hidden gem
A hidden gem can be small and local but may rank highly if it is unusually surprising, distinctive and well documented.

Priority is contextual. A fact may move higher or lower when compared with the other facts for that postcode.

---

## 6. Nature and landscape

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

## 7. Relevant surroundings

The postcode boundary is NOT the boundary of the story.

Important places in the surrounding area may be included when there is a genuine geographic or thematic connection, especially:

- national parks
- major protected landscapes
- significant natural features
- major monuments
- historic towns
- important tourist regions
- significant cultural landscapes

The connection to the postcode should be clear.

---

## 8. History

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
- surviving traces of the past.

A person or minor event should normally be integrated into the relevant historical story rather than presented as isolated trivia.

---

## 9. Hidden gems

A hidden gem must be genuinely interesting, specific, surprising or unusually useful.

A small object is not automatically a hidden gem.

“An old church exists” is not enough.

If the church has an unusual history, architecture, event, connection or other documented significance, that significance should be explained.

Hidden gems require reliable sources just like major facts.

---

## 10. Facts must have context

Facts should not be dumped as disconnected trivia.

Where appropriate, connect them into a coherent story:

place → landscape → history → industry/culture → people → present-day significance.

A minor fact can be valuable when it helps explain a larger story.

---

## 11. Quality over source count

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

## 12. Source traceability

Important factual claims must be traceable to their sources.

Sources belong in the JSON data.

Sources are evidence, not user-interface content.

The public TRAVEL app should remain clean and readable; it should not display a wall of URLs under every fact.

A purchaser or researcher of the raw dataset must be able to inspect the sources and independently verify a sample of records.

Never use “a local person told us” as a substitute for documented evidence.

Local confirmation may be added in the future as an additional verification layer, but it is NOT required for the current dataset.

---

## 13. Anti-bloat rule

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

---

## 14. The WOW test

Before a fact is included, ask:

1. Is it true and sourceable?
2. Is it genuinely interesting?
3. Does it say something meaningful about the place?
4. Would a normal user plausibly learn something new?
5. Could a tourism/history/geography professional find it useful?
6. Is it non-generic?
7. Is it free of promotional filler?
8. Is the source strong enough for the claim?

If the answer is no, improve the fact, find a better source, or leave it out.

The ideal TRAVEL reaction is:

> “I know this place, but I did not know that.”

Then:

> “I checked the source — and it is true.”

---

## 15. Commercial neutrality

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

## 16. No invented symmetry

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

## 17. Final production rule

The combination of:

**schema.json + CONTENT_STANDARD.md**

is the single source of truth for TRAVEL content production.

If a future instruction conflicts with this standard, the standard wins unless it is deliberately revised and versioned.

The goal is not “more information”.

The goal is:

**the highest possible density of trustworthy, meaningful and surprising information without balast.**
