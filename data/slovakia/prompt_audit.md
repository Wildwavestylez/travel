# TRAVEL SLOVAKIA — SHORT POSTCODE AUDIT PROMPT

**Version 1.0 — Czech-method adaptation, Slovak national implementation**

## Database Viewer index synchronization

After each audited record is saved and verified, update the matching entry in `data/slovakia/database_index.json` with the canonical record's `city` (or `null`) and final `status`. Fetch before writing, preserve all other entries and sequence order, then fetch again to verify. This file is a derived viewer/search cache only; individual record JSON files remain the sole source of truth.

## Europe Explorer V5 manifest synchronization

After the canonical Slovak record has passed the audit and its final JSON has been read back from GitHub, synchronize `data/slovakia/explorer_index.json`. This file is a derived public map/search index only; individual files in `data/slovakia/records/{postcode}.json` remain the sole source of truth.

- Include a record only when its canonical JSON has both `status = "published"` and `data_version = 5`. Never include placeholders, validated records, or published records of another data version.
- For an eligible record, add/update one `records[]` entry containing `postcode`, `city`, `district`, `county`, `state`, `representative_point`, `status`, and `data_version`.
- For every fact in that record whose `location` is a valid non-null WGS84 point, add one `map_points[]` entry containing `postcode`, `city`, `fact_id`, `title`, `category`, `map_category`, `lat`, and `lon`. Preserve the fact's canonical ID and coordinates exactly. Do not substitute `representative_point` or `access_point` for a missing fact location.
- If a record is reopened, becomes `validated`, loses V5, or otherwise ceases to meet both eligibility conditions, remove its record entry and all its map-point entries.
- Keep records sorted by postcode and map points sorted by postcode then canonical fact order. Set root `count` to `records.length`; keep root `country_code = "SK"`, `data_version = 5`, and `status = "published"`.
- Fetch the current manifest before editing; update only the affected postcode and its fact points, preserving all other entries. After writing, fetch the manifest again and verify count, order, uniqueness, all coordinates and the exact changed postcode. Also verify every included record against its canonical JSON.
- If a published V5 record has a fact with a missing or invalid location, do not create a pin for that fact. Do not fabricate coordinates. The record may still be listed if it passes the canonical schema and audit.
- This manifest is consumed by Europe Explorer; never store independent editorial content in it or use it to overwrite canonical record JSON.

## 1. Purpose and strict separation from rework

Audit existing Slovak geographic postcode records and correct genuine, material defects. This is a focused final audit, not a second rework and not a new round of comprehensive research.

**NON-NEGOTIABLE SEPARATION:** This prompt defines only the narrower final-audit scope. Its selection thresholds, shortcuts and limitations must never be transferred to `data/slovakia/prompt_rework.md`, `data/slovakia/CONTENT_STANDARD.md`, `data/slovakia/schema.json` or the creation of new records. The Slovak rework prompt and Content Standard remain fully binding for production. Never use an audit limitation to justify omitting research, facts, translations, sources or quality requirements during rework.

Authority:
- `schema.json` defines the record structure and permitted values.
- `COUNTRY_PROFILE.md` defines Slovak postal, geographic and administrative meaning.
- `CONTENT_STANDARD.md` and `prompt_rework.md` define full production and geographic rules.
- This prompt defines only the narrower final-audit scope.

The methodology is deliberately based on the proven Czech audit approach. Adapt only the national authorities, administrative meaning, storage, lifecycle and backup workflow that genuinely differ in Slovakia.

## 2. Sources, eligible records and exact scope

Before starting, load the current:
- `data/slovakia/schema.json`
- `data/slovakia/COUNTRY_PROFILE.md`
- `data/slovakia/CONTENT_STANDARD.md`
- `data/slovakia/prompt_rework.md`
- the exact Slovak JSON files in `data/slovakia/records/{postcode}.json` for the requested scope;
- the canonical audit ledger for that scope, if one already exists.

GitHub repository `Wildwavestylez/travel` is the sole production source of truth. Never use Supabase for Slovak records.

Audit the entire explicitly requested block, not a sample. Until the Slovak `sequence.json` is separately created and populated, use only the exact postcode range/list assigned by the user or an established explicit work instruction. Do not invent, infer or create a sequence during audit. Do not add or remove postcodes from the requested scope.

### Record eligibility

- `validated`: eligible for the final audit.
- `published`: already passed audit; skip unless the user explicitly reopens it or concrete new evidence requires a targeted re-audit.
- `placeholder`: intentionally empty; not eligible for content audit. Report it separately and do not pretend it passed.
- Never use `draft`.

