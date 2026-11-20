# Auditní tahák Chebska — vybraná PSČ 35002–35493

**Kanonické ID:** `CZ-CHEBSKO-35002-35493`  
**Datum checkpointu:** 2026-11-20  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.0  
**Stav:** `PASS` — sémantická, geografická, RÚIAN, turistická a technická kontrola dokončena 2026-11-20. Publikace a záloha čekají na samostatný výslovný pokyn.

## 1. Rozsah a inventář

Auditovaný číselný interval: **35002–35493**. Nejde o souvislý seznam všech čísel v intervalu; audit zahrnuje pouze následující existující české řádky:

`35002, 35101, 35124, 35131, 35132, 35134, 35135, 35137, 35201, 35301, 35491, 35493`

- Počet PSČ: **12**.
- Počet faktů po závěrečných doplněních: **123**.
- Inventář Supabase, `sequence.json` a `groups`: opakovaně ověřena přesná shoda 12/12, bez duplicit; každý z 12 kódů se v sekvenci i skupině nachází právě jednou.
- Obce: Cheb, Františkovy Lázně, Hranice, Libá, Hazlov, Skalná, Plesná, Luby, Aš, Mariánské Lázně, Lázně Kynžvart a Dolní Žandov.
- Okres a kraj: všech 12 záznamů je přiřazeno k okresu Cheb a Karlovarskému kraji.
- RÚIAN: závěrečný cross-check dokončen proti aktuálnímu referenčnímu CSV a manifestu; všech 12 PSČ má adresní body a město uvedené v databázi je v příslušné RÚIAN agregaci. Sídla obsluhujících pošt byla samostatně ověřena v oficiálním katalogu České pošty.

## 2. Délka českého master textu a provedené opravy

Předchozí checkpoint uváděl 41 českých master textů kratších než 350 znaků. V průběhu pokračování byly rozšířeny a přeloženy zbývající krátké texty v Chebu, Skalné a Mariánských Lázních a poslední krátký text v Plesné.

Významné nově rozšířené položky:
- **35301 / fact_004:** minerální prameny města — přibližně 40 pramenů ve městě, více než 160 v okolí, teploty 7–10 °C a rozdíly v chemickém složení; text výslovně neobsahuje léčebná doporučení.
- **35301 / fact_005:** Goetheho čtyři návštěvy v letech 1820–1823, pobyt v domě U Zlatého hroznu a vznik Mariánskolázeňské elegie.
- **35301 / fact_006:** Chopinův skutečný pobyt v létě 1836; opraven rozpor s chybným únorovým datem v městské časové ose podle specializovaného životopisného pramene a korespondence.
- **35301 / fact_007–008:** atentát na Theodora Lessinga a dějiny židovského hřbitova.
- **35301 / fact_009–012:** Royal Golf Club, pravoslavný kostel sv. Vladimíra, anglikánský kostel a Západočeský symfonický orchestr.
- **35301 / fact_013–017:** Geologický park, Kladská, Smraďoch, Křížky a Milhostovské mofety.
- **35301 / fact_018–019:** historické lázně Sangerberg/Prameny, vojenský prostor a uranový průzkum; Chodovský Šmelctál a hornická historie Chodovské Huti.
- **35135 / fact_006:** železniční propojení Plesné, Tršnice, Chebu a Plavna včetně starší koňské dráhy a vlivu železnice na průmyslový růst.

**Read-back délkové kontroly:** 12/12 PSČ, 123/123 faktů, **0 českých master textů pod 350 znaků**. V Mariánských Lázních má všech 19 faktů délku nejméně 350 znaků.

## 3. Věcné a zdrojové opravy

