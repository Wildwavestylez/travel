# Registr auditních taháků — Česko

**Pravidlo:** před každým auditem nebo pokračováním nejprve vyhledej rozsah v tomto registru, otevři existující tahák a pokračuj v něm. Nevytvářej nový dokument pro již evidovaný rozsah.

| Kanonické ID | Rozsah | Kanonický tahák | Stav oprav | Stav úplného auditu | Poslední aktualizace |
|---|---|---|---|---|---|
| CZ-60200-64400 | PSČ 60200–64400 | [60200-64400_audit.md](60200-64400_audit.md) | Opravné práce uzavřeny | IN PROGRESS — úplné pokrytí A–I zatím není doloženo | 2026-11-16 |
| CZ-10000-15900 | PSČ 10000–15900 | [10000-15900_audit.md](10000-15900_audit.md) | Bez oprav — audit read-only | IN PROGRESS — potvrzen HIGH nález county (25 záznamů) a map_category (49 faktů); B-01/B-02 zamčeno, B-03–B-06 částečně otevřeno; C–H otevřené | 2026-11-16 |

**Aktualizace 2026-11-16:** U rozsahu CZ-60200-64400 bylo uzavřeno pravidlo poštovních pracovišť: zrušená nebo přemístěná přepážka sama o sobě neblokuje audit. Úplný audit A–I zůstává `IN PROGRESS`; navazuje se v existujícím taháku se započtením všech již provedených oprav a kontrol.

## Pravidla registru
- Identita auditu je dána zemí a přesným rozsahem, nikoli konverzačním oknem.
- Při překryvu rozsahů použij existující širší tahák a eviduj dílčí oblast uvnitř něj.
- Nový tahák vytvoř pouze po ověření, že neexistuje stejný ani použitelný překrývající se audit.
- Každý tahák musí obsahovat checkpoint, zamčená rozhodnutí, otevřené nálezy a přesný další krok.
- Historii nemaž; změny přidávej jako nové revize.

**Doplnění 2026-11-16:** V kanonickém taháku byly append-only zapsány a po opětovném načtení ověřeny dílčí výsledky **A-01** (inventární reconciliace HOTOVO: 27/27 PSČ, sequence/groups 2 677/2 677 bez rozdílů) a **B-01** (okres/kraj a district proti ČSÚ/RÚIAN HOTOVO; celá oblast B zůstává ČÁSTEČNĚ DOLOŽENO kvůli položkovému ověření ČSÚ 0028 a nezávislému ověření sídel pošt). Další krok: dokončit zbývající B bez opakování A-01 a B-01.


**Doplnění 2026-11-16 — HOTOVO = ZAMČENO:** V auditu CZ-60200-64400 bylo zavedeno nevratné provozní pravidlo, že každá uzavřená kontrola se započítává a neopakuje. GEO-01 až GEO-08, A-01, B-01 v rozsahu dodatku a ostatní výslovně uzavřené nálezy zůstávají zamčené. Pokračuje se výhradně v otevřených položkách uvedených v oddílu 14 kanonického taháku. Znovuotevření je možné pouze na základě nového konkrétního důkazu nebo relevantní změny standardu, schématu či auditovaných dat.


**Doplnění 2026-11-16 — CZ-10000-15900:** Vytvořen kanonický tahák. A-01 je HOTOVO/ZAMČENO: inventář 33/33, bez chybějících, neočekávaných či duplicitních PSČ; všech 33 je v RÚIAN CSV. Globální shoda sequence/groups převzata z již uzamčené kontroly při identickém SHA sequence. Základní jazyková kontrola 33/33 (7 jazyků a shodná ID/pořadí) uzavřena jako dílčí podkontrola. I-01 zůstává částečně doložena; zjištěno 49 chybějících map_category (HIGH) v PSČ 10000–10900 a jedna chybějící explicitní location (10900/fact_004, MEDIUM). Další krok: B, bez opakování A-01.


**Checkpoint 2026-11-16 — B-02 / C-02 / G-H-01:** ČSÚ 0028 a RSO metodika potvrzeny; 16/27 PSČ individuálně doloženo ve veřejných detailech budov RSO, všech 27 již dříve v RÚIAN inventáři (A-01 zamčeno). Úplný položkový export 0028 zůstává otevřený, B není uzavřeno. Přesný titulní scan 176 faktů bez duplicit; opakovaný název Husova sboru označuje dvě různé lokality. Zjištěny dílčí jazykové nálezy u 61400/NL a 61500/DE,NL,EN,ES,FR,IT; bez produkčních změn. Podrobnosti v oddílu 15 kanonického taháku.