A record is not eligible for publication merely because it contains facts. Confirm its persisted status and complete schema-valid content.

Resume from the canonical ledger. Treat completed checks as complete. Do not repeat them because a new chat, model or session started. Reopen a completed check only for concrete new evidence, a material data change or a change to a binding standard.

**Slovak authority rule:** Slovenská pošta is the primary postal authority; RAGEO/Ministry of Interior supports address-point evidence; ŠÚ SR and official territorial registers support administrative relationships; ÚGKK SR/ZBGIS supports geographic identification and coordinates. Never import Czech RÚIAN/ČSÚ procedures or German postal rules.

## 3. Required audit controls

### A. Major tourist and historical coverage — once for the whole audited area

Review the audited area as a whole and check whether it is missing truly major:
- landmarks and structures of national or international importance, or defining landmarks of the region;
- major historical events and turning points;
- historically or culturally significant people with lasting impact.

Use the scale of nationally or internationally recognised landmarks, major events and figures with lasting historical or cultural importance.

Do not build an exhaustive catalogue of every listed building or minor attraction. Heritage protection status alone does not make an item essential. Do not require minor sheds, ordinary roadside shrines, routine trails or marginal anecdotes. Close this check once the area's major landmarks and defining stories are covered.

**This selection threshold applies to the audit only, never to rework.** Do not use it to reduce the full two-pass research required by the Slovak Content Standard.

### B. Geographic PSČ and administrative data

Verify:
- the postcode is a genuine geographic Slovak PSČ tied to a real territory/address geography, not an organisation-only, PO-box-only or other non-geographic special-purpose code;
- the serving post office is correctly identified;
- top-level `city` is exactly the municipality in which the serving post office is physically located;
- `district` is a documented relevant part within that same municipality, or null;
- `county` and `state` correspond to the same post-office municipality;
- official Slovak names and diacritics are correct.

The postcode may serve one municipality, several municipalities or a municipal part. That distinction does not change the project's content-selection principle. The record's research scope follows the defensible geographic area; administrative fields follow the Slovak Country Profile's physical-serving-post-office rule.

Do not treat an organisation's correspondence address, registered office, invoice address or PO Box as proof of geographic postcode assignment. Use Slovenská pošta for postal claims, RAGEO for address geography, official territorial sources for administration and ZBGIS for geographic corroboration. If a material conflict remains unresolved, record it and keep the affected record `validated`.

### C. Cross-postcode duplicates and primary assignment

Make a cross-block check for the same attraction, event, person-story or continuous subject being unnecessarily represented in multiple postcode records.

- One real-world subject/story has one primary postcode assignment in TRAVEL.
- The postcode is an organisational layer, not a hard boundary for selecting or locating facts.
- A bridge, park, large complex, protected area, route or linear feature may cross postcode areas. Choose one defensible primary assignment using its actual representative location, main section, entrance, verified physical address or strongest local association.
- The important objective is that the fact has a correct, meaningful map location and appears once — not whether it is assigned to the left or right postcode.
- Do not duplicate a fact merely because the subject crosses a postcode boundary.
- Do not move an established assignment merely because another postcode also touches the feature. Reopen only with concrete evidence that the original assignment was wrong.
- Do not require postcode polygons or claim boundary precision that the sources do not provide.

Focus on clear duplicates and near-identical stories, not every thematic similarity. Two facts about one subject are acceptable only when they describe genuinely distinct, independently significant stories and the separation adds clear reader value.

### D. Map category

Check that every fact uses exactly one permitted `map_category` from the current Slovak schema and that it matches the fact's primary subject. Do not confuse editorial `category` with `map_category`. Correct only genuinely wrong or invalid classifications.

### E. Seven-language consistency

Check the Czech original content in the root `facts[]` array and all seven required language versions: `cs, de, en, es, fr, it, nl`. There is no Slovak-language content layer. The `translations.cs` version must match the Czech original; the six other versions are translated from Czech.

- Every language is in the correct field and is actually written in that language.
- Each translated fact belongs to the correct Czech-original fact and preserves its meaning, names, dates, qualifications and cultural context.
- Fact IDs and order match across all language arrays.
- No language is missing, empty, truncated, corrupted, swapped or copied from another fact. No Slovak (`sk`) language layer is added.
- The Czech original preserves Slovak proper names and diacritics; unfamiliar Slovak terms and historical context are explained where needed in Czech and independently in each non-Czech translation.
- Translations are natural and independently understandable, not mechanically literal.

Correct errors that change meaning or demonstrably damage a translation. Do not rewrite sound translations for stylistic alternatives or personal preference. Do not impose a character-count threshold that is not specified by the current Slovak Content Standard. Never pad text with filler.

