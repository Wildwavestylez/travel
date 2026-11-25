# KANONICKÝ TAHÁK — Audit českých PSČ 28002–28201 — Kolínsko a Českobrodsko

**Kanonické ID:** CZ-KOLINSKO-28002-28201  
**Role souboru:** jediný kanonický pracovní tahák a checkpoint pro celý rozsah; `README.md` je pouze registr odkazů a stručného stavu.  
**Verze pravidel:** `prompt_audit.md` V2.1  
**Stav:** REVIEW REQUIRED  
**Rozsah:** 280xx–283xx podle zadání; pouze existující kódy ze `sequence.json`  
**Datum:** 2026-11-25

## 1. Přesný inventář

V `sequence.json` je v zadaném rozsahu 27 existujících PSČ:

`28002, 28101, 28102, 28103, 28104, 28106, 28107, 28121, 28123, 28125, 28126, 28127, 28128, 28129, 28130, 28141, 28143, 28144, 28146, 28151, 28161, 28162, 28163, 28166, 28167, 28171, 28201`.

Kódy 283xx v aktuální sekvenci nejsou. Rozsah, pořadí ani `sequence.json` nebyly měněny. Registr neobsahoval předchozí ani překrývající se auditní tahák pro tento blok.

## 2. Inventář a základní technické kontroly

- Sequence/groups: 27 očekávaných kódů.
- RÚIAN CSV: 27/27 kódů přítomno; používán výhradně sdílený inventář z feedu aktualizovaného 2026-11-01 (archiv 20261031).
- Supabase `public.postal_codes`: 27/27 záznamů, původně 190 faktů; po doplnění Bauerovy vily 191 faktů.
- Všechna auditovaná ID a vazby na PSČ zachovány.
- Všech 27 záznamů má `data_version=1`, `status=validated`.
- 0 prázdných českých master textů, 0 chybějících zdrojů, 0 neplatných `category` a `map_category`.
- 0 zjištěných duplicitních názvů nebo plných textů napříč původním blokem; nové faktum Bauerovy vily je v bloku jedinečné.
- Počty a ID faktů jsou strukturálně přítomné ve všech sedmi jazycích. Úplná sémantická kontrola všech 1 146 cizojazyčných textů však nebyla dokončena a zůstává otevřená.
- Nebyl spuštěn AJV ani jiný samostatný validační běh.
- `explorer_map_points` nebyly pro vybraná ID nalezeny; žádné mapové body nebyly hromadně vytvářeny ani měněny.

## 3. Správní a geografické údaje

- Všech 27 kódů souhlasí mezi sequence, RÚIAN a Supabase.
- `content.postcode` a `content.city` odpovídají databázovým hodnotám u 27/27 záznamů.
- Sídla obsluhujících pošt a správní zařazení jsou doložena v existujících `verification` polích.
- Okres Kolín: 23 záznamů; okres Praha-východ: 4 záznamy (28162, 28163, 28166, 28167). Všech 27 je ve Středočeském kraji.
- `district` v JSON je ponechán jen tam, kde jde o doloženou relevantní část obce; nebyly doplňovány názvy jiných obcí z poštovního obvodu.
- Existující neprázdné souřadnice nebyly znovu měřeny ani přesouvány.

## 4. Zásadní turistická úplnost

### Potvrzené pokrytí
- Kolín: historické jádro, chrám sv. Bartoloměje, židovská čtvrť a hřbitov, bitva u Kolína (1757) a památník u Křečhoře, železniční uzel, Masarykův most, František Kmoch a archeologická lokalita Skalka.
- Bitva u Lipan (1434) je zastoupena v 28106 příběhem Hřib a Lipanské pláně.
- Další významná témata jsou pokryta v existujících záznamech Kouřimi, Českého Brodu, Tismic, Zásmuk, Týnce nad Labem, Stříbrné Skalice a okolních obcí.

