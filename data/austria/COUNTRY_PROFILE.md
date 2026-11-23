# Austria — COUNTRY PROFILE

## Purpose and status

**Status: Complete and approved country specification.** This profile defines the Austrian meaning of postal, geographic and administrative concepts used by TRAVEL / EuropeExplorer records. It is the authoritative country-specific reference used together with `schema.json`, `CONTENT_STANDARD.md`, `prompt_rework.md` and `prompt_audit.md`.

The schema defines technical field names, types and controlled values. Its structure is identical to the Czech origin except for the Austrian four-digit PLZ pattern. This profile defines Austrian meanings. The Content Standard and operational prompts must implement both without inventing extra fields or weakening the shared TRAVEL content requirements.

## Geographic production unit

The Austrian production/indexing unit is one complete four-digit Postleitzahl (PLZ), stored as a string.

- Example: `1010` remains the string `"1010"`.
- One four-digit PLZ is one content unit. Do not split it into separate records for individual streets, buildings, house numbers, letter suffixes or tiny postal fragments.
- Research the complete defensible geographic scope associated with that PLZ.
- A PLZ is a postal identifier, not automatically a municipality, municipal district or exact polygon.
- One PLZ may relate to one locality, several localities, or part of a larger city. Establish the actual geographic relationship using competent postal and geographic evidence.
- Do not assume that every address or every building has a distinct project record. The project deliberately works at the four-digit PLZ level.

**Project scope is geographic PLZ only.** Include a PLZ only when reliable evidence establishes its own geographic delivery territory or geographic area that can be researched as a place. Exclude PO-box/Postfach-only codes, company- or institution-specific codes without their own territory, post-office/branch codes, sorting or distribution-centre codes, and other purely operational/non-geographic codes. Do not treat an ordinary geographic PLZ as a company code merely because businesses use it. Never classify a code from its numeric pattern alone.

Do not assume every geographic PLZ has an official polygon. Where sources establish only address points, localities or municipality relationships, record exactly that level of evidence. Do not fabricate borders or expand a PLZ to an entire municipality without proof.

## Postal representation

- Store the complete four-digit PLZ as text, never as an integer.
- Do not add spaces, hyphens or letter suffixes to the canonical Austrian code.
- Preserve leading zeroes if present.
- Do not split a code into smaller sub-records because a postal lookup exposes detailed addresses or delivery points.
- Postal-office locations and contact addresses do not, by themselves, define the complete geographic content area.

Austrian Post is the primary postal authority for PLZ existence and postal assignment. Its data must be used within the scope it actually supports; do not claim that a directory entry proves an exact polygon unless the source provides that evidence.

## Administrative field meanings — postal-office municipality in the header

The administrative fields are secondary indexing metadata. They support search, filtering, grouping and orientation; they do not define the full geographic content area or limit fact eligibility.

**For each geographic PLZ, `city` identifies exactly one municipality: the political Gemeinde in which the specific post office / postal service location assigned to that PLZ is physically situated (the relevant historical Leitort / Postamt).** Do not choose the largest municipality, the most representative settlement or a municipality merely because its name appears as the Bestimmungsort.

Use the shared flat TRAVEL fields:
- `city`: official name of the one political municipality containing the physically located postal facility assigned to the PLZ. Verify the assignment from Austrian Post postal-code information and the facility's physical address from the official Filialfinder or another official Austrian Post source. Verify the municipality from BEV Adressregister / Statistik Austria.
- `district`: a documented Stadtteil, Ortsteil or Bezirksteil within that same municipality where the assigned postal facility is physically located; otherwise null.
- `county`: the political Bezirk or applicable statutory-city status of the municipality containing that postal facility.
- `state`: the Bundesland containing that municipality.

**Bestimmungsort is a postal addressing designation, not automatically a political municipality and not proof of the physical location of the assigned post office.** Never copy it mechanically into `city`. Do not confuse a Postfiliale/Postpartner address with a Postfach-only code, sorting centre, distribution centre or Zustellbasis; verify which physical postal facility is actually associated with the geographic PLZ. If the responsible facility cannot be uniquely established from reliable official evidence, do not guess a municipality; flag the header field for resolution.

