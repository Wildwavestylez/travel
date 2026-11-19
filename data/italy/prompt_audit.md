# TRAVEL ITÁLIE — STRUČNÝ AUDITNÍ PROMPT CAP

**Verze 1.0 — cílený audit kvality**

## 1. Účel a oddělení od reworku

Tento prompt slouží výhradně k auditu již vytvořených italských CAP JSON záznamů. Audit hledá skutečné, významné chyby a opravuje je v rozsahu, který je zde výslovně povolen. Není to druhý rework ani nové kolo kompletní rešerše.

**NEPŘEKROČITELNÉ ODDĚLENÍ:** Výběrová kritéria, zjednodušení a omezení tohoto auditu se nikdy nepřenášejí do `prompt_rework.md`, `CONTENT_STANDARD.md`, `schema.json` ani do tvorby nových záznamů. Tyto dokumenty zůstávají beze změny a pro rework jsou nadále plně závazné. Při tvorbě a reworku používej jejich plnou kvalitu a rozsah. Z auditu nikdy neodvozuj, co lze při tvorbě vynechat nebo zjednodušit.

Autorita:
- `schema.json` určuje strukturu, povinná pole a povolené hodnoty.
- `COUNTRY_PROFILE.md` určuje italské geografické a administrativní významy.
- `CONTENT_STANDARD.md` a `prompt_rework.md` určují plná pravidla tvorby, rešerše, zdrojů, obsahu a geografie.
- Tento dokument určuje pouze užší rozsah následného auditu a povolené opravy.

Pokud se dokumenty dostanou do rozporu, nezakrývej jej vlastním výkladem. Zaznamenej konkrétní rozpor a vyžádej řízené rozhodnutí.

## 2. Podklady a rozsah

Před auditem načti aktuální:
- `data/italy/schema.json`
- `data/italy/COUNTRY_PROFILE.md`
- `data/italy/CONTENT_STANDARD.md`
- `data/italy/prompt_rework.md`
- přesný seznam auditovaných CAP a případné schválené pracovní podklady pro tento rozsah.

Audituj celý výslovně zadaný blok, ne náhodný vzorek. Ověř přesný seznam a počet záznamů proti skutečně dostupným datům. Pracuj pouze s existujícími italskými záznamy v rozsahu zadání.

V současné přípravné fázi není potvrzena italská produkční databáze, kanonická `sequence.json`, produkční status ani životní cyklus publikace. Proto:
- nevymýšlej tabulku, databázové schéma, country discriminator, status, verzi ani způsob zápisu;
- nevytvářej CAP a nerozšiřuj rozsah;
- nepovažuj pracovní seznam za kanonickou sekvenci;
- nedotýkej se českých, německých ani jiných zemských dat;
- nevydávej auditní JSON za publikovaný nebo produkčně uložený záznam.

Pokud není možné získat úplný inventář zadaného rozsahu, označ výsledek `BLOCKED` a uveď, co chybí. Neodhaduj počet ani rozsah.

Převezmi všechny dokončené kontroly z existujícího auditního taháku, pokud byl pro tento konkrétní rozsah schválen a skutečně existuje. Nezakládej duplicitní taháky. Hotovou kontrolu opakuj jen při konkrétním novém důkazu, změně dat nebo změně závazného dokumentu.

## 3. Povinné kontrolní oblasti

### A. Zásadní turistická a obsahová úplnost — jednou za celé auditované území

Prohlédni auditované území jako celek a ověř, zda nechybí skutečně zásadní:
- památky, historická centra a stavby s mezinárodním či celostátním významem nebo dominanty dané oblasti;
- mimořádně významné archeologické areály, kulturní instituce a umělecká díla;
- zásadní historické události a dějinné zlomy;
- osobnosti s významným historickým, kulturním, vědeckým nebo uměleckým dopadem;
- mimořádné přírodní a krajinné fenomény;
- zásadní technické, průmyslové nebo dopravní dědictví, pokud je pro danou oblast určující.

