# TRAVEL ITÁLIE — STRUČNÝ AUDITNÍ PROMPT CAP

**Verze 1.1 — cílený audit kvality a publikačního lifecycle**

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

**Jediným produkčním zdrojem pravdy pro italské CAP je Neon**, projekt `Europe Explorer`, databáze `neondb`, tabulka `public.italy_cap_records`. Tabulka obsahuje:
- `postcode` — CAP jako textový identifikátor;
- `workflow_status` — provozní stav řádku;
- `record` — celý italský záznam jako JSONB;
- `created_at`, `updated_at`.

JSONB `record` obsahuje výhradně pole povolená aktuálním `data/italy/schema.json`, včetně kořenových polí `status` a `data_version`. Pole `record.status` musí přesně odpovídat databázovému `workflow_status`; `record.data_version` vyjadřuje verzi obsahu. Před každým blokem ověř aktuální schéma tabulky a přesný inventář přímo v Neonu. Pro čtení používej read-only přístup; schválené opravy ukládej pouze oprávněným Neon připojením.

Audituj celý výslovně zadaný blok, ne náhodný vzorek. Ověř přesný seznam a počet záznamů proti dostupným řádkům Neonu a výslovně zadanému rozsahu. Pracuj pouze s existujícími italskými řádky v rozsahu zadání.

**Závazný lifecycle podle skutečného schématu a tabulky:**
- `placeholder` znamená, že CAP čeká na rework; `record.status` i `workflow_status` mají hodnotu `placeholder`.
- `validated` znamená, že rework je dokončen a záznam čeká na samostatný finální audit; `record.status` i `workflow_status` mají hodnotu `validated` a `data_version` je `1`.
- `published` znamená, že finální audit prošel a publikace byla výslovně autorizována uživatelem; `record.status` i `workflow_status` mají hodnotu `published` a `data_version` je `5`.
- `record.status` a databázový `workflow_status` musí být vždy shodné. Po úspěšném auditu se verze `1` mění na `5` pouze při výslovném příkazu k publikaci.
- Samotný audit ani výsledek `PASS` nesmí automaticky publikovat záznam. Publikace vyžaduje samostatný výslovný příkaz uživatele.

Nevymýšlej kanonickou `sequence.json`, pokud pro Itálii nebyla schválena. Nevytvářej CAP a nerozšiřuj rozsah; pracovní seznam nepovažuj automaticky za kanonickou sekvenci. Nedotýkej se českých, německých ani jiných zemských dat. Pokud není možné získat úplný inventář zadaného rozsahu, označ výsledek `BLOCKED` a uveď, co chybí. Neodhaduj počet ani rozsah.

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

### B. Orientační kontrola geografického a správního kontextu

Cílem je zachytit **zjevné geografické a administrativní chyby**, nikoli ověřovat poštovní přiřazení. CAP je identifikátor záznamu převzatý z projektového inventáře; audit neověřuje nové poštovní aktualizace, datum účinnosti, provoz pošt ani kompletní poštovní hranice.

Zkontroluj přiměřeně dostupným oficiálním nebo důvěryhodným zdrojem:
- zda je CAP správně zapsán jako pětimístný řetězec a odpovídá položce v auditovaném projektovém rozsahu;
- zda `city` uvádí geograficky smysluplné Comune/Comuni pro obsahovou oblast a neobsahuje zjevně cizí území;
- zda `county` a `state` odpovídají správným aktuálním administrativním jednotkám;
- zda `district`, pokud je vyplněn, není zjevně mimo uvedenou oblast.

Používej ISTAT pro názvy a správní klasifikaci Comune, Regione a mezilehlých jednotek; pro skutečnou polohu míst používej oficiální obecní, adresní a geografické zdroje. Nepožaduj aktualizaci Poste Italiane, CAP Professional, poštovní katalog, seznam poboček ani dokazování úplného poštovního území. Žádná poštovní změna nesmí sama o sobě zablokovat obsahový audit.

