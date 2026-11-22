# TRAVEL ČESKO — STRUČNÝ AUDITNÍ PROMPT PSČ

**Verze 2.1 — cílený a databázově šetrný audit**

## 1. Účel a oddělení od reworku

Audit kontroluje již vytvořená česká data v `public.postal_codes` (`country_code = 'CZ'`) a opravuje skutečné, významné chyby. Není to druhý rework ani nové kolo kompletní rešerše.

**NEPŘEKROČITELNÉ ODDĚLENÍ:** Výběrová kritéria, zjednodušení a omezení tohoto auditu platí pouze pro audit a nikdy se nepřenášejí do `prompt_rework.md`, `CONTENT_STANDARD.md`, schématu ani do tvorby nových záznamů. Samostatně však platí, že obecná pravidla ochrany Supabase I/O a bezpečného databázového provozu jsou společná pro rework, audit i tvorbu a jsou závazně uvedena také v `CONTENT_STANDARD.md` a příslušných pracovních promptech. Při reworku používej jeho úplná obsahová a geografická pravidla; auditní výběrová omezení nikdy nepoužívej jako důvod k vynechání povinné rešerše.

Autorita: `schema.json` určuje strukturu a povolené hodnoty; `CONTENT_STANDARD.md` a `prompt_rework.md` určují pravidla tvorby a geografické definice; tento prompt určuje pouze užší rozsah auditu.

## 2. Podklady a rozsah

