# Finální audit českých PSČ 36001–36471 — Karlovarsko

- **Kanonické ID:** `CZ-KARLOVARSKO-36001-36471`
- **Rozsah:** 36001–36471; pouze existující PSČ uvedená níže
- **Datum auditu:** 2026-11-23
- **Použitá pravidla:** `data/czechia/prompt_audit.md` V2.1
- **Aktuální výsledek:** **PASS — AUDIT V2.1 COMPLETE**
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
- Po doplnění čtyř nových faktů: **27 záznamů, 298 faktů**.
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

Po dokončení reworku byla znovu zkontrolována délka všech **298 českých master textů** v celé skupině 27 PSČ.

**PASS — 0 faktů pod 350 znaků.**

Původní seznam 51 krátkých českých textů je vyřešen: všech 51 položek bylo rozšířeno na základě konkrétních informací a jejich české překladové položky byly synchronizovány. Nebyly přidávány obecné výplňové věty bez zdrojové opory.

## 7. Závěr a další postup

- Přesný inventář 27/27: PASS.
- Sequence a groups 27/27: PASS.
- Supabase 27/27: PASS.
- Administrativní okres/kraj a shoda city: PASS.
- Doplnění významných turistických a historických mezer: provedeno.
- Původně doplněné mapové body: 6/6 ověřeno.
- Český text kratší než 350 znaků: 0/298.
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

**Stav úplné sémantické revize všech původních překladů v celém bloku: stále otevřený.** Výše uvedené opravy jsou dokončené dílčí nálezy, nikoli potvrzení úplné kontroly všech 298 faktů.


### Pokračování sémantické kontroly překladů — 23. 11. 2026

**Dokončené úplné jazykové průchody (CS master proti DE/EN/ES/FR/IT/NL):** 36272, 36273, 36301, 36401, 36453 a 36464. U ostatních zde uvedených PSČ proběhla jen cílená nebo částečná kontrola; nelze je zatím označit za kompletně zkontrolované.

**Opravy potvrzené read-backem v Supabase:**
- 36263: v pěti cizojazyčných verzích fact_001 doplněna lokalita Všeborovice; ve všech šesti cizojazyčných verzích fact_004 doplněna Körnerova busta a ve fact_005 poloha kostela nad levým břehem Vitického potoka.
- 36272: v nizozemském fact_007 opravena záměna kaple sv. Anny za kostel.
- 36453: ve španělském fact_002 opraven název Čapkova dramatu na *El caso Makropulos*; v nizozemském fact_008 opravena záměna návesní kaple sv. Anny za kostel.
- 36461: ve všech šesti cizojazyčných verzích fact_005 doplněna souvislost obou kaplí s Kryštofem Dientzenhoferem a datem staršího návrhu 1730.
- 36464: nizozemský fact_006 opraven z kostela na kapli sv. Anny. Záznam fact_005 o Otročíně byl z PSČ 36464 odstraněn, protože popisoval samotnou část obce Otročín (PSČ 36401), nikoli část Měchov obsluhovanou PSČ 36464; stejný obsah již náleží do správného bloku 36401. Přesná poloha původního faktu byla v Otročíně a v externí tabulce explorer_map_points pro 36464/fact_005 nebyl žádný navázaný bod. Po odstranění má záznam 36464 osm faktů a všech sedm jazykových polí má shodně osm položek.
- 36471: v nizozemském fact_001 opraven chybný význam výrazu „městečko“ (marktplaats → marktstadje).

Při ověření po odstranění chybně přiřazeného faktu klesl celkový počet faktů v této skupině z 299 na **298**. Ostatní ID faktů a obsah správného záznamu 36401 zůstaly nedotčené. Záznamy nebyly publikovány ani převedeny na V5.

**Zbývající práce:** úplná sémantická revize překladů u dosud neprošlých a částečně prošlých PSČ v celé skupině. Stav bloku proto zůstává **REVIEW REQUIRED**.

Ověření přiřazení Otročína k PSČ: https://regiony.kurzy.cz/psc/otrocin/ulice/ ; přehled PSČ 36401: https://www.posty-psc.cz/36401/ ; přehled PSČ 36464: https://www.posty-psc.cz/36464/ .


### Závěrečné doplnění – Johann Wolfgang Goethe (23. 11. 2026)

Na základě závěrečného průzkumu turistické úplnosti byl identifikován jeden významný chybějící příběh v Karlových Varech: Johann Wolfgang Goethe. Město Karlovy Vary uvádí jeho první návštěvu dne 5. 7. 1785 a celkem třináct návštěv v letech 1785–1823. Jeho vztah k městu dokládá také Goethova stezka a busta od Adolfa von Donndorfa z roku 1883.

