# CZ-Rakovnicko / Novostrašecko — finální audit PSČ 26901–27101

**Stav: PASS**  
**Auditní prompt:** `data/czechia/prompt_audit.md`, verze 2.1  
**Datum dokončení:** 2026-11-22  
**Zdroj pravdy:** cíleně načtené české řádky `public.postal_codes`; bez porovnávání s Neonem.

## 1. Rozsah a inventář

Auditovaný seznam podle zadání, registru, `sequence.json` a RÚIAN:

`26901, 27001, 27002, 27004, 27006, 27007, 27008, 27009, 27021, 27023, 27024, 27031, 27032, 27033, 27034, 27035, 27036, 27041, 27042, 27051, 27052, 27053, 27054, 27055, 27061, 27062, 27064, 27065, 27101`

- **29/29 PSČ** nalezeno v cíleném databázovém dotazu a odpovídá projektovému rozsahu.
- **319 faktů / 2 233 jazykových položek** (319 × 7 jazyků).
- Před doplněním Zikmunda Wintra: 318 faktů; nyní 319.
- 17 záznamů má `status=validated`, 12 `status=placeholder`.
- Všech 29 záznamů zůstalo na `data_version=1`; statusy nebyly měněny.
- `sequence.json` nebyl upravován.

## 2. Tematická úplnost

### Doplněno
- **26901 / fact_010 — Zikmund Winter (1846–1912):** významná chybějící osobnost spojená s Rakovníkem. Doplněn český master text, všech šest cizojazyčných překladů, zdroje a poloha Gymnázia Zikmunda Wintra.

### Hlavní regionální témata pokryta
- Rakovník a jeho historické jádro, Muzeum T. G. M. a bitva roku 1620.
- Křivoklát, Týřov, Krakovec, Berounka a příběh Oty Pavla.
- Železniční muzeum Lužná.
- Keltská hlava ze Mšeckých Žehrovic.
- Lány a T. G. Masaryk.
- Jiří Anderle, Václav Rabas a další významné regionální osobnosti.
- Kolešovice, zámky, kostel, železnice Kolešovka, cukrovar, mlýny a chmelařství.
- Zbečno, Hamousův statek, Masarykův most a přírodní rezervace.
- Archeologické a průmyslové dědictví v okolí Jesenice, Pochvalova a Řevničova.

Po doplnění Wintra nebyla potvrzena další jednoznačná zásadní tematická mezera. Nebyl vytvářen vyčerpávající katalog drobných památek.

## 3. Provedené obsahové a redakční opravy

### 3.1 Krátké české master texty

Původně zjištěno **55 textů pod 350 znaků**. Všech 55 bylo rozšířeno na nejméně 350 znaků a odpovídající překlady de/en/es/fr/it/nl byly aktualizovány.

| PSČ | Opravené texty |
|---|---:|
| 26901 | 6 |
| 27001 | 15 |
| 27002 | 13 |
| 27004 | 2 |
| 27023 | 8 |
| 27024 | 5 |
| 27035 | 1 |
| 27054 | 1 |
| 27055 | 4 |
| **Celkem** | **55** |

Read-back potvrdil **0 krátkých českých master textů**.

### 3.2 Významné jednotlivé opravy

- **26901 / fact_010:** přidán Zikmund Winter, sedm jazykových položek, `map_category=personality`.
- **27021 / fact_009:** český překlad synchronizován s masterem.
- **27023 / fact_006:** český překlad synchronizován s masterem.
- **27055 / fact_006:** český master opraven z nizozemského textu na správný český text.
- **27054 / fact_002:** opraven výklad Louštína — jde o pravěké hradiště, nikoli doložený středověký hrad Kozí hrádek. Upraven název, lokalizační popis a zdroj; `map_category` změněna z `viewpoint_landscape` na `archaeological_site`. Existující souřadnice nebyly změněny.
- **Mapové kategorie:** opraveno 22 chybně zařazených `map_category` u 22 faktů v 18 PSČ; následný read-back potvrdil všech 22 hodnot a kontrola podle aktuálního `schema.json` neodhalila žádnou nepovolenou kategorii.
- **27023 / fact_031:** zpřesněn popis rezervace U Eremita — místo vápnitých skal uvedena doložená vegetace silikátových skal a drolin; opraven oficiální zdroj polohy a doplněn zdroj AOPK. Souřadnice nebyly změněny.
- **Metadata všech 29 PSČ:** doplněn `region=Středočeský kraj`. Pole `city` je vyplněno u všech 29 záznamů a ověřeno podle sídla obsluhující pošty. Dvě chybné hodnoty `district=Rakovník` u 27023 a 27024 byly odstraněny; podle Content Standardu patří do `district` pouze relevantní část obce/města, nikoli okres. V tomto bloku zůstává `district=null`.

## 4. Kontrola duplicit a přiřazení