**Doplnění 2026-11-16 — G-H-02:** U 61500/fact_003 byly ve všech sedmi jazykových verzích zjištěny chybějící stručné vysvětlení premonstrátského řádu a chybějící určení Zábrdovic jako městské čtvrti Brna; nález je otevřený, bez změny Supabase. Viz oddíl 16 kanonického taháku.


**Doplnění 2026-11-16 — G-H-03:** NL verze 61600 a 61700 obsahují nepřirozené adjektivum `Brno'se` a nevysvětlené lokální názvy (Žabovřesky, Komárov, Burianovo/Mariánské náměstí, Kraví hora). Nález otevřený; ostatních šest jazyků tímto dodatkem nebylo hodnoceno. Viz oddíl 17 kanonického taháku.


**Doplnění 2026-11-16 — E-02:** Nové tematické kandidáty: Komec – 25m komínová vyhlídka (61700, silný kandidát s adresou potvrzenou RSO ČSÚ); Wilsonův les – 34ha lesopark a vyhlídka (61600, přesný bod nutno ověřit kvůli více katastrálním územím); Slévárna Uxů (60200, průmyslové dědictví, zatím REVIEW kvůli aktivnímu provozu a neověřené přístupnosti; výslovně nepatří do 61700). Viz oddíl 18 kanonického taháku.


**Doplnění 2026-11-16 — E-03:** Pro 61400 nalezeny dva silné kandidáty: 250m lávka nad Maloměřickým seřazovacím nádražím (oficiální Go To Brno + RSO potvrzuje PSČ 61400 na obou koncích) a Cacovický ostrov (městský přírodní/rekreační areál, regionální biocentrum; přesný bod před vložením ověřit). Seřazovací nádraží samo zůstává jen kontextem; Sluneční lázně prověřeny a vyřazeny jako běžný komunitní prostor bez samostatné trvalé návštěvnické hodnoty. Viz oddíl 19 taháku.


**Doplnění 2026-11-16 — E-04:** Oficiální web Komec potvrdil veřejnou přístupnost 25m rozhledny na komíně v návštěvních hodinách areálu; RSO potvrzuje Hněvkovského 730/62c, 61700. Komec je silný kandidát E pro 61700, ale nebyl vložen do Supabase. Viz oddíl 20 taháku.


**Doplnění 2026-11-16 — I-01:** Oficiální AJV běh nebylo možné spustit: balíček `ajv` v Node prostředí chybí a npm registry není dostupná (timeout). Předchozí vlastní validátor zůstává uzamčený; oficiální AJV je `BLOCKED / NOT RUN`, nikoli PASS/FAIL. Bez souhlasu nebyly přidány závislosti ani CI workflow. Viz oddíl 21 taháku.


**Doplnění 2026-11-16 — G-H-04:** NL verze 61800 a 61900: zastaralé/stigmatizující `Geesteszieken`, nepřirozené `Brno'se`, nevysvětlený Sokol v 61800/fact_003 a chybějící kontext městských čtvrtí Horní Heršpice/Přízřenice. Nález otevřený; ostatních šest jazyků nebylo tímto dodatkem hodnoceno. Viz oddíl 22 taháku.


**Doplnění 2026-11-16 — G-H-05:** NL verze 62000/fact_001 a 62100/fact_002–004,008 neidentifikují Tuřany, Řečkovice a Medlánky jako městské části Brna; u 62100/fact_003 zůstává místní název `V šraňcích` bez vysvětlení. Nález otevřený; pozitivní kulturní a historická vysvětlení v dalších faktech zachována. Viz oddíl 23 taháku.


**Doplnění 2026-11-16 — G-H-06:** NL verze 62300 a 62400: nedostatečný kontext městských částí Kohoutovice/Komín, nevysvětlený Poesiomat, Ruský vrch a Kaplanovy turbíny, nepřirozené `Komínse`. Nález otevřený; ostatních šest jazyků nebylo tímto dodatkem hodnoceno. Viz oddíl 24 taháku.


