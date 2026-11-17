# TRAVEL GERMANY — BLOCK AUDIT PROMPT

## Version and authority

**BLOCK AUDIT PROMPT V1.2 — SIMPLIFIED CONTINUOUS BLOCK AUDIT**

Use this prompt with the current:
- `data/germany/schema.json`
- `data/germany/CONTENT_STANDARD.md`
- `data/germany/prompt_rework.md`
- canonical audit ledgers and register in `data/germany/audits/`

The schema defines structure and permitted values. The German Content Standard governs factual, editorial, geographic, research, translation and quality requirements. The rework prompt governs production and preservation rules. This prompt governs the audit workflow.

**Germany-specific source rule:** Germany does not use the Czech RÚIAN reference system. Never request, search for, cite or require RÚIAN data. Verify German postcode and address relationships using appropriate German postal, official administrative, municipal, institutional and address sources, as required by the German Content Standard. Do not import Czech-only procedures or assumptions into German records.

## 1. Goal and scope

Audit the complete user-selected German postcode block, Landkreis or other clearly defined set—not a sample. Work only with existing German records in `public.postal_codes` where `country_code = 'DE'`.

- Establish the exact scope and inventory before reviewing content.
- Do not create missing postcode rows or duplicate records.
- Do not change schema, database architecture, RLS, triggers, permissions, application code, unrelated countries or out-of-scope records.
- Do not inspect postcode polygons or perform polygon-based boundary checks.
- Preserve existing IDs, fact IDs, history and unrelated metadata.
- Follow all protected-content and exception rules in the current German Content Standard and rework prompt.

## 2. Load sources and resume the canonical ledger

At the start, read the current complete schema, Content Standard and rework prompt. Then search `data/germany/audits/README.md` and `data/germany/audits/` for the exact scope and any overlapping ledger.

1. Reuse the existing canonical ledger whenever one exists. Do not create parallel ledgers for the same or overlapping scope.
2. Confirm its scope, inventory, source versions, completed controls, locked decisions, open findings and exact next step.
3. If no usable ledger exists, create one only after checking the register and overlapping scopes.
4. Reconcile the selected scope against existing German database rows. Record expected, retrieved, missing, duplicate, out-of-scope and blocked rows.
5. If resuming, continue only with unfinished work. Do not restart the audit or repeat completed checks because the chat window, model or session changed.

## 3. Continuous audit workflow

Run the audit as one continuous process across the entire selected block. Batch comparable database reads, source checks, language comparisons and safe corrections. Do not stop after each postcode, fact, language or control area to ask the user whether to continue.

For each item: **CHECK → VERIFY → FIX confirmed safe defects → VALIDATE → RECORD → CONTINUE.**

- Evidence must support every material conclusion. Distinguish confirmed errors from uncertainty and missing evidence.
- Automatically correct confirmed, unambiguous and safe defects within the authorized scope. Preserve IDs and unrelated content; validate every write by reading the saved record back.
- Do not invent facts, sources, coordinates, addresses or certainty.
- If an issue is genuinely ambiguous or a correction could change meaning, ownership, protected content or another record, leave that individual item unchanged, record the exact blocker and continue with other work.
- Do not make speculative edits or expand the scope.
- If rate-limited or interrupted, use sensible batching/backoff and preserve the exact continuation point.

## 4. Audit controls A–I

Complete all nine controls for every in-scope record and perform cross-record checks across the whole block. Batch the work; do not turn each control into a separate audit session.

### A. Inventory and completeness
Verify each expected record exists exactly once, has the correct database ID/postcode, belongs to Germany and the requested scope, and has a status consistent with its actual content and workflow. Identify missing, duplicate, placeholder, unexpected and out-of-scope rows. Do not infer national coverage from a partial block.

### B. Postcode, locality and administrative data
Verify the postcode is in use and suitable for the record's purpose. Distinguish ordinary delivery postcodes from special-purpose, PO-box and large-recipient codes. Check the locality/municipality, district, Landkreis and Bundesland using appropriate German sources, including Deutsche Post and responsible official administrative or municipal sources. Confirm that `city`, `district`, `county`, `state` and `representative_place` reflect the definitions in the German schema and Content Standard. Do not require a currently open standalone post-office building. A retail parcel outlet or branch relocation is not by itself evidence that a postcode is invalid. Do not import Czech post-office or RÚIAN rules.

