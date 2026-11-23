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

---

## Sdílený technický a redakční kontrakt TRAVEL — povinné části převzaté z českého originálu

Následující oddíly přebírají společné technické standardy TRAVEL. Jejich struktura, hodnoty, identifikátory a validační logika musí zůstat sjednocené s českým originálem. Rakouské úpravy se týkají pouze místních reálií, autorit a významu geografických údajů; nesmějí svévolně měnit sdílené technické kontrakty.

## 11. Obsahové kategorie

Fakta se zařazují podle svého hlavního tématu. Kategorie jsou redakční klasifikace, nikoli pořadí důležitosti.

Používej pouze hodnoty povolené v aktuálním `schema.json`. Význam kategorií:

- `nature_and_landscape` — příroda, krajina, geologie, vodstvo a chráněná území;
- `heritage_and_monuments` — památky, historické objekty, archeologie a kulturní dědictví;
- `architecture_and_urbanism` — architektura, urbanistická struktura, plánování a vývoj zástavby;
- `history` — historické události, období a vývoj místa;
- `culture_and_industry` — kultura, tradice, průmysl, řemesla, výroba, značky a produkty;
- `people` — osobnosti s doloženou vazbou na místo;
- `geography_and_context` — geografické a územní souvislosti;
- `tourism_and_surroundings` — návštěvnická místa a turistické souvislosti, pokud splňují geografické pravidlo;
- `hidden_gem` — skutečně neobvyklá, doložená a překvapivá místní zajímavost;
- `local_story` — specifický místní příběh, který nelze vhodně zařadit jinam;
- `other_verified_significance` — jiný doložený význam, pro který není vhodnější kategorie.

Kategorie `hidden_gem` není odměna za malou nebo málo známou atrakci. Musí jít o skutečně neobvyklou informační hodnotu.

Kategorie jsou sdílené v rámci TRAVEL a Europe Exploreru. V Rakousku používej pouze ty, které se pro konkrétní fakt hodí; není nutné využít všechny kategorie.

---

---

## 11A. Jednotné mapové kategorie TRAVEL

Každý fakt MUSÍ mít právě jednu vlastnost `map_category`. Jde o stabilní, jazykově neutrální klasifikaci hlavního tématu faktu, podle které Europe Explorer v budoucnu vybere mapovou ikonu. Nenahrazuje ani nemění obsahovou vlastnost `category`, která zůstává širší redakční/výzkumnou klasifikací.

Používej výhradně těchto 17 hodnot:

| map_category | Orientační symbol | Význam a pravidlo přiřazení |
|---|---|---|
| `castle` | 🏰 | Hrady, zámky, tvrze, pevnosti, opevnění, zámecká sídla a jejich zříceniny. |
| `religious_site` | ⛪ | Kostely, katedrály, kaple, kláštery, synagogy, mešity, poutní a další primárně náboženská místa. |
| `historical_monument` | 🗿 | Pomníky, památníky, pamětní místa, historické monumenty, významné kašny a veřejná pamětní/umělecká díla, která nejsou lépe zařaditelná jinam. |
| `architecture` | 🏛️ | Jednotlivé významné stavby a architektonická díla, pokud jejich hlavní identitou není hrad, náboženská stavba, muzeum ani technické dědictví. |
| `historic_city` | 🏙️ | Historická centra, stará města, náměstí, ulice a souvislé historické urbanistické celky; nikdy ne jednotlivá budova. |
| `museum` | 🖼️ | Muzea, galerie, skanzeny, sbírky, pamětní a dokumentační centra a návštěvnická centra, jejichž hlavním účelem je prezentace či výklad sbírek, historie nebo tématu. |
| `archaeological_site` | 🏺 | Archeologická naleziště, pravěká sídliště, vykopávky a další lokality, jejichž hlavní hodnotou je archeologický výzkum nebo dochované archeologické pozůstatky. |
| `nature` | 🌳 | Chráněná území, přírodní útvary, lesy, vodopády, jezera, řeky, biotopy, geologické jevy a další přírodní lokality. |
| `viewpoint_landscape` | 🏞️ | Rozhledny, vyhlídky, panoramata, výrazné scenérie a krajinné oblasti, jejichž hlavní návštěvnickou hodnotou je výhled nebo krajina. |
| `park_garden` | 🌷 | Veřejné a historické parky, zahrady, botanické zahrady, arboreta, zoologické zahrady, safari, ptačí parky, akvária a motýlí domy; tedy spravované parky a živé kolekce. |
| `technical_heritage` | ⚙️ | Technické, průmyslové, hornické, energetické, dopravní a inženýrské dědictví, historické továrny, doly, železnice, mosty a infrastruktura. |
| `cultural_site` | 🎭 | Divadla, operní domy, koncertní sály, kulturní domy a další fyzická místa, jejichž hlavní funkcí je živé umění nebo veřejná kulturní činnost. Neplatí pro muzea. |
| `visitor_attraction` | 🎡 | Významné návštěvnické zážitky a atrakce bez přesnější hlavní kategorie, například zábavní a vodní parky, zpřístupněné jeskyně a podzemí, historické lázně, vyhlídkové plavby či návštěvnické provozy. |
| `local_culture` | 🎎 | Místní tradice, folklor, zvyky, řemesla, slavnosti, gastronomické dědictví a další nehmotné nebo komunitní kulturní jevy, nikoli jejich samostatná budova či kulturní venue. |
| `science_site` | 🔭 | Významná a návštěvnicky relevantní vědecká či výzkumná místa, například observatoře, planetária, vědecká centra a zpřístupněné výzkumné instituce. Běžná škola či univerzita sem automaticky nepatří. |
| `personality` | 👤 | Fakt, jehož hlavním tématem je konkrétní osobnost s doloženou vazbou na dané PSČ, bez ohledu na fyzické místo použité pro mapový bod. |
| `sports_venue` | 🏟️ | Významné stadiony, sportovní arény, historická sportoviště a sportovní areály s doloženou návštěvnickou, historickou nebo širší veřejnou hodnotou. |

