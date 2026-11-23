# TRAVEL — AUSTRIA CONTENT STANDARD

## 1. Účel a závaznost standardu

Tento dokument stanovuje obsahová, geografická, výzkumná, redakční a jazyková pravidla pro rakouské záznamy TRAVEL / Europe Explorer.

Závazný kontrakt tvoří společně:
1. `schema.json` — struktura záznamu, povinná pole, datové typy a řízené hodnoty.
2. `COUNTRY_PROFILE.md` — rakouské poštovní, geografické, správní a zdrojové reálie.
3. `CONTENT_STANDARD.md` — společná metodika obsahu, rešerše, důkazů, geografie, redakce a překladů.
4. `prompt_rework.md` a `prompt_audit.md` — provozní pokyny pro aplikaci standardu.

Při rozporu mezi dokumenty práci v dotčené oblasti zastav a rozpor vyřeš. Nepřidávej svévolně nová pole, enum hodnoty, jazyky, stavy ani alternativní struktury záznamu.

Společná pravidla TRAVEL jsou pro všechny země stejná, pokud tento standard výslovně nestanoví místní odlišnost. Rakouské zvláštnosti se řeší v samostatných kapitolách a v `COUNTRY_PROFILE.md`; nesmějí měnit společný datový ani redakční kontrakt.

## 2. Základní filozofie TRAVEL

TRAVEL / Europe Explorer je kurátorský geografický průvodce místy a příběhy, nikoli poštovní adresář, správní registr ani katalog sestavený podle kvót.

Cílem je objevit a srozumitelně vysvětlit skutečně zajímavá místa, krajinu, přírodu, dědictví, historii, kulturu, architekturu, průmysl, vědu, osobnosti a místní příběhy.

Každý fakt musí splnit čtyři podmínky:
- **Pravdivost:** podstatná tvrzení jsou podložena důvěryhodnými zdroji.
- **Geografická relevance:** existuje obhajitelná fyzická nebo místopisná vazba k primárnímu PSČ záznamu.
- **Význam:** fakt přináší skutečnou místní, regionální, národní, kulturní, historickou, přírodní, vědeckou nebo návštěvnickou hodnotu.
- **Srozumitelnost:** čtenář, který Rakousko ani dané místo nezná, pochopí, o čem fakt je a proč je důležitý.

Kvalita má přednost před počtem faktů. Nevymýšlej obsah, nezveličuj běžné objekty, neopakuj stejný příběh v několika záznamech a nepřidávej výplň.

## 3. PSČ jako základní obsahová a geografická vrstva

**Jednotkou tvorby, ukládání, mapového zobrazení a redakčního třídění obsahu je jedno geograficky použitelné rakouské PSČ.** PSČ je projektová obsahová vrstva, do které přiřazujeme fakta. Není to správní jednotka a nesmí být zaměňováno za obec, okres, spolkovou zemi ani automaticky za přesný polygon.

Závazná pravidla:

- Každé produkční PSČ představuje jeden obsahový záznam. Kód uchovávej jako čtyřznakový řetězec.
- Jedno PSČ nerozděluj na samostatné záznamy podle ulic, budov, čísel domů nebo drobných adresních fragmentů.
- Do produkčního rozsahu patří pouze geografická PSČ s doložitelnou geografickou vazbou. Čistě poštovní, organizační, firemní, institucionální, P.O. BOX, pobočkové, třídicí a distribuční kódy bez vlastního geografického obsahu se nezařazují.
- Oprávněnost PSČ ověřuj podle odpovídajících oficiálních zdrojů; neodvozuj ji pouze z číselného vzoru, výsledku vyhledávání ani z toho, že kód používá určitá instituce.
- Zjisti, jaké obce, sídla, části sídel nebo adresní oblasti jsou s PSČ doložitelně spojeny. Nepředstírej přesnou hranici, pokud ji zdroje neposkytují.
- **PSČ je obsahová vrstva, nikoli administrativní hierarchie.** Obec, politický okres (Bezirk), statutární město, městský obvod nebo spolková země mohou sloužit jako pomocná metadata pro vyhledávání, filtrování a orientaci. Nejsou nadřazenou obsahovou jednotkou a neurčují, jaký příběh nebo fakt smí být do PSČ zařazen.
- Okresy a další správní celky eviduj a používej pouze v rozsahu odpovídajícím schématu a jejich účelu pro vyhledávání. Nevytvářej obsah po okresech, nepřesouvej fakta podle okresních hranic a nepovažuj okres za náhradu geografického ověření PSČ.
- Pokud PSČ pokrývá více sídel nebo obcí, zpracuj je v rámci jednoho PSČ záznamu. Nenech jedno sídlo převážit jen proto, že je správním centrem nebo sídlem pošty.
- Nezaměňuj adresu pošty, sídla instituce ani korespondenční adresu za geografický rozsah PSČ.
- Širší okolí lze zkoumat pro pochopení kontextu, ale samostatný fakt musí mít obhajitelnou primární geografickou vazbu k právě jednomu PSČ.
- Pokud oficiální zdroje dokládají pouze adresní body, lokality nebo vazby na obce, popisuj pouze tyto vztahy. Nevytvářej ani neodhaduj přesné polygonální hranice.

## 4. Povinná rešerše před psaním

Před tvorbou nebo reworkem faktů musí proběhnout strukturovaná rešerše konkrétního PSČ. Nezačínej náhodným sbíráním zajímavostí. Nejprve zjisti, co daná oblast skutečně představuje, čím je charakteristická a které příběhy vysvětlují její identitu.

### 4.1 Povinné oblasti prověření

Podle charakteru oblasti aktivně prověř:
- významné historické události a období;
- historická sídla, obce a zaniklá sídla;
- hrady, zámky, tvrze, pevnosti a opevnění;
- sakrální stavby, poutní místa a církevní historii;
- památky UNESCO a další významné formy ochrany dědictví;
- osobnosti a jejich konkrétní vazbu na místo;
- kulturní, umělecké a společenské dějiny;
- průmysl, výrobu, řemesla, značky a známé produkty;
- železnici, dopravu, techniku a významnou infrastrukturu;
- hornictví, energetiku a využívání přírodních zdrojů;
- vědu, výzkum, školství a významné instituce;
- vojenskou historii a vojenské objekty;
- přírodu, krajinu, geologii a přírodní unikáty;
- archeologii a neobvyklé historické nálezy;
- muzea, sbírky, galerie a návštěvnická místa;
- tradice, slavnosti, gastronomii a místní identitu;
- zaniklé provozy, kulturní paměť a příběhy známé určité generaci;
- překvapivé, doložené místní příběhy a skryté zajímavosti;
- další skutečnosti, jejichž význam přesahuje běžnou místní kuriozitu.