Oprav pouze zjevnou, doloženou a významnou geografickou nebo správní chybu. `REVIEW REQUIRED` použij jen při konkrétním důkazu, že obsahové geografické přiřazení je zásadně chybné nebo jej nelze odpovědně určit.

### B1. Zkrácené uživatelské zobrazení seznamu Comuni

Italská aplikace může v kompaktním seznamu nebo souhrnné kartě zobrazovat pouze jednu nebo maximálně dvě reprezentativní obce a za nimi lokalizovaný text odpovídající „a dalších X obcí“. Jde výhradně o prezentační zkrácení, nikoli o změnu geografických dat CAP.

- V produkčním JSON musí pole `city` i nadále obsahovat úplný seznam všech Comuni přiřazených k CAP, podle `COUNTRY_PROFILE.md`, `CONTENT_STANDARD.md` a `prompt_rework.md`.
- Při auditu JSON nikdy nepovažuj zkrácený text v uživatelském rozhraní za důvod ke zkrácení pole `city`. Naopak ověřuj úplnost uloženého seznamu v rozsahu pravidel auditu.
- Reprezentativní obce zobrazené na kartě nejsou údajem o obsluhující poště, nejsou novým administrativním zařazením a neurčují geografický rozsah CAP.
- Zbývající počet musí odpovídat přesnému rozdílu mezi celkovým počtem Comuni a počtem zobrazených názvů. Detail CAP musí zachovat možnost zobrazit celý seznam.
- Toto pravidlo nemění obsah JSON, schéma, geografické přiřazení faktů ani rozsah auditních kontrol. Audit aplikace nebo jejího zobrazení prováděj pouze tehdy, pokud je výslovně součástí zadání; běžný audit CAP JSON sám o sobě neopravňuje měnit aplikační kód.

### C. Plný geografický rozsah CAP a přiřazení faktů

`city` je úplný seznam všech oficiálních Comuni přiřazených k CAP podle `COUNTRY_PROFILE.md` a `CONTENT_STANDARD.md`; není to organizační kotva podle obsluhující pošty ani hranice rešerše.

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
- shodu faktů a jejich ID napříč všemi sedmi překlady: přesně stejná množina ID, bez duplicit a přesně stejné pořadí v `facts` i v každém `translations[lang].facts`;
- párování překladů výhradně podle stabilního `facts[].id`, nikdy podle pořadí, názvu nebo textové podobnosti;
- existenci všech zdrojů odkazovaných ve `facts[].sources` v top-level `sources`;
- validitu souřadnic v povoleném rozsahu;
- správné oddělení `representative_point`, `access_point` a `facts[].location`;
- správné typy a přesné názvy polí podle schématu.

Schema vyžaduje `access_point`, `representative_point` a alespoň jeden fakt. Nezmírňuj tyto požadavky ad hoc. Pokud povinný údaj nelze odpovědně doložit, označ problém a vyžádej rozhodnutí; nevyráběj falešné hodnoty.

Ověř stavový lifecycle přímo v Neonu:
- `workflow_status = 'placeholder'`: CAP čeká na rework; `record.status` musí být `placeholder`.
- `workflow_status = 'validated'`: rework je dokončen; `record.status` musí být `validated` a `record.data_version` musí být `1`.
- `workflow_status = 'published'`: finální audit prošel a publikaci výslovně autorizoval uživatel; `record.status` musí být `published` a `record.data_version` musí být `5`.
- Vždy ověř shodu `record.status = workflow_status` a platnou verzi podle lifecycle.
- Italské workflow nepoužívá stavy `inventory`, `researching` ani `review`.

Při inventuře a auditu nikdy automaticky nepovyšuj ani nesnižuj lifecycle. Pokud je stav řádku neočekávaný nebo nejasný, zaznamenej konkrétní nález. Běžné auditní opravy zachovávají `status`, `data_version` i `workflow_status`.

