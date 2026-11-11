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

## 3. Oficiální autorita pro česká PSČ — závazné pravidlo

Pro českou část TRAVEL je **Český statistický úřad (ČSÚ) hlavní a rozhodující autoritou projektu pro výběr PSČ a jeho přiřazení k území**.

Toto pravidlo je závazné. Nejde pouze o preferenci zdroje.

### 3.1 Rozhodující datové zdroje

- Aktuální číselník ČSÚ PSČ, kódový seznam **0028**, je rozhodujícím podkladem pro platnost, výběr a oficiální označení PSČ.
- Relevantní data Registru sčítacích obvodů a budov (RSO), zejména adresní údaje, se používají k ověření vazby adres na území, pokud jsou pro daný účel dostupná.
- Další oficiální geografické a územní datové výstupy ČSÚ se používají podle jejich skutečného obsahu, metodiky, územního rozlišení a data vydání.
- U každého ověření musí být dohledatelné, jaký konkrétní soubor, číselník nebo vydání ČSÚ bylo použito.

### 3.2 Pravidla při rozporu zdrojů

- Pokud vyhledávač, mapa, katalog, firemní profil, poštovní směrovací služba nebo jiný sekundární zdroj uvádí jiné PSČ než rozhodující data ČSÚ, nepřebírej automaticky hodnotu sekundárního zdroje.
- Změna pošty, která zásilky prakticky obsluhuje nebo doručuje, sama o sobě nemění projektovou identitu PSČ podle ČSÚ.
- Provozní spádovost pošty, doručovací trasa a územní přiřazení PSČ jsou odlišné informace. Nesmějí se zaměňovat.
- Pokud si zdroje odporují, ponech projektovou hodnotu podle ČSÚ a zaznamenej rozpor k prověření.
- Sekundární zdroj může pomoci vysvětlit rozpor, ale sám o sobě nepřebíjí ČSÚ.

### 3.3 Geografická data ČSÚ

Používej oficiální geografická data ČSÚ, pokud jsou pro danou otázku relevantní a dostupná. Vždy respektuj, co konkrétní datová sada skutečně reprezentuje.

- Nezaměňuj statistické nebo dominantní přiřazení území k PSČ za přesnou hranici doručovacího obvodu, pokud to metodika zdroje výslovně nepotvrzuje.
- Nepřisuzuj datové sadě přesnost ani význam, který její dokumentace neuvádí.
- Pokud ČSÚ poskytuje pro daný účel přesnější adresní nebo územní údaj, upřednostni jej před hrubším statistickým vyjádřením.
- Nevytvářej vlastní náhradní hranice a nepřebírej neověřené hranice z komerčních map jako autoritativní data.
- Německý zákaz polygonových kontrol se na českou část projektu automaticky nevztahuje. Česká metodika vychází z dostupných oficiálních dat ČSÚ a z jejich doložené metodiky.

### 3.4 Výjimky a evidence

Odchylka od hodnoty ČSÚ je možná pouze po zdokumentovaném přezkoumání, které prokáže, že:
- záznam ČSÚ je chybný;
- údaj je pro definovaný účel projektu zastaralý; nebo
- novější oficiální vydání ČSÚ původní údaj nahradilo.

Každá odchylka musí obsahovat důkazy, důvod rozhodnutí, datum a identifikaci odpovědné kontroly a seznam dotčených záznamů. Konflikt se nikdy nesmí vyřešit potichu.

V záznamu uchovávej dostupnou provenienci: autoritu, název datové sady nebo číselníku, vydání či datum získání a případnou poznámku o rozporu nebo rozhodnutí. Konkrétní názvy a datové typy polí určuje `schema.json`.

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

**Každé faktum patří právě do jednoho PSČ a jeho hlavní místo musí mít doložitelnou vazbu na území tohoto PSČ.**

PSČ je základní geografickou jednotkou obsahu TRAVEL. Nestačí, že se objekt nachází ve stejném městě, okrese nebo kraji.

Závazná pravidla:

- Každé faktum musí mít jedno hlavní reálné místo nebo lokalizovatelný předmět, který skutečně souvisí s daným PSČ.
- Nepřiřazuj faktum k PSČ jen proto, že je objekt poblíž, ve stejné obci, městské části, okrese nebo kraji.
- Každé faktum nebo fyzická atrakce může být součástí pouze jednoho PSČ záznamu.
- Neduplikuj stejnou atrakci, objekt, událost ani příběh v sousedních PSČ.
- Pokud objekt nebo příběh zasahuje do více území, vyber PSČ podle jasné a doložené primární místní vazby. Pokud ji nelze určit, označ případ k redakčnímu posouzení.
- Místo z jiného PSČ lze stručně zmínit jako kontext, pokud je to pro pochopení faktu opravdu důležité. Nesmí se však stát samostatným faktem, mapovým bodem ani reprezentativním místem aktuálního PSČ.
- Rešerše může zkoumat širší okolí. Širší rešeršní oblast však nerozšiřuje geografický rozsah výsledných faktů.
- Pokud geografickou vazbu nelze spolehlivě ověřit, faktum nepublikuj jako potvrzené. Nehádej, nepřesouvej souřadnice na vhodnější místo a nejistotu nezamlčuj.