Před prací načti aktuální:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/sequence.json`
- `data/czechia/reference/README.md`
- `data/czechia/reference/ruian_postcodes.csv` (používej přímo jako výchozí a jediný sdílený RÚIAN inventář)
- `data/czechia/reference/ruian_import_manifest.json`
- registr a kanonický auditní tahák pro přesný rozsah v `data/czechia/audits/`

Audituj celý zadaný blok, ne vzorek. Přesný seznam PSČ urči z auditního zadání, registru/taháku a `sequence.json`; databázi používej pouze k ověření těchto konkrétních PSČ. **Nevytvářej celodatabázový inventář kvůli auditu jednoho okresu.** Pracuj pouze s existujícími českými řádky. Nevytvářej PSČ, neměň rozsah, pořadí ani `sequence.json`. Německých a jiných nečeských dat se nedotýkej.

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


### E2. Délka českého master textu a návaznost překladů

U každého faktu kontroluj z hlediska délky **výhradně český master text** v `facts[].text` / odpovídající český text faktu. Jedinou délkovou hranicí tohoto auditu je **350 znaků včetně mezer**.

- **Český text s délkou 350 a více znaků:** z hlediska délky jej ponech beze změny. Nezkracuj ho, nestanovuj žádnou horní hranici a neupravuj jeho překlady jen proto, že jsou v jiném jazyce kratší nebo delší.
- **Český text kratší než 350 znaků:** pouze toto je délkový nález. Český text vhodně doplň nebo přepracuj alespoň na 350 znaků pomocí konkrétních, relevantních a ověřitelných informací. Zachovej původní význam a věcnou přesnost; nepřidávej výplň, opakování ani neověřené podrobnosti.
- Po opravě českého textu uprav odpovídající překlady ve všech požadovaných jazycích (`de, en, es, fr, it, nl`) tak, aby přesně odpovídaly opravenému českému master textu. Každý překlad formuluj přirozeně a idiomaticky; nepřekládej mechanicky a nenatahuj text na žádný počet znaků.
- **Délku cizojazyčných textů podle počtu znaků nekontroluj, neoznačuj jako chybu, nedoplňuj ani nezkracuj.** Cizojazyčný text může mít méně než 350 znaků; samo o sobě to není závada a nesmí to vyvolat žádnou úpravu.
- Pro české ani přeložené texty nestanovuj žádnou horní délkovou hranici.
- Pokud český text kratší než 350 znaků nelze odpovědně doplnit ověřenými informacemi, označ konkrétní fakt `REVIEW REQUIRED` a pokračuj.
- Po úpravě znovu spočítej český text a ověř pouze to, že má alespoň 350 znaků. Překlady kontroluj z hlediska významu a úplnosti, nikoli délky.

Toto pravidlo platí pouze pro audit. Nemění požadavky českého rework promptu ani Content Standardu.
### F. JSON, databáze a technická konzistence

Ověř:
- základní strukturální konzistence existujících JSON dat podle již dostupných kontrol a aktuálního `schema.json`;
- povinná pole, datové typy, povolené hodnoty, ID a pořadí faktů;
- správné přiřazení faktů k PSČ a nepřítomnost poškozených či nechtěných duplicit;
- soulad inventáře databáze, `sequence.json` a `groups` — každý očekávaný kód právě jednou;
- správnou zemi, status a verzi podle aktuálního životního cyklu projektu.

Rozpor v sekvenci nebo inventáři zaznamenej; neměň `sequence.json` ani rozsah bez výslovného oprávnění.

#### Povinná pravidla pro databázové dotazy — ochrana výkonu

Tato pravidla mají přednost před jakýmkoli obecným pokynem k inventuře, validaci nebo kontrole konzistence:

1. **Rozsah jednoho okresu = pouze explicitní seznam jeho PSČ.** Každý databázový dotaz na `public.postal_codes` musí být omezen současně na `country_code = 'CZ'` a přesný seznam `postal_code` z auditovaného bloku. Neodvozuj rozsah dotazu pouze z okresu, obce, statusu nebo verze.
2. **Nikdy nečti celou tabulku kvůli okresnímu auditu.** Zakázáno je `SELECT * FROM public.postal_codes` bez přesného filtru PSČ, stejně jako celotabulkové `COUNT(*)`, seskupení, inventury všech zemí/statusů/verzí, stránkování přes všechny řádky nebo následné filtrování až v paměti.
3. **Mapové body načítej až podle ID vybraných PSČ.** Nejprve cíleně načti auditované řádky a jejich `id`; následně čti pouze `public.explorer_map_points` s `postal_id` omezeným na tato ID. Nikdy nenačítej všechny mapové body a nefiltruj je až v aplikaci. Respektuj složený primární klíč `(postal_id, fact_id)`; stránkování pouze podle `postal_id` může vynechat další body stejného PSČ.
4. **Čti jen potřebná pole.** Nepoužívej `SELECT *`, pokud stačí konkrétní sloupce. JSON obsah načti pouze pro přesně vybrané řádky, které audit skutečně potřebuje.
5. **Žádné vlastní diagnostické SQL.** Nevymýšlej názvy sloupců, tabulek, county/district polí ani operátorů. Před dotazem ověř skutečné schéma v projektové dokumentaci nebo existujícím schématu. Pokud si nejsi jistý syntaxí či rozsahem, dotaz nespouštěj; nejprve si vyžádej ověřený postup.
6. **Žádné automatické porovnávání Supabase a Neon.** Audit pracuje s určeným zdrojem pravdy podle projektu. Druhou databázi nečti ani s ní data nesrovnávej, pokud uživatel výslovně nepožádá o konkrétní diagnostiku.
7. **Žádné opakované čtení bez důvodu.** Výsledek jednoho správně vymezeného načtení znovu používej pro všechny kontroly daného bloku. Po zápisu načti zpět pouze změněné PSČ/fakta a nezbytné navázané mapové body.
8. **Dotazy a zápisy prováděj sekvenčně a úsporně.** Nepouštěj paralelní široké dotazy, opakované stránkování ani retry naslepo. Při timeoutu nejprve ověř stav konkrétního požadavku a respektuj `Retry-After`.
9. **Záloha není součást auditu.** Během běžného auditu nespouštěj `travel-backup-validated`, jiné Edge Functions, exporty ani celodatabázové kontroly. Záloha se spouští až po výslovném pokynu uživatele a pouze pro přesný auditovaný rozsah.

## Ochrana Supabase I/O a databázové zátěže — POVINNÉ

Tato pravidla platí pro každou práci s produkční databází, nejen pro audit. Cílem je omezit fyzické čtení/zápis, zbytečné PostgREST požadavky a opakované načítání, nikoli omezit kvalitu obsahu nebo povinné ověřování.

1. **Přesný rozsah každého dotazu:** při práci s českým PSČ vždy filtruj současně `country_code = 'CZ'` a přesný seznam požadovaných `postal_code`. Nikdy nenačítej všechny země, všechna PSČ ani celý status/data_version jen proto, abys následně filtroval výsledek v paměti.
2. **Žádné plošné čtení:** nepoužívej full-table scan, globální `COUNT(*)`, seskupování celé tabulky, neomezené stránkování ani `SELECT *` bez přesného omezení rozsahu. Nečti sloupce, které daný krok nepotřebuje. JSONB `content` načítej pouze pro konkrétní vybrané záznamy, které se skutečně zpracovávají.
3. **Mapové body až podle vybraných ID:** záznamy `explorer_map_points` načítej pouze pro `postal_id` cílových záznamů. Nikdy nenačítej celou tabulku mapových bodů a nefiltruj ji až v aplikaci. Respektuj složený primární klíč `(postal_id, fact_id)`; stránkování nesmí předpokládat, že samotné `postal_id` jednoznačně určuje řádek.
4. **Jedno načtení, lokální práce:** jednou načtený záznam nebo dávku používej pro všechny nezávislé kontroly daného běhu. JSON, schéma, překlady, ID, počty a vnitřní konzistenci kontroluj lokálně. Neopakuj stejný SELECT kvůli další kontrolní oblasti, pokud se data mezitím nezměnila.
5. **Čtení po zápisu jen v nezbytném rozsahu:** po zápisu načti zpět pouze změněný cílový řádek nebo změněné mapové body. Neprováděj následnou inventuru celé tabulky. Před opakováním zápisu po timeoutu nejprve ověř stav konkrétní položky; nikdy neopakuj UPDATE naslepo.
6. **Omez zbytečné požadavky:** nespoléhej na opakované refreshování stejného datasetu, opakované přesné počty, zbytečné `HEAD`/count požadavky, paralelní dotazy ani polling bez skutečné potřeby. Použij dávkové načtení, pokud je bezpečné a podporované. Výsledky sdílených referencí a již načtených dat znovu používej v rámci pracovní relace.
7. **Edge Functions a exporty:** funkce musí mít předem omezený rozsah a stránkovat pouze vybrané řádky. Žádný export celé tabulky, všech mapových bodů ani všech zemí při práci s jedním blokem. Preview nesmí skrytě provádět širší čtení než vlastní cílená operace. Zálohu nebo export nespouštěj během běžného reworku/auditu; pouze na výslovný pokyn a s přesným rozsahem.
8. **SQL pouze podle ověřeného schématu:** nevymýšlej názvy tabulek, sloupců, indexů, operátorů ani vztahů. Před dotazem ověř potřebné schéma z již dostupné dokumentace nebo cíleného popisu. Pokud bezpečný filtr nelze sestavit, dotaz nespouštěj a oznam překážku.
9. **Indexy a RLS neměň naslepo:** nepřidávej ani nemaž indexy a neupravuj RLS/politiky jen na základě obecného doporučení nebo jednoho upozornění. Nejprve ověř skutečný plán a vzorec používání dotazů, dopad na bezpečnost a přínos změny; změnu schématu, indexů či oprávnění prováděj pouze v samostatně schváleném optimalizačním kroku.
10. **Žádné automatické databázové porovnávání:** Supabase a Neon ani jiné databáze mezi sebou automaticky neporovnávej. Takové porovnání proveď pouze tehdy, když si je uživatel výslovně vyžádá.
11. **Sekvenčně a bez retry bouří:** databázové zápisy prováděj sekvenčně. Při timeoutu, 429 nebo 5xx zastav opakované požadavky, respektuj `Retry-After` a nejprve ověř, zda předchozí operace již neproběhla. Nespouštěj paralelní opakování stejného dotazu.

**Zásada:** přesně vybrat → jednou načíst → zpracovat lokálně → zapsat pouze změnu → ověřit pouze změněnou položku. Pokud nástroj neumí dodržet přesný rozsah, zastav se; nikdy nenahrazuj bezpečný dotaz plošným čtením.

Pokud dostupný nástroj neumí bezpečně omezit dotaz na přesný seznam PSČ a související `postal_id`, nepokračuj širokým dotazem jako náhradním řešením. Oznam překážku a vyžádej si bezpečný cílený postup.

**AJV a další samostatné validační běhy nejsou požadované.** Nespouštěj AJV, neinstaluj kvůli auditu balíčky a nevyžaduj žádné tokeny, hesla, přístupové klíče ani nové validační prostředí. Pokud už byly základní strukturální a databázové kontroly provedeny, nepouštěj je znovu. Ověř pouze konkrétní opravenou položku načtením zpět a pokračuj.

### G. Souřadnice — žádná plošná kontrola

Existující neprázdné souřadnice ani polohy znovu neověřuj, nepřeměřuj a nepřesouvej. Jediná výjimka: pokud u faktu najdeš `facts[].location = null`, pokus se doplnit polohu přesně podle hierarchie a pravidel v aktuálním `prompt_rework.md` a Content Standardu. Pokud ji nelze odpovědně určit, ponech `null` a stručně zaznamenej důvod. Nevymýšlej polohu. Ostatní souřadnicové údaje ponech beze změny.

### H. Zjevné věcné vady

Neprováděj znovu kompletní faktografickou rešerši každého faktu ani nekontroluj každý historický letopočet. Zasáhni pouze při konkrétním důvodu: zjevný rozpor, prokazatelná nepravda, vymyšlené tvrzení, reklama/propagace, nesprávný zdroj nebo obsah, který je zjevně přiřazen k jinému místu či tématu. Drobné rozdíly mezi nejednoznačnými historickými zdroji neřeš do nekonečna; použij přiměřenou přesnost a zachovej již rozumně doložené znění.

## 4. Postup, opravy a nálezy

Pracuj v jednom souvislém běhu nad celým blokem. Nejprve si jednou připrav přesný inventář PSČ z lokálních projektových podkladů a jedním cíleným databázovým čtením načti potřebné řádky celého bloku; znovu je nenačítej pro každou kontrolní oblast. Mechanické kontroly prováděj dávkově a lokálně, kde je to možné. Webovou rešerši omez na skutečné nálezy a zásadní témata, neprováděj opakované plošné vyhledávání každého faktu. U každé skutečné vady: **najdi → ověř → bezpečně oprav → načti zpět pouze změněnou položku → ověř opravu → stručně zaznamenej**.

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
3. **Záloha přes existující Supabase Edge Function:** použij pouze zálohovací Edge Function, jejíž skutečný aktuální kód a vstupní parametry byly ověřeny pro přesný auditovaný rozsah. Nikdy nepředpokládej, že funkce určená pro kompletní databázovou zálohu automaticky podporuje okresní rozsah. U `travel-backup-validated` je povinný cílený režim `scope=selected` s přesným `country_code=CZ` a úplným explicitním seznamem auditovaných `postal_codes`; bez těchto parametrů funkce musí požadavek odmítnout bez čtení databáze. `scope=all` je výhradně pro výslovně požadovanou kompletní zálohu, nikdy pro okresní audit. Tato funkce ukládá cílený JSON export, mapové body a schéma s manifestem; nepředpokládej, že vytváří restore SQL. Pokud požadovaný typ zálohy vyžaduje JSON, restore SQL a manifest, použij pouze již existující a ověřenou dedikovanou funkci pro daný rozsah. Před spuštěním ověř její aktuální kód, přesný rozsah a způsob spuštění; nespouštěj neznámý endpoint ani nevymýšlej parametry.
4. **Ověření Dropboxu:** nekontroluj pouze osobní Dropbox složku `/TRAVEL_BACKUP`. Skutečné zálohy ověř v aplikačním Dropbox namespace pod `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/`. Vyhledej nově vytvořenou složku pro přesný auditovaný rozsah a ověř přítomnost všech tří souborů: JSON, restore SQL a manifest. Načti manifest a potvrď správný rozsah, počet i seznam PSČ, `validation.status = 'VERIFIED'`, `validation.readback_verified = true` a odpovídající hash rozsahu. Záloha je dokončena pouze tehdy, když Dropbox obsahuje všechny tři soubory a manifest potvrzuje read-back SHA-256 ověření. Samotné přijetí HTTP požadavku ani vytvoření složky není důkaz dokončené zálohy.
5. **Report:** uživateli sděl výsledek publikace a zálohy odděleně, včetně počtu PSČ, verze, statusu, přesné Dropbox cesty a výsledku ověření. Při chybě nebo timeoutu nejprve ověř stav v Dropboxu; nikdy neopakuj zápis nebo spuštění naslepo. Existující zálohy nepřepisuj a při opakovaném spuštění respektuj timestampované nové složky.

**Read-only zamykání Supabase prováděj pouze na výslovný příkaz uživatele.** Nikdy ho nespouštěj automaticky po auditu, publikaci ani záloze a nepovažuj samotný pokyn k publikaci nebo záloze za souhlas se zamčením. Pokud uživatel výslovně požádá o zamčení konkrétního rozsahu, proveď ho samostatně pomocí již existujícího a ověřeného mechanismu projektu; nejprve ověř přesný rozsah a dopad, zamkni pouze požadované záznamy a následně ověř, že jsou skutečně pouze pro čtení. Nevyžaduj, aby zamčení provedl uživatel sám. Neimprovizuj nový mechanismus ani neměň nesouvisející RLS, oprávnění či provozní konfiguraci. Pokud existující mechanismus nelze bezpečně dohledat nebo ověřit, nic neměň a oznam konkrétní překážku. Nevyžaduj ani nevypisuj přístupové klíče a secrets; používej pouze již nakonfigurované serverové secrets a oprávněné nástroje projektu.


---

## Základní pravidlo

**Audit hledá zásadní chybějící turistická témata a skutečné geografické, překladové, kategoriální, duplicitní a technické vady. Neprovádí druhý rework, neřeší marginální historické spory, nepřepisuje správné texty a znovu nekontroluje existující souřadnice. Rework zůstává beze změny a v plné kvalitě.**

---

## Závazné auditní pravidlo — legendy, kroniky a přiměřená přesnost letopočtů

Při auditu rozlišuj mezi doloženou historickou událostí, kronikářským podáním, legendou/pověstí a novodobou interpretací.

- **Legenda není automaticky faktografická chyba.** Pokud text jasně uvádí „podle pověsti“, „legenda vypráví“, „podle kroniky“ nebo jinak správně označuje původ příběhu, neoznačuj jej za nepravdivý jen proto, že samotná událost či osoba nejsou nezávisle historicky doloženy.
- Ověř, zda použitý pramen skutečně obsahuje daný příběh a zda je jeho původ správně připsán. Kronika dokládá, že kronikář příběh zaznamenal; sama o sobě nemusí dokazovat historickou pravdivost popisované události.
- Pokud je legenda podána jako jistá doložená historie bez označení svého původu, oprav formulaci tak, aby příběh zůstal poutavý, ale byl správně připsán tradici, pověsti nebo konkrétní kronice. Nemaž hodnotný příběh jen kvůli jeho legendární povaze.
- Nevyžaduj opakovaná upozornění typu „údajně“, „možná“ nebo dlouhé vysvětlování historické nejistoty, pokud stačí jasné úvodní připsání příběhu.
- **Letopočty posuzuj přiměřeně.** Drobné rozdíly v přesném roce nejsou samy o sobě nálezem, pokud nemění identitu, význam ani historickou souvislost. Přijmi bezpečné formulace jako „kolem roku“, „v první polovině století“, „na přelomu století“ nebo širší doložené období.
- Přesný rok označ za vadu pouze tehdy, když je podstatný a prokazatelně chybný, případně když skutečný rozpor mění význam či identitu události/osoby. Jinak neblokuj audit a nepřepisuj správný text kvůli kosmetickému zpřesnění.
- Nevytvářej falešnou jistotu: pokud je rozpor zásadní, zaznamenej jej stručně a navrhni bezpečnější formulaci. Pokud jde pouze o rozdílné tradice, zachovej jejich správné připsání a pokračuj.

**Auditní cíl:** zachovat zajímavé a kulturně významné příběhy, ověřit jejich původ a správné podání a opravovat skutečné věcné chyby — nikoli trestat legendy za to, že jsou legendami, nebo brzdit práci kvůli nepodstatným letopočtům.
