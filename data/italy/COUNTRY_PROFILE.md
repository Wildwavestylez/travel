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
- The geographic scope of research is the area actually served by the CAP. Administrative labels are descriptive relationships and must not arbitrarily narrow the scope of the facts that can be researched.
- A CAP may be associated with a municipality, several municipalities/localities, a provincial road grouping, or a specific urban CAP zone. The exact relationship must be established from reliable postal and geographic evidence.
- Never assume that one CAP equals one Comune, that one Comune has only one CAP, or that a CAP boundary follows a municipal, provincial or regional boundary.

Keep distinct:
1. the postal CAP and its delivery geography;
2. the Comune or Comuni related to that CAP;
3. the administrative location of a serving postal office, where relevant;
4. the physical location of an individual fact;
5. the postcode-level representative place and point;
6. the legacy access/navigation point.

These are different concepts and must not be substituted for one another.

## Italian postal system — CAP

The CAP is a five-digit numeric code administered and published by Poste Italiane. Preserve it as a string, including any leading zero.

Poste Italiane describes the digits as follows:

- first digit: postal region (`Regione Postale`);
- second digit: province-level postal grouping;
- third digit: distinguishes provincial capitals and other localities according to the CAP structure;
- fourth and fifth digits: identify a provincial road grouping and municipality in relevant non-capital patterns, or a city CAP zone in relevant capital patterns.

This digit structure is useful for understanding and checking CAP values, but it is not a substitute for an authoritative CAP-to-place lookup. Never derive a Comune, Provincia, Regione or exact polygon from the digits alone.

Poste Italiane distinguishes ordinary locality CAPs and urban CAP zones. Larger provincial capitals may have multiple CAP zones. Smaller provincial capitals may use a single CAP ending in `00`. There are also patterns in which a final zero represents a group of municipalities rather than one individual Comune. Treat the actual published assignment as authoritative.

The CAP system changes over time. Poste Italiane publishes periodic CAP updates and states that new CAP assignments became operational on 25 May 2026; older CAPs remain valid for a transition period of at least twelve months. Therefore:
- record the source release/date used to establish a CAP inventory;
- distinguish current assignments from legacy or transitional codes when the source provides that information;
- do not treat a CAP as current solely because it appears in an old third-party list;
- re-check affected CAPs when Poste Italiane publishes changes;
- do not silently merge historical and current CAP identities.

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

The future schema must decide how to represent one-to-many and many-to-many relationships without losing information. In particular:
- one Comune may be associated with multiple CAPs;
- one CAP may cover multiple Comuni or localities;
- a Comune may have multiple urban CAP zones;
- the postal assignment and the current administrative hierarchy may change at different times.

Do not choose a single Comune or intermediate unit merely to make the data look hierarchical if that would conceal a real multi-municipality CAP assignment. If the shared record structure requires one primary display value, document the selection rule and preserve the complete verified relationship in a suitable structured representation or reference layer. The precise implementation belongs in the schema design, not in ad hoc prose values.

The serving post office's physical location, if used as a record label or verification aid, must not be mistaken for the full CAP territory. The facts may concern any defensibly assigned location within the CAP's real geographic scope.

## Representative place and point

Every production record must retain the shared concept of one `representative_place` and one `representative_point`, subject to the final Italian schema.

The point must identify the selected representative place and be geographically defensible for the CAP area.

The representative point is not automatically:
- the geometric centre of a CAP polygon;
- the location of the serving post office;
- the most famous attraction;
- the location of every fact;
- an access/navigation point.

Choose a place that genuinely characterises the CAP area. It may be a settlement, historic centre, urban quarter, landscape, heritage site, industrial area, port, island locality or another representative geographic feature. Fame alone is not sufficient.

Where a CAP covers several municipalities or localities, select a representative place according to a documented and consistently applied rule. Do not imply that the selected point represents the precise centre or complete boundary of the postal territory.

Do not invent CAP polygons or derive them from municipality boundaries. Use verified postal geography where available. If no defensible polygon is available, the representative point remains a point-level descriptor, not a fabricated boundary.

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

A fact must have a genuine and defensible geographic relationship to the CAP to which it is assigned. A Comune name appearing in a broad source is not sufficient proof that a specific attraction lies inside a particular CAP. Use exact address, official locality evidence, authoritative map/address data or other reliable location evidence as appropriate. Where a location is close to or crosses an uncertain postal boundary, record the uncertainty and do not claim a precision the evidence does not support.

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

The following decisions must be resolved in the Italian schema and Content Standard before production records are created:

1. How to represent a CAP associated with multiple Comuni and a Comune associated with multiple CAPs without losing the verified relationships.
2. Which canonical ISTAT identifiers and unit-type fields are required for Regione, intermediate territorial unit and Comune.
3. How to represent special and non-uniform intermediate territorial arrangements without forcing them into a false uniform Province hierarchy.
4. How to represent the record's primary display locality where a CAP serves multiple Comuni.
5. Whether and how to store CAP polygons or other postal-geography geometry, separately from representative points.
6. How the Italian schema will handle the legacy `access_point` requirement consistently with existing application compatibility.
7. The exact Italian controlled vocabulary for fact location types and any country-specific geographic classifications.
8. How current, transitional and historical CAP assignments will be distinguished and versioned.

Do not create or publish Italian CAP records, finalise `sequence.json`, or change either application based on unresolved assumptions. First approve this profile, then design and validate the Italian schema and Content Standard, then complete the operational prompts and authoritative CAP inventory/sequence.