### 6.1 Česká územní realita

Používej správné české administrativní a geografické pojmy podle skutečné situace:

- obec;
- město;
- městská část;
- část obce;
- městský obvod, pokud existuje;
- okres;
- kraj;
- katastrální území, pokud je pro vysvětlení vazby relevantní.

Tyto úrovně nejsou zaměnitelné. Nepoužívej německé správní členění ani nevytvářej umělou hierarchii.

U statutárních měst a Prahy rozlišuj příslušné městské části nebo obvody podle oficiálního členění. U menších sídel rozlišuj obec a část obce. Pokud se územní pojmy v běžném jazyce liší od oficiálního názvu, použij přesný oficiální údaj a případně jej přirozeně vysvětli.

---

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

Jde o tři rozdílné geografické role. Nesmějí se zaměňovat.

### 8.1 Reprezentativní bod

- Jeden bod pro celé PSČ.
- Označuje vybrané reprezentativní místo.
- Není automaticky středem PSČ ani přístupovým bodem.
- Není náhradou za polohu jednotlivých faktů.

### 8.2 Přístupový bod

- Jeden praktický bod pro příchod nebo příjezd do oblasti PSČ.
- Může jím být ověřené nádraží, zastávka, vstup, veřejný přístup nebo jiné vhodné místo.
- Nemusí být totožný s reprezentativním místem.
- Není náhradou za polohu konkrétního faktu.

### 8.3 Poloha konkrétního faktu

- Každé faktum má vlastní hlavní geografickou polohu, pokud ji lze spolehlivě doložit.
- Poloha označuje skutečné místo, objekt, přírodní útvar nebo historicky doloženou lokalitu, o níž faktum pojednává.
- Nepřebírej automaticky souřadnice reprezentativního nebo přístupového bodu.
- Pokud faktum zmiňuje více míst, vyber hlavní místo, o kterém faktum skutečně je. Nevytvářej umělý střed mezi místy.
- Pokud nelze určit obhajitelnou polohu, ponech ji jako nevyřešenou podle možností schématu. Nevymýšlej souřadnice.

Konkrétní názvy polí, strukturu objektů, typy lokalit, přesnost a povinné zdroje určuje `schema.json`. Tento standard stanovuje jejich geografický význam. Strukturální rozšíření schématu musí být provedeno a ověřeno v samostatném kroku.

---

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
- `history` — historické události, období a vývoj místa;
- `culture_and_industry` — kultura, tradice, průmysl, řemesla, výroba, značky a produkty;
- `people` — osobnosti s doloženou vazbou na místo;
- `geography_and_context` — geografické a územní souvislosti;
- `tourism_and_surroundings` — návštěvnická místa a turistické souvislosti, pokud splňují geografické pravidlo;
- `hidden_gem` — skutečně neobvyklá, doložená a překvapivá místní zajímavost;
- `local_story` — specifický místní příběh, který nelze vhodně zařadit jinam;
- `other_verified_significance` — jiný doložený význam, pro který není vhodnější kategorie.

Kategorie `hidden_gem` není odměna za malou nebo málo známou atrakci. Musí jít o skutečně neobvyklou informační hodnotu.

Pokud je fakt primárně o architektuře nebo urbanismu a schéma zatím nemá samostatnou kategorii, vyber nejbližší povolenou kategorii podle hlavního významu. Nepřidávej novou hodnotu bez změny schématu.

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

## 19. Šest jazyků a lokalizace

Každý záznam obsahuje šest jazykových verzí:

- `cs` — čeština;
- `de` — němčina;
- `en` — angličtina;
- `es` — španělština;
- `fr` — francouzština;
- `it` — italština.

Všech šest jazyků musí obsahovat přesně stejnou sadu ID faktů a zachovat jejich pořadí.

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

Každý jazyk posuzuj samostatně. To, co je samozřejmé českému čtenáři, nemusí být známé čtenáři německému, anglickému, španělskému, francouzskému nebo italskému.

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
- Všech šest jazyků musí používat přesně stejná ID.
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
- Odpovídá PSČ aktuálnímu rozhodujícímu číselníku ČSÚ?
- Je zaznamenán použitý zdroj a jeho vydání nebo datum?
- Odpovídá přiřazení obce, části obce, městské části, okresu a kraje oficiálním údajům?
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
- Obsahuje všech šest jazyků stejná ID faktů?
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

**Nejprve ověř PSČ a území. Proveď rešerši. Najdi skutečné příběhy. Vyber to podstatné. Ověř geografickou vazbu. Napiš srozumitelná fakta. Lokalizuj do šesti jazyků. Proveď závěrečný audit. Teprve potom publikuj.**


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
