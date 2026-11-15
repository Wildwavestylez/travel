# TRAVEL GERMANY — BLOCK AUDIT PROMPT

## Version

**BLOCK AUDIT PROMPT V1.0 — GERMAN POSTCODE BLOCK / DISTRICT AUDIT**

This prompt is paired with:
- `data/germany/schema.json`
- `data/germany/CONTENT_STANDARD.md`
- `data/germany/prompt_rework.md`

The schema defines the permitted data structure and values. The German Content Standard is authoritative for factual, editorial, geographic, research, translation and quality requirements. The rework prompt defines how records should have been produced. This audit prompt defines how a completed group of records is independently checked.

## 1. Purpose and audit unit

Perform a systematic, evidence-based audit of a completed block of German postcode records. The audit unit may be:
- a contiguous postcode block, for example 940xx–941xx;
- a Landkreis or another clearly defined administrative area;
- another explicitly defined group of existing German postcode records.

Audit the whole selected unit, not only a sample and not only records that appear problematic. Establish the exact record inventory and scope before checking content.

Process only existing German records in `public.postal_codes` where `country_code = "DE"`. Do not create missing postcode records, duplicate rows, change schemas, or alter unrelated data.

## 2. Mandatory source reading and audit preparation

Before the audit:
1. Read the complete current `data/germany/schema.json`.
2. Read the complete current `data/germany/CONTENT_STANDARD.md`, including all additions.
3. Read the complete current `data/germany/prompt_rework.md`, including all mandatory addenda.
4. Identify the exact postcode block / Landkreis / record selection and its boundaries.
5. Retrieve the complete list of existing records in scope, including IDs, postcodes, completion/publication markers and relevant metadata.
6. Confirm the number of records expected and the number actually retrieved. Reconcile missing, duplicate, unexpected or unidentifiable records before content review.

Do not rely on memory, earlier audit reports or a previous version of the standards when the current repository files are available.

## 3. Audit operating principles

- **Independent verification:** do not assume that a record is correct because it was marked complete, reworked, published or previously audited.
- **Read-only first:** the initial audit is inspection and reporting only. Do not modify Supabase rows, JSON, GitHub files, statuses or application data during the audit.
- **Evidence before judgment:** every material finding must identify the affected postcode, record/fact ID, issue, evidence and required correction.
- **No invented certainty:** distinguish verified errors from uncertainty or unavailable evidence.
- **No silent scope changes:** do not add or remove postcodes from the selected audit unit without documenting and resolving the scope.
- **No quota filling:** an empty category can be a valid result when it was properly researched and no qualifying fact exists.
- **No polygon checks:** do not download or inspect postcode polygons and do not perform polygon-based boundary checks. Use reliable postal, administrative, institutional, address and location sources as required by the German Content Standard.
- **Separate audit from repair:** identify and report defects first. Corrections are a separate authorized phase. After corrections, recheck the affected items and rerun any dependent validation.
- **Do not alter protected editorial content during a geographic-only task.** Apply the preservation exception in the rework prompt where relevant.

## 4. Audit checklist — nine mandatory control areas

### A. Block inventory and completeness

For every record in scope, verify:
- the postcode exists exactly once in the selected dataset;
- the database row ID and postcode identify the intended record;
- the record belongs to Germany and to the requested block;
- its completion/publication marker is consistent with the actual content and project workflow;
- no expected existing postcode record has been silently omitted;
- no unrelated or out-of-scope record has entered the block;
- the record is not an accidental duplicate row or placeholder.

Produce a reconciled inventory: expected / retrieved / missing / duplicate / out of scope / blocked. Do not infer national postcode coverage from a partial block.

### B. Postcode, locality and administrative correctness

For each postcode:
- verify that it is valid and suitable as a geographic travel stop;
- identify normal geographic delivery codes versus special-purpose, PO-box or large-recipient codes;
- verify the locality / municipality and relevant district assignment;
- verify Kreis/Landkreis and Bundesland;
- check that the representative place and postcode-level metadata fit the verified area;
- identify outdated, contradictory, ambiguous or unsupported assignments.

Use Deutsche Post and responsible official municipal or administrative sources. Cross-check material uncertainties. A city or Landkreis name alone does not prove that a specific attraction belongs to the postcode.

Do not silently replace, delete or invent a postcode. Report invalid, special-purpose, obsolete or uncertain codes for a decision.

### C. Geographic ownership, cross-postcode duplication and block consistency

Review all facts across the entire selected block, not one record at a time only.

For every fact:
- establish a concrete connection to its assigned postcode;
- verify the principal physical location where applicable;
- check that an attraction, building, memorial, natural feature or other place is not assigned to a neighbouring postcode;
- identify facts duplicated or near-duplicated across records;
- identify one story split artificially into multiple facts;
- identify facts that use a city, district or regional association instead of a real postcode-level connection;
- distinguish the fact's actual location from regional context, routes, events or area-wide traditions;
- compare repeated subjects to decide whether they are legitimate distinct stories or accidental duplication.

