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
- Neprováděj změny schématu, triggerů, databázové architektury, aplikačního kódu, cizích dat ani rozsahu auditu. Změny RLS nebo oprávnění jsou zakázané při běžném auditu a publikaci; výjimkou je pouze výslovně vyžádané read-only zamčení podle existujícího ověřeného mechanismu projektu a pouze v nezbytném rozsahu.
- Zápisy do databáze prováděj bezpečně a sekvenčně. Po timeoutu nikdy neopakuj zápis naslepo; nejprve ověř, zda už proběhl.
- Při omezení API respektuj `Retry-After`; neobcházej limity paralelními požadavky.

Používej závažnosti `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`. Výsledek bloku: `PASS`, `FIX REQUIRED`, `REVIEW REQUIRED` nebo `BLOCKED`. PASS je možný jen po dokončení všech relevantních kontrol a bez nevyřešené podstatné vady. Nevytvářej nálezy z pouhých stylistických preferencí.

## 5. Tahák, pokračování a report

Používej jeden kanonický tahák pro přesný rozsah. Zapiš do něj pouze inventář, dokončené kontroly, skutečné nálezy, opravy, otevřené položky a přesný další krok. Nezakládej duplicitní tahák a neukládej checkpoint po každém PSČ nebo faktu. Checkpoint ulož při skutečném přerušení, hrozícím vyčerpání kontextu nebo na konci běhu.

Při pokračování načti tahák a pokračuj pouze otevřenými položkami. Hotovou práci neopakuj.

Na konci předlož stručný report: rozsah a počty PSČ, výsledek, zásadní chybějící témata, počty a typy skutečných chyb, provedené opravy, nevyřešené položky a výsledek již dostupných základních technických kontrol (bez samostatného AJV běhu).

## 6. Uzavření auditu, publikace a záloha na výslovné vyzvání uživatele

Po dokončení auditu nejprve předej uživateli stručný report a jasně uveď, že auditní práce je dokončena. **Publikaci ani zálohu nespouštěj automaticky. Vyčkej na výslovné vyzvání uživatele.**

Teprve když uživatel po dokončení auditu výslovně požádá o publikaci (například „všechno do V5 a published“), proveď následující kroky v tomto pořadí:

1. **Publikace přes Supabase:** pracuj pouze s přesným auditovaným rozsahem a jeho ověřeným inventářem. Existující záznamy tohoto rozsahu nastav na `data_version = 5` a `status = 'published'`. Nevytvářej nové PSČ, neměň jiná PSČ ani jiné země. Zachovej všechna ID a obsah záznamů.
2. **Read-back kontrola:** znovu načti rozsah ze Supabase a ověř přesný počet i seznam PSČ, že každý očekávaný řádek má `data_version = 5` a `status = 'published'`, a že nejsou žádné výjimky. Pokud kontrola neprojde, zálohu nespouštěj a uživateli oznam konkrétní nesoulad.
3. **Záloha přes existující Supabase Edge Function:** použij dedikovanou zálohovací Edge Function odpovídající přesnému auditovanému rozsahu. Použij stejný ověřený postup jako u úspěšných záloh Prahy 10000–15900 a Brna 60200–64400: Edge Function načte data ze Supabase read-only, přes serverové Dropbox OAuth secrets vytvoří časově označenou složku v aplikačním Dropbox prostoru `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/` a uloží úplný JSON export, obnovovací SQL a `manifest.json`. Spouštění prováděj zavedenou cestou přes Supabase `pg_net` HTTP GET na endpoint příslušné Edge Function s jejím platným run parametrem; nevymýšlej jiný endpoint ani ruční náhradní export.
4. **Ověření Dropboxu:** nekontroluj pouze osobní Dropbox složku `/TRAVEL_BACKUP`. Skutečné zálohy ověř v aplikačním Dropbox namespace pod `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/`. Vyhledej nově vytvořenou složku pro přesný auditovaný rozsah a ověř přítomnost všech tří souborů: JSON, restore SQL a manifest. Načti manifest a potvrď správný rozsah, počet i seznam PSČ, `validation.status = 'VERIFIED'`, `validation.readback_verified = true` a odpovídající hash rozsahu. Záloha je dokončena pouze tehdy, když Dropbox obsahuje všechny tři soubory a manifest potvrzuje read-back SHA-256 ověření. Samotné přijetí HTTP požadavku ani vytvoření složky není důkaz dokončené zálohy.
5. **Report:** uživateli sděl výsledek publikace a zálohy odděleně, včetně počtu PSČ, verze, statusu, přesné Dropbox cesty a výsledku ověření. Při chybě nebo timeoutu nejprve ověř stav v Dropboxu; nikdy neopakuj zápis nebo spuštění naslepo. Existující zálohy nepřepisuj a při opakovaném spuštění respektuj timestampované nové složky.

**Read-only zamykání Supabase prováděj pouze na výslovný příkaz uživatele.** Nikdy ho nespouštěj automaticky po auditu, publikaci ani záloze a nepovažuj samotný pokyn k publikaci nebo záloze za souhlas se zamčením. Pokud uživatel výslovně požádá o zamčení konkrétního rozsahu, proveď ho samostatně pomocí již existujícího a ověřeného mechanismu projektu; nejprve ověř přesný rozsah a dopad, zamkni pouze požadované záznamy a následně ověř, že jsou skutečně pouze pro čtení. Nevyžaduj, aby zamčení provedl uživatel sám. Neimprovizuj nový mechanismus ani neměň nesouvisející RLS, oprávnění či provozní konfiguraci. Pokud existující mechanismus nelze bezpečně dohledat nebo ověřit, nic neměň a oznam konkrétní překážku. Nevyžaduj ani nevypisuj přístupové klíče a secrets; používej pouze již nakonfigurované serverové secrets a oprávněné nástroje projektu.


---

## Základní pravidlo

**Audit hledá zásadní chybějící turistická témata a skutečné geografické, překladové, kategoriální, duplicitní a technické vady. Neprovádí druhý rework, neřeší marginální historické spory, nepřepisuje správné texty a znovu nekontroluje existující souřadnice. Rework zůstává beze změny a v plné kvalitě.**