Prověř hlavní dominanty i méně známá místa, pokud jsou pro identitu oblasti důležitá. Nevynechávej významnou kapli, technickou památku, pomník, muzeum, historický objekt nebo archeologickou lokalitu jen proto, že se hůře objevuje v běžném vyhledávání.

### 4.2 Definující příběhy

Po rešerši nejprve sestav přehled hlavních příběhů oblasti. Urči, které z nich skutečně vysvětlují její identitu.

Orientační rozsah 3–5 příběhů není kvóta. Oblast může mít méně nebo více zásadních příběhů. Žádný důležitý příběh nesmí být vynechán kvůli číslu.

Významný příběh musí být zvážen k zařazení, i když:
- nejde o klasickou turistickou atrakci;
- souvisí s průmyslem, produktem nebo firmou;
- výroba či instituce už zanikla;
- je známý hlavně místním obyvatelům nebo určité generaci;
- je překvapivý, nikoli všeobecně slavný;
- záznam už obsahuje mnoho jiných faktů.

Významná průmyslová, technická nebo kulturní historie není výplň.

## 5. Výběr faktů a jejich pořadí

Neexistuje univerzální pořadí tematických kategorií platné pro všechna PSČ. O pořadí rozhoduje skutečná identita konkrétní oblasti, její význam a přínos pro čtenáře.

Před dokončením záznamu si odpověz:
- Čím je tato oblast skutečně známá?
- Co nejvíce formovalo její identitu?
- Proč sem lidé přijíždějí nebo proč si ji pamatují?
- Které příběhy nejlépe vysvětlují její význam?
- Které další skutečnosti přinášejí novou informační hodnotu?

Fakta řaď podle skutečného významu a relevance, nikoli podle pořadí rešerše, snadnosti nalezení zdroje nebo automatické preference přírody, historie, průmyslu, techniky, turismu či známých osobností.

Zařaď všechna fakta, která jsou relevantní, odlišná, dostatečně doložená a užitečná. Neodstraňuj kvalitní fakta jen kvůli preferované délce záznamu. Nepřidávej slabá fakta, aby záznam vypadal úplněji.

Nejdůležitější definující příběh nebo příběhy mají být zpravidla na začátku. Další fakta následují v sestupném pořadí významu. Skrytá zajímavost nesmí předběhnout zásadní příběh pouze proto, že je překvapivá.

Pořadí musí zůstat významově stejné ve všech jazykových verzích.

## 6. Geografický rozsah a primární přiřazení faktů k PSČ

PSČ je organizační a obsahová vrstva TRAVEL, nikoli nepřekročitelná hranice turistického příběhu. Každé faktum se ukládá právě do jednoho primárního PSČ záznamu, ale skutečná lokalita, příběh ani rozsah objektu nemusí přesně kopírovat hranici PSČ.

Závazná pravidla:

- Každé faktum musí mít jedno hlavní reálné místo nebo lokalizovatelný předmět a právě jedno primární PSČ přiřazení.
- PSČ neomezují, o jakém významném místě lze vyprávět. Rozsáhlý areál, park, most, stezka, liniová stavba, krajinný celek nebo jiný objekt může zasahovat do více PSČ.
- U takového objektu vyber jedno nejlépe obhajitelné primární PSČ podle polohy hlavní nebo reprezentativní části, hlavního vstupu, adresy či jiného nejsilnějšího geografického spojení. Zohledni skutečnou povahu objektu a dostupné oficiální podklady.
- Není nutné dokazovat, že celý objekt leží uvnitř jediného PSČ. Je však nutné transparentně a konzistentně určit jeho primární přiřazení.
- U objektů bez jednoznačné adresy použij oficiální vymezení, důvěryhodné mapové/geografické zdroje a obhajitelný reprezentativní bod. Nepředstírej přesnost, kterou zdroje neposkytují.
- Jakmile je fakt přiřazen k jednomu PSČ a toto přiřazení je doloženě nebo rozumně obhajitelné, považuje se za stabilní. Při dalších reworkech se znovu neotevírá jen proto, že objekt zasahuje také do jiného PSČ.
- Uzamčené přiřazení lze znovu otevřít při konkrétním novém důkazu, že původní volba byla chybná, nebo při zásadním doloženém rozporu. Samotný přesah, blízkost hranice či alternativní možné přiřazení nestačí.
- Každá fyzická atrakce nebo souvislý příběh má standardně jeden primární záznam. Neduplikuj stejný fakt v sousedních PSČ. Samostatné záznamy jsou přípustné pro skutečně odlišné, nezávisle významné příběhy.
- Širší okolí lze uvádět jako kontext. Samostatným faktem však může být pouze místo s primární vazbou k aktuálnímu PSČ.
- Pokud geografické přiřazení není dostatečně doložené, označ jej k ověření. PSČ nevymýšlej a nepřesouvej souřadnice na pohodlné místo.

Správní okresy, obce a spolkové země mohou pomoci při vyhledávání a kontrole kontextu. Jejich hranice však neurčují primární přiřazení faktu k PSČ.

## 7. Jedno reprezentativní místo pro každé PSČ

Každé PSČ musí mít právě jedno konkrétní reprezentativní místo v poli `representative_place`. Souřadnice v `representative_point` musí označovat stejné místo.

