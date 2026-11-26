# Finální audit PSČ 28401–28601 — Kutnohorsko, Posázaví a Čáslavsko

**Kanonické ID:** `CZ-KUTNOHORSKO-28401-28601`  
**Datum auditu:** 2026-11-26  
**Pravidla:** `data/czechia/prompt_audit.md` V2.1  
**Výsledek:** **REVIEW REQUIRED — původních pět historických faktů a další čtyři zásadní osobnostní příběhy doplněny; opraveno chybné datum bitvy u Malešova v 28401/fact_019; všech 10 chybějících polohových údajů vyřešeno; čtyři z pěti krátkých master textů rozšířeny a zdrojové vazby v problematických záznamech normalizovány. Pokračuje povinná kontrola mezinárodní srozumitelnosti celého bloku. Zbývá jeden krátký master.**  
**Publikace / záloha:** neprovedena; nebyla vyžádána.

## 1. Rozsah a inventář

Rozsah byl sestaven z `data/czechia/sequence.json`, odpovídající skupiny `Středočeský kraj – řada 28xxx` a sdíleného RÚIAN inventáře `data/czechia/reference/ruian_postcodes.csv`.

- **36/36 PSČ** nalezeno v sekvenci, příslušné skupině, RÚIAN inventáři i Supabase.
- **284 faktů** v 36 záznamech (280 původních + 4 nově doplněné osobnosti).
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

Do databáze byly doplněny tři samostatné příběhy:
- **fact_016 — Josef Kajetán Tyl (1808–1856):** rodný dům v Kutné Hoře, české divadlo, Kajetánské divadlo a píseň Kde domov můj z Fidlovačky, jejíž text se stal základem české hymny.
- **fact_017 — Mikuláš Dačický z Heslova (1555–1626):** rodák z Dačického domu, autor Pamětí a kronikář každodenního života, požárů, epidemií i politických a náboženských událostí.
- **fact_018 — Jiří Orten (1919–1941):** kutnohorský rodák, jeho školní léta, nucený odchod z konzervatoře kvůli židovskému původu, literární pseudonymy a hlavní sbírky.

Každý příběh má samostatný bod u příslušného rodného domu a plné překlady do jazyků de, en, es, fr, it a nl.

Zdroje:
- České muzeum stříbra — Tylův dům: https://www.cms-kh.cz/tyluv-dum-expozice
- Národní divadlo — Josef Kajetán Tyl: https://www.narodni-divadlo.cz/cs/profil/josef-kajetan-tyl-1594657
- Úřad vlády — vznik písně Kde domov můj: https://vlada.gov.cz/assets/urad-vlady/vydavatelstvi/vydane-publikace/Hymna.pdf
- Dačického dům — historie domu a rodiště Mikuláše Dačického: https://www.dacickehodum.cz/cs/historie-dacickeho-domu/
- Biografický slovník českých zemí, HIÚ AV ČR — Mikuláš Dačický: https://biography.hiu.cas.cz/wiki/DA%C4%8CICK%C3%9D_z_Heslova_Mikul%C3%A1%C5%A1_1555%E2%80%931626
- Klub rodáků a přátel Kutné Hory — Jiří Orten: https://www.klubrodaku-kutnahora.cz/vyznacni-rodaci/jiri-orten/

### HIGH — 28401 Kutná Hora: další zásadní osobnosti

