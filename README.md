# travel

Germany-first postcode road-trip simulator and a multi-country geographic content project.

## Project scope

- The original road-trip simulator is Germany-first, beginning at **01067 Dresden**.
- Country datasets have country-specific schemas, content standards, research rules and storage authorities. Never assume that one country's database or workflow applies to another.
- German postcode data lives under `data/germany/`; Czech postcode data lives under `data/czechia/`; Italian CAP documentation and sequence live under `data/italy/`.
- Follow the country-specific prompts and standards before creating, reworking, auditing or publishing records.

## Shared editorial production standard

All country rework workflows must also follow [`data/REWORK_QUALITY_STANDARD.md`](data/REWORK_QUALITY_STANDARD.md). This common layer sets the project-wide expectation for substantial, story-led facts; targeted but complete research; claim-level evidence; meaningful geographic assignment; equivalent seven-language localization; autonomous completion of each record; and strict respect for user-defined batch boundaries. Country-specific schemas, Content Standards, Country Profiles, storage rules and lifecycle instructions remain authoritative for their own country and are never replaced by the shared layer.

## Canonical production data stores

- **Germany:** use the German storage and publication rules documented in the Germany-specific project files.
- **Czechia:** Supabase is the single source of truth for Czech postcode records. Do not use it for another country.
- **Italy:** Neon project **Europe Explorer**, database **neondb**, table **public.italy_cap_records** is the single source of truth for Italian CAP production records. The table stores the CAP in `postcode`, its workflow state in `workflow_status`, and the complete record as JSONB in `record`. GitHub contains Italian schemas, standards, prompts, sequence and supporting documentation—not a second production record store.

Italy uses the same three content lifecycle states as the other TRAVEL country datasets: `placeholder` (waiting for rework), `validated` (completed V1 rework, awaiting final audit), and `published` (audited V5 content). The Neon `workflow_status` column mirrors the JSONB root `record.status`; the table constraint permits only these three values and defaults to `placeholder`. Existing inventory rows were normalised to placeholder without changing their JSONB content. For Italy, rework completion is V1 / validated. Final audit PASS does not publish a record. Publication to V5 / published requires an explicit user instruction and all three publication values to agree: database `workflow_status = 'published'`, JSONB `record.status = 'published'`, and JSONB `record.data_version = 5`. EuropeExplorer reads Italian production content from Neon using read-only access and displays only records that pass this publication gate. See `data/italy/COUNTRY_PROFILE.md`, `data/italy/prompt_rework.md` and `data/italy/prompt_audit.md` for the binding country-specific rules.

## Core simulator rules

- Start at **01067 Dresden**.
- Visit every real geographic German postcode in ascending order.
- Never skip, reorder, or optimize the postcode sequence.
- Use a representative point for each postcode and a separate legally routable access point when needed.
- Calculate road routes using a routing engine and cache reusable route data.
- Simulation speed is fixed at **80 km/h**; live traffic, congestion, lights, and incidents do not affect simulated travel time.
- Persist the local simulation state in the browser for the first version.
- Future/community features are intentionally outside the first version.

## Repository layout

- `app/` — application code
- `data/germany/` — German postcode/location data
- `data/czechia/` — Czech postcode data and country-specific rules
- `data/italy/` — Italian CAP sequence, schema, standards, prompts and country profile
- `routes/` — cached route data
- `assets/` — static assets