### C. Geographic ownership, duplication and block consistency
Review facts across the entire block, not only one record at a time. Verify a concrete connection between each fact and its assigned postcode using addresses, institutional sources, official maps or other reliable location-specific evidence. Identify misassigned facts, duplicates, near-duplicates, artificially split stories and facts supported only by a broad city or regional association. A large or linear feature spanning multiple postcodes may have one defensible primary assignment; do not require its entire footprint to fit within one postcode. Respect locked prior assignments unless concrete new evidence proves them wrong. Do not duplicate the same attraction or continuous story across records.

### D. Factual, editorial and source quality
Check names, dates, chronology, descriptions, factual claims, local significance, priority and ordering. Sources must support the actual claims and be relevant, accessible and traceable; prefer primary sources and responsible institutions. Distinguish documented history from legend or tradition. Remove advertising, company promotion, unsupported superlatives, generic filler and invented detail. Record source gaps separately from proven factual errors. Do not fill categories or meet arbitrary fact quotas.

### E. Tourist, heritage, nature and local-discovery research
Verify the mandatory two-pass research and thematic coverage required by section 29 of the German Content Standard, including its relevant categories and source strategy. Review evidence for broad discovery and deliberate category-by-category gap checking. Relevant groups include heritage and architecture, religious sites, monuments and memorials, museums and collections, archaeology, nature and landscapes, viewpoints and routes, water features, parks and gardens, industrial/technical/transport heritage, historical events, visitor attractions, exceptional heritage, local stories, notable people and cultural traditions.

For each relevant group record one state: **found and verified**, **checked — no qualifying result**, or **unresolved**. A valid search with no qualifying result is acceptable. Do not turn this into endless discovery: no fixed fact quota, no exhaustive hunting for every minor cross, chapel, ordinary building or listed object. Stop when the mandatory research process has been evidenced and significant local stories and material gaps have been addressed. Do not reopen completed research solely to search for more marginal candidates.

Apply exclusions in section 29.3 of the German Content Standard. A material unresolved category or candidate must be recorded, but it does not justify restarting unrelated completed checks.

### F. Geographic metadata and map integrity
Keep the three coordinate roles distinct: `representative_point`, `access_point` and each `facts[].location`. Verify the roles, coordinate values, names, location types, accuracy and direct location sources. A fact location must be its principal verified location or explicit `null` where permitted; do not copy representative/access points as if they were exact fact locations. Apply the documented fallback rules for postcode-area facts and people-related facts. Check that `map_category` uses exactly one of the 17 values permitted by the current German schema and follows section 11A of the Content Standard. Do not confuse editorial `category` with `map_category`. Do not invent coordinates, addresses, types or categories.

### G. Seven-language parity and translation quality
Review all seven languages together in one comparative pass: **cs, de, en, es, fr, it, nl**. Verify every language exists and has the required structure; fact IDs and order match the source language; no facts are missing, merged, duplicated or silently added; and titles/texts preserve the same facts, dates, names, qualifications and significance. Check natural grammar, terminology and readability in each language. Do not audit one language at a time or repeat the whole language review after every correction. Batch safe translation fixes and validate all seven versions together after changes.

### H. International readability and cultural context
Apply section 30 of the German Content Standard to every fact in all seven languages. A reader unfamiliar with Germany should understand local institutions, historical references, traditions, memorial forms and essential cultural terms. Explain unfamiliar concepts concisely at first meaningful use, preserve proper names accurately, and make each language version independently understandable. Do not over-explain internationally familiar concepts or turn facts into encyclopaedia entries.

### I. Technical and schema validation
Validate each final record against the current `data/germany/schema.json`. Check valid JSON/database mapping, required fields and types, no unknown fields, permitted enums, unique and correctly ordered fact IDs, translation structure/parity, coordinate ranges, location objects, source URL syntax and all other schema constraints. Validate again after every correction. Do not change the schema to make a record pass.