**Doplnění 2026-11-16 — pokračování CZ-10000-15900, oblast B:** Tahák byl rozšířen a znovu načten. B-01 (oficiální existence kódů / RÚIAN presence 33/33, 80 074 adresních bodů) a B-02 (city Praha + state Hlavní město Praha, 33/33) jsou HOTOVO/ZAMČENO. B zůstává ČÁSTEČNĚ DOLOŽENO: otevřen nález MEDIUM na county u 25 PSČ, chybějící district u 10100/10200, lokalitní rozdíly sequence/RÚIAN u 23 PSČ (potvrzená mezera sequence u 10000/Žižkov; rozpory 10900 a 15800 vyžadují adresní potvrzení) a nedokončené primární ověření některých sídel pošt. Přesný checkpoint je v oddílech 7–9 kanonického taháku. A-01 zůstává zamčeno a nebylo opakováno.


**Doplnění 2026-11-16 — G-H-07:** NL verze 62500 a 62700: chybí kontext Kejbalů/Bohunic, vysvětlení pomologie, Eneolitu a Flugmotorenwerke Ostmark, lokalizace Stránské skály/Slatiny a vysvětlení sochy `Slévač`. Pozitivní výklad Stolpersteine zachovat. Nález otevřený. Viz oddíl 25 taháku.


**Doplnění 2026-11-16 — G-H-08:** NL verze 62800 a 63400: nedostatečné vysvětlení Líšně/Nového Lískovce jako městských částí Brna a odborných pojmů Bandkeramická a Jordanówská kultura. Nález otevřený; pozitivní historický a technický kontext zachován. Viz oddíl 26 taháku.


**Doplnění 2026-11-16 — G-H-09:** NL verze 63500–63700: chybí kontext městských částí Kníničky/Židenice/Jundrov/Bystrc/Kohoutovice, u Mniší hory chybí vysvětlení kopce a u 63700/fact_003 není vysvětlen spolek Orel (katolická tělovýchovná organizace). Nález otevřený. Viz oddíl 27 taháku.


**Doplnění 2026-11-16 — G-H-10:** NL subchecks 63800 (4 fakta) and 63900 (3 fakta) dokončeny bez blokujícího nálezu a zamčeny jako `NL / LOCKED / PASS`. NL/64100 zůstává otevřené kvůli chybějícímu vysvětlení Žebětína jako městské části Brna v samostatných faktech. Ostatní jazyky nejsou tímto zamčením dotčeny. Viz oddíl 28 taháku.


**Doplnění 2026-11-16 — G-H-11:** NL/64400 (4 fakta) dokončeno bez blokujícího nálezu a zamčeno jako `NL / LOCKED / PASS`. NL/64200 zůstává otevřené kvůli chybějícímu kontextu Bosonoh a nevysvětlené zkratce ÚAN I/Eneolitu/Halštatu; NL/64300 kvůli chybějícímu kontextu Chrlic a nevysvětlenému letounu Il-2. Viz oddíl 29 taháku.


**Doplnění 2026-11-16 — G-H-12:** NL/60200 (18 faktů) obsahuje nepřirozené `Brnoose bouwmeester` a nevysvětlený pojem `Panduren`; při redakci doplnit kontext Černých Polí/Brno-střed. Ostatní kulturní vysvětlení a rozlišení legendy/faktu jsou v pořádku. NL subcheck zůstává otevřený. Viz oddíl 30 taháku.


**Doplnění 2026-11-16 — G-H-13:** NL/60300 obsahuje zavádějící překlad `Bauer-ramp` pro historický velodrom; NL/61200 má nepřirozené `Brnoose`, nepřesné `Hus-vergaderzaal` a odborný termín kartuziánů bez krátkého vysvětlení. Nález otevřený. Viz oddíl 31 taháku.


**Doplnění 2026-11-16 — G-H-14:** NL/61300: Villa Tugendhat nemá v úvodní větě jasné umístění v Brně; `Brnoose architect` je nepřirozené; Černá Pole u dětské nemocnice nejsou identifikována jako městská čtvrť Brna. Nález otevřený. Viz oddíl 32 taháku.


**Checkpoint 2026-11-16 — G-H-NL-01:** Nizozemská jazyková/kulturní kontrola dokončena pro všech 27 PSČ a 176 faktů; fáze review je `HOTOVO / ZAMČENO`, aby se neopakovala. NL PASS: 63800, 63900, 64400 (11 faktů); NL nálezy k nápravě: 24 PSČ (60200, 60300, 61200, 61300, 61400, 61500, 61600, 61700, 61800, 61900, 62000, 62100, 62300, 62400, 62500, 62700, 62800, 63400, 63500, 63600, 63700, 64100, 64200, 64300). Ostatních šest jazyků zůstává otevřených; G/H jako celek není PASS. Viz oddíl 33 taháku.


