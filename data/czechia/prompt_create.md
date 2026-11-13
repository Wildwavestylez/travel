# TRAVEL — MASTER PROMPT PRO TVORBU NOVÝCH ČESKÝCH PSČ

## Purpose
Create new Czech postcode records for TRAVEL. This prompt works together with:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`

**Czechia is completely separate from Germany. Never read, copy or merge German postcode content into Czechia records.**

## Authoritative rules
Load `schema.json` and `CONTENT_STANDARD.md` before production. Schema is technically binding; CONTENT_STANDARD is editorially binding. Never modify either while producing records unless explicitly instructed.

## Mandatory postcode authority
Before creating or changing any Czech postcode record, apply the authority hierarchy in `data/czechia/CONTENT_STANDARD.md`: ČSÚ is authoritative for official postcode registration and type; RÚIAN/ČÚZK is the project reference for geographic postcode-to-address-point assignment; use ČSÚ or RÚIAN for administrative classifications according to the field. Do not conflate these roles. Treat existing assignments as working defaults, not unquestionable truth; do not make blanket changes. Investigate each concrete discrepancy and correct it only after verification. Česká pošta is a supplementary postal-data check, not a replacement for the official geographic reference.

## Shared RÚIAN reference inventory (mandatory)

Before researching or verifying a postcode, read `data/czechia/reference/README.md` and load `data/czechia/reference/ruian_postcodes.json` from the repository's current `main` branch. Use the exact five-digit `postcode` entry as the shared nationwide reference for address-point presence, `address_points`, `municipalities`, `municipality_parts`, `city_districts`, `prague_districts` and `validity_dates`. Consult `ruian_import_manifest.json` for the source feed, update timestamp and processing metadata; use the CSV only as a human-readable alternative.

Do not download or reprocess the nationwide RÚIAN archive when the current committed reference files are available. Do not treat the inventory as proof that a postcode is officially registered by ČSÚ, as proof that a PO-box-only code does or does not exist, or as proof that a particular attraction belongs to the postcode. Check ČSÚ code lists 0028/0029 for official registration and type; verify each fact's actual location separately under the Content Standard.

If a reference file is missing, unreadable or clearly stale, report that limitation and use the official source workflow described in the Content Standard. If a postcode is absent from the inventory, do not silently invent a match or conclude solely from absence that it is invalid; investigate it against ČSÚ and current official data. Never edit the shared reference files during ordinary postcode production.

## Workflow
**select real Czech PSČ → verify → research → Local Significance Check → identify defining stories → geographic audit → select facts → find sources → build JSON → translate → validate → save → continue**

## Research every postcode individually
Verify:
- exact Czech PSČ;
- obec (city), část obce/městská část/čtvrť/osada (district) a její typ (district_type), pokud je relevantní;
- okres;
- kraj;
- representative place;
- representative point;
- access point;
- important history and heritage;
- nature and landscape;
- industry, crafts, companies, products and technology;
- transport/railway history where relevant;
- important people;
- culture and local memory;
- tourism and surroundings;
- hidden gems.

Identify the defining stories of the locality before writing facts. Do not treat 3–5 as a quota; the number depends on the place.

Do not stop at the first castle, church or tourist result.

## Czech administrative fields
- `city` means the municipality (city or village).
- `district` means a specific part of the municipality, municipal district, quarter or named settlement.
- `district_type` optionally distinguishes `municipal_part`, `municipal_district`, `city_quarter`, `settlement` and `locality`.
- `county` means okres; `state` means kraj.
- Do not confuse a cadastral area with a municipal part or locality.

## Geographic rule
“Same city” is not enough. Every major person, company, product, event or attraction must have a concrete connection to this postcode area. Nearby places require a genuine documented connection.

## Quality rule
Prefer 6 excellent facts over 15 mediocre facts. No quota. No filler. No invented facts, coordinates or URLs.

## Sources
Prefer official/primary sources, archives, museums, universities, specialists, quality media and reliable regional sources. Fact-level source IDs must point to top-level sources.

## Location and access points
Keep one simple representative place and point for each postcode. Keep `access_point` as a lightweight helper; use `null` when no clear useful point is verified. For each fact, use the same location rules as German TRAVEL: locate the actual subject when defensible, never copy the representative/access point automatically, and use `null` only when no defensible location can be established.

## Categories
Use exactly the shared fact categories aligned with Germany and Europe Explorer. Use only categories relevant to the Czech fact; do not invent Czech-specific categories. Keep the photo field as currently defined; no new photo requirements are introduced here.

## JSON
Follow `data/czechia/schema.json` exactly. Do not add fields. Use sequential fact IDs. Provide all six languages: cs, de, en, es, fr, it. Translations must naturally explain Czech institutions, administrative terms, traditions, cultural references and historical context for foreign readers. Preserve Czech proper names and add concise explanations where needed.

## Database isolation
When saving to Supabase, process only Czech records with the Czech country identifier used by the current database. Never alter German records. Do not create duplicates.

## Final validation
Validate postcode, administrative data, coordinates, facts, sources, schema, fact IDs and all six translations before marking the record complete.

## Autonomous production
Do not stop after each postcode to ask whether to continue. If one postcode fails, record the reason, leave it incomplete and continue when safe.
