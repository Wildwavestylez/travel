# TRAVEL — REWORK PROMPT FOR EXISTING GERMAN POSTAL-CODE RECORDS

## Version

**REWORK PROMPT V1.6 — V1.2 WORKFLOW + CONTENT STANDARD V3 GEOGRAPHY**

This prompt is paired with `data/germany/CONTENT_STANDARD.md` and `data/germany/schema.json`. The Content Standard and schema are authoritative for content quality and data structure. This prompt defines the practical workflow for reworking existing German postcode records.

## Purpose and scope

Rework existing German postcode records in TRAVEL into researched, locally relevant, geographically accurate, high-quality records.

Process only existing German records in `public.postal_codes` where `country_code = "DE"`. Update the existing row for its existing postcode. Do not create missing postcodes or duplicate rows.

An existing record is working material, not an authoritative account of the place. Its facts may be useful, incomplete, weak, duplicated, geographically misleading, outdated, or absent. Research the area before deciding what the final record should contain.

This is a rework prompt, not a prompt for creating new postcode records.

## Authoritative specification

Before starting, read and follow:

1. `data/germany/schema.json`
2. `data/germany/CONTENT_STANDARD.md`

Do not change either file as part of an ordinary postcode rework. Keep the official Content Standard designation unchanged. The current schema and Content Standard take precedence over examples in this prompt.

## Core workflow

**READ RECORD → VERIFY POSTCODE / ADMINISTRATION → RESEARCH THE AREA → SELECT AND ORDER THE FACTS → ADD / VERIFY GEOGRAPHY → TRANSLATE → BASIC VALIDATION → SAVE → CONFIRM → NEXT RECORD**

This is one continuous workflow. Do not split it into repeated research rounds, separate editorial audits, or multiple rounds of checking the same requirements.

## 1. Read and classify the existing record

Determine whether the record is:
- **Existing and potentially useful:** meaningful facts are present and may be retained after verification.
- **Weak or incomplete:** some content exists but needs correction, replacement, or additions.
- **Empty or practically empty:** little or no usable content exists and the record must be built from research.

This classification does not create different quality standards or workflows.

Treat old facts as research leads, not as guaranteed truth and not as a limit on research. Keep facts that remain accurate, relevant, sufficiently sourced, and geographically connected. Correct or rewrite facts when necessary. Remove facts that are false, generic, weak, irrelevant, or unsupported. Add important missing stories. Do not discard a useful fact just because the record is being reworked.

## 2. Verify the postcode and administrative assignment

For each record, verify the existing postcode and its geographic assignment using reliable postal and official administrative sources.

Check:
- whether the postcode is valid and suitable as a geographic travel stop;
- whether it is a normal geographic delivery postcode or a special-purpose code, including PO-box and large-recipient codes;
- the correct locality/municipality and city district where applicable;
- the correct Kreis/Landkreis or equivalent and Bundesland;
- whether the stored locality fields, representative place, and postcode-level coordinates fit the verified area.

Prefer Deutsche Post and official municipal or administrative sources. Cross-check uncertain cases. Do not rely on a search-result snippet alone.

Do not silently replace a postcode, invent a replacement, delete a row, or insert a missing code. If the code is invalid, special-purpose, obsolete, misassigned, or uncertain, record the evidence and report the issue for review. Do not falsely mark it as a verified geographic stop.

Do not turn this step into a full national postcode-coverage audit. That broader audit belongs to the separate final audit after an entire postcode section has been completed.

## 3. Research the area once, thoroughly and efficiently

Research the actual postcode area before writing the final fact list. Establish what it covers and what makes it distinctive.

Pay particular attention to significant landmarks, historic buildings, monuments, museums, palaces, memorials and other notable places. Do not overlook major internationally or nationally known attractions, but also research smaller locally important sites and stories wherever they exist. Include them when they genuinely belong to the postcode area and are supported by reliable sources.

Investigate relevant subjects such as history, settlement, landmarks, architecture, film and television, culture, important people, traditions, industry, companies and products, manufacturing, engineering, transport and railways, aviation, shipping, mining, energy, science, technology, military history, archaeology, nature, geology, protected landscapes, recreation, and lesser-known local stories.

This is a discovery guide, not a checklist or quota. Do not force irrelevant categories into a record.

Use the existing facts as leads. Research the area's defining stories and the other genuinely valuable local subjects in the same research pass. A second targeted search is appropriate when an important claim or location remains unclear. Do not repeatedly restart broad research or revisit already sufficient sources without a concrete reason.

**Stop researching when the area's defining stories and other clearly valuable local facts have been identified and further searching is mainly returning repetitions, minor details, or weaker alternatives.** There is no fixed fact count. Quality and local significance determine the final length.