Příklady měřítka: Koloseum, Pompeje, florentské historické centrum, benátské památky, významné antické lokality, zásadní renesanční díla a osobnosti či mimořádné přírodní dominanty.

Nehledej vyčerpávající katalog všech chráněných objektů, kostelů, kaplí, drobných památek, muzeí a lokálních příběhů. Samotná památková ochrana, lokální zajímavost nebo existence objektu nestačí k tomu, aby se z něj stal auditní nález. Nevyžaduj doplnění každé drobné stavby, běžné stezky ani marginálního příběhu.

Jakmile jsou hlavní dominanty a zásadní příběhy auditovaného území pokryté, tuto kontrolu uzavři. **Toto výběrové omezení platí pouze pro audit, nikdy pro rework.** Rework nadále musí provádět úplnou tematickou rešerši podle Content Standardu.

### B. CAP, pošta a správní údaje

Ověř:
- správnost a aktuálnost pětimístného CAP;
- skutečnou poštu, která daný CAP obsluhuje, a její fyzickou adresu;
- `city` podle závazného pravidla: přesně jedno Comune, ve kterém fyzicky stojí obsluhující pošta;
- `county` podle aktuální oficiální mezilehlé územní jednotky tohoto Comune;
- `state` podle aktuální Regione tohoto Comune;
- `district` pouze jako doloženou podměstskou lokalitu uvnitř Comune obsluhující pošty, jinak null.

**Nikdy nepřepisuj `city` na největší, nejznámější nebo turisticky nejvýznamnější Comune.** Nikdy do něj nevkládej seznam obcí nebo osad. Pokud není skutečná obsluhující pošta spolehlivě identifikována, označ případ `REVIEW REQUIRED`; nehádej podle blízkosti.

Rozlišuj právní typ mezilehlé jednotky: Provincia, Città metropolitana, Provincia autonoma, Libero consorzio comunale nebo jiná aktuální oficiální forma. Nepřepisuj všechny typy na Provincia. Použij aktuální ISTAT klasifikaci a názvy, nikoli zastaralé správní seznamy.

### C. Plný geografický rozsah CAP a přiřazení faktů

`city` je organizační kotva podle obsluhující pošty, nikoli hranice rešerše ani tvrzení, že celý CAP leží v jednom Comune.

Zkontroluj, zda:
- záznam nezaměňuje Comune obsluhující pošty s celým územím CAP;
- důležité geografické přiřazení faktu není založeno jen na korespondenční adrese instituce;
- fakt skutečně patří do auditovaného CAP a není jen z blízkého nebo tematicky souvisejícího území;
- stejné místo či souvislý příběh není bezdůvodně duplicitně přiřazen více CAP;
- již rozumně doložená a uzavřená přiřazení nejsou měněna bez konkrétního nového důkazu.

U rozsáhlých nebo liniových objektů respektuj jedno primární CAP. Nepřesouvej objekt mezi CAP jen proto, že zasahuje přes více poštovních oblastí.

#### C1. Frazioni a lokality — zvláštní kontrola polohy

U faktů, jejichž předmětem je konkrétní frazione, borgata, località, vesnice nebo jiná podměstská osada, zkontroluj, zda je její geografická identita správně zachována.

Pokud je fakt o frazione a přesná poloha objektu není známá, nesmí být jeho pin automaticky umístěn do centra parent Comune, na radnici nebo na hlavní náměstí vzdálené obce. Použij pouze tehdy, když je to skutečně relevantní bod přímo v dané frazione, například její hlavní piazza, místní kostel nebo doložené centrum osady.

Tato kontrola se týká zjevně chybných nebo zavádějících umístění. Neprováděj plošné přeměřování všech existujících bodů.

### D. Duplicity a přiřazení faktů mezi CAP