- **35301 / fact_006 — Chopin:** původní záznam uváděl 22. únor 1836. Oficiální městská časová osa tento údaj skutečně obsahuje, ale specializovaný Chopinův životopis uvádí příjezd 28. července 1836 a popisuje přibližně čtyřtýdenní pobyt. Master text nyní bezpečně uvádí léto 1836 a příjezd 28. července; rozpor s městskou časovou osou je v textu výslovně přiznán.
- **35301 / fact_016 — Křížky:** doplněna geologie serpentinitu, endemický rožec kuřičkolistý, vliv extenzivní pastvy a zákaz vstupu do chráněného území.
- **35301 / fact_018 — Prameny/Sangerberg:** doplněna chronologie Alžbětiných lázní (1872), vojenského prostoru (1946–1954) a uranového průzkumu/těžby (od 1947, těžba u Kladské 1954–1958).
- **35301 / fact_019 — Chodovská Huť:** upřesněn vznik roku 1687, vlastnictví Haimhausenů, název Chodovský Šmelctál v letech 1854–1947 a útlum těžby do roku 1861.
- **35135 / fact_006:** rozšířen kontext dvou železničních spojení a průmyslového rozvoje Plesné.
- **35124 / fact_012 — Trojstátí:** nový fakt o historickém setkání zemských hranic Čech, Bavorska a Saska; doloženy hraniční kameny z roku 1844, naučná stezka a pozůstatky mlýnů.
- **35201 / fact_013 — nejzápadnější bod ČR:** nový fakt o geografické krajnosti u Krásné, jejím hraničním mezníku z roku 1844 a přístupu pěší trasou.
- **35124 / fact_012 — Trojstátí:** doplněn přesný historický význam místa, rok hraničních kamenů 1844, naučná stezka a okolní pozůstatky mlýnů; formulace rozlišuje historické zemské hranice od současných státních hranic.
- **35201 / fact_013 — nejzápadnější bod ČR:** doplněna poloha v katastru Krásné u bývalého Újezdu, hraniční mezník z roku 1844, současné označení a přístup pěší trasou.
- Dřívější opravy v Chebu, Skalné, Plesné a dalších PSČ jsou popsány v předchozích konverzačních checkpointech; v tomto souboru nejsou znovu rekonstruovány do detailu.

## 4. Překlady

- Povinné jazykové objekty `cs, de, en, es, fr, it, nl`: přítomny u všech 12 záznamů.
- Počet faktů v každém jazykovém poli odpovídá českému masteru: **0 rozdílů**.
- České `translations.cs.title/text` proti `facts[].title/text`: **0 rozdílů** po závěrečné synchronizaci podle ID.
- Všech šest cizojazyčných verzí bylo individuálně sémanticky zkontrolováno podle ID: **738/738 položek dokončeno** (726 původních + 12 nově doplněných).
- Každý ze sedmi jazyků obsahuje přesně 123/123 očekávaných faktů; 0 chybějících ID, 0 neočekávaných ID, 0 duplicitních ID skupin a 0 prázdných titulů/textů.
- Nová fakta 35124/fact_012 a 35201/fact_013 byly přeloženy do všech šesti cizích jazyků, načteny zpět a zkontrolovány podle českých masterů.
- Texty a nadpisy opravené v průběhu kontroly byly načteny zpět ze Supabase.
- Sémantická kontrola všech 12 PSČ je dokončena.

### Doplňující sémantická kontrola nových faktů (2026-11-20)
- `35124 / fact_012` — český master a překlady DE/EN/ES/FR/IT/NL: **6/6 cizojazyčných verzí** zkontrolováno; všechny zachovávají rozdíl mezi historickým zemským trojstykem a současným trojmezím států.
- `35201 / fact_013` — český master a překlady DE/EN/ES/FR/IT/NL: **6/6 cizojazyčných verzí** zkontrolováno; zachována poloha u Krásné, bývalý Újezd a odlišení od Trojstátí.
- Oba nové záznamy načteny zpět; celkový rozsah po doplnění je 123 faktů a 738 cizojazyčných překladů.

### Sémantická kontrola — 35002 Cheb (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 13 faktů × 6 cizojazyčných verzí = **78/78 překladových položek**.
- **fact_004:** ve všech šesti jazycích opraven význam „velitelství“; původní formulace mylně označovala budovu za rezidenci/obydlí velitele. Nyní odpovídá významu vojenského velitelství a radnice.
- **fact_011:** ověřen historický název „Soudce chebský“ (Egerer Richter / Egerer Judge). Anglický text a titulek sjednoceny na „Judge of Eger“; španělský titulek opraven z obecného „Acuerdo de Cheb“ na „Juez de Cheb“. Ostatní jazyky zachovávají význam historického názvu.
- **fact_013:** ve všech šesti cizojazyčných textech doplněna vynechaná závěrečná informace, že obléhání patřilo k nejdramatičtějším událostem třicetileté války v regionu.
- Ostatní zkontrolované položky: bez potvrzené významové vady. Změny ověřeny následným read-backem ze Supabase.
- V okamžiku dokončení této dílčí kontroly zbývalo 11 PSČ; celý blok byl následně dokončen a uzavřen jako PASS.

### Sémantická kontrola — 35101 Františkovy Lázně (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 9 faktů × 6 cizojazyčných verzí = **54/54 překladových položek**.
- **fact_004:** v německém překladu doplněna vynechaná informace o krátké naučné stezce; ostatní překlady významově odpovídají masteru.
- **fact_005:** opravena typografická chyba „Zwieb elkuppel“ → „Zwiebelkuppel“ v německém textu.
- **fact_008:** ve všech šesti překladech doplněna vynechaná lokalizace muzea v bývalém hasičském domě v Dlouhé ulici a výslovná zmínka o dějinách města; italská a nizozemská formulace následně jazykově zpřesněna.
- Ostatní zkontrolované položky bez potvrzené významové vady. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 2/12 PSČ, 132/726 cizojazyčných položek.