### F. JSON, lifecycle and technical consistency

Check:
- the complete record validates against the current `data/slovakia/schema.json`;
- required fields, data types, permitted values, nullability and `additionalProperties` are respected;
- postcode filename and JSON `postcode` match exactly;
- every content record eligible for audit has `status = 'validated'` before audit;
- `status` is changed to `published` only after that record has passed all applicable audit checks;
- `data_version` is preserved exactly and is not changed during audit;
- fact IDs are unique and stable; source IDs resolve to top-level sources;
- facts, translations, sources and locations remain aligned;
- no accidental duplicate files, duplicate postcode records or corrupted JSON exist.

A `placeholder` must contain only `postcode`, `status` and optional `data_version`. Do not turn a placeholder into a content record during audit; that requires a separate rework.

Do not create or change `sequence.json`, schema, application code, RLS, permissions or shared architecture during audit. Do not run AJV, install packages or request credentials merely for the audit. Use existing/local validation capabilities. If a basic structural check has already been completed and no relevant data changed, do not repeat it.

### G. Coordinates — no blanket rechecking

Do not re-verify, re-measure or move existing non-null coordinates or fact locations without a concrete defect. The main exception is `facts[].location = null`: use the location hierarchy in the current Slovak Content Standard and rework prompt to find a responsible map point.

- Prefer the actual physical location of the subject.
- For an extended site, use a meaningful representative point within the site.
- For an uncertain historical location, use a clearly identified approximate or public orientation point when justified.
- Do not use the postcode representative point or access point automatically as a fact location.
- Keep `null` only when no responsible specific, approximate, representative or orientation point can be established.

Never invent coordinates. A fallback pin must not be described as the exact historic location. If an existing point is clearly outside the subject area, attached to the wrong object or otherwise demonstrably misleading, verify and correct that specific defect.

### H. Obvious factual defects and commercial neutrality

Do not repeat full factual research for every fact or recheck every historical date. Intervene only for a concrete reason:
- an obvious contradiction or demonstrably false/fabricated claim;
- an irrelevant, broken or materially insufficient source;
- advertising, company promotion or content whose primary purpose is commercial promotion;
- a fact assigned to the wrong place or subject;
- a material error in a person's identity, event, date or historical context;
- a clearly misleading map location or category.

Do not endlessly debate small differences between ambiguous historical sources. Use proportionate precision and retain wording that is already reasonably supported.

## 4. Workflow, corrections and publication status

Process the entire requested block in one continuous run. Batch mechanical checks and perform them locally where possible.

For each genuine defect: **find → verify → safely correct → read back from GitHub → validate the correction → record briefly**.

- Automatically fix only confirmed, safe defects.
- Preserve fact IDs, source IDs, unrelated content and established primary-postcode assignments.
- Do not perform a second full rework or restart broad research for every fact.
- Mark an unclear individual item `REVIEW REQUIRED` and continue with independent records.
- Keep unresolved material issues in `validated`; do not publish an affected record.
- After all applicable checks for an individual record pass, set its `status` to `published` and commit the complete JSON to its existing GitHub path.
- If a record cannot pass because of an unresolved material defect, leave its status as `validated` and report the exact blocker.
- A record may become `published` only after both the record-level checks and the relevant cross-postcode checks are complete.
- Do not change `data_version`, even when changing `status`.
- Do not set or use `draft`.
- Do not lock GitHub files or make them read-only. Normal GitHub editability remains unchanged.
- Perform GitHub writes sequentially. Before an update, fetch the current file and blob SHA. After the update, fetch the exact path again and verify the JSON, status, unchanged `data_version` and new blob SHA.
- After a timeout or ambiguous write result, check whether the change persisted before retrying. Never repeat a write blindly.
- Respect API rate limits and `Retry-After`; do not bypass them with parallel requests.

Use severities `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`. Block results: `PASS`, `FIX REQUIRED`, `REVIEW REQUIRED` or `BLOCKED`. PASS requires all relevant checks to be complete and no unresolved material defect. Do not create findings from stylistic preferences.

## 5. Ledger, resumption and report

Maintain one canonical ledger for the exact audit scope, preferably under `data/slovakia/audits/`. Do not create duplicate ledgers. Keep it concise:
- exact postcode scope and inventory;
- each record's initial and final status;
- completed checks;
- genuine findings and corrections;
- unresolved items and reasons;
- each record's `data_version` before/after (it must remain unchanged);
- exact next action, if work remains.

Do not save a checkpoint after every postcode or fact. Save it for a real interruption, imminent context limit or at the end of the run.