**Doplnění 2026-11-16 — C-03:** Přesné duplicity 176 faktů zkontrolovány a zamčeny: 0 duplicitních titulů, 0 duplicitních celých textů; jediný opakovaný název místa „Husův sbor“ odpovídá dvěma různým budovám (61200 a 62000). GEO-01 až GEO-08 se znovu neprovádějí. Viz oddíl 34 taháku.


**Aktuální stav 2026-11-16 — checkpoint 35:** Zamčené GEO-01 až GEO-08 a další dříve hotové kontroly se neopakují. C přesné duplicity je HOTOVO/ZAMČENO. NL review 27/27 PSČ a 176/176 faktů je dokončen a zamčen; NL PASS 63800, 63900, 64400, otevřené NL nálezy u 24 PSČ. B-02 čeká na položkový export 0028 pro 11 kódů. E má nové kandidáty Komec (61700), Wilsonův les (61600), lávku a Cacovický ostrov (61400), slévárnu Uxů (60200, REVIEW); Sluneční lázně vyřazeny. G/H zbývá šest jazyků. I: oficiální AJV `BLOCKED / NOT RUN`. Produkční Supabase data nebyla změněna. Kompletní open-only fronta a sekce **PROBLÉMY K VYŘEŠENÍ** v oddílu 35 kanonického taháku.


**Doplnění 2026-11-16 — B-03:** B je `HOTOVO / ZAMČENO` pro všech 27 PSČ. Po původních 16 individuálních RSO záznamech z B-02 bylo doloženo dalších 11 kódů (61300, 61500, 61600, 61800, 61900, 62300, 62500, 62800, 63600, 63800, 63900). Oficiální RSO pole `PSC` a `NAZ_POSTA` používají číselník 0028 a metodika určuje RÚIAN jako referenční zdroj. Všech 27 je v RÚIAN inventáři A-01; obec `city: Brno` odpovídá obci Brno. Neřeší se provozní stav přepážek. Viz oddíl 36 taháku.


**Nejnovější stav 2026-11-16 — checkpoint 37:** B je HOTOVO/ZAMČENO pro 27/27 PSČ na základě RSO adresních záznamů a vazby polí `PSC`/`NAZ_POSTA` na číselník 0028; není nutný další export ani kontrola provozu poboček. C přesné duplicity zamčeny; GEO-01 až GEO-08 zůstávají zamčené. NL review 27/27 PSČ a 176/176 faktů dokončeno a zamčeno (3 dílčí PASS, 24 PSČ s nálezy); zbývá šest jazyků. E zůstává otevřené s kandidáty Komec, Wilsonův les, lávka nad Maloměřickým nádražím, Cacovický ostrov a slévárna Uxů (REVIEW). I oficiální AJV `BLOCKED / NOT RUN`. Žádná produkční data ani statusy nebyly změněny. Otevřená fronta v oddílu 37 taháku.


**Doplnění 2026-11-16 — pokračování CZ-10000-15900, oblast B:** B-01 (ČSÚ 0028, zdrojové záznamy 33/33) a B-02 (RÚIAN CSV 33/33, 80 074 adresních míst) uzavřeny a zamčeny. B-03 odhalilo 25/33 nesprávných hodnot `county=Hlavní město Praha`; správná okresní hodnota je `Praha`, zatímco `state=Hlavní město Praha` je správně. B-04: chybějící `district` u 10100 a 10200; 10100 doloženo jako Vršovice, 10200 zůstává k ověření fyzického sídla. B-05: otevřené adresní konflikty 10900 a 15800/Radlice. B-06: aktuální oficiální detail České pošty potvrzen pro 5/6 záznamů bez delivery-office note; 10200 zůstává bez současného detailu pobočky. Supabase zůstala beze změny.


**Doplnění 2026-11-16 — G-H-DE-01:** Německá verze 60300 (7 faktů) zkontrolována a zamčena `LOCKED / PASS`. DE/60200 (18 faktů) zkontrolováno; otevřené dva konkrétní nálezy: vysvětlit Černá Pole jako městskou čtvrť Brna (fact_005) a pojem Panduren (fact_015). Ostatních 25 PSČ v DE a jazyky cs/en/es/fr/it zůstávají otevřené. Viz oddíl 38 taháku.


