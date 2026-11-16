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


**Doplnění 2026-11-16 — FIX-GH-NL-61600-61700:** V nizozemských překladech 61600 a 61700 bylo opraveno devět konkrétních jazykových a lokalizačních nálezů (Žabovřesky, Burianovo náměstí, Kraví hora, přirozené nizozemské vazby pro Brno a Komárov, Mariánské náměstí). Všechny texty byly po změně znovu načteny ze Supabase; oba řádky zůstaly `validated`. Viz dodatek 61 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-61800-62100:** V NL překladech 61800, 61900, 62000 a 62100 bylo opraveno 12 konkrétních jazykových a kulturních nálezů (historické psychiatrické pojmenování, Sokol, městské části Horní Heršpice/Tuřany/Řečkovice/Medlánky a místní název železničářské kolonie). Texty byly po změně znovu načteny ze Supabase; všechny čtyři řádky zůstaly `validated`. Viz dodatek 62 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-62300-62400:** V NL překladech 62300 a 62400 bylo opraveno deset konkrétních jazykových a lokalizačních nálezů (současná příslušnost Kohoutovic a Komína k Brnu, Poesiomat, Kaplanovy vodní turbíny, Ruský vrch a další). Všechny texty byly po změně znovu načteny ze Supabase; oba řádky zůstaly `validated`. Viz dodatek 63 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-62500-62700:** V NL překladech 62500 a 62700 bylo opraveno osm konkrétních lokalizačních a terminologických nálezů (Kejbaly/Bohunice, pomologie a lokality v Brně-Slatině). Texty byly po změně znovu načteny ze Supabase; oba řádky zůstaly `validated`. Viz dodatek 64 kanonického taháku.


**Checkpoint 2026-11-16 — obnovení finálního auditu CZ-60200-64400:** Kanonický tahák byl rozšířen append-only dodatkem 65. Nový read-only dotaz Supabase potvrzuje 27/27 unikátních PSČ, 27 validated, 0 published a aktuálně 176 faktů (historický úvodní údaj 177 je evidován jako rozpor, bez přepisu historie). Brána 0 — nezávislá inventura památek a zajímavostí pro všech 27 PSČ — zůstává ČÁSTEČNĚ DOLOŽENO/NEHOTOVO; běžné A–I se neuzavírá, dokud nebude dokončena. Zamčené kontroly se neopakují. Viz dodatek 65 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-62800-63700:** V NL překladech 62800, 63400, 63500, 63600 a 63700 bylo opraveno 18 konkrétních lokalizačních a terminologických nálezů (Líšeň, Nový Lískovec, Bystrc, Židenice, Jundrov, vysvětlení archeologických kultur a organizace Orel). Texty byly po změně znovu načteny ze Supabase; všechny dotčené řádky zůstaly `validated`. Viz dodatek 65 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-RUIAN-LOCALITIES:** Do kanonického taháku CZ-60200-64400 byl přidán dodatek 66 s kompletním seznamem adresních částí obcí a počty adresních míst pro všech 27 PSČ podle sdíleného RÚIAN CSV. Výslovně evidován zvláštní rozsah 62700 zahrnující Brno i Šlapanice. Jde o geografický podklad, nikoli dokončenou turistickou inventuru; brána 0 zůstává ČÁSTEČNĚ DOLOŽENO/NEHOTOVO. Viz dodatek 66 taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-64100-64300:** V NL překladech 64100, 64200 a 64300 bylo opraveno 23 konkrétních lokalizačních/terminologických nálezů (Žebětín, Bosonohy, Chrlice a vysvětlení archeologických období). Všechny texty byly po změně znovu načteny ze Supabase; všechny tři řádky zůstaly `validated`. Viz dodatek 66 kanonického taháku.