The one-municipality header rule does not narrow the content scope. Research the complete defensible geographic area associated with the PLZ and include relevant stories and map locations from all associated settlements and municipalities. Do not omit a place because it lies outside the municipality named in `city`; do not list all those municipalities in the header. The representative place and representative point remain separate orientation anchors for the whole PLZ and are not automatically the post office.

Statistik Austria is the authority for municipality identifiers, official municipality names, political districts, statutory cities, Bundesländer and administrative classifications. Vienna requires particular care: its 23 Gemeindebezirke are municipal districts within the statutory city of Vienna, not ordinary political Bezirke. Use official German names and diacritics. Where a field's meaning is not applicable, follow the schema's nullability; do not invent a value merely to fill it.

## Representative geography and fact locations

- `representative_place` and `representative_point` identify one useful, defensible orientation anchor for the complete PLZ content area.
- The representative point is not automatically a geometric centroid, post office, famous attraction or fact location.
- Each fact's `location` identifies the actual physical subject of that fact and is independent of the postcode-level representative point.
- Never copy the representative point into a fact location merely to make a map marker appear.
- Use WGS84 coordinates and the accuracy/type values permitted by the schema.
- Keep the legacy `access_point` concept separate from both representative and fact locations; follow the approved shared schema and application requirements.

## Official authorities and source hierarchy

This section defines which Austrian institution is competent for which kind of evidence. **No single source proves every aspect of a PLZ or a fact.** Use the source that is authoritative for the claim being made, and keep postal, geographic, administrative and editorial evidence separate.

Research is **online-first**. Consult official public registers, search interfaces, official datasets and institutional pages directly. Do not build a bulk-download workflow or maintain local national datasets by default. Download an official dataset only if a required relationship cannot be reliably verified online or a reproducible comparison materially requires it. Record the exact source, release/reference date when supplied, and date checked.

### A. Postal-code existence, purpose and destination locality

**1. Österreichische Post — primary operational postal source**
- Postlexikon: https://www.post.at/g/c/postlexikon
- Use the current PLZ directory, its legend and the PLZ–Bestimmungsort directory linked from the Postlexikon.
- This is the primary source for current and historical PLZ, postal destination-place naming, correct postal assignment and the postal meaning of a code.
- Read the legend and any code-purpose/type indicators. Do not classify a code as geographic or non-geographic from its digits, a search snippet, or its presence in a directory alone.
- A Bestimmungsort (postal destination/delivery place) is not automatically a municipality, settlement boundary or complete geographic PLZ polygon.
- A post office, branch, company, institution or Postfach address does not prove the full geographic scope of a PLZ.

**2. RTR — statutory published postcode inventory and independent cross-check**
- Postleitzahlen: https://www.rtr.at/TKP/aktuelles/veroeffentlichungen/veroeffentlichungen/Postleitzahlen.de.html
- RTR Open Data: https://data.rtr.at/
- Under § 36 Postmarktgesetz, RTR publishes the postcodes used by the universal service provider. The RTR page says the downloadable Open Data formats include XLSX, CSV, XML and JSON and that the data are updated monthly.
- Use the current published dataset and its legend as an inventory cross-check, not as proof that every listed code has a geographic territory suitable for TRAVEL.
- If RTR and Austrian Post differ, record the exact code, fields, release dates and both sources; investigate the difference. Do not silently choose one value or infer geographic eligibility from the RTR list alone.

**Postal eligibility rule:** include only a code for which the official postal evidence and geographic/address evidence together establish a defensible geographic content area. Exclude Postfach-only, company/institution-specific without an independently evidenced territory, branch, sorting/distribution and other operational codes. If purpose or geography remains unclear, leave the code out of the approved inventory and report the unresolved case.

### B. Addresses, coordinates and physical geography

**3. BEV — Bundesamt für Eich- und Vermessungswesen**
- Address Register: https://www.bev.gv.at/Themen/Adressregister.html
- Official address search: https://www.adressregister.gv.at/
- BEV address search information: https://www.bev.gv.at/en/Services/Geoinformation-Services/Adress-search.html
- The Adressregister is Austria's official address data collection, maintained continuously by municipalities and cities and provided by BEV. It includes official address spelling, stable address codes, building/address relationships and geocoding.
- Use it to verify real addresses, municipality assignment, PLZ-Gebiet shown for an address, official spelling and coordinate location.
- Understand the coordinate types: an address coordinate is located on the associated property near its boundary/access area; a Zugangskoordinate represents the actual access; a Gebäudekoordinate is located at the centre of the building. Do not treat these as interchangeable.
- A BEV address point proves the postal/geographic attributes of that address, not the complete boundary of a PLZ. A collection of addresses can support a geographic analysis but must not be presented as an official polygon unless a competent source actually provides one.

