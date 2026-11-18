# Czechia — COUNTRY PROFILE

## Purpose and authority

This profile defines the Czech geographic and administrative meaning of the fields in the current Czech postcode JSON record.

For records consumed by EuropeExplorer, the canonical data contract is `data/czechia/schema.json`, together with `data/czechia/CONTENT_STANDARD.md`. Follow the actual country-specific JSON structure used by the published records. Do not substitute the older nested `area` / `administrative` layout from the legacy country-neutral root schema.

The schema defines field names, types, required properties and permitted values. The Czech Content Standard and rework prompt define research, geographic assignment, source and editorial rules. This profile explains only the Czech meaning of the geographic fields; it does not replace those documents.

## Geographic production unit

The production unit is the Czech postal code (PSČ).

- `postcode` = the five-digit Czech PSČ.
- A PSČ is a technical postal/geographic identifier, not a tourist attraction and not necessarily the name shown to users.
- The record's content scope is the full geographic area or postal district associated with the PSČ, including all relevant municipalities, settlements and localities. Administrative fields do not narrow this research scope.

Do not equate the PSČ, the municipality where the serving post office is located, and every locality covered by the postal district.

## Canonical record fields and administrative meaning

Use the flat top-level fields defined by `data/czechia/schema.json`:

- `postcode`: five-digit PSČ.
- `city`: the official name of the single municipality in which the post office serving the PSČ is physically located.
- `district`: a documented part of that municipality, municipal part, municipal district or quarter where relevant; otherwise `null`. Never list other municipalities or settlements from the postal district here.
- `county`: the okres to which the municipality containing the serving post office administratively belongs.
- `state`: the kraj to which that municipality administratively belongs.
- `district_type`: optional Czech-schema field describing the kind of locality recorded in `district`; use only the values permitted by the schema.
- `representative_place`: one human-readable place or feature that genuinely characterises the PSČ area.
- `representative_point`: the latitude/longitude of that same representative place.

The serving post office's physical municipality determines `city`, `county` and `state`. It does not limit the facts that may be researched across the full PSČ area. Verify the serving post office and its physical location using appropriate postal sources; verify address-point and territorial relationships using the shared RÚIAN reference and RÚIAN/ČÚZK; use ČSÚ for official postcode registration and relevant administrative/statistical classifications. These authorities are not interchangeable. Follow the exact source hierarchy and checks in the Czech Content Standard and rework prompt.

A PSČ may cover an entire municipality, several settlements or parts of municipalities, part of a city, or a mixture of built-up, industrial and natural areas. Do not automatically equate PSČ, obec and locality.

## Representative place and point

Every record has one `representative_place` and one `representative_point`. The coordinates must identify the selected representative place and be geographically defensible for the PSČ area.

The representative point is not automatically:
- the geometric centre of the PSČ;
- the most famous attraction;
- the location of every fact;
- an access/navigation point.

Choose a place that genuinely characterises the area, not merely one that is famous. It may be a locality, historic settlement, urban district, landscape, major heritage site, industrial area or another representative geographic feature.

## Fact locations

A fact's physical/map location is stored once in the source-language object at `facts[].location`. It is independent of the postcode-level `representative_point` and the legacy `access_point`.

When a defensible location is available, use the object defined by `$defs.fact_location` in `data/czechia/schema.json`:

- `name`: name of the actual object, place or historically documented location;
- `address`: verified postal address, or `null` when no reliable address exists;
- `lat` and `lon`: WGS84 coordinates;
- `type`: one exact value from the Czech schema's controlled location-type vocabulary;
- `accuracy`: one permitted value describing the real precision;
- `source`: direct URL supporting the identification or geographic position.

Use `null` only when no defensible location can be established under the Czech Content Standard's location hierarchy. Do not invent coordinates, copy `representative_point` or `access_point` automatically, or remove an otherwise valuable fact because its exact address is unavailable. A representative-area fallback is permitted only where the Content Standard's rules genuinely apply.

The Czech `facts[].location.type` vocabulary is country-specific. Do not replace it with the German vocabulary or invent free-text values. The fact's `map_category` is a separate, shared EuropeExplorer classification of the fact's primary subject; it is not the same as `location.type` and must follow the 17-value enum in the Czech schema.

Store location metadata only on the source-language fact. Do not duplicate it in translated fact objects.

## Access point — legacy game compatibility

`access_point` is retained as a compatibility field from the original TRAVEL driving/game layer. It was designed as a practical navigation approach point to help a simulated vehicle enter or pass through a postcode area without routing problems such as pedestrian zones or one-way streets.

It is not the postcode's representative point and is not the location of a fact. It is not a primary EuropeExplorer geographic feature and must not be used as a substitute for `representative_point` or `facts[].location`.

Keep the field compatible with the current Czech schema and existing records:
- the Czech schema permits a point or `null`;
- `verification.access_point_verified` records whether the access point was actually checked;
- do not invent or spend disproportionate research effort on an access point solely for EuropeExplorer;
- preserve existing valid values unless the task specifically concerns the legacy navigation/game layer.

Do not remove the field or change the schema as part of a country-profile clarification.

## Sources and verification

Attach source IDs to the facts they support and define those sources in the record's top-level `sources` array, following the schema. A fact's location `source` is separate evidence for the geographic point and must support that point.

Use the Czech authority hierarchy in the Content Standard:
1. ČSÚ for official postcode registration and relevant statistical classifications;
2. RÚIAN/ČÚZK for address points, territorial relationships and geographic assignment;
3. appropriate official postal sources for the serving post office and postal-service information;
4. other official, institutional, archival, museum, university, specialist and reliable regional sources for the relevant claims.

`verification.geographic_test_data` and the other verification fields must reflect checks actually performed. Do not claim verification that has not taken place.

## Language layer

Every production record must contain all seven required languages:

- `cs` — Czech
- `de` — German
- `en` — English
- `es` — Spanish
- `fr` — French
- `it` — Italian
- `nl` — standard Netherlands Dutch (`nl-NL`), phrased naturally and clearly for readers in both the Netherlands and Flanders

All seven language versions must preserve the same fact IDs and order. Follow the Czech Content Standard and rework prompt for translation completeness, naturalness and international cultural context.
