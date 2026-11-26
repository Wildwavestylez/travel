# Finální audit PSČ 28401–28601 — Kutnohorsko, Posázaví a Čáslavsko

**Kanonické ID:** `CZ-KUTNOHORSKO-28401-28601`  
**Datum auditu:** 2026-11-26  
**Pravidla:** `data/czechia/prompt_audit.md` V2.1  
**Výsledek:** **REVIEW REQUIRED — sémantická kontrola dokončena, 38 z 44 původně chybějících poloh doplněno; zbývá 6 nejednoznačných poloh a auditní položky.**  
**Publikace / záloha:** neprovedena; nebyla vyžádána.

## 1. Rozsah a inventář

Rozsah byl sestaven z `data/czechia/sequence.json`, odpovídající skupiny `Středočeský kraj – řada 28xxx` a sdíleného RÚIAN inventáře `data/czechia/reference/ruian_postcodes.csv`.

- **36/36 PSČ** nalezeno v sekvenci, příslušné skupině, RÚIAN inventáři i Supabase.
- **275 faktů** v 36 záznamech.
- Nejvyšší skutečně evidované PSČ v tomto rozsahu je `28601`; v sekvenci nejsou žádná PSČ `287xx`.
- `sequence.json` ani pořadí PSČ nebyly změněny.

Přesný seznam:

`28401, 28403, 28404, 28501, 28502, 28504, 28506, 28507, 28509, 28510, 28511, 28521, 28522, 28523, 28525, 28531, 28532, 28533, 28541, 28542, 28543, 28545, 28546, 28547, 28561, 28562, 28563, 28564, 28565, 28571, 28572, 28573, 28574, 28575, 28576, 28601`

Aktuální stav záznamů byl zachován:
- 29 `validated`, 7 `placeholder`;
- 19 záznamů `data_version=1`, 16 záznamů `data_version=2`, 1 záznam `data_version=6`.
- Nebyly měněny statusy ani verze.

## 2. Zásadní turistická úplnost

Hlavní památkové dominanty jsou zastoupeny: Kutná Hora (UNESCO, chrám sv. Barbory, Vlašský dvůr, kostel sv. Jakuba, Hrádek, Kamenná kašna, Jezuitská kolej/GASK, Bylany, Malín, Vojtěšský akvadukt, Kačina, Sion a údolí Vrchlice), Sedlec, Sázavský klášter, Zruč nad Sázavou a baťovská historie, Rataje nad Sázavou, Žleby, Čáslav a další lokální centra. **Nebyla potvrzena další chybějící monumentální památka, která by vyžadovala nový fakt.**

Byly však potvrzeny tyto významné obsahové mezery:

### HIGH — 28401 Kutná Hora: osobnosti

V existujících 15 faktech chybí významné kutnohorské osobnosti:
- **Josef Kajetán Tyl (1808–1856)** — narodil se v Kutné Hoře; zásadní dramatik českého národního obrození a autor textu české hymny.
- **Mikuláš Dačický z Heslova (1555–1626)** — kutnohorský rodák, kronikář a autor Pamětí; významný pramen k dějinám města i širším českým dějinám.
- **Jiří Orten (1919–1941)** — kutnohorský rodák a významný český básník.

Doporučené zdroje:
- České muzeum stříbra — Josef Kajetán Tyl: https://www.cms-kh.cz/node/21
- Národní divadlo — Josef Kajetán Tyl: https://www.narodni-divadlo.cz/cs/profil/josef-kajetan-tyl-1594657
- České muzeum stříbra / Kutnohorsko 3/2000 — Mikuláš Dačický: https://www.cms-kh.cz/sites/default/files/books/kutnohorsko-vlastivedny_sbornik_03-00.pdf
- UČL AV ČR — Slovník českých spisovatelů, Mikuláš Dačický: https://edicee.ucl.cas.cz/images/data/prirucky/obsah/Slovn%C3%ADk%20%C4%8Desk%C3%BDch%20spisovatel%C5%AF/%C4%8Capek%20-%20Fuks%20%28s.%2055-110%29.pdf
- Klub rodáků a přátel Kutné Hory — Jiří Orten: https://www.klubrodaku-kutnahora.cz/vyznacni-rodaci/jiri-orten/

