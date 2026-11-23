# Audit PSČ 39301–39601 — Pelhřimovsko, Pacovsko, Humpolecko a Kamenicko

**Kanonické ID:** CZ-39301-39601-PELHŘIMOVSKO  
**Auditní prompt:** V2.1 — cílený a databázově šetrný audit  
**Datum:** 23. 11. 2026  
**Výsledek:** REVIEW REQUIRED  
**Zdroj pravdy:** Supabase, pouze přesný český rozsah

## 1. Rozsah a inventář

Očekávaných 39 PSČ podle `sequence.json`:

39301, 39401, 39403, 39404, 39405, 39409, 39411, 39412, 39413, 39414, 39415, 39421, 39422, 39424, 39426, 39427, 39428, 39443, 39444, 39445, 39446, 39451, 39452, 39456, 39459, 39461, 39462, 39463, 39464, 39468, 39470, 39491, 39492, 39493, 39494, 39495, 39496, 39501, 39601

- Sequence: 39 kódů.
- RÚIAN CSV: všech 39 kódů nalezeno.
- Supabase: 39/39 očekávaných řádků nalezeno.
- Původní obsah: 227 faktů / 1 589 jazykových položek.
- Po doplnění dvou faktů do 39301: 229 faktů / 1 603 jazykových položek.
- Všechny řádky zůstaly `data_version=1`, `status=validated`.
- `sequence.json`, RÚIAN reference ani rozsah nebyly změněny.

Použité reference:
- `prompt_audit.md` V2.1
- `schema.json`
- `CONTENT_STANDARD.md`
- `prompt_rework.md`
- `sequence.json`
- `reference/README.md`
- `reference/ruian_postcodes.csv`
- `reference/ruian_import_manifest.json` (feed aktualizován 2026-11-01; zpracovaný archiv 2026-10-31)

## 2. Zásadní turistická úplnost — uzavřeno

Hlavní regionální dominanty a příběhy jsou pokryty: Pelhřimov, Křemešník, Želivský klášter, hrad Orlík, Humpolec, Pacov, Kámen, Kamenice nad Lipou, Počátky, Červená Řečice, Kaliště/Gustav Mahler, Antonín Sova, Aleš Hrdlička, Jan Želivský, Bernard Bolzano, Otakar Březina, Vítězslav Novák, bitva u Křeče a Leskovická tragédie.

Před auditem chyběly dva významné pelhřimovské příběhy. Byly doplněny do 39301:
1. `fact_011` — Mikuláš Biskupec z Pelhřimova, táborský biskup a husitský teolog; kategorie `people`, priorita A, map_category `personality`.
2. `fact_012` — zemské sjezdy v Pelhřimově v letech 1444–1450; kategorie `history`, priorita A, map_category `historical_monument`.

Oba fakty mají ověřené zdroje a všech sedm jazykových verzí. Přesné místo narození Mikuláše Biskupce ani jednotné konkrétní místo konání sjezdů nebylo bezpečně doloženo; `location=null` je záměrné. U sjezdů nebyl uváděn pevný počet, protože prameny se v počítání liší.

Zdroje k doplnění:
- https://www.muzeumpe.cz/historiemesta/
- https://www.phil.muni.cz/fil/scf/komplet/mikbis.html
- https://cs.wikisource.org/wiki/Ott%C5%AFv_slovn%C3%ADk_nau%C4%8Dn%C3%BD/z_Pelh%C5%99imova
- https://dspace.jcu.cz/bitstream/handle/20.500.14390/30482/Gymnazium_v_Pelhrimove_v_letech_1871-1921.pdf?isAllowed=y&sequence=1

## 3. Provedené opravy

### Správní údaje
- `content.state` sjednoceno na `Kraj Vysočina` u 39401, 39403, 39443 a 39444.
- U 39443 zůstává `city=Humpolec`: historická pošta Mladé Bříště (39443) byla zrušena k 30. 6. 2023 a Humpolec je uváděn jako nejbližší pobočka. Geografické fakty zůstávají správně přiřazeny k Mladým Bříštím.
- `39443` nebylo přepsáno na Mladé Bříště jako sídlo obslužné pošty.

