# ⚠️ DEPRECATED — NEPOUŽÍVAT JAKO AKTUÁLNÍ TAHÁK

> **TENTO SOUBOR JE NEPLATNÝ PRO DALŠÍ PRÁCI.** Byl rozdělen podle okresů. Nepoužívat jeho souhrnný rozsah 38101–38901 ani staré počty/stavy pro rozhodování, rework, audit, publikaci či zamykání. Historický obsah je zachován pouze jako archivní stopa. Pro jakoukoli další práci otevři výhradně jeden z těchto okresních taháků:
>
> - `38101-38293_cesky-krumlov_audit.md` — Český Krumlov (uzavřeno, V5 + published, záloha ověřena, read-only)
> - `38301-38501_prachatice_audit.md` — Prachatice (pracovní audit)
> - `38601-38901_strakonice_audit.md` — Strakonice (pracovní audit)
>
> Inventář jednotlivých okresů je v nových souborech ověřen proti `country_code='CZ'` a okresu v Supabase. Historický text níže se může obsahově i stavově rozcházet s aktuální databází.

---

# Audit českých PSČ 38101–38901

**Kanonické ID:** CZ-38101-38901  
**Stav:** REVIEW REQUIRED  
**Datum snapshotu:** 18. 11. 2026  
**Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`  
**Rozsah:** přesně 81 PSČ převzatých z `data/czechia/sequence.json`; nejde o souvislou číselnou řadu. Skupina 38xxx v sequence obsahuje 82 kódů včetně 38001, který byl uzavřen v předchozím auditu; tento tahák pokrývá zbývajících 81 kódů 38101–38901.

## 1. Použité závazné podklady

- `data/czechia/prompt_audit.md` — auditní pravidla V2.0
- `data/czechia/prompt_rework.md`
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/location_types.json`
- `data/czechia/sequence.json`
- `data/czechia/reference/README.md`
- `data/czechia/reference/ruian_import_manifest.json`
- `data/czechia/reference/ruian_postcodes.csv`

Soubor `ruian_postcodes.json` je prázdný; podle referenčních pravidel byl proto použit CSV fallback. Manifest potvrzuje oficiální zdroj ČÚZK RÚIAN, feed aktualizovaný 1. 11. 2026 a archiv stažený 13. 11. 2026.

## 2. Inventář a administrativní kontrola

- Sequence: **81/81 PSČ**, bez chybějícího nebo nadbytečného kódu.
- Supabase: **81/81 záznamů**.
- 78 záznamů s obsahem má vyplněné `city`, `county` a `state`; všechny hodnoty `city` se nacházejí v RÚIAN seznamu obcí příslušného PSČ.
- Kontrola členství `city` v RÚIAN je inventární kontrola; sama o sobě nedokazuje přesné sídlo konkrétní pošty.
- Administrativní rozdělení obsahových záznamů: Český Krumlov 28, Prachatice 28, Strakonice 22; všechny v Jihočeském kraji.
- Tři prázdné placeholdery bez administrativních polí: **38775, 38801, 38901**.

### Aktuální stav databáze

| Kontrola | Výsledek |
|---|---:|
| PSČ záznamy | 81 |
| `validated` | 44 |
| `placeholder` | 37 |
| `published` | 0 |
| `data_version=1` | 81/81 |
| Fakta | 410 |
| Jazykové položky | 2 870 |
| Překlady v každém jazyce cs/de/en/es/fr/it/nl | 410 |

Záznam 38773 byl během auditu souběžně doplněn o 15 faktů a změněn na `validated`. Tuto změnu provedla souběžná práce v jiném vlákně; audit ji neprovedl a záznam nebyl přepisován.

## 3. Opravy provedené v rámci auditu

Všechny změny byly provedeny v Supabase s kontrolou aktuálního hashe záznamu. Nebyly měněny statusy, `data_version`, sequence, publikace ani ochranné mechanismy.

1. Opraveno **14 neplatných `map_category`** u původních faktů.
2. Opravena **1 neplatná `category`**.
3. Opraven **1 neplatný `location.type`**.
4. Synchronizováno **9 rozdílů `translations.cs`** proti českým master textům.
5. Rozšířeny dva krátké české master texty:
   - 38279/fact_005 — doplněno doložených 14 zastavení obnovené křížové cesty na Martě;
   - 38701/fact_002 — doplněna stálá expozice renesanční a barokní Volyně v radnici.
   
   U obou byly aktualizovány překlady ve všech šesti cizích jazycích; výsledkem je synchronizace všech sedmi jazykových verzí.
