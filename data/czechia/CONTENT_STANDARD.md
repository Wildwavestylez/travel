# TRAVEL — CZECHIA CONTENT STANDARD v1.0

## 1. Single source of truth
For Czech postcode data, the authoritative production rules are:
1. `schema.json` — machine-readable structure.
2. `CONTENT_STANDARD.md` — semantic and editorial rules.

Do not add fields, categories or content patterns ad hoc.

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