### Sémantická kontrola — 35124 Hranice (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 11 faktů × 6 cizojazyčných verzí = **66/66 překladových položek**.
- **fact_005:** v pěti překladech (EN/ES/FR/IT/NL) doplněno datování padlých členů spolku Jungmannschaft Ostmark Rossbach do let 1914–1918; následně ověřeno, že datum je součástí jediné věty a nevzniká duplicitní sdělení.
- **fact_009:** v nizozemštině opravena záměna hnědáska chrastavcového (Euphydryas aurinia) za jiný druh motýla „Spaanse vlag“; nyní je uveden správný nizozemský název moerasparelmoervlinder.
- Ostatní zkontrolované položky bez potvrzené významové vady. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 3/12 PSČ, 198/726 cizojazyčných položek.

### Sémantická kontrola — 35131 Libá (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 5 faktů × 6 cizojazyčných verzí = **30/30 překladových položek**.
- **fact_005 — Bílá kaple:** ve všech šesti jazycích doplněna podstatná část pověsti: kaple měla dceři připomínat rodný kraj, který mohla zahlédnout z okna nového sídla. Ve španělštině, francouzštině a italštině doplněna také informace, že renovace v roce 2014 dala kapli dnešní bílý vzhled. Ve španělštině a nizozemštině výslovně upřesněno, že vysídlení německého obyvatelstva následovalo po druhé světové válce.
- Ostatní zkontrolované položky bez potvrzené významové vady. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 4/12 PSČ, 228/726 cizojazyčných položek.

### Sémantická kontrola — 35132 Hazlov (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 6 faktů × 6 cizojazyčných verzí = **36/36 překladových položek**.
- **fact_001:** ve španělském překladu doplněna chybějící posloupnost stavebních proměn hradu (renesanční podoba na konci 16. století, barokní přestavba 1719–1720 a rokoková úprava kolem 1770); formulace o roli rodiny Moser následně zpřesněna.
- **fact_003:** do všech šesti překladů doplněna chybějící závěrečná informace o tom, že konec textilní výroby uzavřel dlouhou kapitolu místního zaměstnání a identity obce; v němčině odstraněno opakování.
- **fact_006:** ve španělštině, nizozemštině a italštině časově zpřesněno, že ukončení bohoslužeb nastalo po druhé světové válce.
- Ostatní zkontrolované položky bez potvrzené významové vady. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 5/12 PSČ, 264/726 cizojazyčných položek.

### Sémantická kontrola — 35134 Skalná (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 13 faktů × 6 cizojazyčných verzí = **78/78 překladových položek**.
- **fact_010:** opravena nizozemská typografická chyba „Sint-Clarak kerk“ na správné složené označení „Sint-Clarakerk“.
- Ostatní zkontrolované položky významově odpovídají českým masterům; nebyla zjištěna potvrzená záměna osob, míst, dat ani historických souvislostí. Oprava ověřena read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 6/12 PSČ, 342/726 cizojazyčných položek.

### Sémantická kontrola — 35135 Plesná (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 7 faktů × 6 cizojazyčných verzí = **42/42 překladových položek**.
- **Zásadní oprava přiřazení titulů:** všech 42 cizojazyčných nadpisů (DE/EN/ES/FR/IT/NL) bylo kruhově posunuto o jedno ID, zatímco samotné texty již byly přiřazeny správně. Všech 42 titulů bylo znovu přiřazeno podle českého masteru a ID faktu; následný read-back potvrdil správné přiřazení všech 7 × 6 titulů.
- **fact_002:** ve všech šesti jazycích doplněna chybějící informace, že evangelická komunita v Plesné zachovala své tradice navzdory rekatolizačním tlakům.
- **fact_004:** ve všech šesti jazycích doplněna návaznost kostela na starší katolickou tradici a doložení provizorní svatyně sv. Jiří kolem roku 1400.
- **fact_007:** ve všech šesti jazycích doplněna závěrečná informace o nové kulturní funkci bývalé továrny a uchování paměti průmyslového města.
- Ostatní texty významově odpovídají českým masterům. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 7/12 PSČ, 384/726 cizojazyčných položek.

