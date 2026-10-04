# TRAVEL — REWORK PROMPT FOR EXISTING GERMAN POSTAL-CODE JSON RECORDS

## Purpose

This prompt is specifically for **reworking existing German postal-code records** that are already present in the TRAVEL database.

It is **not** the prompt for creating new postal-code records.

The future prompt for creating new records must remain separate.

## Production specification

Before doing any work, use these files as the authoritative production specification:

1. `data/germany/schema.json`
2. `data/germany/CONTENT_STANDARD.md`

Do **not** modify either file as part of this migration.

The task is to take existing German postal-code records and rewrite them into the current production format and content standard.

Do not perform a mechanical format conversion. Research and re-evaluate the content.

## Database

Use the existing Supabase project and the existing `public.postal_codes` table.

Only process existing German records:

- `country_code = "DE"`
- `postal_code = <existing postal code>`

Do not create duplicate postal codes.

Do not delete the table, change RLS, change the schema, or modify unrelated records.

A successfully migrated record must be persisted as completed so a later run can resume safely.

## Migration objective

For every unmigrated German postal code:

1. Read the existing record.
2. Research the location again.
3. Evaluate all existing information.
4. Keep useful information after verification.
5. Remove weak, generic, duplicated or unsupported information.
6. Add important missing information.
7. Create a complete record according to the current schema.
8. Validate it against the current schema.
9. Save it back to the existing Supabase record.
10. Mark it successfully migrated.
11. Immediately continue with the next unmigrated record.

Never ask the user whether to continue.

Never stop after an arbitrary small number of records.

## Content quality

Follow `CONTENT_STANDARD.md` strictly.

Quality is more important than quantity.

Do not use artificial fact quotas.

A postal code may have 3 excellent facts or 15 excellent facts. Only include information that genuinely deserves to be there.

Each fact should be:

- true
- sourceable
- genuinely interesting
- meaningful for the location
- potentially useful to a normal user
- potentially useful to a professional user
- non-generic
- supported by an appropriate source

Remove filler such as generic statements about churches, railway stations, tourism, beautiful scenery, or German history unless the specific detail has genuine significance.

## Research areas

Where relevant, investigate:

- history
- settlement origins and development
- historical events
- monuments and heritage
- archaeology
- industrial heritage
- crafts and trade
- transport and railway history when genuinely significant
- culture
- important people
- local stories
- geography
- rivers, lakes, forests, mountains and valleys
- geological features
- protected areas
- nature reserves
- nature parks
- natural monuments
- significant natural features
- nearby connected heritage and nature
- tourism significance
- hidden gems

Nature and landscape are first-class content.

If a protected or notable natural feature is included, explain why it matters.

## Geographic relevance

The representative place must be appropriate for the postal code.

Nearby sites may be included only when they are geographically or thematically connected to the postal code.

Do not attach unrelated famous attractions merely because they are somewhere in the same district, county or state.

## Commercial content

Do not turn the dataset into free advertising.

Do not add hotels, restaurants, shops or businesses unless the entity itself has genuine documented historical, cultural, industrial, scientific or other significance.

## Sources

Prefer:

1. official and primary sources
2. archives
3. museums
4. universities
5. specialist institutions
6. high-quality journalism
7. reliable regional/local sources

Do not invent facts or URLs.

Every factual claim must be supported by appropriate sources.

Top-level sources must conform to the current schema.

Fact-level source references must refer to relevant source identifiers.

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

The same ID represents the same fact in every language.

## Six languages

Every migrated record must contain:

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

The fact IDs must correspond exactly across all six languages.

Translations must preserve the meaning of the canonical fact. Do not simply copy Czech text into other language fields.

## Validation

Before saving:

- verify postal code
- verify city
- verify district/county/state
- verify representative place
- verify coordinates
- verify factual claims
- verify source URLs
- verify all required schema fields
- verify fact IDs
- verify six-language structure
- validate against the current `schema.json`

If validation fails, fix the record before marking it complete.

## Resumability

The migration must be resumable.

After every successfully migrated record, persist its completed state.

If the worker stops, times out, crashes or loses connection, the next run must identify the first remaining unmigrated record and continue from there.

Never restart from the beginning.

Never reprocess completed records unless explicitly requested.

## Error handling

If one postal code cannot be completed:

1. record the error
2. do not mark it as completed
3. continue with the next record if the problem is record-specific

One bad postal code must not stop the entire migration.

At the end of a run, report:

- total records found
- already migrated
- migrated during this run
- remaining
- failed
- failed postal codes and reasons

## Database safety

Do not:

- delete the postal_codes table
- delete unrelated records
- change schema.json
- change CONTENT_STANDARD.md
- change application code
- change RLS policies
- create duplicate records
- expose or store service-role credentials
- replace the Supabase project

Update only the intended German postal-code records.

## Autonomous execution

This is an explicit instruction to work autonomously.

Do not ask:

- "Should I continue?"
- "Do you want me to process the next one?"
- "Shall I proceed?"

Instead:

**research → rework → validate → save → mark complete → next**

Repeat until the migration queue is empty or a genuine system-level blocker prevents further work.

## Completion

The migration is complete only when no unmigrated German postal-code records remain.

When the queue is empty, stop and provide a final migration report.

Do not create placeholder records.

Do not invent missing postal codes.

---

**IMPORTANT:** This file is the dedicated prompt for **REWORK / MIGRATION OF EXISTING RECORDS**.

A separate prompt must later be created for **CREATING NEW POSTAL-CODE RECORDS**.
