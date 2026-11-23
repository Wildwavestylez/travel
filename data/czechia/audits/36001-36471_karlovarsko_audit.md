# Finální audit českých PSČ 36001–36471 — Karlovarsko

- **Kanonické ID:** `CZ-KARLOVARSKO-36001-36471`
- **Rozsah:** 36001–36471; pouze existující PSČ uvedená níže
- **Datum auditu:** 2026-11-23
- **Použitá pravidla:** `data/czechia/prompt_audit.md` V2.1
- **Výsledek:** **REVIEW REQUIRED**
- **Publikace:** neprovedena
- **Změna verze:** neprovedena; záznamy zůstávají `data_version=1`, `status=validated`
- **Záloha / Neon import / read-only lock:** neprovedeny

## 1. Přesný inventář

Kanonický inventář byl ověřen proti `data/czechia/reference/ruian_postcodes.csv`, `sequence.json`, `groups` a tabulce `public.postal_codes`.

**27/27 shoda** — každý kód je v sequence i groups právě jednou a má přesně jeden odpovídající záznam v Supabase.

```
36001, 36004, 36005, 36006, 36007, 36010, 36017, 36018,
36221, 36222, 36225, 36233, 36234, 36235, 36236,
36251, 36262, 36263, 36272, 36273, 36301,
36401, 36452, 36453, 36461, 36464, 36471
```

- Počáteční stav: 27 záznamů, 295 faktů.
- Po doplnění čtyř nových faktů: **27 záznamů, 299 faktů**.
- ID záznamů: 9178–9204.
- Všechny záznamy zůstávají `validated`, `data_version=1`.

## 2. Průzkum turistických a historických mezer

Před obsahovým zásahem byla provedena kontrola významných památek, událostí a osobností v rámci všech 27 PSČ.

### Již pokryté hlavní příběhy

- Karlovy Vary a jejich lázeňská architektura, prameny a zápis na seznam UNESCO.
- Jáchymov, hornictví, stříbro, uran, radonové lázně a hornická krajina Krušnohoří UNESCO.
- Rudá věž smrti, důl Svornost, jáchymovské pracovní tábory.
- Ostrovská rezidence, klášterní areál, barokní zahrada a Horní hrad.
- Bečovský relikviář sv. Maura, klášter Teplá, Valeč, Skoky a další významné lokality regionu.

### Zjištěné mezery a provedené doplnění

| PSČ | Zjištění | Provedená změna |
|---|---|---|
| 36001 | Chyběl samostatný příběh Davida Josefa Bechera; dosavadní Becherovka se týkala Josefa Bechera. | Přidán `fact_030` o Davidu Becherovi, jeho balneologii a reformě lázeňské léčby. |
| 36001 | Chyběl zásadní příběh rané české kinematografie a KVIFF. | Přidán `fact_031`, který spojuje první veřejnou filmovou projekci v českých zemích v polovině července 1896 v tehdejším Kurhausu (dnešní Lázně III) s historií festivalu od roku 1946 a jeho přesunem výhradně do Karlových Varů od roku 1950. |
| 36301 | Chyběl Jáchym Ondřej Šlik, ostrovský rodák a první popravený z 27 českých pánů. | Přidán `fact_013`. |
| 36301 | Franziska Sibylla Augusta nebyla v existujícím příběhu ostrovské rezidence dostatečně pojmenována jako samostatná osobnost. | Přidán `fact_014` o jejím stavebním a náboženském mecenášství. |
| 36251 | Ve faktu o dole Svornost chyběla doložená souvislost s Františkem Běhounkem. | Upraven `fact_008`; doplněno, že po Běhounkovi je pojmenován nejvydatnější jáchymovský radioaktivní pramen a lázeňský hotel a že doprovázel Marii Curie-Skłodowskou. |