### Sémantická kontrola — 35137 Luby (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 7 faktů × 6 cizojazyčných verzí = **42/42 překladových položek**.
- **fact_003 — Muzeum strunných nástrojů:** ve všech šesti překladech doplněna závěrečná souvislost, že Luby jsou součástí širší historie výroby strunných hudebních nástrojů.
- Ostatní zkontrolované položky významově odpovídají českým masterům; nebyla zjištěna potvrzená záměna osob, míst, dat ani historických souvislostí. Doplnění ověřeno read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 8/12 PSČ, 426/726 cizojazyčných položek.

### Sémantická kontrola — 35201 Aš (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 12 faktů × 6 cizojazyčných verzí = **72/72 překladových položek**.
- **fact_002:** ve všech šesti jazycích doplněna závěrečná informace, že požár roku 1814 zásadně změnil podobu historické Aše.
- **fact_004:** v šesti překladech zpřesněn obecný popis textilních postupů na konkrétní procesy: předení, tkaní, pletení a textilní zušlechťování.
- Ostatní zkontrolované položky významově odpovídají českým masterům; nebyla zjištěna potvrzená záměna osob, míst, dat ani historických souvislostí. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 9/12 PSČ, 498/726 cizojazyčných položek.

### Sémantická kontrola — 35301 Mariánské Lázně (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 19 faktů × 6 cizojazyčných verzí = **114/114 překladových položek**.
- **fact_001:** všech šest cizojazyčných verzí bylo výrazně zkráceno oproti českému masteru a vynechávalo zásadní historické milníky. Překlady byly kompletně doplněny: první zděný lázeňský dům Johanna Josefa Nehra (1805–1807), vznik obce (1812), status veřejného lázeňského místa (1818), parková kompozice Václava Skalníka a zápis do sériové památky UNESCO v roce 2021 včetně jedenácti měst. Read-back potvrdil úplné nové texty ve všech šesti jazycích.
- **fact_016:** ve španělštině, francouzštině, italštině a nizozemštině doplněna konkrétní dvojice druhů sleziníků z hadcových skalek (Asplenium cuneifolium a Asplenium adulterinum), které byly předtím shrnuty jen jako obecné kapradiny.
- Ostatní zkontrolované položky významově odpovídají českým masterům; nebyla zjištěna další potvrzená záměna osob, míst, dat ani historických souvislostí. Opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 10/12 PSČ, 612/726 cizojazyčných položek.

### Sémantická kontrola — 35491 Lázně Kynžvart (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 11 faktů × 6 cizojazyčných verzí = **66/66 překladových položek**.
- **fact_002:** ve všech šesti jazycích doplněna výslovná informace, že zámek sloužil Metternichovi jako letní sídlo a místo přijímání významných hostů.
- **fact_010:** opravena botanická záměna v italštině — „farnia“ (Quercus robur) nahrazena správným názvem „rovere“ (Quercus petraea, zimní dub / sessile oak).
- Ostatní zkontrolované položky významově odpovídají českým masterům; opravy ověřeny read-backem ze Supabase.
- Sémantická kontrola celého bloku: dokončeno 11/12 PSČ, 678/726 cizojazyčných položek.

### Sémantická kontrola — 35493 Dolní Žandov (dokončeno 2026-11-20)
- Individuálně zkontrolováno všech 8 faktů × 6 cizojazyčných verzí = **48/48 překladových položek**.
- Všechna cizojazyčná znění významově odpovídají českým masterům; nebyla zjištěna potvrzená záměna osob, míst, dat, událostí ani podstatné vynechání. Nebyla nutná žádná textová oprava.
- **Sémantická kontrola všech 12 PSČ je dokončena: 123/123 faktů a 738/738 cizojazyčných překladových položek.**
- Po této kontrole byly přidány dva nové faktory; jejich překlady byly znovu načteny a ověřeny. Závěrečný databázový read-back je PASS.

## 5. Základní strukturální a databázové kontroly

Závěrečný read-back ze Supabase po všech opravách a dvou nových faktech:
- **12/12 PSČ, 123/123 faktů.**
- 0 českých master textů pod 350 znaků.
- 0 rozdílů mezi českým masterem a `translations.cs`.
- Každý jazyk `cs, de, en, es, fr, it, nl`: přesně 123/123 faktů.
- 0 chybějících, neočekávaných nebo duplicitních překladových ID.
- 0 prázdných překladových titulů nebo textů.
- 0 faktů bez zdrojů, 0 null locations, 0 nepovolených `map_category` a 0 duplicitních ID faktů.
- Heuristický reklamní/propagační scan: **0 nálezů z 861 textů** (123 faktů × 7 jazyků).
- Všechny záznamy zůstaly `country_code = CZ`, `status = validated`, `data_version = 1`; 0 odchylek od dosavadního životního cyklu.

