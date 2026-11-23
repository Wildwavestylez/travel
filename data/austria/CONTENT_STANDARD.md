# TRAVEL — AUSTRIA CONTENT STANDARD (working baseline)

## 1. Purpose and authority

This is the initial working content standard for Austrian PLZ records. It is not yet a final approved production specification.

The final binding contract will consist of:
1. `schema.json` — record structure, required fields, data types and controlled values.
2. `COUNTRY_PROFILE.md` — Austrian postal, geographic and administrative meanings.
3. `CONTENT_STANDARD.md` — research, evidence, editorial, source and translation rules.
4. `prompt_rework.md` and `prompt_audit.md` — operational instructions implementing the approved standard.

If these documents conflict, stop and resolve the documentation conflict. Do not silently add fields, enums, languages, lifecycle states or alternative record structures.

## 2. Core editorial philosophy

TRAVEL / EuropeExplorer is a curated geographic discovery project, not a postal directory and not a quota-driven attraction catalogue.

The objective is to discover and explain genuinely distinctive places, landscapes, heritage, history, culture, architecture, industry, science, people and local stories connected to the selected PLZ area.

Every fact must pass four tests:
- **Truth:** material claims are supported by credible sources.
- **Geographic relevance:** the subject has a defensible physical connection to the selected PLZ content area.
- **Significance:** it adds meaningful local, regional, national, cultural, historical, natural, scientific or visitor value.
- **Clarity:** a reader unfamiliar with Austria can understand what the subject is and why it matters.

Quality takes precedence over a target number of facts. Do not invent facts, inflate ordinary objects, repeat the same story under multiple PLZ records or add filler.

## 3. Production unit, geographic-only eligibility and scope

One complete four-digit Austrian PLZ is one project content/indexing unit.

- Preserve the full code as a four-character string.
- Never split one four-digit PLZ into separate records for streets, buildings, house numbers or tiny address fragments.
- **Include only geographic PLZ with a demonstrable geographic delivery territory.** The code must identify an area that can be researched as a place, not merely a postal recipient or operational destination.
- Exclude PO-box/Postfach-only codes, company- or institution-specific codes without their own territory, post-office/branch codes, sorting or distribution-centre codes, and all other purely operational/non-geographic codes.
- Do not classify a code by its number pattern, by a search snippet alone, or by the fact that a business uses it.
- Establish the full defensible geographic scope associated with each included code.
- Where one PLZ relates to several settlements or municipalities, research the relevant area as one content unit and document the supported relationships accurately.
- Do not automatically expand the scope to an entire municipality, district or tourist region without evidence.
- Do not narrow the scope to a post office, postal counter, one street or the best-known place name.
- Wider surroundings may provide context, but a fact must have a defensible primary physical location and genuine relationship to the assigned PLZ area.
- A four-digit PLZ is not automatically a polygon. If sources prove only address points, localities or municipality associations, state only those relationships; never invent exact boundaries.

The project uses the four-digit PLZ as a practical content scale. Detailed address-level postal subdivisions are not separate production records.

## 4. Mandatory discovery before writing

Research must precede writing. Establish the PLZ's geographic context first, then discover relevant subjects across the full area. Search using:
- the exact PLZ, with and without formatting variants where applicable;
- the associated municipality/municipalities and localities;
- official names and historical names of relevant places;
- landscape features, rivers, valleys, mountains and protected areas;
- heritage sites, museums, institutions, industrial sites and transport infrastructure;
- significant historical events, people, traditions and cultural practices.

Use German-language sources as the primary local discovery route. Search in Czech, English and other languages where useful for independent corroboration or international context.

## 5. Research themes

Assess relevance according to the character of each PLZ area. Consider, where applicable:
- archaeology and prehistory;
- Roman and other ancient heritage;
- medieval and early-modern history;
- Habsburg and imperial history;
- Austrian state formation and modern history;
- architecture, urbanism and historic townscapes;
- castles, palaces, churches, monasteries and other heritage;
- museums, collections, archives and cultural institutions;
- music, literature, visual arts, theatre and major cultural figures;
- science, universities, technology and engineering;
- industry, mining, energy, crafts and economic history;
- transport history, railways, bridges and infrastructure;
- Alpine landscapes, glaciers, lakes, rivers, caves and geological features;
- national parks, protected landscapes and biodiversity;
- traditions, festivals, food culture and local identity;
- significant people and locally grounded stories;
- visitor experiences and distinctive viewpoints.

