# Auditní tahák — Mladoboleslavsko a Mnichovohradišťsko (293xx–295xx)

**Kanonické ID:** `CZ-MLADOBOLESLAVSKO-MNICHOVOHRADISTSKO-293XX-295XX`  
**Stav:** IN PROGRESS — REVIEW REQUIRED — NOT PUBLISHED  
**Poslední checkpoint:** 2026-11-28 — sémantická revize 29301, 29306, 29307 a 29401–29430; aktualizace UNESCO a kaple ve Žďáru  
**Rozsah:** 40 přesných PSČ podle `data/czechia/sequence.json` a `data/czechia/reference/ruian_postcodes.csv`.

## 1. Závazné podklady

Před pokračováním znovu nečíst celé soubory; v této relaci byly prostudovány:

- `data/czechia/prompt_audit.md`
- `data/czechia/QUERY_LIMITS.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/sequence.json`
- `data/czechia/reference/README.md`
- `data/czechia/reference/ruian_postcodes.csv`

**Provozní pravidlo:** jedna přesná poštovní směrovací číslice na DB operaci; jeden logický účel na SQL call; zápisy sekvenčně; po zápisu read-back pouze změněných cest. SQL request ideálně do 8 KB, výstup do 20 KB. Nepoužívat široké dotazy přes rozsah.

## 2. Přesný seznam PSČ

Sekvence a RÚIAN CSV se shodují: 40/40.

`29301, 29306, 29307, 29401, 29402, 29403, 29404, 29405, 29406, 29411, 29412, 29413, 29414, 29415, 29421, 29423, 29424, 29425, 29426, 29427, 29428, 29429, 29430, 29431, 29441, 29442, 29443, 29445, 29446, 29447, 29448, 29471, 29473, 29474, 29475, 29476, 29477, 29478, 29479, 29501`

Bez 294xx čísel, která v sequence/RÚIAN nejsou.

## 3. Stav databáze při checkpointu

- 40/40 záznamů existuje v `public.postal_codes`.
- Původní inventura: 323 faktů; po doplnění 6 osobností, odstranění 2 duplicit a přidání bitvy u Mnichova Hradiště: **328 faktů**.
- Stav záznamů při inventuře: 22 `validated`, 18 `placeholder`; žádný záznam nebyl publikován ani převeden na V5.
- Všechny kontrolované JSON povinné klíče jsou přítomny v 40/40; `facts` je pole a `translations` objekt. Administrativní `city/county/state` jsou vyplněny.
- **29501 — překladová struktura dokončena:** 19 faktů; všech 7 jazyků (cs/de/en/es/fr/it/nl) má přesně 19 položek. Původních 18 faktů bylo doplněno po trojicích; `fact_019` o bitvě z roku 1866 zůstal zachován. Read-back: 19/19 unikátních ID v každém jazyce, 0 osiřelých CS ID a 0 rozdílů `translations.cs` proti masteru. Záznam zůstává `status=placeholder` a `REVIEW REQUIRED` do uzavření ostatních auditních kontrol.
- Neprováděla se publikace V5, backup, Neon import ani read-only lock.

## 4. Provedené opravy

### 4.1 Zásadní osobnosti doplněné po turistickém průzkumu

**29301 Mladá Boleslav — přidány fakt_012 až fact_016:**

- Eva Bosáková — olympijská vítězka, 4 olympijské medaile.
- Adina Mandlová — významná filmová hvězda české kinematografie.
- Jan Železný — trojnásobný olympijský vítěz, světový rekordman.
- František Gellner — básník, prozaik, satirik a výtvarník.
- Jan Konůpek — grafik, malíř a ilustrátor, spoluzakladatel skupiny Sursum.

Všech pět má český master nad 350 znaků, všech 7 jazykových položek (cs/de/en/es/fr/it/nl) a orientační historickou polohu města. Read-back: 16 faktů, všechny jazykové sady po 16 položkách, nové CS položky přesně synchronizovány.

**29306 Kosmonosy — přidán fact_012:**

- Alois Bubák — významný český krajinář 19. století, rodák z domu čp. 16 v ulici Lípy.
- Doloženo životopisným slovníkem, městským zpravodajem a adresním bodem domu.
- Všech 7 jazykových položek přidáno; read-back potvrdil 12 faktů, 12 položek v každém jazyce a přesnou shodu CS/master.