- Do PSČ **36001** byl přidán `fact_032` „Johann Wolfgang Goethe – třináct návštěv Karlových Varů“.
- Český master text má 647 znaků; doplněny překlady `cs, de, en, es, fr, it, nl`.
- Přidány tři oficiální zdroje města Karlovy Vary.
- Poloha Goethovy busty: 50.2179747, 12.8829636; `accuracy=exact`, `map_category=personality`.
- Mapový bod `explorer_map_points` byl vložen a read-backem ověřen.
- Cílený read-back Supabase potvrdil 32 faktů v PSČ 36001, právě jeden `fact_032`, všech sedm jazykových položek a jeden mapový bod.
- Aktuální počet bloku: **27 PSČ / 299 faktů**. Stav záznamů se neměnil: `data_version=1`, `status=validated`.

Zdroje: https://www.karlovyvary.cz/cs/historie-karlovych-varu ; https://www.karlovyvary.cz/cs/node/17523 ; https://www.karlovyvary.cz/en/node/1550 .

**Turistická úplnost: uzavřena po doplnění Goetha.** Nezjištěna další zásadní chybějící památka, událost nebo osobnost v rozsahu tohoto auditu.

**Stav celého auditu zůstává REVIEW REQUIRED**, nikoli kvůli turistické úplnosti: dosud není dokončena úplná sémantická kontrola všech původních cizojazyčných překladů ve všech 27 PSČ. Záměrně prázdná poloha 36273/fact_004 (pískovna u Vojkovic) není chybou a zůstává beze změny. Publikace, V5, záloha, Neon import ani read-only lock nebyly provedeny.


### Pokračování úplné sémantické revize — checkpoint 23. 11. 2026

**Nově dokončené úplné jazykové průchody (český master proti DE/EN/ES/FR/IT/NL):** 36001 (32 faktů), 36004 (5), 36005 (7), 36006 (6), 36007 (9), 36010 (5), 36017 (6) a 36018 (4). Celkem 8 dalších PSČ a 74 faktů. U těchto záznamů byly porovnány významy, názvy, osoby, chronologie, zásadní číselné údaje a geografické souvislosti. Bez významové vady byly ponechány beze změny.

**Potvrzené opravy v této etapě:**
- 36005 / `fact_002`: ve všech šesti cizojazyčných verzích doplněna informace, že po desetiletích chátrání začala obnova kostela sv. Urbana. V němčině a angličtině byla zachována již existující informace o pamětních funkcích; nedošlo k jejímu duplicitnímu opakování.
- 36006 / `fact_002`: ve všech šesti cizojazyčných verzích doplněno, že sklárna ve Dvorech zahájila provoz v 90. letech 19. století.
- 36006 / `fact_005`: ve všech šesti cizojazyčných verzích doplněno upřesnění, že poválečný odsun nebyl dobrovolným stěhováním ani jedinou formou poválečného přesunu obyvatel, a informace o městem oznámeném umístění pamětní desky v listopadu 2026.

**Částečně zkontrolováno, zatím bez uzavření:** 36221. Byly porovnány a zkontrolovány viditelné položky, včetně úplného faktu o Ignáci Sichelbarthovi; celý záznam zatím není označen jako dokončený.

Předchozí úplné průchody z dřívějších etap zůstávají v platnosti: 36272, 36273, 36301, 36401, 36453 a 36464. Již dříve provedené dílčí opravy v dalších PSČ se nepovažují za úplný průchod.

**Aktuální souhrn úplných jazykových průchodů:** 14 z 27 PSČ (8 nově dokončených + 6 dříve dokončených). Zbývá 13 PSČ k úplné sémantické kontrole; 36221 je rozpracované a nesmí se započítat jako hotové. Celkový stav bloku zůstává **REVIEW REQUIRED**. Žádné změny `data_version`, `status`, schématu, zdrojů, ID faktů ani mapových poloh nebyly v této etapě provedeny.


### Jazyková revize — checkpoint 23. 11. 2026, pokračování

Dokončeny další úplné sémantické průchody českého masteru proti DE/EN/ES/FR/IT/NL:
- **36221** — celý záznam, včetně faktu o Ignáci Sichelbarthovi a jeho působení v Číně.
- **36222** — 1 fakt.
- **36225** — 15 faktů.
- **36233** — 5 faktů.
- **36234** — 7 faktů.
- **36235** — 21 faktů (ověřen skutečný seznam ID; číselné mezery v ID jsou historické a nebyly chybně považovány za chybějící překlady).