- Vyber jedno jasně identifikovatelné skutečné místo, které nejlépe reprezentuje dané PSČ.
- Neuváděj více alternativ, seznam atrakcí ani vágní obecnou oblast.
- Upřednostni konkrétní pojmenované místo, například náměstí, budovu, památník, muzeum, nádraží, parkový objekt nebo jiný přesně určitelný bod.
- Reprezentativní bod musí ukazovat přímo na vybrané místo, nikoli na jinou atrakci, centrum města nebo náhodný bod.
- Název a souřadnice musí tvořit konzistentní pár.
- Výběr založ na významu pro dané PSČ, místní relevanci, geografické správnosti a možnosti místo jednoznačně lokalizovat.
- Nevybírej známé místo v jiné části oblasti jen proto, že je slavnější.
- Pokud PSČ nemá známou atrakci, vyber jiný ověřitelný a přesně lokalizovatelný bod, který území skutečně reprezentuje. Nevymýšlej památku ani nepoužívej vágní název.
- Reprezentativní místo nemusí být turistickou atrakcí ani geometrickým středem.
- Pravidlo jednoho reprezentativního místa nijak neomezuje počet samostatných faktů. Každé faktum se posuzuje podle vlastních geografických pravidel.

## 8. Reprezentativní místo, přístupový bod a poloha faktu

Jde o tři rozdílné geografické role a nesmějí se zaměňovat.

### 8.1 Reprezentativní bod
Jeden orientační bod pro celé PSČ. Reprezentuje obsahovou oblast a pomáhá ji najít na mapě. Nemusí být turistickou atrakcí ani geometrickým středem. Není automatickou polohou konkrétního faktu.

### 8.2 Přístupový bod
Pomocný údaj pro příjezd nebo příchod. Pokud existuje jasný a ověřitelný praktický bod, uveď jej. Pokud nemá smysl nebo není spolehlivě ověřen, použij hodnotu povolenou schématem, typicky `null`. Nevymýšlej přístupový bod za každou cenu.

### 8.3 Poloha konkrétního faktu
- Poloha označuje skutečný objekt, místo, přírodní útvar nebo doloženou historickou lokalitu, o které fakt pojednává.
- Nepřebírej automaticky reprezentativní ani přístupový bod.
- U konkrétního objektu preferuj jeho vlastní ověřené souřadnice.
- U rozlehlého území zvol smysluplný reprezentativní bod uvnitř lokality.
- U faktu o oblasti PSČ jako celku lze použít reprezentativní bod PSČ pouze tehdy, pokud to odpovídá schématu a skutečnému významu faktu.
- U historické události s neznámou přesnou polohou použij doloženou přibližnou polohu nebo vhodný orientační bod a přesnost označ podle schématu. Nepředstírej, že se událost odehrála přesně na orientačním bodě.
- Strukturu polohy, přesnost, zdroj a povolené typy určuje `schema.json` a příslušný řízený slovník.

## 9. Sestavení příběhu před tvorbou seznamu faktů

Po rešerši nejprve uspořádej nejsilnější příběhy a teprve potom vytvářej jednotlivá fakta.

Pokud to charakter oblasti umožňuje, vytvoř souvislou místní narativní linku. Možná posloupnost:

**počátky → historický vývoj → významné osobnosti → průmysl a technika → kulturní význam → současné dědictví → příroda a skryté zajímavosti**

U průmyslové oblasti může být vhodná posloupnost: vznik podniku či značky → průmyslový rozvoj → výroba a technický přínos → lidé a společenský dopad → muzeum nebo současné dědictví.

Propojená fakta mohou mít větší hodnotu než několik nesouvisejících tipů. Nevytvářej však umělý příběh tam, kde žádný přirozený celek neexistuje.

## 10. Co má čtenář záznamu pochopit

Čtenář, který se virtuálně dostane do daného PSČ, by měl pochopit:
- jaký typ oblasti to je;
- čím je zajímavá nebo významná;
- co je zde historicky, kulturně, technicky nebo přírodně důležité;
- které konkrétní místní příběhy vysvětlují její identitu;
- co překvapivého nebo méně známého lze objevit;
- proč má smysl se o této oblasti dozvědět více.

Záznam má být užitečný nejen turistovi, ale podle tématu také pracovníkovi cestovního ruchu, regionálního rozvoje, památkové péče nebo místnímu badateli.

## Sdílený technický a redakční kontrakt TRAVEL — společná pravidla

Následující oddíly přebírají společné technické standardy TRAVEL. Jejich struktura, hodnoty, identifikátory a validační logika musí zůstat sjednocené s českým originálem. Rakouské úpravy se týkají pouze místních reálií, autorit a významu geografických údajů; nesmějí svévolně měnit sdílené technické kontrakty.

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

Kategorie jsou sdílené v rámci TRAVEL a Europe Exploreru. V Rakousku používej pouze ty, které se pro konkrétní fakt hodí; není nutné využít všechny kategorie.

---

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

### 19.3 Vysvětlování rakouských reálií

Pokud je název, instituce, tradice, historická událost nebo kulturní odkaz pro zahraničního čtenáře neznámý nebo nejednoznačný, vysvětli jej přirozeně při prvním relevantním výskytu v každém jazyce.

Vysvětlení má čtenáři sdělit, co daná věc je, jak funguje nebo proč je důležitá. Pouhý doslovný překlad názvu nestačí.

Příklady:
- U pojmů jako `Altstadt`, `historisches Zentrum`, `Ensemble` nebo `UNESCO-Welterbe` vysvětli, zda jde o historické městské jádro, chráněný soubor staveb nebo lokalitu světového dědictví; nepředpokládej, že samotný německý název zahraničnímu čtenáři vysvětlí jeho status.
- U rakouské tradice nebo svátku popiš stručně její podstatu, pokud ji zahraniční čtenář nemusí znát.
- U místního výrobku nebo průmyslového označení vysvětli, o jaký produkt či odvětví jde, pokud samotný název význam neprozrazuje.
- U historické instituce zachovej její oficiální název, ale přidej stručné vysvětlení její funkce.

Vysvětlení musí být:
- věcně správné;
- přiměřeně krátké;
- přirozené v cílovém jazyce;
- relevantní pro pochopení faktu.

Každý jazyk posuzuj samostatně. To, co je samozřejmé rakouskému čtenáři, nemusí být známé čtenáři německému, anglickému, španělskému, francouzskému nebo italskému. Cílem není pouze překlad, ale přirozené vysvětlení rakouských reálií, institucí, správních pojmů, tradic a historického kontextu. Rakouské vlastní názvy zachovávej a při prvním relevantním výskytu přidej stručné vysvětlení v cílovém jazyce.

### 19.4 Konzistence