**Doplnění 2026-11-16 — G-H-DE-02:** Německé verze 61200 (8 faktů) a 61300 (5 faktů) zkontrolovány. Otevřené nálezy: u 61200/fact_001,003,004,005 doplnit, že Královo Pole/Na Slovanech leží v Brně; u 61300/fact_001 výslovně lokalizovat Villu Tugendhat do Brna a u fact_003,005 vysvětlit Černá Pole jako městskou čtvrť. DE/60300 zůstává zamčeno PASS; ostatní PSČ v DE a jazyky cs/en/es/fr/it otevřené. Viz oddíl 39 taháku.


**Doplnění 2026-11-16 — G-H-DE-03:** Německé verze 61400 (5 faktů) a 61500 (6 faktů) zkontrolovány. DE/61400: doplnit Brno u Husovic (fact_002–003) a Obřan/Maloměřic (fact_005). DE/61500: doplnit Brno u Židenic (fact_002) a Zábrdovic + stručné vysvětlení premonstrátů (fact_003); sjednotit vlastní název Karáskovo náměstí v fact_005. DE/60300 zůstává zamčeno PASS; nálezy u DE/60200, 61200–61500 otevřené. Viz oddíl 40 taháku.


**Doplnění 2026-11-16 — G-H-DE-04:** Německé verze 61600 (5 faktů) a 61700 (5 faktů) zkontrolovány. DE/61600: doplnit Žabovřesky jako městskou část Brna ve fact_001–003 a sjednotit vlastní název Burianovo náměstí. DE/61700: doplnit Komárov jako městskou část Brna ve všech pěti samostatných faktech. DE/60300 zůstává zamčeno PASS; DE/60200 a 61200–61700 mají otevřené konkrétní nálezy. Viz oddíl 41 taháku.


**Doplnění 2026-11-16 — G-H-DE-05:** Německé verze 61800 (5 faktů) a 61900 (6 faktů) zkontrolovány. DE/61800: historické stigmatizující `Geisteskranke` označit jako dobový název a v popisu neutralizovat; zachovat oficiální `Olomoucká` místo překladu `Olmützer Straße`; vysvětlit Sokol a lokalizovat Černovice do Brna. DE/61900: doplnit Brno-Horní Heršpice u fact_002–004 a současné začlenění Přízřenic do Brna u fact_005. Viz oddíl 42 taháku.


**Doplnění 2026-11-16 — G-H-DE-06:** Německé verze 62000 (7 faktů) a 62100 (8 faktů) zkontrolovány. DE/62000: doplnit Brno-Tuřany u fact_001–002 a Brno u Holáseckých jezer a mohyl v krajině Tuřan (fact_003–004). DE/62100: doplnit Brno-Medlánky u bývalého lomu Medlánecká skalka (fact_008). Viz oddíl 43 taháku.


**Doplnění 2026-11-16 — G-H-DE-07:** Německé verze 62300 (9 faktů) a 62400 (6 faktů) zkontrolovány. DE/62300: doplnit lokalizaci kaple, přírodní památky a pamětních desek do Brna-Kohoutovic; vysvětlit Poesiomat. DE/62400: důsledně určit Komín jako městskou část Brna v samostatných faktech a vysvětlit Kaplanovy vodní turbíny. Viz oddíl 44 taháku.


**Doplnění 2026-11-16 — G-H-DE-08:** Německé verze 62500 (9 faktů) a 62700 (8 faktů) zkontrolovány. DE/62500: doplnit Brno-Bohunice u Kejbalů, Bohunic a Starého Lískovce; vysvětlit pomologii. DE/62700: lokalizovat Stránskou skálu, Slatinu, Slatinku a Černovičky do Brna-Slatiny; vysvětlit Flugmotorenwerke Ostmark, pozdní eneolit a sochu Slévač. Pozitivní výklad Stolpersteine zachovat. Viz oddíl 45 taháku.


**Doplnění 2026-11-16 — G-H-DE-09:** Německé verze 62800 (7 faktů) a 63400 (4 fakta) zkontrolovány. DE/62800: doplnit Brno-Líšeň u Starých Zámků, Líšně, Kostelíčku, trati, Zetoru a Mariánského údolí. DE/63400: doplnit Brno-Nový Lískovec ve všech čtyřech faktech a vysvětlit odborné pojmy Linearbandkeramik/Jordanów-Kultur. Viz oddíl 46 taháku.


