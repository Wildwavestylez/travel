# TRAVEL — CZECHIA CONTENT STANDARD V2

## 1. Účel a závaznost standardu

Tento dokument definuje závazná obsahová, geografická, rešeršní, redakční a překladová pravidla pro všechny české PSČ záznamy projektu TRAVEL.

Jediným závazným produkčním základem jsou společně:

1. `schema.json` — strojově čitelná struktura, povinná pole, datové typy a řízené hodnoty.
2. `CONTENT_STANDARD.md` — významová, geografická, rešeršní a redakční pravidla.

Každý nový nebo přepracovaný záznam MUSÍ splňovat oba dokumenty. Žádná pole, kategorie, jazykové varianty, zdroje ani obsahové postupy se nesmějí přidávat ad hoc.

Pokud se pravidla standardu a schématu dostanou do rozporu, záznam se nesmí považovat za hotový. Rozpor se musí vyřešit vědomou revizí příslušného dokumentu; nesmí se obcházet.

**V2 navazuje na původní český standard a přebírá vyspělejší redakční a geografické principy používané v německém TRAVEL. Česká pravidla však zůstávají přizpůsobena českým institucím, územnímu členění, zdrojům a datům ČSÚ. Německá specifika se nepřenášejí automaticky.**

---

## 2. Základní filozofie TRAVEL

TRAVEL není databáze, která se snaží naplnit každé PSČ stejným počtem textů. Je to kurátorovaná databáze skutečně zajímavých míst, příběhů a souvislostí.

Rozhodující jsou:

- faktická správnost;
- skutečný vztah k danému PSČ;
- význam a jedinečnost;
- kvalita a dohledatelnost zdrojů;
- informační hodnota pro návštěvníka;
- přirozený a srozumitelný jazyk.

Jedno PSČ může obsahovat tři mimořádně kvalitní fakta, jiné deset nebo více. Obojí může být správně.

Nikdy nevymýšlej, nerozšiřuj ani nezkracuj obsah jen proto, abys dosáhl určitého počtu faktů nebo podobné délky záznamů.

Základní otázka není:

> Kolik faktů dokážeme do tohoto PSČ vložit?

Základní otázka je:

> Co by měl návštěvník, místní člověk, badatel nebo pracovník cestovního ruchu o tomto konkrétním místě opravdu vědět?

Cílem je co nejvyšší hustota důvěryhodných, významných a překvapivých informací bez výplně.

---

## 3. Autority a ověřování českých PSČ a územních údajů

Projekt rozlišuje dvě různé otázky a nepoužívá pro ně jednu univerzální autoritu:

- **ČSÚ — autorita pro oficiální evidenci PSČ.** Pro ověření oficiální evidence používej číselník ČSÚ PSČ (kódový seznam 0028). Samostatné rutinní načítání typového číselníku 0029 není pro projektový výběr nutné: relevantní geografický rozsah projektu vymezuje `sequence.json` a geografickou vazbu adresních míst ověřuje RÚIAN. Pokud vznikne konkrétní nejasnost, zda jde o územní nebo organizační PSČ, lze typ dohledat individuálně v oficiálních zdrojích; tato kontrola však nesmí automaticky měnit sequence ani existující obsah.
- **RÚIAN spravovaný ČÚZK — hlavní autorita projektu pro geografické přiřazení adresních míst k PSČ.** Pro ověření, jaké PSČ náleží konkrétnímu adresnímu místu a do jakého území toto místo patří, používej oficiální data RÚIAN. RÚIAN eviduje PSČ ve vazbě na územní prvky a adresní místa; organizační PSČ bez územní vazby do geografického inventáře RÚIAN nepatří.

Pro projektovou geografickou sekvenci slouží `sequence.json` jako závazný rozsah kandidátních PSČ a inventář adresních míst RÚIAN jako základní referenční seznam jejich geografické vazby. ČSÚ zůstává zdrojem pro ověření oficiální evidence PSČ. Tyto role se doplňují, nikoli nahrazují.

### 3.0.1 Společný referenční inventář RÚIAN pro všechna pracovní okna

Projekt udržuje jeden centrální, verzovaný inventář celostátních geografických PSČ odvozený z oficiálních dat adresních míst RÚIAN. Je uložen přímo v repozitáři a je společným výchozím zdrojem pro tvorbu i rework všech českých PSČ:

- `data/czechia/reference/ruian_postcodes.csv` — **jediný kanonický celostátní RÚIAN inventář PSČ**; pracuj přímo s CSV a vyhledej přesný pětimístný kód ve sloupci `postcode`. Žádný paralelní JSON inventář se nepoužívá.
- `data/czechia/reference/ruian_import_manifest.json` — metadata zdrojového feedu, stažení, zpracování a počtu záznamů.
- `data/czechia/reference/README.md` — stručný návod k použití a omezením inventáře.

Před tvorbou, reworkem nebo auditem načti README a aktuální CSV z větve `main`. Pro konkrétní PSČ použij pouze pole, která CSV skutečně obsahuje: `address_points`, `municipalities`, `municipality_parts`, `city_districts` a `prague_districts`. CSV neobsahuje `validity_dates`; tuto hodnotu nikdy neodvozuj ani nevyráběj. Manifest použij k posouzení stáří a původu dat. Všechna pracovní okna musí vycházet ze stejného committed CSV inventáře; nevytvářej paralelní lokální seznamy ani znovu nestahuj celostátní archiv, pokud je aktuální CSV dostupné.

Inventář je agregací výskytu PSČ na adresních místech v konkrétním zpracovaném RÚIAN feedu. Není náhradou číselníku ČSÚ 0028 pro oficiální evidenci PSČ, není důkazem PO-box-only statusu a nepotvrzuje polohu konkrétní turistické zajímavosti. Nepřítomnost PSČ v inventáři sama o sobě nedokazuje jeho neplatnost; případ musí být prověřen proti ČSÚ a případně aktuálním oficiálním datům. Geografickou vazbu každého faktu ověřuj samostatně podle oddílu 3.3.

Pokud některý referenční soubor chybí, nelze jej načíst nebo je podle manifestu zjevně zastaralý, uveď tuto skutečnost a použij oficiální náhradní postup. Běžná tvorba ani rework nesmí měnit centrální referenční soubory. Jejich aktualizaci provádí pouze samostatný řízený RÚIAN workflow.

Česká pošta a její vyhledávače mohou sloužit jako doplňkový kontrolní zdroj poštovních údajů. Provozní doručovací pošta, spádovost nebo doručovací trasa sama o sobě nemění geografické přiřazení adresního místa v RÚIAN.

### 3.1 Výchozí pravidlo pro existující databázi

Stávající českou geografickou sekvenci považuj za výchozí správnou, pokud odpovídá inventáři geografických PSČ získanému z RÚIAN. Neprováděj plošné přepisování. Konkrétní nesrovnalost prověř podle příslušné role zdrojů: ČSÚ pro oficiální evidenci PSČ, RÚIAN pro geografickou vazbu adresního místa. Typ PSČ dohledávej individuálně pouze tehdy, když je to pro vyřešení konkrétního rozporu nezbytné.

### 3.2 Hierarchie zdrojů podle účelu

1. **Oficiální evidence PSČ:** ČSÚ, číselník 0028. Individuální ověření typu PSČ použij pouze při konkrétní nejasnosti, nikoli jako povinný krok každého reworku.
2. **Geografické přiřazení adresního místa k PSČ:** RÚIAN / ČÚZK, zejména oficiální data adresních míst a jejich územních vazeb.
3. **Ověření administrativního a statistického členění:** příslušné referenční registry a územní data ČSÚ nebo RÚIAN podle konkrétního údaje.
4. Česká pošta — doplňkový kontrolní zdroj poštovních údajů, nikoli automatická náhrada geografické vazby v RÚIAN.
5. Ostatní státní a veřejné instituce — doplňující zdroje podle jejich působnosti.
6. Weby obcí, organizací, firem, turistické portály a soukromé stránky — druhotné zdroje pro kontext a doplňující ověření.

### 3.3 Geografické ověření zajímavostí

Při přiřazování faktu ke konkrétnímu PSČ nejprve zjisti skutečnou polohu objektu nebo místa. Pokud má ověřenou adresu, vyhledej odpovídající adresní místo v RÚIAN a zkontroluj jeho PSČ a územní příslušnost. Nepřiřazuj PSČ pouze podle názvu obce, okresu, kraje, poštovní pobočky ani odhadu.

Pokud místo nemá vlastní adresní bod nebo přesnou adresu (například zaniklý provoz, archeologické naleziště, historická událost nebo přírodní lokalita), zajímavost kvůli tomu nevyřazuj. Zachovej ji v obsahu. Pokud lze doložit alespoň přibližnou polohu, použij ji podle pravidel geografické lokalizace; pokud ji nelze spolehlivě určit, ponech pole location jako null. **Nezaváděj kvůli tomu nové povinné pole, nový stav ani zvláštní značku v JSON.** Případy bez dostatečně ověřené geografické vazby se dohledají a posoudí samostatně při finálním geografickém auditu. Do té doby jim svévolně nepřiřazuj PSČ.

Při rozporu mezi zdroji zachovej faktum a jeho doložený obsah, ale nepředstírej potvrzené geografické přiřazení. Rozpor prověř podle účelu jednotlivých zdrojů a případně jej odlož k samostatnému auditu. Opravu proveď až po ověření.

Budoucí Europe Explorer má umožnit uživateli nahlásit chybu nebo problém. Hlášení je podnět ke kontrole, nikoli automaticky potvrzená oprava.

Eviduj dostupný zdroj a datum ověření podle možností současné struktury. Nezaváděj složitou povinnou provenienci tam, kde potřebné údaje nejsou dostupné.
## 3.4 Produkční ukládání českých PSČ do Supabase

Tato část se vztahuje výhradně na česká data projektu TRAVEL. Při tvorbě, reworku, auditu nebo ukládání českého PSČ pracuj pouze s českým záznamem; německé záznamy ani německý dataset nejsou součástí tohoto workflow.

**Produkční data českých PSČ se ukládají do předpřipravených záznamů v Supabase, nikoli jako samostatné JSON soubory v repozitáři.**

- Produkční tabulka: `public.postal_codes`.
- Český záznam musí mít `country_code = 'CZ'`.
- Samotný JSON záznam se ukládá do existujícího JSONB sloupce `content`.
- Záznam vyhledej podle přesného PSČ a aktualizuj odpovídající předpřipravený český řádek.
- Zachovej existující identifikaci záznamu a všechna metadata, která nejsou výslovně předmětem změny.
- Nevytvářej duplicitní řádky ani nové databázové tabulky. Nový řádek zakládej pouze tehdy, pokud to zadání výslovně požaduje a příslušný produkční postup to dovoluje.
- Před zápisem ověř, že cílový řádek skutečně odpovídá požadovanému PSČ a má `country_code = 'CZ'`. Pokud český cílový záznam chybí nebo je nejednoznačný, zápis zastav a problém oznam.
- Nikdy při českém workflow neupravuj řádky s `country_code = 'DE'`, nepřeváděj mezi zeměmi `country_code` a neměň strukturu databáze, RLS ani aplikační kód.
- Zápis musí zachovat strukturu definovanou v `data/czechia/schema.json`. Před uložením validuj celý výsledný JSON.
- Po uložení znovu načti cílový řádek a ověř, že se obsah uložil do správného českého záznamu.

