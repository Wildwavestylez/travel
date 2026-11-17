# TRAVEL ČESKO — AUDITNÍ PROMPT PRO BLOKY PSČ

## Verze a závazné podklady

**AUDITNÍ PROMPT V1.2 — ZJEDNODUŠENÝ BLOKOVÝ AUDIT**

Používej společně s aktuálními soubory:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/sequence.json`
- `data/czechia/reference/` (zejména RÚIAN inventář a manifest)
- kanonickým auditním tahákem v `data/czechia/audits/`

**Pořadí autority:** schema určuje strukturu a povolené hodnoty; Content Standard určuje obsah, geografii, rešerši, zdroje a překlady; rework prompt určuje pravidla tvorby; tento prompt určuje rozsah a způsob auditu. Při rozporu nepřepisuj vyšší autoritu — rozpor zaznamenej.

## 1. Cíl a rozsah

Proveď kompletní audit celého uživatelem zadaného bloku českých PSČ, nikoli vzorku. Audituj pouze existující české záznamy v `public.postal_codes` s `country_code = 'CZ'`.

- Na začátku přesně stanov rozsah podle zadání, aktuálního `sequence.json` a databáze.
- Nevytvářej nové řádky PSČ, neměň rozsah ani pořadí v `sequence.json`.
- Neměň německá ani jiná nečeská data, schéma, tabulky, RLS, triggery, oprávnění, databázovou architekturu ani aplikační kód.
- Chybějící významná fakta lze doplnit pouze do správného již existujícího českého záznamu, pokud jsou význam, obsah i geografická vazba doloženy.
- Respektuj výslovně chráněné/zamčené části a výjimky uvedené v Content Standardu a rework promptu.

## 2. Nejdříve načti podklady a auditní tahák

Na začátku načti aktuální verze schématu, Content Standardu, rework promptu, sequence a potřebných RÚIAN referencí. Poté:

1. Najdi kanonický tahák pro přesně zadaný rozsah v `data/czechia/audits/` a registru `README.md`.
2. Pokud existuje, načti jeho aktuální stav, dokončené kontroly, otevřené nálezy, poslední bezpečně dokončený krok a přesný další krok. Historické důkazy načítej jen tehdy, když jsou potřebné pro otevřenou položku.
3. Pokud tahák neexistuje, ověř, zda rozsah již nepokrývá jiný nebo širší tahák. Teprve potom vytvoř jeden kanonický tahák a zapiš jej do registru.
4. Načti celý inventář záznamů auditovaného bloku dávkově (případně po nezbytných stránkách). Porovnej očekávaný a skutečný počet, duplicity, chybějící a neočekávané řádky.

Nikdy nezačínej audit znovu jen proto, že vzniklo nové konverzační okno.

## 3. Jak audit provádět — jeden souvislý běh

**Zpracuj celý zadaný blok co nejvíce najednou.** Nezakládej samostatné uživatelské úkoly pro jednotlivá PSČ, jazyky nebo kontrolní oblasti. Nezastavuj se po každém PSČ a nežádej uživatele o „pokračuj“.

Pracuj nad načteným snapshotem a sluč podobné kontroly i externí dotazy. Stejný zdroj pro stejné tvrzení znovu neověřuj, pokud se neobjeví nový rozpor, změna nebo důvodná pochybnost. Mechanické kontroly JSON, ID, pořadí, duplicit a schématu prováděj lokálně, pokud je to možné.

U každého nálezu postupuj jednoduše:
**najdi → ověř důkazy → bezpečně oprav → ověř zápis a závislé údaje → zaznamenej → pokračuj.**

- Potvrzené a bezpečně opravitelné chyby oprav automaticky bez žádosti o schválení.
- Nejasný nález neblokuje zbytek auditu. Označ pouze dotčenou položku jako `REVIEW REQUIRED` a pokračuj.
- Nevymýšlej fakta, zdroje, souřadnice ani jistotu. Rozliš potvrzenou chybu od nedoloženého tvrzení.
- Při HTTP 429 respektuj `Retry-After`; pokud chybí, omez opakování exponenciální prodlevou. Neobcházej limity paralelními požadavky.
- Neprováděj kontroly polygonů PSČ. Používej příslušné oficiální adresní, poštovní, správní a institucionální zdroje.

## 4. Povinné kontrolní oblasti

Kontroluj všechny oblasti A–I v rámci celého zadaného rozsahu. Checklist určuje pokrytí, nikoli pořadí samostatných úkolů. Neopakuj hotovou kontrolu bez nového důkazu.

### A. Úplnost inventáře

Ověř, že každý očekávaný PSČ je v databázi právě jednou, patří do Česka a zadaného rozsahu, má správný stav dokončení/publikace a není placeholderem. Porovnej `sequence`, `groups` a databázový inventář: každý kód musí být v příslušných strukturách právě jednou a počty musí souhlasit. Rozpor zaznamenej; `sequence.json` svévolně neopravuj.

### B. PSČ, lokalita a správní údaje

Ověř podle kompetence zdrojů:
- oficiální existenci a typ PSČ, pokud je případ sporný;
- územní/adresní vazbu v RÚIAN;
- `city` podle pravidla Content Standardu pro obec sídla obsluhující pošty;
- okres, kraj, `district`, `district_type`, reprezentativní místo a další metadata podle doložené příslušnosti.

Rozlišuj:
1. geografické/adresní území PSČ podle RÚIAN;
2. obec sídla obsluhující pošty použitou v `city`;
3. aktuální obchodní místo (přepážka, Balíkovna apod.).

Kontroluj první dvě věci, nikoli to, zda je historická kamenná pobočka stále otevřená. Zrušení nebo přestěhování přepážky samo o sobě neznamená chybu PSČ. U PSČ pro více obcí neodvozuj `city` ze všech obcí v obvodu. Nejasnost jedné položky neblokuje zbytek bloku.

### C. Geografická příslušnost a duplicity faktů

Prověř fakta napříč celým blokem. U každého ověř skutečnou fyzickou/návštěvnickou polohu a vazbu k přiřazenému PSČ; odhal duplicity, téměř duplicity, umělé rozdělení jednoho příběhu a fakta přiřazená pouze podle obecné vazby k městu či regionu.

Rozliš fyzickou adresu objektu od korespondenční, fakturační, sídelní adresy instituce, P.O. BOX nebo adresy pošty. U adresních míst je výchozím geografickým důkazem RÚIAN. PSČ uvedené na webu instituce samo o sobě polohu objektu nedokazuje. U rozsáhlých/liniových objektů zvol jedno nejlépe doložené primární PSČ podle Content Standardu; nepřesouvej dříve uzamčený fakt bez nového konkrétního důkazu.

### D. Faktická a redakční kvalita

Ověř názvy, data, chronologii, popisy a význam faktů; zda zdroje podporují konkrétní tvrzení; zda jsou URL relevantní; zda jsou pověsti odlišeny od doložené historie; zda text neobsahuje reklamu, propagaci firem, nepodložené superlativy, výplň nebo vymyšlené detaily. Zkontroluj význam, prioritu, pořadí, stručnost a srozumitelnost faktů. Nedostatek zdroje eviduj odděleně od prokázané nepravdy.

### E. Pokrytí významných míst a turistická rešerše

Ověř podle oddílů 28 a souvisejících částí Content Standardu, že byla provedena široká i cílená rešerše a že nechybí zásadní místní příběhy. Zaměř se na hlavní ikonické, regionální a místní dominanty: historické a sakrální dědictví, architekturu, muzea, archeologii, přírodu a krajinu, technické/dopravní dědictví, paměťová místa, kulturu, tradice a další relevantní témata.

**Nejde o katalog všech chráněných objektů.** Samotný zápis v památkovém katalogu, stáří, ochrana zóny ani existence drobné kapličky, kříže, sochy či domu neznamená, že má vzniknout samostatný fakt. Hledej, co zásadního chybí, nikoli co dalšího lze přidat. Jakmile jsou hlavní dominanty a významné příběhy ověřeny a nejsou patrné další zásadní mezery, rešerši ukonči.

U relevantních tematických skupin zaznamenej pouze jeden z výsledků: `FOUND`, `CHECKED — NO RELEVANT RESULT`, `OPEN`. Prázdná kategorie je přijatelná, pokud byla přiměřeně prověřena. Nevyžaduj kvóty faktů a nezakládej fakta o běžných hřbitovech, jednotlivých hrobech nebo současných firmách mimo výslovné výjimky Content Standardu.

Pokud je zásadní místo doložené, v databázi chybí a jeho správné PSČ je jasné, automaticky jej doplň do existujícího záznamu. Jinak jej označ k posouzení; nevymýšlej obsah ani polohu.

### F. Geografická metadata a mapa

Rozliš:
- `representative_point`: reprezentativní bod PSČ;
- `access_point`: ověřený přístupový/příjezdový bod;
- `facts[].location`: poloha konkrétního faktu.

U každého faktu ověř explicitní `location` (úplný platný objekt nebo explicitní `null`), WGS84 souřadnice, název, povolený typ a přesnost, zdroj polohy a vhodnou `map_category`. Poloha musí označovat hlavní místo a nesmí předstírat přesnost, kterou zdroj nepodporuje. Obsahové zdroje a polohové zdroje posuzuj odděleně.

Mapovou taxonomii a povolené hodnoty vždy ověř přímo proti aktuálnímu schématu a oddílu 11A Content Standardu. Nezaměňuj `category` za `map_category`. Ikony a jejich grafické soubory nejsou součástí tohoto auditu.

### G. Sedm jazyků — společná kontrola

Zkontroluj společně všech sedm jazyků: `cs, de, en, es, fr, it, nl`. U každého faktu porovnej všech sedm verzí najednou s českým zdrojem i navzájem. Ověř:
- existenci a strukturu každého jazyka;
- shodná ID a jejich pořadí;
- úplnost, význam, fakta, jména, data a výhrady;
- gramatiku, pravopis, interpunkci, přirozenost a idiomatickou formulaci;
- žádné nepodložené doplnění ani ztrátu důležité informace.

Neprováděj samostatný audit jednoho jazyka přes celý blok a pak dalšího jazyka. Projdi celý blok v jednom souvislém jazykovém průchodu. Všechny potvrzené chyby oprav automaticky, ideálně v dávce, a následně ověř všech sedm verzí dotčených faktů.

### H. Mezinárodní srozumitelnost a kulturní kontext

U každého faktu ověř, zda samostatně srozumitelně vysvětluje potřebné české reálie zahraničnímu čtenáři: místní pojmy, instituce, tradice, historické události, pamětní formy a správní koncepty. Vysvětlení musí být stručné, přirozené, přesné a doložené; nepřetěžuj text encyklopedickými odbočkami. Každá ze sedmi jazykových verzí musí být pochopitelná sama o sobě. Řiď se oddílem 29 Content Standardu.

### I. Technická validace

Validuj každý záznam proti aktuálnímu `schema.json`: JSON, povinná pole a datové typy, povolené enumy, ID a pořadí faktů, polohy, souřadnice, zdroje, sedm jazykových struktur a metadata. Ověř, že příznaky ověření odpovídají skutečně provedeným kontrolám a že nebyla změněna nesouvisející metadata. Schéma nikdy neupravuj jako obezličku.

## 5. Automatické opravy a hranice oprávnění

Uživatel zadáním auditu povoluje automatické opravy potvrzených chyb v existujících českých záznamech v přesném auditovaném rozsahu a v souvisejícím auditním taháku/reportu.

Automaticky opravuj doložené chyby v obsahu, názvech, formulacích, kategoriích, zdrojích, překladech, souřadnicích, geografickém přiřazení a metadatech; případně doplň chybějící zásadní fakt podle oddílu E. Zachovej existující ID a historii podle pravidel projektu.

Neprováděj změny schématu/databázové architektury, RLS, triggerů, oprávnění, aplikačního kódu, nečeských dat, `sequence.json` ani rozsahu auditu. Nezasahuj do chráněných/zamčených částí. Neprováděj spekulativní opravy.

Pokud oprava není bezpečně doložena, označ pouze konkrétní položku `REVIEW REQUIRED`, uveď chybějící důkaz a pokračuj další prací. Celý audit zastav pouze při překážce, která znemožňuje podstatnou část práce.

## 6. Závažnost a výsledek

Používej čtyři úrovně:
- `CRITICAL`: zásadně chybná geografie, vymyšlený/nepravdivý obsah nebo poškozený záznam.
- `HIGH`: chybějící zásadní místo, významná duplicita, chybějící jazyk/fakt, zavádějící překlad nebo závažná strukturální/geografická chyba.
- `MEDIUM`: nedostatečný kontext, slabší zdroj, překladová nuance nebo opravitelná chyba metadat.
- `LOW`: drobný styl, formátování či nevýznamná nekonzistence.

Výsledek bloku:
- `PASS`: všechny povinné kontroly jsou ověřeny a nezůstává nevyřešený podstatný nález.
- `FIX REQUIRED`: potvrzené vady zůstaly neopravené.
- `REVIEW REQUIRED`: podstatný údaj nelze rozhodnout kvůli nejednoznačným důkazům.
- `BLOCKED`: chybí přístup nebo data potřebná k dokončení podstatné části auditu.

Nikdy neoznač blok jako PASS, pokud zůstává nevyřešený CRITICAL/HIGH nález, chybí očekávaný záznam nebo nebyla provedena podstatná kontrola. Netvrď, že byla provedena kontrola, která ve skutečnosti neproběhla.

## 7. Kanonický tahák — paměť auditu a pokračování mezi okny

**Tahák je povinný a zachovává práci mezi konverzačními okny. Nesmí se odstranit. Jeho účelem je zabránit opakování práce, nikoli vytvářet administrativu.**

Pro každý stát a přesně vymezený rozsah používej jeden kanonický tahák:
`data/czechia/audits/{scope}_audit.md` (nebo již existující kanonickou cestu uvedenou v registru).

Tahák musí stručně obsahovat:
- stát, rozsah, kanonické ID a stav auditu;
- verze/commity použitých podkladů;
- očekávaný a načtený inventář;
- dokončené a uzamčené kontroly;
- otevřené nálezy s PSČ/ID, závažností, důkazy a stavem;
- provedené opravy a výsledek jejich validace;
- nevyřešené otázky;
- poslední bezpečně dokončený krok a konkrétní další krok;
- historii významných změn.

### Kdy ukládat checkpoint

Checkpoint ukládej pouze:
1. když hrozí vyčerpání kontextu/tokenů nebo je nutné přejít do nového okna;
2. při skutečném technickém přerušení;
3. na konci celého běhu.

**Neukládej checkpoint po každém PSČ, faktu, jazyku ani kontrolní oblasti.** Při checkpointu ulož aktuální rozsah, dokončenou práci, otevřené položky, opravy a přesný další krok. Ověř, že se tahák skutečně uložil.

### Jak pokračovat v novém okně

Nejdříve načti registr a aktuální stav kanonického taháku. Převezmi dokončené kontroly jako hotové a pokračuj pouze otevřenými položkami od posledního bezpečně potvrzeného kroku. Pokud je nejasný stav jedné operace, ověř pouze ji — neopakuj celý audit ani dávku. Pokud je rozsah dokončen, audit znovu nespouštěj.

Hotovou kontrolu znovu otevři pouze při novém konkrétním důkazu, změně standardu/schématu/autority nebo doložené změně auditovaných dat. Původní výsledek zachovej a případnou novou revizi připoj jako dodatek. Nikdy nevytvářej druhý tahák pro stejný nebo překrývající se rozsah; nejprve použij existující registr.

## 8. Ukládání, report a dokončení

Opravy databáze prováděj bezpečně a sekvenčně; související opravy seskup do logických dávek. Po každé dávce ověř skutečný zápis a validuj dotčené údaje. Neopakuj zápis naslepo po timeoutu — nejprve ověř, zda již proběhl.

Na konci aktualizuj tahák a předlož jeden stručný, ale úplný souhrn:
1. rozsah a počet očekávaných/načtených PSČ;
2. výsledek auditu a počty nálezů podle závažnosti;
3. počet zkontrolovaných faktů a jazykových verzí;
4. provedené opravy (PSČ, ID faktů, typ změny);
5. výsledek závěrečné validace;
6. nevyřešené položky a konkrétní důvod;
7. přesný stav pokračování, pokud audit není dokončen.

Nevypisuj dlouhé průběžné seznamy nálezů místo oprav. Uživatel má dostat jeden závěrečný report, případně checkpoint pouze tehdy, když běh skutečně musí pokračovat v novém okně.

Pokud projekt používá dohodnutý workflow pro neměnný snapshot `AUDITED`, připrav jej po úspěšném dokončení a ověř jeho vytvoření. Nikdy netvrď, že snapshot nebo záloha existuje, pokud nebyla skutečně vytvořena a zkontrolována.

---

## Základní provozní pravidlo

**Jeden zadaný blok = jeden souvislý auditní úkol. Načti podklady a tahák, zkontroluj celý blok ve všech oblastech A–I, oprav potvrzené bezpečné chyby, hromadně ověř zápisy, ulož checkpoint jen při skutečném přerušení a na konci dej jediný souhrn. Hotovou práci nikdy neopakuj.**
---

## 10. POVINNÉ UZAVŘENÍ AUDITU — V5, PUBLISHED, ZÁLOHA, ZÁMEK

Tento postup je závazný pro každý úspěšně dokončený auditovaný rozsah. Není volitelný a nesmí být přeskočen ani nahrazen pouhým záznamem v auditním taháku.

### Pevné pořadí kroků

1. **Úspěšné dokončení auditu.** Nejprve musí být celý přesně vymezený rozsah skutečně auditován. Všechny povinné kontroly musí být dokončené, inventář odsouhlasený a nesmí zůstat nevyřešený podstatný nález, který brání PASS.
2. **Bezpodmínečně nastavit celý auditovaný rozsah na V5 + published.** Každý existující záznam v rozsahu musí mít `data_version = 5` a `status = 'published'`. Nejde o doporučení ani volitelný krok: publikace je nutná, aby se dokončená PSČ zobrazila na mapě. Proveď změnu v Supabase a následně načti záznamy zpět a ověř 100 % rozsahu. Nenechávej část úspěšně auditovaného rozsahu v nižší verzi nebo v jiném statusu.
3. **Záloha přímo ze Supabase do Dropboxu přes propojené API.** Použij existující přímé API propojení Supabase → Dropbox. Neobcházej jej ručním exportem přes lokální soubory, pokud je přímá cesta dostupná. Záloha musí obsahovat kompletní obnovitelná data všech řádků přesného auditovaného rozsahu včetně celého JSON obsahu, všech faktů, zdrojů, překladů, metadat a identifikátorů potřebných pro obnovu. Zálohuj až po potvrzení V5 + published.
4. **Ověřit zálohu v Dropboxu.** Úspěšná odpověď API sama nestačí. Ověř, že záložní artefakt v Dropboxu skutečně existuje a lze jej přečíst; zkontroluj rozsah, počet záznamů a shodu uložených dat se stavem v Supabase. Záloha musí být použitelná pro obnovení dat do Supabase. Pokud ověření selže nebo záloha není dostupná, proces zastav a rozsah NEZAMYKEJ.
5. **Zamknout přesně auditovaný rozsah v Supabase.** Teprve po úspěšné a ověřené záloze nastav databázový read-only zámek pro přesný seznam/range auditovaných PSČ. Zámek musí blokovat `INSERT`, `UPDATE` a `DELETE` pro chráněné záznamy; `SELECT`/čtení musí zůstat povolené. Použij existující ověřený mechanismus databázového triggeru nebo jeho bezpečné rozšíření. Podmínka zámku musí být omezena na `country_code` a přesný dokončený rozsah/seznam. Nikdy nezamkni celý stát, jinou zemi, sousední rozsah ani jiné neauditované záznamy.
6. **Ověřit zámek a uzavřít audit.** Ověř, že chráněné záznamy nelze měnit ani mazat, čtení funguje a reprezentativní záznam mimo rozsah zůstává nezamčený. Zachovej všechny dříve zamčené rozsahy beze změny. Do auditního taháku zapiš počty, rozsah, V5/published potvrzení, identifikaci a umístění Dropbox zálohy, výsledek ověření, mechanismus/rozsah zámku a datum dokončení.

### Nepřekročitelné podmínky

- **Nikdy nezamykat žádný záznam, který není současně `data_version = 5` A `status = 'published'`.** Před zamknutím ověř obě podmínky pro každý jednotlivý řádek. Pokud jediný záznam nevyhovuje, zámek se nesmí aktivovat pro nevyhovující záznamy; nejprve oprav stav a znovu ověř celý rozsah.
- Úspěšný audit automaticky vede k V5 + `published` pro celý auditovaný rozsah. Nečekej na další uživatelské schválení publikace.
- Pořadí je neměnné: **AUDIT PASS → V5 + PUBLISHED → SUPABASE→DROPBOX BACKUP → BACKUP VERIFICATION → READ-ONLY LOCK → AUDIT CLOSED.**
- Pokud selže publikace, záloha, ověření zálohy nebo zamknutí, nezamlčuj to a neoznačuj celý proces za uzavřený. Ulož přesný stav a bezpečně pokračuj pouze od nedokončeného kroku; neopakuj hotový audit.
- Nikdy nemaž ani neuvolňuj dříve zamčené rozsahy. Odemknutí nebo změna rozsahu existujícího zámku je samostatná výslovně schválená databázová změna.
- Zámek je databázová ochrana proti zápisu, nikoli zákaz čtení. Data musí zůstat dostupná pro mapu a aplikaci.
- Nezaváděj AJV ani jiné zbytečné opakované validační workflow. Technická kontrola podle aktuální schema je součástí auditu; nepřidávej samostatný automatický validační systém.

### Stav dokončení

Auditní rozsah je **definitivně uzavřen** až poté, co jsou všechny řádky V5 + published, záloha je ověřená v Dropboxu a přesný rozsah je zamčený v Supabase. Samotný `PASS`, samotná publikace ani samotné vytvoření záložního souboru nestačí.