**4. basemap.at and official provincial GIS**
- basemap.at: https://basemap.at/
- basemap.at is an official Austrian administrative basemap produced through cooperation between the nine provinces, BEV and other public partners. It is updated regularly and is useful for orientation, place names, roads, buildings and contextual map verification.
- Use the relevant Bundesland's official GIS/Geodata portal for detailed local layers, where available.
- A basemap is a cartographic reference and discovery aid, not by itself proof of a PLZ polygon or the legal status of a monument, protected area or administrative unit.

**5. BEV cadastral/topographic products and competent municipal sources**
- Use BEV cadastral and topographic information when a fact needs parcel, building, terrain or official geographic context.
- Use the municipality's official GIS, address register or planning/heritage map for local details when it is the competent publisher.
- Use the official source's stated coordinate reference system and transform coordinates to WGS84 only with a reliable method. The TRAVEL schema stores latitude/longitude; do not copy projected coordinates into those fields.

### C. Administrative metadata — not content boundaries

**6. Statistik Austria**
- Regional divisions: https://www.statistik.at/services/tools/regionale-internationale-daten/regionale-daten-und-gliederungen/regionale-gliederungen
- STATatlas: https://www.statistik.at/atlas/
- Gemeindeverzeichnis, political-district lists and open regional-geography datasets are linked from the regional-divisions page.
- Use Statistik Austria for official municipality names and identifiers, political Bezirke, statutory cities, Bundesländer, Ortschaften and other published administrative/statistical classifications.
- Use the current reference date/version. Administrative names and boundaries can change; do not mix releases without recording the reference date.
- These values populate search/filter metadata only. They do not define the PLZ content layer or the geographic eligibility of facts.

**7. Official municipalities, cities and Bundesländer**
- Use official municipal and provincial portals for local place names, official local histories, public facilities, local heritage inventories, planning maps and information within their competence.
- For a PLZ spanning multiple municipalities, consult all relevant municipalities; do not stop after finding the representative municipality stored in `city`.
- For Vienna, use the City of Vienna and its district-level sources for the 23 Gemeindebezirke. Treat them as sub-municipal search metadata within the statutory city, not as political Bezirke.

### D. Heritage, culture and archaeology

**8. Bundesdenkmalamt (BDA)**
- Denkmalverzeichnisse: https://www.bda.gv.at/service/unterschutzstellung/denkmalverzeichnis/
- Denkmalliste: https://www.bda.gv.at/service/unterschutzstellung/denkmalverzeichnis/denkmalliste-gemaess-3-dmsg.html
- Use the annual lists, available as PDF and CSV by Bundesland, for discovery and verification of listed immovable monuments; use the § 2a protection ordinances and other official BDA records for the relevant legal instrument.
- Important limitation: BDA explicitly states that the published Denkmalliste is not legally binding. Treat it as an official published inventory, but verify legal protection/status from the relevant ordinance or competent record when the legal status itself matters.
- The BDA is a strong source for monument protection, conservation, archaeological heritage and specialist heritage information; it is not a complete inventory of every culturally important place.

**9. Österreichische UNESCO-Kommission and UNESCO World Heritage Centre**
- Austrian UNESCO Commission, World Heritage: https://www.unesco.at/kultur/welterbe
- Austrian World Heritage list: https://www.unesco.at/kultur/welterbe/die-welterbe-liste
- UNESCO World Heritage Centre: https://whc.unesco.org/
- Use these for confirmed World Heritage status, official site names, descriptions, boundaries and statements of Outstanding Universal Value. Distinguish World Heritage from national monument protection and from UNESCO intangible cultural heritage.

