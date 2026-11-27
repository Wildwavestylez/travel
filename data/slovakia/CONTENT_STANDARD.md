# TRAVEL — SLOVAKIA CONTENT STANDARD V1

## 1. Purpose, authority and binding force

This document defines the mandatory content, research, geographic, source, editorial, translation and quality rules for every Slovak geographic PSČ record in TRAVEL.

The binding production contract consists of:
1. `schema.json` — record structure, required fields, data types and controlled values.
2. `COUNTRY_PROFILE.md` — Slovak postal, geographic and administrative meanings.
3. `CONTENT_STANDARD.md` — the research, evidence and editorial rules in this document.
4. `prompt_rework.md` and `prompt_audit.md` — operational instructions that must implement this standard without weakening it.

Every new or reworked record MUST comply with the current schema and this standard. If they conflict, stop and resolve the document-level conflict; do not silently work around it. Do not add fields, enums, categories, languages, lifecycle states or undocumented content patterns ad hoc.

This is the Slovak geographic and editorial implementation of the shared TRAVEL methodology, but Slovak records do not have a Slovak-language content layer. The original/source text in `facts[]` is written in Czech, exactly as in the Czech TRAVEL workflow. The seven required language versions are `cs`, `de`, `en`, `es`, `fr`, `it` and `nl`; `translations.cs` must match the Czech source text, while the other six versions are translated from that Czech original. Do not create Slovak-language originals or a Slovak (`sk`) translation. Slovak postal, administrative, geographic, historical and cultural realities are handled through this country-specific standard. Czech and German postal/geographic procedures must not be imported merely because the shared content language and record architecture are similar.

## 2. Core philosophy

TRAVEL is a curated geographic discovery database, not a directory and not a quota-driven collection of attractions.

The objective is to explain what is genuinely distinctive, meaningful, interesting or worth understanding about a geographic PSČ area. A strong record combines reliable facts, local context, geographic accuracy and clear writing. It may contain several excellent facts or only a small number where that is all the evidence and significance justify.

Quality is more important than quantity. Never invent a fact, inflate the importance of an ordinary object, repeat the same story under several postcodes, or add a business merely to make a record look fuller.

Every fact must pass four tests:
- **Truth:** its central claims are supported by credible evidence.
- **Relevance:** it has a defensible connection to the geographic PSČ area.
- **Significance:** it adds meaningful local, regional, national, cultural, historical, natural, scientific or visitor value.
- **Clarity:** a reader unfamiliar with Slovakia can understand what it is and why it matters.

## 3. Slovak geographic and postal authority

### 3.1 Geographic production unit

The production unit is one real geographic Slovak postal code (PSČ), stored as a five-character string without a space, for example `81101`. Display it in conventional Slovak form, for example `811 01`.

Include only codes that identify a real mappable geographic postal delivery area. Exclude non-geographic or special-purpose codes, including PO-box codes, post-office-box codes, large-recipient codes and organization-specific postal codes that do not represent a geographic area.

A PSČ is a postal identifier. It is not automatically:
- one municipality;
- one settlement;
- one administrative district;
- a polygon whose boundaries can be inferred from a postcode directory.

A geographic PSČ may cover multiple municipalities, settlements or parts of municipalities, or only part of a larger municipality. Establish the actual postal and geographic scope using appropriate evidence. Do not infer the full coverage from the best-known town name or from an address displayed by an unrelated institution.

### 3.2 Meaning of the administrative fields — geographic representative municipality

The top-level fields have the following exact meanings:

- `city`: the principal municipality (obec) or town that geographically characterises the PSČ area and serves as its representative locality. Select it using verified geographic/address evidence and the actual territorial relationship of the PSČ. Do not derive it from a post office, a postal directory's display name, a correspondence address or an arbitrary best-known town. If the PSČ covers several municipalities, choose the best-supported representative municipality and keep the full geographic scope in the research.
- `district`: an officially documented relevant part within that same representative municipality, if applicable. Use an appropriate official local or urban part; otherwise use `null`. Never put a neighbouring municipality or every settlement served by the PSČ in this field.
- `county`: the official okres containing the selected representative municipality.
- `state`: the official samosprávny kraj containing that same municipality.

The administrative fields describe the selected representative municipality. They do not reduce the fact-research scope to that municipality when the geographic PSČ demonstrably covers a wider area.

Do not guess the geographic assignment. Establish the representative municipality from appropriate geographic/address evidence and official territorial sources. Postal office opening status, closure history or current operation is not part of the record's required content and must never block research, validation or completion.

### 3.3 Source hierarchy by claim

Use each source only for claims it is competent to establish:

1. **Slovenská pošta** — primary authority for confirming PSČ existence and distinguishing geographic from special-purpose codes. It is not necessary to identify a currently operating serving post office or investigate closure history.
2. **Register adries SR (RAGEO), Ministry of Interior of the Slovak Republic** — official address and address-point evidence. Use it to corroborate real addresses, buildings and address geography. Do not assume it alone defines complete PSČ delivery boundaries or that every PSČ can be directly queried there.
3. **Štatistický úrad Slovenskej republiky (ŠÚ SR)** and official registers of territorial units — official names, codes and administrative relationships for kraje, okresy and obce.
4. **Úrad geodézie, kartografie a katastra SR (ÚGKK SR), ZBGIS and official national mapping resources** — geographic identification, map position and coordinate corroboration.
5. **Official municipalities, self-governing regions, national-park administrations, state institutions, heritage authorities, museums, galleries, archives, universities and specialist institutions** — evidence for individual facts and their physical locations.
6. **Reputable regional, academic, specialist and established media sources** — useful for discovery, corroboration and additional context, according to the importance and nature of the claim.

