# Audit českých PSČ 28002–28201 — Kolínsko a Českobrodsko

**Kanonické ID:** CZ-KOLINSKO-28002-28201  
**Verze pravidel:** `prompt_audit.md` V2.1  
**Stav:** REVIEW REQUIRED  
**Rozsah:** 280xx–283xx podle zadání; pouze existující kódy ze `sequence.json`  
**Datum:** 2026-11-25

## 1. Přesný inventář

V `sequence.json` je v zadaném rozsahu 27 existujících PSČ:

`28002, 28101, 28102, 28103, 28104, 28106, 28107, 28121, 28123, 28125, 28126, 28127, 28128, 28129, 28130, 28141, 28143, 28144, 28146, 28151, 28161, 28162, 28163, 28166, 28167, 28171, 28201`.

Kódy 283xx v aktuální sekvenci nejsou. Rozsah, pořadí ani `sequence.json` nebyly měněny. Registr neobsahoval předchozí ani překrývající se auditní tahák pro tento blok.

## 2. Inventář a základní technické kontroly

- Sequence/groups: 27 očekávaných kódů.
- RÚIAN CSV: 27/27 kódů přítomno; používán výhradně sdílený inventář z feedu aktualizovaného 2026-11-01 (archiv 20261031).
- Supabase `public.postal_codes`: 27/27 záznamů, původně 190 faktů; po doplnění Bauerovy vily 191 faktů.
- Všechna auditovaná ID a vazby na PSČ zachovány.
- Všech 27 záznamů má `data_version=1`, `status=validated`.
- 0 prázdných českých master textů, 0 chybějících zdrojů, 0 neplatných `category` a `map_category`.
- 0 zjištěných duplicitních názvů nebo plných textů napříč původním blokem; nové faktum Bauerovy vily je v bloku jedinečné.
- Počty a ID faktů jsou strukturálně přítomné ve všech sedmi jazycích. Úplná sémantická kontrola všech 1 146 cizojazyčných textů však nebyla dokončena a zůstává otevřená.
- Nebyl spuštěn AJV ani jiný samostatný validační běh.
- `explorer_map_points` nebyly pro vybraná ID nalezeny; žádné mapové body nebyly hromadně vytvářeny ani měněny.

## 3. Správní a geografické údaje

- Všech 27 kódů souhlasí mezi sequence, RÚIAN a Supabase.
- `content.postcode` a `content.city` odpovídají databázovým hodnotám u 27/27 záznamů.
- Sídla obsluhujících pošt a správní zařazení jsou doložena v existujících `verification` polích.
- Okres Kolín: 23 záznamů; okres Praha-východ: 4 záznamy (28162, 28163, 28166, 28167). Všech 27 je ve Středočeském kraji.
- `district` v JSON je ponechán jen tam, kde jde o doloženou relevantní část obce; nebyly doplňovány názvy jiných obcí z poštovního obvodu.
- Existující neprázdné souřadnice nebyly znovu měřeny ani přesouvány.

## 4. Zásadní turistická úplnost

### Potvrzené pokrytí
- Kolín: historické jádro, chrám sv. Bartoloměje, židovská čtvrť a hřbitov, bitva u Kolína (1757) a památník u Křečhoře, železniční uzel, Masarykův most, František Kmoch a archeologická lokalita Skalka.
- Bitva u Lipan (1434) je zastoupena v 28106 příběhem Hřib a Lipanské pláně.
- Další významná témata jsou pokryta v existujících záznamech Kouřimi, Českého Brodu, Tismic, Zásmuk, Týnce nad Labem, Stříbrné Skalice a okolních obcí.

### Doplněná zásadní mezera
- **28002 / fact_010 — Bauerova vila v Libodřicích.** Kubistická vila Josefa Gočára z let 1912–1914; oficiální Uměleckoprůmyslové museum potvrzuje adresu Libodřice 111, PSČ 280 02. Doplněn český master, všech šest cizojazyčných verzí, zdroje a poloha 50.006316, 15.087656 (exact).
- **28106 / fact_001 — mohyla bitvy u Lipan na Lipské hoře.** Stávající příběh byl rozšířen o 11 m vysokou mohylu z roku 1881, památkovou ochranu a Prokopa Holého. Doplněny všechny překlady a oblastní poloha mohyly s přesností `area_representative`.

