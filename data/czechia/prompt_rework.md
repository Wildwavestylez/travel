# TRAVEL — REWORK PROMPT FOR EXISTING CZECH POSTCODE RECORDS

## Purpose
Rework existing Czech postcode records into the current Czechia production standard. This is a full research and editorial rework, not a mechanical conversion.

Use only:
1. `data/czechia/schema.json`
2. `data/czechia/CONTENT_STANDARD.md`

**Czechia is isolated from Germany. Never use German records as content sources or merge their data into Czech records.**

## Workflow
**READ → RESEARCH → LOCAL SIGNIFICANCE CHECK → DEFINE STORIES → GEOGRAPHIC CHECK → AUDIT → REMOVE/KEEP/ADD → TRANSLATE → VALIDATE → SAVE → NEXT**

Treat the existing record as working material, not as truth.

## Re-research
For each Czech postcode:
- verify PSČ, municipality, relevant part of municipality, okres and kraj;
- verify representative and access coordinates;
- research defining historical, cultural, industrial, natural and local stories;
- check important people, companies, products, transport, military history, archaeology and hidden gems where relevant;
- check meaningful surroundings.

## Geographic truth
A city-wide or regional association is insufficient. Every important fact must have a concrete connection to the specific postcode area. Remove facts that only belong to another part of the municipality.

## Editorial rework
Keep verified strong facts. Remove generic, duplicated, weak or unsupported facts. Add missing defining stories. Do not preserve the old fact count as a quota.

## Translations
Final records must contain cs, de, en, es, fr, it with identical sequential fact IDs and semantically complete natural translations.

## Validation
Before saving verify schema, administrative data, coordinates, facts, sources, fact IDs and all six languages.

## Database safety
Modify only intended Czech records. Never delete unrelated records, alter German records, change RLS, change application code, expose credentials or change the Czech schema during normal rework.

## Completion
A record is complete only after research, geographic audit, content audit, translation and schema validation all pass.