Uvedené symboly jsou pouze orientační tematické příklady. Nejsou součástí JSON ani závazným grafickým assetem. Budoucí sada mapových ikon bude navázána na stabilní hodnoty `map_category`; změna vzhledu ikony nesmí vyžadovat změnu datových identifikátorů.

### Závazná pravidla klasifikace

- Rozhoduje **hlavní téma faktu**, nikoli pouze objekt, na jehož souřadnicích je umístěn pin.
- Každý fakt má přesně jednu mapovou kategorii. Nepoužívej kombinované hodnoty, vlastní varianty ani ad hoc nové kategorie.
- Pokud je hlavním tématem konkrétní osoba, použij vždy `personality`, i když je pin umístěn u jejího domu, pracoviště, muzea, památníku, hrobu nebo reprezentativního bodu PSČ. Osoba zmíněná pouze okrajově kategorii nemění.
- Hrad, zámek, tvrz nebo pevnost patří do `castle`; náboženská stavba či poutní místo do `religious_site`; muzeum nebo galerie do `museum`; archeologická lokalita do `archaeological_site`.
- Souvislý historický městský celek patří do `historic_city`, jednotlivá významná stavba do `architecture`, pokud nemá přesnější kategorii výše.
- Technická či průmyslová funkce/identita má přednost před obecným označením architektury. Historická vodní infrastruktura patří do `technical_heritage`; přírodní vodní útvar do `nature`.
- Chráněná příroda a přírodní útvary patří do `nature`; vyhlídka nebo krajina, jejíž hlavní hodnotou je panorama, do `viewpoint_landscape`.
- Botanické zahrady, arboreta, zoologické zahrady, akvária a obdobné živé kolekce patří do `park_garden`. Zábavní a vodní parky patří do `visitor_attraction`.
- Fyzické místo určené primárně živému umění patří do `cultural_site`; muzeum zůstává `museum`. Tradice a nehmotné kulturní jevy patří do `local_culture`.
- Vědecké místo musí mít skutečný vědecký/výzkumný charakter a samostatnou návštěvnickou, historickou nebo veřejnou hodnotu; běžné vzdělávací instituce automaticky nezařazuj do `science_site`.
- Významný sportovní areál patří do `sports_venue`; běžné sportovní hřiště nebo lokální zařízení bez zvláštního významu není automaticky samostatným faktem.
- `visitor_attraction` je záchytná kategorie pouze tehdy, když hlavní podstata místa/zážitku nespadá do žádné přesnější kategorie. Nepoužívej ji místo hradu, muzea, přírodní lokality, technického dědictví apod.
- UNESCO není samostatná mapová kategorie. Zařaď lokalitu podle její skutečné podstaty.
- Vojenská historie sama o sobě neurčuje kategorii: pevnost může být `castle`, bojiště nebo pamětní místo `historical_monument`, vojenská technika či infrastruktura `technical_heritage`.
- Kategorie neurčuje prioritu, pořadí, význam ani to, zda fakt do databáze patří. Hodnota je jazykově neutrální a nepřekládá se v sedmi jazykových verzích.
- Mapová kategorie a geografická poloha jsou dvě nezávislé informace. Kategorii nikdy neodvozuj pouze z typu nebo názvu souřadnicového bodu.