- Zachovávej stejnou identitu míst a osob ve všech jazycích.
- Používej zavedený překlad názvu, pokud skutečně existuje a je běžný.
- Jinak ponech oficiální název a vysvětli jej v textu.
- Vysvětli pojem při prvním relevantním použití a zbytečně neopakuj dlouhou definici v dalších větách.
- Překlady reprezentativního místa musí označovat stejné jediné místo.

---

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

---

## 21. Fotografie a obrazové zdroje

Pokud záznam obsahuje fotografii, musí být její původ a podmínky použití dohledatelné.

- Nepoužívej fotografii, která zobrazuje jiné místo nebo jiný objekt.
- Nezaměňuj ilustrační fotografii za důkaz geografické polohy.
- Uveď zdroj, autora a licenci podle možností zdroje a struktury schématu.
- Nepředpokládej, že obrázek nalezený na internetu lze volně použít.
- Pokud není vhodná a důvěryhodně použitelná fotografie dostupná, je lepší ji neuvádět než použít zavádějící nebo právně problematický obrázek.

---

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

---

### 23.7 Technická validace
- Odpovídá JSON aktuálnímu `schema.json`?
- Neobsahuje nepovolená pole nebo hodnoty?
- Jsou ID jedinečná a správně navazující podle aktuálních pravidel?
- Jsou povinné údaje vyplněny?
- Jsou všechny jazykové verze strukturálně úplné?
- Jsou geografické a zdrojové údaje ve správných polích?

Záznam není hotový, pokud některá zásadní oblast zůstává neověřená. Nevyřešené problémy musí být jasně uvedeny; nesmějí se skrýt za označení „dokončeno“.

---

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

---

## 25. Produkční princip

Kombinace:

**`schema.json` + `CONTENT_STANDARD.md`**

je závazným základem všech rakouských TRAVEL záznamů.

Standard se mění pouze vědomou a verzovanou revizí. Nové požadavky se nesmějí do produkce zavádět neformálně ani pouze v jednotlivém promptu.

Cílem není „více informací“.

Cílem je:

**co nejvyšší hustota důvěryhodných, významných, geograficky správných a překvapivých informací bez balastu.**

Základní produkční postup:

**Nejprve ověř PSČ a území. Proveď rešerši. Najdi skutečné příběhy. Vyber to podstatné. Ověř geografickou vazbu. Napiš srozumitelná fakta. Lokalizuj do sedmi jazyků. Proveď závěrečný audit. Teprve potom publikuj.**


---

---

## 26. Řízený slovník typů míst u faktů

Rakouská část TRAVEL používá normalizovaný slovník typů míst se stejnými stabilními identifikátory jako odpovídající rakouské schéma. Slovník je veden samostatně v `data/austria/location_types.json`.

Závazná pravidla:

- Každé `facts[].location.type` musí používat jednu z hodnot definovaných v `data/austria/schema.json` a popsaných v `data/austria/location_types.json`.
- Identifikátory jsou stabilní anglické slugy v jednotném čísle.
- Typ popisuje druh místa, nikoli počet objektů. Použij například `historic_villa` pro jednu i více historických vil, `hill` pro jeden i více kopců a `pond` pro jeden i více rybníků.
- Množné varianty jako `historic_villas`, `hills` nebo `ponds` se nikdy nepoužívají.
- Významově odlišné typy neslučuj jen kvůli podobnému názvu. Nový typ přidej pouze tehdy, pokud existující hodnoty nedokážou přesně popsat místo.
- Do záznamů se ukládá stabilní ID, nikoli volný text. Česká označení typů jsou uvedena v samostatném slovníku, protože čeština je zdrojovým jazykem obsahu TRAVEL.
- Tento slovník popisuje `location.type`; nenahrazuje redakční `facts[].category`. Jde o dvě různé informace.
- Změna rakouského slovníku nesmí automaticky měnit německé schéma, německé záznamy ani jejich historické hodnoty.

U nových nebo přepracovaných faktů uveď `location` jako samostatnou polohu konkrétního objektu, pokud ji lze důvěryhodně určit. Pokud ji určit nelze, použij `null`. Nikdy nekopíruj do `location` souřadnice reprezentativního nebo přístupového bodu PSČ, pokud tyto body skutečně nejsou polohou samotného faktu.

---

## Závazné doplnění: geografické umístění faktů na mapě

Toto pravidlo upřesňuje a nahrazuje všechna starší ustanovení tohoto dokumentu, která by vedla k použití `location: null` pouze kvůli chybějící přesné souřadnici.

**Cíl: každé smysluplně lokalizovatelné faktum musí dostat použitelný mapový bod.** Nevyžadujeme geodetickou přesnost ani souřadnice přesně na centimetr. Přibližný, ale geograficky smysluplný bod je lepší než prázdná poloha a skrytý pin. `location: null` je až poslední možnost, nikoli běžná reakce na chybějící přesnou polohu.

Použij následující hierarchii:

1. **Konkrétní objekt nebo místo:** umísti pin na skutečnou polohu objektu (budova, památník, muzeum, most, nádraží apod.).
2. **Rozlehlá lokalita:** zvol reprezentativní bod uvnitř skutečného území lokality. U parku, lesa, areálu, přírodní rezervace, jezera nebo rozsáhlého komplexu nemusí být bod na jediné přesně určené atrakci; může ležet například na cestě, u vstupu, u vyhlídky nebo na jiném vhodném místě uvnitř území. Důležité je, aby pin ležel v lokalitě a rozumně ji zastupoval.
3. **Historický objekt nebo událost s neznámou přesnou polohou:** použij doloženou přibližnou polohu, pokud ji lze určit. Pokud ne, umísti orientační pin do centra historické obce nebo její veřejné orientační místo: náves, náměstí, radnici, Gemeindeamt / Magistrat, případně informační centrum nebo jiný zásadní veřejný bod. Takový pin označ jako přibližný/historicky přibližný podle skutečné povahy nejistoty; nesmí předstírat, že historický objekt či událost stály přesně na tomto bodě.
4. **Historie obce nebo městského obvodu:** použij její náves, hlavní náměstí, radnici, úřad městského obvodu nebo Bezirksamt nebo jiné jasné veřejné centrum, které čtenáři pomůže místo na mapě najít.
5. **Doprava a infrastruktura:** použij příslušné nádraží, zastávku, terminál, dopravní uzel nebo konkrétní infrastrukturní bod, ke kterému se informace tematicky vztahuje.
6. **Další místní téma bez jediného bodu:** vyber nejvhodnější veřejný orientační bod v místě, se kterým je příběh skutečně spojen. Pokud je fakt o oblasti PSČ jako celku, lze použít `representative_point` podle pravidel pro `postal_area`.