Petr I. Veliký a jeho návštěvy Karlových Varů v letech 1711 a 1712 byly prověřeny jako možný doplňující příběh. V tomto odlehčeném auditu nebyl přidán samostatný fakt, protože jde o významnou návštěvnickou epizodu, nikoli o zásadní dosud nepokrytý příběh srovnatelný s výše uvedenými mezerami.

V rámci průzkumu nebyla zjištěna další chybějící památka srovnatelného významu, která by vyžadovala samostatný nový fakt.

## 3. Geografie a administrativní údaje

- Všech 27 záznamů má po read-backu správné normalizované `district` a `region`.
- Okres Karlovy Vary: 26 záznamů.
- Okres Cheb: 36461 (Teplá).
- Kraj: Karlovarský kraj u všech 27 záznamů.
- `city`, `municipality` a JSON `city` se u všech 27 záznamů shodují.
- U 36004 doplněno JSON `district = Bohatice` podle adresy pošty Karlovy Vary 4, U Trati 3/11.
- Již vyplněné městské části u 36005, 36006, 36007, 36010, 36017 a 36018 zůstaly zachovány.
- U 36461 zůstává správně okres Cheb; nejde o chybu způsobenou tím, že celý rozsah leží v Karlovarském kraji.

## 4. Polohy a mapové body

Původní audit doplnil dvě chybějící polohy v PSČ 36272:
- 36272 / `fact_006`: kostel sv. Václava v Radošově — doplněna konkrétní poloha.
- 36272 / `fact_008`: archeologické lokality poštovního obvodu — doplněna reprezentativní poloha typu `postal_area`.

U `fact_008` v 36272 byl zároveň opraven geografický rozsah textu: odstraněn Velichov, který do tohoto poštovního obvodu nepatří; příběh nyní zůstává u lokalit v okolí Kyselky, Dubiny, Radošova a Nové Kyselky.

Nové či doplněné mapové body z původního auditu:
- 36001 / `fact_030`, `fact_031`
- 36272 / `fact_006`, `fact_008`
- 36301 / `fact_013`, `fact_014`

Celkem **6/6 nových bodů** bylo zapsáno.

### Dodatečná kontrola devíti reworkovaných PSČ

V rámci následného reworku bylo zkontrolováno 136 faktů v PSČ 36001, 36005, 36221, 36225, 36235, 36262, 36273, 36461 a 36471. U 135 faktů je poloha vyplněna. Jedinou hodnotou `location: null` je:

- 36273 / `fact_004` — Pískovna u Vojkovic. Poloha zůstává záměrně prázdná; samotná parcela nebyla spolehlivě geolokalizována a souřadnice se neodhadují.

### Aktuální globální kontrola prázdných poloh

Nový cílený SQL read-back přesného seznamu 27 PSČ původně odhalil 20 faktů s `location: null`. Osmnáct poloh bylo následně doplněno a ověřeno. Aktuálně zbývá pouze 1 prázdná poloha:

| PSČ | Fakta | Stav |
|---|---|---|
| 36273 | fact_004 | Pískovna u Vojkovic — záměrně ponecháno bez souřadnic podle výslovného pokynu |