Při doplňující rešerši byly potvrzeny čtyři další osobnosti s přímou a významnou vazbou na Kutnou Horu. Všechny čtyři chyběly v původních 19 faktech záznamu 28401 a byly doplněny jako samostatné příběhy:
- **fact_020 — Jan Erazim Vocel (1802–1871):** kutnohorský rodák, průkopník české archeologie a dějin umění, profesor pražské univerzity a spoluzakladatel odborného časopisu *Památky archaeologické a místopisné*. Text výslovně zachovává spor o přesné místo narození; bod je proto označen jako historicky přibližný.
- **fact_021 — Fridrich (Bedřich) Bridel (1619–1680):** významný autor české barokní literatury, autor meditativní skladby *Co Bůh? Člověk?*; v Kutné Hoře zemřel při dobrovolné péči o nemocné během morové epidemie. Připomíná jej pomník u chrámu sv. Barbory.
- **fact_022 — Karel Havlíček Borovský (1821–1856):** v Kutné Hoře vydával časopis *Slovan* (1850–1851), jeden z posledních výrazných českých opozičních tisků před represí a cenzurou; v listopadu 1851 zde byl souzen a osvobozen.
- **fact_023 — Petr Jan Brandl (1668–1735):** jeden z nejvýznamnějších českých barokních malířů, který zemřel v Kutné Hoře. Text rozlišuje místní tradici o jeho pohřbu v kostele Matky Boží Na Náměti od pozdějších pochybností o přesné poloze hrobu.

Všechny čtyři fakty mají vlastní polohu s přiměřeným označením přesnosti, zdrojové vazby a sedm jazykových verzí. Read-back potvrdil 23 faktů v 28401 a shodný počet ve všech sedmi jazykových sadách; translations.cs přesně odpovídá českému masteru u všech čtyř nových faktů i opraveného fact_019. Všechny čtyři nové české texty přesahují 350 znaků.

Zdroje: Univerzita Karlova a České muzeum stříbra k Vocelovi; Biografický slovník českých zemí a nakladatelství Host k Bridelovi; Biografický slovník českých zemí a katalog Českého muzea stříbra k Havlíčkovi; farnost Kutná Hora a odborná práce Jihočeské univerzity k Brandlovi. Odkazy jsou uloženy přímo v content.sources a u příslušných faktů.

### HIGH — 28401 Kutná Hora: vypálení města roku 1424

Doplněn **fact_019 — Vypálení Kutné Hory roku 1424**. Příběh výslovně odděluje bitvu u Malešova (7. června 1424) od následného dobytí a úplného vypálení Kutné Hory. Zásadní je také rozlišení od předchozího požáru z ledna 1422: tehdy ustupující Zikmund nechal město zapálit na čtyřech stranách a část zástavby se podařilo zachránit; roku 1424 Žižkovo vojsko město vypálilo docela. Text dále popisuje následné přerozdělení opuštěných domů, zahrad, dolů a mlýnů mezi obyvatele, kteří zůstali.

Fakt má orientační bod v historickém centru Kutné Hory (historical_approximate) a úplné překlady do všech šesti cizích jazyků.

Datum bitvy bylo při tomto auditu opraveno ze 17. na **7. června 1424** v českém masteru a ve všech šesti cizojazyčných překladech. Bitva samotná už je samostatně zastoupena v 28541/fact_003 u Malešova; nový duplicitní fakt proto nevznikl. K faktu byly doplněny odborné zdroje k dataci bitvy.

Zdroje: Josef Šimek, *Kutná Hora v XV. a XVI. století*, zejména s. 4–5: https://www.cms-kh.cz/sites/default/files/books/simek-kutna-hora.pdf; odborná studie *Historia Aperta* k bitvě u Malešova 7. června 1424: https://journals.uhk.cz/historia-aperta/cs/article/download/n51_2/pdf/1308.

### HIGH — 28601 Čáslav: Čáslavský sněm roku 1421

Doplněn **fact_008 — Čáslavský sněm roku 1421**. Text zachycuje jednání 3.–7. června 1421 v kostele sv. Petra a Pavla, přijetí čtyř pražských artikulů jako zemského zákona, odmítnutí Zikmundovy korunovace a zvolení dvacetičlenné zemské vlády, v níž byl zastoupen také Jan Žižka a královská města. Bod mapy je na skutečném místě jednání sněmu.

Zdroj: https://caslav.evangnet.cz/archiv/caslavsky_snem_1421/caslavsky_snem_1421.pdf

**Všech devět nových faktů (pět původních a čtyři nově doplněné osobnosti) bylo uloženo do Supabase a zpětně načteno.** České master texty jsou synchronizované s translations.cs; všechny nové fakty mají sedm jazykových verzí.


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

