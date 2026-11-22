# Auditní tahák Sokolovska — PSČ 35601–35801

**Kanonické ID:** `CZ-SOKOLOVSKO-35601-35801`  
**Datum uzavření:** 2026-11-22  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.1  
**Stav:** **COMPLETED / PUBLISHED V5 / BACKUP VERIFIED**  
**Výjimka:** 35735 / fact_019 — Lesopark Vintířov zůstává bez polohy (`location=null`) záměrně; přesný ani důvěryhodný orientační bod nebyl doložen a uživatel tuto nevýznamnou mapovou výjimku výslovně přijal.

## 1. Rozsah a inventář

Audit zahrnuje všechna skutečně existující česká PSČ v intervalu 356xx–359xx podle `data/czechia/sequence.json`. V bloku je **14/14 PSČ**; v aktuální sekvenci není žádné PSČ 359xx.

| PSČ | Poštovní lokalita | ID záznamu | Faktů |
|---|---|---:|---:|
| 35601 | Sokolov | 9164 | 17 |
| 35604 | Dolní Rychnov | 9165 | 8 |
| 35701 | Rotava | 9166 | 7 |
| 35703 | Svatava | 9167 | 12 |
| 35707 | Oloví (část Hory) | 9168 | 9 |
| 35708 | Krajková | 9169 | 8 |
| 35709 | Habartov | 9170 | 13 |
| 35731 | Horní Slavkov | 9171 | 27 |
| 35733 | Loket | 9172 | 29 |
| 35734 | Nové Sedlo | 9173 | 9 |
| 35735 | Chodov | 9174 | 19 |
| 35751 | Kynšperk nad Ohří | 9175 | 10 |
| 35755 | Bukovany | 9176 | 4 |
| 35801 | Kraslice | 9177 | 17 |
| **Celkem** | **14 PSČ** | **9164–9177** | **189 faktů** |

Pozor na 35708: v databázi existuje také samostatný starší placeholder (ID 2702). Auditovaný záznam je ID 9169. Publikace ani záloha placeholder nezahrnuly; zůstal beze změny.

## 2. Průzkum turistické úplnosti

Průzkum zásadních památek, událostí a osobností byl proveden před obsahovým auditem. Byly doplněny tři významné mezery:

1. **35601 / fact_016 — Středověký důl Jeroným v Čisté.** Národní kulturní památka a mimořádně zachovaný cínový důl. Doplněn vstupní bod a odborné zdroje.
2. **35601 / fact_017 — Miloš Urban.** Spisovatel narozený roku 1967 v Sokolově; za román *Hastrman* získal Magnesii Literu. Použit pouze reprezentativní bod Sokolova, nikoli nedoložená adresa narození.
3. **35801 / fact_017 — Johann David Starck.** Významný průmyslník narozený v Kraslicích začátkem května 1770. Text zachovává rozdílné pramenné údaje o přesném dni narození a používá reprezentativní bod města.

Další důležitá témata již byla v bloku zastoupena: hrad Loket, poutní areál Chlum Svaté Maří, Hartenberg, hornické dědictví Horního Slavkova a Krásna, Dlouhá stoka, Habartovské události září 1938, tábor Zwodau ve Svatavě, zajatecké mauzoleum v Jindřichovicích, stávka sklářů v Oloví roku 1930 a události konce druhé světové války v Lokti.

## 3. Obsahové a překladové opravy

- Všech **189 českých master textů** splňuje minimální délku 350 znaků.
- Dokončena sémantická kontrola **189 × 6 = 1 134 překladových položek** v jazycích DE/EN/ES/FR/IT/NL.
- Ověřeny význam, úplnost, jména, data, místa, historická chronologie a zachování výhrad i nejistot.
- Opraveny věcné a jazykové nepřesnosti v překladech, mimo jiné význam pletařské školy, rudného mlýna, bývalé vodárny, názvu Globen, datování hradu Loket a historických událostí.
- Odstraněny duplicitní věty u vybraných faktů v Lokti a Chodově.
- **35735 / fact_007 — Vodní nádrž Tatrovice:** původní text nebyl nalezen v dostupném repozitáři ani ověřené záloze, proto byl fakt znovu sestaven z oficiálních a odborných zdrojů. Text rozlišuje technologickou vodu pro průmyslový komplex ve Vřesové, dřívější úpravu pitné vody do roku 2009, přivaděč ze Skřiváně a malou vodní elektrárnu se dvěma Bánkiho turbínami.
- Česká zrcadla `facts[].title/text` a `translations.cs` jsou synchronizována; závěrečný read-back potvrdil **0 rozdílů**.
- Všech sedm jazyků `cs, de, en, es, fr, it, nl` má úplné a správně seřazené položky pro všech 14 záznamů.