A source must support the particular claim for which it is cited. A postal lookup does not prove the exact coordinates of a castle. An address register does not by itself prove the full postal delivery area. A tourist page does not by itself establish administrative boundaries or historical claims.

If authoritative sources conflict, do not choose whichever result is easiest. Record the conflict, seek an independent source appropriate to the claim, and leave the relevant value unresolved until it can be defended.

### 3.4 Administrative accuracy

Slovakia has eight self-governing regions (samosprávne kraje) and 79 districts (okresy). Preserve the official Slovak administrative hierarchy and names.

Do not confuse:
- kraj and okres;
- okres and obec;
- municipality and municipal part;
- a postal delivery locality and an administrative municipality;
- the representative municipality and another municipality within the verified geographic PSČ scope.

Use official Slovak names and diacritics. If an administrative reform or official naming change affects a record, verify the current official status and use the form appropriate to the project's data policy. Do not silently modernize historical names inside a historical fact where the former name is part of the story.

## 4. Mandatory discovery before writing

Research must precede writing. Do not begin by polishing the old fact list and then assume it is complete.

First establish the geographic PSČ scope and its relevant localities. Then discover and assess the stories, places and features connected to that area. Search by:
- the PSČ in spaced and unspaced forms;
- the representative municipality for the geographic PSČ;
- every verified municipality, settlement and municipal part in the delivery area;
- official local and historical place names;
- relevant landscape units, rivers, valleys, mountains and protected areas;
- names of known heritage sites, museums, institutions, historical events and personalities.

Use Slovak-language searches and sources as a priority. Search in other languages where that is likely to reveal credible specialist or international evidence. Do not assume that an English-language search will reveal the full local heritage.

### 4.1 Local significance check

Ask what makes this particular area distinctive. Look beyond the most obvious attraction and consider the area's history, landscape, settlement pattern, architecture, industry, traditions, personalities, transport, science and local memory.

A small village may have an important medieval site, a distinctive wooden church, a documented historical event, a geological feature or a nationally significant personality. A larger town may have several layers of history and cultural heritage that are not captured by its best-known landmark.

### 4.2 Defining stories must not be missed

Identify the stories that explain the identity of the place. These may include:
- the origin and development of a settlement;
- a castle, fortified site, historic town or important religious institution;
- a mining, industrial, craft or transport tradition;
- a landscape feature or protected natural area;
- a documented historical event or period;
- a notable person and their genuine local connection;
- a distinctive architectural or cultural tradition;
- a local story that is unusual, well documented and meaningful.

Do not force a theme into a postcode where it does not apply. The purpose is to discover what exists, not to fill a checklist mechanically.

## 5. Selection, relevance and ordering

Select facts by significance and local relevance, not by how easy they are to find or how attractive their photographs may be.

A fact should normally have a concrete subject: a place, structure, landscape feature, event, person, institution with independent cultural or historical significance, or a clearly defined local story.

Order facts so that the most important and defining subjects appear first. Consider national or international significance, regional importance, uniqueness, local identity, visitor value and the strength of evidence. Do not let a minor tourist attraction automatically outrank a defining historical or natural subject.

Avoid:
- generic statements that could describe almost any Slovak municipality;
- unsupported superlatives such as “the oldest”, “the largest” or “the only”;
- trivia with no meaningful local connection;
- facts that merely repeat the name or address of an ordinary facility;
- multiple facts that retell the same story without adding distinct value.

## 6. Geographic scope and stable postcode assignment

### 6.1 Scope of a record

Research the full defensible geographic PSČ area, not merely the selected representative municipality. Include relevant localities and features in other municipalities where their geographic relationship to the PSČ is established.

The administrative fields do not define the full content boundary. The `city` field identifies the representative municipality, while the fact-research scope follows the verified geographic PSČ area.

Do not claim that an entire municipality belongs to a PSČ merely because one address in it uses that code. Likewise, do not exclude a locality simply because it is not the municipality named in `city`.

### 6.2 One primary postcode per fact

Each fact is assigned to exactly one primary postcode as a stable internal TRAVEL decision. The subject or real-world extent may cross postcode boundaries. For a bridge, large complex, park, protected area, route, linear structure or other cross-boundary feature, choose the one most defensible primary assignment using its principal subject, meaningful physical location and the project's established geographic evidence.

Do not duplicate the same fact under neighboring postcodes. Do not create slightly rewritten copies of one attraction or story to make several records appear complete.

Once a reasonable assignment has been supported and closed, keep it stable. Do not reopen it merely because the subject spans another postcode or a new source describes its wider extent. Reopen only when new, specific and material evidence demonstrates that the existing assignment is wrong.

A wider research scope does not authorize a fact to be assigned to a postcode that does not have a defensible geographic relationship to it.

### 6.3 Postal address versus geographic assignment

A PSČ shown on a museum, attraction, business, municipality or institution website does not automatically prove that its physical subject belongs to that geographic PSČ. It may be a correspondence address, registered office, billing address, PO box, central administration address or another postal contact.

For an address-based subject:
1. Establish the actual physical location of the subject or visitor entrance.
2. Verify the address and geographic position using RAGEO or another suitable official geographic source where available.
3. Verify the postal assignment using Slovenská pošta or an appropriate official postal source.
4. Determine whether the PSČ shown by the institution refers to its physical location or only to correspondence.
5. If the evidence conflicts, do not move the fact or alter the record based on the institution's displayed postal address alone.

