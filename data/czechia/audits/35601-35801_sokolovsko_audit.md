# Auditní tahák Sokolovska — PSČ 35601–35801

**Kanonické ID:** `CZ-SOKOLOVSKO-35601-35801`  
**Datum checkpointu:** 2026-11-22  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.1  
**Stav:** `REVIEW REQUIRED` — turistická úplnost a potvrzené opravy jsou zapsány; otevřená zůstává úplná sémantická revize dosud neupravených cizojazyčných překladů a jedna nedoložená poloha Lesoparku Vintířov. **Bez publikace V5, bez zálohy, bez read-only zámku.**

## 1. Rozsah a inventář

Uživatelem zadaný číselný interval: **356 xx až 359 xx**. Audit se řídí pouze skutečně existujícími českými PSČ v `data/czechia/sequence.json`; nevytváří nové kódy.

Existující inventář obsahuje **14/14 PSČ**:

| PSČ | Město / poštovní lokalita | Počet faktů po opravách |
|---|---|---:|
| 35601 | Sokolov | 17 |
| 35604 | Dolní Rychnov | 8 |
| 35701 | Rotava | 7 |
| 35703 | Svatava | 12 |
| 35707 | Oloví (část Hory) | 9 |
| 35708 | Krajková | 8 |
| 35709 | Habartov | 13 |
| 35731 | Horní Slavkov | 27 |
| 35733 | Loket | 29 |
| 35734 | Nové Sedlo | 9 |
| 35735 | Chodov | 19 |
| 35751 | Kynšperk nad Ohří | 10 |
| 35755 | Bukovany | 4 |
| 35801 | Kraslice | 17 |
| **Celkem** | **14 PSČ** | **189 faktů** |

- Původní stav: 14 PSČ / 186 faktů. Po doplnění tří zásadních témat: **189 faktů**.
- `sequence.json` a `groups`: přesná shoda všech 14 kódů, každý právě jednou.
- **V intervalu 359 xx není v aktuální české sekvenci žádné PSČ.** Žádný kód 359xx nebyl vytvořen ani doplněn.
- RÚIAN reference: CSV z oficiálního celostátního ZIP archivu ČÚZK; manifest uvádí aktualizaci feedu 2026-11-01, 3 023 585 adresních řádků a 2 677 unikátních PSČ. Všech 14 cílových kódů se v CSV vyskytuje a má adresní body.
- Přiřazení dolu Jeroným k 35601 je podloženo RÚIAN: Podstrání je část obce Rovná a Rovná je v agregaci PSČ 35601.

## 2. Průzkum turistické úplnosti — proveden jako první

Průzkum se zaměřil na zásadní památky, události a osobnosti celého území. Byly nalezeny a doplněny tři významné mezery:

