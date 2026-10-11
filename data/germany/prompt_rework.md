# TRAVEL — REWORK PROMPT FOR EXISTING GERMAN POSTAL-CODE RECORDS

## Version

**REWORK PROMPT V1.2**

This prompt is paired with `data/germany/CONTENT_STANDARD.md` and `data/germany/schema.json`. It governs the rework of existing German records, whether they contain substantial content, weak/partial content, or almost no content.

## Purpose

Rework existing German postal-code records in TRAVEL into consistent, researched, geographically relevant, high-quality records.

This is not a prompt for creating new postal-code records. Process only existing German records already present in the database. Do not invent missing postal codes or create duplicates.

An existing record is working material, not an authoritative account of the place. Its facts may be useful, incomplete, weak, duplicated, geographically misleading, outdated, or absent. Research the area anew before deciding what the final record should contain.

## Authoritative specification

Before starting, read and follow:

1. `data/germany/schema.json`
2. `data/germany/CONTENT_STANDARD.md`

These files remain authoritative. Do not modify them as part of this rework. The final record must conform to the current schema and content standard.

## Core workflow

**READ RECORD → CLASSIFY CONTENT STATE → RESEARCH THE AREA ANEW → IDENTIFY LOCAL IDENTITY → RANK STORIES BY RELEVANCE → AUDIT OLD CONTENT → SELECT / REMOVE / ADD → BUILD FINAL RECORD → TRANSLATE → VALIDATE → SAVE → CONFIRM COMPLETION → NEXT RECORD**

Do not skip research because an old record already looks complete. Do not discard useful verified facts merely because the record is being researched again.

## Database and scope

Use the existing Supabase project and the existing `public.postal_codes` table.

Process only existing German records where `country_code = "DE"`. Update the existing record for its existing postal code; do not insert a duplicate.

Follow the current database structure and the application's established mapping between database columns and the JSON content schema. Do not assume that the JSON Schema root object is identical to the database row layout: inspect the existing implementation/data layout and write the schema-compliant content to the correct field(s).

Do not change the database schema, table, RLS policies, application code, Supabase project, or unrelated records. Never expose credentials.

## 1. Classify the starting state — do not create separate methodologies

For each record, determine which description best fits its current content:

- **Existing and potentially useful:** meaningful facts are present, but they still require fresh research and evaluation.
- **Weak or incomplete:** some content exists, but it lacks important stories, local specificity, good sources, translations, or valid structure.
- **Empty or practically empty:** little or no usable content exists; build the record from the ground up.

This classification is a workflow aid only. It does not change the quality bar, the research method, the schema, or the final requirements. Every record must reach the same standard.

For records with existing content, treat the old facts as leads to investigate, not as a limit on the research. Keep a fact only if it remains relevant, sufficiently supported, geographically connected, and worth including. Rewrite it if needed. Remove it if it is weak, false, duplicated, generic, or insufficiently connected to the postal-code area.

For empty records, conduct the same research and story-selection process without relying on old facts.

## 2. Mandatory postal-code and administrative verification

This check is part of the rework of every existing record. Never assume a postal-code row is correct merely because it already exists.

For each record, verify from reliable postal and administrative sources:
- that the German postal code is valid and appropriate for a geographic travel stop;
- whether it is a normal geographic delivery code or a special-purpose code, including post-office-box and large-recipient codes;
- the actual locality/municipality, city district where applicable, county (Kreis/Landkreis or equivalent), and federal state;
- whether the stored locality fields, representative place, and coordinates match the verified assignment;
- whether the code is obsolete, misassigned, duplicated, non-geographic, or covers a different area than the record claims.

Prefer authoritative postal sources such as Deutsche Post and official municipal or administrative sources. Cross-check uncertain assignments; do not rely on a search snippet alone.

Do not silently replace a postal code, invent a replacement, delete a row, or insert a guessed missing code. If a code is invalid, special-purpose/non-geographic, obsolete, duplicated, or uncertain, record the issue and supporting evidence. Do not falsely mark it as a verified geographic stop. Follow existing exception handling; if no suitable mechanism exists, report it for review rather than inventing a status or changing the schema.

Only after checking the postal code and its geographic assignment should you decide which facts belong in the record.