**Doplnění 2026-11-16 — FIX-GH-NL-61400-61500:** V NL překladech 61400 a 61500 bylo opraveno posledních sedm konkrétních jazykových/lokalizačních nálezů (Husovice, Obřany, Maloměřice, Židenice, Zábrdovice, Juliánov, Slatina a Tuřany). Všechny texty byly po změně znovu načteny ze Supabase; oba řádky zůstaly `validated`. Tím jsou vyřešeny všechny nálezy evidované v NL review; viz dodatek 67 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-APPEND-INDEX-01:** Kvůli souběžným append-only zápisům mají dva novější dodatky duplicitní číselné hlavičky. Pro jednoznačné odkazy se používají stabilní ID: 65-START/AUDIT-START-2026-11-16, 65b/FIX-GH-NL-62800-63700, 66-GATE0/AUDIT-GATE0-RUIAN-LOCALITIES a 66b/FIX-GH-NL-64100-64300. Další dodatky pokračují od 69. Historické části nebyly přepsány. Viz dodatek 68 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-NATURE-01:** Provedeno porovnání všech 30 lokalit z oficiálního městského seznamu zvláště chráněných území s 176 fakty v bloku CZ-60200-64400. Výsledek katalogu: 11 POKRYTO, 1 ČÁSTEČNĚ POKRYTO, 16 CHYBÍ, 2 REVIEW REQUIRED (Kavky, Medlánecké kopce). Nejde o úplnou bránu 0; zbývá ověřit přesné body/PSČ a nezávislé kulturní, technické, historické a turistické katalogy. Viz dodatek 69 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-TECH-01:** Provedeno porovnání oficiálního katalogu technických památek TIC BRNO s 176 fakty. Zaznamenány nové kandidáty Cejl, Vlněna/Mosilana, Wannieck, obě elektrárny, jatka/Masná burza, železniční objekty, Svitavská pobřežní dráha, Ponávka a pět konkrétních mostů/lávek. Esslerova přádelna je již pokryta 61400/fact_005. Nové kandidáty je nutné geolokačně ověřit; liniové prvky nesmí být duplikovány napříč PSČ. Viz dodatek 70 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-CULTURE-01:** Provedena první nezávislá kulturní/architektonická inventura PSČ 60200, 60300 a 61600. Zaznamenáno 11 nových kandidátů s ověřenou adresou a PSČ (vily Löw-Beer a Stiassni, Hotel Avion, Káznice, Dům umění, Muzeum romské kultury, Diecézní muzeum, Otevřená zahrada, Památník Leoše Janáčka, VIDA! a Kounicovy koleje) a 1 kandidát k ověření (Letohrádek Mitrovských). Nejde o uzavření brány 0; zbývajících 24 PSČ a další katalogy čekají. Viz dodatek 71 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-GOTO-01:** Druhé porovnání oficiálního katalogu TIC BRNO/Go To Brno: 17 dalších položek k vyhodnocení, včetně Retro muzea Na statku (61900), Muzea historických vozů BMW (62700), Tyršova sadu (60200), Hádeckých lomů, naučných stezek Bohunice/Žebětín/Jelení žlíbek/Medlánky/Soběšice/Lesná/Akátky a tras přes více PSČ. U tras a soukromých muzeí je vyžadována kontrola přesahu, samostatnosti a nepřítomnosti marketingu. Viz dodatek 72 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-GATE0-CENTRAL-NORTH-01:** Doplňkový katalog Go To Brno pro 60200/60300/61600/61700 identifikoval Lužánky, Kryt Denis, Synagogu Agudas Achim a Komec jako nové kandidáty; Mendlovo náměstí, Wilsonův les a parky Kraví hora/Špilberk jako samostatné nebo částečně pokryté kandidáty. Přesné PSČ Mendlova náměstí 60300 a Komec 61700 ověřeno přes RÚIAN/ČSÚ. Viz dodatek 73 kanonického taháku.