Při hraničním případu vyber kategorii podle primární identity a hlavního sdělení faktu, uplatni výše uvedená pravidla přednosti a v pracovních poznámkách stručně zdůvodni volbu. Pokud nelze hlavní téma určit, fakt nejprve redakčně vyjasni; neřeš nejasnost vytvořením nové kategorie.

---

---

## 12. Priorita faktů

Používej priority A–D podle skutečného významu faktu v kontextu daného místa.

### A — mimořádný význam

Například:
- památka nebo lokalita mimořádného mezinárodního či národního významu;
- UNESCO;
- významná národní přírodní lokalita;
- zásadní historická událost;
- osobnost mimořádného významu s pevnou vazbou na místo;
- významný průmyslový, vědecký nebo technický počin s národním či mezinárodním dopadem.

### B — mimořádná skrytá zajímavost

Například:
- nečekaně významný místní objekt;
- vzácně dochovaný prvek;
- málo známý, ale dobře doložený historický, kulturní, technický nebo přírodní příběh;
- místní skutečnost s významem nepoměrně větším, než naznačuje její velikost nebo známost;
- fakt, který silně naplňuje princip „tohle jsem o tom místě vůbec nevěděl“.

Skrytá zajímavost musí být skutečně specifická, překvapivá, doložená nebo mimořádně užitečná. Malý objekt automaticky neznamená prioritu B.

### C — silný regionální význam

Například:
- významná regionální památka;
- důležitá přírodní lokalita;
- průmyslové nebo technické dědictví regionálního významu;
- významná regionální turistická atrakce;
- osobnost, dopravní nebo kulturní historie s výrazným regionálním dopadem.

### D — místní význam

Například:
- méně známá místní osobnost;
- lokální řemeslo nebo průmyslová historie;
- menší historický objekt;
- místní událost;
- zajímavý, ale převážně lokální přírodní nebo kulturní prvek.

Priorita je kontextová. Fakt může být v jednom PSČ zásadní a v jiném méně významný. Nepřiděluj A nebo B jen proto, že je něco staré, hezké, malé nebo neobvyklé.

---

---

## 19. Sedm jazyků a lokalizace

Každý záznam obsahuje sedm povinných jazykových verzí:

- `cs` — čeština;
- `de` — němčina;
- `en` — angličtina;
- `es` — španělština;
- `fr` — francouzština;
- `it` — italština;
- `nl` — nizozemština (standardní nizozemština `nl-NL`, formulovaná přirozeně a srozumitelně i vlámským čtenářům).

Všech sedm jazyků musí obsahovat přesně stejnou sadu ID faktů a zachovat jejich pořadí.

### 19.1 Významová shoda

Překlady musí zachovat:
- význam a podstatu faktu;
- jména a oficiální názvy;
- data, číselné údaje a historické souvislosti;
- míru jistoty a rozlišení mezi faktem, tradicí a legendou;
- geografickou vazbu;
- pořadí a redakční prioritu faktů.

Překlad nesmí přidávat nové skutečnosti, vynechávat podstatné informace ani měnit význam originálu.

### 19.2 Přirozený jazyk

Každá jazyková verze musí znít přirozeně pro rodilého nebo zkušeného čtenáře daného jazyka.

- Nepřekládej mechanicky větu po větě.
- Nepřenášej českou skladbu do ostatních jazyků, pokud vzniká nepřirozený text.
- Používej běžné a zavedené cílové výrazy.
- Překládej popisné obecné výrazy, ale zachovávej oficiální vlastní názvy, pokud neexistuje zavedený překlad.
- Nevytvářej umělé překlady názvů, které by mohly změnit identitu místa.

### 19.3 Vysvětlování rakouských reálií

Pokud je název, instituce, tradice, historická událost nebo kulturní odkaz pro zahraničního čtenáře neznámý nebo nejednoznačný, vysvětli jej přirozeně při prvním relevantním výskytu v každém jazyce.