## 4. Select, write, and order the facts

The postcode area is the unit of truth. A shared city, district, county, or regional name is not enough to establish that a fact belongs in this record.

For every important person, company, product, event, attraction, building, or natural feature, establish a concrete connection to the postcode area. Examples include a verified local site, workplace, production facility, documented event, residence, cultural activity, or a natural feature located in the area.

Determine what makes this particular area distinctive and order facts by their actual local importance. No category has automatic priority. Include all facts that are genuinely interesting, relevant, sufficiently supported, and geographically appropriate. Do not pad the record, impose a maximum fact count, or omit a strong story merely to keep the list short.

Within this one record:
- remove duplicate or near-identical facts;
- avoid generic filler and unsupported claims;
- include hidden gems only when they add real value;
- include businesses only when they have genuine historical, cultural, industrial, scientific, or other significance—not as advertising;
- present folklore and cultural memory as tradition, not as proven historical fact unless evidence supports that claim.

**Do not perform a cross-postcode duplication or overlap audit during ordinary rework.** Do not compare every fact with neighbouring postcode records. That work is reserved for the separate final audit of the completed postcode section. Still ensure that each fact genuinely belongs to the current postcode.

## 5. Sources and evidence

Prefer, where available:
1. official and primary sources;
2. archives;
3. museums;
4. universities and research institutions;
5. specialist institutions;
6. high-quality journalism;
7. reliable regional and local sources.

Use enough reliable evidence to support each claim. Do not pursue extra sources merely to increase their count once the claim is adequately supported. A source must support the specific claim for which it is used; a source that merely mentions the city is not automatically evidence for a particular postcode.

Do not invent facts, citations, source identifiers, or URLs. Ensure fact-level source references resolve to the correct top-level source identifiers according to the schema.

Write naturally in each language. Translate ordinary descriptive words and generic labels; preserve genuine official proper names. Do not invent translations or mechanically alter proper names. Explain unfamiliar names naturally when needed.

## 6. Geographic data — preserve the complete V3 layer

The geographic layer is mandatory and must not be shortened or omitted for speed. Follow the current Content Standard and schema.

Do not download, inspect, or validate postcode polygons, and do not perform polygon-based boundary checks. Verify postcode assignment and each fact's local connection using reliable postal, administrative, institutional, address, and location sources. Keep all other geographic verification and accuracy requirements in force.

Keep these three geographic roles separate:

1. **`representative_point`** — exactly one point identifying the postcode's `representative_place`.
2. **`access_point`** — exactly one practical, verified arrival/access point for the postcode area.
3. **`facts[].location`** — the independently verified principal location of each individual fact.

Never substitute one role for another. Do not use the representative point or access point as a shortcut for a fact location.

For every fact in the source-language `facts[]` array, include the `location` property:
- use a complete location object when the fact has a defensible, verifiable location;
- use explicit `null` when no defensible location can be established.

Every non-null fact location must include:
- `name`;
- WGS84 `lat` and `lon`;
- valid `type` and `accuracy` values from the schema;
- a direct `source` URL supporting the location;
- `address` when a verified address exists, otherwise `null` or omit it as allowed by the schema.

Choose one principal location per fact. Do not invent a midpoint or multiple pins. For a natural area, use one defensible representative point and label its accuracy honestly. For a vanished or historical site, use a documented historical position only when evidence supports it; otherwise use `null`. Never guess coordinates or claim exact precision without verification.

For facts genuinely associated with the postcode area but lacking one specific physical site:
- local customs, traditions, folklore, language, and cultural practices may use the postcode's `representative_point`;
- for a person, first seek a verified local site connected to them, such as a birthplace, residence, workplace, study location, creative site, documented activity, memorial, or burial;
- if no defensible person-related site within the postcode can be established, use the postcode's `representative_point` as the area-level fallback.

For these area-level fallbacks, use the exact representative-point coordinates, `name` equal to `representative_place`, `type: "postal_area"`, and `accuracy: "area_representative"`. Never use the access point as this fallback. The fact text must explain the real local connection; the pin must not imply that a tradition or a person's activity occurred at the representative point itself.

**Map category is independent of pin location.** A fact whose primary subject is a specific person must use `map_category: "personality"`, even if its pin is a building, workplace, museum, memorial, or representative point. A person mentioned only incidentally in a fact about another subject does not trigger this category. Use the other map categories according to the actual primary subject of each fact.

The location source and the fact's content sources serve different purposes. A location source must support the geographic position. The fact's `sources` must support the factual claim and its local significance. The same URL may serve both purposes only when it genuinely supports both.