Nově doplněné polohy (19 od zahájení této dodatečné kontroly):
- 36301 / `fact_002`: Ostrovský zámek — přesná poloha areálu.
- 36301 / `fact_009`: Dům kultury Ostrov — přesná poloha podle podkladů města.
- 36301 / `fact_010`: Borecké rybníky — reprezentativní bod chráněného území.
- 36301 / `fact_011`: Čedičová žíla Boč — poloha přírodní památky.
- 36401 / `fact_005`: Mariánský sloup v Toužimi — poloha památky.
- 36401 / `fact_008`: Krásné Údolí — přibližný reprezentativní bod historického centra.
- 36301 / `fact_008`: bývalá porcelánka PULS v Mořičovské ulici — poloha areálu.
- 36464 / `fact_006`: kaple sv. Anny v Chodově u Bečova — poloha podle podkladů NPÚ.
- 36018 / `fact_002`: hradiště Tašovice — přibližný bod archeologické lokality zasažené historickou těžbou.
- 36401 / `fact_007`: Komárovská rychta čp. 12 — bod objektu podle adresního bodu.
- 36263 / `fact_006`: bývalá porcelánka EPIAG v Dalovicích — přibližná poloha podle adresního bodu a obecních podkladů.
- 36263 / `fact_007`: Dalovice — reprezentativní bod historického centra obce; text popisuje i Všeborovice a Vysokou.
- 36263 / `fact_008`: botanická zahrada a Dalovické tůně — reprezentativní bod zahrady v sousedství vodních ploch.
- 36301 / `fact_007`: bývalý závod Škoda Ostrov v Dolním Žďáru — poloha areálu.
- 36401 / `fact_003`: historické centrum Toužimi — reprezentativní bod městského půdorysu a opevnění.
- 36401 / `fact_006`: kostel sv. Víta v Útvině — přesná poloha památky, která je hlavním dochovaným bodem příběhu zaniklého středověkého města.
- 36401 / `fact_010`: kostelní návrší v Otročíně — přibližný bod starého slovanského sídliště.
- 36301 / `fact_012`: Stráž nad Ohří — přibližný reprezentativní bod centra sídla podle zveřejněné GPS polohy obce.
- 36401 / `fact_012`: Kojšovice — přibližný bod kruhové návsi, která je typickým urbanistickým jádrem vesnické památkové zóny; fakt nadále výslovně popisuje také samostatnou zónu v Kosmové.

Fakt 36401/fact_012 nyní používá přibližný reprezentativní bod kruhové návsi v Kojšovicích; druhá zóna v Kosmové zůstává popsána v textu a není chybně prezentována jako totožný bod. Pískovna u Vojkovic zůstává záměrně nedotčená.
## 5. Překlady a nově upravené texty

V původním auditu byly nové a upravené fakty synchronizovány v jazycích `cs, de, en, es, fr, it, nl`.

Následný rework devíti PSČ rozšířil obsah a překlady. Souhrnný read-back Supabase potvrdil:

- **136 faktů** v devíti reworkovaných záznamech;
- **952 překladových položek** (136 faktů × 7 jazyků);
- všech sedm jazykových sad má přesně odpovídající ID faktů;
- žádný prázdný titul ani text;
- nulový rozdíl mezi českým master textem a `translations.cs`;
- nulový nesoulad mezi `content.sources` a sloupcem `sources`;
- všech 136 faktů má neprázdné pole zdrojů.

V tomto průchodu bylo plně aktualizováno 18 rozšířených faktů ve všech sedmi jazycích (126 položek). Další dva rozšířené fakty v 36005 dostaly nové texty ve všech šesti cizích jazycích. Následná kontrola navíc odhalila čtyři zastaralé české překladové položky v `translations.cs` (36005/fact_004, 36005/fact_005, 36235/fact_005 a 36235/fact_014); všechny čtyři byly synchronizovány přímo z českého master textu a read-back potvrdil nulový rozdíl.

Tato kontrola ověřuje strukturu, úplnost a českou synchronizaci. **Neznamená** kompletní sémantickou revizi všech původních cizojazyčných překladů ve všech 27 PSČ; ta zůstává otevřená.

### Průběžná sémantická revize překladů — PSČ 36263

Při zahájení cílené jazykové kontroly Dalovic byly nalezeny a opraveny tyto konkrétní významové nedostatky:
- 36263 / `fact_001`, němčina: opraven chybný rod názvu instituce „Das Nationale Denkmalinstitut“ a doplněna informace o pravěkých sídlištních místech u Všeborovic, která v překladu chyběla.
- 36263 / `fact_002`, němčina: zpřesněno, že roku 1503 byla tvrz poškozena v bojích mezi loketskými měšťany a Šliky; původní formulace mohla mylně vyznít jako konflikt města Loket se Šliky.
- 36263 / `fact_006`, všech šest cizích jazyků: sjednocena časová osa s českým master textem — po znárodnění pokračovala výroba pod státní správou, provoz se přerušil v 90. letech, na počátku 21. století byl obnoven a později znovu ukončen. Odstraněna nepodložená zmínka o „měnících se vlastnících“.

