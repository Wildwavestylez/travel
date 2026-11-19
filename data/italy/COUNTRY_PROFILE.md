# Italy — COUNTRY PROFILE

## Purpose and authority

This profile defines the Italian geographic, postal and administrative meaning of the fields used by an Italian CAP record in TRAVEL / EuropeExplorer.

The Italian country contract will be defined by the future `data/italy/schema.json`, together with `data/italy/CONTENT_STANDARD.md`. The schema will define field names, types, required properties and controlled values. The Italian Content Standard and operational prompts will define research, geographic assignment, source, editorial, creation, rework and audit rules.

This profile explains the Italian meaning of the geographic concepts and the relationships that the data model and applications must preserve. It does not replace the schema, Content Standard or prompts. It must not silently introduce final schema fields before those documents are designed and reviewed.

Preserve the established TRAVEL / EuropeExplorer architecture used for Czechia and Germany wherever the underlying concept is shared. Adapt country-specific postal, geographic, administrative and source details to Italy. Do not mechanically copy Czech or German administrative semantics.

## Geographic production unit

The production unit for Italy is the five-digit Italian postal code, the **CAP (Codice di Avviamento Postale)**.

- One CAP is one production unit and one canonical postcode record.
- A CAP is a postal routing and delivery identifier. It is not itself an administrative unit, municipality, neighbourhood or tourist destination.
- A CAP record must represent the defensible geographic delivery area associated with that CAP, not merely the name of a town printed beside it.
- The CAP is the geographic content layer to which we attach interesting places, facts and stories.
- Each fact must have a real, defensible location on the map and a meaningful geographic relationship to the CAP record.
- Administrative labels such as Regione, Provincia and Comune help users navigate and filter the content; they do not define the editorial purpose of a CAP record.
- Do not turn the project into a historical register of municipal mergers, boundary changes or former villages. Record administrative detail only to the extent needed for correct current geographic classification and useful search.

Keep the CAP record, the map location of each fact, the representative place/point and the legacy access point conceptually distinct. Administrative labels are supporting metadata for search and filtering, not the main content.

## Italian postal system — CAP

The CAP is a five-digit numeric code administered and published by Poste Italiane. Preserve it as a string, including any leading zero.

Poste Italiane describes the digits as follows:

- first digit: postal region (`Regione Postale`);
- second digit: province-level postal grouping;
- third digit: distinguishes provincial capitals and other localities according to the CAP structure;
- fourth and fifth digits: identify a provincial road grouping and municipality in relevant non-capital patterns, or a city CAP zone in relevant capital patterns.

This digit structure is useful for understanding and checking CAP values, but it is not a substitute for an authoritative CAP-to-place lookup. Never derive a Comune, Provincia, Regione or exact polygon from the digits alone.

Poste Italiane distinguishes ordinary locality CAPs and urban CAP zones. Larger provincial capitals may have multiple CAP zones. Smaller provincial capitals may use a single CAP ending in `00`. There are also patterns in which a final zero represents a group of municipalities rather than one individual Comune. Treat the actual published assignment as authoritative.

Use a current, reliable CAP inventory when preparing the national sequence. Check the source version during initial inventory preparation and refresh the list if a relevant official update is encountered. The project does not need a separate historical CAP change-management system for ordinary content production.

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

This is a navigation and relationship model, not a claim that every intermediate unit has the same legal status or exists in the same form in every Region. The profile and future schema must preserve the specific official unit type and identifier rather than flattening every intermediate unit into a generic province without qualification.

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

The final field names and required structure must be set in `data/italy/schema.json` after this profile and the shared schema architecture have been reviewed. Do not add speculative fields to individual records.

The existing shared concepts must retain their distinct meanings:

- `postcode`: the five-digit CAP, stored as a string.
- municipality/city concept: the official Comune or postal locality used as the record's principal human-readable place label. It must not be an arbitrary list of every place associated with the CAP.
- intermediate administrative concept: the relevant Provincia, Città metropolitana, Provincia autonoma, Libero consorzio comunale or other correctly typed territorial unit, as supported by official sources.
- Region/state concept: the Regione to which the relevant Comune belongs, using the current official ISTAT identity.
- district/locality concept: a documented frazione, località, quartiere or other sub-municipal place where genuinely relevant. Preserve its local type; do not treat all such terms as equivalent.
- `representative_place`: one human-readable place or feature that genuinely characterises the CAP's geographic area.
- `representative_point`: coordinates of that same representative place.