## 5. Findings and completion states

Each material finding must identify postcode, row ID, fact ID if applicable, control area, severity, exact issue, evidence, required correction and whether it affects one fact, one record or the block.

Severity:
- **CRITICAL** — materially false/fabricated content, wrong postcode ownership, serious geographic misassignment, corrupted record or unsafe structural defect.
- **HIGH** — missing major local fact, significant duplication, major source failure, missing language/fact, materially misleading translation or major schema/geographic defect.
- **MEDIUM** — incomplete cultural context, material research gap, translation nuance or correctable metadata/source issue.
- **LOW** — minor wording, style or non-material consistency issue.

Record-level audit states:
- `NOT_STARTED` — no audit performed.
- `IN_PROGRESS` — audit has unfinished controls.
- `OPEN_FINDINGS` — checks are complete but one or more findings remain unresolved.
- `DONE` — all controls A–I are complete, corrections (if any) are verified, and no unresolved material finding remains.
- `DONE_WITH_NOTES` — all mandatory controls are complete and no unresolved material finding remains; only documented non-blocking notes remain.
- `BLOCKED` — a specific required check cannot be completed due to missing data, access or authoritative evidence.

A block is fully passed only when every in-scope record is `DONE` or `DONE_WITH_NOTES`, the inventory is reconciled, cross-block checks are complete, and no unresolved CRITICAL or HIGH finding remains. Never claim a check, source review, translation comparison, validation or write was completed unless it actually was.

## 6. Canonical ledger and anti-repeat rules

The ledger is the persistent source of audit progress across sessions. Maintain one canonical ledger per defined scope.

It must record:
- scope ID, country, exact postcode range/selection and ledger path;
- prompt, schema, Content Standard and rework-prompt versions/commits;
- reconciled record inventory and each record's state;
- controls A–I completed per record or group;
- research-category states required by section 29;
- seven-language comparison result;
- findings, evidence, decisions and correction status;
- locked decisions and completed checks that must not be repeated;
- exact open items and the next action;
- concise dated change history.

**Anti-repeat rules:**
1. Once a record is `DONE` or `DONE_WITH_NOTES`, lock it. Skip it in future runs.
2. Reopen a completed record only for concrete new evidence, a material change to that record, or a relevant change to the schema/Content Standard/rework rules. Preserve the previous result and append a dated addendum; never erase history.
3. If only one finding remains open, work on that finding and its dependent validation—not the whole postcode or block.
4. Never repeat completed controls merely because a new chat, model or session has started.
5. Do not restart tourist discovery after its mandatory coverage has been completed. New candidates are addenda, not a reason to repeat the whole search.
6. Update the ledger in batches after meaningful progress. Save a checkpoint only when context/token capacity is running low, a real technical interruption occurs, or the whole run finishes. Do not checkpoint after every postcode, fact, language or control.
7. On resumption, read the ledger status and continue from the first genuinely open item. Do not re-audit closed records.
8. Before updating a ledger, fetch its current version and preserve its existing history. Never overwrite it with a stale copy or create a parallel ledger for the same scope.

## 7. Corrections and final validation

Fix confirmed, unambiguous and safe defects directly within the selected scope. Preserve record/fact IDs and all unrelated fields. After each batch:
- read back the persisted records and confirm the write;
- validate affected records against the schema;
- recheck dependent geographic ownership or duplicate decisions;
- when fact meaning/text changes, recheck all seven languages and international readability together;
- update the ledger with the exact fix, evidence and validation result.

Do not downgrade completed `validated` or `published` records or alter the German lifecycle defined in the current rework prompt. If a required condition genuinely blocks completion, retain the existing non-complete state and document the precise blocker. Never use `draft` as a parking state for completed work.

## 8. Final report and handoff

At the end of the run, provide one concise report containing:
1. exact scope and inventory counts;
2. counts of `DONE`, `DONE_WITH_NOTES`, `OPEN_FINDINGS`, `IN_PROGRESS` and `BLOCKED`;
3. material findings by severity;
4. corrections actually saved and validated;
5. remaining open items and exact next step;
6. ledger path and latest commit/reference.