Po těchto doplněních nebyla v cílené rešerši nalezena další zjevná mezera celostátního významu. Kutná Hora je mimo tento blok PSČ a nebyla považována za nález tohoto auditu.

## 5. Opravy provedené v Supabase

1. **28002:** přidán `fact_010` Bauerova vila; všech sedm jazyků, tři zdroje, přesná poloha. Read-back: 10 faktů, 7/7 jazyků po 10 položkách, ID shodná, `translations.cs` bez rozdílu.
2. **28121:** `translations.cs` synchronizováno s českým masterem pro `fact_003`, `fact_008` a `fact_009`. Read-back: 0 rozdílů facts vs translations.cs, 7/7 jazyků po 11 položkách.
3. **28130:** `fact_001` rozšířen o kategorii ÚAN II a přesnost vymezení do 10 m podle NPÚ; všech sedm jazyků aktualizováno. Český text má po opravě 470 znaků. Read-back: 7/7 jazyků po 6 položkách, český master synchronní.
4. **28106:** `fact_001` rozšířen o památnou mohylu na Lipské hoře; doplněn zdroj a poloha. Read-back: 7/7 jazyků po 5 položkách, český master synchronní.

Všechny změny zachovaly existující ID záznamů a status/version. Žádný záznam nebyl publikován.

## 6. Otevřené položky — REVIEW REQUIRED

### České master texty kratší než 350 znaků
Zůstává 13 konkrétních faktů; nebyly natahovány výplňovým textem bez dostatečných ověřených informací:

- 28002: `fact_001`, `fact_002`, `fact_003`, `fact_004`, `fact_005`, `fact_006`, `fact_008`, `fact_009`.
- 28103: `fact_004`.
- 28106: `fact_004`, `fact_005`.
- 28130: `fact_006`.
- 28151: `fact_005`.

Při pokračování doplnit pouze konkrétní ověřené informace a následně upravit de/en/es/fr/it/nl. Pokud nelze bezpečné rozšíření doložit, ponechat jednotlivý fakt jako zdokumentovanou výjimku.

### Zbývající `location: null`
- 28103 / `fact_004` — kaplička v Chotuticích: oficiální zdroj potvrzuje obec a vznik v roce 1805, ale nebyl nalezen spolehlivý bod konkrétní kapličky.
- 28106 / `fact_005` — zvonička v Hřibech: obec Vitice potvrzuje umístění před usedlostí čp. 8, ale nebyly doloženy přesné souřadnice.
- 28130 / `fact_001` — zaniklá tvrz / archeologické území: NPÚ vymezuje severní část vsi a polygon ÚAN II, nikoli obhajitelný samostatný bod tvrze.

Ponechat `null`; nevymýšlet souřadnice. Poloha 28106 / `fact_001` byla nově doplněna pro mohylu a reprezentativní oblast bojiště.

### Překlady
Strukturální přítomnost, počty a ID všech sedmi jazyků jsou ověřeny. Zbývá plná sémantická kontrola všech 1 146 cizojazyčných textů; neoznačovat ji za dokončenou.

## 7. Uzavření a další krok

**Výsledek: REVIEW REQUIRED.** Hlavní turistická mezera byla doplněna a potvrzené překladové nesoulady opraveny. Blok nelze označit PASS kvůli 13 krátkým českým master textům a nedokončené úplné sémantické kontrole překladů. Tři zbylé null polohy mají zdokumentovaný důvod.

Bez publikace V5, bez zálohy, bez read-only zámku, bez změny schématu a bez změny sequence. Další krok: pokračovat pouze otevřenými 13 krátkými master texty a sémantickou kontrolou překladů.