Do not duplicate fact-location objects in the six translation arrays. Store each location once alongside its source-language fact. Do not claim that a point or geographic check is verified unless it has actually been checked. Set verification flags honestly.

## 7. Required structure and six languages

Follow `data/germany/schema.json` exactly. The schema is authoritative for required fields, allowed values, and data types.

Each source-language fact must include the current required fields, including:
- `id`, `title`, `text`;
- `category`, `priority`;
- `sources`;
- `map_category`;
- `location` (a verified object or explicit `null`).

Use sequential fact IDs: `fact_001`, `fact_002`, and so on. Renumber the final list if facts are removed. The same ID must represent the same fact in every language.

Every record must contain all six languages:
- `cs`
- `de`
- `en`
- `es`
- `fr`
- `it`

Each translation must include `representative_place` and `facts`. Each translated fact must include `id`, `title`, and `text`. All six language versions must contain exactly the same fact IDs in the same order. Translate naturally and accurately; preserve the meaning, factual detail, and editorial priority of the source-language facts.

The geographic location object is stored only once in the source-language fact. Do not duplicate it in translations.

## 8. Basic validation, save, and completion

Perform one basic validation pass before saving. Check only the essentials:
- postcode and administrative assignment have been verified, or a genuine issue has been reported;
- facts are accurate, relevant, locally connected, and adequately sourced;
- the three postcode/fact geographic roles are correctly separated;
- every fact has an explicit `location` property and a valid `map_category`;
- every non-null location has valid coordinates, type, accuracy, and a supporting source;
- required schema fields are present and valid;
- all six translations are complete and have matching fact IDs and order;
- verification flags reflect checks that were actually performed.

If a basic check fails, correct that specific issue and validate the correction. Do not restart the research or repeat the entire workflow. Do not run a second editorial audit, a cross-postcode comparison, or the final section audit here.

Save the final schema-compliant content to the correct fields of the existing Supabase row. Preserve unrelated metadata and fields. Follow the existing database mapping and completion mechanism; do not assume that the JSON Schema root object is identical to the database row layout.

After saving, confirm that the intended existing row was updated successfully. Mark the record complete only after the save and basic validation have succeeded, using the project's existing completion mechanism. Do not invent a new status, alter the database schema, or change application logic.

Do not change the database schema, table, RLS policies, application code, Supabase project, or unrelated records. Never expose credentials.

## 9. Queue and error handling

Process existing German records in the established ascending postcode order unless the current worker defines another production order.

Use the project's reliable completion marker to identify the next eligible record. Do not infer completion merely from the presence of content or a generic status label.

After each record is saved and marked complete, continue directly to the next eligible record. Persist completion record by record so an interruption does not require restarting the queue. Do not reprocess completed records unless explicitly requested.

If an individual record cannot be completed:
1. record the postcode and the specific reason;
2. do not mark it complete;
3. continue to the next record if the issue is isolated;
4. retry transient network or service errors according to the existing worker policy.

Stop only for a genuine system-wide blocker, such as loss of database access or unavailable required credentials. Do not let one problematic postcode stop the entire queue.

At the end of a run, briefly report completed records, remaining records if known, and any postcode-specific or system-level blockers. Do not claim that the whole queue is complete based only on the number of records attempted.

## Separate final audit — explicitly outside this prompt

The final audit is a separate phase and must be performed only after the entire selected postcode section has been reworked.

It is not part of the per-postcode workflow and must not be repeated for each record. The separate audit will review cross-postcode duplicates and content overlaps, consistency across the completed section, and broader postcode coverage or assignment issues.

Do not start that final audit during ordinary rework. Do not delay the next postcode because the section-wide audit has not yet been performed.

## Special case: geographic enrichment of already completed protected records

This exception applies only when a record is already editorially complete and is being processed solely to add the V3 fact-location layer. It does not apply to unfinished records.

For such a record, preserve the existing editorial content and all six translations exactly. Add or verify only the missing geographic metadata required by the current schema and Content Standard: fact-level `location` and the required `map_category`. Do not rewrite facts, change their order or IDs, or retranslate them during this geographic-only pass.

If a content or translation defect is noticed, note it for a separately authorized editorial rework. Do not silently change it during geographic enrichment.

A geographic-enrichment record is complete when every fact has an explicit location object or `null`, every fact has a valid map category, every non-null location is supported and valid, and the original editorial content and translations remain unchanged.

---

**Operating principle: use the simple V1.2 workflow. Keep the V3 geographic requirements and all current schema additions. Check each postcode once, save it, and move on. The cross-postcode final audit happens separately after the whole section is complete.**