A post office's physical location, if mentioned as optional context, does not determine the record's `city` field, define the postcode boundary or automatically identify the correct postcode for a nearby attraction.

## 7. Representative place and representative point

Every record must have one `representative_place` and one `representative_point`.

Choose one human-readable place or feature that genuinely characterises the geographic PSČ area. Depending on the area, this may be a settlement centre, meaningful urban locality, historic place, landscape feature or another defensible representative feature.

The representative point must be a WGS84 coordinate for that same representative place. It is not automatically:
- a post office or postal facility;
- the geometric centre of a presumed postcode polygon;
- the most famous attraction;
- the location of every fact;
- the access point.

Do not choose a point merely because it is easy to geocode. Verify that the named representative place exists and that the coordinate corresponds to it. The representative point is a postcode-level orientation reference, not a substitute for fact-level locations.

## 8. Three distinct coordinate roles

The record contains three different geographic roles. Keep them separate.

### 8.1 `representative_point`

The postcode-level point for `representative_place`. It represents the record as a whole.

### 8.2 `access_point`

A secondary legacy/game compatibility point for Europe Explorer arrival or navigation. It may be identical to `representative_point`. Do not invent a separate coordinate when the representative point is already suitable. It is not a building entrance by definition, not a fact location and not a required tourism-content feature.

Follow the schema's nullability. Do not spend disproportionate research effort on this legacy field and do not use it to conceal missing fact locations.

### 8.3 `facts[].location`

The independent physical/map location of an individual fact's subject or a clearly identified representative/orientation point. This is the primary geographic enrichment layer for facts.

Never copy one of the other coordinate fields automatically. Reuse a coordinate only if it genuinely identifies the mapped subject or satisfies the location fallback rule.

## 9. Fact writing and context

Build the story before building the fact list. A fact is not a label, a search snippet or a list of dates. It should explain what the subject is, what happened or makes it distinctive, and why it matters locally or more broadly.

Use concise, readable prose. Include dates, names and technical details when they materially improve understanding. Explain necessary context without turning every fact into an academic essay.

Separate:
- verified historical fact;
- scholarly interpretation;
- recorded local tradition;
- legend or folklore;
- uncertain or disputed claims.

A legend may be included as a local story when it is genuinely relevant and its status as a legend is made clear. Never present folklore as established history.

Do not state that a person was born, lived, worked or died at a place unless the relationship is supported. Distinguish a person's birthplace, residence, workplace, memorial, grave and later commemorative association.

## 10. What a reader should understand

A reader who has never visited Slovakia should be able to understand:
- what the subject is;
- where it is and how it relates to the postcode area;
- what happened or what makes it distinctive;
- why it matters;
- which local or Slovak terms require explanation.

Do not rely on the reader knowing Slovak history, the former Kingdom of Hungary, Great Moravia, administrative terminology, religious traditions or local cultural references.

## 11. Shared content categories

Use only the shared schema categories. Do not invent Slovakia-only categories or change the meaning of an existing category.

The permitted categories are:
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

Choose the category that best describes the fact's primary subject, not the source type or the location where the fact is pinned.

## 12. Priority system

Use the shared A–D priority system consistently. Priority expresses significance, not writing quality, proximity, popularity or the order in which a fact was discovered.

### Priority A — exceptional significance

A subject of exceptional national or international importance, outstanding heritage or natural value, or a defining story of major significance. Use sparingly.

### Priority B — exceptional hidden gem

A genuinely remarkable, distinctive or under-recognized subject whose significance or uniqueness is exceptional despite limited general recognition. It must be strongly evidenced; “hidden” does not mean merely obscure.

### Priority C — strong regional significance

A subject of substantial regional importance, a notable heritage or natural feature, a significant institution, or a story that strongly contributes to the identity of the locality or wider region.

### Priority D — local significance

A verified subject of genuine local interest that contributes meaningfully to understanding the place. Priority D is not a dumping ground for ordinary facilities, weak trivia or promotional content.

Do not force every postcode to contain all priorities. Do not upgrade a fact to make the record look more impressive.

## 13. Nature and landscape

Research the natural character of the area, including where relevant:
- mountains, ridges, peaks, valleys, passes and distinctive rock formations;
- caves, karst, gorges, waterfalls, lakes, wetlands and rivers;
- forests, old-growth forest, protected habitats and rare ecosystems;
- national parks, protected landscape areas, nature reserves and significant natural monuments;
- geological features, fossils and scientifically important sites;
- viewpoints and landscapes with a clear geographic or cultural significance.

Slovak natural heritage may involve the Carpathians, High Tatras, Low Tatras, Slovak Paradise, Slovak Karst, other karst regions, river valleys and protected landscapes. These are research leads, not mandatory themes.

Distinguish a formally protected area from a general landscape name. Verify the official name, protection status, extent and location. Do not assign a large park or mountain range to every postcode it touches. Select one primary postcode for a cross-boundary fact and avoid duplication.

A viewpoint is a fact only when it has meaningful landscape, cultural, historical or visitor value. Do not add every ordinary bench or informal stopping place.

## 14. History, heritage and cultural memory

Research the area's historical layers without forcing modern national borders or identities onto earlier periods.