V těchto pěti nově uzavřených průchodech nebyla nalezena významová chyba vyžadující zásah; překlady zachovávají hlavní historické, geografické a osobnostní informace. U 36235 byly zvlášť porovnány i dlouhé pasáže o uranovém hornictví, důlní krajině, UNESCO a poválečných událostech. Bez potvrzeného problému nebyl text měněn.

**Aktuální souhrn úplných jazykových průchodů: 20 z 27 PSČ.** Kompletně uzavřené: 36001, 36004, 36005, 36006, 36007, 36010, 36017, 36018, 36221, 36222, 36225, 36233, 36234, 36235, 36272, 36273, 36301, 36401, 36453, 36464. Zbývá sedm úplných průchodů: **36236, 36251, 36262, 36263, 36452, 36461 a 36471**.

Celkový audit zůstává **REVIEW REQUIRED**, dokud nebude dokončena sémantická kontrola těchto sedmi PSČ. Změny se týkaly pouze překladových textů uvedených v předchozím checkpointu; nedošlo ke změně master faktů, ID, souřadnic, zdrojů, verze dat ani statusů.


### Uzavření úplné sémantické revize překladů — 23. 11. 2026

**Jazyková kontrola E je dokončena pro celý blok: 27/27 PSČ, 299/299 faktů.** Každý český master byl sémanticky porovnán se šesti překlady (`de, en, es, fr, it, nl`); zohledněny byly význam, osoby a místní jména, časové údaje, číselné údaje, historická omezení, přístupnost a podstatné souvislosti. Překlady nebyly přepisovány kvůli stylu, pokud byly významově správné.

**Nově dokončené poslední průchody:**
- 36236 — 10 faktů.
- 36251 — 23 faktů.
- 36262 — 13 faktů.
- 36263 — 9 faktů.
- 36452 — 19 faktů.
- 36461 — 12 faktů.
- 36471 — 11 faktů.

**Potvrzené opravy v závěrečné etapě:**
- 36236 / `fact_002`: sjednoceno pojmenování vodního díla jako Blatenský příkop; odstraněny volné či nepřesné překlady vlastního názvu.
- 36251 / `fact_007`, italština: odstraněno nechtěné zdvojení výrazu „libri catenati“.
- 36263 / `fact_002`: ve všech šesti cizojazyčných verzích doplněno, že historická budova dnes slouží jako škola.

Dříve zaznamenané opravy v 36005, 36006 a 36263 zůstávají v platnosti. Po každé závěrečné opravě byl příslušný překlad načten zpět a ověřen.

**Závěrečný strukturální read-back přes přesný inventář 27 PSČ:** všech 299 master faktů má odpovídající položku v každém z jazyků DE/EN/ES/FR/IT/NL. Počty položek v každém jazyce přesně souhlasí s počtem českých master faktů u každého PSČ; kontrola `missing_translation_ids` vrátila **0 pro všech 27 PSČ**. Celkem 2 093 překladových položek (299 × 7 jazyků včetně češtiny); žádný nesoulad ID ani chybějící cizojazyčná položka.

**Výsledek kontrolní oblasti E — PASS.** Kompletní sémantická revize všech původních cizojazyčných překladů je uzavřena; žádný jazykový nález nezůstává otevřený.

**Výsledek celého auditu zůstává REVIEW REQUIRED do samostatného potvrzení ostatních kontrolních oblastí podle `prompt_audit.md` V2.1.** Tato jazyková etapa sama o sobě nemění status záznamů, `data_version`, schéma, inventář, `sequence.json`, skupiny, mapové polohy ani zdroje. Záměrně prázdná poloha 36273/`fact_004` (pískovna u Vojkovic) zůstává podle pravidel auditu bez odhadu. Nic nebylo publikováno, zálohováno, importováno do Neon ani zamčeno.


### Konečné uzavření auditu podle prompt_audit.md V2.1 — 23. 11. 2026

Po dokončení jazykové oblasti E byly samostatně uzavřeny zbývající kontrolní oblasti. Kontrola proběhla nad přesným inventářem 27 PSČ a nad 299 existujícími fakty; rozsah ani pořadí PSČ se neměnily.

**A — Zásadní turistická úplnost: PASS.** Dříve uzavřený průzkum hlavních regionálních dominant a příběhů zůstává platný. Doplnění Goethova příběhu do 36001/fact_032 uzavřelo poslední zjištěnou významnou mezeru. Nebyla zjištěna další zásadní chybějící památka, událost ani osobnost.

**B — PSČ a správní údaje: PASS.** 27/27 záznamů odpovídá přesnému inventáři; 26 záznamů náleží do okresu Karlovy Vary a 36461 do okresu Cheb, všech 27 do Karlovarského kraje. Sídla obsluhujících pošt a správní údaje byly převzaty z již dokončeného ověření. RÚIAN CSV obsahuje všech 27 kódů a jejich geografické obvody; sequence.json je obsahuje právě jednou.

