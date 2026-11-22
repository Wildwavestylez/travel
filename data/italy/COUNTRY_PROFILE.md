# Italy — COUNTRY PROFILE

## Purpose and authority

This profile defines the Italian geographic, postal and administrative meaning of the fields used by an Italian CAP record in TRAVEL / EuropeExplorer.

The current Italian record contract is defined by `data/italy/schema.json`, together with `data/italy/CONTENT_STANDARD.md`. The schema defines field names, types, required properties and controlled values. The Italian Content Standard and operational prompts define research, geographic assignment, source, editorial, creation, rework and audit rules.

This profile explains the Italian meaning of the geographic concepts and the relationships that the data model and applications must preserve. It does not replace the schema, Content Standard or prompts. It must not silently introduce final schema fields before those documents are designed and reviewed.

## Canonical storage and application authority

Italy's production source of truth is the Neon database, not JSON files in the GitHub repository and not the Czech Supabase project.

The production table is `public.italy_cap_records` in the Neon project `Europe Explorer`, database `neondb`. Its record contract is:
- `postcode`: five-character CAP identifier stored as text;
- `workflow_status`: database-level workflow state;
- `record`: the complete Italian CAP JSON record stored as JSONB;
- `created_at` and `updated_at`: database timestamps.

The database `workflow_status` column and JSONB root `status` are paired lifecycle fields and must always match. The JSONB root `data_version` carries the content version. Allowed states are `placeholder`, `validated` and `published`; newly reworked records use `validated` with `data_version: 1`, while audited and explicitly published records use `published` with `data_version: 5`.

The JSONB `record` must conform to `data/italy/schema.json`, whose complete technical structure is kept 1:1 with `data/czechia/schema.json`. Country-specific Italian meaning belongs in values and descriptions, not additional JSON fields or enums.

Neon is authoritative for all Italian production reads and writes. GitHub contains the versioned schema, standards, prompts and supporting project files; it is not a second production database. Do not write Italian production records to Supabase, local JSON files, GitHub data files or another database as an alternative source of truth.

EuropeExplorer reads Italian production content from Neon using read-only access. Do not introduce write operations into the Explorer read path or expose database credentials in client code. The publication gate requires all three values to agree: `workflow_status = 'published'`, `record.status = 'published'` and `record.data_version = 5`.


Preserve the established TRAVEL / EuropeExplorer architecture used for Czechia and Germany wherever the underlying concept is shared. Adapt country-specific postal, geographic, administrative and source details to Italy. Do not mechanically copy Czech or German administrative semantics.

## Geographic production unit

The production unit for Italy is the five-digit Italian postal code, the **CAP (Codice di Avviamento Postale)**.

- **One CAP is one production unit and exactly one canonical postcode record**, including when the CAP is shared by several Comuni.
- Never split one CAP into multiple records by Comune and never create multiple records with the same CAP.
- The CAP is our project content/indexing layer. The record covers the complete defensible geographic area associated with that CAP.
- The `city` field contains the current official names of **all Comuni associated with the CAP**, in one comma-separated string. It is a compact administrative orientation label, not a choice of one representative or serving Comune.
- The `county` and `state` fields reflect all applicable intermediate territorial units and Regioni associated with those Comuni. If more than one applies, list the official names in one comma-separated string rather than silently choosing one.
- A CAP's Comune list is administrative context only. It does not divide the editorial work or the facts into municipal sub-records.
- Research all interesting places, attractions and stories across the entire CAP area, regardless of the Comune, frazione or locality in which they physically lie.
- Each fact is located at its actual physical subject on the map. Do not add a municipality-based fact assignment or require the fact to be associated with one particular Comune.
- `representative_place` and `representative_point` provide one useful map anchor for the CAP as a whole. They are not a representative Comune, serving post office or boundary centroid.
- Administrative labels support orientation and filtering; they do not define the editorial purpose of the CAP record.

Keep the CAP record, the map location of each fact, the representative place/point and the legacy access point conceptually distinct. Do not turn the project into a historical register of municipal mergers, boundary changes or former villages.

## Italian postal system — CAP

The CAP is a five-digit numeric code administered and published by Poste Italiane. Preserve it as a string, including any leading zero.

Poste Italiane describes the digits as follows:

- first digit: postal region (`Regione Postale`);
- second digit: province-level postal grouping;
- third digit: distinguishes provincial capitals and other localities according to the CAP structure;
- fourth and fifth digits: identify a provincial road grouping and municipality in relevant non-capital patterns, or a city CAP zone in relevant capital patterns.

This digit structure is useful for understanding and checking CAP values, but it is not a substitute for an authoritative CAP-to-place lookup. Never derive a Comune, Provincia, Regione or exact polygon from the digits alone.

Poste Italiane distinguishes ordinary locality CAPs and urban CAP zones. Larger provincial capitals may have multiple CAP zones. Smaller provincial capitals may use a single CAP ending in `00`. There are also patterns in which a final zero represents a group of municipalities rather than one individual Comune. Treat the actual published assignment as authoritative.

Use the project's approved CAP inventory/sequence to identify the records in scope. Ordinary content production does not monitor, reconcile or apply subsequent postal updates. The project is a geographic-content and discovery database, not a live postal directory.

A PO-box or organisation using an ordinary geographic CAP does not make that CAP non-geographic. Do not exclude a CAP merely because it may also be used in a postal address for an organisation or a casella postale. A postal box is an addressee/delivery arrangement, not by itself proof of a separate postcode territory. Conversely, do not assume that every numeric pattern is a valid geographic CAP: verify the actual postal assignment.

## Administrative hierarchy and territorial units

Italy has 20 Regions (`Regioni`). The Region is the top-level subnational territorial government unit relevant to the EuropeExplorer administrative filter.

Below the Region is an intermediate provincial / supra-municipal level. Its legal and administrative forms are not uniform throughout Italy. Depending on the territory and the current legal arrangement, the relevant unit may be:
- `Provincia`;
- `Città metropolitana`;
- `Provincia autonoma`;
- `Libero consorzio comunale` in Sicily;
- another territorial/statistical unit used by ISTAT where a former province or a special regional arrangement requires it.

The municipality is the `Comune`. It is the ordinary local-government unit and the essential official municipality reference for CAP-to-administration relationships.

The conceptual hierarchy for filtering is:

`Italia → Regione → Provincia / unità territoriale sovracomunale → Comune → CAP`

This is a navigation and relationship model, not a claim that every intermediate unit has the same legal status or exists in the same form in every Region. The profile and schema must preserve the specific official unit type and identifier rather than flattening every intermediate unit into a generic province without qualification.

### Regions and special autonomy

Italy has 20 Regions, five of which have special-statute autonomy. The special-statute Regions are:
- Friuli-Venezia Giulia;
- Sardegna;
- Sicilia;
- Trentino-Alto Adige/Südtirol;
- Valle d'Aosta/Vallée d'Aoste.

Trentino-Alto Adige/Südtirol contains the autonomous Provinces of Bolzano/Bozen and Trento. These must not be misrepresented as ordinary provinces subordinate to a conventional Region in the same way as elsewhere; preserve their autonomous-province status and official names.

Valle d'Aosta/Vallée d'Aoste has a special territorial arrangement and must not be forced into an ordinary provincial hierarchy.

Sicily uses Liberi consorzi comunali and Città metropolitane as its intermediate territorial entities. Sardinia's provincial and metropolitan arrangement has undergone recent reorganisation and must always be taken from the current ISTAT release rather than an old static list.

Friuli-Venezia Giulia has a regional arrangement in which former provinces may remain relevant in statistical or historical datasets without being current provincial administrative entities. Do not confuse a statistical/historical unit with a current administrative authority.

For all Regions and intermediate units, use the official name and code from the relevant current ISTAT release. Retain bilingual or multilingual official forms where the authority uses them, including where appropriate:
- Trentino-Alto Adige/Südtirol;
- Valle d'Aosta/Vallée d'Aoste;
- Bolzano/Bozen and other officially bilingual place names.

### Comune and sub-municipal localities

`Comune` is the official municipality. Use the current ISTAT municipality name and code for canonical administrative identity.

A Comune may contain multiple named settlements and sub-municipal localities. Depending on local usage and the source, these may include:
- `frazione`;
- `località`;
- `borgata`;
- `quartiere`;
- `rione`;
- `municipio` or `circoscrizione`;
- other locally recognised urban or rural subdivisions.