### Oprava a normalizace zdrojových vazeb (28522, 28523, 28525, 28531)

U čtyř záznamů byly všechny aliasové reference `sN` v `facts[].sources` nahrazeny explicitními URL. Mapování nebylo odvozeno pouhým pořadím katalogu; každá vazba byla posouzena podle názvu a obsahu příslušného faktu a zdrojové stránky. Katalog `content.sources` zůstal bez identifikátorů, jak vyžaduje schéma; do faktů se nyní ukládají přímo URL, takže jejich vazba není závislá na pořadí katalogu.

- **28522:** všech osm faktů má explicitní URL zdrojů. U `fact_008` byla navíc odhalena věcná chyba: původní text uváděl šest obětí, ale dvě nezávislé místní historické stránky dokládají **sedm zastřelených mužů a pět zraněných** dne 8. května 1945. Český master i všech šest překladů byly opraveny; do katalogu byly doplněny Zručské noviny 5/2020 a oficiální historie Dolní Pohledě.
- **28523:** u `fact_001` byla odstraněna chybná vazba na cyklotrasu a nahrazena historickým a památkovým přehledem Mikroregionu Posázavský kruh. Ostatní faktové odkazy byly převedeny na explicitní URL podle skutečného obsahu zdrojů.
- **28525:** u `fact_001` byl odstraněn nerelevantní adresní bod Měšec, který nedokládal historické tvrzení o městečku a tvrzi. Ostatní vazby byly převedeny na explicitní URL.
- **28531:** u `fact_006` byly odstraněny chybné vazby na číselník PSČ a inventář RÚIAN. Nahrazeny byly oficiálním obrazovým/historickým materiálem městyse, strategickým plánem a odbornou studií Martina Webera *Barokní tvář krajiny Novodvorska* (Prameny a studie 74).

Kontrolní SQL read-back po zápisu potvrdil ve všech čtyřech záznamech **0 zbývajících aliasů `sN` a 0 URL, které by chyběly v katalogu `content.sources`**. Zkontrolované opravené fakty mají po sedmi jazykových verzích; u `28522/fact_008` je český překlad shodný s masterem.

## 5. Překlady a sémantická kontrola

Kontrola všech sedmi jazyků `cs, de, en, es, fr, it, nl` po reworku:
- 36/36 záznamů má všech sedm jazyků;
- 0 rozdílů v počtu faktů, pořadí a ID mezi masterem a překlady;
- 0 prázdných překladových titulů či textů;
- 0 rozdílů mezi českým master textem a `translations.cs`;
- 0 cizojazyčných textů kratších než 35 % odpovídajícího českého masteru.

Proběhla obsahová sémantická kontrola všech **280 faktů** napříč šesti cizojazyčnými sadami (původních 275 po reworku a pět nově doplněných historických faktů). Kontrolovaly se vynechané věty a údaje, historická chronologie, vlastní jména, vztahy mezi místy, terminologie a useknuté překlady. Podle Content Standardu je samostatným povinným kritériem také mezinárodní srozumitelnost: text musí být pochopitelný čtenáři, který neumí česky a nezná české reálie; nezbytný historický a kulturní kontext se proto vysvětluje přímo v překladu. Systematická kontrola tohoto kritéria napříč všemi 280 fakty a šesti cizojazyčnými sadami v této fázi ještě nebyla dokončena; nelze ji zaměňovat za kontrolu sémantické úplnosti.

Při zběžném ověření všech šesti cizojazyčných verzí `28563/fact_004` se potvrdilo, že pojem amatérského divadla je vysvětlen srozumitelnými ekvivalenty (např. *amateur theatre society*, *troupe de théâtre amateur*, *compagnia teatrale amatoriale*) a místní název Na Horkách je zasazen do kontextu hostince a hospodářství/farmy. Úprava nebyla potřebná.