## 3. Research the area anew

Research before writing the final fact list. Establish what the postal-code area actually covers and what makes it distinctive.

Investigate broadly where relevant: history, settlement and development, landmarks, architecture, film and television connections, culture, important people, local traditions, industry, companies and products, manufacturing, engineering, transport, railway, aviation, shipping, mining, energy, science, technology, military history, archaeology, nature, geology, protected landscapes, recreation, and lesser-known local stories.

This is a research checklist, not a quota. Not every category needs to appear in every record. Do not force industrial history into a nature-focused area, or nature facts into a place whose defining significance lies elsewhere. Do not force every category into the final result.

Use a breadth-first research mindset: do not stop after the first obvious attraction or after discovering a single interesting person, building, company, or landscape. Look for the other important stories that genuinely help explain the area.

## 4. Determine the identity of this specific place

Before selecting and ordering facts, answer:

- What is this area best known for, locally or beyond the region?
- What are the strongest reasons someone would visit, recognize, study, or care about it?
- Which events, places, people, industries, cultural works, traditions, or natural features genuinely shaped its identity?
- Which less obvious stories add real value beyond the obvious headline?
- What is important specifically within this postal-code area, rather than merely somewhere in the same city or region?

Use these answers to establish a place-specific editorial priority order. Do not apply a universal category hierarchy.

## 5. Relevance determines fact selection and order

**No subject category has automatic priority. The defining identity of the specific area determines what comes first.**

Include all facts that are genuinely interesting, relevant, sufficiently supported, and geographically appropriate. There is no fixed maximum fact count. Ten, fifteen, or more facts are acceptable when each adds meaningful, distinct value. Do not pad the record to reach a target, and do not remove a strong fact simply to keep the list short.

Order facts by their importance and relevance to the specific place—not by the order in which research found them, by the ease of sourcing them, or by a predetermined preference for industry, technology, nature, tourism, or hidden gems.

Examples of how to apply this rule:

- If a place is widely known for a castle and a famous film shot there, the film connection and castle history may deserve to come before nearby ponds or landscape details.
- If a place is a gateway to a distinctive sandstone landscape or national park, its rocks, scenery, nature, and outdoor significance may deserve to come before a notable miner or a secondary historical detail.
- If a place is defined by a major industrial, transport, engineering, or scientific achievement, that story may lead.
- If a place is best explained by a historic event, a person with a strong local connection, a cultural tradition, architecture, or another defining story, lead with that instead.

These are illustrations, not templates. Determine the priority order separately for each postal-code area.

Secondary subjects still belong in the record when they are genuinely valuable. A nature feature need not be excluded from a historically important town; an industrial story need not be excluded from a scenic area. The rule is about relevance and order, not about banning categories.

Hidden gems are welcome when they are distinctive, factual, sourceable, and locally relevant. They must not be pushed above a more defining story merely to make the record feel surprising.

The same priorities must be reflected in the final fact ordering and preserved consistently in all six language versions.

## 6. Defining-story completeness check

Before finalizing the record, ask:

**“If I had to explain why this specific postal-code area is interesting, which 3–5 stories would I absolutely not be allowed to omit?”**

Identify those stories, then verify that the final record represents them where evidence supports them. This is a completeness test, not a required number of facts. A defining story may require more than one fact if each fact adds distinct information.

Do not omit an important story merely because it is not a conventional tourist attraction. Equally, do not include a weak story just to represent a research category.

## 7. Geographic relevance — the postal-code area is the unit of truth

The record describes a specific postal-code area, not a generic city, district, county, or region summary.

For every major person, company, product, event, attraction, building, or natural feature, establish the concrete connection to the postal-code area. A shared city name is not enough.

Examples of concrete connections include:

- a person was born, lived, worked, studied, created something, or took part in a documented event at a specific local site;
- a company or product has a documented local founding, factory, workshop, headquarters, production site, or other meaningful local connection;
- a film, event, or cultural story is tied to a verified location in the area;
- a natural feature lies within the area or has a direct, documented connection to it.

Do not attach famous attractions merely because they are elsewhere in the same city, district, county, or state. If postal-code boundaries or the precise location are uncertain, be conservative and investigate further. Do not invent precision.

