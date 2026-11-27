# TRAVEL — QUERY SIZE & EXECUTION LIMITS

**Mandatory operational rule for every Czechia database task, rework, translation audit and validation.** These limits exist to prevent long-running calls, tool timeouts, oversized outputs and accidental data damage. They do not reduce research or editorial quality.

## 1. Hard limits per tool call

- **One postcode per database operation.** Do not combine a long range of postcodes into one SQL statement.
- **One logical purpose per SQL call.** Separate reading, writing and verification; do not build one giant SQL script that does all three.
- **SQL request size target: at most 8 KB.** If a query would exceed 8 KB, split it into smaller calls. Never send a whole prompt, large JSON document or many records as SQL literals.
- **Returned data target: at most 20 KB per call.** Select only the fields and JSON paths required for the current step. Avoid returning the full `content` JSON when only counts or selected fact fields are needed.
- **Maximum one target row in a normal read/write call.** Use exact filters `country_code = 'CZ'` and `postal_code = '<exact five digits>'`. Never use broad scans or unbounded queries.
- **Keep tool output compact.** Prefer counts, boolean checks, short issue lists and only the changed fact/language snippets. Do not print all seven language payloads just to report that validation passed.
- **No huge multi-language UPDATE.** Update only the exact fact and language keys that need correction. If the payload is large, split by fact or language; write sequentially.
- **No parallel database writes.** Writes and their read-back verification are sequential.

## 2. Safe database workflow

For each postcode:
1. Read the exact Czech row once, selecting only the fields needed for the current audit.
2. Inspect and compare its data locally; reuse the loaded result for all independent checks.
3. Prepare the smallest possible targeted change.
4. Execute one bounded write (or a small sequential series if the payload exceeds the limit).
5. Read back only the exact changed row/JSON paths and verify the result.
6. Run a compact validation summary: master fact count; fact counts for cs/de/en/es/fr/it/nl; empty title/text count; duplicate ID count; CS/master mismatch count; JSON type/shape errors.
7. Record the result in the progress log and move to the next postcode.

Never repeat a write blindly after a timeout or tool error. First perform one small exact read to determine whether the previous write succeeded. Do not retry the same oversized query; split or redesign it.

## 3. Translation-audit specifics

- Work on **one postcode at a time** and finish its complete seven-language check before moving on.
- Load translation payloads only for that postcode. If the full row is too large, read the master facts and each language in separate bounded calls, or select only the relevant JSON paths.
- Perform semantic comparison locally. Do not ask SQL to generate enormous nested JSON reports or repeat all source and translation text.
- If a translation is correct, do not rewrite it. If one fact is wrong, change only that fact in the affected language(s).
- For a successful audit, return a compact result, e.g. `postcode | facts | languages checked | fixes | validation PASS`.
- Do not reopen completed postcodes unless a concrete defect or new evidence is found.

## 4. External research and tool calls

- Batch only genuinely related short search queries. Keep each search request focused and avoid broad query strings containing the entire task prompt.
- Reuse verified sources and previously loaded shared reference files within the same work session.
- Do not launch large parallel batches. Keep concurrency low and perform database writes sequentially.
- If a call is slow, returns an oversized response, times out or errors, reduce the scope before trying again. Never respond by increasing the query size or repeating the same call unchanged.

## 5. Progress and continuity

After each completed postcode, checkpoint only the essentials: postcode, fact count, languages checked, changes made, validation result, unresolved blockers and next postcode. Update the progress file in small, sequential commits. Avoid rewriting unrelated documentation or re-reading the entire progress history on every step.

**Operating rule: one postcode → one bounded read → local review → smallest targeted write → one bounded read-back → compact validation → checkpoint → next postcode.**

If a task cannot be safely completed within these limits, split it into smaller operations. Never sacrifice correctness, but never use an oversized call when a bounded sequence will do.