### HIGH — 28401 Kutná Hora: vypálení města roku 1424

Chybí samostatné zachycení úplného vypálení Kutné Hory vojskem Jana Žižky po bitvě u Malešova 17. června 1424. Nejde o duplicitu bitvy u Malešova, která má primární přiřazení v PSČ 28541: samostatným místem události a jejím důsledkem je Kutná Hora (28401).

Odborná publikace Josefa Šimka navíc rozlišuje dřívější částečné vypálení města Zikmundovým vojskem v roce 1422 a úplné zničení v roce 1424. Při případném zpracování je vhodné obě události zasadit do jednoho souvislého příběhu, nikoli zaměňovat s vlastní bitvou u Malešova.

Zdroj: Josef Šimek, *Kutná Hora v XV. a XVI. století*, s. 4–5: https://www.muzeumkh.cz/sites/default/files/books/simek-kutna-hora.pdf

### HIGH — 28601 Čáslav: Čáslavský sněm roku 1421

V sedmi existujících faktech chybí samostatný fakt o Čáslavském sněmu z 3.–7. června 1421. Jednání probíhala v kostele sv. Petra a Pavla; sněm schválil husitský program čtyř pražských artikulů, odmítl Zikmunda a ustavil dvacetičlennou zemskou vládu, do níž byl zvolen i Jan Žižka. Jde o událost celostátního významu a přímé spojení s městem.

Zdroje:
- Město Čáslav — oficiální historie: https://www.meucaslav.cz/radnice/mesto/historie/
- Čáslavský sněm 1421 — odborný historický přehled: https://caslav.evangnet.cz/archiv/caslavsky_snem_1421/caslavsky_snem_1421.pdf
- AHISTO — regest usnesení z 7. června 1421: https://www.rbmonline.cz/portal/regest/2b42d26aaa

**Nové fakty zatím nebyly do databáze přidány.** Jde o auditní nálezy připravené pro následné doplnění; tím se předejde neodsouhlasenému rozšiřování obsahu a zachová se oddělení auditu od reworku.

## 3. PSČ, správní údaje a duplicity

- Všech 36 záznamů má shodnou identitu `content.postcode` a databázového PSČ.
- Všech 36 má vyplněné správní údaje `county` a `state`, reprezentativní místo a reprezentativní bod.
- Geografické přiřazení odpovídá zásadě sídla obslužné pošty; například 28506 správně uvádí Sázavu a okres Benešov, i když poštovní obvod zasahuje i do okresu Kutná Hora.
- Nebyly zjištěny duplicitní názvy faktů ani duplicitní české texty napříč blokem.
- RÚIAN inventář je použit jako sdílený podklad; nebyl znovu stahován ani reprocessován.

## 4. Kategorie mapy a technické opravy

Byly nalezeny a opraveny dvě neplatné hodnoty `map_category`:
- 28572 / `fact_004` — `market` → `local_culture`;
- 28601 / `fact_006` — `industrial_heritage_site` → `technical_heritage`.

Read-back potvrdil obě nové hodnoty. Následná cílená kontrola celého bloku:
- 0 neplatných `map_category`;
- 0 neplatných `source.type`;
- 0 neplatných `location.type`;
- 0 neplatných vlastností objektů `content.sources` podle schématu;
- při revalidaci byly hodnoty `location.type` mimo enum schématu převedeny na nejbližší povolené typy: `archaeological_area` → `archaeological_site`, `birthplace_area` → `historic_village`, `chateau` → `castle`, `event_area` → `historic_village`, `farmstead` → `farm`, `former_industrial_site` → `historic_industrial_site`, `historic_building` a `historic_granary` → `building`, `religious_monument` → `monument`, `mill` → `historic_mill`, `mining_area` → `historic_mine`, `memorial_area` → `memorial_site`, `military_airbase` → `airport`, `river_management_area` → `waterway`, `historic_monument` → `building`, `local_culture` → `historic_village`.
- 0 prázdných seznamů zdrojů.