The administrative fields should provide a clear, useful primary classification for search and filters. Where a CAP genuinely relates to more than one Comune, use the project's agreed practical assignment rule and preserve enough information to avoid misleading users. Do not build a complex historical or boundary-management model solely to represent rare administrative edge cases.

The serving post office's physical location must not automatically be treated as the location of every fact. Our primary concern is that each interesting place and story is correctly located and assigned to the appropriate CAP content record.

## Representative place and point

Every production record must retain the shared concept of one `representative_place` and one `representative_point`, subject to the final Italian schema.

The point must identify the selected representative place and provide a useful map position for the CAP record.

The representative point is not automatically:
- the geometric centre of a CAP polygon;
- the location of the serving post office;
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
- the serving post office by definition;
- the location of a fact;
- a CAP polygon or postal boundary.

Keep this concept separate from `representative_point` and fact locations. Do not use it as a substitute for either.

The Czech and German schemas currently differ in whether an access point may be null or is required. The Italian schema must make an explicit compatibility decision after reviewing the shared application and legacy data requirements. This profile does not silently decide that schema question. Do not remove or change the shared field without a separately reviewed schema and application migration.

Do not spend disproportionate research effort inventing an access point solely for EuropeExplorer. Any verification flag must reflect a check actually performed.

## Sources and verification

Use the Italian authority appropriate to the specific claim. No single institution is authoritative for every layer.

### Postal codes and postal geography

**Poste Italiane** is the primary source for:
- the official CAP system and five-digit structure;
- current CAP assignments and published changes;
- the postal interpretation of CAP patterns and urban zones;
- postal-service and serving-office information where provided.

Use the official CAP page and its dated update publications. A third-party CAP directory may help discover candidates but must not override Poste Italiane or be treated as the canonical national inventory without verification.

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

- Attach source IDs to the facts they support and define those sources in the record's top-level `sources` collection, following the final schema.
- Evidence for a fact's location is separate from evidence for the historical or cultural claim and must support the geographic point.
- Keep source dates, release identifiers and access dates where the schema and Content Standard require them.
- Distinguish official registers, open datasets, commercial datasets, third-party directories and editorial sources.
- Respect source licences, reuse conditions, attribution requirements, API terms and rate limits. Public visibility does not automatically mean unrestricted bulk reuse.
- Verification fields must reflect checks actually performed. Never claim that a CAP, administrative relationship, coordinate or fact has been verified when it has not.

## Search and filtering geography

The Italian data model must support the future EuropeExplorer and companion application search/filter experience without changing the one-CAP-one-record production principle.

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

Postal geography and administrative geography are different dimensions. The future data model and application filters must join them through verified relationships without pretending that CAPs are administrative polygons or that administrative boundaries are postal boundaries.

This profile establishes the geographic requirements. The exact database tables, indexes, API responses, search UI and cross-application implementation belong to the relevant application and database design work and must not be improvised in this country profile.

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

All language versions must preserve the same fact IDs and order, and must convey the same verified meaning. Place names, official administrative names, historical terms and culturally specific concepts must be translated or explained naturally without changing their identity. Preserve official local names where appropriate and add clear explanatory wording for international readers.

## Change control and unresolved design decisions

This profile establishes geographic concepts and requirements. It does not by itself finalise the Italian JSON field names, data types, controlled vocabularies, database relations or application behaviour.

The Italian schema and Content Standard must settle only the practical details needed for consistent records and useful application filters:

1. Which Italian administrative values populate the shared region, county and city concepts.
2. How special Italian administrative forms are displayed without forcing users to understand their legal complexity.
3. How the legacy `access_point` requirement is handled consistently with the existing application.
4. The controlled Italian fact-location vocabulary, while preserving the shared map-category system.

Do not delay content production over rare historical boundary cases or a comprehensive CAP polygon model. The sequence needs a reliable current list of CAPs; each CAP then becomes a content layer for map points, interesting places and stories. First approve this profile, then prepare the Italian schema and Content Standard, followed by the operational prompts and CAP sequence.
