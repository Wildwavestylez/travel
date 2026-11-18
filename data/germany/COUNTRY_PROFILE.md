# Germany — COUNTRY PROFILE

## Purpose and authority

This profile defines the German geographic and administrative meaning of the fields in the current German postcode JSON record.

For records consumed by EuropeExplorer, the canonical data contract is `data/germany/schema.json`, together with `data/germany/CONTENT_STANDARD.md`. Follow the actual country-specific JSON structure used by the published records. Do not substitute the older nested `area` / `administrative` layout from the legacy country-neutral root schema.

The schema defines field names, types, required properties and permitted values. The German Content Standard and rework prompt define research, geographic assignment, source and editorial rules. This profile explains only the German meaning of the geographic fields; it does not replace those documents.

## Geographic production unit

The production unit for Germany is the German postal code (PLZ).

- `postcode` = the five-digit German PLZ.
- A PLZ is a technical postal/geographic identifier, not a tourist attraction and not necessarily the name shown to users.
- Establish whether the PLZ is a normal geographic delivery code or a special-purpose code, such as a PO-box or large-recipient code, using the German source hierarchy.
- The record's content scope is the verified geographic area associated with the PLZ. Wider surroundings may provide context, but a fact must have a defensible primary location and genuine connection to the assigned PLZ.

A PLZ may cover an entire municipality or city, several districts or Ortsteile, part of a larger city, villages and surrounding areas, or industrial and natural areas. Do not assume that a city name alone defines the content boundary.

## Canonical record fields and administrative meaning

Use the flat top-level fields defined by `data/germany/schema.json`:

- `postcode`: five-digit German PLZ.
- `city`: the verified municipality/city or principal locality associated with the PLZ record, using the German postal and official administrative evidence. Do not use this field as an unstructured list of every locality covered by the PLZ.
- `district`: a relevant and documented Stadtteil, Ortsteil or comparable city/local district where applicable; otherwise `null`. Do not turn every small settlement or hamlet into an urban district.
- `county`: the responsible Landkreis or, where applicable, the kreisfreie Stadt.
- `state`: the Bundesland.
- `representative_place`: one human-readable place or feature that genuinely characterises the PLZ area.
- `representative_point`: the latitude/longitude of that same representative place.

The administrative hierarchy is therefore interpreted as Bundesland, Landkreis/kreisfreie Stadt, municipality/city, and relevant district/Ortsteil. Populate only fields supported by the actual administrative situation and reliable sources. Do not invent a level or force a value into a field merely to fill it.

Use appropriate German postal, official address, administrative, municipal and institutional sources. Deutsche Post and responsible official municipal/administrative sources are preferred for material postal and locality questions. Never import Czech RÚIAN procedures or Czech post-office rules. A retail parcel outlet closing or moving does not by itself invalidate a PLZ.

## Representative place and point

Every record has one `representative_place` and one `representative_point`. The coordinates must identify the selected representative place and be geographically defensible for the PLZ area.

The representative point is not automatically:
- the geometric centre of the PLZ;
- the most famous attraction;
- the location of every fact;
- an access/navigation point.

Choose a place that genuinely characterises the area, not merely one that is famous. It may be a locality, historic district, landscape, major heritage site, industrial area or another representative geographic feature.

## Fact locations

A fact's physical/map location is stored once in the source-language object at `facts[].location`. It is independent of the postcode-level `representative_point` and the legacy `access_point`.

When a defensible location is available, use the object defined by `$defs.fact_location` in `data/germany/schema.json`:

- `name`: name of the actual object, place or historically documented location;
- `address`: verified postal address, or `null` where no reliable street address exists;
- `lat` and `lon`: WGS84 coordinates;
- `type`: one exact value from the German schema's controlled location-type vocabulary;
- `accuracy`: one permitted value describing the real precision;
- `source`: direct URL supporting the identification or geographic position.

Use `null` for the whole location only when no defensible location can be established under the German Content Standard's location hierarchy. Do not invent coordinates, copy `representative_point` or `access_point` automatically, or remove an otherwise valuable fact because its exact address is unavailable. Apply the documented approximate, historical and postal-area fallback rules where appropriate.

The German `facts[].location.type` vocabulary is country-specific and controlled by the German schema. Do not invent free-text values. The fact's `map_category` is a separate, shared EuropeExplorer classification of the fact's primary subject; it is not the same as `location.type` and must follow the 17-value enum in the German schema.

Store location metadata only on the source-language fact. Do not duplicate it in translated fact objects.

## Access point — legacy game compatibility

`access_point` is retained as a compatibility field from the original TRAVEL driving/game layer. It was designed as a practical navigation approach point to help a simulated vehicle enter or pass through a postcode area without routing problems such as pedestrian zones or one-way streets.

It is not the postcode's representative point and is not the location of a fact. It is not a primary EuropeExplorer geographic feature and must not be used as a substitute for `representative_point` or `facts[].location`.

Keep the field compatible with the current German schema and existing records:
- the German schema currently requires a concrete point;
- `verification.access_point_verified` records whether the access point was actually checked;
- do not treat it as a content or fact-location requirement, and do not spend disproportionate research effort on it solely for EuropeExplorer;
- preserve existing valid values unless the task specifically concerns the legacy navigation/game layer.

Do not remove the field or change the schema as part of a country-profile clarification.

## Sources and verification

Attach source IDs to the facts they support and define those sources in the record's top-level `sources` array, following the schema. A fact's location `source` is separate evidence for the geographic point and must support that point.

Use appropriate German postal, official address, administrative, municipal, institutional, archival, museum, university, specialist and reliable regional sources. A source must support the specific claim or location it is attached to; a general mention of a city or region is not enough to verify a concrete site's position.

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

All seven language versions must preserve the same fact IDs and order. Follow the German Content Standard and rework prompt for translation completeness, naturalness and international cultural context.