Vysvětlení má čtenáři sdělit, co daná věc je, jak funguje nebo proč je důležitá. Pouhý doslovný překlad názvu nestačí.

Příklady:
- U pojmů jako `Altstadt`, `historisches Zentrum`, `Ensemble` nebo `UNESCO-Welterbe` vysvětli, zda jde o historické městské jádro, chráněný soubor staveb nebo lokalitu světového dědictví; nepředpokládej, že samotný německý název zahraničnímu čtenáři vysvětlí jeho status.
- U rakouské tradice nebo svátku popiš stručně její podstatu, pokud ji zahraniční čtenář nemusí znát.
- U místního výrobku nebo průmyslového označení vysvětli, o jaký produkt či odvětví jde, pokud samotný název význam neprozrazuje.
- U historické instituce zachovej její oficiální název, ale přidej stručné vysvětlení její funkce.

Vysvětlení musí být:
- věcně správné;
- přiměřeně krátké;
- přirozené v cílovém jazyce;
- relevantní pro pochopení faktu.

Každý jazyk posuzuj samostatně. To, co je samozřejmé rakouskému čtenáři, nemusí být známé čtenáři německému, anglickému, španělskému, francouzskému nebo italskému. Cílem není pouze překlad, ale přirozené vysvětlení rakouských reálií, institucí, správních pojmů, tradic a historického kontextu. Rakouské vlastní názvy zachovávej a při prvním relevantním výskytu přidej stručné vysvětlení v cílovém jazyce.

### 19.4 Konzistence

- Zachovávej stejnou identitu míst a osob ve všech jazycích.
- Používej zavedený překlad názvu, pokud skutečně existuje a je běžný.
- Jinak ponech oficiální název a vysvětli jej v textu.
- Vysvětli pojem při prvním relevantním použití a zbytečně neopakuj dlouhou definici v dalších větách.
- Překlady reprezentativního místa musí označovat stejné jediné místo.

---

---

## 20. ID faktů a struktura záznamu

Každé faktum musí mít stabilní a jedinečné ID podle pravidel aktuálního `schema.json`.

- ID musí být jedinečné v rámci záznamu.
- Všech sedm jazyků musí používat přesně stejná ID.
- Pořadí faktů musí být ve všech jazycích totožné.
- Při překladu se ID nemění.
- Při redakční úpravě textu se ID nemění, pokud nejde o skutečně nový nebo odstraněný fakt.
- Nepoužívej stejné ID pro dva různé příběhy.
- Nevytvářej nové vlastnosti ani nepřejmenovávej existující pole mimo schválenou změnu schématu.

Povinná struktura faktu, povolené kategorie, zdroje, jazykové objekty a geografická metadata se řídí aktuálním `schema.json`. Při jeho revizi musí být tento standard a schéma znovu sladěny.

---

---

## 21. Fotografie a obrazové zdroje

Pokud záznam obsahuje fotografii, musí být její původ a podmínky použití dohledatelné.

- Nepoužívej fotografii, která zobrazuje jiné místo nebo jiný objekt.
- Nezaměňuj ilustrační fotografii za důkaz geografické polohy.
- Uveď zdroj, autora a licenci podle možností zdroje a struktury schématu.
- Nepředpokládej, že obrázek nalezený na internetu lze volně použít.
- Pokud není vhodná a důvěryhodně použitelná fotografie dostupná, je lepší ji neuvádět než použít zavádějící nebo právně problematický obrázek.

---

---

## 22. Kontrola duplicit a informační hodnoty

Před uložením porovnej fakta uvnitř záznamu i s relevantními sousedními PSČ.

Zkontroluj:
- zda dvě fakta nepopisují stejnou událost nebo atrakci;
- zda se stejná informace neopakuje pouze jinými slovy;
- zda se jedna fyzická atrakce nevyskytuje ve více PSČ;
- zda fakta přinášejí rozdílnou informační hodnotu;
- zda každé faktum skutečně patří do daného PSČ;
- zda kontext okolních míst není mylně prezentován jako místní fakt.

Dvě fakta o jednom objektu mohou existovat pouze tehdy, pokud popisují skutečně odlišné, samostatně významné příběhy a jejich rozdělení přináší čtenáři jasnou hodnotu. Nesmí jít o umělé rozdělení jednoho příběhu na více položek.

---

---