Read-back potvrdil všech 7 jazyků, v každém 9/9 faktů se správnými ID a bez prázdných titulů či textů. Tato cílená kontrola se týká uvedených oprav; **neuzavírá** ještě úplnou sémantickou kontrolu všech devíti faktů PSČ 36263 ani celého bloku 27 PSČ.

## 6. Délka českých master textů

Po dokončení reworku byla znovu zkontrolována délka všech **299 českých master textů** v celé skupině 27 PSČ.

**PASS — 0 faktů pod 350 znaků.**

Původní seznam 51 krátkých českých textů je vyřešen: všech 51 položek bylo rozšířeno na základě konkrétních informací a jejich české překladové položky byly synchronizovány. Nebyly přidávány obecné výplňové věty bez zdrojové opory.

## 7. Závěr a další postup

- Přesný inventář 27/27: PASS.
- Sequence a groups 27/27: PASS.
- Supabase 27/27: PASS.
- Administrativní okres/kraj a shoda city: PASS.
- Doplnění významných turistických a historických mezer: provedeno.
- Původně doplněné mapové body: 6/6 ověřeno.
- Český text kratší než 350 znaků: 0/299.
- Devět reworkovaných PSČ: 136 faktů, 952 překladových položek, kompletní jazykové sady, 0 prázdných textů, 0 českých nesouladů, 0 chybějících zdrojů.
- Polohy v devíti reworkovaných PSČ: 135/136 vyplněno; jedinou výjimkou je záměrně negeolokalizovaná pískovna 36273/fact_004.
- Prázdné polohy v celé skupině 27 PSČ: 1 položka; jde o záměrně negeolokalizovanou pískovnu u Vojkovic.
- Kompletní sémantická kontrola všech původních cizojazyčných překladů: OPEN.

**Konečný stav: REVIEW REQUIRED.** Důvodem již nejsou krátké české texty. Otevřené zůstávají sémantická revize původních cizojazyčných překladů v celé skupině a pískovna u Vojkovic zůstává záměrně bez souřadnic. Záznamy nebyly publikovány, nepřevedly se na V5, nebyla vytvořena záloha a nebyl aktivován read-only lock.


### Sémantická revize překladů — doplňující opravy 23. 11. 2026

Při cílené kontrole původních překladů byly ověřeny jazykové varianty a jejich návaznost na české master texty. Strukturální read-back všech 27 záznamů potvrdil u všech sedmi jazyků shodné počty faktů, správná ID a žádné prázdné tituly ani texty.

Byly doplněny chybějící významné údaje v těchto překladech (vždy ve všech šesti cizích jazycích `de, en, es, fr, it, nl`):
- 36221 / `fact_002`: doplněn životní rámec Ignáce Sichelbartha (1708–1780), jeho odjezd do Číny roku 1745 a spojení s Nejdkem.
- 36236 / `fact_008`: doplněno ocenění Rudolfa Höhna ve Falunu roku 1974 a poslední skoky v roce 1982.
- 36461 / `fact_012`: doplněna obnova kaple v Zahrádce roku 2002 a konkrétní rozsah pomoci nuceně nasazenému.
- 36464 / `fact_004`: doplněna veřejná hudební škola z roku 1887 a požár místní synagogy roku 1904.

Read-back po zápisu potvrdil všech 24 upravených překladových položek a přítomnost klíčových letopočtů. Tyto opravy neměnily české master texty, zdroje, ID faktů, polohy, stav ani verzi záznamů.

**Stav úplné sémantické revize všech původních překladů v celém bloku: stále otevřený.** Výše uvedené opravy jsou dokončené dílčí nálezy, nikoli potvrzení úplné kontroly všech 299 faktů.