Cíleně opravené překladové nedostatky:
- 28501 / `fact_002` — plný překlad doplněn o 69 hrobů, ostatky 72 osob, uspořádání ve třech dlouhých domech, dobu využívání pohřebiště 75–100 let a uložení nálezů v Národním muzeu; česká položka synchronizována s masterem;
- 28504 / `fact_001`, `fact_003`, `fact_007` — kompletní překlady kostela sv. Jiljí, synagogy a Vavřineckého rybníka; předtím některé jazyky obsahovaly pouze závěrečnou větu;
- 28506 / `fact_005` — krátký master o hradišti Na Šancích rozšířen o polohu, rozsah 12 ha, členění valy, rozměry opevnění, dataci do 9. století, nález avarsko-slovanského kování a opatrně formulované hypotézy; přeloženo do všech jazyků;
- 28507 / `fact_003` a `fact_006` — české překlady synchronizovány s masterem;
- 28522 / `fact_007` — do všech cizojazyčných překladů doplněna informace o pozdějších úpravách kostela včetně pozdní gotiky;
- 28523 / `fact_002` — ve všech sedmi jazycích nahrazen krátký poznámkový fragment úplným překladem masteru;
- 28532 / `fact_004` až `fact_006` — překlady doplněny o archeologické detaily, dataci a souvislosti památníků a mlýna.

Read-back potvrdil opravené texty a synchronizaci českých masterů. U pěti nových faktů byly ověřeny všechny překladové texty; jejich délka činí nejméně 74 % českého masteru.



### Průběžná kontrola mezinárodní srozumitelnosti — 28401

Při samostatném čtenářském testu cizojazyčných verzí byly zjištěny chybějící kontextové výklady u čtyř faktů. Nešlo o chybné překlady jednotlivých vět, ale o pojmy, jejichž význam není zahraničnímu čtenáři zřejmý bez znalosti českých dějin:

- **fact_003 — Kutnohorský dekret:** výraz „český/bohémský univerzitní národ“ byl ve všech šesti jazycích doplněn vysvětlením, že šlo o jednu ze čtyř korporativních skupin pražské univerzity (vedle bavorské, saské a polské), tedy o středověkou univerzitní příslušnost, nikoli moderní státní příslušnost.
- **fact_005 — utrakvistická správa:** ve všech šesti jazycích je nyní vysvětleno, že utrakvisté byli stoupenci české reformní tradice spojené s husitstvím a že jejich charakteristickým rysem bylo přijímání pod obojí způsobou — chléb i víno.
- **fact_016 — Fidlovačka:** všech šest překladů nyní vysvětluje, že Fidlovačka byla tradiční jarní slavností pražských ševců a že Tyl převzal její prostředí jako námět a titul divadelní frašky.
- **fact_019 — vypálení Kutné Hory 1424:** všech šest překladů nyní stručně zasazuje událost do husitských válek, vysvětluje postavení Jana Žižky jako významného husitského vojevůdce a Táboritů jako radikálního proudu husitského hnutí.