This is a discovery checklist, not a quota. Do not force every theme into every record.

## 6. Sources and evidence

Use the Austrian source hierarchy defined in `COUNTRY_PROFILE.md`. Match each source to the claim it supports.

### 6.1 Online-first verification

Use official public online registers, search interfaces and institutional pages directly as the default. Do not download or maintain bulk national datasets merely as a routine step. An official downloadable dataset may be used when an essential relationship cannot be reliably established online or when a reproducible comparison is genuinely necessary. If used, identify its publisher, dataset/version or publication date, and access date. Do not treat a convenient online directory as proof of geographic territory unless it supports that exact claim.

### 6.2 Geographic-only inventory gate

Before research or content creation, verify that the selected PLZ qualifies under the geographic-only rule in section 3. Check official postal sources for special-purpose status and geographic sources for actual territorial/address-point relationships. PO-box-only, company/institution-only without territory, branch, sorting-centre and other operational codes are excluded from the production sequence. Record exclusions and unresolved cases separately; do not create content for them.

Prefer primary official sources for administrative, postal, heritage and institutional facts. Use academic and specialist sources for deeper historical and scientific claims. Established tourism sources can help discover visitor-relevant places but should not be the sole evidence for contested historical claims.

Every source URL stored in a record must be specific enough to support the relevant fact. Fact-level source references must correspond to the record's source list exactly as required by the schema. Do not fabricate URLs, titles, publication dates or source contents.

When sources disagree:
1. identify the exact disputed claim;
2. consult a competent primary authority;
3. seek independent corroboration appropriate to the subject;
4. preserve uncertainty where it cannot be resolved;
5. do not silently choose a convenient answer.

## 7. Geographic accuracy

- Establish the actual physical location of every fact.
- Distinguish visitor addresses from postal/contact addresses.
- Do not use a post office or municipal office as a substitute location for an attraction.
- Use the schema's fact-location structure and controlled values.
- Record only defensible coordinates; use the permitted null/accuracy fallback where the evidence is insufficient.
- Keep fact locations separate from the PLZ representative point and legacy access point.
- Avoid duplicate assignment of one continuous attraction or story across multiple PLZ records; choose one defensible primary record under the final geographic assignment rules.

## 8. Languages and writing

Use the shared TRAVEL seven-language structure: Czech (`cs`), German (`de`), English (`en`), Spanish (`es`), French (`fr`), Italian (`it`) and Dutch (`nl`), subject to final confirmation against the shared schema.

Write the source-language fact text in Czech, then provide complete and natural translations in all other required languages. Preserve names, historical terminology, dates, factual nuance and geographic meaning. Do not translate proper names mechanically.

Each fact should tell a coherent, useful story rather than present disconnected trivia. Avoid promotional exaggeration, generic filler, unsupported superlatives and repetitive openings.

## 9. Record lifecycle and storage

The technical schema currently mirrors the shared TRAVEL record structure. However, Austria's canonical production storage, backup, lifecycle and publication workflow have not yet been approved.

Until that decision is documented:
- create no production PLZ records;
- do not write Austrian records to Supabase, Neon, GitHub JSON record files or any other database;
- do not create a production sequence or mark records as placeholder, validated or published;
- use GitHub only for this country workspace's documentation and approved inventory planning.

The final standard must define the authoritative store, status transitions, audit gate, backups, read/write separation and EuropeExplorer publication behaviour before production begins.

## 10. Quality gate

A record is not complete until:
- the PLZ is confirmed within the approved inventory and its geographic/special-purpose status is resolved;
- its full geographic scope is defensible;
- administrative values are accurate;
- major relevant discoveries have been researched rather than merely copied from an old list;
- every fact is significant, geographically assigned, sourced and correctly located;
- translations are complete and faithful;
- the complete JSON validates against the approved schema;
- no duplicate or misplaced facts remain;
- the record passes the approved audit and publication process.

This section is a working baseline. Final numeric priorities, detailed source rules, fact selection, map taxonomy, image licensing, lifecycle and database-safety controls must be completed during the Austrian documentation design.