Repozitář obsahuje pravidla, schéma a společné referenční soubory. Není náhradním úložištěm produkčních JSON záznamů. Při běžné tvorbě a reworku je zdrojem i cílem produkčních záznamů Supabase.

---

## Provozní efektivita a ochrana Supabase I/O

Tato pravidla jsou závazná pro tvorbu, rework, audit, publikaci, validaci i zálohování českých PSČ. Platí společně s konkrétními pracovními prompty. Auditní výběrová omezení se na rework nepřenášejí, ale ochrana databázového výkonu je společná pro všechny pracovní režimy.

- **Přesně omez každý databázový dotaz.** Při práci s českými záznamy filtruj současně `country_code = 'CZ'` a přesný seznam cílových `postal_code`. Nečti ostatní země, nesouvisející PSČ ani celé statusové/verzovací skupiny, pokud to konkrétní úkol výslovně a odůvodněně nevyžaduje.
- **Vyhýbej se plošnému čtení a zbytečným sloupcům.** Nepoužívej neomezené `SELECT *`, globální počty, celotabulkové agregace, stránkování přes celou tabulku ani načtení všech dat s následným filtrováním v aplikaci. Načítej pouze potřebná pole; JSONB `content` pouze pro vybrané záznamy, které se skutečně zpracovávají.
- **Mapové body čti až po výběru záznamů.** Z `explorer_map_points` načítej pouze body patřící k již vybraným `postal_id`. Nikdy nenačítej celou tabulku mapových bodů. Respektuj složený primární klíč `(postal_id, fact_id)` a správné stránkování podle skutečné unikátní kombinace.
- **Opakovaně používej již načtená data.** V rámci jedné relace načti společné podklady a cílový blok jednou, pokud se jejich verze nezměnila. Mechanické kontroly, validaci JSON, překladovou konzistenci a porovnání prováděj lokálně nad již načtenými daty.
- **Zápisy omez na skutečné změny.** Nezapisuj nezměněné záznamy. Zápisy prováděj sekvenčně a pouze do přesně určených řádků. Po zápisu ověř pouze změněný řádek nebo související změněné body, ne celou tabulku. Po timeoutu nikdy neopakuj zápis naslepo; nejprve ověř stav cílové položky.
- **Omez zbytečné síťové a API operace.** Neopakuj stejné SELECT, refresh, přesné počty, `HEAD`/count požadavky ani polling bez konkrétní potřeby. Upřednostni bezpečné dávkové načtení před mnoha jednotlivými požadavky. Respektuj limity služby a `Retry-After`; nevytvářej retry bouře ani paralelní duplicitní dotazy.
- **Edge Functions, exporty a zálohy musí být úzce vymezené.** Funkce nesmí při práci s jedním PSČ/blokem číst celou tabulku ani všechny mapové body. Filtruj na straně databáze před stránkováním. Preview nesmí provádět širší čtení než cílený režim. Exporty a zálohy spouštěj jen na výslovný pokyn a pro přesný požadovaný rozsah.
- **SQL sestavuj pouze podle ověřeného schématu.** Nevymýšlej názvy tabulek, sloupců, indexů, operátorů ani vztahů. Pokud není bezpečný filtr nebo struktura jistá, dotaz nespouštěj a nejprve ověř schéma.
- **Indexy a RLS/politiky jsou chráněná infrastruktura.** Nepřidávej, nemaž ani neupravuj indexy, RLS, oprávnění, triggery nebo databázovou architekturu během běžného obsahu/reworku/auditu. Výkonnostní upozornění nejprve prověř podle reálného používání, plánů dotazů a bezpečnostního dopadu. Změny prováděj pouze jako samostatný, výslovně schválený optimalizační zásah.
- **Žádné automatické porovnávání databází.** Supabase a Neon ani jiné databáze mezi sebou neporovnávej, pokud si to uživatel výslovně nevyžádá.

**Provozní zásada:** přesně vybrat → jednou načíst → lokálně zpracovat → zapsat jen změny → ověřit jen změněné položky. Bezpečnost, správnost a povinné důkazy mají přednost před pouhým snižováním počtu volání; úspora se dosahuje odstraněním redundance, nikoli vynecháním nutného ověření.

---

## 4. Povinná rešerše před psaním

Před vytvořením nebo přepracováním faktů MUSÍ proběhnout strukturovaná rešerše významu konkrétního PSČ.

Nezačínej náhodným sbíráním zajímavostí. Nejprve zjisti, co dané místo skutečně je, čím je charakteristické a které příběhy vysvětlují jeho identitu.

### 4.1 Povinné oblasti prověření

Aktivně prověř, zda je PSČ nebo jeho relevantní území spojeno s:

- významnými historickými událostmi a obdobími;
- historickými sídly, obcemi a zaniklými sídly;
- hrady, zámky, tvrzemi, pevnostmi a opevněním;
- významnými sakrálními stavbami, poutními místy a církevní historií;
- UNESCO a dalšími mezinárodně, národně nebo regionálně významnými památkami;
- významnými osobnostmi a jejich konkrétní vazbou na místo;
- kulturními, uměleckými a společenskými dějinami;
- průmyslem, výrobou, řemesly, značkami a známými produkty;
- železnicí, dopravou, technikou a významnou infrastrukturou;
- hornictvím, energetikou a využíváním přírodních zdrojů;
- vědou, výzkumem, školstvím a významnými institucemi;
- vojenskou historií a vojenskými objekty;
- chráněnou přírodou, krajinou, geologií a přírodními unikáty;
- archeologií a neobvyklými historickými nálezy;
- významnými turistickými cíli a návštěvnickými místy;
- živými nebo historicky významnými tradicemi;
- zaniklými provozy, kulturní pamětí a příběhy známými jen určité generaci;
- překvapivými, doloženými místními příběhy a skrytými zajímavostmi;
- dalšími skutečnostmi, jejichž význam zřetelně přesahuje běžnou místní kuriozitu.

Prověř významné dominanty i méně známá místa, pokud jsou pro identitu lokality důležitá. Nevynechávej významnou kapli, technickou památku, pomník, muzeum, historický objekt, archeologickou lokalitu nebo jinou podstatnou atrakci jen proto, že se hůře objevuje ve výsledcích běžného vyhledávání.

### 4.2 Definující příběhy

Po rešerši si nejprve sestav přehled hlavních příběhů daného místa. Urči, které z nich skutečně vysvětlují jeho identitu.

Původní orientační rozsah 3–5 příběhů není povinná kvóta. Místo může mít méně nebo více zásadních příběhů. Žádný důležitý příběh nesmí být vynechán jen kvůli tomuto číslu.

Významný příběh musí být zvážen k zařazení, i když:
- nejde o klasickou turistickou atrakci;
- souvisí s průmyslem, produktem nebo firmou;
- daná výroba či instituce už zanikla;
- je známý především místním obyvatelům nebo určité generaci;
- je překvapivý, nikoli všeobecně slavný;
- záznam už obsahuje mnoho jiných faktů.

Významná průmyslová, technická nebo kulturní historie není výplň.

---

## 5. Výběr faktů a jejich pořadí

Neexistuje univerzální pořadí tematických kategorií, které by platilo pro všechna PSČ.

O pořadí rozhoduje skutečná identita konkrétní lokality, její význam a přínos pro návštěvníka.

Před dokončením záznamu si odpověz:
- Čím je toto místo skutečně známé?
- Co nejvíce formovalo jeho identitu?
- Proč sem lidé přijíždějí nebo proč si místo pamatují?
- Které příběhy nejlépe vysvětlují jeho význam?
- Které další skutečnosti přinášejí skutečně novou hodnotu?

Fakta řaď podle skutečného významu a relevance, nikoli podle pořadí rešerše, snadnosti nalezení zdroje nebo automatické preference přírody, historie, průmyslu, techniky, turismu či známých osobností.

Příklady:
- Pokud místo definuje hrad a významná historická událost, mohou být tyto příběhy přednější než méně podstatné přírodní zajímavosti.
- Pokud je místo známé mimořádnou krajinou nebo národním parkem, může příroda stát před méně významnou historickou osobností.
- Pokud je identita místa spojena s významným průmyslovým podnikem, technickým vynálezem nebo dopravní historií, může být právě tento příběh hlavním faktem.
- Pokud je místo formováno kulturní tradicí, architekturou, náboženskou historií nebo konkrétní osobností, může být na prvním místě tato oblast.

Jde o příklady, nikoli šablony. Žádná kategorie nemá automatickou přednost.

Zařaď všechna fakta, která jsou skutečně relevantní, odlišná, dostatečně doložená a užitečná. Neodstraňuj kvalitní fakta jen kvůli preferované délce záznamu. Stejně tak nepřidávej slabá fakta, aby záznam vypadal úplněji.

Nejdůležitější definující příběh nebo příběhy mají být zpravidla na začátku. Další fakta následují v sestupném pořadí významu. Skrytá zajímavost nesmí předběhnout zásadní příběh pouze proto, že je překvapivá.

Pořadí musí zůstat významově stejné ve všech jazykových verzích.

---

## 6. Geografický rozsah — každé PSČ musí mít vlastní fakta

**PSČ jsou interní organizační pomůckou projektu TRAVEL pro třídění a navázání faktů, nikoli nepřekročitelnou hranicí turistického obsahu.** Každé faktum se ukládá právě do jednoho PSČ záznamu, ale skutečná lokalita, příběh ani rozsah objektu nemusí přesně kopírovat hranice PSČ.

Závazná pravidla:

- Každé faktum musí mít jedno hlavní reálné místo nebo lokalizovatelný předmět a právě jedno primární PSČ přiřazení.
- PSČ neomezují, o jakém významném místě lze vyprávět. Ikonický most, park, rozsáhlý areál, významná stezka, liniová stavba, krajinný celek nebo jiný objekt může přirozeně zasahovat do více PSČ.
- U takového objektu vyber **jedno nejpravděpodobnější a redakčně nejlépe obhajitelné PSČ** podle hlavního/reprezentativního místa, polohy hlavní části, hlavního vstupu, adresy či jiného nejsilnějšího místního spojení. Zohledni dostupné oficiální podklady a skutečnou povahu objektu. Nemusíš dokazovat, že celý objekt leží uvnitř hranice jediného PSČ.
- Pokud je k dispozici konkrétní adresa nebo adresní místo, ověř ji podle českého Content Standardu v RÚIAN/ČÚZK. RÚIAN nadále slouží k přesnému ověření adresních míst, jejich PSČ a územních vazeb; nenahrazuje však redakční rozhodnutí o jediném PSČ pro rozsáhlý či liniový objekt bez jediné rozhodující adresy.
- U objektů bez jednoznačné adresy použij oficiální vymezení, důvěryhodné mapové/geografické zdroje a obhajitelný reprezentativní bod. Nepředstírej přesnost, kterou zdroje neposkytují.
- **Jakmile je fakt jednou přiřazen k jednomu PSČ a toto přiřazení je doloženě nebo rozumně obhajitelně uzavřeno, považuje se za stabilní a uzamčené.** Při dalších reworkech a auditech se znovu neotevírá a nepřesouvá jen proto, že objekt zasahuje i do jiného PSČ nebo že jiný bod by mohl spadat do sousedního PSČ.
- Uzamčené přiřazení lze znovu otevřít pouze při konkrétním novém důkazu, že původní volba byla fakticky chybná, případně při doloženém zásadním rozporu. Samotný přesah přes více PSČ, blízkost hranice nebo alternativní možné přiřazení takovým důkazem není. Před změnou zachovej původní rozhodnutí a zdůvodni novou revizi.
- Každá fyzická atrakce nebo souvislý příběh má standardně jeden primární záznam; nevytvářej duplicitní fakta v sousedních PSČ. Samostatné záznamy jsou přípustné pouze pro skutečně odlišné, nezávisle významné příběhy či objekty.
- Širší okolí lze zkoumat a uvádět v textu jako kontext. Není nutné násilně omezovat samotný příběh na administrativní hranici PSČ.
- Pokud poloha není dostatečně doložená, zachovej zajímavost a označ geografickou nejistotu podle existujících pravidel; PSČ nevymýšlej a souřadnice neposouvej na pohodlné místo.

### 6.1 Česká územní realita a pole v JSON — obec sídla pošty

**Pro administrativní identifikaci každého PSČ se vždy používá jediná obec: obec, ve které fyzicky sídlí příslušná pošta obsluhující dané PSČ.** Neuváděj v administrativních polích seznam všech obcí, částí obcí, vesnic ani osad, které PSČ nebo doručovací obvod pokrývá.

- `city` = oficiální název jediné obce, ve které fyzicky sídlí příslušná pošta pro dané PSČ. Rozhodující je skutečné umístění pošty, nikoli název PSČ, největší obec v obvodu ani seznam obcí obsluhovaných poštou.
- `county` = okres, do kterého administrativně spadá obec sídla této pošty.
- `state` = kraj, do kterého administrativně spadá obec sídla této pošty.
- `district` = konkrétní část obce, městská část, městský obvod nebo čtvrť uvnitř obce, ve které pošta sídlí, pokud je pro identifikaci sídla pošty relevantní a doložená; jinak `null`. Neuváděj sem ostatní obce, vesnice ani osady z poštovního obvodu.
- `district_type` = nepovinné upřesnění druhu lokality uvedené v poli `district`.

Obec, okres a kraj se ověřují podle oficiálního územního členění a skutečné adresy pošty. RÚIAN slouží k ověření adresního místa a jeho územní příslušnosti; ČSÚ k ověření příslušného administrativního členění. Česká pošta nebo jiný oficiální zdroj se použije k ověření, která pošta dané PSČ obsluhuje a kde se její provozovna fyzicky nachází.

**Rozsah zajímavostí se tímto pravidlem nemění.** Fakta se nadále vyhledávají a vybírají na celém geografickém území daného PSČ / poštovního obvodu, včetně všech obcí, částí obcí, vesnic a osad, které do něj spadají. Tato sídla se však nevypisují do polí `city`, `county` ani `district`; jejich konkrétní místa mohou být uvedena v jednotlivých faktech a jejich `location`.

Příklady:
- Pokud pošta obsluhující PSČ sídlí v obci A, zatímco obvod zahrnuje také obce B a C, bude `city = A`; okres a kraj se určí podle obce A. Obce B a C zůstávají součástí geografického rozsahu rešerše a faktů.
- Pokud pošta sídlí v konkrétní městské části obce, `city` zůstává oficiální název obce a příslušná městská část může být uvedena v `district`, pokud je to doložené.

PSČ samo o sobě není administrativní jednotka. Nikdy nezaměňuj obec sídla pošty s celým územím jejího poštovního obvodu.

## 7. Jedno reprezentativní místo pro každé PSČ

Každé PSČ musí mít právě jedno konkrétní reprezentativní místo v poli `representative_place`. Jeho souřadnice v `representative_point` musí označovat stejné místo.

Závazná pravidla:

- Vyber jedno jasně identifikovatelné skutečné místo, které nejlépe reprezentuje dané PSČ.
- Neuváděj dvě nebo tři alternativy, seznam atrakcí ani obecnou oblast.
- Upřednostni konkrétní pojmenované místo, například náměstí, budovu, památník, muzeum, nádraží, parkový objekt nebo jiný přesně určitelný bod.
- Reprezentativní bod musí ukazovat přímo na vybrané místo, nikoli na jinou atrakci, centrum města nebo náhodný bod.
- Název a souřadnice musí tvořit jeden konzistentní pár.
- Výběr založ na významu pro dané PSČ, místní relevanci, geografické správnosti a možnosti místo jednoznačně lokalizovat.
- Nevybírej známé místo v jiné části města jen proto, že je slavnější.
- Pokud PSČ nemá známou atrakci, vyber jiný ověřitelný a přesně lokalizovatelný bod, který území skutečně reprezentuje. Nevymýšlej památku ani nepoužívej vágní název.
- Překlady mohou místo vysvětlit, ale musí zachovat totožnost jediného vybraného místa.

Pravidlo jednoho reprezentativního místa nijak neomezuje počet samostatných faktů. Každé faktum se posuzuje podle vlastních geografických a obsahových pravidel.

---

## 8. Reprezentativní místo, přístupový bod a poloha faktu

Jde o tři rozdílné geografické role.

### 8.1 Reprezentativní bod
- Zachovej jedno jednoduché orientační reprezentativní místo a jeho souřadnice pro celé PSČ.
- Nemusí jít o turistickou atrakci ani geometrický střed.
- Nezaměňuj jej za polohu konkrétního faktu.

### 8.2 Přístupový bod
- Ponech jej jako pomocný údaj pro příjezd nebo příchod.
- Pokud existuje jasný a ověřitelný praktický bod, uveď jej.
- Pokud nemá smysl nebo není spolehlivě ověřen, použij `null`.
- Neprováděj složitou navigační analýzu a nevymýšlej přístupový bod za každou cenu.

### 8.3 Poloha konkrétního faktu
Používej stejné geografické podmínky jako německé TRAVEL:
- poloha označuje skutečný objekt, místo, přírodní útvar nebo doloženou historickou lokalitu, o které fakt pojednává;
- nepřebírej automaticky reprezentativní ani přístupový bod;
- u nových a přepracovaných faktů vyplň `location`, pokud lze polohu doložit; použij `null`, pokud ji nelze obhajitelně určit;
- u konkrétního objektu preferuj jeho vlastní ověřené souřadnice;
- u rozlehlého území nebo faktu vztahujícího se k oblasti PSČ bez jediného fyzického bodu lze použít reprezentativní bod s `type = postal_area` a `accuracy = area_representative`;
- netvrď, že se událost odehrála přesně na reprezentativním bodě, pokud to není doloženo.

Strukturu `fact_location`, přesnost, zdroj a povolené typy určuje `schema.json`. Český slovník typů je samostatný; geografický princip je stejný jako v Německu.

## 9. Sestavení příběhu před tvorbou seznamu faktů

Po rešerši nejprve uspořádej nejsilnější příběhy a teprve potom vytvářej jednotlivá fakta.

Pokud to charakter místa umožňuje, vytvoř souvislou místní narativní linku.

Možná posloupnost:

**počátky → historický vývoj → významné osobnosti → průmysl a technika → kulturní význam → současné dědictví → příroda a skryté zajímavosti**

Příklad průmyslového města:

**zakladatel nebo osobnost → vznik podniku či značky → průmyslový rozvoj → výroba a technický přínos → muzeum nebo současné dědictví**

Propojená fakta mohou mít větší hodnotu než několik nesouvisejících turistických tipů.

Nevytvářej však umělý příběh tam, kde žádný přirozený celek neexistuje.

---

## 10. Co má návštěvník záznamu pochopit

Uživatel, který se virtuálně dostane do daného PSČ, by měl pochopit:

- jaký typ místa to je;
- čím je zajímavé nebo významné;
- co je zde historicky, kulturně, technicky nebo přírodně důležité;
- které konkrétní místní příběhy vysvětlují jeho identitu;
- co překvapivého nebo méně známého lze objevit;
- proč má smysl se o tomto místě dozvědět více.

Záznam by měl být užitečný také pro pracovníka cestovního ruchu, regionálního rozvoje, památkové péče nebo místního badatele — alespoň v některých svých faktech.

---

## 11. Obsahové kategorie

Fakta se zařazují podle svého hlavního tématu. Kategorie jsou redakční klasifikace, nikoli pořadí důležitosti.

Používej pouze hodnoty povolené v aktuálním `schema.json`. Význam kategorií:

- `nature_and_landscape` — příroda, krajina, geologie, vodstvo a chráněná území;
- `heritage_and_monuments` — památky, historické objekty, archeologie a kulturní dědictví;
- `architecture_and_urbanism` — architektura, urbanistická struktura, plánování a vývoj zástavby;
- `history` — historické události, období a vývoj místa;
- `culture_and_industry` — kultura, tradice, průmysl, řemesla, výroba, značky a produkty;
- `people` — osobnosti s doloženou vazbou na místo;
- `geography_and_context` — geografické a územní souvislosti;
- `tourism_and_surroundings` — návštěvnická místa a turistické souvislosti, pokud splňují geografické pravidlo;
- `hidden_gem` — skutečně neobvyklá, doložená a překvapivá místní zajímavost;
- `local_story` — specifický místní příběh, který nelze vhodně zařadit jinam;
- `other_verified_significance` — jiný doložený význam, pro který není vhodnější kategorie.

Kategorie `hidden_gem` není odměna za malou nebo málo známou atrakci. Musí jít o skutečně neobvyklou informační hodnotu.

Kategorie jsou společné s německým schématem a Europe Explorerem. V Česku používej pouze ty, které se pro konkrétní fakt hodí; není nutné využít všechny kategorie.

---

## 11A. Jednotné mapové kategorie TRAVEL

Každý fakt MUSÍ mít právě jednu vlastnost `map_category`. Jde o stabilní, jazykově neutrální klasifikaci hlavního tématu faktu, podle které Europe Explorer v budoucnu vybere mapovou ikonu. Nenahrazuje ani nemění obsahovou vlastnost `category`, která zůstává širší redakční/výzkumnou klasifikací.

Používej výhradně těchto 17 hodnot:

| map_category | Orientační symbol | Význam a pravidlo přiřazení |
|---|---|---|
| `castle` | 🏰 | Hrady, zámky, tvrze, pevnosti, opevnění, zámecká sídla a jejich zříceniny. |
| `religious_site` | ⛪ | Kostely, katedrály, kaple, kláštery, synagogy, mešity, poutní a další primárně náboženská místa. |
| `historical_monument` | 🗿 | Pomníky, památníky, pamětní místa, historické monumenty, významné kašny a veřejná pamětní/umělecká díla, která nejsou lépe zařaditelná jinam. |
| `architecture` | 🏛️ | Jednotlivé významné stavby a architektonická díla, pokud jejich hlavní identitou není hrad, náboženská stavba, muzeum ani technické dědictví. |
| `historic_city` | 🏙️ | Historická centra, stará města, náměstí, ulice a souvislé historické urbanistické celky; nikdy ne jednotlivá budova. |
| `museum` | 🖼️ | Muzea, galerie, skanzeny, sbírky, pamětní a dokumentační centra a návštěvnická centra, jejichž hlavním účelem je prezentace či výklad sbírek, historie nebo tématu. |
| `archaeological_site` | 🏺 | Archeologická naleziště, pravěká sídliště, vykopávky a další lokality, jejichž hlavní hodnotou je archeologický výzkum nebo dochované archeologické pozůstatky. |
| `nature` | 🌳 | Chráněná území, přírodní útvary, lesy, vodopády, jezera, řeky, biotopy, geologické jevy a další přírodní lokality. |
| `viewpoint_landscape` | 🏞️ | Rozhledny, vyhlídky, panoramata, výrazné scenérie a krajinné oblasti, jejichž hlavní návštěvnickou hodnotou je výhled nebo krajina. |
| `park_garden` | 🌷 | Veřejné a historické parky, zahrady, botanické zahrady, arboreta, zoologické zahrady, safari, ptačí parky, akvária a motýlí domy; tedy spravované parky a živé kolekce. |
| `technical_heritage` | ⚙️ | Technické, průmyslové, hornické, energetické, dopravní a inženýrské dědictví, historické továrny, doly, železnice, mosty a infrastruktura. |
| `cultural_site` | 🎭 | Divadla, operní domy, koncertní sály, kulturní domy a další fyzická místa, jejichž hlavní funkcí je živé umění nebo veřejná kulturní činnost. Neplatí pro muzea. |
| `visitor_attraction` | 🎡 | Významné návštěvnické zážitky a atrakce bez přesnější hlavní kategorie, například zábavní a vodní parky, zpřístupněné jeskyně a podzemí, historické lázně, vyhlídkové plavby či návštěvnické provozy. |
| `local_culture` | 🎎 | Místní tradice, folklor, zvyky, řemesla, slavnosti, gastronomické dědictví a další nehmotné nebo komunitní kulturní jevy, nikoli jejich samostatná budova či kulturní venue. |
| `science_site` | 🔭 | Významná a návštěvnicky relevantní vědecká či výzkumná místa, například observatoře, planetária, vědecká centra a zpřístupněné výzkumné instituce. Běžná škola či univerzita sem automaticky nepatří. |
| `personality` | 👤 | Fakt, jehož hlavním tématem je konkrétní osobnost s doloženou vazbou na dané PSČ, bez ohledu na fyzické místo použité pro mapový bod. |
| `sports_venue` | 🏟️ | Významné stadiony, sportovní arény, historická sportoviště a sportovní areály s doloženou návštěvnickou, historickou nebo širší veřejnou hodnotou. |

Uvedené symboly jsou pouze orientační tematické příklady. Nejsou součástí JSON ani závazným grafickým assetem. Budoucí sada mapových ikon bude navázána na stabilní hodnoty `map_category`; změna vzhledu ikony nesmí vyžadovat změnu datových identifikátorů.

### Závazná pravidla klasifikace

- Rozhoduje **hlavní téma faktu**, nikoli pouze objekt, na jehož souřadnicích je umístěn pin.
- Každý fakt má přesně jednu mapovou kategorii. Nepoužívej kombinované hodnoty, vlastní varianty ani ad hoc nové kategorie.
- Pokud je hlavním tématem konkrétní osoba, použij vždy `personality`, i když je pin umístěn u jejího domu, pracoviště, muzea, památníku, hrobu nebo reprezentativního bodu PSČ. Osoba zmíněná pouze okrajově kategorii nemění.
- Hrad, zámek, tvrz nebo pevnost patří do `castle`; náboženská stavba či poutní místo do `religious_site`; muzeum nebo galerie do `museum`; archeologická lokalita do `archaeological_site`.
- Souvislý historický městský celek patří do `historic_city`, jednotlivá významná stavba do `architecture`, pokud nemá přesnější kategorii výše.
- Technická či průmyslová funkce/identita má přednost před obecným označením architektury. Historická vodní infrastruktura patří do `technical_heritage`; přírodní vodní útvar do `nature`.
- Chráněná příroda a přírodní útvary patří do `nature`; vyhlídka nebo krajina, jejíž hlavní hodnotou je panorama, do `viewpoint_landscape`.
- Botanické zahrady, arboreta, zoologické zahrady, akvária a obdobné živé kolekce patří do `park_garden`. Zábavní a vodní parky patří do `visitor_attraction`.
- Fyzické místo určené primárně živému umění patří do `cultural_site`; muzeum zůstává `museum`. Tradice a nehmotné kulturní jevy patří do `local_culture`.
- Vědecké místo musí mít skutečný vědecký/výzkumný charakter a samostatnou návštěvnickou, historickou nebo veřejnou hodnotu; běžné vzdělávací instituce automaticky nezařazuj do `science_site`.
- Významný sportovní areál patří do `sports_venue`; běžné sportovní hřiště nebo lokální zařízení bez zvláštního významu není automaticky samostatným faktem.
- `visitor_attraction` je záchytná kategorie pouze tehdy, když hlavní podstata místa/zážitku nespadá do žádné přesnější kategorie. Nepoužívej ji místo hradu, muzea, přírodní lokality, technického dědictví apod.
- UNESCO není samostatná mapová kategorie. Zařaď lokalitu podle její skutečné podstaty.
- Vojenská historie sama o sobě neurčuje kategorii: pevnost může být `castle`, bojiště nebo pamětní místo `historical_monument`, vojenská technika či infrastruktura `technical_heritage`.
- Kategorie neurčuje prioritu, pořadí, význam ani to, zda fakt do databáze patří. Hodnota je jazykově neutrální a nepřekládá se v sedmi jazykových verzích.
- Mapová kategorie a geografická poloha jsou dvě nezávislé informace. Kategorii nikdy neodvozuj pouze z typu nebo názvu souřadnicového bodu.

Při hraničním případu vyber kategorii podle primární identity a hlavního sdělení faktu, uplatni výše uvedená pravidla přednosti a v pracovních poznámkách stručně zdůvodni volbu. Pokud nelze hlavní téma určit, fakt nejprve redakčně vyjasni; neřeš nejasnost vytvořením nové kategorie.

---

## 12. Priorita faktů

Používej priority A–D podle skutečného významu faktu v kontextu daného místa.

### A — mimořádný význam

Například:
- památka nebo lokalita mimořádného mezinárodního či národního významu;
- UNESCO;
- významná národní přírodní lokalita;
- zásadní historická událost;
- osobnost mimořádného významu s pevnou vazbou na místo;
- významný průmyslový, vědecký nebo technický počin s národním či mezinárodním dopadem.

### B — mimořádná skrytá zajímavost

Například:
- nečekaně významný místní objekt;
- vzácně dochovaný prvek;
- málo známý, ale dobře doložený historický, kulturní, technický nebo přírodní příběh;
- místní skutečnost s významem nepoměrně větším, než naznačuje její velikost nebo známost;
- fakt, který silně naplňuje princip „tohle jsem o tom místě vůbec nevěděl“.

Skrytá zajímavost musí být skutečně specifická, překvapivá, doložená nebo mimořádně užitečná. Malý objekt automaticky neznamená prioritu B.

### C — silný regionální význam

Například:
- významná regionální památka;
- důležitá přírodní lokalita;
- průmyslové nebo technické dědictví regionálního významu;
- významná regionální turistická atrakce;
- osobnost, dopravní nebo kulturní historie s výrazným regionálním dopadem.

### D — místní význam

Například:
- méně známá místní osobnost;
- lokální řemeslo nebo průmyslová historie;
- menší historický objekt;
- místní událost;
- zajímavý, ale převážně lokální přírodní nebo kulturní prvek.

Priorita je kontextová. Fakt může být v jednom PSČ zásadní a v jiném méně významný. Nepřiděluj A nebo B jen proto, že je něco staré, hezké, malé nebo neobvyklé.

---

## 13. Příroda a krajina

Příroda je plnohodnotné téma TRAVEL, nikoli výplň.

U každého PSČ aktivně prověř, zda se v jeho území nachází nebo s ním přímo souvisí:

- národní park;
- chráněná krajinná oblast;
- přírodní park;
- přírodní rezervace nebo památka;
- významný les, mokřad nebo biotop;
- řeka, jezero, rybník, vodopád nebo jiný vodní prvek;
- hora, údolí, skalní útvar nebo jeskyně;
- geologická či paleontologická lokalita;
- památný nebo výjimečný strom;
- jiný pozoruhodný přírodní prvek.

Nestačí pouze vyjmenovat chráněné území. Vysvětli, čím je významné a co jej odlišuje.

Pokud v daném PSČ není přírodní prvek, který by měl skutečnou informační hodnotu, nevymýšlej jej ani nepřidávej obecný popis krajiny.

---

## 14. Historie, průmysl, technika a kulturní paměť

Neomezuj česká místa na hrady, zámky a kostely.

Podle charakteru lokality prověř také:
- průmyslové podniky a továrny;
- sklářství, textilnictví, keramiku a další řemesla;
- pivovarnictví, potravinářství a známé výrobky;
- strojírenství, automobilový a zbrojní průmysl;
- železniční, silniční a leteckou historii;
- hornictví, energetiku a těžbu;
- vědu, technické vynálezy a výzkum;
- významné školy a instituce;
- vojenskou historii;
- zaniklé provozy a průmyslové areály;
- místní tradice, kulturní paměť a příběhy spojené s konkrétní generací.

Zaniklá výroba nebo instituce může být významným faktem, pokud je její historická role dobře doložena a skutečně souvisí s místem.

Rozlišuj historický fakt od současného stavu. Nepopisuj zaniklý provoz jako aktivní a nepředstavuj plánovanou nebo budoucí událost jako již existující skutečnost.

---

## 15. Skryté zajímavosti

Aktivně hledej fakta, která vyvolávají reakci:

> To jsem vůbec nevěděl — a jsem rád, že to teď vím.

Skrytá zajímavost musí být:
- konkrétní;
- ověřitelná;
- dostatečně neobvyklá, překvapivá nebo užitečná;
- skutečně spojená s daným PSČ;
- odlišná od ostatních faktů v záznamu.

Obecné tvrzení typu „v obci stojí starý kostel“ nestačí bez dalšího významu, zvláštnosti nebo kontextu.

Nevyráběj skryté zajímavosti z nepodstatných detailů. Pokud žádná kvalitní skrytá zajímavost neexistuje, není nutné ji do záznamu zařazovat.

---

## 16. Širší okolí a kontext

Širší okolí lze zkoumat, abychom pochopili historii, geografii a souvislosti daného PSČ.

Samostatným faktem však může být pouze místo, které splňuje geografické pravidlo tohoto PSČ.