6. Opraveno pořadí faktových ID a odpovídajících překladových polí v 38601.
7. Doplněno **40 faktových poloh** v dosud prázdných nebo neúplných `location` polích. Použita kombinace přesných bodů, přibližných bodů a reprezentativních bodů podle povahy příběhu; všechny nově zapsané polohy mají název, zdroj, typ a přesnost.

## 4. Technická a obsahová QA

| Kontrola | Výsledek |
|---|---:|
| Fakta bez zdrojů | 0 |
| Český master text pod 350 znaků | 0 |
| Prázdné překladové texty | 0 |
| Rozdíly `translations.cs` proti masteru | 0 |
| Duplicitní fact ID | 0 |
| Chyby pořadí fact ID | 0 |
| Neplatné priority | 0 |
| Neplatná přesnost polohy | 0 |
| Souřadnice mimo rozsah | 0 |
| Reklamní / prodejní výzvy v textu | 0 |

Strukturální kontrola překladů pokrývá všech 410 faktů v sedmi jazycích. Významová namátková kontrola reprezentativních faktů včetně nově doplněných textů 38279/fact_005 a 38701/fact_002 a souběžně doplněného 38773/fact_001 neodhalila záměnu jazyka ani významový rozpor. Úplná ruční sémantická kontrola všech 2 460 cizojazyčných textů není v tomto běhu uzavřena.

Aktuálně je vyplněno **401/410 faktových poloh**. Zbývajících devět neúplných poloh:

- **38706/fact_007** — archeologické stopy a mohylové pohřebiště Malenicka. Dostupný popis lokalizuje oblast pouze obecně („západně od Volyňky“); bez spolehlivého bodu nebyla vytvořena falešná přesná poloha.
- **38772:** fact_004, fact_006, fact_008, fact_009 — ponecháno beze změny kvůli souběžné práci.
- **38773:** fact_006, fact_011, fact_014, fact_015 — nové fakty přidané během auditu; ponecháno beze změny kvůli souběžné práci.

### Otevřené schema nálezy v souběžně upravovaném 38773

V současném snapshotu má 38773:

- 3 neplatné hodnoty `category`: `history_and_context` (2×) a `hidden_gems` (1×);
- 5 neplatných hodnot `map_category`: `church` (3×) a `historical_site` (2×);
- 4 neplatné hodnoty `location.type`: `historic_house`, `watermill_power_station`, `memorial_stones`, `jewish_cemetery`;
- 4 fakty bez úplné polohy: fact_006, fact_011, fact_014 a fact_015.

Doporučené mapování podle skutečného obsahu: `history_and_context` → `history` nebo `geography_and_context`; `hidden_gems` → `hidden_gem`; kostely → `religious_site`; `historic_house` → `building`; `watermill_power_station` → `watermill` nebo `power_station`; `memorial_stones` → `memorial`; `jewish_cemetery` → `cemetery`. Konkrétní volbu je nutné potvrdit podle jednotlivých faktů. Záznam nebyl auditním během měněn.

## 5. Otevřená obsahová úplnost — doporučené nové příběhy

Následující významné příběhy nebyly do databáze vloženy; čekají na výslovné schválení. Přiřazení je podle fyzického místa, nikoli podle korespondenční adresy instituce.