**Doplnění 2026-11-16 — AUDIT-CHECKPOINT-2026-11-16-EOD:** Aktuální Supabase snapshot: 27 PSČ, 176 faktů, 27 `validated`, 0 `published`. V cílených opravách bylo ověřeno 115 DE a 98 NL nálezů (213 celkem); předchozí průběžné odhady v konverzaci byly nepřesné. DE/NL opravné fronty jsou uzavřené; Gate 0 zůstává blokující a částečně doložená. Zbývá dokončit lokalita-po-lokalitě inventuru všech 27 PSČ, následně otevřené C, jazyky cs/en/es/fr/it a oficiální AJV (stále blocked). Viz dodatek 74 kanonického taháku.


**Doplnění 2026-11-16 — pokračování CZ-10000-15900, Brána 0:** V auditním taháku byly append-only zapsány a ověřeny dvě další rešeršní vlny (oddíly 19–20). Nové kandidátní mezery: 10000 kostel Neposkvrněného početí Panny Marie; 10100 Heroldovy sady/Rangherka; 10400 židovský hřbitov v Uhříněvsi; 11800 Petřínská rozhledna, Vrtbovská zahrada, Pražské Jezulátko a Strahovský klášter; 13000 Olšanské hřbitovy a Nový židovský hřbitov; 12800 Nuselský most. Částečně pokryto: 12000 Náměstí Míru/Vinohradské divadlo. Geograficky neuzavřeno: Hostivařská přehrada/hlavní pláž. Brána 0 zůstává ČÁSTEČNĚ DOLOŽENO a A–I je blokováno. Inventář Supabase 33/33 PSČ byl při pokračování načten read-only; produkční data a sequence nebyly změněny. Další krok: pokračovat nezávislou inventurou dosud neprozkoumaných lokalit a ověřit otevřená geografická přiřazení v RÚIAN. Podrobnosti a zdroje v oddílech 19–20 taháku CZ-10000-15900.


**Checkpoint 2026-11-16 — GATE0 dávka 60200 / historické jádro Brna:** Do kanonického taháku 60200-64400 přidán dodatek 67. Nezávisle prověřeny oficiální turistické přehledy centra, seznam kostelů, mapa muzeí/galerií a kulturních institucí; proti 18 faktům v 60200 identifikovány tři silné mezery (Dům umění, Dům pánů z Kunštátu – samostatnost příběhu k rozhodnutí, Besední dům) a šest sakrálních kandidátů k ověření adresy/PSČ a významnosti. Zvláštní institucionální PSČ MZM 65937 a Moravské galerie 66226 nebyla mechanicky přiřazena k 60200. Dávka částečně doložena, celá brána 0 zůstává NEHOTOVO; Supabase beze změny. Viz dodatek 67.


**Doplnění 2026-11-16 — autorizované doplnění faktů CZ-10000-15900:** Na základě výslovného pokynu uživatele bylo do sedmi existujících českých řádků Supabase (10000, 10100, 10400, 11800, 12000, 12800, 13000) přidáno 11 nových faktů. Každý má zdroje, map_category, doloženou polohu a všech sedm jazyků. Read-back potvrzuje 33 řádků a **222 faktů** v rozsahu 10000–15900. Nuselský most byl před zápisem prověřen napříč celou českou databází: samostatný fakt předtím nikde nebyl; alternativní katalogová adresa 12000 je evidována, ale jediné primární přiřazení bylo zvoleno 12800 a nyní existuje pouze jeden mostní fakt. Podrobnosti, ID, zdroje a kontroly jsou v oddílech 21–22 kanonického taháku. Brána 0 zůstává ČÁSTEČNĚ DOLOŽENO; audit A–I je nadále blokován do dokončení nezávislé inventury všech lokalit.