**Doplnění 2026-11-16 — G-H-DE-10:** Německé verze 63500, 63600 a 63700 zkontrolovány. DE/63500: doplnit Brno-Kníničky a Brno-Bystrc, vysvětlit Mniší horu jako kopec; DE/63600: doplnit Brno-Židenice u Bílé hory; DE/63700: doplnit Brno-Jundrov/Holedná a vysvětlit Orel jako českou katolickou tělovýchovnou organizaci. Viz oddíl 47 taháku.


**Oprava 2026-11-16 — G-H-DE-10:** Rozsah je 10 faktů, nikoli 9: 63500 = 3, 63600 = 3, 63700 = 4. Viz opravný oddíl 48 taháku; věcné nálezy zůstávají beze změny.


**Doplnění 2026-11-16 — CZ-10000-15900 / oblast B, dodatek 9:** Adresní VDP RÚIAN důkazy potvrzují konkrétní adresy v Radlicích s PSČ 15800 (Radlická 364/152, 365/154; jiné adresy v Radlicích mají 15000) a ve Štěrboholech s PSČ 10900 (Černokostelecká 312/134; další adresy mají 10200). Sequence nebyla změněna; rozsah obou lokalit vyžaduje samostatné rozhodnutí. Doplňková kontrola district zjistila chybějící hodnoty u 10100, 10200, 10300, 15400 a sémanticky chybnou hodnotu „Hlavní město Praha“ u 10400, 10700, 10800, 10900, 15900. B-01/B-02 zůstávají zamčené; B-04 otevřeno, B-05 adresní ověření dokončeno s nálezy k rozhodnutí, B-06 čeká pouze na fyzické sídlo 10200. Supabase beze změny. Viz oddíl 9 kanonického taháku.


**Doplnění 2026-11-16 — CZ-10000-15900 / oblast B, dodatek 10:** Aktuální oficiální detaily České pošty potvrzují fyzická sídla: 10300 Kolovraty, 10400 Uhříněves, 10700 Dubeč, 10900 Horní Měcholupy, 15400 Slivenec a 15900 Velká Chuchle. Pro tyto záznamy jsou doloženy kandidátní opravy district, ale Supabase nebyla změněna. 10800 zůstává bez doloženého současného sídla pošty (historická veřejná pobočka zrušena); 10200 zůstává REVIEW REQUIRED. B-04 otevřeno kvůli těmto dvěma případům a samostatné opravné fázi; B-06 otevřeno pouze pro 10200. Viz oddíl 10 taháku.


**Doplnění 2026-11-16 — CZ-10000-15900 / zahájení oblasti C:** Read-only inventura Supabase: 33 PSČ, 212 faktů, 189 neprázdných location objektů a 23 explicitních null location. První průchod 10000–11900 odhalil pravděpodobnou duplicitu kaple na návsi v Dolních Měcholupech mezi 10900 fact_006 a 11101 fact_002; přesné PSČ kaple zůstává nevyřešené, protože ulice Na návsi obsahuje adresní místa obou PSČ a uložený bod 10900 odkazuje na sousední adresní objekt, nikoli výslovně na kapli. U 11101 jsou 4/5 faktů bez přesné polohy. C-00 inventura je uzamčena; C-01 zůstává otevřeno. Žádná změna Supabase. Viz oddíl 11 taháku.


**Doplnění 2026-11-16 — oblast C / první geografický průchod:** Prohlédnuto všech 212 faktů a jejich uložené polohy v rozsahu 10000–15900. U 12000–15900 nebylo při porovnání se sequence.json potvrzeno jednoznačné chybné přiřazení; Pacoldova vápenka patří do Velké Chuchle (15900) a Lahovice mají doložené adresy 15900. Celkem 23 faktů má explicitní null location; jejich oprávněnost se musí posoudit jednotlivě, nikoli automaticky doplňovat. Potvrzený obsahový duplikát: 10900 fact_006 × 11101 fact_002 (kaplička v Dolních Měcholupech). Možné širší překryvy: obecný přehled Pražského hradu (11900 fact_007) a Vyšehradu (12800 fact_001) vůči dílčím faktům. C zůstává otevřeno; žádná produkční data změněna. Viz oddíly 11–12 taháku.


