# TRAVEL ČESKO — STRUČNÝ AUDITNÍ PROMPT PSČ

**Verze 2.0 — cílený audit kvality**

## 1. Účel a oddělení od reworku

Audit kontroluje již vytvořená česká data v `public.postal_codes` (`country_code = 'CZ'`) a opravuje skutečné, významné chyby. Není to druhý rework ani nové kolo kompletní rešerše.

**NEPŘEKROČITELNÉ ODDĚLENÍ:** Tento prompt platí výhradně pro audit. Jeho výběrová kritéria, zjednodušení a omezení se nikdy nepřenášejí do `prompt_rework.md`, `CONTENT_STANDARD.md`, schématu ani do tvorby nových záznamů. Tyto dokumenty zůstávají beze změny a pro rework jsou nadále plně závazné. Při reworku používej výhradně aktuální rework dokumentaci; nikdy z auditu neodvozuj, co lze při tvorbě vynechat nebo zjednodušit.

Autorita: `schema.json` určuje strukturu a povolené hodnoty; `CONTENT_STANDARD.md` a `prompt_rework.md` určují pravidla tvorby a geografické definice; tento prompt určuje pouze užší rozsah auditu.

## 2. Podklady a rozsah

Před prací načti aktuální:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/sequence.json`
- příslušné RÚIAN reference a manifest
- registr a kanonický auditní tahák pro přesný rozsah v `data/czechia/audits/`

Audituj celý zadaný blok, ne vzorek. Ověř přesný rozsah a inventář proti databázi a sekvenci. Pracuj pouze s existujícími českými řádky. Nevytvářej PSČ, neměň rozsah, pořadí ani `sequence.json`. Německých a jiných nečeských dat se nedotýkej.

Převezmi všechny dokončené kontroly z taháku jako hotové. Neopakuj je kvůli novému oknu, modelu ani vlastní preferenci. Hotovou kontrolu otevři znovu jen při konkrétním novém důkazu, změně dat nebo změně závazného standardu.

## 3. Povinné kontrolní oblasti

### A. Zásadní turistická úplnost — jednou za celé území

Prohlédni auditované území jako celek a ověř, zda nechybí skutečně zásadní:
- památky a stavby s celostátním nebo mezinárodním významem či dominanty daného regionu;
- historické události a dějinné zlomy;
- osobnosti zásadního významu, například prezidenti, panovníci, významní vynálezci, objevitelé, spisovatelé, malíři a další osobnosti s významným historickým nebo kulturním dopadem.

Příklady měřítka: Karlův most, Špilberk, chrám sv. Barbory, významné bitvy a zásadní osobnosti českých dějin.

Nehledej vyčerpávající katalog všech chráněných objektů. Samotná památková ochrana, lokální zajímavost nebo existence drobné stavby nestačí. Nevyžaduj další kůlny, drobné kapličky, běžné stezky ani marginální příběhy. Jakmile jsou hlavní dominanty a zásadní příběhy pokryté, tuto kontrolu uzavři. **Toto výběrové omezení platí pouze pro audit, nikdy pro rework.**

### B. PSČ a správní údaje

Ověř:
- správné PSČ a jeho geografickou příslušnost;
- `city` podle pravidla sídla obsluhující pošty;
- okres a kraj podle stejného pravidla;
- `district` pouze jako relevantní a doloženou část obce/města podle pravidel projektu.

U velkých měst kontroluj správné městské části. Nezapisuj každou samotu nebo malou osadu jako městskou část. Použij definice a zdroje stanovené českým Content Standardem a reworkem; nevytvářej vlastní pravidla.

### C. Duplicity a přiřazení faktů mezi PSČ

Proveď rychlou kontrolu napříč celým blokem, zda stejné místo, událost nebo téma není bezdůvodně zpracováno vícekrát v různých PSČ. Zaměř se na zjevné duplicity a téměř totožné příběhy, ne na hledání každé tematické podobnosti.

Respektuj pravidlo jednoho primárního PSČ pro rozsáhlé a liniové objekty a již uzamčená přiřazení. Nerozděluj jeden objekt nebo příběh podle hranic PSČ a nevytvářej duplicity jen proto, že objekt zasahuje do více PSČ. Turistický příběh není podřízen hranici PSČ.

### D. Kategorie mapy

Ověř, že každý fakt používá platné `map_category` podle aktuálního schématu a že odpovídá skutečnému typu místa nebo tématu. Nezaměňuj `category` a `map_category`. Oprav pouze skutečné chybné nebo nepovolené zařazení.

### E. Překlady

Zkontroluj všech sedm jazyků: `cs, de, en, es, fr, it, nl`.
- Každý jazyk je ve správném poli a obsahuje správnou jazykovou verzi.
- Překlad patří ke správnému faktu a odpovídá jeho významu.
- Nejsou zaměněné jazyky, překlady jiného faktu, chybějící, prázdné, useknuté nebo poškozené texty.
- Jsou zachována důležitá fakta, jména, data a významová omezení.

Oprav chyby, které mění význam nebo prokazatelně poškozují překlad. Správné a srozumitelné překlady nepřepisuj kvůli stylistickým alternativám, drobným nuancím nebo osobní preferenci.

### F. JSON, databáze a technická konzistence

Ověř:
- základní strukturální konzistence existujících JSON dat podle již dostupných kontrol a aktuálního `schema.json`;
- povinná pole, datové typy, povolené hodnoty, ID a pořadí faktů;
- správné přiřazení faktů k PSČ a nepřítomnost poškozených či nechtěných duplicit;
- soulad inventáře databáze, `sequence.json` a `groups` — každý očekávaný kód právě jednou;
- správnou zemi, status a verzi podle aktuálního životního cyklu projektu.

Rozpor v sekvenci nebo inventáři zaznamenej; neměň `sequence.json` ani rozsah bez výslovného oprávnění.

**AJV a další samostatné validační běhy nejsou požadované.** Nespouštěj AJV, neinstaluj kvůli auditu balíčky a nevyžaduj žádné tokeny, hesla, přístupové klíče ani nové validační prostředí. Pokud už byly základní strukturální a databázové kontroly provedeny, nepouštěj je znovu. Ověř pouze konkrétní opravenou položku načtením zpět a pokračuj.

### G. Souřadnice — žádná plošná kontrola

Existující neprázdné souřadnice ani polohy znovu neověřuj, nepřeměřuj a nepřesouvej. Jediná výjimka: pokud u faktu najdeš `facts[].location = null`, pokus se doplnit polohu přesně podle hierarchie a pravidel v aktuálním `prompt_rework.md` a Content Standardu. Pokud ji nelze odpovědně určit, ponech `null` a stručně zaznamenej důvod. Nevymýšlej polohu. Ostatní souřadnicové údaje ponech beze změny.

### H. Zjevné věcné vady

Neprováděj znovu kompletní faktografickou rešerši každého faktu ani nekontroluj každý historický letopočet. Zasáhni pouze při konkrétním důvodu: zjevný rozpor, prokazatelná nepravda, vymyšlené tvrzení, reklama/propagace, nesprávný zdroj nebo obsah, který je zjevně přiřazen k jinému místu či tématu. Drobné rozdíly mezi nejednoznačnými historickými zdroji neřeš do nekonečna; použij přiměřenou přesnost a zachovej již rozumně doložené znění.

## 4. Postup, opravy a nálezy

Pracuj v jednom souvislém běhu nad celým blokem. Mechanické kontroly prováděj dávkově a lokálně, kde je to možné. U každé skutečné vady: **najdi → ověř → bezpečně oprav → načti zpět → ověř opravu → stručně zaznamenej**.

- Automaticky opravuj pouze potvrzené a bezpečné chyby v existujících českých záznamech.
- Zachovávej ID a nesouvisející obsah.
- Nejasný jednotlivý případ označ `REVIEW REQUIRED` a pokračuj; nezastavuj kvůli němu celý blok.
- Neprováděj změny schématu, RLS, triggerů, oprávnění, databázové architektury, aplikačního kódu, cizích dat ani rozsahu auditu.
- Zápisy do databáze prováděj bezpečně a sekvenčně. Po timeoutu nikdy neopakuj zápis naslepo; nejprve ověř, zda už proběhl.
- Při omezení API respektuj `Retry-After`; neobcházej limity paralelními požadavky.

Používej závažnosti `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`. Výsledek bloku: `PASS`, `FIX REQUIRED`, `REVIEW REQUIRED` nebo `BLOCKED`. PASS je možný jen po dokončení všech relevantních kontrol a bez nevyřešené podstatné vady. Nevytvářej nálezy z pouhých stylistických preferencí.

## 5. Tahák, pokračování a report

Používej jeden kanonický tahák pro přesný rozsah. Zapiš do něj pouze inventář, dokončené kontroly, skutečné nálezy, opravy, otevřené položky a přesný další krok. Nezakládej duplicitní tahák a neukládej checkpoint po každém PSČ nebo faktu. Checkpoint ulož při skutečném přerušení, hrozícím vyčerpání kontextu nebo na konci běhu.

Při pokračování načti tahák a pokračuj pouze otevřenými položkami. Hotovou práci neopakuj.

Na konci předlož stručný report: rozsah a počty PSČ, výsledek, zásadní chybějící témata, počty a typy skutečných chyb, provedené opravy, nevyřešené položky a výsledek již dostupných základních technických kontrol (bez samostatného AJV běhu).

## 6. Uzavření úspěšného auditu

Po skutečném PASS proveď projektový uzavírací postup: ověř celý rozsah, nastav V5 + `published` podle pravidel projektu, vytvoř úplnou zálohu ze Supabase do Dropboxu a ověř její čitelnost i shodu. Teprve poté zamkni přesně auditovaný rozsah read-only a ověř, že zámek nezasahuje mimo něj. Pokud publikace, záloha nebo její ověření selže, rozsah nezamykej a audit neoznačuj jako definitivně uzavřený. Nikdy netvrď, že záloha nebo zámek existuje, pokud nebyly skutečně provedeny a ověřeny.

---

## Základní pravidlo

**Audit hledá zásadní chybějící turistická témata a skutečné geografické, překladové, kategoriální, duplicitní a technické vady. Neprovádí druhý rework, neřeší marginální historické spory, nepřepisuje správné texty a znovu nekontroluje existující souřadnice. Rework zůstává beze změny a v plné kvalitě.**