- Atrakce v sousedním PSČ nesmí být samostatným faktem ani mapovým bodem.
- Okolní obec nebo lokalitu lze zmínit v textu jako kontext, pokud je to nezbytné pro pochopení místního příběhu.
- Kontext nesmí vzbudit dojem, že externí místo patří do aktuálního PSČ.
- Nepřebírej souřadnice externího místa jako polohu faktu v aktuálním PSČ.
- Jednu atrakci nikdy neduplikuj do více PSČ.

Výzkumný rozsah může být širší než výsledný geografický rozsah záznamu.

---

## 17. Zdroje a důkazní standard

Každé faktum musí být pravdivé, konkrétní, lokálně relevantní a doložitelné.

Preferované pořadí zdrojů:

1. oficiální instituce a primární zdroje;
2. města, obce, kraje a jejich oficiální organizace;
3. ČSÚ a další relevantní veřejné instituce;
4. státní archivy, muzea, galerie a památkové instituce;
5. univerzity, vědecké instituce a odborné organizace;
6. správci památek, provozovatelé a vlastníci lokalit;
7. odborné publikace a specializované zdroje;
8. kvalitní žurnalistika;
9. důvěryhodné regionální a místní zdroje.

Pravidla:

- Preferuj primární zdroj, pokud existuje.
- Jeden kvalitní primární zdroj je lepší než několik slabých kopií stejného tvrzení.
- Zdroj musí podporovat konkrétní tvrzení, ne pouze obecně zmiňovat město nebo název objektu.
- U historických a odborných tvrzení ověř kontext, datum a význam.
- U současných informací ověř, že jsou stále aktuální.
- Nepřebírej automaticky texty z turistických katalogů, agregátorů nebo jiných databází.
- Nikdy nevymýšlej fakta, citace, názvy institucí ani URL.
- Pokud zdroje uvádějí rozdílné údaje, rozdíl prověř a případně jej transparentně popiš. Nevybírej náhodně jednu hodnotu.
- U souřadnic a geografické polohy musí zdroj skutečně podporovat lokalizaci, ne pouze název města či okresu.
- Zdroje musí být dohledatelné a jejich URL musí vést na konkrétní relevantní stránku nebo dokument, pokud je to možné.

U každého záznamu musí být možné zpětně zjistit, odkud pocházejí podstatné informace a jak byla ověřena identita PSČ.

---

## 18. Psaní faktů

Každé faktum musí přinášet jednu jasnou, smysluplnou informaci nebo souvislý příběh.

Dobré faktum:
- má konkrétní předmět;
- vysvětluje, co se stalo, co zde je nebo proč je místo důležité;
- obsahuje potřebný historický či kulturní kontext;
- uvádí důležité osoby, data a názvy, pokud jsou relevantní;
- vysvětluje význam, nikoli pouze existenci objektu;
- je srozumitelné i čtenáři, který místo nezná.

Vyhýbej se:
- obecným turistickým frázím;
- prázdným superlativům;
- opakování stejné informace v několika faktech;
- dlouhým odbočkám bez vztahu k hlavnímu tématu;
- neověřeným legendám vydávaným za historii;
- spekulacím a nepodloženým interpretacím;
- reklamnímu nebo propagačnímu tónu.

Pokud je příběh založen na legendě, pověsti nebo tradovaném vyprávění, jasně jej jako takový označ. Nezaměňuj pověst za prokázanou událost.

---

## 19. Sedm jazyků a lokalizace

Každý záznam obsahuje sedm povinných jazykových verzí:

- `cs` — čeština;
- `de` — němčina;
- `en` — angličtina;
- `es` — španělština;
- `fr` — francouzština;
- `it` — italština;
- `nl` — nizozemština (standardní nizozemština `nl-NL`, formulovaná přirozeně a srozumitelně i vlámským čtenářům).

Všech sedm jazyků musí obsahovat přesně stejnou sadu ID faktů a zachovat jejich pořadí.

### 19.1 Významová shoda

Překlady musí zachovat:
- význam a podstatu faktu;
- jména a oficiální názvy;
- data, číselné údaje a historické souvislosti;
- míru jistoty a rozlišení mezi faktem, tradicí a legendou;
- geografickou vazbu;
- pořadí a redakční prioritu faktů.

Překlad nesmí přidávat nové skutečnosti, vynechávat podstatné informace ani měnit význam originálu.

### 19.2 Přirozený jazyk

Každá jazyková verze musí znít přirozeně pro rodilého nebo zkušeného čtenáře daného jazyka.

- Nepřekládej mechanicky větu po větě.
- Nepřenášej českou skladbu do ostatních jazyků, pokud vzniká nepřirozený text.
- Používej běžné a zavedené cílové výrazy.
- Překládej popisné obecné výrazy, ale zachovávej oficiální vlastní názvy, pokud neexistuje zavedený překlad.
- Nevytvářej umělé překlady názvů, které by mohly změnit identitu místa.

### 19.3 Vysvětlování českých reálií

Pokud je název, instituce, tradice, historická událost nebo kulturní odkaz pro zahraničního čtenáře neznámý nebo nejednoznačný, vysvětli jej přirozeně při prvním relevantním výskytu v každém jazyce.

Vysvětlení má čtenáři sdělit, co daná věc je, jak funguje nebo proč je důležitá. Pouhý doslovný překlad názvu nestačí.

Příklady:
- U pojmu `městská památková rezervace` vysvětli, že jde o zákonem chráněné historické území s významným souborem památek.
- U české tradice nebo svátku popiš stručně její podstatu, pokud ji zahraniční čtenář nemusí znát.
- U místního výrobku nebo průmyslového označení vysvětli, o jaký produkt či odvětví jde, pokud samotný název význam neprozrazuje.
- U historické instituce zachovej její oficiální název, ale přidej stručné vysvětlení její funkce.

Vysvětlení musí být:
- věcně správné;
- přiměřeně krátké;
- přirozené v cílovém jazyce;
- relevantní pro pochopení faktu.

Každý jazyk posuzuj samostatně. To, co je samozřejmé českému čtenáři, nemusí být známé čtenáři německému, anglickému, španělskému, francouzskému nebo italskému. Cílem není pouze překlad, ale přirozené vysvětlení českých reálií, institucí, správních pojmů, tradic a historického kontextu. České vlastní názvy zachovávej a při prvním relevantním výskytu přidej stručné vysvětlení v cílovém jazyce.

### 19.4 Konzistence

- Zachovávej stejnou identitu míst a osob ve všech jazycích.
- Používej zavedený překlad názvu, pokud skutečně existuje a je běžný.
- Jinak ponech oficiální název a vysvětli jej v textu.
- Vysvětli pojem při prvním relevantním použití a zbytečně neopakuj dlouhou definici v dalších větách.
- Překlady reprezentativního místa musí označovat stejné jediné místo.

---

## 20. ID faktů a struktura záznamu

Každé faktum musí mít stabilní a jedinečné ID podle pravidel aktuálního `schema.json`.

- ID musí být jedinečné v rámci záznamu.
- Všech sedm jazyků musí používat přesně stejná ID.
- Pořadí faktů musí být ve všech jazycích totožné.
- Při překladu se ID nemění.
- Při redakční úpravě textu se ID nemění, pokud nejde o skutečně nový nebo odstraněný fakt.
- Nepoužívej stejné ID pro dva různé příběhy.
- Nevytvářej nové vlastnosti ani nepřejmenovávej existující pole mimo schválenou změnu schématu.

Povinná struktura faktu, povolené kategorie, zdroje, jazykové objekty a geografická metadata se řídí aktuálním `schema.json`. Při jeho revizi musí být tento standard a schéma znovu sladěny.

---

## 21. Fotografie a obrazové zdroje

Pokud záznam obsahuje fotografii, musí být její původ a podmínky použití dohledatelné.

- Nepoužívej fotografii, která zobrazuje jiné místo nebo jiný objekt.
- Nezaměňuj ilustrační fotografii za důkaz geografické polohy.
- Uveď zdroj, autora a licenci podle možností zdroje a struktury schématu.
- Nepředpokládej, že obrázek nalezený na internetu lze volně použít.
- Pokud není vhodná a důvěryhodně použitelná fotografie dostupná, je lepší ji neuvádět než použít zavádějící nebo právně problematický obrázek.

---

## 22. Kontrola duplicit a informační hodnoty

Před uložením porovnej fakta uvnitř záznamu i s relevantními sousedními PSČ.

Zkontroluj:
- zda dvě fakta nepopisují stejnou událost nebo atrakci;
- zda se stejná informace neopakuje pouze jinými slovy;
- zda se jedna fyzická atrakce nevyskytuje ve více PSČ;
- zda fakta přinášejí rozdílnou informační hodnotu;
- zda každé faktum skutečně patří do daného PSČ;
- zda kontext okolních míst není mylně prezentován jako místní fakt.

Dvě fakta o jednom objektu mohou existovat pouze tehdy, pokud popisují skutečně odlišné, samostatně významné příběhy a jejich rozdělení přináší čtenáři jasnou hodnotu. Nesmí jít o umělé rozdělení jednoho příběhu na více položek.

---

## 23. Závěrečný audit před dokončením

Každý nový nebo přepracovaný záznam musí projít kontrolou všech následujících oblastí.

### 23.1 PSČ a územní správnost
- Odpovídá PSČ oficiální evidenci ČSÚ 0028 a projektovému geografickému rozsahu v `sequence.json`? Pokud vznikl konkrétní rozpor ohledně organizačního či územního charakteru PSČ, byl individuálně prověřen bez automatické změny sequence?
- Byla před kontrolou načtena společná referenční data z `data/czechia/reference/` a ověřeno přesné PSČ v RÚIAN inventáři?
- Je zaznamenán skutečně použitý zdroj, dataset/release a datum ověření podle dostupných polí schématu?
- Odpovídá přiřazení obce, části obce, městské části, okresu a kraje oficiálním údajům RÚIAN/ČSÚ podle povahy údaje?
- Jsou případné rozpory se sekundárními zdroji zaznamenány a vyhodnoceny?
- Nezaměňuje se doručovací pošta s geografickou identitou PSČ?

### 23.2 Reprezentativní a přístupové údaje
- Je vybráno právě jedno reprezentativní místo?
- Odpovídají jeho souřadnice přesně tomuto místu?
- Je reprezentativní místo skutečně spojeno s daným PSČ?
- Je přístupový bod ověřený a prakticky použitelný?
- Nejsou tyto dvě role zaměněny?

### 23.3 Obsah a rešerše
- Proběhla strukturovaná rešerše všech relevantních tematických oblastí?
- Byly určeny hlavní příběhy místa?
- Nechybí významná památka, instituce, průmyslový nebo kulturní příběh?
- Byla prověřena příroda a krajina?
- Jsou skryté zajímavosti skutečně neobvyklé a doložené?
- Odpovídá pořadí faktů skutečné důležitosti místa?
- Neobsahuje záznam výplň nebo uměle vytvořené kvóty?

### 23.4 Geografická správnost faktů
- Patří každé faktum právě do tohoto PSČ?
- Je jeho hlavní poloha konkrétní a ověřená?
- Nejsou samostatná fakta převzata ze sousedních PSČ?
- Nejsou atrakce nebo příběhy duplicitní v jiných záznamech?
- Je širší okolí používáno pouze jako kontext, pokud leží mimo dané PSČ?
- Jsou nejisté polohy označeny a neprezentovány jako ověřené?

