# Registr auditních taháků — Česko

**Pravidlo:** před každým auditem nebo pokračováním nejprve vyhledej rozsah v tomto registru, otevři existující tahák a pokračuj v něm. Nevytvářej nový dokument pro již evidovaný rozsah.

| Kanonické ID | Rozsah | Kanonický tahák | Stav oprav | Stav úplného auditu | Poslední aktualizace |
|---|---|---|---|---|---|
| CZ-60200-64400 | PSČ 60200–64400 | [60200-64400_audit.md](60200-64400_audit.md) | Opravné práce uzavřeny | IN PROGRESS — úplné pokrytí A–I zatím není doloženo | 2026-11-16 |\n| CZ-10000-15900 | PSČ 10000–15900 | [10000-15900_audit.md](10000-15900_audit.md) | Bez oprav — audit read-only | IN PROGRESS — potvrzen HIGH nález map_category; oblasti B–H otevřené | 2026-11-16 |

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
