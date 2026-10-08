# TRAVEL — MASTER PROMPT PRO TVORBU NOVÝCH ČESKÝCH PSČ

## Purpose
Create new Czech postcode records for TRAVEL. This prompt works together with:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`

**Czechia is completely separate from Germany. Never read, copy or merge German postcode content into Czechia records.**

## Authoritative rules
Load `schema.json` and `CONTENT_STANDARD.md` before production. Schema is technically binding; CONTENT_STANDARD is editorially binding. Never modify either while producing records unless explicitly instructed.

## Workflow
**select real Czech PSČ → verify → research → Local Significance Check → identify defining stories → geographic audit → select facts → find sources → build JSON → translate → validate → save → continue**

## Research every postcode individually
Verify:
- exact Czech PSČ;
- municipality/city and relevant městská část/část obce;
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

Ask: **“Which 3–5 stories must not be missing if I explain why this postcode area matters?”**

Do not stop at the first castle, church or tourist result.

## Geographic rule
“Same city” is not enough. Every major person, company, product, event or attraction must have a concrete connection to this postcode area. Nearby places require a genuine documented connection.

## Quality rule
Prefer 6 excellent facts over 15 mediocre facts. No quota. No filler. No invented facts, coordinates or URLs.

## Sources
Prefer official/primary sources, archives, museums, universities, specialists, quality media and reliable regional sources. Fact-level source IDs must point to top-level sources.

## JSON
Follow `data/czechia/schema.json` exactly. Do not add fields. Use sequential fact IDs. Provide all six languages: cs, de, en, es, fr, it.

## Database isolation
When saving to Supabase, process only Czech records with the Czech country identifier used by the current database. Never alter German records. Do not create duplicates.

## Final validation
Validate postcode, administrative data, coordinates, facts, sources, schema, fact IDs and all six translations before marking the record complete.

## Autonomous production
Do not stop after each postcode to ask whether to continue. If one postcode fails, record the reason, leave it incomplete and continue when safe.