1. **35601 / fact_016 — Středověký důl Jeroným v Čisté.** Národní kulturní památka a mimořádně zachovaný cínový důl. NPÚ jej řadí mezi nejvýznamnější památky svého druhu v Evropě. Doplněn vstupní bod 50.1021575, 12.7120394; adresa Podstrání 13, 356 01 Rovná. Zdroje: [NPÚ – Industriální památky](https://www.npu.cz/technicke-pamatky), [NPÚ – právní stav NKP](https://iispp.npu.cz/mis_public/documentDetail.htm?id=72458), [Archeologický atlas](https://www.archeologickyatlas.cz/cs/lokace/cista_so_dul_jeronym), [Živý kraj – turistický materiál](https://zivykraj.cz/wp-content/uploads/2022/08/sazba_CJ_kor.pdf).
2. **35601 / fact_017 — Miloš Urban.** Spisovatel narozený roku 1967 v Sokolově; za román *Hastrman* získal Magnesii Literu a kniha byla zfilmována. Přesná adresa narození není doložena; je použit pouze reprezentativní orientační bod v Sokolově. Zdroje: [Nakladatelství Argo](https://argo.cz/udalosti/milos-urban-autorske-cteni-a-beseda/), [Český rozhlas](https://www.irozhlas.cz/node/8169070).
3. **35801 / fact_017 — Johann David Starck.** Významný průmyslník narozený v Kraslicích začátkem května 1770. Text záměrně neuvádí přesný den, protože prameny uvádějí 1., 3. nebo 4. květen. Přesná adresa narození není doložena; je použit pouze reprezentativní orientační bod v Kraslicích. Zdroje: [KAM po Česku – Vizionářský podnikatel Starck](https://www.kampocesku.cz/clanek/34847/vizionarsky-podnikatel-starck), [KAM po Česku – Úspěšný podnikatel z rodu Starcků](https://www.kampocesku.cz/clanek/17093/uspesny-podnikatel-z-rodu-starcku), [Österreichisches Biographisches Lexikon](https://www.biographien.ac.at/oebl_13/101.pdf), [Biografický slovník českých zemí – Kraslice](https://biography.hiu.cas.cz/wiki/Kraslice).

Další zásadní témata již v bloku zastoupena jsou: hrad Loket, poutní areál Chlum Svaté Maří, Hartenberg, hornické dědictví Horního Slavkova a Krásna, Dlouhá stoka, Habartovské události září 1938, tábor Zwodau ve Svatavě, zajatecké mauzoleum v Jindřichovicích, stávka sklářů v Oloví roku 1930 a události konce druhé světové války v Lokti. Toni Schönecker již má zastoupení prostřednictvím příběhu rozhledny Hard; duplicitní samostatný fakt nebyl přidán.

Po doplnění těchto tří témat nebyla v rychlém tematickém průzkumu zjištěna další srovnatelně zásadní mezera.

## 3. Provedené opravy v Supabase

- **35601:** přidány `fact_016` Důl Jeroným a `fact_017` Miloš Urban.
- **35801:** přidán `fact_017` Johann David Starck.
- Všechna tři nová fakta mají zdroje, platné `category` a `map_category`, český master a překlady DE/EN/ES/FR/IT/NL. Read-back potvrdil 17 faktů a 17 jazykových položek v každém ze sedmi jazyků u 35601 i 35801.
- **35604 / fact_003:** český master rozšířen o doložený začátek těžby uhlí roku 1813; odpovídajícím způsobem aktualizováno všech šest cizojazyčných verzí.
- **35708:** opraveno `content.state` z neúplného „Karlovarský“ na „Karlovarský kraj“.
- **19 krátkých master textů:** všech 19 bylo rozšířeno nad 350 znaků a jejich překlady DE/EN/ES/FR/IT/NL byly upraveny. Všechny texty prošly následným read-backem.
- **35735 / fact_007 — Vodní nádrž Tatrovice:** při opravě zdrojového rozlišení technologické a pitné vody byl původní text nechtěně nahrazen pouze doplňující větou. Původní znění nebylo v dostupném repozitáři ani v ověřené záloze nalezeno; proto byl celý fakt znovu sestaven z oficiálních a odborných zdrojů. Nový master a šest překladů byly uloženy a načteny zpět. Text nyní rozlišuje technologickou vodu, dřívější úpravu pitné vody do roku 2009, přivaděč ze Skřiváně a malou vodní elektrárnu se dvěma Bánkiho turbínami.
- **Rozdíly `facts[].title/text` vs. `translations.cs`:** synchronizováno 28 českých položek podle ID:
  - 35604: fact_003, fact_008;
  - 35707: fact_005;
  - 35708: fact_001;
  - 35735: 17 položek;
  - 35751: fact_001 až fact_007.
- Po finální opravě textu Miloše Urbana byla synchronizována také jeho česká překladová položka v 35601.
- Read-back potvrzuje 0 rozdílů `facts` vs. `translations.cs` v kontrolovaných opravených řádcích.

## 4. Strukturální a překladová kontrola

- 14/14 řádků existuje; původní počet 186 faktů, konečný počet **189 faktů**.
- Všech 14 řádků zůstalo `data_version=1`, `status=validated`; žádný záznam nebyl publikován ani převeden na V5.
- Všech sedm jazyků `cs, de, en, es, fr, it, nl` je u všech 14 PSČ přítomno; počty položek odpovídají počtu faktů.
- Pořadí ID faktů je shodné mezi českým masterem a každým ze šesti cizojazyčných polí u **14/14 PSČ**.
- ID faktů jsou unikátní; v kontrolovaném bloku nebyly zjištěny duplicitní názvy faktů.
- Povolené hodnoty `category` a `map_category` prošly strukturální kontrolou.
- Prázdné jazykové položky ani chybějící ID nebyly nalezeny.
- **Délka českých masterů:** 0/189 textů pod 350 znaků.
- **Česká zrcadla:** facts[].title/text vs. translations.cs: 0 rozdílů v celém bloku.
- **Překlady:** u všech 14 PSČ odpovídá počet položek a všechna ID jsou přítomna ve všech šesti cizích jazycích. U 19 nově rozšířených faktů byly připraveny a read-backem ověřeny všechny překlady DE/EN/ES/FR/IT/NL.
- **Omezení:** úplná individuální sémantická kontrola všech 1 134 cizojazyčných textů (189 × 6) nebyla dokončena. Po odečtení 19 právě upravených faktů zůstává k samostatné sémantické revizi 170 faktů / 1 020 překladových položek.

## 5. Otevřené nálezy — REVIEW REQUIRED

### A. Krátké české master texty

**Uzavřeno: 19/19 původně krátkých faktů bylo rozšířeno.** Závěrečný read-back potvrdil 0/189 českých master textů pod 350 znaků. Všech 19 nově rozšířených faktů má také aktualizované překlady do DE/EN/ES/FR/IT/NL.

### B. Neověřené polohy

Z původních 12 chybějících poloh bylo **11 doplněno** přesnými nebo výslovně reprezentativními body. Navíc byla doplněna dvě reprezentativní umístění nových osobnostních faktů (Miloš Urban — Sokolov; Johann David Starck — Kraslice). Všechny tyto body mají vyplněný řízený typ, přesnost a zdroj.

- **Zbývá 1 položka:** 35735 / fact_019 — Lesopark Vintířov. Obecní zdroje potvrzují areál na západní straně obce a jeho historii, ale nebyl nalezen spolehlivý bod uvnitř areálu. location=null zůstává záměrně; souřadnice nebyly odhadnuty.

U historických a osobnostních témat, kde není známa přesná adresa, jsou použity pouze označené reprezentativní body obce nebo místní části (area_representative), nikoli falešně přesná místa událostí či narození.

### C. Explorer map points

Dotaz podle skutečných ID 9164–9177 v public.explorer_map_points vrátil 0 řádků. Všech 14 záznamů je stále validated / V1 a nebylo publikováno; mapový index nebyl měněn. Jeho vytvoření a kontrola všech fakt–mapový bod párů patří do budoucího kroku publikace V5.

## 6. Závěr a bezpečnostní stav

**Výsledek: REVIEW REQUIRED.**

Turistická úplnost byla cíleně doplněna o tři zásadní témata. Opraveny byly potvrzené chyby v českém stavu kraje, českých překladových zrcadlech a jednom historickém master textu. Strukturální kontrola a pořadí jazykových ID prošly.

Audit nelze označit za bezvýhradný PASS, dokud nebude uzavřena úplná sémantická revize zbývajících 1 020 cizojazyčných položek a nebude rozhodnuto, zda se podaří doložit přesný bod Lesoparku Vintířov. Mapový index bude vytvořen a ověřen až v publikačním kroku V5.

**Neprovedeno:** publikace V5, změna `status`, změna `data_version`, záloha na Dropbox, read-only trigger ani změna `sequence.json`. Žádné jiné PSČ nebylo změněno.
