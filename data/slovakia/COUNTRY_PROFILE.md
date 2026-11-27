# Slovakia — COUNTRY PROFILE

## Purpose and authority

This profile defines the Slovak geographic, postal and administrative meaning of the fields in a TRAVEL Slovakia postcode record.

The canonical data contract is `data/slovakia/schema.json`, together with `data/slovakia/CONTENT_STANDARD.md`, `data/slovakia/prompt_rework.md` and `data/slovakia/prompt_audit.md`. Slovak-geography records use the shared TRAVEL record architecture and seven-language structure, but have no Slovak-language content layer. The original/source text in root `facts[]` is Czech. The seven language versions are `cs`, `de`, `en`, `es`, `fr`, `it` and `nl`; `translations.cs` must match the Czech original, and the other six versions are translated from Czech. Never create Slovak originals or a `sk` translation. Do not create a separate Slovak data model or introduce new field names, enums or lifecycle states without an explicit project-level decision.

The schema defines field names, types, required properties and permitted values. The Slovak Content Standard and prompts define research, geographic assignment, source and editorial rules. This profile explains the Slovak national meaning of geographic and postal fields; it does not replace those documents.

## Geographic production unit

The production unit is a Slovak geographic postal code (PSČ).

- `postcode` = the five-digit Slovak PSČ, stored as a string without a space (for example, `81101`). When displayed to readers, use the conventional spaced form (for example, `811 01`).
- Include only PSČ that identify a real geographic postal delivery area.
- Exclude non-geographic special-purpose codes, including PO-box, post-office-box, large-recipient and other organization-specific codes that do not represent a mappable geographic area.
- Do not create a postcode record merely because a code appears in a list or belongs to an organization. Its geographic character and actual area must be established.
- The record's content scope is the full defensible geographic area associated with the PSČ, including relevant municipalities, parts of municipalities, settlements, landscape and localities.

A PSČ is a postal identifier, not an administrative boundary and not automatically identical to one municipality or settlement. A postal area may cover multiple localities or only part of a larger municipality. Do not infer its full coverage from the postcode's best-known town name.

## Canonical record fields and administrative meaning

Use the canonical flat top-level record fields defined by `data/slovakia/schema.json`. Their Slovak meaning is:

- `postcode`: five-digit geographic Slovak PSČ, stored as a string without a space.
- `city`: the principal municipality (obec) or town that geographically characterises the PSČ area and is used as the record's representative locality. Choose it from verified geographic/address evidence and the actual territorial relationship of the PSČ; do not derive it from a post office, postal directory display name, correspondence address or an arbitrary best-known town. If the geographic PSČ covers several municipalities, select the best-supported representative municipality and keep the wider research scope in view.
- `district`: an officially documented mestská časť, miestna časť, urban district or other relevant locality within the municipality, where applicable; otherwise `null`. Do not put neighbouring municipalities or every settlement in the postal area into this field.
- `county`: the okres.
- `state`: the samosprávny kraj (kraj).
- `representative_place`: one human-readable place or feature that genuinely characterises the geographic PSČ area.
- `representative_point`: WGS84 latitude/longitude for that same representative place.

Slovakia has eight kraje and 79 okresy. The administrative relationship is generally kraj → okres → obec, with official mestské časti or miestne časti below the municipality where relevant. Preserve the actual administrative hierarchy and official Slovak names. Do not confuse a kraj with an okres, or an okres with a municipality.

The administrative fields describe the selected representative municipality: `district` may identify a relevant part within that same municipality; `county` is the okres containing that municipality; and `state` is its samosprávny kraj. They do not reduce the fact-research scope to that municipality if the geographic PSČ demonstrably covers a wider area. Where the geographic PSČ spans municipal or administrative boundaries, document the wider scope in the manner permitted by the schema and Content Standard.

## Postal-code verification and source authority

Use Slovak sources for Slovak postal and geographic questions. Do not import Czech ČSÚ/RÚIAN procedures or German Deutsche Post/PLZ rules.

Apply this source hierarchy according to what is being verified:

1. **Slovenská pošta** — primary postal authority for confirming the existence and geographic versus special-purpose classification of a Slovak PSČ. Current opening status, closure history or operational status of an individual post office is outside the content scope and is not a record blocker.
2. **Register adries SR (RAGEO), Ministry of Interior of the Slovak Republic** — official address and address-point evidence; use it to corroborate the existence and geographic placement of addresses, buildings and localities. Do not assume that RAGEO alone is a complete authoritative register of postal-code coverage or that every PSČ can be queried directly through it.
3. **Official register of territorial/spatial units and the Slovak Statistical Office (ŠÚ SR)** — administrative names, codes and relationships for kraje, okresy and obce.
4. **ÚGKK SR / official ZBGIS and other official national mapping resources** — geographic identification and coordinate corroboration where appropriate.
5. **Official municipalities, regional authorities, national-park administrations, museums, heritage institutions, archives, universities and other specialist sources** — evidence for individual facts and their actual locations.

A source must support the particular claim for which it is cited. A registry confirming an address does not by itself prove a postal code's complete delivery boundary; a postal lookup does not by itself prove the exact coordinates of a tourist or historic site.

If official sources conflict, record the conflict and resolve it through the Slovak Content Standard. If a geographic PSČ cannot be established reliably, do not invent a coverage area or silently treat an unverified code as valid; mark it for review under the project's established verification process.

## Representative place and point

Every record has one `representative_place` and one `representative_point`. The point must identify the selected representative place and be geographically defensible for the PSČ area.