### 23.5 Zdroje
- Podporují zdroje skutečně uvedená tvrzení?
- Jsou důležité údaje ověřeny z kvalitních, přednostně primárních zdrojů?
- Fungují URL a vedou na relevantní obsah?
- Jsou rozpory a nejistoty vyřešeny nebo zaznamenány?
- Jsou geografické polohy doloženy samostatně, pokud to vyžaduje schéma?

### 23.6 Jazyky
- Obsahuje všech sedm jazyků stejná ID faktů?
- Je pořadí faktů ve všech jazycích stejné?
- Zachovávají překlady všechna fakta, data, jména a souvislosti?
- Zní každý jazyk přirozeně?
- Jsou české reálie a neznámé pojmy vysvětleny zahraničním čtenářům?
- Neobsahuje žádná jazyková verze nové nebo nepodložené informace?

### 23.7 Technická validace
- Odpovídá JSON aktuálnímu `schema.json`?
- Neobsahuje nepovolená pole nebo hodnoty?
- Jsou ID jedinečná a správně navazující podle aktuálních pravidel?
- Jsou povinné údaje vyplněny?
- Jsou všechny jazykové verze strukturálně úplné?
- Jsou geografické a zdrojové údaje ve správných polích?

Záznam není hotový, pokud některá zásadní oblast zůstává neověřená. Nevyřešené problémy musí být jasně uvedeny; nesmějí se skrýt za označení „dokončeno“.

---

## 24. Závazná pravidla při reworku a zachování dat

Při přepracování existujících záznamů rozlišuj mezi obsahovou opravou, jazykovou opravou, geografickou opravou a technickou migrací.

- Neměň verzi datového záznamu, pokud k tomu není výslovný pokyn a schválený důvod.
- Nepřepisuj správná fakta jen kvůli stylistické preferenci.
- Neodstraňuj významné ověřené informace bez doloženého důvodu.
- Při změně faktu zachovej jeho identitu a ID, pokud stále popisuje tentýž příběh.
- Pokud je fakt chybný, duplicita nebo geograficky nesprávně přiřazený, oprav jej nebo vyřaď podle důkazů a zaznamenej důvod.
- Při čistě technické nebo geografické aktualizaci neměň texty, překlady, priority ani pořadí faktů, pokud to není výslovně součástí zadání.
- Při jazykové opravě zachovej faktický obsah a identitu faktu.
- Při migraci schématu nepřepisuj obsahové údaje, které migrace nemá měnit.

Každý rework musí zachovat ověřené informace a současně odstranit skutečné chyby. Nesmí se stát záminkou k neřízenému přepisování záznamu.

---

## 25. Produkční princip

Kombinace:

**`schema.json` + `CONTENT_STANDARD.md`**

je závazným základem všech českých TRAVEL záznamů.

Standard se mění pouze vědomou a verzovanou revizí. Nové požadavky se nesmějí do produkce zavádět neformálně ani pouze v jednotlivém promptu.

Cílem není „více informací“.

Cílem je:

**co nejvyšší hustota důvěryhodných, významných, geograficky správných a překvapivých informací bez balastu.**

Základní produkční postup:

**Nejprve ověř PSČ a území. Proveď rešerši. Najdi skutečné příběhy. Vyber to podstatné. Ověř geografickou vazbu. Napiš srozumitelná fakta. Lokalizuj do sedmi jazyků. Proveď závěrečný audit. Teprve potom publikuj.**


---

## 26. Řízený slovník typů míst u faktů

Česká část TRAVEL používá vlastní normalizovaný slovník typu místa. Je oddělený od historického německého seznamu hodnot v `data/germany/schema.json`.

Závazná pravidla:

- Každé `facts[].location.type` musí používat jednu z hodnot definovaných v `data/czechia/schema.json` a popsaných v `data/czechia/location_types.json`.
- Identifikátory jsou stabilní anglické slugy v jednotném čísle.
- Typ popisuje druh místa, nikoli počet objektů. Použij například `historic_villa` pro jednu i více historických vil, `hill` pro jeden i více kopců a `pond` pro jeden i více rybníků.
- Množné varianty jako `historic_villas`, `hills` nebo `ponds` se nikdy nepoužívají.
- Významově odlišné typy neslučuj jen kvůli podobnému názvu. Nový typ přidej pouze tehdy, pokud existující hodnoty nedokážou přesně popsat místo.
- Do záznamů se ukládá stabilní ID, nikoli český volný text. České názvy jsou v samostatném slovníku.
- Tento slovník popisuje `location.type`; nenahrazuje redakční `facts[].category`. Jde o dvě různé informace.
- Změna českého slovníku nesmí automaticky měnit německé schéma, německé záznamy ani jejich historické hodnoty.

U nových nebo přepracovaných faktů uveď `location` jako samostatnou polohu konkrétního objektu, pokud ji lze důvěryhodně určit. Pokud ji určit nelze, použij `null`. Nikdy nekopíruj do `location` souřadnice reprezentativního nebo přístupového bodu PSČ, pokud tyto body skutečně nejsou polohou samotného faktu.


## 27. Povinný postup při nedostupných referenčních datech

Nedostupný, prázdný nebo neúplný lokální referenční soubor není důvodem zastavit český rework ani opakovat stejný technický problém u každého dalšího PSČ. Pokud lokální data chybí, pokračuj ověřením přímo v oficiálních online zdrojích.

Závazná hierarchie a pravidla:

1. Nejprve zkus příslušný lokální referenční soubor a dostupné alternativní formáty (např. JSON, CSV nebo manifest). Při technickém selhání zkus i oficiální/raw endpoint nebo jiný podporovaný způsob načtení.
2. Pokud údaj stále chybí, ověř jej přímo na oficiálním webu instituce, která za daný údaj odpovídá. Pro statistické číselníky a klasifikace používej ČSÚ; pro územní a adresní data RÚIAN/ČÚZK; pro poštovní služby a informace v kompetenci provozovatele poštovních služeb použij oficiální zdroje České pošty.
3. Rozlišuj účel jednotlivých zdrojů. Číselník PSČ, číselník druhu PSČ, územní evidence RÚIAN a evidence adresních pošt nejsou zaměnitelné. Údaj z jednoho zdroje nepoužívej jako důkaz jiného údaje.
4. U každého ověřovaného údaje zaznamenej konkrétní oficiální zdroj/URL a datum ověření. Pokud zdroj uvádí platnost nebo referenční datum, zaznamenej je odděleně od data kontroly.
5. CSV smí být použito jako náhradní zdroj pouze pro pole, která skutečně obsahuje. Chybějící `validity_dates` ani jiná pole se nesmějí odhadovat, doplňovat z jiného PSČ nebo odvozovat z nesouvisejícího číselníku.
6. Pokud údaj nelze potvrdit ani v dostupných oficiálních online zdrojích, označ jej jako `unverified` / čeká na ověření, uveď co přesně chybí a pokračuj v ostatní bezpečné práci. Neoznačuj celý záznam za chybný jen kvůli nedostupnosti jednoho pomocného zdroje.
7. Stejný zdrojový problém a jeho vyřešení nebo stav nevyřešení přenes do navazujícího pracovního okna. Neopakuj bezúčelně stejné pokusy; řiď se zaznamenaným výsledkem a aktualizuj jej pouze při nové kontrole.

Příklad: pokud CSV neobsahuje `validity_dates`, ověř dostupné územní údaje na oficiálním RÚIAN/ČÚZK a samostatně ověř příslušné PSČ/typ v odpovídajících číselnících ČSÚ. Nezaměňuj potvrzení PSČ v jednom číselníku za potvrzení jeho typu v jiném číselníku. Neověřené pole ponech nevyplněné nebo ve stavu určeném schématem; nikdy nevyráběj náhradní hodnotu.
---
## 28. Povinná turistická, památková a místní objevitelská rešerše (doplňující vrstva)

Tato kapitola rozšiřuje stávající rešerši a audit. Nenahrazuje ani neuvolňuje žádné dosavadní pravidlo, nemění schéma, nevytváří nová pole, nemění řízené slovníky ani nezavádí automatickou prioritu turistických témat.

### 28.1 Cíl
U každého PSČ zjisti, co by návštěvník v dané konkrétní oblasti mohl chtít vidět, navštívit, zažít, poznat nebo objevit. Pokryj známé cíle i méně nápadné místní příběhy, památky, přírodu a neobvyklé doložené zajímavosti. Nevytvářej z každého PSČ turistickou destinaci a nevynucuj minimální počet faktů.

### 28.2 Povinný tematický kontrolní seznam
Výslovně prověř každou relevantní skupinu. Jde o výzkumná témata, nikoli nové hodnoty schématu:
1. Hrady, zámky, tvrze, historická sídla, pevnosti, zříceniny, opevnění a zámecké parky.
2. Sakrální dědictví: katedrály, kostely, kaple, kláštery, poutní místa, synagogy, mešity a sakrální umění.
3. Pomníky a veřejné umění: sochy, kašny, památníky, obelisky, historické mezníky, sochařské parky a významné instalace.
4. Historická sídla a architektura: historická centra, náměstí, brány, radnice, ulice, mosty, hradby, významné budovy a architektonické soubory včetně výjimečné moderní a poválečné architektury.
5. Muzea, galerie a sbírky: historická, archeologická, umělecká, technická, průmyslová, dopravní, železniční, letecká, vojenská, přírodovědná a specializovaná muzea; skanzeny, pamětní a dokumentační centra, významné expozice a návštěvnická centra.
6. Archeologie a pravěk: pravěká naleziště, mohyly, megality, hradiště, oppida, římské pozůstatky, archeologické krajiny a podzemní dědictví.
7. Chráněná příroda: národní parky, CHKO, přírodní parky, rezervace, přírodní památky, biosférické rezervace, přírodní dědictví UNESCO, geoparky, mokřady, rašeliniště a pralesy.
8. Geologie a krajinné útvary: skalní města, pískovce, jeskyně, kras, soutěsky, kaňony, sopečné a ledovcové útvary, zkameněliny a výjimečné geologické vyhlídky.
9. Hory, vyhlídky a trasy: vrcholy, rozhledny, panoramata, horské chaty, naučné stezky, hřebenové trasy, významné pěší/cyklistické trasy, sedla a turistické lanovky.
10. Voda a vodní dědictví: vodopády, jezera, řeky, soutoky, prameny, soutěsky, přehrady, nádrže, historické rybníky, kanály, mlýny, přístavy a významná vodohospodářská díla.
11. Parky, zahrady a živé sbírky: botanické zahrady, arboreta, historické zahrady, zámecké a městské parky, zoologické zahrady, safari/obory, ptačí parky, akvária a motýlí domy.
12. Technické, průmyslové a dopravní dědictví: doly, lomy, historické továrny, hutě, vysoké pece, elektrárny, mlýny, historické železnice/nádraží, mosty, tunely, viadukty, majáky, vodárenské věže a technická díla.
13. Paměťová místa a historické události: bojiště, revoluce a povstání, památníky, bývalé věznice, památníky totalitních režimů, železná opona, místa smluv a zásadních událostí i doložené lokality významných katastrof.
14. Turistické atrakce a zážitky: zpřístupněné jeskyně a podzemí, historické lázně, termální areály, vyhlídkové železnice, lanovky, lodní výlety, zpřístupněné industriální památky, zábavní/tematické parky, aquaparky, letní divadla a významné stadiony.
15. UNESCO a mimořádné dědictví: kulturní a přírodní památky, kulturní krajiny, přeshraniční dědictví, historická města, Evropské dědictví a obdobná formální ocenění.
16. Místní příběhy a neobvyklé zajímavosti: doložené pověsti, neobvyklé události, záhady s faktickým základem, kuriózní zvyky, rekordy, neobvyklé objekty, specifické místní názvy a příběhy vysvětlující identitu oblasti.
17. Osobnosti, film, literatura, hudba a kultura: domy a působiště významných osobností, filmové/televizní lokace, literární místa, hudební historie, divadla, operní domy, koncertní sály a kulturní instituce.
18. Tradice, řemesla a gastronomické dědictví: regionální zvyky, tradiční řemesla, historické trhy/jarmarky, významné slavnosti, tradiční výroba, pivovary, vinařství a lihovary s doloženou návštěvnickou či historickou hodnotou.
19. Trasy a návštěvnický kontext: významné poutní, kulturní, průmyslové, dopravní, cyklistické a turistické trasy, hraniční kuriozity a další prvky, jejichž relevantní část leží v daném PSČ.

