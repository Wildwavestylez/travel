# TRAVEL ČESKO — AUDITNÍ PROMPT PRO BLOKY PSČ

## Verze

**AUDITNÍ PROMPT V1.0 — BLOKOVÝ AUDIT ČESKÝCH PSČ**

Tento prompt se používá společně s:
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/sequence.json`
- společnými referenčními soubory v `data/czechia/reference/`

Schéma určuje povolenou strukturu a hodnoty. Český Content Standard je závazný pro fakta, geografii, rešerši, redakci, zdroje a překlady. Rework prompt určuje způsob tvorby záznamů. Tento auditní prompt nezávisle ověřuje hotovou skupinu záznamů.

## 1. Účel a auditní jednotka

Proveď systematický, důkazně podložený audit dokončeného bloku českých PSČ. Auditní jednotkou může být:
- souvislý číselný blok PSČ;
- okres, obec, městská část nebo jiná jasně vymezená správní či geografická oblast;
- jiná výslovně určená skupina existujících českých záznamů.

Audituj celý vybraný rozsah, nikoli pouze vzorek nebo záznamy, které na první pohled vypadají problematicky. Nejdříve stanov přesný inventář a hranice auditu.

Pracuj výhradně s českými záznamy v `public.postal_codes`, kde `country_code = 'CZ'`. Nevytvářej chybějící záznamy, duplicitní řádky ani neměň schéma, německá data nebo nesouvisející záznamy.

## 2. Povinné načtení zdrojů a příprava auditu

Před auditem:
1. Načti celé aktuální `data/czechia/schema.json`.
2. Načti celý aktuální `data/czechia/CONTENT_STANDARD.md`, včetně všech dodatků.
3. Načti celý aktuální `data/czechia/prompt_rework.md`, včetně všech povinných dodatků.
4. Načti `data/czechia/sequence.json` a zjisti přesný rozsah kandidátních PSČ.
5. Načti `data/czechia/reference/README.md`, `ruian_postcodes.json` a `ruian_import_manifest.json`; použij také CSV, pokud je pro kontrolu potřeba.
6. Urči přesný auditovaný blok / okres / oblast a jeho hranice.
7. Získej úplný seznam existujících záznamů v rozsahu, včetně ID řádků, PSČ, příznaků dokončení/publikace a relevantních metadat.
8. Potvrď očekávaný a skutečně načtený počet záznamů. Před obsahovým auditem vyřeš nebo zdokumentuj chybějící, duplicitní, neočekávané a neidentifikovatelné záznamy.

Nevycházej z paměti, dřívějších auditních reportů ani starších verzí standardů, pokud jsou aktuální soubory repozitáře dostupné.

## 3. Základní principy auditu

- **Nezávislé ověření:** nepředpokládej správnost záznamu jen proto, že byl označen jako dokončený, přepracovaný, publikovaný nebo dříve auditovaný.
- **Nejprve pouze čtení:** první fáze auditu slouží výhradně ke kontrole a reportování. Neměň řádky Supabase, JSON, GitHub soubory, stavy ani aplikační data.
- **Důkazy před závěrem:** každý podstatný nález musí uvádět PSČ, ID záznamu/faktu, problém, důkaz a požadovanou opravu.
- **Žádná vymyšlená jistota:** rozlišuj potvrzenou chybu, nejasnost a nedostupný důkaz.
- **Žádné tiché změny rozsahu:** nepřidávej ani neodebírej PSČ z auditované jednotky bez zdokumentování a vyřešení rozsahu.
- **Žádné plnění kvót:** prázdná tematická kategorie může být správným výsledkem, pokud byla řádně prověřena a neexistuje relevantní fakt.
- **Žádné polygonové kontroly:** nestahuj ani nekontroluj polygony PSČ a neprováděj kontroly hranic pomocí polygonů. Používej důvěryhodné poštovní, správní, institucionální, adresní a lokalizační zdroje podle českého Content Standardu.
- **Audit odděluj od oprav:** nejprve identifikuj a popiš vady. Opravy jsou samostatná autorizovaná fáze. Po opravách znovu zkontroluj dotčené položky a všechny závislé kontroly.
- **Chraň obsah při geografickém úkolu:** při úkolu omezeném na geografické obohacení neměň chráněné redakční texty; uplatni příslušnou výjimku v rework promptu.
- **Chraň sequence:** audit sám o sobě neopravňuje k přidání, odebrání, přeuspořádání ani přegenerování `sequence.json`. Rozpor je nález k samostatnému rozhodnutí, nikoli pokyn k automatické změně.

## 3A. Okamžité uzavírání hotových částí a zákaz přepisování (POVINNÉ)

Toto pravidlo má přednost před pohodlností práce v konverzaci a platí pro každý auditní rozsah, každé konverzační okno i každé předání práce.

**Definice:** „Vyřešená část“ znamená „hotová část“. Část auditu je hotová, jakmile byly dokončeny všechny kontroly, které do ní patří, výsledek je podložen důkazy, jsou zaznamenány případné nálezy a je jasně uvedeno, co bylo a nebylo ověřeno. Nestačí pouhý průběžný komentář nebo předběžný odhad.

### Povinný okamžitý zápis
1. Jakmile je libovolná část auditu dokončena, **ihned po jejím dokončení** zapiš její úplný výsledek do příslušného kanonického auditního taháku v repozitáři. Nečekej na dokončení celé oblasti A–I, celého bloku, konverzace ani pracovní relace.
2. Zápis musí obsahovat alespoň: identifikaci rozsahu a kontrolované části, datum, provedené kontroly, výsledek, důkazy/zdroje, přesné nálezy a jejich stav, neověřené body (pokud existují) a jednoznačný stav **HOTOVO / ČÁSTEČNĚ DOLOŽENO / NEHOTOVO**.
3. Část označ **HOTOVO** pouze tehdy, když jsou splněna všechna její příslušná kritéria. Jakmile je označena HOTOVO a zápis je uložen, je uzavřena a zamčena.
4. Po zápisu ověř, že se změna skutečně uložila a že lze hotovou část znovu načíst. Teprve potom pokračuj k další části.
5. Aktualizuj také checkpoint/registr tak, aby bylo zřejmé, které části jsou HOTOVO a kde přesně pokračovat. Před předáním nebo ukončením práce ulož checkpoint.

### Zákaz návratu a přepisování
- **K HOTOVÝM ČÁSTEM SE NEVRACEJ.** Při pokračování auditu je pouze převezmi jako uzavřený výsledek a pokračuj první dosud nedokončenou částí.
- **PŘÍSNÝ ZÁKAZ PŘEPISOVÁNÍ HOTOVÝCH ČÁSTÍ AUDITU.** Nikdy nemaž, nepřepisuj, nezkracuj, nepřeformulovávej, nepřesouvej ani zpětně neupravuj jejich text, důkazy, závěry, časové údaje nebo historii. Zákaz platí i při konsolidaci reportu, změně konverzačního okna, změně modelu nebo aktualizaci promptu.
- Nepoužívej hotovou část jako pracovní koncept. Neprováděj její opakovanou kontrolu jen proto, že začala nová relace nebo že je potřeba vytvořit souhrnný report.
- Pokud pozdější práce odhalí nový problém, který se hotové části týká, **neotvírej ani neupravuj původní hotovou část**. Založ samostatný nový dodatek/nález s vlastním datem, důkazem a odkazem na původní uzavřenou část. Původní zápis zachovej beze změny. Nový dodatek nesmí potichu změnit ani nahradit původní výsledek.
- Pokud je nutné opravit chybu v samotném auditním zápisu, nepřepisuj uzavřenou část. Založ samostatný opravný dodatek, který přesně identifikuje chybný údaj, vysvětlí důvod opravy a uvede správnou informaci; původní záznam musí zůstat čitelný a zachovaný.
- Před každou aktualizací auditního taháku načti jeho aktuální verzi a zapisuj pouze do dosud otevřené části nebo jako nový append-only dodatek. Nikdy nenahrazuj celý soubor starší nebo částečnou kopií.
- Technická nutnost nebo pohodlí nástroje nejsou výjimkou ze zákazu. Pokud nelze bezpečně přidat nový záznam bez změny hotové části, práci zastav a oznam překážku.

**Provozní pravidlo:** jedna dokončená část = jeden okamžitý zápis = jeden uzavřený a neměnný výsledek. Nejdříve zapiš a ověř uložení, potom pokračuj. Hotové části se znovu neprovádějí ani nepřepisují.

## 4. Auditní checklist — devět povinných kontrolních oblastí

### A. Inventář bloku a úplnost

U každého záznamu ověř:
- PSČ existuje v auditovaném datasetu právě jednou;
- ID databázového řádku a PSČ identifikují správný záznam;
- záznam patří do Česka a do požadovaného bloku;
- příznak dokončení/publikace odpovídá skutečnému obsahu a workflow projektu;
- žádné očekávané existující PSČ nebylo tiše vynecháno;
- do bloku nevstoupil nesouvisející záznam;
- záznam není náhodnou duplicitou ani placeholderem;
- PSČ je posuzováno vůči projektovému rozsahu v aktuálním `sequence.json`.

Vytvoř reconciliovaný inventář: očekávané / načtené / chybějící / duplicitní / mimo rozsah / blokované. Z částečného bloku nevyvozuj závěry o pokrytí celé České republiky.

### B. Správnost PSČ, lokality a administrativních údajů

U každého PSČ:
- ověř oficiální evidenci PSČ podle ČSÚ (číselník 0028), pokud je to pro daný případ relevantní;
- ověř jeho geografickou přítomnost a vazbu na adresní místa ve společném RÚIAN inventáři;
- zkontroluj soulad s aktuálním projektovým rozsahem `sequence.json`;
- ověř obec fyzického sídla příslušné obsluhující pošty podle pravidel českého Content Standardu;
- ověř okres a kraj podle oficiální příslušnosti obce sídla pošty;
- ověř `district` a `district_type` pouze jako doložené údaje uvnitř obce sídla pošty;
- ověř, že reprezentativní místo a metadata PSČ odpovídají doloženému územnímu kontextu;
- identifikuj zastaralé, rozporné, nejednoznačné nebo nepodložené přiřazení.

Používej RÚIAN/ČÚZK pro adresní a územní geografii, ČSÚ pro oficiální evidenci PSČ a příslušné administrativní/statistické údaje, Českou poštu pro informace o poštovní pobočce a poštovních službách v rozsahu její působnosti. Významný rozpor ověř více nezávislými zdroji podle kompetence každého zdroje.

**Rutinní načítání číselníku typu PSČ 0029 není povinné.** Pokud konkrétní případ vyvolá důvodnou pochybnost, zda jde o územní nebo organizační PSČ, lze typ ověřit individuálně v oficiálním zdroji. Nevyžaduj tuto kontrolu u každého záznamu a nikdy z ní automaticky neodvozuj změnu sequence.

Nikdy potichu nenahrazuj, nemaž ani nevymýšlej PSČ. Neplatné, speciální, organizační, zastaralé nebo nejisté kódy oznam k rozhodnutí.

### C. Geografická příslušnost faktů, duplicity mezi PSČ a konzistence bloku

Prověř fakta napříč celým blokem, nejen jednotlivé záznamy izolovaně.

U každého faktu:
- stanov konkrétní vazbu k přiřazenému PSČ;
- ověř hlavní fyzickou polohu, pokud je to relevantní;
- zkontroluj, zda atrakce, budova, památník, přírodní prvek nebo jiné místo nepatří do sousedního PSČ;
- vyhledej duplicitní a téměř duplicitní fakta napříč záznamy;
- identifikuj jeden příběh uměle rozdělený do více faktů;
- odhal fakta založená pouze na vazbě k městu, městské části nebo regionu bez konkrétního vztahu k PSČ;
- rozliš skutečnou polohu faktu od regionálního kontextu, trasy, události nebo tradice zasahující větší území;
- porovnej opakující se témata a rozhodni, zda jde o legitimně odlišné příběhy, nebo o nechtěnou duplicitu.

Fakt má zpravidla patřit pouze do jednoho PSČ. Zachování stejného tématu ve více záznamech vyžaduje jasně odlišný a samostatně významný příběh s obhajitelnou místní vazbou v každém záznamu. Blízkost ani společná obec nejsou důkazem příslušnosti.

#### Povinná zvláštní kontrola: PSČ instituce versus geografické PSČ objektu

Tato kontrola je zásadní a musí být provedena u každého podezřelého nebo rozporného případu.

- PSČ uvedené na webu synagogy, památky, muzea, firmy, úřadu nebo jiné instituce samo o sobě nedokazuje geografické PSČ fyzického objektu.
- Rozlišuj skutečnou fyzickou/návštěvnickou adresu od korespondenční, fakturační, sídelní adresy organizace, podatelny, P.O. BOX, poštovní přihrádky nebo adresy poštovní pobočky.
- Pokud objekt má adresní místo, ověř konkrétní adresu a PSČ v RÚIAN. To je výchozí geografický důkaz.
- Existence pošty, přepážek pro příjem a výdej zásilek, dalších poštovních služeb nebo P.O. BOX pro velké zákazníky sama o sobě neprokazuje, že okolní objekty patří do PSČ této pošty.
- Pokud web instituce uvádí PSČ B, ale RÚIAN pro její skutečné adresní místo uvádí PSČ A, nepřesouvej objekt do B jen podle webového údaje. Nejdříve zjisti účel adresy a rozpor dolož.
- Nález PSČ mimo `sequence.json` je pouze podnět k samostatnému prověření. Není důvodem k automatickému přidání PSČ, přesunu faktu, rozdělení záznamu nebo změně sequence.
- Jediný rozpor není důkazem chybnosti celého městského bloku. Nezobecňuj závěr z jedné instituce nebo pošty na jiné adresy.
- Pokud skutečnou geografickou vazbu nelze doložit, označ případ jako REVIEW REQUIRED; nehádej a neměň přiřazení.

### D. Faktická kvalita, význam, text a zdroje

U každého faktu ověř:
- faktickou správnost, názvy, data, chronologii a popis;
- zda zdroje podporují konkrétní tvrzení, nikoli pouze obecné zmínky o městě nebo regionu;
- zda URL zdrojů fungují a vedou k relevantnímu obsahu;
- zda významná tvrzení používají důvěryhodné zdroje, přednostně primární a odpovědné instituce;
- zda jsou pověsti a tradice jasně odlišeny od doložené historie;
- zda chybí nepodložené superlativy, vágní tvrzení, reklamní jazyk a vymyšlené detaily;
- zda má fakt skutečný místní význam a nejde o obecnou výplň;
- zda priorita a pořadí odpovídají skutečnému významu místa;
- zda zásadní příběh nebyl vytlačen slabším materiálem;
- zda jsou fakta stručná, informativní a srozumitelná.

Mezeru ve zdrojích eviduj odděleně od prokázané faktické chyby. Nikdy nevyráběj zdroj ani nepovažuj neověřené tvrzení za ověřené.

### E. Turistické, památkové, přírodní a místní objevitelské pokrytí

Ověř, zda byla skutečně provedena povinná dvoufázová rešerše podle oddílu 28 českého Content Standardu.

Zkontroluj pracovní poznámky nebo jiné dostupné důkazy pro obě fáze:
1. široké objevování v oficiálních turistických, památkových, muzejních, obecních, regionálních, přírodovědných, odborných a místně-historických zdrojích;
2. cílené hledání tematických mezer po jednotlivých kategoriích podle oddílu 28.2.

Kontrola musí pokrýt všechny relevantní skupiny, zejména:
- hrady, zámky, tvrze, pevnosti a historická sídla;
- sakrální dědictví a náboženskou historii;
- pomníky, kašny, památníky a veřejné umění;
- historická centra a architekturu;
- muzea, galerie a specializované sbírky;
- archeologii a pravěké dědictví;
- chráněnou přírodu, geologii a krajinu;
- hory, vyhlídky, stezky a návštěvnické trasy;
- vodní prvky a vodohospodářské stavby;
- parky, zahrady, botanické sbírky, zoo a akvária;
- průmyslové, technické a dopravní dědictví;
- paměťová místa a historické události;
- turistické atrakce a návštěvnické zážitky;
- UNESCO a další mimořádné formy dědictví;
- místní příběhy, pověsti a neobvyklé doložené kuriozity;
- významné osobnosti, film, literaturu, hudbu a kulturní místa;
- tradice, řemesla a gastronomické dědictví.

U každé relevantní skupiny musí pracovní poznámky uvádět jeden stav:
- **nalezeno a ověřeno**;
- **prověřeno — bez relevantního výsledku**;
- **nevyřešeno**.

Obecné vyhledávání samo o sobě nedokazuje, že byly prověřeny všechny kategorie. „Bez relevantního výsledku“ je platný výsledek. Nevyřešená podstatná kategorie nebo kandidát musí být oznámen a brání úplnému rešeršnímu schválení.

Ověř vyloučení podle oddílu 28.3: běžné hřbitovy, jednotlivé hroby a současné firmy nejsou automaticky turistickými fakty; použij pouze přesně vymezené a doložené výjimky.

Nevyžaduj pevný počet atrakcí ani faktů. Audit kontroluje pokrytí rešerše a důkazy, nikoli kvóty.

### F. Geografická metadata a integrita mapy

Kontroluj tři odlišné geografické role:
1. `representative_point` — jeden bod reprezentující orientační místo daného PSČ;
2. `access_point` — jeden praktický, ověřený příjezdový/přístupový bod;
3. `facts[].location` — samostatně ověřená hlavní poloha každého faktu.

Ověř, že tyto role nejsou zaměňovány.

U každého faktu:
- vlastnost `location` existuje explicitně;
- obsahuje buď úplný obhajitelný objekt polohy, nebo explicitní `null`;
- každá nenulová poloha má název, souřadnice WGS84, povolený typ a přesnost a přímý zdroj podporující polohu;
- bod označuje hlavní místo faktu a nepředstírá vyšší přesnost, než zdroje dovolují;
- historická/zaniklá místa a přírodní oblasti používají obhajitelnou polohu a poctivou přesnost;
- náhradní reprezentativní body pro plošná území odpovídají přesným pravidlům Content Standardu;
- `map_category` odpovídá hlavnímu tématu faktu a používá pouze povolené hodnoty schématu;
- zdroje polohy podporují souřadnice, zatímco zdroje faktu podporují jeho obsah.


**Povinná kontrola mapové taxonomie (17 kategorií)**

U každého faktu ověř:
- `map_category` existuje a obsahuje právě jednu hodnotu z úplného enumu v `data/czechia/schema.json`;
- hodnota odpovídá hlavnímu tématu faktu podle oddílu 11A Content Standardu;
- obsahová `category` nebyla zaměněna za `map_category`;
- klasifikace není odvozena pouze z typu fyzické polohy;
- při překryvu byly dodrženy závazné priority (zejména `personality`, hrady, muzea, náboženská místa, archeologie, technické dědictví a historická sídla);
- stejná mapová kategorie je zachována jako jazykově neutrální metadata a není duplikována ani překládána v šesti překladech.

Použij přesně těchto 17 hodnot: `castle`, `religious_site`, `historical_monument`, `architecture`, `historic_city`, `museum`, `archaeological_site`, `nature`, `viewpoint_landscape`, `park_garden`, `technical_heritage`, `cultural_site`, `visitor_attraction`, `local_culture`, `science_site`, `personality`, `sports_venue`.

Ikony ani jejich grafické soubory nejsou součástí tohoto datového auditu. Audit ověřuje stabilní identifikátor a správnost klasifikace, nikoli budoucí vizuální implementaci.

Nehádej souřadnice, nevymýšlej adresy, nevytvářej libovolné středy a netvrď, že byla provedena kontrola, která neproběhla. Nepřidávej nové mapové kategorie ani typy polohy.

### G. Shoda sedmi jazyků a kvalita překladů

Ověř všech sedm povinných jazykových verzí: cs, de, en, es, fr, it a nl.

Kontroluj:
- každý jazyk existuje a má požadovanou strukturu;
- ve všech sedmi jazycích jsou stejná ID faktů;
- ID faktů jsou ve zcela stejném pořadí;
- žádný fakt nechybí, není sloučen, duplikován ani tiše přidán pouze v jednom jazyce;
- názvy a texty zachovávají stejný faktický obsah, data, jména, výhrady a význam;
- žádný jazyk nepřidává nepodložené informace ani nevynechává důležitý kontext;
- každá verze zní přirozeně ve vlastním jazyce;
- vlastní jména a oficiální termíny jsou zpracovány konzistentně a přesně;
- překlady nejsou pouze doslovné nebo strojově působící tam, kde to deformuje význam.

Shodný seznam ID je nutná, nikoli dostačující podmínka: porovnej skutečný význam textů.

### H. Mezinárodní srozumitelnost a kulturní kontext

Toto je samostatná povinná kontrolní oblast. Ověř pravidlo v oddílu 29 českého Content Standardu a odpovídající dodatek v rework promptu.

U každého faktu a samostatně ve všech sedmi jazycích se ptej:
1. Pochopí téma čtenář, který nikdy nenavštívil Česko a nezná českou kulturu?
2. Jsou neznámé místní pojmy, instituce, tradice, pamětní formy a správní koncepty vysvětleny při prvním smysluplném použití?
3. Mají historické události a odkazy dostatečný stručný kontext, aby bylo jasné, co se stalo a proč je to důležité?
4. Jsou vlastní názvy zachovány přesně a podle potřeby je vysvětlen jejich druh nebo význam?
5. Jsou vysvětleny zkratky, nářeční výrazy a kulturně specifické pojmy nezbytné pro pochopení?
6. Je vysvětlení přirozené, stručné, fakticky správné a podložené zdroji?
7. Stojí každá jazyková verze samostatně a nespoléhá na vysvětlení uvedené pouze v jiném jazyce?

Příklad: text o Stolpersteine nesmí pouze říct, že jde o pamětní kameny nebo že připomínají oběti nacismu. Musí vysvětlit, že jde o malé mosazné pamětní destičky zasazené do chodníku, obvykle před posledním svobodně zvoleným bydlištěm lidí pronásledovaných nebo zavražděných nacistickým režimem, přičemž každá destička připomíná konkrétního člověka.

Stejný princip uplatňuj na české reálie, například Stolpersteine v českém kontextu, RÚIAN, městské části a obvody, okresy a kraje, pamětní tradice, historická hnutí, církevní a správní instituce a místní kulturní pojmy. Nevyžaduj zbytečné vysvětlování mezinárodně známých konceptů a neměň každé faktum v encyklopedické heslo.

Pokud je verze gramaticky správná, ale kulturně nesrozumitelná cílovému čtenáři, v této oblasti nevyhovuje. Uveď přesný jazyk a pasáž, kterou je třeba zlepšit.

### I. Technická validace a kontrola schématu

Validuj každý záznam podle aktuálního `data/czechia/schema.json`.

Zkontroluj:
- validní JSON a správné mapování databázových polí;
- všechna povinná pole a správné datové typy;
- žádná neschválená nebo neznámá pole;
- pouze povolené enum hodnoty kategorií, mapových kategorií, typů polohy, přesnosti a stavů;
- unikátní a správně řazená ID faktů podle aktuálních pravidel;
- explicitní vlastnosti polohy a validní nenulové objekty polohy;
- platné rozsahy souřadnic a číselné datové typy;
- správnou strukturu zdrojů a jejich odkazy;
- všech sedm jazykových struktur a shodná ID/pořadí;
- příznaky ověření odpovídají kontrolám, které byly skutečně provedeny;
- žádné nechtěné změny nesouvisejících metadat.

Neměň schéma jako obezličku při auditu. Omezení nebo rozpor schématu oznam samostatně k výslovnému posouzení.

## 5. Nálezy, závažnost a stav auditu

Každý nález musí obsahovat:
- PSČ;
- ID databázového řádku, pokud je dostupné;
- ID faktu, pokud se týká konkrétního faktu;
- kontrolní oblast (A–I);
- závažnost;
- přesný popis problému a důvod, proč porušuje standard;
- důkaz/zdroj nebo chybějící důkaz;
- doporučenou opravu;
- informaci, zda se problém týká jednoho faktu, jednoho záznamu nebo celého bloku.

Použij tyto úrovně závažnosti:
- **CRITICAL** — chybné geografické přiřazení PSČ, zásadně nepravdivý nebo vymyšlený obsah, vážné chybné přiřazení místa, poškozený záznam nebo strukturální vada, kvůli které není bezpečné záznam používat.
- **HIGH** — chybějící zásadní místní fakt, významná duplicita, zásadní selhání zdrojů, chybějící jazyk/fakt, významově zavádějící překlad nebo závažná chyba schématu/geografie.
- **MEDIUM** — chybějící kulturní kontext, slabé nebo neúplné pokrytí rešerše, překladová nuance, nedostatečně přesný zdroj nebo opravitelný problém metadat.
- **LOW** — drobný styl, formulace, formátování nebo nevýznamná nekonzistence.

Použij tyto stavy auditu:
- **PASS** — všechny povinné kontroly jsou ověřeny a nezůstává žádný nevyřešený podstatný nález.
- **FIX REQUIRED** — existuje jedna nebo více potvrzených vad vyžadujících opravu.
- **REVIEW REQUIRED** — důkazy jsou nejednoznačné nebo je nutné autoritativní vyjasnění.
- **BLOCKED** — audit nelze dokončit, protože nejsou dostupné potřebné záznamy, data nebo přístupy.

Blok nesmí dostat PASS, pokud zůstává nevyřešený nález CRITICAL nebo HIGH, chybí požadovaný existující záznam nebo zůstává podstatná kontrola neověřená. Nálezy MEDIUM/LOW uveď i tehdy, když blok jinak vyhovuje.

## 6. Povinný report blokového auditu

Vytvoř report s těmito částmi:

1. **Identifikace auditu:** datum auditu, název rozsahu, blok PSČ / okres / oblast, snapshot databáze/zdrojů, verze standardu a schématu nebo odkazy na commity.
2. **Reconciliace inventáře:** očekávané, načtené, chybějící, duplicitní, mimo rozsah a blokované záznamy.
3. **Výsledek bloku:** PASS / FIX REQUIRED / REVIEW REQUIRED / BLOCKED, včetně počtů podle závažnosti.
4. **Matice po jednotlivých záznamech:** PSČ, ID řádku, stav záznamu, prošlé/neprošlé kontroly, počet nálezů a konečný výsledek záznamu.
5. **Nálezy napříč PSČ:** duplicitní fakta, chybná geografická příslušnost, překryvy a problémy konzistence celého bloku.
6. **Pokrytí turistické rešerše:** stavy jednotlivých tematických skupin a nevyřešené kandidáty.
7. **Výsledky jazyků a mezinárodní srozumitelnosti:** samostatný výsledek pro cs, de, en, es, fr, it a nl, včetně dotčených ID faktů.
8. **Technická validace:** výsledky validace schématu a JSON.
9. **Fronta oprav:** seřazený seznam přesných oprav, závislostí a navazujících kroků.
10. **Nevyřešené otázky a mezery v důkazech.**
11. **Závěrečné potvrzení:** co bylo skutečně zkontrolováno, co nikoli a proč.

Nikdy neuváděj „plně auditováno“, pokud byl zkontrolován pouze vzorek. Nikdy netvrď, že proběhla kontrola zdroje, URL, souřadnic, jazyka nebo schématu, pokud se ve skutečnosti neprovedla.

## 7. Postup oprav a opakovaného auditu

První audit je pouze pro čtení. Po vytvoření reportu:
1. Předlož nálezy a navrhované opravy.
2. Před úpravou produkčních záznamů nebo souborů repozitáře vyčkej na výslovné povolení.
3. Oprav pouze výslovně schválené a identifikované vady; nepřepisuj nesouvisející obsah.
4. Zachovej ID a nesouvisející metadata, pokud zdokumentovaná oprava nevyžaduje jinak.
5. Každý změněný záznam znovu validuj podle schématu.
6. U každého změněného faktu, polohy, přiřazení nebo duplicity znovu prověř dopad napříč PSČ.
7. Pokud se změní text nebo význam faktu, znovu zkontroluj všech sedm jazyků a mezinárodní srozumitelnost.
8. Znovu spusť relevantní kontroly bloku a aktualizuj report o vyřešené/nevyřešené stavy.
9. Blok označ PASS až po splnění podmínek v oddílu 5.

## 8. Záloha a předání po dokončení auditu

Po úspěšném auditu bloku a ověření všech schválených oprav připrav podklady pro neměnný snapshot **AUDITED** podle dohodnutého zálohovacího postupu projektu.

Snapshot AUDITED musí být oddělený od dřívějšího snapshotu **REWORK**. Nikdy nepřepisuj předchozí snapshot. Podle možností zálohovacího workflow zahrň auditovaná data, auditní report, log oprav a opakovaného auditu, manifest, časové razítko a kontrolní součty.

Netvrď, že záloha existuje nebo je ověřena, dokud nebyla skutečně vytvořena, nahrána a zkontrolována.

## 9. Závěrečný provozní princip

**Audituj celý blok, nikoli vzorek. Ověř rework podle aktuálního standardu. Zaznamenej důkazy a přesné vady. Během auditu tiše neopravuj produkční data. Schválené opravy znovu audituj. Teprve potom potvrď výsledek a připrav neměnný AUDITED snapshot.**


### Povinná kontrola synchronizace sequence a groups

Před auditem bloku ověř, že `sequence` je kanonický úplný seznam a `groups` jeho úplné členění. Porovnej přesnou množinu PSČ, počet a unikátnost. Každý kód musí být v obou strukturách právě jednou; musí platit `count = sequence.length = součet položek groups`. Jakýkoli rozdíl je nález HIGH a blok nesmí dostat PASS, dokud není vysvětlen a opraven se schválením. Nevyvozuj automaticky, že je správná jedna část a druhá chybná.

Zkontroluj také PSČ s vlastním doručovacím obvodem, včetně těch, která nejsou v běžné číselné řadě. Pokud je kód v `sequence`, patří do rozsahu auditu. Prázdné `localities` neznamená, že nemá vlastní územní rozsah; ověř jej podle Content Standardu a nepřidávej domnělé lokality.


## 10. Povinný centrální auditní tahák a navazování mezi okny

**Závazné pravidlo: jeden stát + jeden přesně vymezený auditní rozsah = jeden kanonický auditní tahák.** Tahák je trvalý pracovní registr auditu, nikoli jednorázový report ani poznámka konkrétního konverzačního okna.

### 10.1 Povinné vyhledání před každým auditem nebo pokračováním
1. Nejdříve stanov zemi a přesnou identitu rozsahu: souvislý rozsah PSČ, explicitní množinu PSČ, okres/obec/oblast a případné hranice výběru.
2. Prohledej příslušnou složku `data/czechia/audits/` a její `README.md` registr. Hledej podle kanonického rozsahu, nikoli podle data, názvu konverzace nebo aktuálního okna.
3. Kanonická cesta pro blok je `data/czechia/audits/{scope}_audit.md`, kde `scope` je normalizovaný rozsah, například `60200-64400`. Pro pojmenované území použij stabilní, jednoznačný slug.
4. Pokud tahák existuje, **načti celý jeho obsah a pokračuj v něm**. Nevytvářej nový soubor ani paralelní tahák. Nejprve ověř jeho rozsah, stav, poslední aktualizaci, rozhodnutí, hotové kontroly, otevřené nálezy a přesný další krok.
5. Pokud tahák neexistuje, ověř ještě registr a případné překrývající se/alternativně pojmenované taháky. Pokud stejný rozsah už pokrývá existující dokument, použij jej. Nový tahák vytvoř pouze tehdy, když pro tento rozsah skutečně žádný použitelný neexistuje.
6. Pokud existuje více kandidátů nebo se rozsahy překrývají, nevytvářej další. Nejdříve zdokumentuj vztah, zvol jeden kanonický registr a ostatní označ jako alias/nahrazený/část širšího rozsahu; historii nemaž.
7. Zapiš kanonický soubor do `README.md` registru. Po vytvoření nebo změně taháku aktualizuj také jeho metadata v registru.

### 10.2 Povinný obsah živého taháku
Každý tahák musí obsahovat:
- kanonické ID rozsahu, stát, přesnou definici rozsahu a cestu k souboru;
- stav: `NOT STARTED`, `IN PROGRESS`, `PAUSED`, `FIXES IN PROGRESS`, `RE-AUDIT`, `PASS`, `FIX REQUIRED`, `REVIEW REQUIRED` nebo `BLOCKED`;
- verze/commity promptu, schématu, Content Standardu, sequence a referenčních dat;
- inventář a reconciliaci PSČ;
- matici všech záznamů a kontrol A–I;
- tematický checklist s výsledkem každé kategorie;
- samostatné výsledky sedmi jazyků;
- všechny nálezy, jejich důkazy, rozhodnutí a stav;
- opravy a následné ověření;
- **zamčená rozhodnutí**: co už bylo prověřeno a odsouhlaseno, proč je to správně, důkaz, dotčené PSČ/fakta a co se nesmí znovu otevírat bez nového důkazu nebo změny standardu;
- otevřené otázky a chybějící důkazy;
- poslední dokončený krok a přesný další krok;
- historii změn s datem, změnou a důvodem.

### 10.3 Pravidla kontinuity a ochrana před opakováním
- Nové konverzační okno není nový audit. Je pouze další pracovní relací nad stejným tahákem.
- Nikdy neopakuj již uzavřenou kontrolu nebo opravu jen proto, že se změnilo okno či model. Před opětovným otevřením musí existovat nový důkaz, změna zdroje/standardu/schématu nebo konkrétní rozpor.
- Zamčené rozhodnutí se nesmí znovu označit za chybu bez uvedení nového důkazu a vysvětlení, proč původní důkaz/rozhodnutí přestalo platit.
- Pokud se kontrola musí opakovat kvůli změně dat nebo standardu, zachovej původní výsledek a přidej novou revizi; nepřepisuj historii.
- Každá pracovní relace aktualizuje stejný tahák průběžně, zejména po významném rozhodnutí, opravě nebo uzavření kontrolní oblasti. Nečekej až na konec dlouhého okna.
- Při předání vždy ulož stav a přesný další krok. Při nedostatku kontextového prostoru nejprve zapiš checkpoint do taháku.
- Tahák nesmí tvrdit, že kontrola proběhla, pokud není zaznamenán její rozsah, výsledek a odpovídající důkaz.
- `PASS` lze použít jen při splnění všech požadavků promptu; uzavření oprav samo o sobě neznamená úplný audit PASS.

### 10.4 Ochrana proti paralelním a překrývajícím se auditům
Před vytvořením nového taháku porovnej jeho rozsah s registrem. Pokud nový požadavek spadá do již existujícího širšího auditu, pokračuj v širším taháku a eviduj dílčí rozsah jako podsekci. Pokud nový požadavek rozšiřuje stávající rozsah, nejprve aktualizuj definici a inventář stávajícího taháku, případně vytvoř výslovně navázaný nový audit jen tehdy, když jde o samostatnou auditní jednotku. Nikdy nevytvářej druhý tahák pro stejnou oblast pouze kvůli novému oknu.

**Provozní příkaz:** Před každou prací proveď `FIND → READ → RESUME`; `CREATE` je povolen pouze po prokazatelném nenalezení existujícího kanonického nebo použitelného překrývajícího se taháku.