**Doplnění 2026-11-16 — oblast C / strukturální validace:** Oprava počtu: 189 neprázdných location objektů, 22 explicitních null a 1 chybějící vlastnost location (10900 fact_004 „Pod Vartou“). U všech 189 objektů jsou povinné klíče, číselné souřadnice v rozsahu WGS84, platné accuracy a HTTP(S) zdroje. **HIGH / FIX REQUIRED:** 49 faktů v PSČ 10000–10900 nemá povinné map_category; 12800 fact_007 má nepovolený location.type botanical_garden a 12800 fact_009 sculpture_garden. Zbývajících 163 map_category hodnot je platných. Žádné opravy v Supabase. Viz oddíl 13 taháku.


**Doplnění 2026-11-16 — oblast C / tematické překryvy:** Celé texty 11900 fact_007 (obecný přehled Pražského hradu) vůči faktům 001–006 a 12800 fact_001 (obecný přehled Vyšehradu) vůči faktům 002–005 byly porovnány. Nejde o duplicitní příběhy; obecné přehledy přidávají širší historický kontext a konkrétní fakta mají vlastní témata. Tyto dvě kontroly jsou uzavřeny. Potvrzená duplicita kaple 10900 × 11101 zůstává otevřená. Viz oddíl 14 taháku.


**Oprava 2026-11-16 — počet faktů v C-02:** Rozsah 12000–15900 obsahuje 113 faktů, nikoli 120. Rozsah 10000–11900 obsahuje 99; celkem 212 (99 + 113). Viz oddíl 15 taháku.


**Nové pravidlo 2026-11-16 — BRÁNA 0:** Před jakýmkoli auditem A–I musí proběhnout nezávislá inventura významných památek a zajímavostí celého území, vytvořená z oficiálních a odborných katalogů a následně porovnaná s databází. Chybějící zásadní památky jsou závažný nález. Nový povinný postup je první položkou každého taháku; viz V1.1 prompt_audit.md, oddíl 0. Praha 10000–15900: první screening odhalil kandidátní mezery (Krematorium Strašnice, Vinohradský hřbitov, kostel Neposkvrněného početí Panny Marie, Rangherka, Hostivařská přehrada, Nuselský most, Nový židovský hřbitov) a další kandidáty k prověření. Brána 0 zůstává ČÁSTEČNĚ DOLOŽENO; audit nelze uzavřít.


**Doplnění 2026-11-16 — vyřešení kapličky Dolní Měcholupy:** Oficiální VDP RÚIAN uvádí adresní místo Na návsi 2/16 (ID 22548572) s PSČ 11101; NPÚ umisťuje kapličku do středu bývalé návsi. Kaplička zůstává pouze v 11101 fact_002, doplněn přibližný mapový bod podle adresního místa 2/16 (50.054963055556, 14.562278888889). Duplicitní 10900 fact_006 odstraněn. Supabase ověřena SELECTem: 33 PSČ, 211 faktů. Viz oddíl 17 taháku. 


**Doplnění brány 0 — zpřesnění důkazů:** Potvrzené kandidátní mezery: Krematorium Strašnice (Vinohradská 2263/214, 10000), Vinohradský hřbitov (Vinohradská 294/212, 10000), Vršovický zámeček/Rangherka (Moskevská 120/21, 10100) a Nový židovský hřbitov (Izraelská 1, 13000). Hostivařská přehrada a Nuselský most zůstávají REVIEW REQUIRED kvůli geografickému přesahu/adresní nejednoznačnosti. Brána 0 stále ČÁSTEČNĚ DOLOŽENO a blokuje uzavření auditu. Viz oddíl 18 taháku.


**Doplnění 2026-11-16 — G-H-DE-11:** Německé verze 63800 (4 fakta) a 63900 (3 fakta) zkontrolovány. DE/63800: doplnit Brno-Lesná ve všech čtyřech samostatných textech; datum svěcení kostela 20. 9. 2026 je již minulostí a formulace v němčině odpovídá. DE/63900: výslovně lokalizovat AZ/N Tower, Ústřední hřbitov a krematorium do Brna v těle každého faktu. Viz oddíl 49 taháku.