**Doplnění 2026-11-16 — GATE0-RUIAN-60200-02:** Dům umění města Brna (Malinovského náměstí 652/2; RÚIAN 19100671; PSČ 60200) a Besední dům (Komenského náměstí 534/8; RÚIAN 19099282; PSČ 60200) prošly ověřením fyzické adresy v oficiálním VDP ČÚZK/RÚIAN. Porovnáno s aktuálními 18 fakty 60200: oba samostatné příběhy chybí. Oba kandidáti přijati do inventáře jako geograficky ověřené / připravené k redakčnímu zpracování; nové produkční fakty zatím nevytvořeny. Viz dodatek 75 kanonického taháku 60200–64400. Produkční Supabase a sequence beze změny.


**Upřesnění 2026-11-16 — Nuselský most:** Doplňující rešerše zjistila tři katalogové PSČ pro různé části/označení téhož liniového objektu: 12000 (Encyklopedie Prahy 2), 12800 (Prague City Tourism) a 14000 (Prague City Line, jižní zakončení u Pankráce). Primární záznam zůstává jediný: 12800/fact_011; ostatní PSČ jsou pouze alternativní geografické reference a nesmějí vytvářet duplicitu. Viz oddíl 23 pražského taháku.


**Doplnění 2026-11-16 — GATE0-RUIAN-60200-03:** Muzeum romské kultury, Bratislavská 67/246, Brno-Zábrdovice, bylo ověřeno přes oficiální VDP ČÚZK/RÚIAN: adresní místo 19184654, identifikace 246/67, PSČ 60200. Institucionální a městské zdroje potvrzují význam instituce a její historii od roku 1991. Porovnáno s 18 fakty 60200 a 7 fakty 60300: samostatný příběh muzea v databázi chybí. Kandidát přijat do inventáře jako CHYBÍ / RÚIAN ověřeno / připraveno k redakčnímu zpracování. Viz dodatek 76 kanonického taháku 60200–64400. Produkční Supabase a sequence beze změny.


**Doplnění 2026-11-16 — G/H-EN-60200:** Provedena cílená read-only kontrola všech 18 anglických faktů PSČ 60200. Všech sedm jazyků má 18/18 faktů se shodnými ID a pořadím. V EN zjištěny 3 nálezy MEDIUM (nevysvětlené Černá Pole, doslovně přeložené Žlutý kopec bez českého názvu, nevysvětlený vojenský pojem Pandurs) a 1 LOW (Zelný trh bez vysvětlení v těle textu). Zapsáno v dodatku 77 kanonického taháku 60200–64400. Bez produkčních změn; EN/60200 REVIEW COMPLETE / FINDINGS OPEN.


**Rozhodnutí 2026-11-16 — GATE0-60200 / Muzeum romské kultury:** Kandidát z dodatku 76 byl po upřesnění významnostního prahu vyřazen z aktivní fronty k doplnění; není schválen k vytvoření samostatného turistického faktu. Další práce se soustředí na otevřené auditní oblasti A–I, nikoli na rozšiřování seznamu o jednotlivé instituce a drobné lokální cíle. Podrobnosti v dodatku 78 taháku 60200–64400.



**Oprava 2026-11-16 — FIX-GH-EN-60200-01:** Na základě změny pracovního pokynu byly rovnou opraveny všechny čtyři nálezy G/H v angličtině PSČ 60200: vysvětlení Zelný trh (Vegetable Market), lokalizace Černých Polí jako městské části Brna, původní název Žlutý kopec (Yellow Hill) s lokalizací v Brně a vysvětlení pandurů jako nepravidelné lehké pěchoty. Všechny čtyři texty byly znovu načteny a ověřeny v Supabase; EN má nadále 18 faktů a řádek zůstal `validated`. Ostatní jazyky a data beze změny. Podrobnosti v dodatku 79 taháku 60200–64400.