Doplnění vychází z odborných a institucionálních zdrojů: studie o univerzitních „národech“ a dekretu (https://www.cambridge.org/core/journals/austrian-history-yearbook/article/abs/bridging-fiction-and-reality-sigismund-of-luxembourg-the-hussites-and-the-university-of-vienna/9D10EEF04D78107D2AA0D55A80F21AEC; https://www.flu.cas.cz/images/dokumenty/verejne/vyrocni_zpravy/vyrocni_zprava_FLU_2010.pdf), odborný výklad utrakvismu (https://isidore.co/misc/Res%20pro%20Deo/Journals/Catholic%20Historical%20Review%20%281995-2023%29/2006_Volume92_Number4.pdf), publikace Úřadu vlády k české hymně a Fidlovačce (https://www.vlada.cz/assets/urad-vlady/vydavatelstvi/vydane-publikace/Hymna.pdf) a odborný historický kontext husitských válek. Read-back v Supabase potvrdil doplnění všech čtyř kontextových vysvětlení ve všech šesti jazycích (24/24 jazykových položek). Český master ani translations.cs nebyly změněny.

Tato kontrola je průběžná, nikoli dokončená pro celý blok. Neznamená automatické schválení ostatních 276 faktů.


### Průběžná kontrola mezinárodní srozumitelnosti — 28403 Sedlec

Při kontrole osmi faktů v PSČ 28403 byla odhalena skutečná závada v úplnosti překladů **fact_002 — Sedlecká katedrála**: německá a anglická verze byly úplné, ale španělská, francouzská, italská a nizozemská verze obsahovaly pouze závěrečné dvě věty. Všechny čtyři zkrácené překlady byly nahrazeny úplnými překlady českého masteru. Současně bylo ve všech šesti jazycích doplněno vysvětlení husitských válek jako náboženských a politických konfliktů v českých zemích spojených s reformním hnutím Jana Husa.

Dále byla doplněna vysvětlení pojmů, které by zahraniční čtenář bez českého kulturního a církevního kontextu nemusel pochopit:
- **fact_005 — kostel sv. Filipa a Jakuba:** ve všech šesti jazycích je vysvětlen význam odpustkové listiny a to, že „Boží hrob“ zde označuje zbožnou/devocionální reprezentaci Kristova hrobu.
- **fact_008 — zámek Sedlec:** ve všech šesti jazycích je vysvětleno, že proboštství bylo sídlem probošta, církevního hodnostáře s administrativními úkoly v klášteře.

Read-back potvrdil úplné verze fact_002 v šesti jazycích (délky 803–922 znaků), návrat začátku španělského textu i doplnění obou kontextových vysvětlení ve všech šesti jazycích (12/12). U fact_002 nebyl změněn český master ani translations.cs.



### Průběžná kontrola mezinárodní srozumitelnosti — 28404 Kaňk

Všech šest faktů v 28404 bylo zběžně, ale samostatně posouzeno v němčině, angličtině, španělštině, francouzštině, italštině a nizozemštině. Překlady srozumitelně vysvětlují například sanktuárium jako schránku pro eucharistii, tabernacle/tabernacolo jako schránku pro Eucharistii, hornickou obec s vlastní správou, historické pracovní a mzdové poměry i geologické a přírodovědné pojmy. U faktů o kalvárii a hornických nepokojích je zachována nejistota původní pověsti a jsou vysvětleny příčiny pozdějšího povstání. Nebyl zjištěn významový nedostatek vyžadující zásah; texty nebyly kosmeticky přepisovány.


## 6. Délka českých master textů

Po dřívějším rozšíření šesti českých master textů (28511/fact_001, 28522/fact_004 a fact_006, 28547/fact_003 a fact_007, 28576/fact_003) byly v této fázi doplněny další čtyři krátké texty. Z pěti původně krátkých faktů tak zůstává **jeden fakt kratší než 350 znaků**.

| PSČ | Fakt | Původní délka | Aktuální délka |
|---|---|---:|---:|
| 28509 | fact_019 — Pomník obětem světových válek | 331 | 366 |
| 28511 | fact_003 — Obecní zvonička z roku 1887 | 316 | 466 |
| 28511 | fact_006 — Náveský rybník | 335 | 463 |
| 28525 | fact_005 — Trojboká kaplička | 336 | 595 |
| 28563 | fact_004 — Tradice ochotnického divadla | 312 | 312 |

### Nová rozšíření

- **28509 / fact_019 — Pomník obětem světových válek:** doplněno přesné rozdělení jmen v části věnované druhé světové válce: 24 z Kácova, 13 z Račíněvsi a 2 ze Zlivi. Zdroj: Spolek pro vojenská pietní místa, včetně evidence CZE-2112-02721: https://www.vets.cz/vpm/6931-pomnik-obetem-1-a-2-svetove-valky/
- **28511 / fact_003 — Obecní zvonička:** doplněn dobový popis z roku 1914, podle něhož šlo o kamennou stavbu na vyvýšeném místě návsi poblíž rybníka. Zachována informace o stavbě roku 1887 za 125 zlatých a nuceném odevzdání zvonu v roce 1942. Zdroj: A. J. Zavadil, *Kutnohorsko slovem i obrazem*, díl II, 1914, s. 137–138: https://www.muzeumkh.cz/sites/default/files/books/zavadil-kutnohorsko_slovem_i_obrazem_2.pdf; doplněno také podle obecní historie.
- **28511 / fact_006 — Náveský rybník:** doplněn popis prameniště Nepoměřického potůčku na vlhkých loukách jižně nad vsí, přítoku z odvodněných polí, úpravy břehů a dna a pokračování toku směrem ke Košicům. Zdroj: A. J. Zavadil, *Kutnohorsko slovem i obrazem*, díl II, 1914, s. 137–138; obecní historie dokládá příspěvek vodního družstva 6 000 korun na opravu regulace potoka a rybníka v roce 1922.
- **28525 / fact_005 — Trojboká kaplička:** doplněn architektonický popis a výslovně zaznamenán rozpor v dataci: obec odhaduje polovinu 19. století, zatímco Atlas české architektury uvádí konec 18. století. Přesný rok není doložen, proto text ponechává dataci nejistou. Do katalogu zdrojů i přímo k faktu byla přidána URL Atlasu české architektury: https://www.archmap.cz/cs/kraj/22741?page=45.
- **28563 / fact_004 — Tradice ochotnického divadla:** další věrohodné konkrétní údaje nad rámec již uvedeného založení v roce 1867, zakladatele Horáka a ukončení činnosti v roce 1962 nebyly nalezeny. Text zůstává beze změny; bez výplňových informací.

U všech čtyř rozšířených faktů byly aktualizovány překlady v jazycích de, en, es, fr, it a nl; český překlad byl synchronizován s masterem. Read-back potvrdil u všech čtyř český text i všech sedm jazykových verzí. Rozsah délek čtyř nově rozšířených masterů je 366–595 znaků. Jediný zbývající krátký text je označen k obsahovému review, nikoli uměle prodlužován.

## 7. Souřadnice a mapové body

- Všech 284 faktů v rozsahu má nyní přítomné pole location; **0 explicitních null a 0 chybějících vlastností location**.
- Při této fázi bylo vyřešeno všech šest null poloh uvedených v předchozím auditu a navíc čtyři dříve přehlédnuté chybějící vlastnosti location u faktů v PSČ 28601.
- Kontrola celého rozsahu 36 PSČ potvrdila 0 neplatných souřadnicových rozsahů a 0 vyplněných poloh bez povinných metadat.
- Kontrola proti schema.json u osmi změněných záznamů vrátila 0 validačních chyb; 0 neplatných location.type.
- Nové a opravené body mají doložený zdroj, název, typ a přesnost. Přesné body jsou označeny exact, přibližné approximate, reprezentativní body rozlehlých území area_representative a veřejné orientační body pro historické události nebo neurčené polohy historical_approximate.

### Vyřešené polohy z původních šesti null

| PSČ / fakt | Uložená poloha | Přesnost |
|---|---|---|
| 28501 / fact_002 | Bylany – veřejný orientační bod pro archeologickou lokalitu Miskovice 2 | historical_approximate |
| 28502 / fact_006 | Centrum Suchdola – veřejný orientační bod obce | historical_approximate |
| 28522 / fact_008 | Náves Dolní Pohleď – veřejný orientační bod pro událost na okolní silnici | historical_approximate |
| 28525 / fact_005 | Bohdaneč 97 – veřejný orientační bod obce | historical_approximate |
| 28547 / fact_004 | Socha sv. Šebestiána u čp. 140 – reprezentativní bod souboru tří soch | area_representative |
| 28562 / fact_002 | Náves Hostovlice – veřejný orientační bod pro lokalitu Na svatě | historical_approximate |

U těchto šesti záznamů nebyla poloha vydávána za přesné zaměření samotného objektu. Tam, kde přesný bod nebylo možné doložit, byl zvolen veřejný orientační bod nebo reprezentativní poloha podle pravidel promptu.

### Čtyři doplněné polohy u PSČ 28601

Při read-backu se ukázalo, že čtyři starší fakty v Čáslavi neměly vlastnost location vůbec (nešlo o explicitní JSON null). Byly doplněny:
- fact_001 — Čáslavský Hrádek, přesný bod hradiště (exact);
- fact_005 — náměstí Jana Žižky z Trocnova jako veřejný orientační bod pro čáslavské rodáky (historical_approximate);
- fact_006 — bývalé Závody Kosmos, poloha historického továrního areálu (approximate);
- fact_007 — archeologický areál zaniklé komendy v Drobovicích (area_representative).

explorer_map_points bylo načteno pouze pro ID těchto 36 PSČ; v tomto rozsahu nebyly nalezeny žádné mapové body. Žádná ruční synchronizace mapového indexu nebyla provedena.


## 8. Výsledek a další krok

**Výsledek: REVIEW REQUIRED.**

Dokončeno:
- inventář a porovnání 36/36 PSČ a **284 faktů**;
- doplnění sedmi samostatných osobnostních příběhů Kutné Hory, vypálení města roku 1424 a Čáslavského sněmu roku 1421;
- sémantická kontrola všech 280 faktů v šesti cizojazyčných překladech;
- průběžný čtenářský test mezinárodní srozumitelnosti: čtyři tematicky problematické fakty v 28401 doplněny ve všech šesti cizojazyčných verzích (24/24 read-back ověřeno) a v 28403 byly opraveny čtyři zkrácené překlady fact_002 i doplněna kontextová vysvětlení u fact_002, fact_005 a fact_008 (read-back ověřen);
- 0 chybějících jazyků, 0 rozdílů v pořadí/ID, 0 rozdílů translations.cs proti masteru, 0 prázdných překladových polí a 0 cizojazyčných textů pod 35 % délky masteru;
- 0 explicitních location = null a 0 chybějících vlastností location v celém rozsahu;
- 0 neplatných souřadnicových rozsahů a 0 neúplných metadat u vyplněných poloh;
- cílená validace osmi změněných záznamů podle schema.json bez chyb;
- oprava mapových kategorií, normalizace typů poloh a normalizace zdrojových referencí v 28563 a 28564.

Otevřeno:
1. dokončit povinnou kontrolu mezinárodní srozumitelnosti a kulturního kontextu všech šesti cizojazyčných sad napříč 280 původními fakty; čtyři nově přidané osobnostní příběhy mají úplné překlady a byly zkontrolovány samostatně. Z původních faktů byly v tomto ohledu cíleně prověřeny nově upravené překlady `28522/fact_008`, `28563/fact_004`, `28401/fact_003`, `fact_005`, `fact_016`, `fact_019` a `28403/fact_002`, `fact_005`, `fact_008`;
2. obsahově prověřit jediný zbývající krátký master `28563/fact_004` — tradice ochotnického divadla v Potěhách; rozšířit pouze při nalezení dalších doložitelných údajů.

Samostatný AJV běh nebyl spuštěn; proběhla cílená validace změněných záznamů proti načtenému schema.json. Nebyla provedena publikace V5, záloha, import do jiné databáze ani read-only zamykání. sequence.json, statusy a verze zůstávají beze změny.


### Read-back a obnovení kontextových doplnění — 28401

Při pokračování auditu byl proveden nový přímý read-back z Supabase. Ukázal, že čtyři kontextová vysvětlení v překladech 28401, která předchozí verze tohoto reportu již uváděla jako hotová, v aktuálně uloženém JSONB obsahu faktů chyběla. Nešlo tedy pouze o další kontrolní zjištění: report a databázový obsah nebyly v tomto bodě synchronní. Všechna čtyři doplnění byla znovu zapsána do skutečných překladových polí a následně ověřena.

- **fact_003 — Kutnohorský dekret:** vysvětlení středověkých univerzitních národů jako čtyř korporativních skupin pražské univerzity, nikoli moderních národností.
- **fact_005 — kostel sv. Jakuba:** vysvětlení utrakvistů, jejich vazby na českou reformní tradici a přijímání pod obojí způsobou.
- **fact_016 — Josef Kajetán Tyl:** vysvětlení Fidlovačky jako jarní slavnosti pražských ševců, která dala název Tylově frašce.
- **fact_019 — vypálení Kutné Hory:** zasazení do husitských válek a stručné objasnění role Jana Žižky a táborského proudu husitství.

Doplnění byla zapsána do všech šesti cizojazyčných sad (24 překladových položek). Přidány byly také čtyři věcné zdroje do katalogu `content.sources` a k příslušným faktům: studie Cambridge University Press k univerzitním národům, odborná studie k utrakvismu v *Catholic Historical Review*, historie slavnosti Fidlovačka na webu Divadla Na Fidlovačce a historická studie *The Hussite Wars* z University of Warwick.

Read-back potvrdil:
- 4/4 faktů mají doplněný kontext ve všech šesti jazycích (24/24);
- všechny čtyři nové zdroje jsou v katalogu `content.sources` a přiřazeny k odpovídajícím faktům;
- počet jazykových položek zůstal zachován; české master texty ani `translations.cs` nebyly změněny.

Tím je znovu potvrzena cílená kontextová kontrola sedmi faktů v 28401 a 28403. **Nejde o dokončení plošného auditu mezinárodní srozumitelnosti**; ten nadále zbývá pro ostatní fakta celého rozsahu.


### Pokračování čtenářské kontroly — 28401 (fact_001, fact_004, fact_007)

Další čtení překladů odhalilo tři pojmy, které byly přeloženy správně, ale bez krátkého vysvětlení nemusely být pro zahraničního čtenáře dostatečně průhledné. Kontext byl doplněn ve všech šesti jazycích:

- **fact_001 — Stříbrné město:** vysvětleno, že Království české / Kingdom of Bohemia bylo historické království v zemích dnešní České republiky. Tím se předchází záměně historického státního útvaru s dnešním státem.
- **fact_004 — Hrádek:** výraz „stříbrná elita“ byl objasněn jako bohatí důlní podnikatelé a obchodníci Kutné Hory.
- **fact_007 — Jezuitská kolej:** doplněno, že šlo o vzdělávací instituci jezuitského řádu, katolického řeholního společenství s významnou vzdělávací činností.

Read-back v Supabase potvrdil všech 18 kontextových doplnění (3 fakta × 6 jazyků). České master texty a `translations.cs` zůstaly beze změny. Tato tři fakta nyní mají spolu s dříve obnovenými čtyřmi fakty v 28401 kontextové vysvětlení; ostatní položky bloku 28401 je třeba ještě projít.


### Rešeršní doplnění a opravy — 26. 11. 2026

- **Bitva u Malešova:** rešerše potvrdila, že samostatný příběh už existuje v 28541/fact_003 a patří k Malešovu. V 28401/fact_019 však bylo chybné datum 17. 6. 1424. Opraveno na **7. 6. 1424** v masteru i všech šesti překladech; přidány odborné zdroje. Nedošlo k duplicitě.
- **Zásadní osobnosti:** do 28401 byly doplněny čtyři chybějící osobnosti: Jan Erazim Vocel, Fridrich (Bedřich) Bridel, Karel Havlíček Borovský a Petr Jan Brandl. Jejich vazba na Kutnou Horu je doložena odbornými, univerzitními, muzejními nebo církevními zdroji. Jan Campanus Vodňanský byl prověřen, ale samostatný fakt nebyl přidán: jeho místní vazba spočívala především v krátkém působení jako správce kutnohorských škol, což v tomto úzkém auditu nedosahuje stejné priority.
- **Památky:** při tomto doplňujícím průzkumu nebyla potvrzena další chybějící monumentální památka srovnatelná významem s již zastoupenými dominantami.
- **Read-back:** 28401 nyní obsahuje 23 faktů; všech sedm jazykových sad má 23 položek. Český překlad je shodný s masterem u fact_019 a fact_020–fact_023. Nové master texty mají 829, 829, 955 a 865 znaků; všechny překračují auditní minimum 350 znaků. Nové fakty mají zdroje a polohová metadata.
- **Stav:** statusy, data_version, sequence.json ani rozsah PSČ nebyly změněny. Publikace ani záloha nebyla spuštěna.

