# TRAVEL — CZECHIA CONTENT STANDARD v1.0

## 1. Single source of truth
For Czech postcode data, the authoritative production rules are:
1. `schema.json` — machine-readable structure.
2. `CONTENT_STANDARD.md` — semantic and editorial rules.

Do not add fields, categories or content patterns ad hoc.

## Official postcode authority — mandatory rule

For TRAVEL Czechia, the **Czech Statistical Office (ČSÚ) is the single primary authority for selecting a postcode and assigning it to the geographic area represented in our dataset**. This is a binding project rule, not merely a source preference.

- Use the current ČSÚ postcode code list (ČSÚ číselník PSČ, code list 0028) as the controlling reference for whether a postcode is included and for its official ČSÚ designation.
- Use the relevant ČSÚ Register of Census Districts and Buildings (RSO) address-level data to verify/address the geographic linkage where available. Record which exact ČSÚ dataset and release/date were consulted.
- Do not replace a ČSÚ postcode with a different code just because a search engine, map, directory, business listing or postal-office page displays another code.
- A change in the post office that operationally handles or delivers mail does **not by itself** change the postcode assigned by ČSÚ to the area. Keep postal delivery arrangements separate from the project's postcode/geographic identity.
- If another source disagrees, retain the ČSÚ value as the project value and open a discrepancy check. Secondary sources are evidence for understanding the discrepancy; they are not an automatic override.
- An override is permitted only after a documented review establishes that the ČSÚ record itself is erroneous, obsolete for the defined project purpose, or that a newer authoritative ČSÚ release supersedes it. Record the evidence, decision, reviewer/date and affected records before changing anything.
- If ČSÚ datasets themselves appear to disagree, prefer the current official code list for code validity/designation and the most granular current RSO address-level data for address-to-area linkage. Do not treat statistical/dominant-code polygon products as exact delivery-boundary geometry.
- Store provenance: source name, dataset/code-list identifier, release or retrieval date, and any discrepancy/decision note. Never silently resolve a conflict.

**Example of the rule:** if ČSÚ assigns a locality to one postcode while a current delivery-office lookup displays a neighbouring office's postcode, TRAVEL keeps the ČSÚ assignment as its canonical postcode and records the operational discrepancy separately. The internet search result does not decide the record.

## 2. Core philosophy
TRAVEL is a curated knowledge database, not a quota-filling postcode list. Quality, local relevance and significance are more important than the number of facts.

A postcode may have 3 excellent facts or 15. Never invent filler to reach a target.

The goal is to answer: **What is this place, why does it matter, what is surprising about it, and what would a visitor or professional genuinely want to know?**

## 3. Mandatory Local Significance Check
Before writing facts, investigate the postcode and its meaningful surroundings for:
- major history and historical events;
- important people;
- castles, chateaux, churches, fortifications and other heritage;
- archaeology;
- protected nature, geology, rivers, lakes, forests, mountains and landscapes;
- industry, crafts, factories, brands and products;
- railway, road, aviation and other transport history;
- mining, energy and technical heritage;
- science, education and institutions;
- military history;
- cultural traditions and cultural memory;
- major tourist attractions;
- unusual, documented hidden gems.

Identify the **3–5 defining stories** of the locality before selecting the final facts.

## 4. Czech geographic correctness
The postcode is the unit of truth. Do not attach a famous place merely because it is somewhere in the same municipality, okres or kraj.

For every person, company, product, event or attraction, verify a concrete connection to the specific postcode area.

Use Czech administrative reality correctly:
- municipality / city;
- městská část or část obce where relevant;
- okres;
- kraj.

Do not invent a German-style administrative hierarchy where it does not exist.

## 5. Surroundings
Nearby places may be included only where there is a clear geographic, historical, natural or thematic connection. Explain that connection.

## 6. Facts and priorities
Every fact must be true, sourceable, specific, locally relevant and non-generic.

Priorities:
- **A** — exceptional national/international significance;
- **B** — exceptional hidden gem;
- **C** — strong regional significance;
- **D** — local significance.

Do not give A/B merely because something is old, pretty or small.

## 7. Hidden gems
Actively seek facts that create the reaction: **“I never needed to know this, but I am glad I know it now.”**

A hidden gem must be specific, documented and genuinely surprising or useful. “There is an old church” is not enough without an unusual significance.

## 8. History, industry and culture
Do not reduce Czech places to castles and churches. Investigate industrial heritage, famous Czech products, transport, railway history, mining, glass, textiles, brewing, engineering, science, military history and other defining local stories where relevant.

## 9. Sources
Prefer:
1. official and primary sources;
2. archives, museums and universities;
3. specialist institutions;
4. high-quality journalism;
5. reliable regional/local sources.

Never invent facts or URLs. One excellent primary source is better than several weak copies.

## 10. Six languages
Every record contains `cs`, `de`, `en`, `es`, `fr`, `it`.
All languages must contain exactly the same fact IDs. Translations must preserve meaning, names, dates and factual detail and must read naturally.

## 11. Fact structure
Facts use exactly:
```json
{"id":"fact_001","title":"...","text":"...","category":"...","priority":"A","sources":["..."]}
```
IDs are sequential and identical across all languages.

## 12. No artificial quotas
Do not force the same number of facts into every Czech postcode. Rich places deserve more; poorly documented places must not be padded.

## 13. Final audit
Before saving verify:
- postcode and municipality;
- okres and kraj;
- representative place;
- coordinates and access point;
- geographic relevance of every fact;
- defining stories;
- nature and surroundings where relevant;
- hidden gems where genuinely available;
- source URLs and traceability;
- schema validity;
- sequential fact IDs;
- all six languages and matching IDs;
- no duplicates or unsupported claims.

Only then is the record complete.