### Doplněná zásadní mezera
- **28002 / fact_010 — Bauerova vila v Libodřicích.** Kubistická vila Josefa Gočára z let 1912–1914; oficiální Uměleckoprůmyslové museum potvrzuje adresu Libodřice 111, PSČ 280 02. Doplněn český master, všech šest cizojazyčných verzí, zdroje a poloha 50.006316, 15.087656 (exact).
- **28106 / fact_001 — mohyla bitvy u Lipan na Lipské hoře.** Stávající příběh byl rozšířen o 11 m vysokou mohylu z roku 1881, památkovou ochranu a Prokopa Holého. Doplněny všechny překlady a oblastní poloha mohyly s přesností `area_representative`.

Po těchto doplněních nebyla v cílené rešerši nalezena další zjevná mezera celostátního významu. Kutná Hora je mimo tento blok PSČ a nebyla považována za nález tohoto auditu.

## 5. Opravy provedené v Supabase

1. **28002:** přidán `fact_010` Bauerova vila; všech sedm jazyků, tři zdroje, přesná poloha. Read-back: 10 faktů, 7/7 jazyků po 10 položkách, ID shodná, `translations.cs` bez rozdílu.
2. **28121:** `translations.cs` synchronizováno s českým masterem pro `fact_003`, `fact_008` a `fact_009`. Read-back: 0 rozdílů facts vs translations.cs, 7/7 jazyků po 11 položkách.
3. **28130:** `fact_001` rozšířen o kategorii ÚAN II a přesnost vymezení do 10 m podle NPÚ; všech sedm jazyků aktualizováno. Český text má po opravě 470 znaků. Read-back: 7/7 jazyků po 6 položkách, český master synchronní.
4. **28106:** `fact_001` rozšířen o památnou mohylu na Lipské hoře; doplněn zdroj a poloha. Read-back: 7/7 jazyků po 5 položkách, český master synchronní.
5. **28103:** opraveny tituly `fact_005` (zvonička v Hřibech) a `fact_006` (válečný pomník v Ohařích) v českém masteru i všech šesti jazykových metadatech; odstraněny chybné zdroje a u `fact_006` opravena `map_category` na `historical_monument`. Read-back potvrdil tituly ve všech 7 jazycích a platnou kategorii.
6. **28106:** `fact_004` obnoven jako památná hrušeň u Hřib. Český master a všech šest překladů byly nahrazeny textem odpovídajícím titulu, poloze a ověřeným zdrojům; odstraněn chybný zdroj na Chotutice. Read-back: český text 482 znaků, všech šest překladů přítomno, titul správný ve všech 7 jazycích.

Všechny změny zachovaly existující ID záznamů a status/version. Žádný záznam nebyl publikován.

## 6. Otevřené položky — REVIEW REQUIRED

### České master texty kratší než 350 znaků — UZAVŘENO
Původních 13 krátkých faktů bylo rozšířeno na nejméně 350 znaků a doplněno o ověřené informace. Všech 78 odpovídajících cizojazyčných textů (de/en/es/fr/it/nl) bylo aktualizováno.

- 28002: `fact_001`–`fact_006`, `fact_008`, `fact_009`.
- 28103: `fact_004`.
- 28106: `fact_004`, `fact_005`.
- 28130: `fact_006`.
- 28151: `fact_005`.

Read-back původní délkové opravy potvrdil 13/13 českých master textů nad limitem a správná ID i počty všech sedmi jazyků u pěti dotčených záznamů. Při pozdější cílené kontrole však bylo odhaleno, že 28106/fact_004 má sice správný titul, polohu a původní zdrojové odkazy k památné hrušni, ale český master i všech šest překladů obsahovaly text pseudobarokní kapličky v Chotuticích (duplicitní téma k 28103/fact_004). Tato obsahová záměna byla opravena: fakt i šest překladů nyní popisují památnou hrušeň u Hřib, vysazenou na počátku 19. století a chráněnou od roku 1987; podle oficiálního webu obce Vitice měří přibližně 13 m a obvod kmene je 364 cm. Ze seznamu zdrojů byl odstraněn chybný odkaz na Chotutice. U 28103/fact_004 zůstává doložená vazba na radimské panství od roku 1541 a archivní mapa z roku 1800.