Proveď rychlou kontrolu napříč celým auditovaným blokem, zda stejné místo, událost nebo souvislý příběh není bezdůvodně zpracován vícekrát.

Zaměř se na zjevné duplicity a téměř totožné příběhy, ne na hledání každé tematické podobnosti. Respektuj pravidlo jednoho primárního CAP pro rozsáhlé a liniové objekty a již uzavřená geografická přiřazení.

Turistický nebo historický příběh není podřízen hranici CAP tak, aby se musel uměle rozdělovat. Samostatná fakta jsou přípustná pro skutečně odlišné objekty nebo nezávislé příběhy.

### E. Kategorie a mapová klasifikace

Ověř, že každý fakt používá platné hodnoty `category`, `map_category` a `facts[].location.type` podle aktuálního italského schématu a že odpovídají skutečnému tématu a poloze.

- Nezaměňuj redakční `category` s `map_category`.
- Nezaměňuj `map_category` s fyzickým `location.type`.
- U faktu o konkrétní osobnosti ověř, zda je hlavním předmětem osoba; v takovém případě má být `map_category = personality`.
- Oprav pouze skutečně chybné nebo nepovolené zařazení.
- Nevytvářej vlastní hodnoty a neměň schéma.

### F. Překlady

Zkontroluj všech sedm jazyků: `cs, de, en, es, fr, it, nl`.

- Každý jazyk je ve správném poli a obsahuje správnou jazykovou verzi.
- Překlad patří ke správnému faktu a odpovídá jeho významu.
- Nejsou zaměněné jazyky, překlady jiného faktu, chybějící, prázdné, useknuté nebo poškozené texty.
- Jsou zachována důležitá fakta, jména, data, místní názvy a významová omezení.
- Každá jazyková verze je samostatně srozumitelná a obsahuje nezbytné vysvětlení italských reálií.

Oprav chyby, které mění význam, vynechávají podstatnou informaci nebo prokazatelně poškozují překlad. Správné a srozumitelné překlady nepřepisuj kvůli stylistickým alternativám, drobným nuancím nebo osobní preferenci.

#### F1. Délka italského master textu a návaznost překladů

Z hlediska délky kontroluj výhradně italský zdrojový/master text faktu v `facts[].text`. Jedinou délkovou hranicí tohoto auditu je **350 znaků včetně mezer**.

- Italský text s délkou 350 a více znaků z hlediska délky ponech beze změny. Nezkracuj jej, nestanovuj horní hranici a neupravuj překlady jen proto, že jsou v jiném jazyce kratší nebo delší.
- Italský text kratší než 350 znaků je délkový nález. Vhodně jej doplň nebo přepracuj alespoň na 350 znaků pomocí konkrétních, relevantních a ověřitelných informací. Zachovej význam a věcnou přesnost; nepřidávej výplň, opakování ani neověřené podrobnosti.
- Po opravě italského master textu uprav odpovídající překlady ve všech ostatních jazycích (`cs, de, en, es, fr, nl`), aby přesně odpovídaly opravenému italskému textu. Každý překlad formuluj přirozeně a idiomaticky.
- Délku cizojazyčných textů podle počtu znaků nekontroluj, neoznačuj jako chybu, nedoplňuj ani nezkracuj. Cizojazyčný text může mít méně než 350 znaků; samo o sobě to není závada.
- Pro italské ani přeložené texty nestanovuj horní délkovou hranici.
- Pokud italský text kratší než 350 znaků nelze odpovědně doplnit ověřenými informacemi, označ konkrétní fakt `REVIEW REQUIRED` a pokračuj.
- Po úpravě znovu spočítej italský text a ověř pouze dosažení alespoň 350 znaků. Překlady kontroluj z hlediska významu a úplnosti, nikoli délky.

