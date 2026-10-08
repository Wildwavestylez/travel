# Germany — COUNTRY PROFILE

## Purpose

This profile defines how the country-neutral TRAVEL schema is interpreted for Germany.

It does not replace or modify the global TRAVEL content standard or schema.

## Geographic production unit

The default production unit for Germany is the German postal code (PLZ).

- `area.identifier_type` = `postal_code`
- `area.identifier` = five-digit German PLZ
- `area.type` = `postal_code_area`
- `area.name` = the principal locality or area associated with the PLZ

A PLZ is a technical geographic identifier. It must not be treated as a tourist attraction or as the name users necessarily see in the interface.

## Administrative hierarchy

For Germany, use:

- `administrative.level_1` = Bundesland
- `administrative.level_2` = Landkreis / kreisfreie Stadt
- `administrative.level_3` = Gemeinde / Stadt, where useful
- `administrative.level_4` = district / Ortsteil / locality, where useful

The exact populated levels depend on the geographic situation. Do not invent an administrative level merely to fill a field.

## City and localities

The record's `area.name` and administrative fields must reflect the actual geographic relationship of the PLZ.

A postal code can cover:

- an entire municipality or city,
- several districts or Ortsteile,
- parts of a larger city,
- villages and surrounding areas,
- industrial or natural areas.

Do not assume that the city name alone defines the content boundary.

## Representative point

`representative_point` represents the PLZ area as a whole.

It is not automatically the location of the most famous attraction and is not a navigation stop.

## Representative place

`representative_place` is the human-readable place or feature that best characterises the area.

It may be:

- a locality,
- historic district,
- landscape,
- major heritage site,
- industrial area,
- or another genuinely representative geographic feature.

It must not be selected merely because it is famous.

## Fact locations

When a fact refers to a concrete place, add:

`facts[].location = { lat, lon }`

Examples include:

- a castle,
- church,
- museum,
- harbour,
- factory,
- archaeological site,
- monument,
- historic building,
- natural feature.

If a fact concerns the wider PLZ area and has no meaningful single point, use `null`.

## Sources

Sources must be attached to the facts they support through source IDs and defined in the record's `sources` array.

Prefer:

1. official and primary sources,
2. archives, museums and universities,
3. specialist sources,
4. reliable regional and national journalism.

## Verification

`verification.identifier_source` should document the authoritative source used to establish the PLZ/geographic relationship.

`verification.geographic_test_data` confirms that the geographic assignment has been checked.

## Legacy navigation fields

The former `access_point` field belongs to the legacy navigation/game layer and is not part of the canonical TRAVEL knowledge record.

If the application still requires an access point, it should be maintained separately from the knowledge schema.

## Language layer

The current TRAVEL production languages are:

- cs
- de
- en
- es
- fr
- it

Additional languages may be added without changing the global schema.