Relevant Slovak contexts may include:
- Great Moravia and early medieval settlement;
- the Kingdom of Hungary and the historic multi-ethnic, multilingual and multi-confessional character of the territory;
- medieval towns, castles, fortified sites, monasteries and ecclesiastical institutions;
- mining towns, metallurgy, crafts, trade routes and historical industries;
- the Habsburg and later Central European context;
- Slovak national revival and the development of modern Slovak cultural and political identity;
- Czechoslovakia, the Second World War, the Slovak State, the Slovak National Uprising, post-war developments and communist-era history;
- the Velvet Revolution, the dissolution of Czechoslovakia and the establishment of the independent Slovak Republic;
- documented local events, personalities, architecture and cultural traditions.

Use historically appropriate terminology. Do not describe every medieval subject as “Slovak” in a modern national sense where the historical context was different. Explain the relevant political and cultural setting concisely.

For sites connected with war, persecution, totalitarian regimes or traumatic events, use respectful and evidence-based language. Do not sensationalize suffering or reduce complex history to slogans.

## 15. Industry, technology and working heritage

Include industrial or technical subjects when they have genuine historical, architectural, scientific, social, economic or visitor significance.

Potential subjects include mining, metallurgy, historic factories, power generation, transport infrastructure, railways, bridges, tunnels, dams, water management, forestry, traditional manufacturing and preserved technical systems.

A currently operating company or factory is not automatically a TRAVEL fact. Include it only when the subject has an independently significant history, preserved technical heritage, public museum or visitor function, distinctive role in local identity, or another well-supported cultural or historical value.

Do not turn a record into advertising. Avoid product promotion, company slogans, recruitment material, sales language, opening-hour marketing and unsupported claims about commercial success.

## 16. Hidden gems and local stories

A hidden gem must be genuinely distinctive and supported by evidence. It may be a little-known monument, unusual natural feature, documented local tradition, overlooked architectural ensemble, rare technical object or an important story outside the usual tourist narrative.

Local stories may include:
- documented unusual events;
- historically grounded legends and folklore, clearly identified as such;
- distinctive place names and their verified origins;
- unusual customs or crafts;
- unusual objects or features that help explain local identity;
- records or superlatives only where the comparison and source are explicit.

Do not use “hidden gem” as a label for an ordinary business, restaurant, hotel, shop or facility. Do not convert social-media popularity into historical or cultural significance.

## 17. Wider surroundings and visitor context

A fact may explain a relevant surrounding feature when it is genuinely connected to the geographic PSČ area. The wider context must not become an excuse to import unrelated attractions from a nearby town or another postcode.

For routes, trails, pilgrimage paths, cycling corridors and linear infrastructure, identify the part that has a defensible connection to the postcode and choose one primary assignment. Do not duplicate the whole route under every postcode it crosses.

Do not present a place as accessible to visitors unless access is supported by reliable information. Current opening hours, ticket prices and seasonal access are volatile and should not be embedded as timeless facts unless the schema and project workflow explicitly support dated operational data.

## 18. Standardized TRAVEL map categories

Use exactly one of the shared 17-value `map_category` values defined by the schema:

`castle`, `religious_site`, `historical_monument`, `architecture`, `historic_city`, `museum`, `archaeological_site`, `nature`, `viewpoint_landscape`, `park_garden`, `technical_heritage`, `cultural_site`, `visitor_attraction`, `local_culture`, `science_site`, `personality`, `sports_venue`.

Classify the primary subject of the fact, not the coordinate type, source, or secondary detail. Choose the most specific defensible category. Do not create new values or translate the enum values. Use the same taxonomy as other TRAVEL countries.

For facts describing the PSČ area as a whole without a single object, select the best-fitting shared category based on the fact's subject. The physical point type is handled separately by `facts[].location.type`.

## 19. No arbitrary fact quota and no invented symmetry

There is no minimum target number of facts per postcode beyond the structural requirements of the schema. Do not add weak facts to match the number of a neighboring record, town or region.

Do not invent symmetry between municipalities, regions, categories or postcodes. A record with one outstanding fact may be better than a record with ten generic ones. “No relevant result after proper research” is a valid research outcome.

Do not pad records with ordinary schools, shops, restaurants, hotels, playgrounds, routine municipal facilities, generic churches, standard cemeteries or common monuments unless a specific independent significance is demonstrated.

## 20. Commercial neutrality and exclusions

The database must remain editorially independent and non-promotional.

Exclude:
- ordinary companies, shops, restaurants, hotels, bars and service providers;
- commercial listings and business directories;
- sponsored attractions or promotional claims without independent significance;
- advertisements, sales offers, booking links and marketing slogans;
- ordinary current industrial operations without a heritage, public-interest or visitor rationale;
- temporary events as permanent facts, unless a recurring tradition or historical event has lasting local significance;
- ordinary cemeteries, individual graves and routine burial places, unless the ensemble has exceptional documented heritage, architectural, landscape or memorial value.

A commercial entity may be included only when the fact is about an independently documented historical, cultural, technical or industrial subject, a public museum or visitor centre, or a genuinely significant local story. Write about that significance, not the company's current products or services.

## 21. Source and evidence standard

Every fact must cite one or more source IDs in `facts[].sources` (for example `s1`, `s2`). Each ID must exactly match the `id` of one entry in the record's top-level `sources` registry. Each registry entry contains the schema-defined `id`, `title`, `url` and `type` fields. Store each source only once in the registry; do not copy its URL into the fact's source list. The separate `facts[].location.source` field remains a direct URL supporting the mapped point.

Prefer primary and official sources:
- the responsible municipality or regional authority;
- the Slovak heritage authority and official heritage records;
- the institution responsible for a museum, monument, protected area or attraction;
- national-park and nature-protection authorities;
- official archives, libraries, universities and research institutions;
- official registers and public bodies relevant to the claim.