**10. Museums, archives, libraries and specialist heritage institutions**
- Use the official website/catalogue of the museum, archive, library, memorial or collection responsible for the object or subject.
- Use state, city and municipal archives for local historical records and archival evidence.
- Use the Österreichisches Staatsarchiv Archivinformationssystem (AIS): https://www.oesta.gv.at/benutzung/Recherche-zu-Hause/recherche/bestande-ais.html
- Use the Austrian National Library's ANNO historical newspaper collection: https://anno.onb.ac.at/
- ANNO is a primary-source discovery and research resource, but OCR search results can contain recognition errors and contemporary newspaper reporting may be biased or incomplete. Verify important claims against the scanned page and, where possible, independent archival or scholarly evidence.
- For local history, identify the competent Landesarchiv, Stadtarchiv or Gemeindearchiv through the Austrian State Archives' archive register: https://www.oesta.gv.at/services/archivregister.html

### E. Nature, landscape and geology

**11. Umweltbundesamt Österreich**
- Protected areas: https://www.umweltbundesamt.at/umweltthemen/naturschutz/schutzgebiete
- National parks: https://www.umweltbundesamt.at/umweltthemen/naturschutz/schutzgebiete/nationalparks
- Use its national overview and linked official GIS/INSPIRE data for protected-area categories, national parks and environmental context.
- The overview aggregates data from provincial authorities. For exact legal status, designation date, boundaries and management rules, verify with the competent Bundesland authority or protected-area administration.

**12. Provincial nature-conservation authorities and protected-area administrations**
- Use the responsible Landesregierung, Naturschutzabteilung, Nationalparkverwaltung, Naturparkverwaltung or other competent management body for exact boundaries, conservation objectives, features, visitor access and current management information.
- A tourism page can help discover a site, but legal designation and protection status should be verified through the competent public authority.

**13. GeoSphere Austria and specialist scientific sources**
- GeoSphere Austria: https://www.geosphere.at/
- Use GeoSphere Austria for geology, geomorphology, geohazards, caves/karst where covered, earth-science maps, climate and related scientific evidence.
- For hydrology, use the competent federal/provincial hydrographic services and official water-management sources.
- For biodiversity, use the relevant provincial nature-conservation authorities, scientific institutions and protected-area administrations.
- Do not turn a regional landscape label into a precise natural feature without a source that supports the specific claim.

### F. Tourism, local discoveries, industry and contemporary visitor information

**14. Official tourism organisations**
- Use Österreich Werbung and the official tourism organisations of the Bundesländer, regions and municipalities for discovery of visitor attractions, routes, events, local narratives and visitor context.
- Österreich Werbung: https://www.austria.info/
- Regional tourism portals are discovery and visitor-information sources. Verify historical, scientific, heritage-protection and geographic claims with the competent primary institution wherever possible.
- Check whether information is current and distinguish permanent places from temporary events or seasonal operations.

**15. Official operators, museums, cultural institutions and site managers**
- Use the official website of a museum, attraction, transport operator, industrial heritage site, theatre, cultural institution or site manager for its own history, collection, opening status, visitor access and services.
- An operator is a primary source for its own current operation and visitor information, but not automatically an independent authority for contested historical, scientific or legal claims.

**16. Industry, technology, transport and company history**
- Prefer company archives, official industrial museums, municipal/state archives, technical museums, universities, specialist associations and contemporary primary documents.
- Company history pages may establish the company's own account and dates but should be corroborated for major historical claims, social impact, technical priority or disputed events.
- For railway and transport infrastructure, use the responsible infrastructure operator, public transport authority, transport museum, municipal/provincial authority and archival sources according to the claim.

**17. Academic, regional and established media sources**
- Use universities, peer-reviewed publications, scholarly books, specialist journals, regional museums, reputable historical societies and established journalism to add context, discover lesser-known stories and corroborate claims.
- These sources are valuable, but do not replace an available primary authority for official postal, cadastral, administrative or legal-protection status.
- Community platforms, user-generated maps and social media may generate leads only; they are not sufficient evidence for important facts or precise location claims.

### G. Source selection by claim