**C — Duplicity a přiřazení faktů: PASS.** Cílená kontrola celého bloku nenašla duplicitní názvy ani totožné texty. ID faktů jsou v rámci každého záznamu jedinečná. Již dříve opravené chybné přiřazení Otročína v 36464 zůstává vyřešeno; nebyla zjištěna nová zjevná duplicita ani neoprávněné opakování jednoho příběhu.

**D — Kategorie mapy: PASS.** Všech 299 faktů používá povolenou hodnotu map_category. Byla opravena jediná nepovolená obsahová kategorie: 36236/fact_008 změněna z historické hodnoty local_culture na standardní culture_and_industry, která odpovídá místní lyžařské tradici. Read-back potvrdil opravu; map_category=sports_venue zůstalo beze změny.

**E — Překlady: PASS.** Kompletní sémantická kontrola 299/299 českých master faktů proti DE/EN/ES/FR/IT/NL je uzavřena. Všech sedm jazyků má odpovídající ID, žádné chybějící překladové ID; celkem 2 093 jazykových položek.

**F — JSON, databáze a technická konzistence: PASS.** Cílený read-back potvrdil přesně 27/27 řádků v Supabase, ID 9178–9204, country_code=CZ, data_version=1 a status=validated. Všech 27 JSON objektů obsahuje povinná top-level pole a odpovídající PSČ, město, okres a kraj. Všech 299 faktů má platné a jedinečné ID, povinná pole, neprázdný titul a text, neprázdné zdroje a platnou obsahovou i mapovou kategorii. Žádný český master text není kratší než 350 znaků. Sedm jazykových sad má úplná odpovídající ID. Rozdíly mezi content.sources a samostatným databázovým sloupcem sources byly bezpečně synchronizovány z kanonického JSON obsahu u 13 záznamů: 36004, 36222, 36233, 36234, 36236, 36251, 36263, 36272, 36301, 36401, 36452, 36453 a 36464. Závěrečný read-back potvrdil 0 rozdílů. Inventář, sequence a skupina v sequence.json zůstaly beze změny.

**Mapové body — oprava potvrzeného nesouladu.** Cílené čtení explorer_map_points podle ID 27 auditovaných záznamů odhalilo, že ze sedmi dříve doložených bodů zůstal uložen pouze Goethův bod. Šest chybějících bodů bylo obnoveno přímo z ověřených facts[].location a map_category a následně načteno zpět: 36001/fact_030, 36001/fact_031, 36272/fact_006, 36272/fact_008, 36301/fact_013 a 36301/fact_014. Read-back nyní potvrzuje všech 7/7 doložených bodů včetně 36001/fact_032. Nebyly vytvářeny odhadované souřadnice ani měněny jiné mapové polohy.

**G — Souřadnice: PASS s dokumentovanou výjimkou.** Jediná hodnota location: null zůstává 36273/fact_004 — Pískovna u Vojkovic. Přesnou polohu parcely nelze spolehlivě doložit; podle pravidel se proto souřadnice neodhadují. Výjimka je zdokumentovaná, nemá vliv na uzavření auditu a záznam zůstává zachován.

**H — Zjevné věcné vady: PASS.** V rámci cíleného auditu nebyla zjištěna žádná další zjevná nepravda, nesprávné přiřazení, propagace ani jiná podstatná věcná vada vyžadující zásah. Nebyla opakována kompletní faktografická rešerše všech jednotlivých faktů.

## Konečný výsledek

**PASS — Audit Karlovarska 36001–36471 je dokončen podle prompt_audit.md V2.1.**

- 27/27 PSČ, 299 faktů, 2 093 jazykových položek.
- Kontrolní oblasti A–H uzavřeny; G obsahuje jednu zdokumentovanou a přijatelnou negeolokalizovatelnou výjimku.
- Opraveno: 1 nepovolená obsahová kategorie, 13 synchronizací zdrojového sloupce, 6 obnovených mapových bodů.
- Závěrečný read-back: 0 neplatných kategorií, 0 chybějících zdrojů, 0 rozdílů zdrojového sloupce, 0 duplicitních názvů/textů, 0 českých master textů pod 350 znaků, 0 chybějících překladových ID.
- Záznamy zůstávají data_version=1, status=validated.

**Publikace V5, změna statusu, záloha, Neon import a read-only lock nebyly provedeny.** Podle promptu se provádějí pouze na samostatné výslovné vyzvání uživatele.
