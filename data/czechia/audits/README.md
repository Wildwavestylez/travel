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