AJV nebylo spuštěno v souladu s promptem V2.0. Nebyly měněny schéma, RLS, triggery, aplikační kód, `sequence.json`, `groups`, status, data_version ani žádná jiná země.

## 6. Závěrečný RÚIAN a správní cross-check

Použitá reference: `data/czechia/reference/ruian_postcodes.csv` a `ruian_import_manifest.json`; CSV je lidsky čitelnou ekvivalentní podobou primární JSON reference. Manifest uvádí zdrojový feed ČÚZK aktualizovaný 2026-11-01 a stažený 2026-11-13.

| PSČ | Adresní body RÚIAN | Obec v databázi | Výsledek |
|---|---:|---|---|
| 35002 | 9 433 | Cheb | PASS |
| 35101 | 1 072 | Františkovy Lázně | PASS |
| 35124 | 618 | Hranice | PASS |
| 35131 | 306 | Libá | PASS |
| 35132 | 369 | Hazlov | PASS |
| 35134 | 1 502 | Skalná | PASS |
| 35135 | 498 | Plesná | PASS |
| 35137 | 556 | Luby | PASS |
| 35201 | 4 471 | Aš | PASS |
| 35301 | 5 283 | Mariánské Lázně | PASS |
| 35491 | 358 | Lázně Kynžvart | PASS |
| 35493 | 246 | Dolní Žandov | PASS |
| **Celkem** | **24 712** | **12/12** | **PASS** |

- Všech 12 PSČ má v RÚIAN alespoň jeden adresní bod.
- Každá obec uložená v `content.city` je součástí RÚIAN agregace příslušného PSČ; víceobecní poštovní obvody zůstávají v referenci a nejsou chybně vypisovány do `city`.
- `sequence.json`, jeho `groups` a inventář Supabase se přesně shodují: 12/12 kódů, bez chybějících nebo duplicitních položek. Seznamy obcí v `groups` odpovídají RÚIAN agregacím.
- Samostatně ověřena sídla obsluhujících pošt v oficiálním katalogu České pošty. Všech 12 názvů měst odpovídá sídlu příslušné pošty; u všech je potvrzen okres Cheb a Karlovarský kraj. RÚIAN sám o sobě sídlo pošty neurčuje.
- Ověřené oficiální detailní stránky pošt: `https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/35002`, `/35101`, `/35124`, `/35131`, `/35132`, `/35134`, `/35135`, `/35137`, `/35201`, `/35301`, `/35491`, `/35493`.

## 7. Závěrečný přehled turistické úplnosti

Kontrola byla provedena jednou za celé území podle prahu promptu V2.0; nešlo o katalog všech chráněných objektů. Hlavní celostátní, mezinárodní a regionální dominanty a příběhy jsou pokryté.

**Dvě skutečné mezery byly doplněny:**
- `35201 / fact_013` — nejzápadnější bod České republiky v katastru Krásné u bývalého Újezdu. Jde o národní geografickou krajnost, označenou historickým mezníkem z roku 1844. Překlady a poloha byly uloženy a načteny zpět.
- `35124 / fact_012` — Trojstátí u Trojmezí, kde se setkávaly historické zemské hranice Čech, Bavorska a Saska. Text výslovně odlišuje historický zemský trojstyk od dnešního trojmezí tří států.

Hlavní již pokrytá témata zahrnují Chebský hrad a historické jádro, Valdštejnovu smrt, Marii Loreto a Seeberg; UNESCO lázeňská města Františkovy a Mariánské Lázně; Komorní hůrku, Soos, Bystřinu–Lužní potok, Kladskou a další významné geologické a přírodní lokality; zámek Kynžvart a Metternichovu knihovnu; významné kostely, osobnosti, průmyslovou a železniční historii Ašska a Chebska. Po doplnění dvou výše uvedených míst nebyla při cíleném přehledu zjištěna další chybějící dominanta odpovídající prahu auditu.

Rychlá kontrola zjevných duplicit napříč blokem neodhalila bezdůvodné opakování téhož místa nebo příběhu. Dříve prověřené továrny C. B. Göldnera v Libé a Hazlovu zůstávají dvěma odlišnými lokalitami, nikoli duplicitou.

## 8. Otevřené kroky a životní cyklus

- **Otevřené auditní kroky: žádné. Výsledek bloku: `PASS`.**
- Publikace, V5, záloha Dropbox ani read-only zamčení nebyly provedeny. Vyžadují samostatný výslovný pokyn uživatele.
- Všech 12 záznamů zůstává `status = validated`, `data_version = 1`.