On resumption, read the ledger and continue only with open items. Never repeat completed work without concrete new evidence or a changed standard.

At the end, provide one concise report:
- exact scope and counts of `placeholder`, `validated` and `published` records;
- audit result;
- major missing topics checked;
- counts/types of genuine defects and corrections;
- unresolved items and which records remain `validated`;
- which records passed and were changed to `published`;
- confirmation that every `data_version` remained unchanged;
- GitHub read-back verification result.

## 6. Version changes and final Dropbox backup

### 6.1 Data version

**The audit never changes `data_version`.**

After the complete requested audit scope has passed, the assistant may change `data_version` only when the user explicitly instructs the target version. Do not interpret a request to continue, audit, fix, validate or publish as permission to change the version.

When the user gives an explicit version instruction:
1. confirm that the complete requested scope has passed audit;
2. update only the exact audited files and only the `data_version` value requested;
3. preserve all content, IDs and statuses;
4. fetch every changed file back from GitHub and verify the exact scope, version and blob SHA;
5. report the version change separately from the audit result.

If no version instruction is given, leave every `data_version` unchanged.

### 6.2 Dropbox backup — always the final operation

Dropbox is the Slovak backup archive; GitHub remains the only production source of truth.

- Do not back up before the complete audit is finished.
- After reporting the audit, wait for the user's explicit instruction to perform the final backup. If the user also requests a data-version change, complete that change first and read it back from GitHub.
- Do not back up before any explicitly requested data-version changes have been completed and read back from GitHub.
- The backup is the final operation of the workflow. Do not perform further record edits after the backup; if later changes are required, create a new timestamped backup after they are complete.
- Use the established TRAVEL backup location in the user's Dropbox. If the correct project folder cannot be identified, ask the user rather than guessing a path.
- Create a new timestamped folder for the exact audited scope. Never overwrite an earlier backup.
- Include the exact final standalone JSON files and a `manifest.json` containing the scope, postcode count, filenames, each file's SHA-256 hash, GitHub commit/blob identifiers, final status, `data_version` and backup timestamp.
- Do not create SQL dumps or Supabase restore files for Slovakia.
- Read the uploaded files back from Dropbox and compare file count, filenames and hashes with the final GitHub files. A successful upload response alone is not proof of a completed backup.
- Report the exact Dropbox folder and verification result. If any file or hash is missing or mismatched, report the backup as incomplete and do not claim success.

Do not lock GitHub files, create read-only rules or change application permissions. No locking step is part of the Slovak workflow.

---

## Operating principle

**The audit checks for major missing topics and genuine geographic, administrative, translation, category, duplication, source and technical defects. It is not a second rework. It does not pursue marginal historical disputes, rewrite correct text or recheck every existing coordinate. A record is eligible for map display only after it has passed audit and is saved as `published`; the map must filter strictly on that status. The data version changes only on the user's explicit instruction after the complete audit. Dropbox backup comes last.**

---

## Binding audit rule — legends, chronicles and proportionate historical dating

During the audit, distinguish between a documented historical event, a chronicle account, a legend/local tradition and a modern interpretation.

- **A legend is not automatically a factual defect.** If the text clearly says “according to local legend”, “the legend tells”, “according to the chronicle” or otherwise correctly attributes the story, do not flag it as false merely because the person or event is not independently established as historical.
- Check whether the cited source actually contains the story and whether its origin is attributed correctly. A chronicle proves that the chronicler recorded the account; it does not necessarily prove the historical truth of the event described.
- If a legend is presented as certain documented history without attribution, correct the wording so the story remains engaging but is properly attributed to a tradition, legend or named chronicle. Do not remove a valuable story merely because it is legendary.
- Do not require repeated “allegedly”, “perhaps” or lengthy explanations of historical uncertainty when a clear initial attribution is sufficient.
- **Assess dates proportionately.** A minor disagreement over an exact year is not a finding by itself if it does not change the identity, significance or historical context. Accept safe formulations such as “around…”, “in the first half of the century”, “at the turn of the century” or a broader supported period.
- Flag an exact year only when it is material and demonstrably wrong, or when a genuine contradiction changes the meaning or identity of the event/person. Otherwise, do not block the audit or rewrite correct text for cosmetic date precision.
- Never create false certainty: if a conflict is material, record it briefly and recommend safer wording. If sources simply preserve different traditions, retain their correct attribution and continue.

**Audit objective:** preserve interesting and culturally significant stories, verify their origin and attribution, and correct genuine factual defects — not penalize legends for being legends or delay work over immaterial date discrepancies.