Use reputable specialist and regional sources to add detail or corroborate. General tourist portals, crowdsourced pages, blogs, social media and search snippets may help discover candidates but should not be the sole support for important historical, geographic or scientific claims when stronger sources are available.

The source must support the actual claim. A source that merely mentions a place does not necessarily support its date, historical role, protected status, architectural attribution or exact location. Do not cite a homepage when a more specific source page exists.

### 21.1 Source traceability and URL quality

Use direct, stable URLs to the page or document supporting the claim. Avoid search-result URLs, tracking links, session-dependent URLs and unnecessary URL shorteners. Preserve valid URL encoding. Check that the URL is syntactically valid and points to the intended source.

Do not invent source titles, URLs, publication dates, authors or institutional affiliations. If a source is inaccessible, do not claim to have checked its contents. A source ID must appear only once in the record's top-level `sources` registry and must be referenced by the facts it supports. The registry entry holds the direct URL; `facts[].sources` holds only its ID.

### 21.2 Evidence strength

For consequential claims, seek corroboration where appropriate. Claims involving “first”, “oldest”, “largest”, “only”, exact dates, authorship, attribution, casualty numbers, protected status or disputed historical interpretation require particularly strong evidence.

Do not treat a source's repetition of another source as independent corroboration. Prefer original archival, institutional or scholarly evidence where available.

## 22. Fact-level map locations

The physical/map location of each fact is independent of `representative_point` and `access_point`. The question is: **where is the actual subject of this fact, or what defensible point best helps a reader locate it?**

Use WGS84 coordinates with `lat` and `lon` exactly as defined by the schema. Every non-null fact location must contain:
- `name` — the actual mapped object, feature or orientation point;
- `lat` and `lon` — coordinates for that point;
- `type` — one exact permitted value from the schema's controlled vocabulary;
- `accuracy` — one permitted accuracy value;
- `source` — a direct URL supporting the identification or geographic position of the mapped point;
- `address` — a verified address if one exists, otherwise `null`.

The location source supports the point, not necessarily the story. Content sources must independently support the fact itself.

### 22.1 Location selection hierarchy

Use the following hierarchy and do not default to `null` merely because an exact coordinate is unavailable.

1. **Specific physical object:** use the verified location of the actual building, monument, museum, bridge, station, memorial, cave entrance or other subject.
2. **Distinct natural feature:** use the actual feature or a clearly identified point on it, such as a waterfall, cave entrance, peak, lake access point or named rock formation.
3. **Extended site or area:** use a defensible representative point inside the real area, such as a suitable entrance, trail junction, viewpoint or public orientation point within a park, forest, protected area, industrial complex or large heritage site.
4. **Historic site with uncertain exact position:** use the best-supported approximate position if available. If not, use a clearly named public orientation point in the historically connected settlement, such as its square, village green, town hall or municipal office. Mark it `historical_approximate` and name the actual orientation point.
5. **History of a settlement or municipal part:** use its identifiable public centre, square, town hall, municipal office or another meaningful public reference point.
6. **Transport or infrastructure subject:** use the relevant station, stop, terminal, bridge, junction or infrastructure point to which the fact relates.
7. **Area-level story without one physical subject:** use a meaningful point representing the relevant area, or a point suitable for a `postal_area` fact where the story genuinely concerns the PSČ area as a whole.

The point must be geographically meaningful and must not mislead the reader about the exact location of a historical event or object.

### 22.2 Accuracy values

Use only the schema's controlled values:
- `exact` — verified point on the specific physical subject;
- `approximate` — approximate position of a known subject;
- `area_representative` — a representative point within an extended area;
- `historical_approximate` — uncertain historical position or an explicitly approximate orientation point.

Do not use `exact` merely because a map service returns many decimal places. Coordinate precision is not evidence of positional accuracy.

### 22.3 Location type

Use the exact singular value from the Slovak schema's `fact_location.type` enum that best describes the physical point being mapped. The value must describe the mapped point, not the fact's broad theme.

Examples:
- a church building → `church`;
- a castle → `castle`;
- a museum → `museum`;
- a town square used as an orientation point → `square` or `historic_square`, depending on its actual character;
- a town hall used as an orientation point → `town_hall`;
- a cave → `cave`;
- a waterfall → `waterfall`;
- a protected landscape area → `protected_area` or `national_park`, as appropriate;
- a fact genuinely about the postal area as a whole → `postal_area`.

Do not invent enum values or copy a type from a different country's schema without checking the Slovak schema. If the correct physical type is not available, stop and request a deliberate schema-level decision rather than using an unrelated value.

### 22.4 Null is the last resort

If a meaningful specific, approximate, representative or orientation point can be established, `location` must not be `null`. Retain `null` only when no responsible map point can be identified. Explain the reason in the working audit notes; do not invent a new JSON field to store that explanation.

Do not discard an otherwise valuable and verified fact solely because its exact location is difficult to establish. Preserve the fact and represent uncertainty honestly.

### 22.5 Coordinate and source checks

Check that:
- latitude is between -90 and 90 and longitude between -180 and 180;
- coordinates are WGS84;
- the point is in Slovakia or otherwise geographically justified for the subject;
- the point matches the location name and type;
- the source supports the position of the selected point;
- the accuracy reflects the evidence;
- a fallback point is not described in the fact text as the exact historical location.

Never invent coordinates, copy a postcode point into every fact, use a municipality centre as a lazy default, or place a pin outside an extended site without a defensible reason.

## 23. Seven-language production