### Překlady
- 39422: české položky `translations.cs.facts` synchronizovány s českými master texty; read-back potvrdil 6/6 shod.
- 39401: české texty odpovídají master textům; kratší varianty čtyř českých titulků jsou významově správné, proto nebyly stylisticky přepisovány.
- V původním bloku bylo ověřeno strukturální přiřazení všech 7 jazyků: 227/227 faktů má odpovídající jazykovou položku; žádné chybějící nebo nadbytečné ID.
- Nové dva fakty v 39301 mají 7/7 jazykových verzí a read-back PASS.

### Geografické polohy
Doplněny dvě dříve prázdné polohy s doloženou přibližnou přesností (při počátečním průchodu):
- 39462 / fact_006 — pomníky ve středu Libkovy Vody; 49.3764889, 15.1910111; `approximate`.
- 39463 / fact_005 — pomník obětí první světové války v Častrově; 49.3078, 15.1802889; `approximate`.

Read-back obou změněných faktů PASS. Z původních 21 prázdných poloh bylo postupně doplněno šest; níže zůstává 15 položek, u nichž je nutné ještě ověřit vhodný orientační bod, nebo se fakt vztahuje k více místům či širšímu území.

## 4. Mechanické kontroly

- 39/39 PSČ v sequence, RÚIAN CSV a Supabase.
- 229 faktů po doplnění.
- 0 duplicitních názvů faktů.
- 0 duplicitních plných českých textů.
- 0 nepovolených `category` hodnot.
- 0 nepovolených `map_category` hodnot.
- 0 strukturálních chyb v počtech a přiřazení jazykových ID.
- AJV nebylo spuštěno — auditní prompt jej výslovně nepožaduje.

## 5. Otevřené položky — REVIEW REQUIRED

### 5.1 Krátké české master texty — PASS

Všech 16 původně krátkých českých master textů bylo doplněno ověřitelnými a relevantními informacemi. U každého z nich byly aktualizovány odpovídající texty v šesti cizojazyčných verzích (de, en, es, fr, it, nl) a česká jazyková kopie byla synchronizována s master textem.

Po zápisu byl cíleně načten zpět pouze změněný blok sedmi PSČ. Výsledek:
- 16/16 opravených českých textů má nejméně 350 znaků.
- 16/16 českých položek v translations.cs přesně odpovídá facts[].text.
- 96/96 cizojazyčných překladů existuje a obsahuje text i titulek.
- 0 duplicitních ID; počet faktů v jednotlivých záznamech zůstal beze změny.
- Nebyla provedena žádná změna location ani ID faktů.

| PSČ / fakt | Nová délka |
|---|---:|
| 39401 / fact_001 | 491 |
| 39401 / fact_004 | 461 |
| 39404 / fact_001 | 385 |
| 39404 / fact_002 | 392 |
| 39404 / fact_003 | 459 |
| 39404 / fact_004 | 452 |
| 39404 / fact_006 | 410 |
| 39404 / fact_007 | 459 |
| 39411 / fact_003 | 405 |
| 39411 / fact_006 | 503 |
| 39412 / fact_004 | 447 |
| 39428 / fact_004 | 464 |
| 39446 / fact_003 | 434 |
| 39446 / fact_004 | 446 |
| 39463 / fact_003 | 412 |
| 39463 / fact_005 | 502 |

Použité zdroje pro doplnění zahrnují oficiální weby obcí/městysů Rynárec, Nový Rychnov, Cetoraz, Obrataň a Častrov, dále Národní památkový ústav a Atlas české architektury. Významové doplnění zahrnuje například historický silniční most a památkový soubor Rynárce, další požár Nového Rychnova a osudy rodin Ančerlových a Stettnerových, původ Jiřího Němce v klubu Slavoj Pacov, Deymovu hrobku v Cetorazi, pamětní souvislosti Obrataně, podobu sochy ve Velké Chyšce, archeologický kontext Červené Řečice a druhý památník v Častrově.