### 4.2 Krátké české texty

Opraveny a přeloženy ve všech jazycích:

- 29412/fact_003 — 497 znaků.
- 29412/fact_009 — 495 znaků.
- 29415/fact_004 — 466 znaků.
- 29415/fact_008 — 479 znaků.

Všechny nyní překračují minimum 350 znaků.

### 4.3 Synchronizace češtiny

`translations.cs.facts` synchronizováno přesně z masteru pro:

- 29402 — read-back 4/4, mismatch 0.
- 29423 — read-back 12/12, mismatch 0.

### 4.4 Duplicitní a chybně přiřazené fakty odstraněny

- 29401/fact_007 — lovecký zámeček v Maníkovicích odstraněn z 29401; primární přiřazení je 29501, kde je již fact_007.
- 29404/fact_005 — Ema Destinnová / zámek Domousnice odstraněn z 29404; správné přiřazení a související fakt je 29448/fact_002.
- Odstranění provedeno z českého masteru i všech 7 jazykových polí. Ostatní ID a pořadí zachována.

### 4.5 Neplatné mapové kategorie

Opraveno 6 hodnot na platné `historical_monument`:

- 29426/fact_001
- 29427/fact_003
- 29429/fact_005
- 29447/fact_002
- 29473/fact_003
- 29474/fact_003

Původní neplatné hodnoty: `memorial_site` a `historic_monument`. Při původní kontrole nebyly nalezeny neplatné hodnoty `category`.



### 4.7 Sémantická revize překladů — 29301 a 29306