A fact should normally belong to one postcode only. Retention in more than one record requires a clearly distinct and independently significant story with a defensible local connection in each record. Do not use proximity or shared municipality as proof of ownership.

### D. Factual quality, significance, writing and sources

For every fact, verify:
- factual accuracy, names, dates, chronology and descriptions;
- that sources support the actual claims, not merely mention the wider city or region;
- that source URLs resolve and point to relevant material;
- that important claims use reliable sources, preferring primary and responsible institutions;
- that folklore and tradition are clearly distinguished from documented history;
- that unsupported superlatives, vague claims, promotional language and invented detail are absent;
- that the fact has genuine local significance and is not generic filler;
- that priority and ordering reflect the actual importance of the place;
- that no meaningful defining story has been displaced by weaker material;
- that facts are concise, informative and understandable.

Record a source gap separately from a proven factual error. Never fabricate a source or treat an unverified claim as verified.

### E. Tourist, heritage, nature and local-discovery coverage

Check whether the mandatory two-pass research described in section 29 of the German Content Standard was actually completed.

Review the working notes or other available evidence for both:
1. broad discovery across official tourism, heritage, museum, municipal, regional, nature, specialist and local-history sources;
2. a deliberate category-by-category gap search using all relevant groups in section 29.2.

The category review must cover all relevant subjects, including:
- castles, palaces, fortifications and historic estates;
- religious heritage;
- monuments, fountains, memorials and public art;
- historic centres and architecture;
- museums, galleries and specialist collections;
- archaeology and prehistoric heritage;
- protected nature, geology and landscapes;
- mountains, viewpoints, trails and visitor routes;
- water features and water engineering;
- parks, gardens, botanical collections, zoos and aquariums;
- industrial, technical and transport heritage;
- memorial sites and historical events;
- visitor attractions and experiences;
- UNESCO and other exceptional heritage;
- local stories, legends and unusual documented curiosities;
- notable people, film, literature, music and cultural venues;
- traditions, crafts and gastronomic heritage.

For every checklist group, working notes must show one of:
- **found and verified**;
- **checked — no qualifying result**;
- **unresolved**.

A broad search alone does not prove that every category was checked. A valid “no qualifying result” is acceptable. An unresolved material category or candidate must be reported and prevents full research sign-off until resolved.

Check the exclusions in section 29.3: ordinary cemeteries, individual graves, routine contemporary businesses and ordinary event listings are not automatic tourist facts. Apply only the documented exceptions.

Do not demand a fixed number of attractions or facts. The audit tests research coverage and evidence, not quotas.

### F. Geographic metadata and map integrity

Check the three distinct geographic roles:
1. `representative_point` — one point identifying the postcode's representative place;
2. `access_point` — one practical, verified arrival/access point;
3. `facts[].location` — the independently verified principal location of each fact.

Verify that these roles are not substituted for one another.

For each fact:
- the `location` property exists explicitly;
- it is either a complete defensible location object or explicit `null`;
- every non-null location has a name, WGS84 latitude/longitude, permitted type and accuracy, and a direct source supporting the location;
- the selected point represents the fact's principal location and does not imply a false level of precision;
- historical/vanished sites and natural areas use defensible locations and honest accuracy;
- area-level representative-point fallbacks follow the exact rules in the Content Standard;
- map_category reflects the fact's primary subject and uses only allowed schema values;
- location sources support coordinates, while fact sources support factual claims.

Do not guess coordinates, invent addresses, create arbitrary midpoints or claim checks that were not performed. Do not add new map categories or location types.

### G. Six-language parity and translation quality

Verify all six required language versions: cs, de, en, es, fr and it.

Check:
- every language exists and has the required structure;
- the same fact IDs appear in all six languages;
- fact IDs are in exactly the same order;
- no fact is missing, merged, duplicated or silently added in one language;
- titles and texts preserve the same factual content, dates, names, qualifications and significance;
- no language introduces unsupported information or omits important context;
- each version reads naturally in its own language;
- proper names and official terms are handled consistently and accurately;
- translations are not merely literal or machine-like where this distorts meaning.

A matching ID list is necessary but not sufficient: compare the actual meaning of the texts.

### H. International readability and cultural context

This is a mandatory independent audit area. Verify the rule in section 30 of the German Content Standard and the corresponding addendum in the rework prompt.

For every fact and separately in all six languages, ask:
1. Would a reader who has never visited Germany and has no prior knowledge of German culture understand what the subject is?
2. Are unfamiliar local terms, institutions, traditions, memorial forms and administrative concepts explained at first meaningful use?
3. Are historical events and references given enough concise context to explain what happened and why they matter?
4. Are proper names preserved accurately while their nature or significance is explained where necessary?
5. Are abbreviations, dialect terms and culturally specific expressions that are essential to understanding explained?
6. Is the explanation natural, concise, factually correct and supported by sources?
7. Does each language version stand on its own, without relying on explanations found only in another language?

Example: a text about Stolpersteine must not merely label them as memorial stones or say that they commemorate Nazi victims. It should explain that they are small brass memorial plaques set into pavement, usually outside the last freely chosen homes of people persecuted or murdered by the Nazi regime, with each plaque commemorating an individual.

