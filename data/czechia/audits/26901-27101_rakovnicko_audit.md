# CZ-Rakovnicko / Novostrašecko — finální audit PSČ 26901–27101

**Stav: PASS WITH DOCUMENTED EXCEPTIONS**  
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
- Mapové body nebyly plošně načítány ani měněny.

## 6. Dokumentované výjimky — čtyři polohy zůstávají null

Po pokusu o doplnění zůstaly čtyři případy, u nichž nelze z dostupných důkazů odpovědně určit bod samotného objektu. Nebyl použit náhradní bod muzea, obce ani pošty.

| PSČ / fakt | Důvod ponechání null |
|---|---|
| 27009 / fact_004 | Historické doly Johann Baptist a Cyril jsou popsány jako pole u silnice do Mutějovic, několik desítek metrů za již obtížně identifikovatelnou stodolou. Přesný bod šachty není doložen. |
| 27033 / fact_003 | Trpasličí díra je v lese nad Klečetnou; zdroje popisují přístupovou cestu, ale neposkytují souřadnice samotné štoly. Souřadnice sochy Panny Marie na návsi nejsou polohou štoly. |
| 27062 / fact_009 | Monstrance byla nalezena v areálu Prefa v Rynholci, avšak přesné místo nálezu uvnitř rozsáhlého areálu není doloženo. Současné muzeum v Novém Strašecí není místem nálezu. |
| 27065 / fact_008 | Pamětní deska Jindřicha Coufala je popsána u silnice mezi Srbčí a Bdínem, ale přesný bod desky není ve zdrojích souřadnicově doložen. |

Tyto čtyři hodnoty `location=null` jsou ponechány záměrně; jejich doplnění bez důkazu by bylo v rozporu s geografickými pravidly.

## 7. Závěr a provozní stav

**Audit obsahu a integrity je dokončen — PASS WITH DOCUMENTED EXCEPTIONS.** Všechny významné opravy byly zapsány a cíleně ověřeny read-backem. Čtyři výše uvedené polohy zůstávají zdokumentovanými výjimkami.

- Žádná změna schématu, triggerů, RLS ani databázové architektury.
- Žádné porovnávání se Supabase/Neon.
- Žádné publikování V5, žádná změna statusů a žádná záloha.
- Žádný read-only lock.
- K případnému publikování a záloze vyčkat na výslovný pokyn uživatele.