These terms are not interchangeable and do not have one uniform legal meaning throughout Italy. Use the locally and officially supported designation. Do not promote a locality, neighbourhood or frazione to Comune status unless it is an official Comune in the current ISTAT register.

The existence of a named locality does not prove that it has its own CAP. Likewise, a CAP assignment does not prove that the postal area coincides with the boundary of that locality.

## Canonical record fields and administrative meaning

The canonical field names, required structure and controlled values are defined by the current `data/italy/schema.json`. This profile explains their Italian geographic meaning; it does not override the schema or authorise speculative fields in individual records.

The existing shared concepts must retain their distinct meanings:

- `postcode`: the five-digit CAP, stored as a string.
- `city`: all current official Comuni associated with the CAP, written in one comma-separated string. Do not select a single Comune as a representative or serving-office anchor.
- `county`: all applicable current intermediate territorial units — Provincia, Città metropolitana, Provincia autonoma, Libero consorzio comunale or other correctly typed unit — for the associated Comuni. Use comma-separated official names if more than one applies.
- `state`: all applicable current official Regioni for the associated Comuni. Use comma-separated official names if more than one applies.
- `district`: only a genuinely relevant, documented sub-municipal locality; never a list of Comuni or all settlements in the CAP. Otherwise null.
- `representative_place`: one human-readable place or feature that genuinely characterises the CAP's overall geographic area.
- `representative_point`: coordinates of that same representative place.

The Comune list is administrative orientation only. It does not partition research, facts or map coverage. Do not require each fact to be assigned to a Comune. A fact's location is determined by its real physical subject, while the CAP record is determined by the defensible CAP relationship. The physical location of a post-office branch is not a mandatory content anchor and must never determine where facts are researched or placed.

## Representative place and point

Every production record must retain the shared concept of one `representative_place` and one `representative_point`, subject to the final Italian schema.

The point must identify the selected representative place and provide a useful map position for the CAP record.

The representative point is not automatically:
- the geometric centre of a CAP polygon;
- the most famous attraction;
- the location of every fact;
- an access/navigation point.

Choose a place that genuinely characterises the CAP area. It may be a settlement, historic centre, urban quarter, landscape, heritage site, industrial area, port, island locality or another representative geographic feature. Fame alone is not sufficient.

Choose a practical, genuinely representative place for the CAP record. The representative point is a map anchor for the record, not a claim about an exact postal polygon. We do not need to build or maintain CAP boundary polygons as a prerequisite for producing useful content.

## Fact locations

A fact's physical/map location is separate from the postcode-level representative point and the legacy access point. Preserve the shared TRAVEL concept of storing the fact's location once on the source-language fact object (currently represented in Czech and German records as `facts[].location`), subject to confirmation in the Italian schema.

When a defensible location is available, the shared location concept includes:
- the name of the actual object, place or historically documented location;
- a verified postal address, or null when no reliable address exists;
- WGS84 latitude and longitude;
- a controlled location type defined by the Italian schema;
- a controlled accuracy value describing the real precision;
- a direct source URL supporting the identification or geographic position.

Do not invent coordinates, copy the representative point or access point automatically, or remove an otherwise valuable fact merely because an exact street address is unavailable. Use null or a permitted documented fallback only as allowed by the Italian Content Standard.

The Italian location-type vocabulary must be country-specific where Italian place types require it, controlled by the schema, and not improvised as free text. The shared EuropeExplorer `map_category` remains conceptually separate: it classifies the primary subject of a fact for shared map presentation and must not be confused with the country-specific physical location type.

Store location metadata only once on the source-language fact. Do not duplicate coordinates and location metadata in translated fact objects.

A fact must have a genuine and defensible geographic relationship to the CAP record. The key requirement is to locate the actual place on the map and verify that it belongs in that CAP's content area. Do not spend effort reconstructing obscure historical postal boundaries when a reliable current address/locality assignment is sufficient. Never invent a location or coordinates.

## Access point — legacy game compatibility

`access_point` is a legacy compatibility concept from the original TRAVEL driving/game layer. It represents a practical navigation approach point intended to help a simulated vehicle enter or pass through a postcode area without routing problems such as pedestrian-only streets or unsuitable access roads.

It is not:
- the CAP representative point;
- the location of a fact;
- a CAP polygon or postal boundary.