- **0 duplicitních názvů** napříč 29 PSČ.
- Čtyři původní podezřelé skupiny byly po kontrole skutečných ID vyhodnoceny jako falešné poplachy:
  - Hlavačov: v databázi je kandidát 26901/fact_005; údajný protějšek 27051/fact_003 neexistuje.
  - Kostel sv. Kateřiny: existuje 27021/fact_001; údajný protějšek 26901/fact_009 neexistuje.
  - Svatý Hubert: existuje 27033/fact_005; údajný protějšek 27034/fact_007 neexistuje.
  - Kolešovka: 27001/fact_005, 27002/fact_007 a 27009/fact_003 se vztahují k různým stanicím/místům (Kněževes, Kolešovice, Krupá), nikoli k duplicitě téhož bodu.
- Žádný fakt nebyl kvůli těmto původním podezřením smazán ani přesunut.

## 5. Technická a jazyková integrita

Cílený read-back a kontrola 29 vybraných řádků potvrdily:

- 29/29 záznamů a 319 faktů.
- 0 českých master textů pod 350 znaků.
- 0 chybějících zdrojových polí / prázdných seznamů zdrojů.
- 0 nepovolených hodnot `category` a `map_category`.
- 0 neplatných typů nebo přesností u vyplněných poloh.
- 0 rozdílů mezi `facts[].text/title` a `translations.cs`.
- 0 prázdných překladů, 0 překladů kratších než 30 znaků, 0 zjištěných koncových značek useknutí.
- 0 chybějících překladových titulů.
- 0 rozdílů v počtu jazykových faktů; všech sedm jazyků obsahuje 319 položek.
- 0 duplicitních ID faktů nebo překladů; 0 překladových ID bez master faktu.
- 0 přesně totožných textů napříč různými jazykovými verzemi.
- Všechny existující neprázdné souřadnice zůstaly beze změny; nebyla provedena plošná kontrola ani přeměřování.
- Mapové body v samostatné tabulce nebyly plošně načítány ani měněny; čtyři chybějící polohy ve `facts[].location` byly doplněny cíleně podle geografické hierarchie a ověřeny read-backem.
- Po doplnění má všech 319/319 faktů vyplněnou polohu; 0 `location=null`, 0 neplatných hodnot `accuracy` a 0 neúplných lokalizačních objektů.

## 6. Doplnění čtyř původně chybějících poloh podle geografické hierarchie

Podle závazného dodatku v `prompt_rework.md` a pravidla G v `prompt_audit.md` byly čtyři původní hodnoty `location=null` vyřešeny. Tam, kde přesná poloha historického objektu nebo události nebyla doložena, nebyl pin vydáván za skutečné místo události; byl zvolen veřejný orientační bod podle hierarchie. Všechny čtyři zápisy byly načteny zpět ze Supabase.

| PSČ / fakt | Uložený orientační bod | Souřadnice (lat, lon) | Přesnost |
|---|---|---|---|
| 27009 / fact_004 | Obecní úřad Krupá – orientační bod pro historickou důlní oblast | 50.1753167, 13.7321500 | historical_approximate |
| 27033 / fact_003 | Socha Panny Marie Immaculaty na návsi v Klečetném – orientační bod | 50.0882167, 13.5624167 | historical_approximate |
| 27062 / fact_009 | Náměstí 1. máje – obecní úřad Rynholec, orientační bod | 50.1379083, 13.9224350 | historical_approximate |
| 27065 / fact_008 | Obecní úřad Srbeč – orientační bod pro událost na silnici Srbeč–Bdín | 50.2242608, 13.8837219 | historical_approximate |

**Důležité interpretační omezení:** tyto body slouží k orientaci na mapě. Neříkají, že důl Cyril, Trpasličí díra, nález monstrance nebo místo útoku stály přesně u příslušného úřadu či sochy. Přesná poloha zůstává historicky neurčená; mapa nyní ukazuje poctivě označený orientační bod místo prázdného pinu.

Závěrečný read-back celého auditovaného rozsahu potvrdil: **319 faktů, 319 vyplněných poloh, 0 `location=null`, 0 neplatných hodnot `accuracy`, 0 neúplných lokalizačních objektů.**

## 7. Závěr a provozní stav

**Audit obsahu a integrity je dokončen — PASS.** Všechny významné opravy včetně čtyř dříve chybějících poloh byly zapsány a ověřeny read-backem. U čtyř historických témat jsou použity výslovně označené orientační body, nikoli předstírané přesné polohy.

- Žádná změna schématu, triggerů, RLS ani databázové architektury.
- Žádné porovnávání se Supabase/Neon.
- Žádné publikování V5, žádná změna statusů a žádná záloha.
- Žádný read-only lock.
- K případnému publikování a záloze vyčkat na výslovný pokyn uživatele.