- **29301 Mladá Boleslav:** 16/16 faktů v každém ze 7 jazyků; 0 chybějících ID, `translations.cs` přesně odpovídá masteru. Cizojazyčné texty `fact_001`–`fact_011` byly rozšířeny a znovu formulovány podle úplného českého obsahu (všechny nyní nad 350 znaků); `fact_012`–`fact_016` zůstaly obsahově plné a byly zahrnuty do kontroly. Samostatně zůstává otevřena poloha 29301/fact_009 (EVL Bezděčín).
- **29306 Kosmonosy:** 12/12 faktů v každém ze 7 jazyků; 0 chybějících ID, `translations.cs` přesně odpovídá masteru. Všech 72 cizojazyčných textů bylo individuálně zkontrolováno; nejkratší jazyková položka má 558 znaků. Nalezené formulace zachovávají historické osoby, data, stavby a významové nuance; nebyla nutná obsahová oprava.
- **29307 Hrdlořezy / Josefův Důl:** 4/4 faktů v každém ze 7 jazyků; 0 chybějících ID, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. U `fact_004` byla opravena zásadní faktická chyba: Václav Tarantík sloužil u **311. československé bombardovací peruti RAF**, nikoli u „1. československé“ peruti; text nyní správně uvádí jeho službu jako palubního radiotelegrafistu a smrt při havárii Liberatoru BZ717 (L) při návratu z operačního letu nad Atlantikem. Opraveno v masteru i všech 6 cizojazyčných překladech; přidány dva odborné zdroje (Vets.cz a Čeští RAFáci).
- **29401 Bakovsko:** 7/7 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolovány překlady všech sedmi faktů; historická data, osoby, sakrální a přírodní památky i rozlišení doložených skutečností od místní pověsti jsou zachovány. Dříve odstraněný duplicitní `fact_007` (lovecký zámeček v Maníkovicích) zůstává správně pouze v 29501.
- **29402 Kněžmost:** 4/4 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 24 cizojazyčných textů. Opravena drobná italská gramatická chyba u `fact_003` („un raro ostensorio“); po zápisu potvrzen read-back.
- **29403 Obruby:** 4/4 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 24 cizojazyčných textů. Překlady správně zachovávají zásadní rozlišení u `fact_003`: obecní tradice mluví o keltském hradišti, ale odborně doložené jsou keramické nálezy spojované s plaňanskou skupinou grossromstedtské kultury; text netvrdí existenci opevněného hradiště jako prokázaný fakt.
- **29404 Dolní Bousov / Střehom / Rabakov:** 5/5 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 30 cizojazyčných textů; zachována chronologie města a cukrovaru, sakrální a krajinné dědictví, historické informace o Střehomském mlýně i rozsah a obsah muzea JAWA. Dříve odstraněný duplicitní `fact_005` zůstává odstraněn; původní `fact_006` nebyl chybně přečíslován.
- **29405 Dlouhá Lhota / Černava:** 2/2 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 12 cizojazyčných textů. Překlady zachovávají historické názvy a majetkové vazby, katastrofální povodeň roku 1570 i odborně doloženou interpretaci tvrziště Černava jako středověkého protipovodňového areálu; nepřidávají návštěvnickou přístupnost.
- **29406 Březno / Sukorady / Lhotky / Nová Telib / Husí Lhota / Židněves / Čížovky:** 12/12 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 rozdílů `translations.cs`/master, všech 12 ID v němčině unikátních. Individuálně zkontrolováno všech 72 cizojazyčných textů. V `fact_001` doplněny do všech jazyků opomenuté osoby Markvart a Hostilka; v `fact_012` zpřesněn význam „úročních pozemků“ jako pozemků zatížených každoročními dávkami, nikoli automaticky nájemních pozemků. Jediná `location:null` zůstává u `fact_010` záměrně: jde o plošně rozptýlený archeologický soubor záchranného výzkumu na trase I/16, nikoli o jediný bod. Záznam není kvůli tomu strukturálně neúplný; lokalizaci nepřidávat odhadem.
- **29411 Loukov / Loukovec / Sezemice / Březina / Koryta:** 12/12 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 72 cizojazyčných textů. U `fact_005` byla aktualizována časová informace o loveckém zámečku Bažantnice: doplněn rozhovor s vlastníkem z června 2023 (památka zachráněná, ale neopravená) a regionální zpráva ze září 2026, která objekt stále popisuje jako torzo. Opraveny překlady ve všech 7 jazycích; přidány 2 aktuální zdroje. U `fact_001` zpřesněny čtyři překlady, které chybně zužovaly dřevěný most na pěší lávku.
- **29412 Příhrazy / Žďár / Skokovy:** 12/12 faktů v každém ze 7 jazyků; 0 krátkých masterů, 0 null poloh, 0 rozdílů `translations.cs`/master. Obsahově prověřeno všech 72 cizojazyčných textů. `fact_001` zpřesněn: Český ráj je na indikativním seznamu od 19. 1. 2001 (ref. UNESCO 1511), aktualizované podání „Bohemian Paradise Rock Cities“ bylo předloženo 18. 11. 2026 (ref. 7062); doplněn zdroj Ministerstva kultury. `fact_011` rozšířen o aktuální statické zajištění kaple v červnu 2026; světící biskup je nyní uveden plným jménem Dr. František Borgiáš Krásl, ověřeným v pramenech metropolitní kapituly. Obě změny promítnuty do všech 7 jazyků; přidány 3 nové zdrojové záznamy.
- **29413 Mohelnice nad Jizerou / Chocnějovice / Strážiště:** 16/16 faktů v každém ze 7 jazyků; 16 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 96 cizojazyčných textů. Opraveny dvě formulace u `fact_014`: španělština a italština nyní výslovně uvádějí barokní kapli, nikoli obecný barokní objekt. Záznam je v DB jednoznačně oddělen přes `country_code='CZ'`; stejné PSČ existuje také u německého záznamu Diesdorf (`country_code='DE'`) s `content:null`, který nebyl změnou dotčen.
- **29414 Jivina:** 11/11 faktů v každém ze 7 jazyků; 11 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 66 cizojazyčných textů. Zjištěno zásadní zkrácení `fact_004`: všech šest cizojazyčných verzí obsahovalo pouze závěrečnou větu a vynechávalo vznik jednoty Sokola v roce 1921, počátečních 60 členů, vlastní jeviště a elektrické osvětlení od roku 1935. Všech šest překladů bylo kompletně obnoveno a po zápisu ověřeno; délky 519–602 znaků.
- **29415 Klášter Hradiště nad Jizerou:** 8/8 faktů v každém ze 7 jazyků; 8 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 48 cizojazyčných textů. Zachována opatrná formulace o rozporném datování počátků kláštera, návaznosti kláštera–zámku–pivovaru, aktuální restauraci oltářního obrazu v roce 2026 a oddělení různých vrstev válečné paměti. Josef Dürich je v `29413` a `29415` pokryt odlišnými místními vazbami (rodiště v Borovicích vs. mlýn a působení v Klášteře), nejde o duplicitní fakt.
- **29421 Bělá pod Bezdězem / Vrchbělá:** 16/16 faktů v každém ze 7 jazyků; 16 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 96 cizojazyčných textů. U překladů doplněny chybějící významové detaily: dokončení převodu městských práv v listině z roku 1337; převzetí Bezdězu augustiniány roku 1624; odkrytí další části příkopu roku 2018; světové druhy dřevin v arboretu a srovnatelný počet bylin v botanické zahradě; konstrukční materiály věžových vodojemů; první železniční spojení České Lípy s tratí Praha–Liberec; vybavení sovětského posádkového městečka školou, nemocnicí, saunou a domem důstojníků. Doplněno do všech 6 cizojazyčných verzí příslušných faktů.
- **29423 Čistá / Stránka / Kováň:** 12/12 faktů v každém ze 7 jazyků; 12 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů a 0 rozdílů CS/master. Obsahově zkontrolováno všech 72 cizojazyčných textů; doplněny chybějící detaily v šesti jazycích a odstraněna duplicitní zdrojová URL. Čtyři null polohy jsou záměrné: pravěké nálezy z více míst, depot bez doloženého místa, historická cesta bez přesné trasy a historické koupaliště bez bezpečné lokalizace.
- **29424 Březovice:** 5/5 faktů v každém ze 7 jazyků; 5 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů CS/master. Všech 30 cizojazyčných textů individuálně prověřeno. V překladech `fact_002`, `fact_003` a `fact_004` doplněny vynechané závěrečné informace: propojené lesní prostředí jako součást přírodní hodnoty, pamětní deska Karla Sellnera na bývalé škole a připomínka obou světových válek v místních pietních místech.
- **29425 Katusice / Spikaly:** 8/8 faktů v každém ze 7 jazyků; 8 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 48 cizojazyčných textů. Vyřešena poloha `fact_003` — rodný dům Jana Nepomuka Krouského, usedlost čp. 12, nikoli kostel: přesný adresní bod náměstí Budovatelů 12, 50.4466025, 14.7792214, `type=historic_address`, `accuracy=exact`; identitu domu dokládá oficiální historie obce a adresní bod souřadnicový registr. `fact_001` zůstává bez bodu záměrně, protože archeologické nálezy pocházejí z více lokalit.
- **29426 Kluky / Skalsko / Kovanec / Vrátno / Zamachy–Syslov:** 7/7 faktů v každém ze 7 jazyků; 7 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 42 cizojazyčných textů. V překladech doplněny důležité detaily: závěr inspekce ministerstva vnitra a neúplná rehabilitace obětí politické perzekuce; dochování gotické věže a mladší hudební prameny v kostele ve Skalsku; přesná poloha nálezu mincovního depotu na jižním okraji farmy; stavební konstrukce Vrátenského větrného mlýna, jeho vzdálenost a přístup. Všechny polohy zůstávají doložené a vyplněné.
- **29427 Velké Všelisy:** 4/4 faktů v každém ze 7 jazyků; 4 unikátní ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně zkontrolováno všech 24 cizojazyčných textů. Doplněna opatrná datovací poznámka k první písemné zmínce (přednost má evidence NPÚ před popularizačními přehledy) a architektonické detaily zámku č.p. 18 (nepravidelný dvoukřídlý půdorys a přístup přes schodiště se zbytky ohradní zdi).
- **29428 Chotětov:** 6/6 faktů v každém ze 7 jazyků; 6 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Přesná poloha `fact_005` (šestiboká boží muka na severním okraji Chotětova, křižovatka na Bezno a Jizerní Vtelno) byla doplněna podle geotagovaného bodu: 50.3406528, 14.8029056, `type=monument`, `accuracy=exact`; přidán zdroj s mapovým bodem. Zbylých pět faktů má již doložené polohy.
- **29429 Sovínky / Kamenice:** 7/7 faktů v každém ze 7 jazyků; 7 unikátních ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. Individuálně prověřeno všech 42 cizojazyčných textů. U `fact_007` doplněno přesné datum obnovení statusu městyse — 10. října 2006, rozhodnutím Poslanecké sněmovny; všech šest překladů zachovává nyní přesné datum i institucionální kontext.
- **29430 Niměřice / Strenice / Rokytovec:** 4/4 faktů v každém ze 7 jazyků; 4 unikátní ID v každém jazyce, 0 chybějících překladů, 0 krátkých masterů, 0 null poloh a 0 rozdílů `translations.cs`/master. U `fact_001` doplněno datum dokončení opery *Braniboři v Čechách* (23. 4. 1863) a pražské premiéry (5. 1. 1866) podle katalogu Národního muzea; zdroj přidán do faktu i top-level zdrojů a datum promítnuto do všech 7 jazyků. Ostatní tři faktové překlady odpovídají masterům.