Keep this concept separate from `representative_point` and fact locations. Do not use it as a substitute for either.

The current Italian schema permits `access_point` to be either a point or `null`. Keep that contract unless a separately reviewed schema and application migration changes it. Do not remove or change the shared field as part of a country-profile clarification.

Do not spend disproportionate research effort inventing an access point solely for EuropeExplorer. Any verification flag must reflect a check actually performed.

## Sources and verification

Use the Italian authority appropriate to the specific claim. No single institution is authoritative for every layer.

### Postal codes and postal geography

**Poste Italiane** is the primary source for:
- the official CAP system and five-digit structure;
- current CAP assignments and published changes;
- the postal interpretation of CAP patterns and urban zones;


Use the official CAP page and its dated update publications. **The latest currently effective official Poste Italiane publications and datasets are binding and authoritative for all CAP assignment decisions. If a current official Poste Italiane publication supersedes an older Poste Italiane document, use the newer publication and disregard the older information; do not spend time reconciling, defending or researching obsolete assignments from superseded material.** Apply the latest published changes according to their stated effective dates and transition rules. If two currently effective official Poste Italiane sources genuinely conflict and neither clearly supersedes the other, record that precise conflict and pause the affected CAP decision rather than relying on older documents or third-party directories. Third-party CAP directories and historical documents may not override the current official Poste Italiane position. Research into branch operators, opening/closure status, opening hours, service catalogues and delivery arrangements is out of scope; these are not EuropeExplorer content.

### Administrative units and boundaries

**ISTAT (Istituto Nazionale di Statistica)** is the primary reference for:
- official Comune names and statistical codes;
- current administrative territorial classifications;
- relationships among Comuni, Provinces / supra-municipal territorial units and Regioni;
- dated territorial and administrative changes;
- official statistical administrative boundaries and related geographic data.

Use the current ISTAT classification and SITUAS resources. Record the reference date or release. Administrative codes and boundaries are time-dependent; do not treat old codes or old province lists as current.

### Streets, addresses and address points

**ANNCSU (Archivio Nazionale dei Numeri Civici e delle Strade Urbane)** is a key national reference for:
- street names (odonimi);
- civic numbers and address records;
- address presence and, where available, map positioning;
- open-data/API access to address records.

ANNCSU coverage and coordinate completeness depend on municipal submissions and updates. A missing address or coordinate in ANNCSU is not proof that a real place does not exist. ANNCSU address points do not by themselves define CAP boundaries.

### Cultural, historical and other facts

Use the Italian Ministry of Culture's **Catalogo Generale dei Beni Culturali** and relevant official catalogues, superintendencies, museums, archives, archaeological authorities, universities, protected-area authorities, municipalities, Regions and other institutional sources for cultural and historical claims.

Use authoritative specialist and local sources where necessary, checking that each source supports the specific fact and location. A source that merely mentions a Comune or Region does not establish the position of an individual monument.

### Evidence rules

- Put the exact source URLs supporting each fact in `facts[].sources`; each URL must match a `url` value in the top-level `sources` collection. Each top-level source object contains exactly `title`, `url` and `type`. Do not invent source IDs or additional source-object properties.
- Evidence for a fact's location is separate from evidence for the historical or cultural claim and must support the geographic point.
- Keep source dates, release identifiers and access dates where the schema and Content Standard require them.
- Distinguish official registers, open datasets, commercial datasets, third-party directories and editorial sources.
- Respect source licences, reuse conditions, attribution requirements, API terms and rate limits. Public visibility does not automatically mean unrestricted bulk reuse.
- Verification fields must reflect checks actually performed. Never claim that a CAP, administrative relationship, coordinate or fact has been verified when it has not.

## Search and filtering geography

The Italian data model supports the EuropeExplorer search/filter experience without changing the one-CAP-one-record production principle.

The intended user navigation is:

`Italia → Regione → Provincia / relevant intermediate territorial unit → Comune → CAP`

This navigation must be based on canonical identifiers and verified relationships, not only on display-name text matching.

Requirements:

