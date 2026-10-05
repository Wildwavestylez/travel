# TRAVEL — REWORK PROMPT FOR EXISTING GERMAN POSTAL-CODE JSON RECORDS

## Version

**REWORK PROMPT V1.1**

This prompt is methodologically paired with `prompt_create.md V1.1`.

The purpose of rework is not merely to repair formatting or translate existing data. An existing record is only a working starting point that may be incomplete, weak, duplicated, geographically wrong or factually outdated.

**Core workflow:** READ → RESEARCH → LOCAL SIGNIFICANCE CHECK → DEFINE STORIES → CHECK GEOGRAPHIC RELEVANCE → AUDIT EXISTING FACTS → REMOVE / KEEP / ADD → BUILD COMPLETE STORY → TRANSLATE → VALIDATE → SAVE → MARK COMPLETE → NEXT

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

The existing record is not the authoritative content. Treat it as working material only. Re-research the place before deciding what to keep.

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

Never treat the old fact count as a quota.

Never stop after an arbitrary small number of records.

## Mandatory Local Significance Check

Before writing the final facts, perform a structured Local Significance Check.

### Defining story test

Ask:

**If I had to explain why this specific postal-code area is interesting, which 3–5 stories would I absolutely not be allowed to omit?**

Identify those stories before finalizing the fact list. The final record must represent important defining stories that are genuinely supported by evidence.

This is a completeness test, not a fact quota.

### Research before quota

Do not decide the number of facts before research. First determine what shaped the place, what is distinctive, what is significant, what survives today, what may surprise a visitor, and what is useful to a professional user.

### Do not stop at the first obvious story

After finding a church, castle, museum or other obvious attraction, continue searching for major history, important people, companies and brands, products and manufacturing, automobile history, railway and transport history, aviation, shipping, mining, energy, industry, science and technology, military history, archaeology, protected nature, geology, cultural memory, local traditions and hidden gems.

A major story must not be omitted merely because it is not a conventional tourist attraction.

### Significant stories beat random trivia

A well-documented significant local story takes priority over a weak curiosity. A significant factory, product, transport connection, technical achievement or cultural-memory story should beat a generic building or tourism fact when it is more important to the place.

## Geographic relevance — the postcode is the unit of truth

The record describes a specific postal-code area, not simply the whole municipality, district or region.

A city-wide association is not sufficient. Before including an important person, company, product, event, attraction or natural feature, verify the concrete connection to this postal code.

For people, acceptable concrete links include birth, residence, workplace, business, school or institution, specific building, specific event or documented activity in the area.

For companies and products, verify a factory, headquarters, workshop, production site, founding location, documented operation or another concrete geographic connection.

For events and sites, verify that they actually occurred or exist in the postal-code area or have a direct documented connection to it.

**“It is in the same city” is not enough.**

Do not attach famous attractions merely because they are somewhere in the same city, district, county or state.

## Duplication control across postal codes

TRAVEL is a postal-code database, not a collection of repeated city summaries.

If a major story is already represented in another postal-code record, do not automatically copy it into neighboring or same-city records. A shared story may appear in more than one record only when each record has a genuine geographic, historical or biographical connection to it.

Before adding a major city-wide story, ask: Is it specifically connected to this postal code? Is there a concrete local site, person, event or production connection? Does this record add a distinct local perspective?

If not, do not duplicate it.

## Build the story before building the fact list

After research, build a coherent story of the postal-code area. Facts should explain what shaped the place, what makes it distinctive, what important things happened there, what important people, companies, products or technologies are genuinely connected to it, what survives today, and what natural or cultural features deserve attention.

Use multiple facts for one broader story only when each adds distinct information.

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

Also actively investigate significant companies, brands, products, factories, vehicles, inventions, technologies and other industrial or technical achievements when relevant.

Nature and landscape are first-class content.

If a protected or notable natural feature is included, explain why it matters.


## Commercial content

Do not turn the dataset into free advertising.

Do not add hotels, restaurants, shops or businesses unless the entity itself has genuine documented historical, cultural, industrial, scientific or other significance.

## Important people and local connections

A famous person must not be included merely because they are associated with the same city or region. Verify a concrete connection to the specific postal-code area. If the only connection is “same city”, remove the story.

## Industry, technology and cultural memory

Industrial and technical history are first-class local content. If the area has a significant connection to a company, brand, vehicle, product, factory, mining operation, railway, shipyard, aircraft, invention, technical achievement or major industrial event, investigate it before finalizing the record.

Cultural memory and local folklore may be included when clearly presented as cultural memory or tradition rather than as an unverified historical fact.

## Hidden gems

Actively look for the kind of information that produces: **“I never needed to know this, but I am very glad I know it now.”** Hidden gems must still be factual, sourceable and locally relevant.

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

If facts are removed during rework, renumber the final surviving facts sequentially. Do not preserve obsolete gaps merely because the old record used them.

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

## Final pre-publication audit

Before saving, verify all of the following:

### Content completeness
- Did I research the location again rather than merely edit the old record?
- Did I perform the Local Significance Check?
- Did I identify the main defining stories?
- Are the important defining stories represented in the final facts?
- Did I search beyond conventional tourist attractions?
- Did I check industry, technology, transport, companies, products, people, nature, archaeology, military history and cultural memory where relevant?
- Did I omit any major story simply because it is not a classic tourist attraction?
- Did I avoid weak filler and arbitrary fact quotas?

### Geographic correctness
- Does every important fact belong to this postal-code area?
- Does every included person have a concrete local connection?
- Does every included company or product have a concrete local connection?
- Are nearby sites genuinely connected?
- Did I avoid using “same city” as the only justification?
- Did I avoid unnecessary duplication with other postal codes?

### Editorial quality
- Does every fact add something distinct?
- Is the representative place appropriate?
- Are hidden gems included where genuinely available?
- Is the record useful to a visitor and to a professional user such as a tourism office?
- Does the record tell a coherent story of the place?

### Evidence and structure
- Are factual claims supported by appropriate sources?
- Are source references valid?
- Are URLs valid and not invented?
- Does the record conform to the current schema?
- Are fact IDs sequential?
- Do all six languages contain exactly the same fact IDs?
- Are translations semantically aligned?
- Are required fields and coordinates valid?

Only after all checks pass may the record be marked completed.

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