Samostatné validační běhy nebo instalace nových balíčků nejsou automaticky požadovány. Použij již dostupné bezpečné lokální kontroly a případně validaci proti aktuálnímu schématu. Nevyžaduj ani nevypisuj tokeny, hesla či přístupové klíče.

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

- Automaticky opravuj potvrzené a bezpečné chyby v existujících italských záznamech v rozsahu výslovně zadaného auditu.
- **Výslovné oprávnění k bezpečným překladovým opravám:** pokud uživatel zadal audit/rework konkrétního rozsahu a existuje oprávněné Neon připojení, smíš bez dalšího schvalování jednotlivých oprav přímo opravit prokazatelné chyby v `translations[lang].facts[].title/text`. Zahrnuje to chybějící, prázdné, poškozené, do jiných jazyků zkopírované, významově chybné nebo jazykově vadné překlady a drobné překlepy či gramatiku. Nevytvářej další potvrzovací mezikrok a neptej se uživatele na souhlas s každým faktorem nebo jazykem.
- Při opravě překladu páruj výhradně podle stabilního `fact.id`; vycházej z italského masteru, zachovej všechna významová omezení a místní kontext. `translations.it` musí přesně zrcadlit italský master. Ostatní jazyky musí být samostatné, přirozené překlady. Správný existující překlad zachovej; zejména nepřepisuj správnou nizozemskou verzi jen proto, že ostatní jazyky byly poškozeny.
- Opravuj pouze překladová pole `title` a `text`; neměň ID, pořadí, master text, zdroje, lokace, kategorie, priority ani jiná metadata, pokud pro ně není samostatný potvrzený nález a oprávnění v tomto promptu.
- Po každé překladové opravě načti zpět dotčený CAP a ověř všech sedm jazyků, ID, pořadí, úplnost a zachování nesouvisejících polí.
- Pokud je chybný samotný italský master, význam zdroje je nejasný nebo by oprava vyžadovala faktografický odhad, označ `REVIEW REQUIRED` a nepřepisuj jej automaticky.
- Zachovávej ID a veškerý nesouvisející obsah.
- Nejasný jednotlivý případ označ `REVIEW REQUIRED` a pokračuj; nezastavuj kvůli němu celý blok.
- Neprováděj změny schématu, Content Standardu, rework promptu, databázové architektury, aplikačního kódu, cizích dat ani rozsahu auditu.
- Neon `public.italy_cap_records` je jediný produkční cíl pro italské záznamy. Potvrzené opravy ukládej pouze do existujících řádků auditovaného rozsahu, zachovej všechna nesouvisející JSONB pole a ID; zápisy prováděj sekvenčně nebo v bezpečné transakci.
- Po každé opravě načti dotčený řádek z Neonu zpět a ověř změněná pole, počet faktů, překlady i zachování ostatního obsahu.
- Během auditních oprav ponech `workflow_status = 'validated'` beze změny. Nikdy nezapisuj `published` bez samostatného výslovného příkazu uživatele po PASS. JSONB `record` neobsahuje stav ani verzi.
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

Po dokončení auditu nejprve předej uživateli report. **Publikaci, změnu `workflow_status`, zálohu ani read-only zamykání nespouštěj automaticky. Vyčkej na výslovný příkaz uživatele.** Bezpečné překladové opravy popsané v oddílu 4 jsou naopak součástí běžného auditního oprávnění a nevyžadují samostatné schválení.

### 6.1 Stav po reworku a po auditu

Po reworku musí být záznam ve stavu:
- `workflow_status = 'validated'`;
- `record.status = 'validated'`;
- `record.data_version = 1`;
- JSONB `record` validní podle aktuálního `schema.json`.

Tento stav znamená, že rework je dokončen, ale finální audit a publikace ještě neproběhly. Audit PASS tento stav sám o sobě nemění. Pokud audit skončí `FIX REQUIRED`, `REVIEW REQUIRED` nebo `BLOCKED`, záznam nesmí být publikován.

### 6.2 Publikace pouze na výslovný příkaz