### 5.2 Zbývající location=null

Při geografickém pokračování byly doplněny čtyři obhajitelné orientační polohy a všechny byly načteny zpět:
- 39411/fact_003 — pomník obětem obou světových válek v jižní ohradní zdi hřbitova v Cetorazi; poloha areálu hřbitova, 49.455397, 14.956683; `area_representative`.
- 39412/fact_003 — pomník obětem první světové války u obecního hřbitova v Obratani; orientační poloha hřbitova, 49.4262306, 14.9372444; `approximate`.
- 39428/fact_002 — kaple sv. Jana Křtitele na Stražišti; 49.53393, 15.00044; `approximate`.
- 39428/fact_004 — parčík pod kostelem sv. Jana Křtitele ve Velké Chyšce, kde stojí socha sv. Jana Nepomuckého; orientační bod, 49.5116583, 15.0375139; `approximate`.

Zůstává 15 případů:
- 39403/fact_001 — historický vývoj města bez jediného objektu.
- 39404/fact_004 — kolomazný kámen; konkrétní poloha u úřadu městyse je popsána, ale nebyly ověřeny souřadnice úřadu/kamene.
- 39404/fact_005 — osobnost Viléma Pospíšila; rodný dům/vila existují v příběhu, ale bezpečný konkrétní bod zatím nebyl ověřen.
- 39404/fact_006 — polní opevnění V Šancích; doložena širší lokalita, nikoli bezpečný bod.
- 39404/fact_007 — osud rodin Ančerlových a Stettnerových; konkrétní místo události není doloženo.
- 39412/fact_004 — více paměťových míst kolem kostela, nikoli jeden objekt.
- 39412/fact_005 — dvě usedlosti lidové architektury, tedy více míst.
- 39426/fact_005 — archeologická lokalita zaniklých Brankovic/dehtářů; lokalizace v nivě Lukaveckého potoka východně od Dřevozpracujícího družstva je známa, ale přesný bod výzkumu nebyl ověřen.
- 39428/fact_006 — historie dobrovolných hasičů, nikoli jedno konkrétní místo.
- 39428/fact_007 — více drobných sakrálních objektů.
- 39451/fact_003 — zaniklé panské sídlo a lihovar bez bezpečně určené polohy.
- 39452/fact_001 — historický vývoj obce bez jediného objektu.
- 39459/fact_001 — historický vývoj obce bez jediného objektu.
- 39459/fact_003 — škola v Koberovicích; přesný bod budovy zatím nebyl ověřen.
- 39462/fact_001 — historický vývoj obce bez jediného objektu.

### 5.3 Sémantická kontrola překladů

Strukturální kontrola všech sedmi jazyků PASS. Úplná individuální sémantická kontrola všech 1 374 původních cizojazyčných textů však nebyla v tomto běhu dokončena. Nové překlady fact_011 a fact_012 byly zkontrolovány při tvorbě. Tato oblast proto zůstává REVIEW REQUIRED; žádné plošné přepisování správných překladů nebylo provedeno.

## 6. Životní cyklus a další krok

- Supabase: 39/39 záznamů zůstává `data_version=1`, `status=validated`.
- V5 / published: NEPROVEDENO.
- Dropbox záloha: NEPROVEDENA.
- Neon: NEČTEN, NEZAPISOVÁN.
- Read-only lock: NEPROVEDEN.
- `sequence.json` a referenční RÚIAN soubory: BEZE ZMĚNY.

**Další krok:** dokončit geografické posouzení zbývajících 15 poloh a individuální sémantickou kontrolu původních překladů. Teprve poté lze výsledek změnit na PASS.
