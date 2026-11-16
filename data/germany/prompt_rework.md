# TRAVEL — GERMAN POSTCODE REWORK PROMPT

## Version and authority

**REWORK PROMPT V1.7 — EFFICIENT CONTINUOUS QUEUE WORKFLOW**

Use this prompt with the current:
- `data/germany/schema.json`
- `data/germany/CONTENT_STANDARD.md`

The schema defines structure and permitted values. The German Content Standard is authoritative for content, geography, research, sources, translations and quality. This prompt defines the efficient workflow. If they conflict, follow the schema and Content Standard and record the conflict; do not silently change either.

## 1. Purpose, scope and protected boundaries

Rework existing German records in `public.postal_codes` where `country_code = 'DE'`. Update only the existing row for its existing postcode.

- This is rework of existing records, not creation of new postcode rows.
- Do not create missing postcodes, duplicate rows, change schema/database architecture/RLS/triggers/permissions, alter application code, or modify unrelated countries or records.
- Preserve existing IDs and unrelated metadata.
- Do not inspect postcode polygons or perform polygon-based boundary checks.
- Germany does not use Czech RÚIAN. Never request or apply RÚIAN procedures. Use appropriate German postal, address, administrative, municipal and institutional sources.
- Read the current complete schema and Content Standard before the run. Do not repeatedly reread unchanged documents during the same run.

An existing record is working material, not an authoritative account. Retain useful verified facts; correct, replace or remove weak, false, duplicated, irrelevant or unsupported content; add significant missing stories.

## 2. Queue and continuation — do not repeat completed work

Process eligible existing German records in the established ascending postcode order, unless the current production worker defines another order.

1. Read the project's existing queue/completion mechanism and identify the next eligible record. Do not infer completion from the mere presence of content or a generic status.
2. Process records continuously. Batch comparable reads and research where practical, but save and confirm each record separately so interruptions do not lose completed work.
3. Once a record has been successfully reworked, validated and saved as `validated`, treat it as complete and skip it in later runs.
4. Reopen a completed record only when the user explicitly requests it, concrete new evidence appears, the record materially changes, or the schema/Content Standard changes in a way that affects it. Preserve the previous result and record why it was reopened.
5. If a record is blocked, record its postcode and exact reason, do not mark it complete, and continue to the next eligible record when the issue is isolated.
6. Do not stop after each postcode to ask whether to continue. Stop only for a genuine system-wide blocker, such as loss of database access or required credentials.
7. At handoff or when context is running low, record the exact last completed postcode, next eligible postcode and any blocked items using the project's existing progress mechanism. Do not create a parallel tracker if one already exists.

A new chat or model is a continuation of the same queue, not a reason to restart it. Never repeat a completed record merely because the session changed.

## 3. One-pass workflow for each postcode

Use this sequence once per record:

**READ → VERIFY → RESEARCH → SELECT/WRITE → GEOGRAPHY → TRANSLATE → VALIDATE → SAVE/CONFIRM → NEXT**

Do not split the same record into repeated research rounds, separate language-by-language passes or multiple editorial audits.

### 3.1 Read and assess the existing record

Classify it only to guide the amount of work:
- useful content that can be verified and retained;
- weak/incomplete content requiring correction or additions;
- empty/practically empty content requiring research from the beginning.

The classification does not change the quality standard. Old facts are leads, not guaranteed truth or a limit on research.

### 3.2 Verify postcode and administrative assignment

Use reliable German postal and official administrative sources. Check:
- whether the postcode is in use and is a normal geographic delivery code or a special-purpose code (for example PO-box or large-recipient);
- locality/municipality and city district where relevant;
- Kreis/Landkreis or equivalent and Bundesland;
- consistency of `city`, `district`, `county`, `state`, `representative_place` and postcode-level geographic data with the schema and Content Standard.

Prefer Deutsche Post and responsible official municipal/administrative sources; cross-check material uncertainty. Do not rely on search snippets alone. A currently open standalone post-office building is not required; a change of retail parcel outlet does not by itself invalidate a postcode.

Do not replace, invent or delete a postcode or create a missing row. If validity or assignment remains genuinely uncertain, record the evidence and exact blocker; do not falsely mark the record complete. This per-record check is not a national postcode-coverage audit.

### 3.3 Research the area once — mandatory two-pass discovery

Establish what the actual postcode area covers and what makes it distinctive. Use existing facts as leads, then conduct both passes in the same research phase:

**Pass 1 — broad discovery:** search relevant postcode/locality names and historic names across official tourism portals, heritage registers, municipal and regional sources, museums, nature authorities, specialist institutions, archives and reliable local-history sources.