Seznam je záměrně široký. Zařazuj pouze konkrétní, významné a geograficky správně přiřaditelné objekty či příběhy. Dočasné akce, běžná zařízení, obecná regionální témata a podniky se automaticky nestávají trvalými fakty PSČ.

### 28.3 Vyloučení
- Běžné hřbitovy, jednotlivé hroby a obvyklá pohřebiště nezařazuj jako turistická fakta. Výjimkou je mimořádný doložený památkový či návštěvnický areál díky architektuře, krajinářskému řešení, historické hodnotě nebo významnému souboru památníků. Samotný hrob známé osobnosti nestačí.
- Současné firmy, obchody, restaurace, hotely a běžné provozovny nezařazuj jen proto, že zde působí. Podnikové téma lze zahrnout pouze jako doložené historické, technické, kulturní či průmyslové dědictví, veřejné muzeum/návštěvnické centrum, významný návštěvnický zážitek nebo jiný samostatně hodnotný místní příběh.
- Běžný program akcí není trvalou atrakcí. Opakovaná tradice nebo historicky významná událost může být zahrnuta, je-li doložena její místní důležitost.
- Trasu nezařazuj jako bodové faktum, pokud její poloha nemůže být přesně reprezentována podle stávajícího schématu.
- Stručná kontextová zmínka zůstává možná, pokud je důležitá pro jiné doložené faktum.

### 28.4 Povinná dvoufázová rešerše
**Fáze 1 — široké objevování:** urči území PSČ podle stávajících pravidel; hledej v oficiálních turistických, památkových, muzejních, přírodovědných, obecních, regionálních a odborných zdrojích; používej PSČ, obce, části obcí, místní a historické názvy, krajinné celky a názvy památek; objevuj hlavní atrakce a příběhy bez omezení starým záznamem či prvními obecnými výsledky; eviduj kandidáty, polohu a zdroje.

**Fáze 2 — audit tematických mezer:** projdi každou relevantní skupinu v 28.2 jednotlivě; cíleně hledej zejména muzea a specializované sbírky, vyhlídky, zahrady, zoo/akvária, jeskyně a podzemí, technické dědictví, paměťová místa, místní pověsti, historické události a neobvyklé zajímavosti; porovnej výsledky se starým záznamem a první fází; identifikuj opomenutí, duplicity, slabé kandidáty a fakta patřící jinam. Obecné vyhledávání samo o sobě neznamená, že byla kategorie prověřena.

Obě fáze jsou povinné před dokončením běžného obsahového reworku.

### 28.5 Strategie zdrojů
Přednost mají odpovědné primární zdroje: oficiální turistické organizace obcí, měst, krajů a státu; památkové registry a orgány památkové péče; oficiální weby muzeí, galerií, parků, zoo, akvárií a atrakcí; správy národních parků a chráněných území, instituce ochrany přírody a geologie; obecní a regionální archivy, muzea, vlastivědné instituce a kroniky; univerzity a odborné instituce; oficiální seznamy UNESCO a dalších forem ochrany dědictví. Turistické portály a komunitní zdroje mohou objevit kandidáta, ale důležitá fakta, přesnou polohu, přístupnost a historii ověřuj kvalitnějšími zdroji, jsou-li dostupné. Existence atrakce sama o sobě nedokazuje její příslušnost k PSČ. Rozlišuj doloženou historii, zaznamenanou tradici a folklor; pověst nikdy nepodávej jako prokázanou historii.

### 28.6 Ověření a přiřazení k PSČ
U každého vybraného kandidáta ověř identitu, význam, faktické podrobnosti a přesnou primární polohu. Dolož příslušnost k danému PSČ podle stávajících pravidel; kontroluj duplicity a rozlišuj fyzické místo od plošného příběhu, trasy či události. Širší rešerše nerozšiřuje geografický rozsah faktů. Místo patřící do jiného PSČ sem nezařazuj; nejasné přiřazení označ k ověření, nikdy nehádej.

### 28.7 Stav pokrytí a podmínka dokončení
V pracovních poznámkách (nikoli v produkčním JSON) eviduj u každé skupiny jeden stav: **nalezeno a ověřeno**; **prověřeno — bez relevantního výsledku**; nebo **nevyřešeno**. PSČ je rešeršně dokončeno pouze tehdy, když jsou prověřeny všechny relevantní skupiny a nezůstává podstatná nevyřešená otázka. „Bez relevantního výsledku“ je platný výsledek; vymýšlení faktů a plnění kvót je zakázáno. Tyto stavy nepřidávej do JSON bez schválené změny schématu.

### 28.8 Stávající redakční pravidla zůstávají závazná
Tato vrstva rozšiřuje objevování, nikoli pravidla významu, kvality, priority, pořadí, zdrojů, geografické příslušnosti, sedmijazyčné shody, mapové klasifikace nebo validace schématu. Turistická zajímavost automaticky nepředbíhá významnější příběh definující dané místo.
---

## 29. Mezinárodní srozumitelnost a kulturní kontext

### 29.1 Závazný princip

Každý fakt musí být srozumitelný zahraničnímu čtenáři, který nemusel nikdy navštívit Českou republiku a nemusí znát její historii, kulturu, instituce, tradice ani místní pojmy. Požadavek platí pro původní text i samostatně pro všech sedm jazykových verzí.

Správný překlad nestačí. Text musí předat význam i kontext potřebný k pochopení.

### 29.2 Vysvětlování místních a národních reálií

- Při prvním smysluplném výskytu vysvětli neznámé kulturní, historické, institucionální, politické, náboženské, společenské a správní pojmy.
- Zachovávej správné vlastní názvy, ale podle potřeby uveď, co označují a proč jsou důležité.
- Vysvětluj české instituce, hnutí, zvyky, pamětní formy, historické události a specifické pojmy, pokud by jejich význam nebyl zahraničnímu čtenáři zřejmý.
- U historických událostí doplň stručný kontext toho, co se stalo, kdy nebo proč je událost důležitá, pokud je to nutné pro pochopení.
- Nenechávej bez vysvětlení podstatné zkratky, místní správní označení, nářeční výrazy ani kulturně specifické odkazy.

### 29.3 Samostatná srozumitelnost sedmi jazyků

Požadavek uplatni samostatně v cs, de, en, es, fr, it a nl. Žádná jazyková verze nesmí spoléhat na vysvětlení obsažené pouze v jiném jazyce. Všechny verze musí zachovat stejný faktický význam a potřebný kontext, ale přirozenou formulací v daném jazyce. Doslovný překlad, kterému cílový čtenář nerozumí, není vyhovující.

### 29.4 Stručnost, přesnost a zdroje

Vysvětlení přirozeně začleňuj a zachovávej přiměřenou délku. Nedělej z každého faktu encyklopedické heslo ani nepřidávej nepodstatné pozadí. Nevymýšlej kontext, interpretace ani význam; vysvětlující tvrzení musí být podložena důvěryhodnými zdroji. Vlastní názvy zachovávej přesně a nevyráběj jejich překlady.

Příklad: zmínka o Stolpersteine má vysvětlit, že jde o malé mosazné pamětní destičky zasazené do chodníku, obvykle před posledním svobodně zvoleným bydlištěm lidí pronásledovaných nebo zavražděných nacistickým režimem, přičemž každá destička připomíná konkrétního člověka. Pouhé označení „pamětní kameny“ neposkytuje neznalému čtenáři dostatečný kontext.

### 29.5 Čtenářský test

U každého faktu a v každém jazyce ověř:
1. Pozná čtenář bez předchozích znalostí, o jaký objekt či téma jde?
2. Jsou neznámé místní pojmy a vlastní názvy podle potřeby vysvětleny?
3. Obsahuje text historický, kulturní či institucionální kontext nutný k pochopení?
4. Pochopí čtenář, proč je fakt místně nebo historicky významný?
5. Je každé vysvětlení přesné, stručné a podložené?

Pokud je některá odpověď záporná, text není vyhovující a musí být opraven už při reworku.


## 3.5 Rozlišení geografického PSČ a poštovní / korespondenční adresy instituce

Toto pravidlo je závazné pro tvorbu, rework i audit všech českých PSČ. Jeho účelem je zabránit záměně geografického přiřazení adresního místa s PSČ uvedeným institucí pro korespondenci, doručování nebo kontakt s poštou.

**PSČ uvedené na webu památky, synagogy, muzea, firmy, úřadu nebo jiné instituce samo o sobě nedokazuje, že její fyzická poloha geograficky patří do tohoto PSČ.** Může jít o korespondenční adresu, P.O. BOX, poštovní přihrádku, podatelnu, zvláštní organizační PSČ nebo jiný poštovní údaj. Takový údaj nikdy automaticky nepřepisuje geografické přiřazení.

### Povinný postup při rozporu nebo podezřelém PSČ