**Doplnění 2026-11-16 — FIX-GH-ES-FR-IT-60200-60300:** V PSČ 60200 byly dokončeny a opraveny španělské, francouzské a italské překlady všech 18 faktů (23 konkrétních nálezů). V PSČ 60300 byly ve stejných třech jazycích zkontrolovány všechny 7 faktů; opraven význam „včelína z roku 1871“, zachování a vysvětlení názvu Staré Brno a francouzské označení Bauerova zámečku. Read-back ze Supabase potvrdil shodu ID/pořadí, 18/18 a 7/7 faktů; oba řádky zůstaly `validated`. DE/NL ani zamčené kontroly nebyly znovu otevřeny. G/H pro celý rozsah 60200–64400 zůstává otevřené; další krok je pokračovat od PSČ 61200. Podrobnosti v dodatku 80 kanonického taháku.


**Upřesnění 2026-11-16 — AUDIT-RESUME-PRIORITY-01:** Podle povinné priority oddílu 0 aktuálního promptu V1.1 zůstává Brána 0 rozsahu 60200–64400 ČÁSTEČNĚ DOLOŽENO/NEHOTOVO a má přednost před dalším uzavíráním A–I. Navázat pouze na významné/ikonické kandidáty a uplatnit stop-pravidlo; nevyhledávat drobné instituce ani malé objekty. Jazykové opravy ES/FR/IT 60200–60300 zůstávají ověřené. Podrobnosti v dodatku 81 taháku.


**Uzavření 2026-11-16 — CLOSE-GATE0-USER-01:** Brána 0 pro CZ-60200–64400 je uzavřena jako **HOTOVO** podle kurátorského významnostního prahu a stop-pravidla promptu 0.0/0.5 a výslovného rozhodnutí uživatele dále nehledat další zajímavosti. Nižší prioritní kandidáti z dřívějších dodatků zůstávají historicky evidováni, nejsou schváleni k vložení a neblokují A–I; žádné produkční fakty se tímto rozhodnutím nemění. Navázáno oblastí C: všech 8 faktů PSČ 62100 bylo geograficky zkontrolováno, bez zjištěné chybné příslušnosti PSČ; nejednoznačné/plošné body zůstaly korektně `location: null`. Další C dávka: 62300. Viz dodatek 82 kanonického taháku.


**Oprava 2026-11-16 — CORR-C-GEO-62100-01:** Opraven aritmetický souhrn dodatku 82: PSČ 62100 má 2 přesné body, 1 přibližný bod a 5 oprávněných `location: null`; geografický závěr 8/8 zůstává beze změny. Viz dodatek 83.


**C-GEO-62300-01:** Dokončena read-only geografická kontrola všech 9 faktů PSČ 62300. Všech 9 příběhů odpovídá danému PSČ; 4 přesné body, 2 přibližné, 1 reprezentativní bod a 2 oprávněná `location: null` u vícebodových příběhů. Bez produkčních změn. Další dávka C: 62400. Viz dodatek 84 kanonického taháku.


**Doplnění 2026-11-16 — C-GEO-62400-64400:** Hromadná geografická kontrola 14 existujících PSČ a 82 faktů dokončena jako PASS. Všech 82 faktů odpovídá příslušnému území podle uložených poloh/zdrojů a RÚIAN inventáře; 28 přesných, 19 přibližných, 14 reprezentativních bodů a 21 obhajitelných null. Bez produkčních oprav; všech 14 řádků zůstalo validated. Viz dodatek 85 kanonického taháku. Další krok: pokračovat v další otevřené části A–I podle open-only fronty.