### Přesnost, typ a zdroj

- Zvol `accuracy` podle skutečné přesnosti: `exact` jen pro ověřenou polohu konkrétního objektu; `approximate` pro přibližný bod; `area_representative` pro reprezentativní bod rozlehlé lokality; `historical_approximate` pro nejistou historickou polohu. Používej pouze hodnoty povolené aktuálním schématem.
- `name` má popisovat skutečný bod, na kterém pin leží (například název náměstí, radnice, zastávky nebo reprezentativního místa), nikoli předstírat přesné umístění samotného faktu.
- `type` vybírej podle skutečného fyzického typu zvoleného bodu a podle povoleného rakouského slovníku `location_types.json`/schématu.
- `source` musí podporovat polohu použitého bodu nebo umožnit její nezávislé ověření. U orientačního bodu stačí doložit existenci a polohu tohoto bodu; zdroj nemusí dokazovat, že se historická událost odehrála přesně tam. Obsahové zdroje nadále samostatně dokládají samotný příběh.
- Přibližný pin je orientační pomůcka pro mapu. Text faktu nesmí tvrdit, že se událost nebo objekt nacházely přesně v bodě, který byl zvolen pouze jako orientační náhrada.
- Nekopíruj automaticky `representative_point` ani `access_point`; použij je jen tehdy, když skutečně odpovídají zvolenému pravidlu pro daný fakt.
- Pokud lze určit alespoň smysluplnou oblast nebo veřejný orientační bod, `location` nesmí být `null` jen kvůli chybějící přesné poloze. `null` použij pouze tehdy, když nelze odpovědně určit ani konkrétní, přibližný, reprezentativní či orientační bod.

**Při tvorbě i reworku aktivně hledej použitelný bod pro mapu. Při auditu považuj `null` za nález, který je nutné zkusit vyřešit touto hierarchií; ponech jej pouze po doložení, proč není možné určit žádný smysluplný bod.**



## 11. Obsahové kategorie a mapová klasifikace

Obsahové kategorie, mapové kategorie, priority faktů, identifikátory a technické hodnoty se řídí společnými kapitolami níže a aktuálním `schema.json`. Kategorie jsou redakční a mapové klasifikace jednotlivých faktů; nenahrazují geografické přiřazení k PSČ.

## 27. Příroda a krajina

Příroda je plnohodnotné téma TRAVEL, nikoli výplň.

U každého PSČ aktivně prověř, zda se v jeho území nachází nebo s ním přímo souvisí:
- národní park, chráněná krajina nebo přírodní rezervace;
- významný les, mokřad nebo biotop;
- řeka, jezero, vodopád, pramen nebo jiný vodní prvek;
- hora, údolí, skalní útvar, jeskyně nebo geologická lokalita;
- výjimečný strom, přírodní památka či jiný pozoruhodný prvek.

Nestačí pouze vyjmenovat chráněné území. Vysvětli, čím je významné a co jej odlišuje. Pokud v daném PSČ není přírodní prvek se skutečnou informační hodnotou, nevymýšlej jej ani nepřidávej obecný popis krajiny.

## 28. Historie, průmysl, technika a kulturní paměť

Neomezuj obsah na hrady, zámky a sakrální stavby. Podle charakteru oblasti prověř také:
- průmyslové podniky, továrny a výrobní tradice;
- řemesla, sklářství, textilnictví, keramiku a další místní výrobu;
- potravinářství, známé produkty a značky;
- strojírenství, automobilový, chemický a další průmysl;
- železniční, silniční, leteckou a vodní dopravu;
- hornictví, energetiku a těžbu;
- vědu, technické vynálezy a výzkum;
- významné školy a instituce;
- vojenskou historii;
- zaniklé provozy, areály a kulturní paměť;
- místní tradice a příběhy spojené s konkrétní generací.

Zaniklá výroba nebo instituce může být významným faktem, pokud je její historická role dobře doložena a skutečně souvisí s místem. Rozlišuj historický fakt od současného stavu. Zaniklý provoz nepopisuj jako aktivní a plánovanou událost nepředstavuj jako uskutečněnou.

## 29. Skryté zajímavosti

Aktivně hledej fakta, která vyvolávají reakci: „To jsem vůbec nevěděl — a jsem rád, že to teď vím.“

Skrytá zajímavost musí být konkrétní, ověřitelná, dostatečně neobvyklá nebo užitečná, skutečně spojená s daným PSČ a odlišná od ostatních faktů.

Obecné tvrzení typu „v obci stojí starý kostel“ nestačí bez dalšího významu, zvláštnosti nebo kontextu. Nevyráběj skryté zajímavosti z nepodstatných detailů. Pokud žádná kvalitní skrytá zajímavost neexistuje, nezařazuj ji.

## 30. Širší okolí a kontext

Širší okolí lze zkoumat, abychom pochopili historii, geografii a souvislosti daného PSČ. Výzkumný rozsah může být širší než výsledný geografický rozsah záznamu.

- Atrakce v sousedním PSČ nesmí být samostatným faktem ani mapovým bodem aktuálního PSČ.
- Okolní obec, okres, spolkovou zemi nebo lokalitu lze zmínit v textu jako kontext, pokud je to důležité pro pochopení příběhu.
- Kontext nesmí vzbudit dojem, že externí místo patří do aktuálního PSČ.
- Nepřebírej souřadnice externího místa jako polohu faktu v aktuálním PSČ.
- Jednu atrakci nebo souvislý příběh neduplikuj ve více PSČ.
- Správní celek může být užitečný pro vyhledávání a filtrování, nikoli jako náhrada geografického přiřazení faktu.

## 31. Zdroje a důkazní standard

Každé faktum musí být pravdivé, konkrétní, lokálně relevantní a doložitelné.

Preferované pořadí zdrojů:
1. odpovědné oficiální instituce a primární zdroje;
2. obce, města, regionální a státní instituce a jejich oficiální organizace;
3. státní a regionální archivy, muzea, galerie a památkové instituce;
4. univerzity, vědecké instituce a odborné organizace;
5. správci památek, provozovatelé a vlastníci lokalit;
6. odborné publikace a specializované zdroje;
7. kvalitní žurnalistika;
8. důvěryhodné regionální a místní zdroje.