The representative point is not automatically:
- the geometric centre of the postal area;
- the location of a post office;
- the most famous attraction in the area;
- the location of every fact;
- an access/navigation point.

Choose a place that genuinely characterises the area. Depending on the geography, it may be a settlement centre, a meaningful urban locality, a landscape feature, a historic place, a major heritage site or another defensible representative feature. The selection must be supported by geographic evidence and must not be chosen merely because it is easy to geocode.

## Fact locations

A fact's physical/map location is independent of the postcode-level `representative_point` and the legacy `access_point`. Store the fact's own location in `facts[].location`, following the exact object and permitted values defined by `data/slovakia/schema.json`.

The location must answer the question: **where is the actual subject of this fact?**

Examples:
- a church or museum: the actual site of that church or museum;
- a rock, cave, waterfall or lake: the named natural feature itself;
- a historic event or battle: the best-supported location of the event, battlefield or historically relevant site;
- a national park: a meaningful representative point within the park, not an arbitrary point outside it or an unsupported geometric centroid;
- a long hiking trail: a clearly identified, meaningful point on the trail, with the location name and accuracy reflecting that it represents a route rather than the entire trail;
- an extensive heritage or industrial area: a defensible representative point within the actual site or complex.

Use WGS84 coordinates (`lat`, `lon`) in the order and field names required by the schema. Use the schema's controlled `location.type` and `location.accuracy` values exactly; do not invent free-text enum values. The location's source must directly support the identification or geographic position of the fact subject.

Do not:
- copy the postcode's `representative_point` into a fact location unless it genuinely is the fact's location;
- copy `access_point` into a fact location;
- place a fact at a municipality centre merely because the exact site has not been researched;
- use a broad regional or park centroid as though it were the exact location of a specific object;
- invent coordinates or imply greater precision than the source supports.

Use `null` only when no defensible location can be established under the Slovak Content Standard's location hierarchy. Do not discard an otherwise valuable and verified fact solely because its exact location is difficult to establish; preserve the fact and represent the location uncertainty honestly, as permitted by the schema and audit rules.

Store geographic location metadata only on the source-language fact. Do not duplicate it in translated fact objects.

## Access point — limited legacy/game compatibility

`access_point` is a separate compatibility field from the original TRAVEL driving/game layer. It may represent a practical arrival or approach point for the simulated car. It is **not** a building entrance, not the postcode's representative point and not the location of a fact.

Keep it compatible with the Slovak schema and the shared record architecture. Do not treat it as a tourism-content requirement, do not spend disproportionate research effort on it, and never use it as a substitute for `representative_point` or `facts[].location`. Follow the schema's nullability and verification rules exactly; do not change the field or its structure in this profile.

## Facts, categories and editorial scope

Use the shared TRAVEL fact model, priority system and 17-value EuropeExplorer `map_category` taxonomy defined by the canonical schema. Do not create Slovakia-only categories or change the meaning of shared categories.

Research the full range of significant and locally meaningful subjects across each geographic PSČ area, including nature and landscape, heritage and monuments, architecture, history, culture and industry, people, geography and context, tourism and surroundings, hidden gems and local stories. National or regional specialities enrich this shared coverage; they do not replace it.

Slovak-specific research should be alert to, among other things:
- Great Moravian and early medieval history;
- the Kingdom of Hungary and the historic multi-ethnic context of the territory;
- castles, fortified sites, mining towns and medieval urban heritage;
- Slovak national revival, modern statehood and documented twentieth-century history;
- folk architecture, wooden churches, open-air museums, crafts and regional traditions;
- mining, metallurgy, transport, technical heritage and industrial history;
- the Carpathians, High and Low Tatras, Slovak Paradise, karst landscapes, caves, gorges, rivers and protected areas;
- documented local personalities, writers, artists, scientists and historical events.

These are research leads, not mandatory quotas or permission to force a theme into an unrelated PSČ. Every fact must meet the same evidence, significance, geographic relevance and editorial requirements as facts in the other TRAVEL countries.

## Sources and verification

Attach source IDs (for example `s1`, `s2`) to the facts they support and define each source once in the record's top-level `sources` registry using `id`, `title`, `url` and `type`, following the schema. `facts[].sources` contains IDs, not URLs. A fact's `location.source` is separate evidence for its geographic point and remains a direct URL that must support that point.

Use primary and official sources wherever possible. Prefer the institution responsible for the site, the relevant municipality or regional authority, the relevant national-park administration, the Slovak heritage authority, a museum, archive or university. Use reputable specialist and regional sources to add detail or corroborate information. General tourism pages may help discover a lead but should not be the sole evidence for a consequential historical or geographic claim when stronger sources exist.

All verification fields must describe checks actually performed. Never set a verification flag to true merely because a source was consulted or because a value looks plausible. Do not claim that a postcode's full geographic coverage, a fact's location or an administrative assignment has been verified unless the relevant evidence was checked.

## Language layer

Every production record must use Czech as the original/source language in root `facts[]` and contain all seven required language versions:

- `cs` — Czech
- `de` — German
- `en` — English
- `es` — Spanish
- `fr` — French
- `it` — Italian
- `nl` — standard Netherlands Dutch (`nl-NL`), phrased naturally and clearly for readers in both the Netherlands and Flanders

The Czech original and all seven language versions must preserve the same fact IDs and order and convey the same verified meaning. `translations.cs` must match the Czech original; translate the other six versions from Czech naturally rather than word-for-word. Preserve Slovak proper names and diacritics within the Czech text and translations where appropriate; explain culturally specific terms when needed for readers. Do not invent translated names for places or institutions where no established equivalent exists. Do not add a Slovak (`sk`) language layer.
