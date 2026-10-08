# Czechia — COUNTRY PROFILE

## Purpose

This profile defines how the country-neutral TRAVEL schema is interpreted for Czechia.

It does not replace or modify the global TRAVEL content standard or schema.

## Geographic production unit

The default production unit for Czechia is the Czech postal code (PSČ).

- `area.identifier_type` = `postal_code`
- `area.identifier` = five-digit Czech PSČ
- `area.type` = `postal_code_area`
- `area.name` = the principal locality or area associated with the PSČ

A PSČ is a technical geographic identifier. It must not be treated as a tourist attraction or as the name users necessarily see in the interface.

## Administrative hierarchy

For Czechia, use:

- `administrative.level_1` = kraj
- `administrative.level_2` = okres
- `administrative.level_3` = obec
- `administrative.level_4` = část obce / městská část / městský obvod, where useful

The exact populated levels depend on the geographic situation. Do not invent an administrative level merely to fill a field.

## Municipality and localities

The geographic relationship between PSČ, obec and locality must be checked carefully.

A PSČ may cover:

- an entire municipality,
- several settlements or parts of a municipality,
- only part of a city,
- a specific urban district,
- a village and surrounding area,
- industrial or natural areas.

Do not automatically equate PSČ, obec and locality.

## Representative point

`representative_point` represents the PSČ area as a whole.

It is not automatically the location of the most famous attraction and is not a navigation stop.

## Representative place

`representative_place` is the human-readable place or feature that best characterises the area.

It may be:

- a locality,
- historic settlement,
- urban district,
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
- factory,
- archaeological site,
- monument,
- historic building,
- natural feature,
- technical heritage site.

If a fact concerns the wider PSČ area and has no meaningful single point, use `null`.

## Sources

Sources must be attached to the facts they support through source IDs and defined in the record's `sources` array.

Prefer:

1. official and primary sources,
2. archives, museums and universities,
3. specialist sources,
4. reliable regional and national journalism.

## Verification

`verification.identifier_source` should document the authoritative source used to establish the PSČ/geographic relationship.

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