**I-TECH-01 — 2026-11-16:** Vlastní read-only SQL strukturální validátor porovnal všech 27 řádků PSČ 60200–64400 (176 faktů, 7 jazykových větví) s aktuálním schema.json. Bez chyb povinných/zakázaných polí, typů, enumů, poloh, zdrojových objektů, ID/pořadí překladů nebo prázdných textů: PASS vlastního validátoru. Supabase beze změn. Oficiální AJV nebyl spuštěn, proto I zůstává otevřené do doložení AJV. Podrobnosti dodatek 86 taháku.
**G-H-04 — 2026-11-16:** V rámci cíleného hromadného opravného průchodu PSČ 61400, 61500 a 61600 opraveno 15 jazykových verzí: 61400/fact_001 NL; 61500/fact_003 CS/EN/ES/FR/IT/NL; 61500/fact_005 DE/EN/ES/FR/IT/NL; 61600/fact_001 a fact_003 NL. Read-back potvrzen, ID/pořadí všech sedmi jazyků zachováno, statusy `validated` a `data_version=1` beze změny. G/H zůstává otevřené; nejde o kompletní PASS celého bloku. Viz dodatek 87 taháku.
**G-H-05 — 2026-11-16:** Cílené jazykové opravy v PSČ 61800 a 61900: 61800/fact_003 všech 7 jazyků (přesnější označení kina Avia a vysvětlení Sokola; oprava německé kapitalizace), 61800/fact_005 CS/EN/ES/FR/IT/NL (vysvětlení tradičních hodů), 61900/fact_002 CS/EN/ES/FR/IT (kontext Horních Heršpic jako čtvrti Brna) a 61900/fact_003 NL (interpunkce). Celkem 19 jazykových verzí; read-back i ID/pořadí potvrzeny, statusy `validated` a `data_version=1` beze změny. G/H zůstává otevřené. Viz dodatek 88 taháku.
**G-H-06 — 2026-11-16:** V PSČ 62000 a 62100 opraveno 11 jazykových verzí: 62000/fact_002 CS/DE/EN/ES/NL (význam `prsť` jako půdy, nikoli schránky/relikviáře; FR/IT již správně používaly kapsli se zeminou) a 62100/fact_006 CS/EN/ES/FR/IT/NL (přirozenější vysvětlení místního okrašlovacího spolku). 62100/fact_003 prošel kontrolou všech sedmi jazyků bez spekulativní změny místního názvu. Read-back a ID/pořadí potvrzeny; statusy `validated`, `data_version=1` beze změny. Viz dodatek 89 taháku.
**G-H-07 — 2026-11-16:** V 62300/fact_008 doplněn kulturní kontext ve všech sedmi jazycích: Poesiomat vysvětlen jako veřejné poslechové zařízení, hody jako tradiční slavnost s kroji/hudbou/tancem, velikonoční klapání jako zvyk nahrazování zvonů dřevěnými klapačkami během Svatého týdne a Tatran jako místní sportovní klub. Read-back i ID/pořadí potvrzeny; status `validated`, `data_version=1` beze změny. Viz dodatek 90 taháku.
**G-H-08 — 2026-11-16:** V PSČ 62500 opraven kulturní kontext: fact_004 CS/EN/ES/FR/IT doplnil vysvětlení pomologie (DE/NL již měly); fact_008 všech 7 jazyků identifikuje T. G. Masaryka jako prvního prezidenta Československa. Fact_002 všech 7 jazyků zkontrolováno, vysvětlení smírčích kamenů dostatečné. Celkem 12 opravených jazykových verzí; read-back a ID/pořadí potvrzeny, status `validated`, `data_version=1` beze změny. Viz dodatek 91 taháku.
**G-H-09 — 2026-11-16:** V PSČ 62700 opraven kulturní kontext fact_005 ve všech 7 jazycích (josefínské reformy = reformy císaře Josefa II.) a fact_002/FR (chybné `Néolithique final` opraveno na `Énéolithique final`). Fact_006/Stolpersteine zkontrolován ve všech 7 jazycích a splňuje požadavek na vysvětlení. Celkem 8 jazykových verzí opraveno; read-back a ID/pořadí potvrzeny, status `validated`, `data_version=1` beze změny. Viz dodatek 92 taháku.