Every production record must contain all seven language versions required by the schema:
- `cs` — Czech;
- `de` — German;
- `en` — English;
- `es` — Spanish;
- `fr` — French;
- `it` — Italian;
- `nl` — standard Netherlands Dutch (nl-NL), phrased naturally and clearly for readers in both the Netherlands and Flanders.

All seven versions must preserve the same fact IDs and order and communicate the same verified meaning. Do not add, remove, reorder or merge facts in only one language.

### 23.1 Czech original and meaning before translation

Write the original fact title and text in Czech in the root `facts[]` array. Czech is the source language for every Slovak-geography record; do not write the original in Slovak and do not create a Slovak-language layer. The `translations.cs` version must reproduce the Czech source meaning and content faithfully (it may be text-identical where the source is already natural Czech). Translate the Czech original into German, English, Spanish, French, Italian and standard Netherlands Dutch. Translate meaning, not sentence structure. Each version must read naturally to a fluent speaker of that language. Avoid machine-like phrasing, false friends, untranslated grammar and unexplained Slovak administrative or cultural terminology.

### 23.2 Slovak proper names and terminology inside Czech originals

The editorial prose is Czech, but the subjects and geographic context are Slovak. Preserve official Slovak proper names and diacritics inside the Czech original. Do not invent foreign-language place names or institutional names where no established equivalent exists.

Explain terms that international readers may not know, including relevant administrative, historical, religious, architectural, cultural and traditional terms. Depending on context, this may include terms such as obec, okres, kraj, samosprávny kraj, mestská časť, salaš, valašská kultúra, drevený kostol, banská osada or other specifically Slovak or regional concepts.

The Czech original must explain Slovak institutions, historical events and regional terms sufficiently for Czech readers; do not rely on language similarity as a substitute for context. The six non-Czech translations must independently explain unfamiliar Slovak concepts for their readers.

### 23.3 Historical and multi-ethnic context

When relevant, explain the historic Central European and multi-ethnic context of the territory. Use historically appropriate names and identities for periods under the Kingdom of Hungary, Habsburg rule, Czechoslovakia and other political arrangements. Do not erase Hungarian, German, Jewish, Roma, Rusyn, Ukrainian or other documented local communities where they are materially relevant to the story. Do not add identities without evidence.

### 23.4 Independent reader test

Each language version must stand alone. It must not rely on an explanation found only in the Czech original or English translation. A correct translation that leaves an unfamiliar reader unable to understand the subject is insufficient.

## 24. Photographs

Use a photograph only when its subject genuinely represents the record or an important fact and its origin, author and license can be established. Follow the schema's photo object exactly.

Do not invent a photographer, license, source or image URL. Do not assume that an image is reusable merely because it is visible online. Respect the stated license and attribution requirements. If a suitable image cannot be verified, use `null` rather than an unlicensed or misleading image.

Do not use a promotional image that turns the record into advertising. The photograph must not imply that a subject belongs to the PSČ if its geographic assignment has not been established.

## 25. IDs, schema and record integrity

Follow the exact schema for every field, required property, type, enum and nullability. The schema is authoritative for the JSON structure.

Fact IDs must follow the pattern required by the schema and be unique within the record. Keep IDs stable when preserving an existing fact. Do not renumber facts casually or create duplicate IDs.

Every fact's source IDs must exactly match IDs in the record's top-level `sources` registry; every registry entry must have a unique ID and a valid direct URL. Every non-null location must use the exact location object structure and controlled values. Every translation must preserve the corresponding fact identity and order.

Do not add research notes, candidate lists, audit ledgers, editorial comments or unsupported metadata to production JSON unless the schema explicitly permits them. Keep working notes outside the production record.

## 26. Rework and preservation rules

When reworking an existing record:
1. Read the current JSON and validate it against the current Slovak schema.
2. Establish the verified postal and geographic scope before moving or rewriting facts.
3. Preserve valid facts, IDs, sources and geographic assignments unless there is a specific evidence-based reason to change them.
4. Correct factual errors, weak sourcing, misleading wording, wrong categories, wrong priorities, translation inconsistencies and invalid locations.
5. Search for significant missing facts using the mandatory research process.
6. Check neighboring records for duplicate subjects and stable primary-postcode assignment.
7. Write the original facts in Czech and rebuild or correct all seven language versions in parallel; translate the six non-Czech versions from the Czech original and keep `translations.cs` aligned with it.
8. Validate the complete JSON after editing.

Do not delete a fact simply because it is difficult to translate or geolocate. Do not rewrite sound content merely for stylistic preference. Do not move facts between postcodes based on an unverified postal address or a single search result. Record unresolved issues for review and avoid making dependent changes.

## 27. Mandatory tourist, heritage and local-discovery research layer

This section is mandatory and additive. It strengthens discovery; it does not replace the rules for evidence, significance, assignment, priorities, writing, locations, translations or schema validation.

### 27.1 Objective

Prevent significant tourist, heritage, natural, cultural and local subjects from being missed because research stopped after the first obvious attraction or a small number of general search results.

### 27.2 Thematic checklist

For each PSČ, assess the relevance of each group. A group may legitimately have no relevant result.