### 23.7 Technická validace
- Odpovídá JSON aktuálnímu `schema.json`?
- Neobsahuje nepovolená pole nebo hodnoty?
- Jsou ID jedinečná a správně navazující podle aktuálních pravidel?
- Jsou povinné údaje vyplněny?
- Jsou všechny jazykové verze strukturálně úplné?
- Jsou geografické a zdrojové údaje ve správných polích?

Záznam není hotový, pokud některá zásadní oblast zůstává neověřená. Nevyřešené problémy musí být jasně uvedeny; nesmějí se skrýt za označení „dokončeno“.

---

---

## 24. Závazná pravidla při reworku a zachování dat

Při přepracování existujících záznamů rozlišuj mezi obsahovou opravou, jazykovou opravou, geografickou opravou a technickou migrací.

- Neměň verzi datového záznamu, pokud k tomu není výslovný pokyn a schválený důvod.
- Nepřepisuj správná fakta jen kvůli stylistické preferenci.
- Neodstraňuj významné ověřené informace bez doloženého důvodu.
- Při změně faktu zachovej jeho identitu a ID, pokud stále popisuje tentýž příběh.
- Pokud je fakt chybný, duplicita nebo geograficky nesprávně přiřazený, oprav jej nebo vyřaď podle důkazů a zaznamenej důvod.
- Při čistě technické nebo geografické aktualizaci neměň texty, překlady, priority ani pořadí faktů, pokud to není výslovně součástí zadání.
- Při jazykové opravě zachovej faktický obsah a identitu faktu.
- Při migraci schématu nepřepisuj obsahové údaje, které migrace nemá měnit.

Každý rework musí zachovat ověřené informace a současně odstranit skutečné chyby. Nesmí se stát záminkou k neřízenému přepisování záznamu.

---

---

## 25. Produkční princip

Kombinace:

**`schema.json` + `CONTENT_STANDARD.md`**

je závazným základem všech rakouských TRAVEL záznamů.

Standard se mění pouze vědomou a verzovanou revizí. Nové požadavky se nesmějí do produkce zavádět neformálně ani pouze v jednotlivém promptu.

Cílem není „více informací“.

Cílem je:

**co nejvyšší hustota důvěryhodných, významných, geograficky správných a překvapivých informací bez balastu.**

Základní produkční postup:

**Nejprve ověř PSČ a území. Proveď rešerši. Najdi skutečné příběhy. Vyber to podstatné. Ověř geografickou vazbu. Napiš srozumitelná fakta. Lokalizuj do sedmi jazyků. Proveď závěrečný audit. Teprve potom publikuj.**


---

---

## 26. Řízený slovník typů míst u faktů

Rakouská část TRAVEL používá normalizovaný slovník typů míst se stejnými stabilními identifikátory jako odpovídající rakouské schéma. Slovník je veden samostatně v `data/austria/location_types.json`.

Závazná pravidla:

- Každé `facts[].location.type` musí používat jednu z hodnot definovaných v `data/austria/schema.json` a popsaných v `data/austria/location_types.json`.
- Identifikátory jsou stabilní anglické slugy v jednotném čísle.
- Typ popisuje druh místa, nikoli počet objektů. Použij například `historic_villa` pro jednu i více historických vil, `hill` pro jeden i více kopců a `pond` pro jeden i více rybníků.
- Množné varianty jako `historic_villas`, `hills` nebo `ponds` se nikdy nepoužívají.
- Významově odlišné typy neslučuj jen kvůli podobnému názvu. Nový typ přidej pouze tehdy, pokud existující hodnoty nedokážou přesně popsat místo.
- Do záznamů se ukládá stabilní ID, nikoli volný text. Česká označení typů jsou uvedena v samostatném slovníku, protože čeština je zdrojovým jazykem obsahu TRAVEL.
- Tento slovník popisuje `location.type`; nenahrazuje redakční `facts[].category`. Jde o dvě různé informace.
- Změna rakouského slovníku nesmí automaticky měnit německé schéma, německé záznamy ani jejich historické hodnoty.

U nových nebo přepracovaných faktů uveď `location` jako samostatnou polohu konkrétního objektu, pokud ji lze důvěryhodně určit. Pokud ji určit nelze, použij `null`. Nikdy nekopíruj do `location` souřadnice reprezentativního nebo přístupového bodu PSČ, pokud tyto body skutečně nejsou polohou samotného faktu.

---