Pravidla:
- Preferuj primární zdroj, pokud existuje.
- Jeden kvalitní primární zdroj je lepší než několik slabých kopií stejného tvrzení.
- Zdroj musí podporovat konkrétní tvrzení, ne pouze obecně zmiňovat oblast nebo název objektu.
- U historických a odborných tvrzení ověř kontext, datum a význam.
- U současných informací ověř aktuálnost.
- Nepřebírej automaticky texty z turistických katalogů, agregátorů nebo jiných databází.
- Nikdy nevymýšlej fakta, citace, názvy institucí ani URL.
- Pokud zdroje uvádějí rozdílné údaje, rozdíl prověř a případně jej transparentně popiš.
- U souřadnic a geografického přiřazení používej zdroje, které skutečně podporují polohu; zdroj obsahu nemusí automaticky dokazovat geografickou příslušnost k PSČ.
- Rozlišuj doloženou historii, zaznamenanou tradici a folklor. Pověst nikdy nepodávej jako prokázanou historickou událost.
- Konkrétní rakouskou hierarchii autorit a zdrojů stanoví `COUNTRY_PROFILE.md`.

## 32. Psaní faktů

Každé faktum musí přinášet jednu jasnou, smysluplnou informaci nebo souvislý příběh.

Dobré faktum:
- má konkrétní předmět;
- vysvětluje, co se stalo, co zde je nebo proč je místo důležité;
- obsahuje potřebný historický či kulturní kontext;
- uvádí důležité osoby, data a názvy, pokud jsou relevantní;
- vysvětluje význam, nikoli pouze existenci objektu;
- je srozumitelné i čtenáři, který místo nezná.

Vyhýbej se obecným turistickým frázím, prázdným superlativům, opakování stejné informace, dlouhým odbočkám bez vztahu k tématu, neověřeným legendám vydávaným za historii, spekulacím a reklamnímu tónu.

Pokud je příběh založen na legendě, pověsti nebo tradovaném vyprávění, jasně jej tak označ. Nezaměňuj pověst za prokázanou událost.

## 33. Povinný závěrečný audit

Každý nový nebo přepracovaný záznam musí projít kontrolou všech následujících oblastí.

### 33.1 PSČ a geografická správnost
- Je PSČ potvrzeno v projektovém inventáři a odpovídajících oficiálních zdrojích?
- Je doloženo, že jde o geograficky použitelné PSČ, nikoli pouze o organizační nebo zvláštní poštovní kód?
- Je geografická vazba každého faktu k primárnímu PSČ obhajitelná?
- Nezaměňuje se PSČ za okres, obec, spolkovou zemi, sídlo pošty nebo korespondenční adresu?
- Jsou správní údaje používány pouze jako pomocná metadata pro vyhledávání a filtrování?
- Jsou rozpory a nejistoty zaznamenány a vyřešeny nebo označeny k ověření?

### 33.2 Reprezentativní a přístupové údaje
- Je vybráno právě jedno reprezentativní místo?
- Odpovídají jeho souřadnice přesně tomuto místu?
- Je místo skutečně spojeno s daným PSČ?
- Je přístupový bod ověřený a prakticky použitelný?
- Nejsou reprezentativní bod, přístupový bod a poloha faktu zaměněny?

### 33.3 Obsah a rešerše
- Proběhla strukturovaná rešerše všech relevantních tematických oblastí?
- Byly určeny hlavní příběhy místa?
- Nechybí významná památka, instituce, průmyslový nebo kulturní příběh?
- Byla prověřena příroda a krajina?
- Jsou skryté zajímavosti skutečně neobvyklé a doložené?
- Odpovídá pořadí faktů skutečné důležitosti místa?
- Neobsahuje záznam výplň nebo uměle vytvořené kvóty?

### 33.4 Geografická správnost faktů
- Má každé faktum jedno primární PSČ přiřazení?
- Je jeho hlavní poloha konkrétní a ověřená nebo odpovídajícím způsobem označená jako přibližná?
- Nejsou samostatná fakta převzata ze sousedních PSČ?
- Nejsou atrakce nebo příběhy duplicitní v jiných záznamech?
- Je širší okolí používáno pouze jako kontext, pokud leží mimo dané PSČ?

### 33.5 Zdroje
- Podporují zdroje skutečně uvedená tvrzení?
- Jsou důležité údaje ověřeny z kvalitních, přednostně primárních zdrojů?
- Fungují URL a vedou na relevantní obsah?
- Jsou rozpory a nejistoty vyřešeny nebo zaznamenány?
- Jsou geografické polohy doloženy samostatně, pokud to vyžaduje schéma?

### 33.6 Jazyky
- Obsahuje všech sedm jazyků stejná ID faktů?
- Je pořadí faktů ve všech jazycích stejné?
- Zachovávají překlady všechna fakta, data, jména a souvislosti?
- Zní každý jazyk přirozeně?
- Jsou místní reálie a neznámé pojmy vysvětleny zahraničním čtenářům?
- Neobsahuje žádná jazyková verze nové nebo nepodložené informace?

### 33.7 Technická validace
- Odpovídá JSON aktuálnímu `schema.json`?
- Neobsahuje nepovolená pole nebo hodnoty?
- Jsou ID jedinečná a správně navazující podle aktuálních pravidel?
- Jsou povinné údaje vyplněny?
- Jsou všechny jazykové verze strukturálně úplné?
- Jsou geografické a zdrojové údaje ve správných polích?

Záznam není hotový, pokud některá zásadní oblast zůstává neověřená. Nevyřešené problémy musí být jasně uvedeny; nesmějí se skrýt za označení „dokončeno“.

## 34. Postup při nedostupných referenčních datech

Nedostupný, prázdný nebo neúplný lokální referenční soubor není důvodem zastavit rework ani opakovat bezúčelně stejný technický problém.