1. Castles, ruins, fortifications, manor houses, historic estates and fortified settlements.
2. Churches, monasteries, chapels, synagogues, wooden churches, pilgrimage sites and significant religious ensembles.
3. Historic centres, squares, streets, bridges, gates, urban ensembles and notable architecture.
4. Museums, galleries, open-air museums, specialist collections, memorial houses and interpretation centres.
5. Archaeological sites, prehistoric settlement, burial grounds of exceptional significance and important discoveries.
6. Natural heritage: caves, karst, waterfalls, lakes, gorges, peaks, valleys, rock formations and protected habitats.
7. Viewpoints, towers, observation points and distinctive landscapes.
8. Parks, gardens, arboreta, historic landscapes, zoos and aquariums where independently significant.
9. Industrial and technical heritage: mines, smelters, factories, mills, dams, power stations, railways, bridges, tunnels and preserved machinery.
10. Historical events and memory sites: battlefields, uprisings, resistance, persecution, memorials, former prisons and documented sites of major events.
11. Traditional architecture, folk culture, crafts, regional customs, wooden buildings and open-air heritage.
12. Local personalities: writers, artists, scientists, political or religious figures and other people with a demonstrable connection to the area.
13. Film, literature, music, theatre and other cultural history with a concrete local connection.
14. Distinctive traditions, historic markets, recurring festivals and important cultural events with lasting local meaning.
15. Transport, pilgrimage, cultural, industrial, cycling and hiking routes where a relevant segment belongs to the area.
16. Unusual local stories, documented legends, place-name origins, rare objects, records and curiosities with a factual basis.
17. UNESCO sites and other formally recognized national or international heritage, where geographically relevant.

The checklist is deliberately broad. It is a research aid, not a quota. Include only concrete, significant and geographically defensible subjects.

### 27.3 Exclusions

- Ordinary cemeteries, individual graves and routine burial grounds are not visitor facts unless the ensemble has exceptional documented heritage, architectural, landscape or memorial value.
- Ordinary current businesses and services are excluded unless an independent historical, cultural, technical, industrial or visitor significance is established.
- Temporary events are not permanent facts. A recurring tradition may qualify when its history and local significance are documented.
- A route must not be represented as a point fact unless a meaningful point can be selected under the location rules.
- A nearby attraction does not qualify merely because it is popular or appears in searches for the municipality.
- Promotional claims and paid-listing descriptions are not evidence of significance.

### 27.4 Mandatory two-pass research

**Pass 1 — broad discovery:** establish the geographic PSČ scope; search official tourism, municipal, regional, heritage, museum, natural-science, archival and specialist sources; search using the PSČ, representative municipality, all verified localities, local and historic names, landscape names and known heritage subjects. Discover candidates without being limited by the old record or first generic results. Record candidate identity, likely location, possible primary postcode and sources in working notes.

**Pass 2 — thematic gap audit:** examine every relevant checklist group individually. Search deliberately for likely omissions such as specialist museums, viewpoints, gardens, caves, technical heritage, memorial sites, local legends, historical events, wooden architecture and unusual local subjects. Compare results with the old record and Pass 1. Identify missing candidates, duplicates, weak candidates and facts that belong to another PSČ.

A generic search does not prove that a thematic group was checked. Both passes are required before ordinary content rework is considered complete.

### 27.5 Candidate verification and coverage ledger

For each candidate, verify its identity, significance, factual details, physical location and relationship to the PSČ. A candidate is not a fact until these checks are complete.

In working notes only, assign each relevant thematic group one status:
- **found and verified**;
- **checked — no relevant result**;
- **unresolved**.

A postcode's research is complete only when relevant groups have been checked and no material unresolved issue remains. “Checked — no relevant result” is a valid outcome. Do not add these working statuses to production JSON unless the schema is deliberately changed.

## 28. Final pre-publication audit

Before a record is declared complete, verify all areas below.

### 28.1 Postal and administrative correctness
- Is the PSČ a real geographic code?
- Is the geographic PSČ verified as a genuine geographic code rather than a special-purpose code?
- Does `city` identify a defensible representative municipality for the geographic area?
- Is `district` limited to a documented part within that representative municipality?
- Do `county` and `state` match that municipality?
- Is the wider geographic PSČ scope researched without confusing it with the representative municipality?

### 28.2 Geographic completeness and assignment
- Is the geographic PSČ scope defensible?
- Have all verified localities been considered?
- Does every fact have a genuine connection to this PSČ?
- Is each cross-boundary subject assigned to one primary PSČ?
- Are duplicates in neighboring records avoided?
- Have postal contact addresses been distinguished from physical geographic assignment?

### 28.3 Significance and research completeness
- Were both discovery passes completed?
- Were relevant thematic groups checked individually?
- Are defining local stories represented?
- Are weak, generic, promotional or duplicated facts removed?
- Were priorities assigned by actual significance?
- Was no quota or artificial symmetry imposed?

### 28.4 Fact quality
- Is each fact accurate, concrete, locally relevant and understandable?
- Are historical periods and identities described appropriately?
- Are legend, tradition and established history distinguished?
- Are superlatives and exact claims strongly supported?
- Does the text explain why the subject matters?

### 28.5 Geographic points
- Does the representative point match the representative place?
- Is the access point treated only as a secondary compatibility field?
- Does each fact have its own meaningful location where possible?
- Are coordinates WGS84 and within valid ranges?
- Do location name, type, accuracy and source match the actual point?
- Has `null` been retained only after applying the fallback hierarchy?

### 28.6 Evidence
- Does every fact cite valid source IDs that match top-level `sources[].id` values, with each ID resolving to the correct registry URL?
- Does every cited source ID resolve to exactly one top-level registry entry, and does that entry contain the intended URL?
- Do sources support the claims they are cited for?
- Are primary and official sources used where available?
- Are important claims corroborated appropriately?
- Are URLs direct, valid and traceable?