1. **38203 — Hvězdárna na Kleti — UZAVŘENO 18. 11. 2026.** Nový kandidát není potřeba: stávající 38203/fact_004 už společně popisuje vrchol Kleti, rozhlednu i hvězdárnu. Samostatný duplicitní fakt se nepřidává.
2. **38226 — Rodný dům Adalberta Stiftera.** Palackého 21, Horní Planá, 382 26; Stifter se zde narodil 23. 10. 1805 a dům dnes spravuje Regionální muzeum v Českém Krumlově. Zdroj: [Regionální muzeum – Památník Adalberta Stiftera](https://muzeumck.cz/o-muzeu/pamatnik-a-stiftera/).
3. **38451 — Boubínský prales a Boubínské jezírko.** Významná přírodní lokalita; hlavní návštěvnický přístup a informační středisko Idina Pila mají adresu Kaplice pod Boubínem, 384 51 Lenora. Zdroj: [NP Šumava – Boubínský prales](https://www.npsumava.cz/de/ausflug/boubinsky-prales/) a [IS Idina Pila – adresa](https://www.npsumava.cz/navstivte-sumavu/navstevnicka-centra/informacni-stredisko-idina-pila/zakladni-informace-o-pristupnosti-budovy-pro-osoby-se-zdravotnim-postizenim-is-idina-pila/).
4. **38775 — Poutní kostel Navštívení Panny Marie ve Skočicích.** Raně barokní osmiboká stavba z let 1677–1678, spojená s kultem Skočické Panny Marie a léčivým pramenem. Zdroj: [Obec Skočice – Skočický kostel](https://www.skocice.cz/pamatky-zajimavosti/skocicky-kostel).
5. **38801 — Vodní zámek Blatná.** Významný a mimořádně zachovaný vodní hradní komplex; první historická zmínka o tvrzi pochází z roku 1235. Zdroj: [Oficiální historie zámku Blatná](https://www.zamek-blatna.cz/about/castle-history).
6. **38901 — Vodňanské rybářství a Městské muzeum v bývalé synagoze.** Expozice Rybářství na Vodňansku a historie rybářství/rybníkářství jsou významným místním příběhem; muzeum sídlí v bývalé synagoze na Majerově 153, 389 01 Vodňany. Zdroj: [Historie Městského muzea](https://www.muzeumvodnany.cz/muzeum-galerie/budovy/muzeum/historie) a [adresy muzea](https://www.muzeumvodnany.cz/muzeum-galerie/kontakty).

Bavorov a hrad Helfenburk již nejsou v seznamu chybějících příběhů: souběžně doplněný záznam 38773 nyní obsahuje 15 faktů včetně těchto témat.

## 6. Další otevřené body

- Prázdné placeholdery 38775, 38801 a 38901 potřebují kompletní obsah a administrativní metadata.
- 38772 a 38773 je nutné znovu zkontrolovat po dokončení souběžných úprav.
- U 38486/fact_001 se zdroje liší v chronologii: jeden uvádí koupi usedlosti Janem Králem v roce 1925, Regionální muzeum popisuje přesun firmy do Miřetic a koupi domu č.p. 24 v roce 1927. Může jít o dvě různé fáze (pořízení usedlosti vs. přesun firmy); text zatím nebyl měněn a formulaci je vhodné při reworku zpřesnit.

## 7. Rozsah sequence

Aktuální snapshot `data/czechia/sequence.json` (18. 11. 2026) obsahuje v rozsahu 38101–38901 přesně **81 PSČ**. Seznam byl znovu synchronizován s aktuální sekvencí a `groups`:

`38101, 38201, 38202, 38203, 38206, 38208, 38211, 38216, 38218, 38221, 38222, 38223, 38226, 38229, 38232, 38241, 38242, 38272, 38273, 38276, 38278, 38279, 38281, 38282, 38283, 38291, 38292, 38293, 38301, 38401, 38402, 38403, 38404, 38411, 38421, 38422, 38425, 38426, 38427, 38432, 38433, 38441, 38442, 38443, 38444, 38451, 38462, 38471, 38472, 38473, 38481, 38486, 38491, 38492, 38493, 38501, 38601, 38701, 38706, 38711, 38715, 38716, 38719, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38742, 38743, 38751, 38752, 38756, 38771, 38772, 38773, 38775, 38801, 38901`

## 8. Závěr

**REVIEW REQUIRED.** Inventář, sequence, RÚIAN membership, překladová struktura a většina technických kontrol prošly. Audit doplnil 40 poloh a opravil zjištěné strukturální nesoulady. Rozsah však nelze označit jako PASS kvůli třem prázdným placeholderům, devíti neúplným polohám, schema chybám v souběžně upravovaném 38773 a pěti významným obsahovým kandidátům čekajícím na schválení; kandidát Hvězdárny na Kleti byl uzavřen, protože je již pokryt v 38203/fact_004.

**Nebyla provedena publikace V5, změna `data_version`, změna statusů tímto auditem, záloha ani read-only zamčení.**

## 9. Dílčí finální audit 38101–38293 (18. 11. 2026)

Tato podsekce zaznamenává samostatně dokončený audit uživatelem zadaného podrozsahu. **Neuzavírá celý nadřazený rozsah 38101–38901.**

### Inventář

- Aktuální `sequence.json` i `groups`: přesně **28/28 PSČ**, každé právě jednou: `38101, 38201, 38202, 38203, 38206, 38208, 38211, 38216, 38218, 38221, 38222, 38223, 38226, 38229, 38232, 38241, 38242, 38272, 38273, 38276, 38278, 38279, 38281, 38282, 38283, 38291, 38292, 38293`.
- Supabase: **28/28 řádků**, bez chybějícího nebo nadbytečného PSČ.
- **130 faktů / 910 jazykových položek** (7 jazyků).
- Stav: 21 `validated`, 7 `placeholder`, 0 `published`; všech 28 má `data_version=1`. Statusy ani verze nebyly měněny.
- RÚIAN: ověřeno členství všech 28 PSČ v aktuálním CSV fallbacku z oficiálního feedu ČÚZK (manifest: feed 1. 11. 2026, staženo 13. 11. 2026). Pro 38232 a 38242 navíc ověřeno fyzické sídlo obslužné pošty v oficiálním detailu České pošty: Velešín, respektive Střítež (Kaplice-nádraží 22). Administrativní údaje v auditovaném podrozsahu bez zjištěné chyby.

### Technické a jazykové kontroly

- 130/130 faktů má správné sekvenční ID a pořadí; 0 duplicitních nebo chybných ID.
- 0 neplatných `category`, `priority`, `map_category` a `location.type`.
- 130/130 faktů má neprázdnou polohu se všemi povinnými poli; 0 `null` poloh. Existující souřadnice nebyly znovu přeměřovány ani přesouvány.
- 0 faktů bez zdroje; 0 českých master textů pod 350 znaků.
- 0 chybějících/prázdných jazykových položek; všech 7 jazyků má shodnou sadu ID a pořadí; 0 rozdílů `translations.cs` vůči masteru.
- U sedmi položek přidaných do aktuální sekvence oproti předchozímu snapshotu (38201, 38216, 38282, 38283, 38291, 38292, 38293) provedena sémantická kontrola všech jazyků. U překladů 38216/fact_001 a fact_002 byly opraveny tři zjevné jazykové vady ve španělštině a nizozemštině (nepřesný termín pro boží muka a poškozené nizozemské slovo); read-back potvrdil opravu. U ostatních 21 překrývajících se záznamů byly převzaty již dokončené kontroly z předchozího taháku.

### Obsahová úplnost

- **38203 — Kleť:** dříve evidovaný kandidát Hvězdárny na Kleti je již pokryt v 38203/fact_004; bez dalšího faktu.
- **38226 — Horní Planá — UZAVŘENO 18. 11. 2026:** doplněn `fact_006` **Rodný dům Adalberta Stiftera: hlas Šumavy, který překročil hranice**. Český master má 1 086 znaků; text vysvětluje Stifterův původ, rodinné zázemí, šumavskou inspiraci, německy psanou literární tvorbu, známá díla, působení v Linci, školství a ochranu památek i přeshraniční kulturní význam. Přidáno ve všech sedmi jazycích cs/de/en/es/fr/it/nl. Kategorie `people`, priorita A, map_category `personality`; přesná poloha rodného domu Palackého 21, Horní Planá, ověřena přes RSO/ČSÚ. Pět zdrojů, včetně Regionálního muzea, StifterHaus, Infocentra Horní Planá a Univerzity Pasov. Read-back: 7/7 jazyků obsahuje fact_006, 6/6 faktů v každém jazyce, status zůstal `validated`, `data_version=1`.
- V ostatních 27 PSČ nebyla v rámci odlehčeného auditu zjištěna další zjevná mezera stejné významové úrovně.

### Výsledek podrozsahu

**REVIEW REQUIRED** — inventář, geografická příslušnost, struktura, mapové kategorie, polohy, zdroje, délka českých masterů a jazyková struktura PASS; tři překladové vady opraveny a načtením zpět ověřeny. Obsahová položka Rodný dům Adalberta Stiftera v 38226 byla doplněna jako fact_006 v sedmi jazycích; všech 7 překladů a metadata bylo ověřeno read-backem. Zůstává otevřený stav REVIEW REQUIRED kvůli ostatním evidovaným placeholderům a nadřazenému rozsahu. Bez změny master faktů, statusů, `data_version`, sekvence, publikace V5, zálohy a read-only zámku.


## 10. Pokračování auditu a aktuální read-back snapshot (18. 11. 2026)

Tato sekce **nahrazuje starší průběžné počty a otevřené nálezy** v oddílech 2, 4, 5, 6 a 8. Vznikla po opětovném načtení aktuální databáze; souběžné změny v jiných pracovních vláknech jsou považovány za aktuální stav, nikoli za změny tohoto auditního běhu.

### Aktuální inventář a stav

- Sequence / groups / Supabase: **81/81 PSČ**, bez změny rozsahu.
- Aktuální obsah: **422 faktů / 2 954 jazykových položek**; každý jazyk cs/de/en/es/fr/it/nl má přesně 422 položek.
- Statusy: **45 validated, 36 placeholder, 0 published**; všech 81 řádků má `data_version=1`. Audit statusy ani verze neměnil.
- Administrativní pole `city`, `county`, `state` jsou vyplněna u 79/81 řádků. Výjimky jsou prázdné placeholdery **38801 a 38901** (`content={}`); jejich obsah i administrativní metadata čekají na kompletní doplnění.
- Nově ověřený technický snapshot: 0 českých master textů pod 350 znaků, 0 faktů bez zdrojů, 0 neplatných `category`, `map_category` a `location.type`, 0 neplatných ID, 0 prázdných překladů, 0 chybějících jazykových variant a 0 rozdílů `translations.cs` vůči českému masteru.
- Reklamní / prodejní výzvy: 0 nálezů.
- Duplicitní název „Kostel svatého Bartoloměje“ se vyskytuje u 38279 a 38403, ale jde o dva různé kostely ve Frymburku a Ktiši; nejde o duplicitu místa ani příběhu.

### Opravy a uzavřené nálezy

1. **38451/fact_010 — Boubínský prales a Boubínské jezírko:** doplněn významný přírodní příběh, který v záznamu chyběl. Český text popisuje ochranu jádra pralesa od roku 1858, historickou funkci jezírka vybudovaného roku 1836 pro plavení dřeva, jeho parametry a současné omezení přístupu. Přidáno ve všech sedmi jazycích, čtyři zdroje, poloha Boubínského jezírka (48.973809, 13.8192428; `pond`, `exact`). Read-back: 7/7 jazyků, metadata, zdroje i poloha PASS. Záznam zůstal `placeholder`, `data_version=1`.
2. **38486/fact_001 — dílna Jana Krále / JEKA:** opravená česká gramatická chyba a zpřesněna chronologie. Databáze českého amatérského divadla uvádí počátek miřetické činnosti roku 1925, zatímco podrobnější firemní dokumentace uvádí přesun podniku a koupi domu čp. 24 v roce 1927. Text nyní rozlišuje začátek místní výroby od pozdějšího přesunu a rozšíření provozu, aniž by vytvářel falešnou jistotu. Český master má 844 znaků; všech šest cizojazyčných překladů bylo aktualizováno a česká překladová vrstva synchronizována. Read-back PASS; status `placeholder` a `data_version=1` zachovány.
3. **38773 — souběžné aktualizace:** aktuální data již neobsahují dříve evidované neplatné hodnoty `category`, `map_category` ani `location.type`; kontrola nyní vrací 0 nálezů. Pět rozdílů v `translations.cs` u fact_005, fact_007, fact_012, fact_016 a fact_017 bylo synchronizováno s aktuálními master texty. Při sémantické kontrole těchto pěti faktů napříč sedmi jazyky byla navíc opravena drobná německá gramatická chyba u fact_016. Read-back: 0 rozdílů v celém rozsahu.
4. **38773/fact_013 — Pivkovice:** doplněna obhajitelná reprezentativní poloha návsi (49.1762544, 14.0575717), `historic_village`, `area_representative`, doložená adresním bodem Pivkovice 4 s PSČ 38773. Tím se počet neúplných poloh snížil z 10 na 9.
5. **38775 — Skočice:** dříve navržený kandidát poutního kostela je již pokryt v existujícím fact_001 „Poutní kostel a obraz, který přežil požár“. Nový duplicitní fakt se nepřidává.
6. **38226 — Horní Planá:** rodný dům Adalberta Stiftera zůstává uzavřeným nálezem podle oddílu 9; fact_006 je v sedmi jazycích a read-back PASS.
7. **38203 — Kleť:** hvězdárna i rozhledna jsou již pokryty existujícím fact_004; samostatný duplicitní fakt se nepřidává.

### Zbývající neúplné polohy

Aktuálně je vyplněno **413/422 faktových poloh**. Devět polí `location=null` zůstává záměrně, protože dostupné podklady neposkytují bezpečný bod nebo jde o složené/rozsáhlé téma:

- 38706/fact_007 — archeologické stopy Malenicka; popis lokalizuje širší oblast, nikoli obhajitelný bod;
- 38772/fact_004 — rozsáhlá krajinná památková zóna;
- 38772/fact_006 — osobnost Františka Horského s vazbou na celé panství, bez jednoho doloženého bodu;
- 38772/fact_008 — historická chovatelská stanice československého vlčáka; přesná poloha stanice není potvrzena;
- 38772/fact_009 — mohylové pohřebiště Černoháj; zdroje popisují širší polohu, ne bezpečný bod;
- 38773/fact_006 — přírodní památka Bavorovská stráň; oficiální předpis vymezuje polygon, ale zatím nebyl bezpečně převeden na bod;
- 38773/fact_014 — souhrnný příběh více lokalit v Měkyni a Tourově;
- 38773/fact_015 — souhrnný příběh více osobností bez jedné společné polohy;
- 38775/fact_008 — archeologické pohřebiště pod Růžovým vrchem bez spolehlivě určeného bodu.

Tyto položky nejsou automaticky vadou: schema připouští `location=null`, pokud polohu nelze odpovědně určit. Nebudou doplněny odhadem.

### Zbývající obsahová úplnost a další krok

Z pěti dříve evidovaných kandidátů zůstávají otevřené pouze dva:

- **38801 — Blatná:** významný vodní zámek Blatná; existující řádek je zatím prázdný placeholder.
- **38901 — Vodňany:** rybářská tradice Vodňanska a Městské muzeum v bývalé synagoze; existující řádek je zatím prázdný placeholder.

Kandidáti 38226, 38451 a 38775 jsou nyní pokryti; 38203 byl pokryt již dříve. U 38801 a 38901 je nutné doplnit kompletní obsah a administrativní metadata podle plného českého rework standardu, nikoli pouze přidat izolovaný fakt do prázdného objektu.

### Aktuální výsledek

**REVIEW REQUIRED.** Strukturální a dávkové databázové kontroly PASS; potvrzené opravy 38486 a 38773 načteny zpět; významný příběh Boubína doplněn a ověřen v sedmi jazycích. Otevřené zůstávají dva prázdné záznamy 38801 a 38901, devět oprávněně nevyplněných poloh a dokončení sémantické kontroly zbývajících převzatých překladů podle již existujících checkpointů.

**Žádný status, `data_version`, publikace, záloha ani read-only zámek nebyly změněny.**


## 11. Finální read-back auditu podrozsahu 38101–38293 (18. 11. 2026)

Navázáno na dokončené kontroly v oddílu 9; hotové kontroly nebyly opakovány. Aktuální read-back ze Supabase potvrdil:

- **28/28 PSČ** přesně odpovídá inventáři podrozsahu; žádný chybějící ani nadbytečný řádek.
- **130 faktů**; všech sedm jazyků má přesně 130 překladových položek (cs/de/en/es/fr/it/nl); žádný chybějící ani nadbytečný překladový identifikátor, žádný prázdný překladový text.
- 0 českých master textů pod 350 znaků; 0 faktů bez zdrojů; 0 chybějících povinných polí záznamu; 0 chyb v povolených hodnotách category, priority, map_category a fact ID.
- 0 prázdných faktových poloh; 0 chybějících administrativních údajů v JSON obsahu.
- Aktuální statusy: **21 validated, 7 placeholder, 0 published**; všech 28 má data_version=1. Seznam placeholderů: 38279, 38281, 38282, 38283, 38291, 38292, 38293.
- U sedmi placeholderů zůstává obsah zachován; jejich status nebyl změněn. Publikace ani změna statusů nebyla provedena, protože prompt_audit.md vyžaduje výslovný následný pokyn uživatele.

### Výsledek

**REVIEW REQUIRED — obsahové a technické auditní kontroly podrozsahu jsou dokončeny bez nového nálezu; sedm záznamů zůstává ve statusu placeholder.** Dříve dokončené kontroly a opravy z oddílu 9 zůstávají platné. Žádné nové změny dat nebyly potřeba. Bez změny sequence.json, statusů, data_version, publikace V5, zálohy a read-only zámku.

## 12. Publikace V5 a ověřená záloha podrozsahu 38101–38293 (18. 11. 2026)

Na výslovný pokyn uživatele byla provedena publikace výhradně nad přesným českým inventářem podrozsahu 38101–38293.

- Cílový inventář: **28/28 PSČ**: 38101, 38201, 38202, 38203, 38206, 38208, 38211, 38216, 38218, 38221, 38222, 38223, 38226, 38229, 38232, 38241, 38242, 38272, 38273, 38276, 38278, 38279, 38281, 38282, 38283, 38291, 38292, 38293.
- Všech 28 záznamů má po publikaci `country_code=CZ`, `data_version=5`, `status=published`.
- Původních 7 placeholderů (38279, 38281, 38282, 38283, 38291, 38292, 38293) bylo zahrnuto do požadované publikace celého auditovaného rozsahu.
- Read-back ze Supabase: **28/28 správně**, 0 výjimek. Mimo přesný seznam nebyl proveden žádný zápis; žádná PSČ 383xx ani jiná země nebyla změněna.

### Záloha

- Záloha provedena přes dedikovanou Supabase Edge Function `travel-backup-cz-38101-38293-audited`, spuštěnou zavedenou cestou `pg_net` HTTP GET.
- Dropbox aplikační namespace: `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_38101-38293_2026-11-18T17-07-29-940Z/`.
- Ověřena přítomnost všech tří souborů: `CZ_AUDIT_38101-38293_backup.json`, `CZ_AUDIT_38101-38293_restore.sql`, `manifest.json`.
- Manifest načten přímo z Dropboxu: `record_count=28`, přesný seznam PSČ, `data_version.content_version=5`, `validation.status=VERIFIED`, `validation.readback_verified=true`, `verified_record_count=28`, bez chyby.
- SHA-256 canonical scope hash: `335a3a0fbd33eaab1cfac81052874fc2e30e2def62bc831f5e369a945a1eb774`. Edge Function potvrdila opětovné stažení všech tří souborů z Dropboxu a shodu jejich SHA-256; existující soubory nebyly přepsány.

**Výsledek: publikace V5/PUBLISHED PASS; záloha a její read-back SHA-256 ověření PASS.** Bez zásahu do ostatních PSČ, sequence.json, schématu, RLS nebo read-only zámků.

## 13. Databázový read-only zámek pro 381xx/382xx (18. 11. 2026)

Po dokončené publikaci V5 a ověřené Dropbox záloze byl v Supabase aplikován cílený databázový trigger:

- Trigger: `lock_cz_38101_38293_read_only` na `public.postal_codes`.
- Funkce: `public.prevent_cz_38101_38293_mutation()`.
- Chráněno přesně 28 českých kódů uvedených v oddílu 12; podmínka vždy vyžaduje `country_code='CZ'`.
- Blokuje `INSERT`, `UPDATE` a `DELETE` pro tyto české řádky chybou SQLSTATE `55000`; čtení zůstává povoleno. Ochrana je v databázovém triggeru a uplatní se i na přímé privilegované zápisy, které trigger nespouštějí jen při jeho explicitním vypnutí.
- Ověření: trigger i přesná definice funkce načteny zpět; pokus o UPDATE i DELETE na CZ/38101 byl zachycen jako očekávané zamítnutí; read-back potvrzuje 28/28 CZ záznamů stále V5 + published.
- Čtyři německé záznamy sdílející textové PLZ 38226, 38229, 38272 a 38279 nejsou součástí zámku, protože podmínka vyžaduje `country_code='CZ'`.
- Žádné další české PSČ ani záznamy jiných zemí nebyly změněny.

**Výsledek: READ-ONLY LOCK VERIFIED pro přesný český rozsah 381xx/382xx.**