For every claim, ask which institution is competent to establish it:
- PLZ exists/current/historical postal purpose → Austrian Post; RTR as statutory published cross-check.
- PLZ attached to a real address and its postal area attribute → BEV Adressregister, checked against Austrian Post postal data.
- Municipality, political Bezirk, statutory city, Bundesland and official identifiers → Statistik Austria; competent municipality/province for local details.
- Exact address, access and building coordinates → BEV Adressregister and competent official geodata.
- Map orientation, roads, buildings and general topography → basemap.at, BEV and official provincial GIS.
- Monument inventory and protection → BDA; legal protection instrument checked against the relevant ordinance/record.
- UNESCO World Heritage status → UNESCO World Heritage Centre and Austrian UNESCO Commission.
- Protected area status and boundaries → competent provincial authority/protected-area administration, supported by Umweltbundesamt/INSPIRE overviews.
- Geology and earth science → GeoSphere Austria and relevant research institutions.
- Historical event, person or local narrative → archives, original documents, museum collections, specialist scholarship and ANNO as a discovery/source repository.
- Current visitor access, opening and operation → official site manager/operator or official tourism authority.
- Industry and technology history → company/archive primary records, technical museums, universities and specialist sources.

### H. Conflicts, evidence and citation practice

1. Do not rank sources globally. Rank them by competence for the exact claim.
2. Record both conflicting values and their source dates when Austrian Post, RTR, BEV, Statistik Austria or local authorities disagree.
3. Do not use a postal destination place as a substitute for a municipality name, and do not use a municipality's postal address as proof of a PLZ boundary.
4. A single BEV address point is evidence for that address, not for every address or the full extent of the PLZ.
5. Do not infer a PLZ polygon from address points, a municipal polygon, a postcode centroid, a postal-office location or a third-party map.
6. If the source does not establish an exact boundary, describe the supported relationship (address, locality, municipality association or representative point) and mark unresolved scope for review.
7. For each production record, preserve the exact official source URL and source title in the fields permitted by the schema. Fact sources must support the fact; the fact-location source must support the selected point. Do not cite one source for a claim it does not establish.
8. Record the date checked and the source's release/reference date where available in the relevant verification fields and working audit notes. Never invent a release identifier or date.
9. When no official source resolves an issue, use credible specialist evidence as a secondary source and explicitly preserve uncertainty. Do not silently convert a secondary interpretation into an official fact.
10. Keep source material in the language in which it was published where practical; translate the fact for TRAVEL only after the evidence and meaning are established.

## Shared TRAVEL compatibility

The Austrian technical record should remain compatible with the shared TRAVEL / EuropeExplorer architecture and its seven language branches (`cs`, `de`, `en`, `es`, `fr`, `it`, `nl`) unless a project-level decision changes the shared contract. Country-specific Austrian semantics belong in documentation and values, not ad hoc field names or enums.

## Established project decisions

The following decisions are settled and form the operating baseline for Austria:

- The content and map indexing unit is one complete geographic four-digit Austrian PLZ, stored as a string. Geographic eligibility and official source selection follow the rules in this profile; this is not an open design question.
- The shared TRAVEL record structure is used unchanged, apart from the Austrian four-digit PLZ pattern and country-specific descriptions. No Austrian-only fields or enum values are introduced.
- PLZ is the content layer. Municipalities, political Bezirke, statutory cities and Bundesländer are supporting administrative/search metadata, not substitutes for the PLZ content scope.
- Austrian source authorities and claim-specific source routing are defined in this profile.
- Every sequence item has one flat file at `data/austria/records/{postcode}.json`, matching Slovakia. Initially it contains only `postcode` and `status: "placeholder"` (optional `data_version` may be omitted or null). The operational data path is placeholder → complete rework and schema validation (`validated`) → separate final audit → V5 → approval → `published` on GitHub → copy of published records to Neon. GitHub is the authoritative working and publication source; Neon receives the published copy.
- `sequence.json` is the canonical, complete inventory of approved geographic Austrian PLZ and the authoritative work order. It is a production input, not a future preparation task.
- Each production record is researched and reworked to the complete standard on GitHub, replacing its placeholder. Only a complete schema-valid record may be marked `validated`; it is then separately audited, prepared as V5, approved and marked `published`. Placeholders are not audit or publication candidates. Only published GitHub records are copied to Neon.
- Project specifications, source hierarchy, schema, content requirements and workflow rules are complete and apply immediately. They must not describe a provisional system, defer required content or use future placeholders. If a document is incomplete or contradictory, align it to the complete shared standard before the affected work continues.

GitHub is the authoritative working and publication source; Neon contains the published copy. Rework, audit and publication are distinct record lifecycle stages and do not imply that any project specification or schema is unfinished.