### 28.7 Languages
- Are all seven languages present?
- Do they preserve identical fact IDs and order?
- Is the meaning complete and consistent?
- Does each version read naturally?
- Are Slovak names, diacritics and local concepts handled correctly within the Czech original and all translations?
- Can an international reader understand the subject without relying on another language?

### 28.8 Technical validation
- Does the complete record validate against the current Slovak schema?
- Are all required fields present?
- Are all types, enums, patterns and null values valid?
- Are there no undocumented properties?
- Are source URLs unique in the top-level list and are all fact references resolvable?
- Are the translations structurally complete?

A record with a material unresolved postal, geographic, factual, source or translation issue is not complete. Do not mark verification as successful unless the relevant check was actually performed.

## 29. International readability and cultural context

Every fact and every language version must be understandable to a reader who may never have visited Slovakia and may know little about its history, institutions, culture or geography.

Explain unfamiliar terms when they matter. This may include Slovak administrative units, historical political arrangements, religious traditions, folk architecture, mining heritage, regional customs and institutions. Preserve proper names, but explain what they refer to and why they matter.

For example, do not assume that an international reader knows what a wooden church of the Carpathian region represents, what a mining town's historic privileges meant, or how the Slovak National Uprising fits into the Second World War. Provide concise context supported by sources.

Do not overload facts with background that does not help explain the subject. Explanations must be accurate, proportionate and independently understandable in each language.

### 29.1 Reader test

For every fact and every language, ask:
1. Can the reader identify what the subject is?
2. Are unfamiliar local names and terms explained where necessary?
3. Is the historical, cultural or institutional context sufficient?
4. Can the reader understand why the subject is significant?
5. Is every explanatory claim accurate and supported?

If any answer is no, the fact or translation needs revision.

## 30. Final production rule

A Slovak-geography TRAVEL postcode record is complete only when its geographic PSČ identity and representative municipality are defensibly established, its geographic scope and administrative fields are accurate, its content reflects a thorough two-pass discovery process, every fact is significant and assigned to one primary PSČ, sources support the claims, map locations are meaningful and honestly described, the Czech original and all seven required language versions preserve the same meaning, and the full JSON validates against the current Slovak schema.

Never trade accuracy for speed, completeness for a fact quota, geographic truth for convenience, or editorial independence for promotion.

---

## 31. Production lifecycle, publication and version integrity

This section defines the Slovak record lifecycle and is binding on the Slovak rework and audit prompts. It does not change the editorial or geographic meaning of a fact.

### 31.1 Canonical storage

- GitHub repository `Wildwavestylez/travel` is the sole production source of truth for Slovak postcode records.
- Each postcode is stored as one JSON file at `data/slovakia/records/{postcode}.json`.
- Supabase is not used for Slovak records.
- Dropbox is a separate final backup destination, not a live data source and not a replacement for GitHub.

### 31.2 Required lifecycle states

Every Slovak record has a schema-defined `status`:

- `placeholder`: an intentionally empty geographic postcode record. It contains only `postcode` and `status`, plus optional `data_version`. It contains no content fields and is not eligible for map display.
- `validated`: a complete record whose per-record rework and schema validation are finished, but whose separate final audit is still pending. It is not eligible for map display.
- `published`: a record that has successfully passed the applicable final audit. It is eligible for map display.

The map must display only records whose status is exactly `published`. It must never expose placeholders or records waiting for audit.

Never use `draft`. A placeholder is not a place to store partially written content. A content record becomes `validated` only when its full required content, geographic layer, sources and all seven languages are complete and schema-valid.

### 31.3 Status transitions and preservation

- Empty geographic record → `placeholder`.
- Completed rework → `validated`.
- Successful final audit → `published`.
- If a published record is explicitly reopened and materially changed, return it to `validated` until the changed record passes audit again.
- Do not change a status merely for cosmetic edits that do not affect the published facts or geographic data.
- An unresolved material audit defect prevents publication; keep the affected record `validated` and report the reason.
- Preserve record IDs, fact IDs, sources, assignments and unrelated content.

### 31.4 Manual data-version control

`data_version` is independent of `status`.

- Rework and audit must preserve the existing `data_version` exactly.
- Do not automatically set, increment, reset or otherwise change a data version when a record becomes `validated` or `published`.
- The data version may be changed only after the complete requested audit scope has passed and only on the user's explicit instruction.
- If the user has not specified a version change, leave the field unchanged (or absent/null where no value has yet been assigned).
- A status transition is not a version transition.

### 31.5 Final Dropbox backup

Dropbox is the final backup archive for Slovak records. It is not used for production reads or writes.

- Create the backup only after the complete requested audit is finished and all user-authorized status/version changes have been completed.
- The backup is the final operation of the workflow; do not create it before the audit or before an explicitly requested data-version change.
- Back up the exact audited scope as standalone JSON files and include a manifest listing the scope, postcode count, filenames, each file's SHA-256 hash, the source GitHub commit/blob identifiers, statuses, data versions and backup timestamp.
- Use a new timestamped backup folder. Never overwrite an earlier backup.
- Read the uploaded files back from Dropbox and verify the manifest, file count and hashes against the final GitHub files. A successful upload response alone is not proof of a completed backup.
- If the established TRAVEL backup folder cannot be identified, ask the user where the Slovak archive should be stored. Do not guess a Dropbox path.
- Do not create SQL dumps or Supabase restore files for Slovakia; GitHub JSON files are the production records.
- Do not lock or make GitHub files read-only. Normal GitHub editability remains unchanged.

A backup is complete only after Dropbox read-back verification succeeds. Report its exact folder and verification result separately from the audit and publication result.

