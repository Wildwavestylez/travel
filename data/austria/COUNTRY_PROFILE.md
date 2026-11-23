# Austria — COUNTRY PROFILE (working baseline)

## Purpose and status

This profile defines the intended Austrian meaning of postal, geographic and administrative concepts used by TRAVEL / EuropeExplorer records. It is a working baseline, not yet an approved final country specification.

The schema defines technical field names, types and controlled values. This profile defines Austrian meanings. The Content Standard and operational prompts must implement both without inventing extra fields or weakening the shared TRAVEL content requirements.

## Geographic production unit

The Austrian production/indexing unit is one complete four-digit Postleitzahl (PLZ), stored as a string.

- Example: `1010` remains the string `"1010"`.
- One four-digit PLZ is one content unit. Do not split it into separate records for individual streets, buildings, house numbers, letter suffixes or tiny postal fragments.
- Research the complete defensible geographic scope associated with that PLZ.
- A PLZ is a postal identifier, not automatically a municipality, municipal district or exact polygon.
- One PLZ may relate to one locality, several localities, or part of a larger city. Establish the actual geographic relationship using competent postal and geographic evidence.
- Do not assume that every address or every building has a distinct project record. The project deliberately works at the four-digit PLZ level.

The inventory must distinguish ordinary geographic PLZ from special-purpose or non-geographic codes where the evidence and project scope require it. Do not silently infer the status of a code from its shape alone.

## Postal representation

- Store the complete four-digit PLZ as text, never as an integer.
- Do not add spaces, hyphens or letter suffixes to the canonical Austrian code.
- Preserve leading zeroes if present.
- Do not split a code into smaller sub-records because a postal lookup exposes detailed addresses or delivery points.
- Postal-office locations and contact addresses do not, by themselves, define the complete geographic content area.

Austrian Post is the primary postal authority for PLZ existence and postal assignment. Its data must be used within the scope it actually supports; do not claim that a directory entry proves an exact polygon unless the source provides that evidence.

## Administrative field meanings

Use the shared flat TRAVEL fields, subject to the final approved schema:

- `city`: municipality or city geographically associated with the PLZ content area. If multiple municipalities are genuinely included, the final standard must define whether they are listed together or one representative municipality is selected; do not guess.
- `district`: a relevant documented sub-municipal locality such as a Stadtteil, Ortsteil or Bezirksteil within the selected municipality; otherwise null. It is not a place to list neighbouring municipalities.
- `county`: the applicable political Bezirk, or the relevant statutory-city administrative situation. Do not confuse political Bezirke with Vienna's municipal districts.
- `state`: the Bundesland.

Austria's administrative hierarchy and terminology must be verified from Statistik Austria and competent official sources. Vienna requires particular care: its 23 Gemeindebezirke are municipal districts within the statutory city of Vienna, not ordinary political Bezirke. Do not force Vienna's structure into an inaccurate generic hierarchy.

Use official German names and diacritics. Where a field's meaning is not applicable, follow the schema's nullability; do not invent a value merely to fill it.

## Representative geography and fact locations

- `representative_place` and `representative_point` identify one useful, defensible orientation anchor for the complete PLZ content area.
- The representative point is not automatically a geometric centroid, post office, famous attraction or fact location.
- Each fact's `location` identifies the actual physical subject of that fact and is independent of the postcode-level representative point.
- Never copy the representative point into a fact location merely to make a map marker appear.
- Use WGS84 coordinates and the accuracy/type values permitted by the schema.
- Keep the legacy `access_point` concept separate from both representative and fact locations; follow the approved shared schema and application requirements.

## Source hierarchy — working baseline

Use each authority only for claims it is competent to establish:

1. **Österreichische Post / Austrian Post** — PLZ existence, postal assignment and postal product definitions.
2. **Statistik Austria** — official municipalities, political districts, states, municipality identifiers and statistical/administrative classifications.
3. **BEV (Bundesamt für Eich- und Vermessungswesen)** — official geospatial reference, address/geographic information and mapping where available.
4. **Official federal, state, district and municipal sources** — administrative status, local geography, institutions, visitor information and local history.
5. **Bundesdenkmalamt (BDA)** and competent heritage institutions — monument status and heritage evidence.
6. **National parks, protected-area administrations, museums, archives, universities and specialist institutions** — subject-specific evidence.
7. **Reputable academic, regional and established media sources** — discovery and corroboration appropriate to the claim.

The final standard must specify exact datasets, source hierarchy, conflict handling and coordinate verification. Do not treat a general postcode directory as proof of heritage facts or exact geographic boundaries.

## Shared TRAVEL compatibility

The Austrian technical record should remain compatible with the shared TRAVEL / EuropeExplorer architecture and its seven language branches (`cs`, `de`, `en`, `es`, `fr`, `it`, `nl`) unless a project-level decision changes the shared contract. Country-specific Austrian semantics belong in documentation and values, not ad hoc field names or enums.

## Decisions still required

- Approved Austrian PLZ inventory and exclusions.
- Exact policy for PLZ spanning multiple municipalities.
- Final administrative mapping, especially statutory cities and Vienna.
- Whether the existing shared schema can be used unchanged apart from the four-digit PLZ pattern and country descriptions.
- Canonical storage, lifecycle, backups, and EuropeExplorer publication workflow.
- Initial coverage sequence for major cities and significant destinations.