**Doplnění 2026-11-16 — G-H-DE-12:** Německé verze 64100 (10 faktů) a 64200 (11 faktů) zkontrolovány. DE/64100: doplnit Brno-Žebětín u fact_001,002,004,006,008,009,010; u fact_001 ověřit přesné označení závodu 1949 (F1-reglement vs. mistrovství světa). DE/64200: všech 11 faktů potřebuje úvodní lokalizaci do Brna-Bosonoh; fact_004 navíc může vysvětlit archeologické epochy. Viz oddíl 50 taháku.


**Doplnění 2026-11-16 — G-H-DE-13:** Německé verze 64300 (6 faktů) a 64400 (4 fakta) zkontrolovány. DE/64300: doplnit Brno-Chrlice ve fact_001–003,005–006; fact_004 již uvádí Bahnhof Brno-Chrlice. DE/64400: doplnit Brno-Soběšice u fact_001,002,004; fact_003 již uvádí severní okraj Brna. V rozsahu nebyl v Supabase nalezen záznam 64000. Tím je německá jazyková kontrola všech nalezených DE překladů v rozsahu dokončena; cílené opravy nálezů zůstávají otevřené. Viz oddíl 51 taháku.


**Doplnění 2026-11-16 — FIX-GH-60200-01:** V PSČ 60200 byly cíleně opraveny a znovu načtením ze Supabase ověřeny tři jazykové nálezy: DE fact_005 (Černá Pole jako městská část Brna), DE fact_015 (vysvětlení Panduren) a NL fact_005 (přirozená nizozemská formulace „bouwmeester uit Brno“ a lokalizace Černých Polí). Záznam zůstal `validated`; žádná jiná data ani statusy nebyly změněny. Viz dodatek 52 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-61200-61300:** V DE překladech 61200 a 61300 bylo opraveno a následně ověřeno sedm konkrétních lokalizačních nálezů (61200/fact_001,003,004,005; 61300/fact_001,003,005). Oba záznamy zůstaly `validated`. Viz dodatek 53 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-61400-61700:** V DE překladech 61400, 61500, 61600 a 61700 bylo opraveno 14 evidovaných faktů (lokalizace městských částí Brna, vysvětlení premonstrátů a sjednocení názvu Burianovo náměstí). Texty byly ověřeny opětovným načtením ze Supabase; všechny čtyři řádky zůstaly `validated`. Viz dodatek 54 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-61800-62100:** V DE překladech 61800, 61900, 62000 a 62100 bylo opraveno 14 konkrétních lokalizačních/terminologických nálezů (včetně neutrálního historického pojmenování instituce, vysvětlení Sokola, názvu Olomoucká a současné lokalizace městských částí). Všechny texty byly ověřeny po zápisu; záznamy zůstaly `validated`. Viz dodatek 55 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-62300-62700:** V DE překladech 62300, 62400, 62500 a 62700 bylo opraveno 26 konkrétních geografických a kulturně-terminologických nálezů. Texty byly znovu načteny a ověřeny v Supabase; všechny čtyři řádky zůstaly `validated`. Viz dodatek 56 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-62800-63700:** V DE překladech 62800, 63400, 63500, 63600 a 63700 bylo opraveno 18 konkrétních lokalizačních/terminologických nálezů. Texty byly znovu načteny a ověřeny v Supabase; všechny dotčené řádky zůstaly `validated`. Viz dodatek 57 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-63800-64200:** V DE překladech 63800, 63900, 64100 a 64200 bylo opraveno 25 konkrétních lokalizačních/terminologických nálezů; u 64100/fact_001 bylo zpřesněno odlišení závodu podle formule-1 reglementu od oficiálního mistrovství světa. Texty byly znovu načteny a ověřeny v Supabase; všechny čtyři řádky zůstaly `validated`. Viz dodatek 58 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-DE-64300-64400:** V DE překladech 64300 a 64400 bylo opraveno devět evidovaných lokalizačních nálezů; již správné označení Bahnhof Brno-Chrlice v 64300/fact_004 zůstalo beze změny. Všech devět textů bylo ověřeno v Supabase; oba řádky zůstaly `validated`. Viz dodatek 59 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-60200-61300:** V nizozemských překladech 60200, 60300, 61200 a 61300 bylo opraveno deset konkrétních jazykových a kulturních nálezů (včetně pandurů, historické Bauerovy velodromové dráhy, kartuziánů, Hus-gebedshuis a lokalizace Černých Polí). Všechny texty byly po změně znovu načteny ze Supabase; řádky zůstaly `validated`. Viz dodatek 60 kanonického taháku.