## 8. Duplication control across postal codes

TRAVEL is a postal-code database, not a collection of repeated city summaries.

Do not automatically copy a city-wide story into every postcode. A story may appear in multiple records only when each has a genuine geographic or historical connection and the fact adds a relevant perspective for that area.

Before including a major story, ask:

- Is it specifically connected to this postal-code area?
- Is there a concrete local place, person, event, or production connection?
- Does this record add a distinct perspective, rather than repeat a generic city summary?

Avoid unnecessary repetition, but do not omit a genuinely relevant shared story just because it also appears in another record.

## 9. Build a coherent, useful record

After research and prioritization, build a coherent picture of the area. The record should explain what makes it distinctive and why the selected stories matter.

Each fact should be:
- accurate and supportable;
- genuinely interesting and meaningful for this location;
- specific rather than generic;
- geographically relevant to the postcode;
- distinct from the other facts;
- useful to a normal user and, where appropriate, a professional user such as a tourism or local-information organization;
- written clearly and without filler.

Remove generic statements about churches, railway stations, beautiful scenery, tourism, or German history unless the specific detail has real significance. Commercial entities are not advertising opportunities: include businesses only when they have genuine documented historical, cultural, industrial, scientific, or other significance.

Cultural memory and folklore may be included when presented accurately as tradition or cultural memory, not as proven historical fact without evidence.

## 10. Sources and evidence

Prefer, where available:

1. official and primary sources;
2. archives;
3. museums;
4. universities and research institutions;
5. specialist institutions;
6. high-quality journalism;
7. reliable regional and local sources.

Do not invent facts, citations, source identifiers, or URLs. Verify that a source supports the specific claim for which it is used. Every factual claim must have appropriate evidence, and fact-level source references must resolve to relevant top-level source identifiers according to the current schema.

A source that merely mentions a city is not automatically evidence for a claim about a particular postcode.

## 11. Required record structure and six languages

Follow `data/germany/schema.json` exactly, including every required field and its constraints. Do not rely on an old record's structure as proof that it is valid. Pay particular attention to the required geographic points, access point, verification fields, photo structure, sources, facts, and translations.

Use the schema's current fact structure, including:
- `id`
- `title`
- `text`
- `category`
- `priority`
- `sources`

Use sequential fact IDs within the final record: `fact_001`, `fact_002`, `fact_003`, and so on. If facts are removed, renumber the final surviving list. The same ID must represent the same fact in every language.

Every record must include all six language versions:
- `cs`
- `de`
- `en`
- `es`
- `fr`
- `it`

Each translation must include `representative_place` and `facts`; each translated fact must include `id`, `title`, and `text`. All six versions must contain exactly the same fact IDs in the same order. Translate the meaning naturally and accurately; do not simply copy text between language fields. Keep factual meaning and editorial priorities aligned across all translations.

## 12. Coordinates, access, and representative place

Verify the representative place, representative coordinates, and access-point coordinates according to the current schema and existing project rules. Coordinates must be plausible and correspond to the intended place. Do not copy coordinates blindly from old content.

Do not claim that an access point or geographic check has been verified unless it has actually been checked. Follow the schema's required verification flags honestly.

## 13. Final audit before saving

### Content and relevance
- Did I research the area anew, including when old content existed?
- Did I determine the identity of this specific area?
- Are facts selected and ordered by actual local relevance?
- Did I avoid giving any category automatic priority?
- Are all defining stories represented where evidence supports them?
- Are all included facts worth keeping, even if the list is long?
- Have I avoided arbitrary quotas, padding, and weak filler?
- Did I look beyond the first obvious attraction?
- Are hidden gems included only when genuinely valuable?

### Postal-code and administrative correctness
- Did I verify that this is a valid German postal code suitable for a geographic travel stop?
- Did I check for post-office-box, large-recipient, or other special-purpose codes?
- Did I verify the actual locality, district where applicable, county, federal state, and coordinates against reliable sources?
- Did I record any suspected obsolete, misassigned, duplicated, or non-geographic code rather than falsely marking it complete?

### Geography and duplication
- Does each fact have a concrete connection to this postcode?
- Did I avoid treating “same city” as sufficient evidence?
- Are people, companies, products, events, and sites linked to the correct location?
- Have I avoided unnecessary duplication with other postcodes?

