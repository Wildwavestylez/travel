# TRAVEL GERMANY — SHORT POSTCODE AUDIT PROMPT

**Version 2.0 — focused quality audit**

## 1. Purpose and strict separation from rework

Audit existing German records in `public.postal_codes` (`country_code = 'DE'`) and correct material defects. This is not a second rework and not a new round of comprehensive research.

**NON-NEGOTIABLE SEPARATION:** This prompt applies to the audit only. Its selection criteria, simplifications and limitations must never be transferred to `data/germany/prompt_rework.md`, the German Content Standard, the schema or the creation of new records. Those documents remain unchanged and fully binding for production. During rework, follow only the current rework documentation. Never use an audit limitation to justify omitting or simplifying production research, facts, translations or quality requirements.

Authority: the schema defines structure and permitted values; the German Content Standard and rework prompt define production and geographic rules; this prompt defines only the narrower audit scope.

## 2. Sources and scope

Before starting, load the current:
- `data/germany/schema.json`
- `data/germany/CONTENT_STANDARD.md`
- `data/germany/prompt_rework.md`
- relevant sequence/inventory files
- the register and canonical audit ledger for the exact scope in `data/germany/audits/`

Audit the entire requested block, not a sample. Reconcile the exact scope and inventory with the database and sequence. Work only on existing German rows. Do not create postcode rows, change the scope or sequence, or modify Czech or other-country data.

Resume from the canonical ledger. Treat completed checks as complete. Do not repeat them because a new chat, model or session started. Reopen a completed check only for concrete new evidence, a material data change or a change to a binding standard.

**Germany-specific source rule:** use appropriate German postal, official administrative, municipal, institutional and address sources. Never import Czech RÚIAN or Czech post-office rules.

## 3. Required audit controls

### A. Major tourist and historical coverage — once for the whole area

Review the audited area as a whole and check whether it is missing truly major:
- landmarks and structures of national or international importance, or defining landmarks of the region;
- major historical events and turning points;
- historically or culturally significant people, such as heads of state, rulers, major inventors, explorers, writers, artists and comparable figures.

Use the scale of major nationally or internationally recognised landmarks, major battles and turning points, and figures with lasting historical or cultural impact.

Do not build an exhaustive catalogue of listed buildings or minor local attractions. Heritage protection status alone does not make an item essential. Do not require minor sheds, small roadside shrines, ordinary trails or marginal anecdotes. Close this check once the area's major landmarks and stories are covered. **This selection threshold applies to the audit only, never to rework.**

### B. Postcode and administrative data

Verify:
- the postcode and its geographic assignment;
- `city`, `district`, `county` and `state` according to the definitions and source rules in the German Content Standard and rework prompt;
- a city district only where it is a genuine, relevant and documented district of a large city.

Do not turn every isolated hamlet or small settlement into an urban district. Apply the existing German rules; do not invent new definitions or import Czech rules.

### C. Cross-postcode duplicates and fact assignment

Make a quick cross-block check for the same attraction, event or subject being unnecessarily covered more than once in different postcodes. Focus on clear duplicates and near-identical stories, not every thematic similarity.

Respect the established primary-postcode rule for large or linear features and all previously locked assignments. Do not split one attraction or story merely because it crosses postcode boundaries. A tourist story is not subordinate to a postcode boundary.

### D. Map category

Check that each fact uses a permitted `map_category` from the current German schema and that it matches the actual type of place or subject. Do not confuse editorial `category` with `map_category`. Correct only genuinely wrong or invalid classifications.

### E. Translations

Check all seven languages: `cs, de, en, es, fr, it, nl`.
- Each language is in the correct field and is actually written in that language.
- Each translation belongs to the correct fact and preserves its meaning.
- No languages are swapped; no translation from another fact has been inserted.
- No required language or text is missing, empty, truncated or corrupted.
- Important facts, names, dates and qualifications are preserved.

Fix errors that change meaning or demonstrably damage a translation. Do not rewrite correct, understandable translations for stylistic alternatives, minor nuances or personal preference.


### E2. Czech master text length and translation alignment

For each fact, check **only the Czech-language master text** in `facts[].text` / the corresponding Czech fact text. The sole length threshold in this audit is **350 characters including spaces**.

- **Czech text with 350 or more characters:** leave it unchanged for length. Do not shorten it, do not enforce a maximum, and do not revise its translations merely because another language is shorter or longer.
- **Czech text under 350 characters:** this is the only length-related finding. Appropriately expand or improve the Czech text to at least 350 characters using specific, relevant and verifiable information. Preserve its original meaning and factual accuracy; do not add filler, repetition or unverified details.
- After correcting a Czech text, revise the corresponding translations in all required languages (`de, en, es, fr, it, nl`) so that they accurately reflect the corrected Czech master text. Keep each translation natural and idiomatic; do not translate mechanically or pad to a target character count.
- **Do not check, flag, expand or shorten foreign-language texts based on their character count.** A foreign-language text may be shorter than 350 characters; that alone is not a defect and must not trigger an edit.
- Do not impose any upper character limit on Czech or translated texts.
- If a Czech text under 350 characters cannot be responsibly expanded from verified information, mark that specific fact `REVIEW REQUIRED` and continue.
- Recount the Czech text after editing and confirm only that it has at least 350 characters. Verify the translations for meaning and completeness, not length.