**Pass 2 — category gap check:** use section 29.2 of the German Content Standard to deliberately check all relevant themes, such as heritage and architecture, religious sites, monuments and memorials, museums and specialist collections, archaeology, protected nature/geology/landscapes, viewpoints and routes, parks/gardens/zoos/aquariums/caves, technical and transport heritage, industrial history, visitor attractions, UNESCO, local stories and legends, historical events, notable people, film/literature/music, traditions, crafts and food heritage.

For each relevant category, working notes should show one of:
- **found and verified**;
- **checked — no qualifying result**;
- **unresolved**.

Apply section 29.3 exclusions in the Content Standard. Do not force irrelevant categories or fill quotas. Wider-area research is for discovery/context only; it does not prove that a candidate belongs to this postcode.

Verify each selected candidate's identity, significance, factual claims, primary location, postcode connection and source support. A second targeted search is appropriate for a material uncertainty; do not restart broad discovery or revisit sufficient sources without new evidence.

**Stop researching** when defining stories and other clearly valuable local facts have been identified, relevant categories have been checked, and further searches mainly return repetitions, minor details or weaker alternatives. No fixed fact count applies.

### 3.4 Select and write facts

The postcode area is the unit of truth. A shared city, district, county or regional name alone is not enough to establish local ownership.

For each selected person, company, product, event, attraction, building or natural feature, establish a concrete local connection such as a verified site, address, workplace, production facility, documented event, residence, cultural activity or physical presence in the area.

Order facts by genuine local significance and priority under the Content Standard. Retain all qualifying strong stories without padding the record or imposing a maximum/minimum fact count.

Within the record:
- remove duplicate or near-identical facts;
- avoid generic filler, unsupported claims and promotional language;
- include businesses only for genuine historical, cultural, industrial, scientific or comparable significance—not advertising;
- distinguish folklore and cultural memory from documented fact;
- do not omit a strong story merely to keep the list short.

Do not perform cross-postcode duplication/overlap audits during ordinary rework. Do not compare every fact against every neighbouring record. The separate final section audit handles cross-record duplication and broader coverage. Each fact must nevertheless have a defensible connection to its own postcode.

### 3.5 Sources and evidence

Prefer primary/official sources, archives, museums, universities/research institutions, specialist institutions, high-quality journalism and reliable regional/local sources.

Use enough evidence to support each material claim; do not collect sources merely to increase the count. A source must support the specific claim, not just mention the wider city or region. Ensure fact-level source references resolve to the correct top-level source identifiers required by the schema.

Never invent facts, citations, source IDs or URLs. Record material evidence gaps honestly.

## 4. Geographic data — mandatory V3 layer

Follow the complete current German Content Standard and schema. Do not omit geographic requirements for speed.

Keep these three roles separate:
1. `representative_point` — one point identifying `representative_place`;
2. `access_point` — one practical, verified arrival/access point;
3. `facts[].location` — the independently verified principal location of each fact.

For every source-language fact, include an explicit `location` property:
- a complete location object when a defensible location is verified;
- explicit `null` when no defensible location can be established and the schema permits it.

Every non-null fact location must contain the required name, WGS84 latitude/longitude, schema-approved `type` and `accuracy`, and a direct location source. Include a verified address when one exists; otherwise use `null` or omit only as the schema permits. Choose one principal point per fact. Never guess coordinates, invent midpoints, imply false precision or use multiple pins for one fact. For natural areas and historical/vanished sites, use a defensible point and honest accuracy; otherwise use `null`.

For facts genuinely associated with the postcode area but lacking one specific physical site, apply the Content Standard's documented fallback:
- local customs, traditions, folklore and language may use `representative_point`;
- for a person, first seek a verified local site (birthplace, residence, workplace, study/creative site, documented activity, memorial or burial);
- only if no defensible person-related site exists in the postcode may the representative point be used.

For an area-level fallback, use the exact representative-point coordinates, `name = representative_place`, `type = postal_area`, and `accuracy = area_representative`. Never use `access_point` as the fallback. The fact text must explain the real local connection and must not imply the event occurred at the representative point.

Assign exactly one `map_category` to every fact, using only the 17 values in the current schema and the precedence rules in section 11A of the Content Standard. It describes the fact's primary subject, not its pin location or `location.type`. A person-centred fact uses `personality`; a theatre/opera/concert/performance venue uses `cultural_site`; apply the remaining subject-specific rules in the Content Standard. Do not confuse editorial `category` with `map_category`, invent values, translate map categories or duplicate them in translations. Borderline cases may be noted briefly in working notes.

The fact's content sources support its claims and significance; the location source supports its geographic position. One URL may serve both roles only when it genuinely supports both. Store each location object once in the source-language fact, not in translations. Set verification flags only for checks actually performed.