### 4.6 Doplněné polohy

Doplněno 18 původně chybějících poloh:

- 29307/fact_001, fact_003, fact_004
- 29413/fact_013
- 29423/fact_012
- 29424/fact_002, fact_003
- 29425/fact_002
- 29428/fact_001, fact_006
- 29442/fact_003, fact_005
- 29443/fact_001, fact_002, fact_003, fact_006
- 29445/fact_005
- 29446/fact_005

Počet původních `location:null`: 28. Zbývá **10**.

## 5. Zbývající location:null

### Doložené důvody — předběžně přijatelné výjimky

- 29406/fact_010 — pravěká sídliště zjištěná při stavbě I/16; jde o více archeologických lokalit.
- 29423/fact_002 — pravěké osídlení Čisté zahrnuje více nálezových míst.
- 29423/fact_008 — přesné místo nálezu železného depotu není doloženo.
- 29423/fact_010 — historická cesta již není v terénu jednoznačně sledovatelná a jde o delší trasu.
- 29423/fact_011 — přesná poloha historického koupaliště není spolehlivě určena.
- 29425/fact_001 — archeologické nálezy a pohřebiště bez bezpečně určeného bodu.
- 29448/fact_003 — text pojednává o rozptýlené textilní výrobě; jednotlivé provozy nejsou spolehlivě lokalizovány.