Teprve když celý audit skončí `PASS` a uživatel následně výslovně požádá o publikaci, proveď následující kroky:

1. **Kontrola před publikací:** znovu načti přesný auditovaný rozsah z `public.italy_cap_records`. Ověř seznam a počet CAP a potvrď, že každý určený záznam má `workflow_status='validated'`, `record.status='validated'` a `record.data_version=1`. Záznamy mimo přesný rozsah nesmí být změněny.
2. **Publikace do Neonu:** aktualizuj pouze přesně auditované existující řádky. Nastav `workflow_status='published'`, `record.status='published'` a `record.data_version=5`. Zachovej všechna fakta, překlady, zdroje, souřadnice a ID. Nepřidávej nové CAP a neměň jiné země. Proveď zápis bezpečně a sekvenčně nebo v jedné ověřitelné transakci.
3. **Read-back kontrola:** znovu načti publikovaný rozsah přímo z Neonu a ověř přesný seznam i počet CAP. Každý očekávaný řádek musí mít `workflow_status='published'`, `record.status='published'` a `record.data_version=5`; JSONB musí zůstat validní podle aktuálního schématu. Ověř také, že mimo auditovaný rozsah nebyl změněn žádný řádek. Pokud kontrola neprojde, nepokračuj k záloze; oznam konkrétní nesoulad a bezpečně jej vyřeš.
4. **Záloha do Dropboxu:** po úspěšném read-back ověření vytvoř zálohu přes schválený italský postup do projektového Dropboxu. Záloha musí odpovídat přesně publikovanému auditovanému rozsahu a umožnit jeho obnovu. Před spuštěním ověř aktuální schválenou cílovou složku a mechanismus; nepřebírej Supabase Edge Function ani SQL/endpointy českého projektu. Ulož úplný export JSON, obnovovací podklady pro Neon a manifest s časem, zemí, rozsahem, počtem CAP, seznamem CAP a kontrolním hashem. Pokud pro italský Neon export není dostupný ověřený postup nebo cílová složka, zastav se a vyžádej si rozhodnutí; nevymýšlej endpoint, Dropbox cestu ani falešnou zálohu.
5. **Ověření Dropboxu:** po vytvoření zálohy znovu ověř skutečný obsah v Dropboxu. Potvrď, že existují všechny očekávané soubory, manifest odpovídá přesnému publikovanému rozsahu a počtu CAP a kontrolní hash souhlasí s exportem. Samotné přijetí požadavku, vytvoření složky nebo úspěšný upload jednoho souboru není důkaz dokončené zálohy. Při timeoutu nejprve ověř skutečný stav; nikdy neopakuj operaci naslepo.
6. **Report:** publikaci a zálohu vykazuj odděleně. Uveď počet a přesný seznam CAP, stav `workflow_status='published'`, výsledek read-back, přesnou Dropbox cestu a výsledek ověření souborů a hashe. Pokud publikace proběhla, ale záloha selhala nebo zůstala neověřená, výslovně uveď, že publikace je hotová, ale záloha není dokončena.

### 6.3 Read-only zamykání

Read-only zamykání je samostatná operace a prováděj ho pouze na výslovný příkaz uživatele. Nikdy ho nespouštěj automaticky po auditu, publikaci ani záloze. Před změnou ověř přesný rozsah a existující schválený mechanismus; zamkni pouze požadované záznamy a následně ověř, že jsou skutečně pouze pro čtení. Neimprovizuj změny oprávnění, rolí nebo databázové architektury. Pokud ověřený italský mechanismus není dostupný, nic neměň a oznam konkrétní překážku.

**Důležité:** Itálie používá Neon, nikoli český Supabase. Nepoužívej české Edge Functions, Supabase tabulky, endpointy ani databázové SQL. Dropbox záloha je povinný navazující krok po úspěšné publikaci na výslovný příkaz, ale její provedení musí vycházet ze skutečně ověřeného italského mechanismu.

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