1. **Nejdříve ověř fyzickou polohu objektu.** Zjisti skutečnou adresu návštěvnického vstupu nebo fyzického sídla objektu. U památky bez běžné adresy ověř její skutečnou polohu jiným důvěryhodným zdrojem.
2. **Ověř adresní místo v RÚIAN.** Pokud objekt má adresu, najdi odpovídající adresní místo a zjisti PSČ evidované pro toto místo. To je výchozí geografický důkaz pro přiřazení faktu.
3. **Údaj na webu instituce posuzuj podle jeho účelu.** Rozliš fyzickou adresu od korespondenční adresy, adresy sídla organizace, fakturační adresy, P.O. BOX a adresy poštovní pobočky. Pokud web účel adresy neupřesňuje, nepovažuj jeho PSČ za rozhodující.
4. **Poštovní pobočka není územní hranice.** Skutečnost, že v dané lokalitě existuje pošta, přepážky pro příjem a výdej zásilek, služby pro zákazníky nebo P.O. BOX pro velké klienty, sama o sobě nedokazuje, že okolní adresní místa náleží do PSČ této pošty. Provozní nebo organizační funkce pošty nesmí změnit geografické přiřazení objektu.
5. **Nevytvářej nové PSČ ani neupravuj sequence na základě jediného nálezu.** PSČ nalezené na webu instituce, v katalogu, mapě, adresáři nebo u poštovní pobočky, které není v aktuální projektové sequence, je pouze podnětem k prověření. Nesmí automaticky vést k přidání PSČ, rozdělení obsahu, přesunu faktů ani změně existujícího záznamu.
6. **Při rozporu zachovej ověřenou geografickou vazbu.** Pokud RÚIAN přiřazuje skutečné adresní místo objektu k PSČ A, zatímco web instituce uvádí PSČ B, nepřesouvej objekt do B jen podle webového údaje. Prověř, zda B není korespondenční nebo organizační údaj. Pokud rozpor nelze spolehlivě vysvětlit, označ jej v pracovních poznámkách jako nevyřešený a neprováděj změnu.
7. **Použij více zdrojů podle jejich kompetence.** RÚIAN/ČÚZK ověřuje geografickou vazbu adresního místa; ČSÚ oficiální evidenci PSČ; Česká pošta provozní a poštovní služby v rozsahu své působnosti; web instituce může potvrdit její vlastní adresu a návštěvnické informace, nikoli sám o sobě geografické hranice PSČ.

### Ochrana sequence a existujícího obsahu

- Aktuální sequence.json je závazný projektový rozsah kandidátních PSČ. Běžný rework ani rešerše nesmí sequence svévolně rozšiřovat, zužovat, přeuspořádávat nebo nahrazovat.
- Nález jiného PSČ mimo sequence se zaznamená jako podnět k samostatnému ověření. Změna sequence je samostatné rozhodnutí a vyžaduje doložený oficiální geografický důvod a výslovné schválení.
- Neprováděj hromadné přesuny faktů, změny názvů, rozdělování záznamů ani přepis existujících textů jen proto, že některý zdroj uvádí jiné PSČ.
- Jednotlivý rozpor není důkazem, že je chybná celá sequence nebo celý městský blok. Nepřenášej závěr z jedné adresy na jiné adresy ve stejném městě.
- Stejný postup platí ve všech městech a regionech Česka, včetně Prahy, Brna, Ostravy, Plzně a menších měst. Nevyvozuj obecná pravidla z jediné pošty nebo jediné instituce.

### Povinný test před přiřazením každého sporného faktu

Před změnou PSČ si odpověz:
1. Znám skutečnou fyzickou polohu objektu, nikoli jen jeho korespondenční adresu?
2. Ověřil jsem konkrétní adresní místo a jeho PSČ v RÚIAN, pokud je adresní místo evidováno?
3. Vím, jaký účel má PSČ uvedené na webu instituce?
4. Nezaměňuji PSČ pošty, P.O. BOX nebo organizační adresu s geografickým PSČ objektu?
5. Je navrhovaná změna v souladu s aktuální sequence a doložena zdroji příslušnými pro daný údaj?

Pokud některá odpověď chybí, **PSČ ani sequence neměň**. Zachovej bezpečně doložený obsah, rozpor uveď v pracovních poznámkách a pokračuj pouze v činnostech, které nejsou na tomto neověřeném údaji závislé.


### 3.0.2 Úplná shoda sequence a groups

V `data/czechia/sequence.json` je pole `sequence` kanonickým úplným seznamem projektových PSČ. Pole `groups` slouží k členění a navigaci, nikoli k definování odlišného rozsahu. Každé PSČ z `sequence` musí být uvedeno právě jednou také v některé skupině `groups`; žádná skupina nesmí obsahovat kód mimo `sequence`. Před každým pracovním blokem a auditem porovnej počet, unikátnost i přesnou množinu obou seznamů. Musí platit: `count = sequence.length = součet položek groups`, bez duplicit a bez rozdílových položek. Při nesouladu práci s dotčeným rozsahem zastav a rozpor nahlas; neodvozuj, která část se má automaticky přepsat.

PSČ s vlastním doručovacím obvodem uvedená v `sequence` jsou plnohodnotnou součástí projektového rozsahu, i když leží mimo běžné číselné řady nebo jejich `localities` nejsou rozepsány. Prázdné `localities` není důkazem neexistence územního rozsahu. Konkrétní obce a lokality se při reworku zjišťují samostatně podle geografických pravidel tohoto standardu a důvěryhodných zdrojů; nesmějí se domýšlet ani přebírat od jiného PSČ.

---

## Závazné doplnění: geografické umístění faktů na mapě

Toto pravidlo upřesňuje a nahrazuje všechna starší ustanovení tohoto dokumentu, která by vedla k použití `location: null` pouze kvůli chybějící přesné souřadnici.

**Cíl: každé smysluplně lokalizovatelné faktum musí dostat použitelný mapový bod.** Nevyžadujeme geodetickou přesnost ani souřadnice přesně na centimetr. Přibližný, ale geograficky smysluplný bod je lepší než prázdná poloha a skrytý pin. `location: null` je až poslední možnost, nikoli běžná reakce na chybějící přesnou polohu.

Použij následující hierarchii:

1. **Konkrétní objekt nebo místo:** umísti pin na skutečnou polohu objektu (budova, památník, muzeum, most, nádraží apod.).
2. **Rozlehlá lokalita:** zvol reprezentativní bod uvnitř skutečného území lokality. U parku, lesa, areálu, přírodní rezervace, jezera nebo rozsáhlého komplexu nemusí být bod na jediné přesně určené atrakci; může ležet například na cestě, u vstupu, u vyhlídky nebo na jiném vhodném místě uvnitř území. Důležité je, aby pin ležel v lokalitě a rozumně ji zastupoval.
3. **Historický objekt nebo událost s neznámou přesnou polohou:** použij doloženou přibližnou polohu, pokud ji lze určit. Pokud ne, umísti orientační pin do centra historické obce nebo její veřejné orientační místo: náves, náměstí, radnici, obecní/městský úřad, případně informační centrum nebo jiný zásadní veřejný bod. Takový pin označ jako přibližný/historicky přibližný podle skutečné povahy nejistoty; nesmí předstírat, že historický objekt či událost stály přesně na tomto bodě.
4. **Historie obce nebo městské části:** použij její náves, hlavní náměstí, radnici, úřad městské části nebo jiné jasné veřejné centrum, které čtenáři pomůže místo na mapě najít.
5. **Doprava a infrastruktura:** použij příslušné nádraží, zastávku, terminál, dopravní uzel nebo konkrétní infrastrukturní bod, ke kterému se informace tematicky vztahuje.
6. **Další místní téma bez jediného bodu:** vyber nejvhodnější veřejný orientační bod v místě, se kterým je příběh skutečně spojen. Pokud je fakt o oblasti PSČ jako celku, lze použít `representative_point` podle pravidel pro `postal_area`.

### Přesnost, typ a zdroj

- Zvol `accuracy` podle skutečné přesnosti: `exact` jen pro ověřenou polohu konkrétního objektu; `approximate` pro přibližný bod; `area_representative` pro reprezentativní bod rozlehlé lokality; `historical_approximate` pro nejistou historickou polohu. Používej pouze hodnoty povolené aktuálním schématem.
- `name` má popisovat skutečný bod, na kterém pin leží (například název náměstí, radnice, zastávky nebo reprezentativního místa), nikoli předstírat přesné umístění samotného faktu.
- `type` vybírej podle skutečného fyzického typu zvoleného bodu a podle povoleného českého slovníku `location_types.json`/schématu.
- `source` musí podporovat polohu použitého bodu nebo umožnit její nezávislé ověření. U orientačního bodu stačí doložit existenci a polohu tohoto bodu; zdroj nemusí dokazovat, že se historická událost odehrála přesně tam. Obsahové zdroje nadále samostatně dokládají samotný příběh.
- Přibližný pin je orientační pomůcka pro mapu. Text faktu nesmí tvrdit, že se událost nebo objekt nacházely přesně v bodě, který byl zvolen pouze jako orientační náhrada.
- Nekopíruj automaticky `representative_point` ani `access_point`; použij je jen tehdy, když skutečně odpovídají zvolenému pravidlu pro daný fakt.
- Pokud lze určit alespoň smysluplnou oblast nebo veřejný orientační bod, `location` nesmí být `null` jen kvůli chybějící přesné poloze. `null` použij pouze tehdy, když nelze odpovědně určit ani konkrétní, přibližný, reprezentativní či orientační bod.

**Při tvorbě i reworku aktivně hledej použitelný bod pro mapu. Při auditu považuj `null` za nález, který je nutné zkusit vyřešit touto hierarchií; ponech jej pouze po doložení, proč není možné určit žádný smysluplný bod.**

## 30. Kulturní a historická hodnota nezávisí na přístupnosti ani vlastnictví

Toto pravidlo je závazné pro objevování, výběr, rework i audit všech českých PSČ.

- **Soukromé vlastnictví, uzavřený areál ani nepřístupnost veřejnosti nejsou důvodem k vynechání významného objektu nebo příběhu.** Historický zámek, vila, továrna, zahrada, technická památka, archeologická lokalita či jiný hodnotný objekt patří do obsahu, pokud splňuje běžná kritéria významu, doložitelnosti a geografického přiřazení.
- Nezaměňuj turistickou použitelnost s kulturní, historickou, architektonickou, technickou nebo místopisnou hodnotou. TRAVEL je mapa zajímavých míst a příběhů, nikoli pouze katalog právě otevřených atrakcí.
- U každého kandidáta posuzuj především identitu, význam, historii, jedinečnost, zdroje a polohu. Vlastnický režim, možnost vstupu, návštěvní hodiny ani aktuální provoz nesmějí fungovat jako automatický filtr pro zařazení.
- Informaci o přístupnosti nebo soukromém vlastnictví uváděj v textu pouze tehdy, pokud je sama důležitá pro pochopení příběhu nebo praktické bezpečnosti návštěvníka. Není povinnou součástí faktu a nesmí vytlačovat hodnotnější historický či kulturní obsah.
- **Nikdy nevyřazuj objekt jen proto, že je soukromý, veřejnosti nepřístupný, uzavřený nebo není možné si jej prohlédnout zevnitř.** Jeho exteriér, architektura, areál, krajinný kontext a doložené dějiny mohou být plnohodnotným mapovým obsahem.
- Nadále platí zákaz vstupu na cizí pozemek bez oprávnění a povinnost nevyzývat k neoprávněnému vstupu. To však nijak neomezuje samotné zařazení objektu do mapy a popis jeho hodnoty.

Rozhodovací otázka zní: **Je to skutečně zajímavé, významné a doložitelné místo nebo příběh, který chceme mít na mapě?** Nikoli: „Je tam otevřeno a pustí nás dovnitř?“