### Normalizace zdrojů

U záznamů 28563 a 28564 obsahovaly objekty `content.sources` nepovolené vlastnosti `id`, na které odkazovaly `facts[].sources`. Pro zachování vazby byly reference převedeny na odpovídající URL a vlastnosti `id` odstraněny z katalogu zdrojů.

Read-back potvrdil:
- žádné další nepovolené vlastnosti zdrojových objektů;
- 0 nevyřešených referencí v těchto dvou záznamech;
- žádné chybějící URL.

Zbývá nejednoznačnost u záznamů **28522, 28523, 28525 a 28531**: fakta používají aliasy `s1`, `s2` atd., ale katalogové objekty zdrojů nemají explicitní `id`. Je možné, že jde o implicitní pořadové indexy, avšak bez závazného pravidla to nelze bezpečně potvrdit. Označeno `REVIEW REQUIRED`; reference nebyly svévolně přemapovány.

## 5. Překlady a sémantická kontrola

Kontrola všech sedmi jazyků `cs, de, en, es, fr, it, nl` po reworku:
- 36/36 záznamů má všech sedm jazyků;
- 0 rozdílů v počtu faktů, pořadí a ID mezi masterem a překlady;
- 0 prázdných překladových titulů či textů;
- 0 rozdílů mezi českým master textem a `translations.cs`;
- 0 cizojazyčných textů kratších než 35 % odpovídajícího českého masteru.

Proběhla obsahová sémantická kontrola všech **275 faktů** napříč šesti cizojazyčnými sadami. Kontrolovaly se vynechané věty a údaje, historická chronologie, vlastní jména, vztahy mezi místy, terminologie a useknuté překlady. Nejde o certifikovanou korekturu rodilými mluvčími.

Cíleně opravené překladové nedostatky:
- 28501 / `fact_002` — plný překlad doplněn o 69 hrobů, ostatky 72 osob, uspořádání ve třech dlouhých domech, dobu využívání pohřebiště 75–100 let a uložení nálezů v Národním muzeu; česká položka synchronizována s masterem;
- 28504 / `fact_001`, `fact_003`, `fact_007` — kompletní překlady kostela sv. Jiljí, synagogy a Vavřineckého rybníka; předtím některé jazyky obsahovaly pouze závěrečnou větu;
- 28506 / `fact_005` — krátký master o hradišti Na Šancích rozšířen o polohu, rozsah 12 ha, členění valy, rozměry opevnění, dataci do 9. století, nález avarsko-slovanského kování a opatrně formulované hypotézy; přeloženo do všech jazyků;
- 28507 / `fact_003` a `fact_006` — české překlady synchronizovány s masterem;
- 28522 / `fact_007` — do všech cizojazyčných překladů doplněna informace o pozdějších úpravách kostela včetně pozdní gotiky;
- 28523 / `fact_002` — ve všech sedmi jazycích nahrazen krátký poznámkový fragment úplným překladem masteru;
- 28532 / `fact_004` až `fact_006` — překlady doplněny o archeologické detaily, dataci a souvislosti památníků a mlýna.

Read-back potvrdil opravené texty a synchronizaci českých masterů.


## 6. Délka českých master textů

Po rozšíření 28506 / `fact_005` zůstává **11 faktů kratších než 350 znaků**. Nejde automaticky o chyby; některé popisují drobnou památku nebo stručnou místní tradici. Nebyly doplňovány výplňové věty bez ověřených údajů.