### Ještě prověřit

- 29301/fact_009 — EVL Bezděčín (CZ0213776, 81,18 ha) je plošná lokalita. AOPK publikuje polygonovou vrstvu Natura 2000; polygon je doložen, ale pro DB zatím nebyl bezpečně určen a read-backem ověřen reprezentativní bod. Do té doby ponechat `location:null`.
- 29425/fact_003 — rodný dům Jana Nepomuka Krouského čp. 12; dohledat přesný adresní bod, neumisťovat automaticky na kostel.
- 29428/fact_005 — boží muka na severním okraji Chotětova; dohledat přesný bod u křižovatky.

## 6. Turistická a historická úplnost — zásadní zjištění

Potvrzené nebo silně doložené tematické body:

- Zámek Mnichovo Hradiště a setkání tří panovníků / Svaté aliance v roce 1833 — kandidát je v 29501/fact_001; při sémantické kontrole ověřit, že text explicitně uvádí rok a účastníky.
- Drábské světničky a Valečov — zahrnuty v 29501/fact_002 a fact_003.
- Bedřich Smetana a Jabkenice — prověřit explicitní zastoupení v 29445.
- Laurin & Klement a automobilová historie Mladé Boleslavi — ověřit rozsah a případné duplicity v 29301.
- **Bitva u Mnichova Hradiště 28. 6. 1866 — doplněno jako 29501/fact_019.** Samostatný fakt popisuje útok u Ševčína a Bílé Hlíny, ústup přes Klášter Hradiště nad Jizerou, zapálení mostu u zámku, pruské překročení Jizery a ústup směrem k Bosni a Valečovu. Připojen je pomník na Habru (přesné souřadnice 50.5212167, 14.9426778) a tři zdroje: Vojenský historický ústav, městský Kamelot a Vets.cz. Fact má 619 znaků a překlad do všech 7 jazyků. Původní 29501/fact_004 na Mužském zůstává tematicky oddělený.
- Další osobnosti narozené v Mladé Boleslavi, které byly doplněny: Eva Bosáková, Adina Mandlová, Jan Železný, František Gellner, Jan Konůpek. Kosmonoský Alois Bubák doplněn do 29306.

Významné zdroje pro další práci:

- Vojenský historický ústav: https://www.vhu.cz/zacatek-valky-roku-1866-na-ceskem-bojisti/
- Město Mnichovo Hradiště, Kamelot 03/2016: https://www.mnhradiste.cz/data/stories/dokumenty/kamelot/2016/03_kamelot_2016.pdf
- Český olympijský tým — Eva Bosáková: https://www.olympijskytym.cz/athlete/eva-vechtova
- Český olympijský tým — Jan Železný: https://www.olympijskytym.cz/athlete/jan-zelezny
- Česká divadelní encyklopedie — Adina Mandlová: https://encyklopedie.idu.cz/index.php?Itemid=297&catid=11&id=4089%3Amandlova-adina&lang=cs&option=com_content&view=article
- Biografický slovník českých zemí — František Gellner: https://biography.hiu.cas.cz/wiki/GELLNER_Franti%C5%A1ek_1881-%3F1914
- Biografický slovník českých zemí — Jan Konůpek: https://biography.hiu.cas.cz/wiki/KON%C5%AEPEK_Jan_1883%E2%80%931950
- Biografický slovník českých zemí — Alois Bubák: https://biography.hiu.cas.cz/wiki/BUB%C3%81K_Alois_1824%E2%80%931870

## 7. Otevřené kontroly — audit není dokončen

1. Kompletní individuální sémantická kontrola de/en/es/fr/it/nl pro všech 328 faktů. Nově obsahově revidováno 29301/fact_001–fact_011, kompletně prověřeno 29306/fact_001–fact_012, 29307/fact_001–fact_004, 29401/fact_001–fact_006 + fact_008, 29402/fact_001–fact_004, 29403/fact_001–fact_004, 29404/fact_001–fact_004 + fact_006, 29405/fact_001–fact_002, 29406/fact_001–fact_012, 29411/fact_001–fact_012, 29412/fact_001–fact_012, 29413/fact_001–fact_016, 29414/fact_001–fact_011 a 29415/fact_001–fact_008; u 29307 opravena jednotka Václava Tarantíka, u 29406 zpřesněny překlady dvou historických nuancí, u 29411 aktualizován stav zámečku Bažantnice, u 29412 aktualizovány údaje o UNESCO a kapli ve Žďáru, u 29413 opraveny dvě formulace, u 29414 kompletně obnoveny překlady fact_004. Tyto záznamy mají úplné překladové sady a 0 rozdílů CS/master. Zbývající PSČ nejsou sémanticky uzavřena.
2. **29501 — překladová struktura uzavřena:** 19/19 položek v každém ze 7 jazyků; 19/19 unikátních ID, CS/master mismatch 0. Při navazující sémantické kontrole ještě ověřit přesnost cizojazyčných formulací.
3. Bitva 28. 6. 1866 je samostatně pokryta v `29501/fact_019`; při závěrečné sémantické kontrole ověřit překlady a návaznost na `fact_004`.
4. Dokončit 3 zbývající geolokační ověření z oddílu 5.
5. Prověřit duplicity názvů, textů a zdrojových URL napříč všemi 40 PSČ.
6. Provést reklamní scan ve všech jazycích.
7. Dokončit kontrolu oficiálních sídel obsluhujících pošt a případné top-level synchronizace administrativních polí.
8. Provést závěrečný strukturální a enum validation read-back všech 40 PSČ.
9. Zkontrolovat a synchronizovat mapové body; dosud nebyla provedena kontrola tabulky mapových bodů.

## 8. Pravidla dokončení

- Neprovádět `data_version=5`, `status=published`, Neon import, backup ani read-only lock bez výslovného navazujícího pokynu uživatele.
- Nezasahovat do existujících platných souřadnic.
- Nepřidávat výplňový obsah; null ponechat, pokud bod nelze spolehlivě doložit.
- Po dokončení každého PSČ zaznamenat stručný checkpoint: počet faktů, 7 jazyků, opravy, validace, nevyřešené výjimky.
- Pokračovat přesně podle `sequence.json`; nevracet se k již uzavřenému PSČ bez konkrétní vady nebo nového důkazu.

**Další krok:** pokračovat podle `sequence.json` u 29429: prověřit úplnost a sémantiku všech 7 jazyků, zdroje, duplicity a lokalizace; zvláštní pozornost věnovat otevřeným lokalitám a bezpečnému geokódování; poté postupovat sekvenčně. U 29301 zůstává samostatně otevřená bezpečná reprezentativní poloha EVL Bezděčín/fact_009 a obecné auditní kontroly rozsahu. Nezačínat znovu inventuru ani opakovat potvrzené opravy.