- A user must be able to select a Regione and retrieve its relevant provincial/intermediate units, Comuni and CAP records.
- A user must be able to select a Provincia, Città metropolitana, Provincia autonoma or other correctly typed intermediate unit and retrieve the relevant Comuni and CAP records.
- A user must be able to select a Comune and retrieve all CAPs associated with it.
- A CAP record must be discoverable from each Comune it genuinely serves, including when one CAP covers more than one Comune.
- The system must preserve urban CAP zones and must not collapse multiple CAPs of a large city into one record.
- Localities and sub-municipal areas may support more precise search where reliable identifiers and relationships exist; they must not be mistaken for Comuni.
- Search must cope with official alternate/bilingual names, accents, apostrophes and spelling variants without changing canonical source names.
- Administrative changes must be date-aware and must not silently reassign historical CAP or fact records.
- Search/filter relationships must not be inferred from CAP digit patterns alone.

Postal geography and administrative geography are different dimensions. The data model and application filters must join them through verified relationships without pretending that CAPs are administrative polygons or that administrative boundaries are postal boundaries.

This profile establishes the geographic requirements. The exact database tables, indexes, API responses, search UI and cross-application implementation belong to the relevant application and database design work and must not be improvised in this country profile.

## Content lifecycle and versioning

The Italian record lifecycle must preserve the separation between content validation, audit approval and publication.

- A newly reworked record is saved with `workflow_status = 'validated'`, JSONB `status = 'validated'` and `data_version = 1` after the complete JSON record passes the shared schema and content validation.
- An audit result of `PASS` confirms audit acceptance only. It does not itself publish the record.
- Publication is permitted only after a successful final audit and the user's explicit publication instruction for the defined CAP scope.
- Publication changes the database-level `workflow_status` and JSONB `status` to `published` and sets JSONB `data_version = 5` after the complete final audit and the user's explicit publication instruction.
- After a publication write, read the exact records back from Neon and verify the requested CAP scope, row count, full JSON records and database workflow state. A successful write response alone is not proof of successful publication.
- Do not mark a record published merely because its content looks complete, because an audit passed, or because a neighbouring record was published.
- Read-only locking is a separate operation and must never be inferred from publication.

The content record itself has no country-specific version field. Keep versioning and workflow metadata outside the shared JSON structure, in the established database/application layer.

## Language layer

The Italian production record must preserve the shared multilingual EuropeExplorer architecture used by the existing country datasets.

The current Czech and German production schemas require these seven languages:
- `cs` — Czech;
- `de` — German;
- `en` — English;
- `es` — Spanish;
- `fr` — French;
- `it` — Italian;
- `nl` — standard Netherlands Dutch (`nl-NL`), phrased naturally and clearly for readers in both the Netherlands and Flanders.

Use the same seven-language set for Italy unless a separately reviewed EuropeExplorer-wide language decision changes it. Do not create a country-specific reduction in language coverage.

All language versions must preserve the same fact IDs and order, and must convey the same verified meaning. The canonical language keys are exactly `cs`, `de`, `en`, `es`, `fr`, `it` and `nl`, as required by the Italian schema. The base `facts` array and each of the seven `translations[lang].facts` arrays must contain the same unique IDs in the same order, paired by ID. The exact ID/order rule is specified in `data/italy/CONTENT_STANDARD.md`; this profile does not create a separate translation structure. Place names, official administrative names, historical terms and culturally specific concepts must be translated or explained naturally without changing their identity. Preserve official local names where appropriate and add clear explanatory wording for international readers.

## Change control and unresolved design decisions

This profile establishes Italian geographic concepts and requirements. The current JSON field names, data types and controlled vocabularies are defined by `data/italy/schema.json`; the production database and Explorer publication contract are defined in this profile. It does not replace those contracts.

The Italian schema and Content Standard must settle only the practical details needed for consistent records and useful application filters:

1. Which Italian administrative values populate the shared region, county and city concepts.
2. How special Italian administrative forms are displayed without forcing users to understand their legal complexity.
3. How the nullable legacy `access_point` field is used consistently with the shared Czechia JSON contract and existing application.
4. The controlled Italian fact-location vocabulary, while preserving the shared map-category system.

Do not delay content production over rare historical boundary cases or a comprehensive CAP polygon model. The sequence needs a reliable current list of CAPs; each CAP then becomes a content layer for map points, interesting places and stories. Keep this profile aligned with the current Italian schema, Content Standard and operational prompts as those documents evolve.