Apply the same principle to German realia such as Kirmes, Landkreis, Bundesland, local institutions, historical movements and memorial traditions. Do not require unnecessary explanations of internationally familiar concepts, and do not turn every fact into an encyclopaedia entry.

If a version is grammatically correct but culturally opaque to its intended reader, it fails this control. Identify the exact language and passage requiring improvement.

### I. Technical and schema validation

Validate each record against the current `data/germany/schema.json`.

Check:
- valid JSON and correct database field mapping;
- all required fields and correct data types;
- no unapproved or unknown fields;
- only allowed enum values for categories, map categories, location types, accuracy and statuses;
- unique and correctly sequenced fact IDs according to current rules;
- explicit location properties and valid non-null location objects;
- valid coordinate ranges and numeric types;
- correct source references and structure;
- all six language structures and matching IDs/order;
- verification flags reflect checks actually performed;
- no unintended changes to unrelated metadata.

Do not modify the schema as an audit workaround. A schema limitation or conflict must be reported separately for explicit review.

## 5. Findings, severity and audit status

Every finding must include:
- postcode;
- database row ID, if available;
- fact ID, if applicable;
- control area (A–I);
- severity;
- exact issue and why it fails the standard;
- evidence/source or missing evidence;
- recommended correction;
- whether the issue affects one fact, one record or the entire block.

Use these severities:
- **CRITICAL** — wrong postcode ownership, materially false or fabricated content, serious geographic misassignment, corrupted record, or structural defect that makes the record unsafe to use.
- **HIGH** — missing major local fact, significant duplication, major source failure, missing language/fact, materially misleading translation or major schema/geographic defect.
- **MEDIUM** — incomplete cultural context, weak or incomplete research coverage, translation nuance, insufficiently precise source or correctable metadata issue.
- **LOW** — minor style, wording, formatting or non-material consistency issue.

Use these audit statuses:
- **PASS** — all mandatory controls are verified and no unresolved material finding remains.
- **FIX REQUIRED** — one or more confirmed defects require correction.
- **REVIEW REQUIRED** — evidence is ambiguous or an authoritative clarification is needed.
- **BLOCKED** — the audit cannot be completed because required records, data or access are unavailable.

A block may not be labelled PASS while any CRITICAL or HIGH finding remains unresolved, while a required postcode is missing from the inventory, or while a material control remains unverified. Report medium/low findings even when the block otherwise passes.

## 6. Required block audit report

Produce a report with the following sections:

1. **Audit identity:** audit date, scope name, postcode range / Landkreis, database/source snapshot, standard and schema versions or commit references.
2. **Inventory reconciliation:** expected, retrieved, missing, duplicate, out-of-scope and blocked records.
3. **Block result:** PASS / FIX REQUIRED / REVIEW REQUIRED / BLOCKED, with counts by severity.
4. **Record-by-record matrix:** postcode, row ID, record status, controls passed/failed, finding count and final record result.
5. **Cross-postcode findings:** duplicate facts, ownership errors, overlaps and block-wide consistency problems.
6. **Tourist-discovery coverage:** checklist-group states and unresolved candidate discoveries.
7. **Language and international-readability results:** separate result for cs, de, en, es, fr and it, with affected fact IDs.
8. **Technical validation:** schema and JSON validation results.
9. **Correction queue:** ordered list of exact fixes, dependencies and responsible follow-up.
10. **Unresolved questions and evidence gaps.**
11. **Final sign-off:** what was actually checked, what was not checked, and why.

Never report “fully audited” if only a sample was reviewed. Never claim a source, URL, coordinate, language or schema check was performed unless it actually was.

## 7. Correction and re-audit procedure

The initial audit is read-only. After the report:
1. Present the findings and proposed corrections.
2. Wait for explicit authorization before modifying production records or repository files.
3. Correct only the authorized, identified defects; do not rewrite unrelated content.
4. Preserve IDs and unrelated metadata unless a documented correction requires otherwise.
5. Revalidate every changed record against the schema.
6. Recheck cross-postcode effects for any changed fact, location, assignment or duplicate.
7. Recheck all six languages and international readability whenever fact text or meaning changes.
8. Re-run the relevant block controls and update the report with resolved/unresolved status.
9. Do not mark the block PASS until the acceptance conditions in section 5 are met.

## 8. Backup and audit completion handoff

After the block has passed the audit and any authorized corrections have been verified, prepare the audit handoff for an immutable **AUDITED** snapshot according to the project's agreed backup procedure.

The AUDITED snapshot must remain distinct from the earlier **REWORK** snapshot. Never overwrite a prior snapshot. Include the audited data, audit report, correction/re-audit log, manifest, timestamp and checksums where the backup workflow supports them.

Do not claim that a backup exists or is verified until it has actually been created, uploaded and checked.

## 9. Operating principle

**Audit the complete block, not a sample. Verify the rework against the current standard. Record evidence and exact defects. Do not silently repair production data during the audit. Re-audit authorized corrections. Only then sign off and prepare the immutable AUDITED snapshot.**