Toto pravidlo je pouze auditní provozní hranice. Nemění požadavky italského rework promptu ani Content Standardu. Pokud se při prvních reálných auditech ukáže, že hranice 350 znaků neodpovídá kvalitě italských faktů, zaznamenej to jako návrh na další revizi auditního promptu; během jednoho auditu ji svévolně neměň.

### G. JSON a technická konzistence

Ověř:
- strukturální konzistenci existujícího JSON podle aktuálního `schema.json`;
- všechna povinná pole, datové typy a povolené hodnoty;
- pětimístný řetězec CAP včetně počátečních nul;
- unikátní ID faktů a konzistentní pořadí;
- shodu faktů a jejich ID napříč všemi sedmi překlady;
- existenci všech zdrojů odkazovaných ve `facts[].sources` v top-level `sources`;
- validitu souřadnic v povoleném rozsahu;
- správné oddělení `representative_point`, `access_point` a `facts[].location`;
- správné typy a přesné názvy polí podle schématu.

Schema vyžaduje `access_point`, `representative_point` a alespoň jeden fakt. Nezmírňuj tyto požadavky ad hoc. Pokud povinný údaj nelze odpovědně doložit, označ problém a vyžádej rozhodnutí; nevyráběj falešné hodnoty.

V současné fázi neexistuje potvrzený italský databázový ani publikační lifecycle. Proto neprováděj databázové status/version kontroly, sekvenční kontroly ani zápisy, dokud nebude schválen jejich konkrétní italský mechanismus.

Samostatné validační běhy nebo instalace nových balíčků nejsou automaticky požadovány. Použij již dostupné bezpečné lokální kontroly. Nevyžaduj ani nevypisuj tokeny, hesla či přístupové klíče.

### H. Souřadnice — žádná plošná kontrola

Existující neprázdné souřadnice ani polohy znovu plošně neověřuj, nepřeměřuj a nepřesouvej.

Jediná běžná výjimka je `facts[].location = null`: pokus se doplnit polohu přesně podle hierarchie a pravidel v aktuálním `prompt_rework.md` a Content Standardu. Pokud ji nelze odpovědně určit, ponech null a zaznamenej důvod.

Druhou výjimkou je konkrétní zjištěný důkaz, že existující poloha je zjevně chybná — například pin ve vzdáleném Comune namísto frazione, o níž fakt pojednává, nebo poloha mimo skutečné místo objektu. Oprav pouze takový potvrzený případ. Nepoužívej pouhý odhad ani pohodlnější mapový bod.

Ostatní souřadnicové údaje ponech beze změny.

### I. Zjevné věcné vady a reklama

Neprováděj znovu kompletní faktografickou rešerši každého faktu ani nekontroluj každý historický letopočet.

Zasáhni pouze při konkrétním důvodu:
- zjevný rozpor nebo prokazatelná nepravda;
- vymyšlené tvrzení nebo zdroj;
- reklama, firemní propagace, affiliate nebo SEO výplň;
- nesprávný či neexistující zdroj;
- obsah zjevně přiřazený k jinému místu, Comune nebo CAP;
- legenda podaná jako prokázaná historie bez připsání tradici či kronice;
- významná chyba v identitě osoby, místa, události nebo díla.

Drobné rozdíly mezi nejednoznačnými historickými zdroji neřeš do nekonečna. Použij přiměřenou přesnost a zachovej již rozumně doložené znění.

## 4. Postup, opravy a nálezy

Pracuj v jednom souvislém běhu nad celým blokem. Mechanické kontroly prováděj dávkově a lokálně, kde je to možné.

U každé skutečné vady postupuj:

**najdi → ověř → bezpečně oprav → načti zpět → ověř opravu → stručně zaznamenej**