Prepare an immutable AUDITED snapshot only if the repository's agreed backup workflow is available and the snapshot is actually created and verified. Never claim a backup exists otherwise.

## 9. Operating principle

**Audit each German postcode once, completely and with evidence. Correct safe confirmed defects, validate the saved result, lock completed records and move forward. Resume only open work. Germany uses German postal and administrative evidence—not Czech RÚIAN. The audit is a finite quality-control process, not an endless search for marginal attractions.**
---

## 10. MANDATORY AUDIT CLOSURE — V5, PUBLISHED, BACKUP, LOCK

This procedure is mandatory for every successfully completed audited scope. It is not optional and must not be skipped or replaced by a note in the audit ledger.

### Mandatory step order

1. **Successful audit completion.** The exact scope must be fully audited. All mandatory controls must be complete, the inventory reconciled, and no unresolved material finding may prevent PASS.
2. **Unconditionally set the entire audited scope to V5 + published.** Every existing record in scope must have `data_version = 5` and `status = 'published'`. This is mandatory, not optional: publication is required for completed postcodes to appear on the map. Apply the change in Supabase, read the records back and verify 100% of the scope. Do not leave any part of a successfully audited scope on an older version or another status.
3. **Back up directly from Supabase to Dropbox through the connected API.** Use the existing direct Supabase → Dropbox API integration. Do not bypass it with a manual local-file export while the direct path is available. The backup must contain complete, restorable data for every row in the exact audited scope, including the full JSON content, all facts, sources, translations, metadata and identifiers required for restoration. Back up only after V5 + published has been confirmed.
4. **Verify the Dropbox backup.** An API success response alone is insufficient. Verify that the backup artifact actually exists in Dropbox and can be read; check its scope, record count and consistency with the data in Supabase. The backup must be usable to restore the data to Supabase. If verification fails or the backup is unavailable, stop and DO NOT LOCK the scope.
5. **Lock exactly the audited scope in Supabase.** Only after a successful, verified backup, apply a database read-only lock to the exact audited postcode list/range. The lock must block `INSERT`, `UPDATE` and `DELETE` for protected records; `SELECT`/reads must remain allowed. Use the existing verified database-trigger mechanism or a safe extension of it. The lock condition must be restricted by `country_code` and the exact completed range/list. Never lock an entire country, another country, an adjacent range or any unaudited records.
6. **Verify the lock and close the audit.** Verify that protected records cannot be updated or deleted, reads still work, and a representative record outside the scope remains unlocked. Preserve all previously locked scopes unchanged. Record counts, scope, V5/published confirmation, Dropbox backup identifier and location, verification result, lock mechanism/scope and completion date in the audit ledger.

### Non-negotiable conditions

- **Never lock any record unless it has BOTH `data_version = 5` AND `status = 'published'`.** Verify both conditions for every row before locking. If even one record fails, do not activate the lock for that record; first correct its state and re-verify the entire scope.
- A successful audit automatically leads to V5 + `published` for the entire audited scope. Do not wait for further user approval to publish.
- The order is fixed: **AUDIT PASS → V5 + PUBLISHED → SUPABASE→DROPBOX BACKUP → BACKUP VERIFICATION → READ-ONLY LOCK → AUDIT CLOSED.**
- If publication, backup, backup verification or locking fails, report it and do not mark the process closed. Save the exact state and safely resume only from the unfinished step; do not repeat the completed audit.
- Never delete or release previously locked scopes. Unlocking or changing an existing lock's scope requires a separate, explicitly approved database change.
- The lock is database-level write protection, not a read ban. Data must remain available to the map and application.
- Do not introduce AJV or other unnecessary repeated validation workflows. Technical checks against the current schema are part of the audit; do not add a separate automated validation system.

### Closure state

The audited scope is **definitively closed** only after every row is V5 + published, the backup is verified in Dropbox, and the exact scope is locked in Supabase. `PASS` alone, publication alone or merely creating a backup file is not sufficient.