**Cross-postcode features:** assign each fact to exactly one primary postcode. For a bridge, park, large complex, trail or other feature spanning areas, choose the most defensible primary assignment using its representative/principal location, main section, primary entrance, verified address or strongest local association. Verify concrete addresses where they exist; the entire feature need not fit inside one postcode. Once evidenced, the assignment is stable. Do not move it because a neighbouring postcode is also plausible; reopen only on concrete new evidence that the original assignment was wrong. Do not duplicate the same attraction or continuous story across records.

## 5. Seven languages and international readability — one comparative pass

Every record must contain all seven languages: **cs, de, en, es, fr, it, nl**. Dutch must be standard Netherlands Dutch (`nl-NL`), natural and understandable to Flemish readers.

Follow the schema exactly:
- source-language facts include all required fields;
- IDs are sequential (`fact_001`, `fact_002`, …) and represent the same fact in every language;
- each translation contains `representative_place` and `facts`;
- each translated fact contains `id`, `title`, `text`;
- all seven versions have exactly the same fact IDs in the same order;
- geographic location objects and map categories are stored only once in source-language fact metadata.

Write and compare all seven versions together—not one language at a time. Preserve factual meaning, names, dates, qualifications and significance; translate naturally rather than mechanically. Translate ordinary descriptive labels but preserve genuine official proper names.

Apply section 30 of the German Content Standard independently to every language. Write for an international reader unfamiliar with Germany: explain essential local institutions, historical events, memorial forms, traditions, abbreviations and cultural/administrative terms at first meaningful use. Preserve proper names but identify what an unfamiliar subject is and why it matters. Keep explanations concise, natural and sourced; do not turn every fact into an encyclopaedia entry or add irrelevant background.

Before saving, compare the seven texts side by side for meaning, completeness, naturalness and cultural clarity. Correct safe translation issues in one batch and validate the seven versions together. Do not repeat the entire language review unless a later change affects meaning.

## 6. Basic validation, save and completion

Perform one final basic validation pass for the record. Confirm:
- postcode and administrative assignment are verified, or a specific blocker is recorded;
- facts are accurate, locally connected, significant and adequately sourced;
- no promotional copy, unsupported claims or accidental within-record duplicates remain;
- representative point, access point and fact locations are distinct and valid;
- every fact has explicit `location` and one allowed `map_category`;
- all non-null locations have valid coordinates, type, accuracy and supporting location source;
- required schema fields, data types, enums, fact IDs and source references are valid;
- all seven translations are complete, aligned by fact ID/order and independently understandable;
- verification flags reflect actual checks.

If a check fails, correct that specific issue and validate the correction. Do not restart research or repeat unrelated checks. Do not run the separate final audit here.

Save the schema-compliant content to the correct fields of the existing Supabase row. Preserve unrelated metadata. Do not assume the JSON Schema root object is identical to the database row layout. Read the saved row back and verify the content and status.

**Status lifecycle (mandatory):**
- completed rework with successful validation → save/retain `status = 'validated'`;
- completed final audit that passes → save/retain `status = 'published'`;
- never use `draft` as a staging or parking state for finished work;
- if a required condition genuinely blocks completion, do not claim completion or falsely set `validated`; retain the existing non-complete state and record the exact blocker;
- never downgrade an already `validated` or `published` record to `draft`.

After every write, verify the persisted status. A successful content write without confirmation of the required status is not complete. Do not change schema, tables, RLS, triggers, permissions, database architecture or application code.

## 7. Protected geographic-enrichment exception

This exception applies only when a record is already editorially complete and the task is explicitly limited to adding/verifying the V3 geographic layer.

Preserve all existing editorial content, fact order/IDs and all seven translations exactly. Change only the authorized geographic metadata: fact-level `location` and required `map_category`. Do not perform editorial discovery, rewrite facts or retranslate during this geographic-only pass.

If a content or translation defect is noticed, record it for a separate editorial task; do not silently change it. The enrichment is complete only when every fact has an explicit valid location object or permitted `null`, every fact has one valid map category, non-null locations are evidenced, and protected content remains unchanged.

## 8. Separate final audit

The final audit is a separate phase, performed only after the entire selected postcode section has been reworked. It checks cross-postcode duplicates/overlaps, consistency across the completed section and broader postcode coverage/assignment issues.

Do not run this section-wide audit during ordinary per-postcode rework, repeat it for each record or delay the next postcode because it has not yet happened. Use the separate current German audit prompt.

## 9. Operating principle

**Rework each eligible German postcode once: research it in one efficient two-pass phase, write and compare all seven languages together, complete the V3 geography, validate once, save as `validated`, confirm, and move forward. Resume from the next unfinished record. Keep the section-wide audit separate. Germany uses German sources—not RÚIAN.**