- Automaticky opravuj pouze potvrzené a bezpečné chyby v existujících italských záznamech.
- Zachovávej ID a veškerý nesouvisející obsah.
- Nejasný jednotlivý případ označ `REVIEW REQUIRED` a pokračuj; nezastavuj kvůli němu celý blok.
- Neprováděj změny schématu, Content Standardu, rework promptu, databázové architektury, aplikačního kódu, cizích dat ani rozsahu auditu.
- Neprováděj zápisy do neověřené databáze. Pokud není schválený italský write workflow, opravuj pouze pracovní kopii/JSON v rámci výslovně povoleného prostředí.
- Po timeoutu nikdy neopakuj zápis naslepo; nejprve ověř, zda už proběhl.
- Při omezení API respektuj `Retry-After`; neobcházej limity paralelními požadavky.

Používej závažnosti `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.

Výsledek bloku:
- `PASS` — všechny relevantní kontroly dokončeny, bez nevyřešené podstatné vady;
- `FIX REQUIRED` — byly nalezeny a opraveny vady, které vyžadují následné potvrzení nebo další krok;
- `REVIEW REQUIRED` — zůstává konkrétní nejasný případ vyžadující lidské nebo další odborné rozhodnutí;
- `BLOCKED` — audit nelze bezpečně dokončit kvůli chybějícím datům, přístupu nebo závaznému podkladu.

Nevytvářej nálezy z pouhých stylistických preferencí.

## 5. Tahák, pokračování a report

Používej jeden kanonický tahák pro přesný rozsah, pouze pokud byl pro italský audit skutečně vytvořen a schválen. Zapiš do něj pouze:
- inventář auditovaných CAP;
- dokončené kontrolní oblasti;
- skutečné nálezy a jejich závažnost;
- provedené opravy;
- otevřené položky;
- přesný další krok.

Nezakládej duplicitní tahák a neukládej checkpoint po každém CAP nebo faktu. Checkpoint ulož při skutečném přerušení, hrozícím vyčerpání kontextu nebo na konci běhu.

Při pokračování načti tahák a pokračuj pouze otevřenými položkami. Hotovou práci neopakuj.

Na konci předlož stručný report:
- přesný rozsah a počet CAP;
- výsledek auditu;
- zásadní chybějící témata;
- počty a typy skutečných chyb;
- provedené opravy;
- nevyřešené položky;
- výsledek dostupných technických a JSON kontrol;
- případné překážky bránící bezpečnému dokončení.

## 6. Uzavření auditu, publikace a záloha

Po dokončení auditu nejprve předej uživateli report. **Publikaci, změnu statusu, změnu verze, zálohu ani read-only zamykání nespouštěj automaticky.**

V italském projektu zatím není v této dokumentaci definován a ověřen produkční lifecycle, databázové umístění, publikační mechanismus ani zálohovací mechanismus. Proto:

- nevymýšlej tabulku, sloupce, statusy, verze, Edge Functions, API endpointy ani Dropbox cestu;
- nepřenášej automaticky český Supabase publikační a zálohovací postup na Itálii;
- nepovažuj dokončený audit za publikaci;
- nepovažuj vytvoření lokálního JSON za databázový zápis nebo zálohu;
- po výslovné žádosti o publikaci nejprve ověř, zda už existuje schválený a otestovaný italský mechanismus. Pokud neexistuje, nic nepublikuj a vysvětli konkrétní chybějící předpoklad;
- read-only zamykání je samostatná operace a vyžaduje výslovný příkaz uživatele i existující ověřený mechanismus.

Jakmile bude italský produkční lifecycle samostatně navržen, schválen a otestován, lze tuto sekci změnit řízenou revizí promptu. Do té doby je bezpečným výchozím stavem žádná publikace, žádný databázový zápis a žádná domnělá záloha.

---

## Základní pravidlo

**Audit hledá zásadní chybějící turistická témata a skutečné geografické, překladové, kategoriální, duplicitní a technické vady. Neprovádí druhý rework, neřeší marginální historické spory, nepřepisuje správné texty a znovu nekontroluje existující souřadnice bez konkrétního důvodu. Rework zůstává beze změny a v plné kvalitě.**

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