1. Nejprve zkus příslušný lokální referenční soubor a dostupné alternativní formáty, například JSON, CSV nebo manifest.
2. Pokud údaj stále chybí, ověř jej přímo na oficiálním webu instituce, která za daný údaj odpovídá. Konkrétní rakouské autority a jejich kompetence stanoví `COUNTRY_PROFILE.md`.
3. Rozlišuj účel jednotlivých zdrojů. Poštovní seznam, evidence adresních bodů, správní registr a geografická data nejsou zaměnitelné.
4. U každého ověřovaného údaje zaznamenej konkrétní oficiální zdroj/URL a datum ověření. Pokud zdroj uvádí platnost nebo referenční datum, zaznamenej je odděleně od data kontroly.
5. Náhradní soubor používej pouze pro pole, která skutečně obsahuje. Chybějící hodnoty neodhaduj ani nepřebírej z jiného PSČ.
6. Pokud údaj nelze potvrdit, označ jej v pracovních poznámkách jako neověřený, uveď co přesně chybí a pokračuj v ostatní bezpečné práci. Neoznačuj celý záznam za chybný kvůli jednomu pomocnému údaji.
7. Stejný zdrojový problém a jeho vyřešení nebo stav nevyřešení přenes do navazujícího pracovního okna. Neopakuj bezúčelně stejné pokusy.

## 35. Povinná turistická, památková a místní objevitelská rešerše

Tato kapitola rozšiřuje základní rešerši. Nenahrazuje pravidla významu, kvality, geografického přiřazení ani technické validace.

### 35.1 Cíl
U každého PSČ zjisti, co by návštěvník v dané konkrétní oblasti mohl chtít vidět, navštívit, zažít, poznat nebo objevit. Pokryj známé cíle i méně nápadné místní příběhy, památky, přírodu a neobvyklé doložené zajímavosti. Nevytvářej z každého PSČ turistickou destinaci a nevynucuj minimální počet faktů.

### 35.2 Povinný tematický kontrolní seznam
Výslovně prověř každou relevantní skupinu:
1. Hrady, zámky, historická sídla, pevnosti, zříceniny a opevnění.
2. Sakrální dědictví: kostely, kaple, kláštery, poutní místa, synagogy, mešity a sakrální umění.
3. Pomníky a veřejné umění: sochy, kašny, památníky, obelisky, historické mezníky a významné instalace.
4. Historická sídla a architektura: historická centra, náměstí, brány, radnice, ulice, mosty, hradby, významné budovy a architektonické soubory včetně moderní architektury.
5. Muzea, galerie a sbírky: historická, archeologická, umělecká, technická, průmyslová, dopravní, železniční, letecká, vojenská a přírodovědná muzea; skanzeny, pamětní a dokumentační centra.
6. Archeologie a pravěk: naleziště, mohyly, hradiště, římské pozůstatky, archeologické krajiny a podzemní dědictví.
7. Chráněná příroda: národní parky, rezervace, přírodní památky, biosférické rezervace, mokřady, rašeliniště a pralesy.
8. Geologie a krajinné útvary: skalní oblasti, jeskyně, kras, soutěsky, kaňony, sopečné a ledovcové útvary, zkameněliny.
9. Hory, vyhlídky a trasy: vrcholy, rozhledny, panoramata, horské chaty, naučné stezky, významné pěší/cyklistické trasy a lanovky.
10. Voda a vodní dědictví: vodopády, jezera, řeky, soutoky, prameny, přehrady, historické rybníky, kanály, mlýny a významná vodohospodářská díla.
11. Parky, zahrady a živé sbírky: botanické zahrady, arboreta, historické zahrady, parky, zoologické zahrady, safari/obory, akvária a motýlí domy.
12. Technické, průmyslové a dopravní dědictví: doly, lomy, továrny, hutě, elektrárny, mlýny, historické železnice, nádraží, mosty, tunely, viadukty a technická díla.
13. Paměťová místa a historické události: bojiště, revoluce a povstání, bývalé věznice, památníky totalitních režimů a místa zásadních událostí.
14. Turistické atrakce a zážitky: zpřístupněné jeskyně a podzemí, historické lázně, termální areály, vyhlídkové železnice, lanovky, lodní výlety, zábavní a tematické parky, aquaparky a významné stadiony.
15. UNESCO a mimořádné dědictví: kulturní a přírodní památky, kulturní krajiny, přeshraniční dědictví, historická města a obdobná formální ocenění.
16. Místní příběhy a neobvyklé zajímavosti: doložené pověsti, neobvyklé události, kuriózní zvyky, rekordy, neobvyklé objekty a příběhy vysvětlující identitu oblasti.
17. Osobnosti, film, literatura, hudba a kultura: domy a působiště osobností, filmové lokace, literární místa, hudební historie, divadla, operní domy, koncertní sály a kulturní instituce.
18. Tradice, řemesla a gastronomické dědictví: regionální zvyky, tradiční řemesla, historické trhy, slavnosti, tradiční výroba, pivovarnictví a vinařství s doloženou historickou nebo návštěvnickou hodnotou.
19. Trasy a návštěvnický kontext: poutní, kulturní, průmyslové, dopravní, cyklistické a turistické trasy a další prvky, jejichž relevantní část má doložitelnou vazbu k danému PSČ.

Seznam je záměrně široký. Zařazuj pouze konkrétní, významné a geograficky správně přiřaditelné objekty či příběhy. Dočasné akce, běžná zařízení, obecná regionální témata a podniky se automaticky nestávají trvalými fakty PSČ.

### 35.3 Vyloučení
- Běžné hřbitovy, jednotlivé hroby a obvyklá pohřebiště nezařazuj jako turistická fakta. Výjimkou je mimořádný doložený památkový či návštěvnický areál. Samotný hrob známé osobnosti nestačí.
- Současné firmy, obchody, restaurace, hotely a běžné provozovny nezařazuj jen proto, že zde působí. Podnikové téma lze zahrnout jako doložené historické, technické, kulturní či průmyslové dědictví, veřejné muzeum/návštěvnické centrum nebo samostatně hodnotný místní příběh.
- Běžný program akcí není trvalou atrakcí. Opakovaná tradice nebo historicky významná událost může být zahrnuta, je-li doložena její místní důležitost.
- Trasu nezařazuj jako bodové faktum, pokud její poloha nemůže být smysluplně reprezentována podle stávajícího schématu.
- Stručná kontextová zmínka zůstává možná, pokud je důležitá pro jiné doložené faktum.