**G-H-10 — 2026-11-16:** V rámci kompletní kontroly sedmi jazykových větví PSČ 62800 (7 faktů) a 63400 (4 fakta) opraveny tři jazykové verze: 62800/fact_001/FR (nepřesné „oppidum“ nahrazeno obecným označením opevněného raně středověkého sídla), 62800/fact_001/IT (zavádějící „castello slavo“ nahrazeno „fortificazione slava“) a 63400/fact_004/EN (gramatická oprava „a 1898“ → „an 1898“). Ostatní kontrolované texty nevyžadovaly jednoznačnou opravu; nebyly hledány nové zajímavosti. Read-back potvrzen; řádky 10369/10370 zůstaly `validated`, `data_version=1`, počty 7/4 faktů, sedm jazyků a shodná ID/pořadí. Viz dodatek 93 kanonického taháku. G/H zůstává otevřené.


**G-H-11 — 2026-11-16:** V PSČ 63500 a 63600 zkontrolovány všechny dostupné jazykové větve (3 fakta v každém záznamu). V 63500/fact_002 opraveno šest překladů (DE/EN/ES/FR/IT/NL): české „odchov šimpanze“ nyní přesně vyjadřuje úspěšný odchov, nikoli obecné rozmnožování. V 63600/fact_001/EN zpřesněno vyjádření chráněného suchého trávníku a uhlazena formulace data demonstrace; v 63600/fact_003/ES/IT/NL doplněna chybějící informace o jeslích / péči o nejmenší děti. Celkem 10 jazykových verzí opraveno a read-back potvrzen. Řádky 10371/10372 zůstaly `validated`, `data_version=1`, 3 fakta, sedm jazyků; bez změny ID/pořadí. Viz dodatek 94 kanonického taháku. G/H zůstává otevřené.


**G-H-12 — 2026-11-16:** V PSČ 63700 opraveno pět jazykových verzí: fact_002/FR — nepřirozené „débits de Brno“ v titulku nahrazeno „auberges de Brno“; fact_003/EN/ES/FR/IT doplnilo vysvětlení Orel jako české katolické tělovýchovné a mládežnické organizace (DE/NL již kontext měly). Všech sedm jazyků u 63700/fact_003 zkontrolováno; v 63900/fact_003 zkontrolováno všech sedm jazykových verzí popisu krematoria Ernsta Wiesnera bez nutnosti změny. Read-back potvrzen; řádek 63700 (ID 10373) zůstal `validated`, `data_version=1`, 4 fakta, sedm jazyků a shodná ID/pořadí. Viz dodatek 95 kanonického taháku. G/H zůstává otevřené.


**G-H-13 — 2026-11-16:** Cílená kontrola všech sedmi jazykových větví 64100/fact_001. V EN/ES/FR/IT/NL opraveno pět verzí, které mohly zaměňovat závod vozů podle předpisů Formule 1 v roce 1949 za závod oficiálního mistrovství světa. Doplněno, že závod nebyl součástí oficiálního šampionátu, který začal v roce 1950. DE již rozdíl správně vysvětlovalo; CS zůstalo beze změny. Read-back potvrzen; řádek 10376 zůstal `validated`, `data_version=1`, 10 faktů, sedm jazyků, ID/pořadí beze změny. Viz dodatek 96 kanonického taháku. Jde pouze o cílenou opravu fact_001; G/H zůstává otevřené.


**G-H-14 — 2026-11-16:** Kompletní cílená jazyková kontrola všech sedmi jazyků a všech faktů v PSČ 64200 (11), 64300 (6) a 64400 (4), celkem 21 faktů. Opravena jedna verze: 64300/fact_006/FR — „accident de voiture tirée par des chevaux emballés“ nahrazeno přesným „accident de calèche attelée à des chevaux emballés“ (nehoda kočáru taženého splašenými koňmi). Ostatní kontrolované texty nevyžadovaly jednoznačnou opravu. Read-back potvrzen; řádky 10377–10379 zůstaly validated, data_version=1, počty 11/6/4 faktů, sedm jazyků, ID/pořadí shodné. Viz dodatek 97 kanonického taháku. G/H zůstává otevřené.