This rule applies only to the audit. It does not change the requirements of the German rework prompt or Content Standard.
### F. JSON, database and technical consistency

Check:
- basic structural consistency of existing JSON data using already available checks and the current `schema.json`;
- required fields, data types, permitted values, IDs and fact order;
- correct fact-to-postcode assignment and no corrupted or unintended duplicate records;
- consistency of the database inventory, sequence and `groups` — each expected postcode appears exactly once;
- correct country, status and version under the current project lifecycle.

Record sequence or inventory discrepancies; do not change the sequence or audit scope without explicit authority.

**AJV and other separate validation runs are not required.** Do not run AJV, install packages for the audit, or request tokens, passwords, access keys or a new validation environment. If basic structural and database checks have already been completed, do not repeat them. Only read back a specific corrected item to verify that correction, then continue.

### G. Coordinates — no blanket rechecking

Do not re-verify, re-measure or move existing non-null coordinates or locations. The only exception: if a fact has `facts[].location = null`, try to assign a location strictly according to the hierarchy and rules in the current German `prompt_rework.md` and Content Standard. If no responsible location can be established, retain `null` and briefly record why. Never invent a location. Leave all other coordinate fields unchanged.

### H. Obvious factual defects

Do not repeat full factual research for every fact or recheck every historical date. Intervene only when there is a concrete reason: an obvious contradiction, demonstrably false or fabricated claim, advertising/company promotion, an irrelevant or invalid source, or content clearly assigned to the wrong place or subject. Do not endlessly debate small differences between ambiguous historical sources. Use proportionate precision and retain wording that is already reasonably supported.

## 4. Workflow, corrections and findings

Process the entire block in one continuous run. Batch mechanical checks and perform them locally where possible. For each genuine defect: **find → verify → safely correct → read back → validate the correction → record briefly**.

- Automatically fix only confirmed, safe defects in existing German records.
- Preserve IDs and unrelated content.
- Mark an unclear individual item `REVIEW REQUIRED` and continue; do not block the entire block because of one uncertain item.
- Do not change the schema, RLS, triggers, permissions, database architecture, application code, other-country data or audit scope.
- Perform database writes safely and sequentially. After a timeout, never blindly repeat a write; first check whether it already succeeded.
- Respect API `Retry-After` limits; do not bypass rate limits with parallel requests.

Use severities `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`. Block results: `PASS`, `FIX REQUIRED`, `REVIEW REQUIRED` or `BLOCKED`. PASS requires all relevant checks to be complete and no unresolved material defect. Do not create findings from stylistic preferences.

## 5. Ledger, resumption and report

Maintain one canonical ledger for the exact scope. Keep it concise: inventory, completed checks, genuine findings, corrections, open items and the exact next step. Do not create a duplicate ledger or checkpoint after every postcode or fact. Save a checkpoint only for a real interruption, imminent context limit or at the end of the run.

On resumption, read the ledger and continue only with open items. Never repeat completed work.

At the end, provide one concise report: scope and postcode counts, result, major missing topics, counts/types of genuine defects, corrections made, unresolved items and the result of already available basic technical checks (no separate AJV run).

## 6. Closing a successful audit

After completing the audit, report the results and hand the scope back to the user. **The user alone handles publication (V5 + published), Supabase-to-Dropbox backups and read-only Supabase locking.** Do not initiate or perform these operations, and do not request credentials for them. Do not claim that a scope is published, backed up or locked unless the user confirms it.

---

## Operating principle

**The audit checks for major missing tourist topics and genuine geographic, translation, category, duplication and technical defects. It is not a second rework. It does not pursue marginal historical disputes, rewrite correct text or recheck existing coordinates. The rework process remains unchanged and retains its full quality requirements.**

---

## Binding audit rule — legends, chronicles and proportionate historical dating

During the audit, distinguish between a documented historical event, a chronicle account, a legend/local tradition and a modern interpretation.

- **A legend is not automatically a factual defect.** If the text clearly says “according to local legend”, “the legend tells”, “according to the chronicle” or otherwise correctly attributes the story, do not flag it as false merely because the person or event is not independently established as historical fact.
- Check whether the cited source actually contains the story and whether its origin is attributed correctly. A chronicle proves that the chronicler recorded the account; it does not necessarily prove the historical truth of the event described.
- If a legend is presented as certain documented history without attribution, correct the wording so the story remains engaging but is properly attributed to a tradition, legend or named chronicle. Do not remove a valuable story merely because it is legendary.
- Do not require repeated “allegedly”, “perhaps” or lengthy explanations of historical uncertainty when a clear initial attribution is sufficient.
- **Assess dates proportionately.** A minor disagreement over an exact year is not a finding by itself if it does not change the identity, significance or historical context. Accept safe formulations such as “around…”, “in the first half of the century”, “at the turn of the century” or a broader supported period.
- Flag an exact year only when it is material and demonstrably wrong, or when a genuine contradiction changes the meaning or identity of the event/person. Otherwise, do not block the audit or rewrite correct text for cosmetic date precision.
- Never create false certainty: if a conflict is material, record it briefly and recommend safer wording. If sources simply preserve different traditions, retain their correct attribution and continue.

**Audit objective:** preserve interesting and culturally significant stories, verify their origin and attribution, and correct genuine factual defects — not penalize legends for being legends or delay work over immaterial date discrepancies.