### Evidence and structure
- Are factual claims supported by appropriate sources?
- Do source references resolve correctly, and do URLs exist?
- Are all required schema fields present and valid?
- Are coordinates and verification flags honest and valid?
- Are fact IDs sequential and consistent across all six languages?
- Are all translations complete, accurate, and semantically aligned?
- Does the complete record validate against the current `schema.json`?

If any required check fails, fix the record and validate again. Do not mark it complete merely because the content has been generated or saved.

## 14. Save and completion state

The database is the production source of truth. Save the final schema-compliant content to the correct fields of the existing Supabase row, preserving unrelated metadata and fields.

Use the project's existing completion mechanism only after the content has been saved successfully and all required validation has passed. A pre-existing status such as `validated`, a high data version, or the mere presence of content is not proof that this rework is complete.

Do not invent a new database status, change the schema, or change the application's completion logic as part of this prompt unless that mechanism is explicitly part of the existing implementation. Inspect the current worker/database conventions and follow them consistently. If no reliable completion marker exists, report that as a genuine workflow blocker rather than falsely marking the record complete.

A record is complete only when:
1. the final content is saved to the correct existing row;
2. schema and content checks pass;
3. all six translations and matching fact IDs are present;
4. the project's established completion marker is persisted successfully.

## 15. Queue, order, and resuming after interruption

Process the existing German records in the established ascending postal-code order, unless the current worker explicitly defines another production order.

At the beginning of a run:
1. load the prompt, content standard, and schema from the repository;
2. inspect the current database/worker completion conventions;
3. identify records that still require rework using the project's reliable completion marker—not merely the presence of a record or a generic status label;
4. select the next eligible existing German postcode in order.

After each record is successfully saved, validated, and marked complete, immediately continue to the next eligible record.

Persist completion record by record. If the process times out, crashes, or loses connection, the next run must resume at the first remaining eligible record. Do not restart the whole queue, and do not reprocess completed records unless explicitly requested.

Do not block content rework on an exhaustive comparison of every German postcode against external postcode lists. Postal-code verification is mandatory during this rework. For every existing record, verify the code's validity, whether it is geographic or a special-purpose code (including post-office-box and large-recipient codes), and whether its locality, district, county, federal state, and coordinates are correct. Do not invent or insert missing postal codes; report suspected coverage gaps and unsuitable codes for review.

## 16. Error handling and run report

If an individual record cannot be completed:
1. log the postcode and specific reason;
2. do not mark it complete;
3. continue to the next record if the error is isolated to that postcode;
4. retry transient service or network errors according to the existing worker's retry policy.

Do not let one bad record stop the entire queue unless there is a genuine system-wide blocker, such as loss of database access or unavailable required credentials.

At the end of a run, report:
- total existing German records in scope, if available from the worker;
- already completed according to the reliable completion marker;
- completed during this run;
- remaining;
- failed postcodes and reasons;
- any system-level blocker.

Do not claim completion based only on the number of records attempted.

## 17. Database safety

Never:
- delete the postal-code table or unrelated records;
- create duplicate postal-code records;
- change `schema.json` or `CONTENT_STANDARD.md`;
- change application code, RLS policies, or the Supabase project;
- expose or store credentials in the content;
- mark a record complete before successful save and validation;
- overwrite unrelated fields or records.

Update only the intended existing German rows.

## Autonomous execution

This is an explicit instruction to work autonomously. Do not repeatedly ask whether to continue.

For each eligible record, follow:

**research → establish local identity → rank by relevance → rework → translate → validate → save → mark complete → next**

Continue until the eligible queue is empty or a genuine system-level blocker prevents further work.

## Completion

The rework phase is complete when no eligible existing German records remain according to the project's reliable completion mechanism. Then provide a final report.

Do not create placeholder records. Do not invent missing postal codes. The separate final manual review will check postcode coverage and any remaining geographic assignment issues.

---

**IMPORTANT:** This file is the dedicated prompt for **REWORK / MIGRATION OF EXISTING GERMAN POSTAL-CODE RECORDS**. The prompt for creating new postal-code records remains separate.