## 4. Geolokace a mapový index

- Z původně chybějících poloh bylo doplněno **13/14** důvěryhodných přesných nebo výslovně reprezentativních bodů.
- **35735 / fact_019 — Lesopark Vintířov:** zůstává `location=null`. Poloha nebyla odhadnuta; uživatel výjimku přijal a audit se kvůli ní neblokuje.
- Všech 13 doplněných bodů má odpovídající typ, přesnost a zdroj.
- Po publikaci vytvořil databázový trigger **188 mapových bodů pro 188 faktů s doloženou polohou**. Jediný fakt bez polohy není v mapovém indexu, jak má být.
- Žádné souřadnice nebyly vymyšleny.

## 5. Strukturální a zdrojová kontrola

- 14/14 auditovaných záznamů existuje a odpovídá přesnému inventáři `sequence.json` a `groups`.
- Všech 14 poštovních lokalit bylo ověřeno podle oficiálních detailů poboček České pošty PoštaOnline.
- 0 chybějících překladů, 0 rozdílů českých zrcadel, 0 duplicitních ID nebo názvů, 0 chybějících zdrojů, 0 neplatných kategorií.
- U všech 14 záznamů zůstaly kompletní překladové struktury a pořadí ID.
- Zvláštní kontrola potvrdila, že placeholder 35708 / ID 2702 nebyl součástí publikační ani zálohovací množiny.

## 6. Publikace V5

Dne 2026-11-22 bylo přesně 14 auditovaných záznamů (ID 9164–9177) převedeno na:

- `data_version = 5`
- `status = published`

Databázový read-back potvrdil **14/14 V5 / published**. Žádný další záznam nebyl změněn. Mapový trigger vytvořil 188/188 očekávaných mapových bodů.

## 7. Záloha Dropbox — VERIFIED

**Záloha:** `CZ-AUDIT-SOKOLOVSKO-35601-35801-2026-11-22T11-49-02-985Z`  
**Složka:** `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/DATABASE/2026-11-22T11-49-02-985Z/`

Obsah složky:
- `postal_codes/part-0001.json` — 14 záznamů
- `explorer_map_points/part-0001.json` — 188 mapových bodů
- `explorer_validation_schemas.json` — 1 české validační schéma
- `manifest.json` — inventář, počty a SHA-256
- samostatný provozní log je v `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/BACKUP_LOG/2026-11-22T11-49-02-985Z.json`

Manifest potvrzuje `every_file_uploaded_and_read_back=true`, `sha256_checked=true` a že existující soubory nebyly přepsány. SHA-256 read-back všech tří datových souborů prošel. Záloha zahrnuje přesně 14 publikovaných PSČ, 189 faktů, 188 mapových bodů a 1 validační schéma.

**Poznámka k formátu:** byla použita existující cílená JSON zálohovací funkce `travel-backup-validated`. Tento postup vytvořil ověřené JSON exporty a manifest, nikoli samostatný soubor `restore.sql`; nezahrnuje DDL/migrace, SQL funkce, tajné klíče ani konfiguraci projektu. Záloha je read-back ověřená, ale není plným dumpem databázového schématu.

Záznam zálohy v `public.backup_snapshots` má stav `VERIFIED`; pracovní vlna `CZ-AUDIT-SOKOLOVSKO-35601-35801-001` je `COMPLETE`.

## 8. Konečný stav a bezpečnost

**Výsledek: COMPLETED / PUBLISHED V5 / BACKUP VERIFIED.**

- 14/14 PSČ publikováno V5.
- 189 faktů a 1 134 sémanticky zkontrolovaných překladů.
- 188 mapových bodů pro 188 lokalizovatelných faktů.
- Jediná přijatá mapová výjimka: Lesopark Vintířov bez polohy.
- Dropbox JSON záloha a manifest read-back ověřeny.
- Starší placeholder 35708 / ID 2702 zůstal nedotčen.
- **Read-only zámek nebyl aktivován.**
- `sequence.json` nebyl změněn.
- Žádné jiné PSČ nebylo změněno.
