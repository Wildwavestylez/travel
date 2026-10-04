# TRAVEL — PROMPT FOR CREATING NEW GERMAN POSTAL-CODE RECORDS

## Purpose

This prompt is specifically for **creating new German postal-code records** for the TRAVEL project.

It is separate from:

`data/germany/prompt_rework.md`

Do not use this prompt to migrate or rewrite records that have already been completed.

## Production specification

Before doing any work, use these files as the authoritative production specification:

1. `data/germany/schema.json`
2. `data/germany/CONTENT_STANDARD.md`

Do **not** modify either file.

The task is to discover/select real German postal codes that are not yet present in the database and create complete, high-quality records for them.

## Database

Use the existing Supabase project and the existing `public.postal_codes` table.

For Germany:

- `country_code = "DE"`

Before creating a record, check whether the exact postal code already exists.

Never create duplicates.

Do not overwrite an existing completed record merely because it is easier than creating a new one.

## Postal-code selection

Only use real German postal codes.

Never assume that every numeric value in a postal-code range exists.

The sequence must follow the project's intended geographic/ascending postal-code progression.

When continuing an existing TRAVEL sequence:

1. determine the highest/last relevant completed German postal code
2. identify the next real German postal code(s)
3. verify that each postal code actually exists
4. create only postal codes that are genuinely valid

Do not invent postal codes.

Do not fill gaps with fictional or guessed values.

Prepare multiple records ahead when practical so the dataset can grow efficiently, but quality always takes priority.

## Research requirement

Every new postal code must be researched individually.

Do not generate records by simply changing the city name, coordinates or number from another postal code.

For each postal code:

1. verify the postal code
2. identify the relevant settlement/city
3. identify district/county/state
4. determine a suitable representative place
5. determine representative coordinates
6. determine an appropriate access point where required
7. research meaningful facts
8. research reliable sources
9. create the complete multilingual record
10. validate it
11. save it to Supabase

## Content quality

Follow `CONTENT_STANDARD.md` strictly.

The objective is:

**maximum density of trustworthy, meaningful and surprising information without ballast.**

Do not use artificial fact quotas.

Some postal codes may genuinely deserve only a few facts.

Others may deserve many more.

Never add facts merely to make the JSON longer.

Every fact should pass the quality test:

1. true
2. sourceable
3. genuinely interesting
4. meaningful about the location
5. potentially new to a normal user
6. potentially useful to a professional user
7. non-generic
8. supported by a strong enough source

## Research areas

Where relevant, investigate:

- history
- origins and development of the settlement
- historical events
- heritage
- monuments
- archaeological sites
- industrial heritage
- crafts
- trade
- transport history
- railway history when genuinely significant
- culture
- important people
- local stories
- geography
- rivers
- lakes
- forests
- mountains
- valleys
- geological features
- protected landscapes
- national parks
- nature parks
- nature reserves
- natural monuments
- significant natural features
- nearby connected nature and heritage
- tourism significance
- hidden gems

Nature and landscape are first-class content.

If a protected area or notable natural feature exists, explain why it matters rather than merely listing its name.

## "Why here?" principle

Where possible, explain why the place exists or why it became significant.

Useful examples include:

- settlement location
- river crossing
- trade route
- industrial development
- mining
- agriculture
- railway connection
- border position
- strategic location
- historical event
- religious significance
- spa development
- tourism
- environmental protection

The record should help the user understand the place, not merely recognize its name.

## Hidden gems

Look beyond the most obvious tourist attractions.

A lesser-known documented feature can be more valuable than a famous generic attraction.

Hidden gems must still be:

- real
- relevant
- sourceable
- meaningful
- geographically appropriate

Never invent "hidden gems" simply to make the record interesting.

## Commercial content

Do not turn the dataset into free advertising.

Do not add hotels, restaurants, shops or ordinary businesses unless the entity itself has genuine documented historical, cultural, industrial, scientific or other significance.

Commercial information can later exist in a separate advertising/business layer.

## Sources

Prefer:

1. official and primary sources
2. archives
3. museums
4. universities
5. specialist institutions
6. high-quality journalism
7. reliable regional/local sources

Do not rely on weak SEO pages when stronger sources are available.

Do not invent facts.

Do not invent URLs.

Every factual claim must be supported by an appropriate source.

Top-level sources must conform to the current schema.

Fact-level source references must point to relevant source identifiers.

## Current fact structure

Facts must use the current structured format:

```json
{
  "id": "fact_001",
  "title": "...",
  "text": "...",
  "category": "...",
  "priority": "A",
  "sources": ["..."]
}
```

Fact IDs must be sequential within the record:

- `fact_001`
- `fact_002`
- `fact_003`
- ...

The same fact ID represents the same fact in every language.

## Categories and priorities

Use the categories defined by the current schema and CONTENT_STANDARD.md.

Do not force a fact into an inappropriate category.

Priorities A/B/C/D must reflect the actual significance of the fact.

Do not assign A to everything.

Do not create artificial priority distributions.

## Six languages

Every new record must contain:

- `cs`
- `de`
- `en`
- `es`
- `fr`
- `it`

Each translation must contain:

- `representative_place`
- `facts`

Each translated fact must contain:

- `id`
- `title`
- `text`

Fact IDs must correspond exactly across all six languages.

Translations must preserve meaning and be natural in the target language.

Do not simply copy Czech text into other languages.

## Verification

Before saving a new record, verify:

- postal code exists
- city/settlement
- district/county
- state
- representative place
- representative coordinates
- access point
- facts
- sources
- source URLs
- translation structure
- fact IDs
- schema compliance

The final JSON MUST validate against the current `schema.json`.

If validation fails, fix it before saving.

## Database write

Create the new postal-code record in the existing `public.postal_codes` table.

Use:

- `country_code = "DE"`
- the verified postal code
- the researched location metadata
- the complete JSON in the appropriate content field
- appropriate source information
- the current data version
- the appropriate publication/validation status according to the existing project workflow

Do not create a duplicate record.

## Autonomous batch operation

When this prompt is invoked, work autonomously.

Do not ask for confirmation between postal codes.

Do not ask:

- "Should I continue?"
- "Do you want the next one?"
- "Shall I proceed?"

Instead:

**find next real postal code → research → create → validate → save → next**

Continue until the requested batch is complete or a genuine system-level blocker prevents further work.

## Resumability

The process must be safe to run repeatedly.

At the beginning of every run:

1. inspect the existing database
2. determine which postal codes already exist
3. determine the current sequence position
4. continue from the next appropriate real postal code

Never restart from the beginning.

Never overwrite completed records unnecessarily.

If a run stops or times out, the next run must continue from the correct position.

## Error handling

If one postal code cannot be completed:

1. record the error
2. do not create an incomplete or invalid record
3. continue with the next postal code if the problem is record-specific

One problematic postal code must not stop the entire batch.

At the end of a run, report:

- postal codes attempted
- successfully created
- skipped because they already existed
- failed
- reasons for failures
- next postal code/sequence position

## Database safety

Do not:

- delete existing postal-code records
- overwrite completed records without a clear reason
- delete the postal_codes table
- change schema.json
- change CONTENT_STANDARD.md
- change application code
- change RLS policies
- create duplicate postal codes
- expose or store service-role credentials
- replace the Supabase project

## Quality over speed

Do not sacrifice research quality for the number of records created.

It is better to create fewer excellent postal-code records than many weak or repetitive records.

Every record should be capable of standing on its own as a trustworthy piece of the TRAVEL knowledge base.

## Completion

When the requested batch is complete:

- stop
- provide a concise report
- list created postal codes
- list skipped postal codes
- list failed postal codes
- state the next sequence position

Do not create placeholder records.

Do not invent missing postal codes.

---

**IMPORTANT:** This file is the dedicated prompt for **CREATING NEW GERMAN POSTAL-CODE RECORDS**.

For reworking existing records, use:

`data/germany/prompt_rework.md`