## Závazné doplnění: geografické umístění faktů na mapě

Toto pravidlo upřesňuje a nahrazuje všechna starší ustanovení tohoto dokumentu, která by vedla k použití `location: null` pouze kvůli chybějící přesné souřadnici.

**Cíl: každé smysluplně lokalizovatelné faktum musí dostat použitelný mapový bod.** Nevyžadujeme geodetickou přesnost ani souřadnice přesně na centimetr. Přibližný, ale geograficky smysluplný bod je lepší než prázdná poloha a skrytý pin. `location: null` je až poslední možnost, nikoli běžná reakce na chybějící přesnou polohu.

Použij následující hierarchii:

1. **Konkrétní objekt nebo místo:** umísti pin na skutečnou polohu objektu (budova, památník, muzeum, most, nádraží apod.).
2. **Rozlehlá lokalita:** zvol reprezentativní bod uvnitř skutečného území lokality. U parku, lesa, areálu, přírodní rezervace, jezera nebo rozsáhlého komplexu nemusí být bod na jediné přesně určené atrakci; může ležet například na cestě, u vstupu, u vyhlídky nebo na jiném vhodném místě uvnitř území. Důležité je, aby pin ležel v lokalitě a rozumně ji zastupoval.
3. **Historický objekt nebo událost s neznámou přesnou polohou:** použij doloženou přibližnou polohu, pokud ji lze určit. Pokud ne, umísti orientační pin do centra historické obce nebo její veřejné orientační místo: náves, náměstí, radnici, Gemeindeamt / Magistrat, případně informační centrum nebo jiný zásadní veřejný bod. Takový pin označ jako přibližný/historicky přibližný podle skutečné povahy nejistoty; nesmí předstírat, že historický objekt či událost stály přesně na tomto bodě.
4. **Historie obce nebo městského obvodu:** použij její náves, hlavní náměstí, radnici, úřad městského obvodu nebo Bezirksamt nebo jiné jasné veřejné centrum, které čtenáři pomůže místo na mapě najít.
5. **Doprava a infrastruktura:** použij příslušné nádraží, zastávku, terminál, dopravní uzel nebo konkrétní infrastrukturní bod, ke kterému se informace tematicky vztahuje.
6. **Další místní téma bez jediného bodu:** vyber nejvhodnější veřejný orientační bod v místě, se kterým je příběh skutečně spojen. Pokud je fakt o oblasti PSČ jako celku, lze použít `representative_point` podle pravidel pro `postal_area`.

### Přesnost, typ a zdroj

- Zvol `accuracy` podle skutečné přesnosti: `exact` jen pro ověřenou polohu konkrétního objektu; `approximate` pro přibližný bod; `area_representative` pro reprezentativní bod rozlehlé lokality; `historical_approximate` pro nejistou historickou polohu. Používej pouze hodnoty povolené aktuálním schématem.
- `name` má popisovat skutečný bod, na kterém pin leží (například název náměstí, radnice, zastávky nebo reprezentativního místa), nikoli předstírat přesné umístění samotného faktu.
- `type` vybírej podle skutečného fyzického typu zvoleného bodu a podle povoleného rakouského slovníku `location_types.json`/schématu.
- `source` musí podporovat polohu použitého bodu nebo umožnit její nezávislé ověření. U orientačního bodu stačí doložit existenci a polohu tohoto bodu; zdroj nemusí dokazovat, že se historická událost odehrála přesně tam. Obsahové zdroje nadále samostatně dokládají samotný příběh.
- Přibližný pin je orientační pomůcka pro mapu. Text faktu nesmí tvrdit, že se událost nebo objekt nacházely přesně v bodě, který byl zvolen pouze jako orientační náhrada.
- Nekopíruj automaticky `representative_point` ani `access_point`; použij je jen tehdy, když skutečně odpovídají zvolenému pravidlu pro daný fakt.
- Pokud lze určit alespoň smysluplnou oblast nebo veřejný orientační bod, `location` nesmí být `null` jen kvůli chybějící přesné poloze. `null` použij pouze tehdy, když nelze odpovědně určit ani konkrétní, přibližný, reprezentativní či orientační bod.

**Při tvorbě i reworku aktivně hledej použitelný bod pro mapu. Při auditu považuj `null` za nález, který je nutné zkusit vyřešit touto hierarchií; ponech jej pouze po doložení, proč není možné určit žádný smysluplný bod.**