### 35.4 Povinná dvoufázová rešerše
**Fáze 1 — široké objevování:** urči oblast PSČ podle stávajících pravidel; hledej v oficiálních turistických, památkových, muzejních, přírodovědných, obecních, regionálních a odborných zdrojích; používej PSČ, sídla, místní a historické názvy, krajinné celky a názvy památek; objevuj hlavní atrakce a příběhy bez omezení starým záznamem či prvními obecnými výsledky; eviduj kandidáty, polohu a zdroje.

**Fáze 2 — audit tematických mezer:** projdi každou relevantní skupinu v 20.2 jednotlivě; cíleně hledej zejména muzea a specializované sbírky, vyhlídky, zahrady, zoo/akvária, jeskyně a podzemí, technické dědictví, paměťová místa, místní pověsti, historické události a neobvyklé zajímavosti; porovnej výsledky se starým záznamem a první fází; identifikuj opomenutí, duplicity, slabé kandidáty a fakta patřící jinam. Obecné vyhledávání samo o sobě neznamená, že byla kategorie prověřena.

Obě fáze jsou povinné před dokončením běžného obsahového reworku.

### 35.5 Strategie zdrojů
Přednost mají odpovědné primární zdroje: oficiální turistické organizace, památkové registry a orgány památkové péče, oficiální weby muzeí, galerií, parků, zoo, akvárií a atrakcí, správy chráněných území, instituce ochrany přírody a geologie, archivy, muzea, univerzity a odborné instituce. Turistické portály a komunitní zdroje mohou objevit kandidáta, ale důležitá fakta, přesnou polohu a historii ověřuj kvalitnějšími zdroji, jsou-li dostupné. Existence atrakce sama o sobě nedokazuje její příslušnost k PSČ.

### 35.6 Ověření a přiřazení k PSČ
U každého kandidáta ověř identitu, význam, faktické podrobnosti a přesnou primární polohu. Dolož příslušnost k danému PSČ podle pravidel v kapitolách 3 a 6; kontroluj duplicity a rozlišuj fyzické místo od plošného příběhu, trasy či události. Širší rešerše nerozšiřuje geografický rozsah faktů. Místo patřící primárně do jiného PSČ sem nezařazuj; nejasné přiřazení označ k ověření, nikdy nehádej.

### 35.7 Stav pokrytí a podmínka dokončení
V pracovních poznámkách, nikoli v produkčním JSON, eviduj u každé skupiny jeden stav: **nalezeno a ověřeno**, **prověřeno — bez relevantního výsledku**, nebo **nevyřešeno**. PSČ je rešeršně dokončeno pouze tehdy, když jsou prověřeny všechny relevantní skupiny a nezůstává podstatná nevyřešená otázka. „Bez relevantního výsledku“ je platný výsledek; vymýšlení faktů a plnění kvót je zakázáno. Tyto stavy nepřidávej do JSON bez schválené změny schématu.

## 36. Mezinárodní srozumitelnost a kulturní kontext

Každý fakt musí být srozumitelný zahraničnímu čtenáři, který nemusel nikdy navštívit Rakousko a nemusí znát jeho historii, kulturu, instituce, tradice ani místní pojmy. Správný překlad nestačí; text musí předat také význam a kontext potřebný k pochopení.

- Při prvním smysluplném výskytu vysvětli neznámé kulturní, historické, institucionální, politické, náboženské, společenské a správní pojmy.
- Zachovávej správné vlastní názvy, ale podle potřeby uveď, co označují a proč jsou důležité.
- Vysvětluj rakouské instituce, historické události, tradice a specifické pojmy, pokud by jejich význam nebyl zahraničnímu čtenáři zřejmý.
- U historických událostí doplň stručný kontext toho, co se stalo, kdy nebo proč je událost důležitá.
- Nenechávej bez vysvětlení podstatné zkratky, místní správní označení, nářeční výrazy ani kulturně specifické odkazy.
- Požadavek uplatni samostatně v cs, de, en, es, fr, it a nl. Žádná jazyková verze nesmí spoléhat na vysvětlení obsažené pouze v jiném jazyce.
- Vysvětlení začleň přirozeně a přiměřeně. Nevytvářej z každého faktu encyklopedické heslo a nepřidávej nepodstatné pozadí.
- Nevymýšlej kontext, interpretace ani význam. Vysvětlující tvrzení musí být podložena důvěryhodnými zdroji.

U každého faktu a v každém jazyce ověř:
1. Pozná čtenář bez předchozích znalostí, o jaký objekt či téma jde?
2. Jsou neznámé místní pojmy a vlastní názvy podle potřeby vysvětleny?
3. Obsahuje text historický, kulturní či institucionální kontext nutný k pochopení?
4. Pochopí čtenář, proč je fakt místně nebo historicky významný?
5. Je každé vysvětlení přesné, stručné a podložené?

## 37. Kulturní a historická hodnota nezávisí na přístupnosti ani vlastnictví

Soukromé vlastnictví, uzavřený areál ani nepřístupnost veřejnosti nejsou důvodem k vynechání významného objektu nebo příběhu.

- Nezaměňuj turistickou použitelnost s kulturní, historickou, architektonickou, technickou nebo místopisnou hodnotou. TRAVEL je mapa zajímavých míst a příběhů, nikoli pouze katalog právě otevřených atrakcí.
- U kandidáta posuzuj především identitu, význam, historii, jedinečnost, zdroje a polohu. Vlastnický režim, možnost vstupu, návštěvní hodiny ani aktuální provoz nesmějí fungovat jako automatický filtr pro zařazení.
- Informaci o přístupnosti nebo soukromém vlastnictví uváděj pouze tehdy, pokud je důležitá pro pochopení příběhu nebo praktickou bezpečnost návštěvníka.
- Nikdy nevyřazuj objekt jen proto, že je soukromý, veřejnosti nepřístupný, uzavřený nebo není možné si jej prohlédnout zevnitř. Jeho exteriér, architektura, areál, krajinný kontext a doložené dějiny mohou být plnohodnotným mapovým obsahem.
- Nadále platí zákaz vstupu na cizí pozemek bez oprávnění a povinnost nevyzývat k neoprávněnému vstupu.

Rozhodovací otázka zní: **Je to skutečně zajímavé, významné a doložitelné místo nebo příběh, který chceme mít na mapě?** Nikoli: „Je tam otevřeno a pustí nás dovnitř?“