| PSČ | Fakt | Znaků |
|---|---|---:|
| 28509 | fact_019 — Pomník obětem světových válek | 331 |
| 28511 | fact_001 — Utrakvistická tradice | 340 |
| 28511 | fact_003 — Obecní zvonička z roku 1887 | 316 |
| 28511 | fact_006 — Náveský rybník | 335 |
| 28522 | fact_004 — Rozhledna Babka | 326 |
| 28522 | fact_006 — Kostel sv. Martina v Petrovicích II | 326 |
| 28525 | fact_005 — Trojboká kaplička | 336 |
| 28547 | fact_003 — Zámek Křesetice | 337 |
| 28547 | fact_007 — Kaple sv. Jana Nepomuckého | 322 |
| 28563 | fact_004 — Tradice ochotnického divadla | 312 |
| 28576 | fact_003 — Kostel svatého Václava | 349 |

Tyto položky zůstávají doporučeným obsahovým review, nikoli automatickým důvodem k umělému prodlužování.


## 7. Souřadnice a mapové body

- Po cíleném geokódování a doplnění reprezentativních bodů zůstává v bloku **6 faktů s `location = null`**; z původních 44 null poloh bylo 38 vyřešeno.
- Nové a opravené polohy používají zdroj, název, typ, adresu a míru přesnosti. Přesné body jsou označeny `exact`, přibližné `approximate` a body pro širší lokalitu `area_representative`.
- Read-back potvrdil 0 neplatných souřadnicových rozsahů a 0 vyplněných poloh bez povinných metadat.
- Byly opraveny také zjevné záměny poloh mezi obcemi u záznamů 28502, 28532, 28547, 28574, 28575 a 28576.
- Finální kontrola enumu potvrdila 0 neplatných `location.type`.

Zbývajících šest null poloh:
- 28501 / `fact_002` — pohřebiště Miskovice 2 / Velký Patera; přesný bod samotného naleziště se nepodařilo bezpečně určit;
- 28502 / `fact_006` — socha sv. Markéty u silnice na Miskovice; bez ověřené přesné polohy;
- 28522 / `fact_008` — místo střelby na silnici mezi Slavošovem a Dolní Pohlédí; přesný bod není doložen;
- 28525 / `fact_005` — trojboká kaplička na okraji Bohdanče; nalezen popis polohy, nikoli bezpečně ověřené souřadnice;
- 28547 / `fact_004` — fakt sdružuje tři sochy na různých místech, jeden bod by byl zavádějící;
- 28562 / `fact_002` — širší archeologické území jihozápadně od Hostovlic bez přesně vymezeného bodu.

`explorer_map_points` bylo načteno pouze pro ID těchto 36 PSČ; v tomto rozsahu nebyly nalezeny žádné mapové body. Žádná ruční synchronizace mapového indexu nebyla provedena.


## 8. Výsledek a další krok

**Výsledek: REVIEW REQUIRED.**

Dokončeno:
- inventář a porovnání 36/36 PSČ a 275 faktů;
- sémantická kontrola všech 275 faktů ve všech šesti cizojazyčných překladech;
- 0 chybějících jazyků, 0 rozdílů v pořadí/ID, 0 rozdílů `translations.cs` proti masteru a 0 cizojazyčných textů pod 35 % délky masteru;
- opravy významových vynechávek v 28501, 28504, 28506, 28522, 28523 a 28532;
- oprava 2 mapových kategorií a normalizace typů poloh podle schématu;
- doplnění či oprava 38 poloh, 6 nejednoznačných null poloh zůstává;
- normalizace zdrojových referencí v 28563 a 28564.

Otevřeno:
1. doplnit zásadní osobnosti Kutné Hory (Tyl, Dačický, Orten);
2. doplnit příběh vypálení Kutné Hory v roce 1424 (samostatně od bitvy u Malešova);
3. doplnit Čáslavský sněm 1421;
4. podle nových zdrojů případně rozšířit 11 krátkých českých master textů;
5. vyřešit explicitní mapování aliasů zdrojů `sN` v 28522, 28523, 28525 a 28531;
6. případně provést rodilou jazykovou korekturu, která je nad rámec provedené sémantické kontroly.

Samostatný AJV běh nebyl spuštěn podle závazného promptu. Nebyla provedena publikace V5, záloha, import do jiné databáze ani read-only zamykání. `sequence.json`, statusy a verze zůstávají beze změny.