### Zbývající `location: null`
- 28103 / `fact_004` — kaplička v Chotuticích: oficiální zdroj potvrzuje obec a vznik v roce 1805, ale nebyl nalezen spolehlivý bod konkrétní kapličky.
- 28106 / `fact_005` — zvonička v Hřibech: obec Vitice potvrzuje umístění před usedlostí čp. 8, ale nebyly doloženy přesné souřadnice.
- 28130 / `fact_001` — zaniklá tvrz / archeologické území: NPÚ vymezuje severní část vsi a polygon ÚAN II, nikoli obhajitelný samostatný bod tvrze.

Ponechat `null`; nevymýšlet souřadnice. Poloha 28106 / `fact_001` byla nově doplněna pro mohylu a reprezentativní oblast bojiště.

### Překlady
Strukturální přítomnost, počty a ID všech sedmi jazyků jsou ověřeny. Sémanticky bylo detailně zkontrolováno 48 z 191 faktů: 28002 (10), 28101 (5), 28102 (7), 28103 (6), 28104 (7), 28106 (5) a 28107 (8), tedy 288 cizojazyčných textů. U 28002/fact_007 bylo zjištěno zásadní zkrácení všech šesti překladů oproti českému masteru; všech šest verzí bylo doplněno o chybějící údaje (37 obcí v síti do roku 1914, převzetí provozu ESSO v roce 1916, nová elektrárna na Zálabí 1930–1932 podle Jaroslava Fragnera, předchůdkyně Draslovky z roku 1906 a obnovení výroby roku 1947 po náletu v roce 1944). U 28102/fact_001 chyběla ve všech šesti překladech zmínka o vladykovi Oldřichovi z Cerhenic; u fact_003 chyběla informace o Dlabačově zájmu o hudbu a dějiny umění. Všech 12 překladů bylo doplněno. U 28103/fact_005 a fact_006 byly potvrzeny chybné české tituly i jejich šest jazykových variant. Tituly byly opraveny podle skutečného obsahu: pískovcová zvonička v Hřibech a pomník obětem světových válek v Ohařích. Současně byly odstraněny dva nesouvisející zdroje, u fact_006 byla opravena `map_category` z `archaeological_site` na `historical_monument`; české texty faktů a jejich ID zůstaly zachovány. Read-back ověřil nové názvy a mapovou kategorii. U 28104 byly ve všech šesti překladech fact_002 doplněny informace o červené mramorové pamětní desce zvonice a u fact_006 informace o uložení nálezů v muzeích v Kolíně a v Národním muzeu (12 oprav). U 28106/fact_002 bylo ve všech šesti překladech doplněno časové vymezení barokních úprav do 17. a 18. století (6 oprav). U 28106/fact_004 byla opravena závažná záměna obsahu: původní český text a všech šest překladů popisovaly kapličku v Chotuticích, zatímco titul, poloha a relevantní zdroje patřily památné hrušni u Hřib. Český master i všech šest překladů byly obnoveny jako text o hrušni; titul zůstal správný a chybný chotutický zdroj byl odstraněn. Ověřeno podle oficiální stránky obce Vitice: https://www.vitice.cz/zivot-v-obci/viticke-pesiny/hriby/ a doplňkových popisů https://www.cestyapamatky.cz/kolinsko/hriby/hrusen-u-hrib a https://botany.cz/cs/hrusen-u-hrib/. Všech osm faktů 28107 a jejich 48 cizojazyčných verzí bylo zkontrolováno bez nutnosti věcné opravy. Zbývajících 858 cizojazyčných textů čeká na sémantickou kontrolu; úplný průchod proto není dokončen.

## 7. Uzavření a další krok

**Výsledek: REVIEW REQUIRED.** Hlavní turistická mezera byla doplněna a potvrzené překladové nesoulady opraveny. Blok zatím nelze označit PASS kvůli nedokončené úplné sémantické kontrole překladů. Tři zbylé null polohy mají zdokumentovaný důvod.

Bez publikace V5, bez zálohy, bez read-only zámku, bez změny schématu a bez změny sequence. Další krok: pokračovat sémantickou kontrolou faktů a všech šesti cizojazyčných verzí v další dávce PSČ 28121, 28123 a 28125; hotové kontroly neopakovat.
