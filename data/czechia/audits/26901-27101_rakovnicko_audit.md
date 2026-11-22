# CZ-Rakovnicko / Novostrašecko — audit PSČ 26901–27101

**Stav auditu: REVIEW REQUIRED**  
**Auditní prompt:** `data/czechia/prompt_audit.md`, verze 2.1  
**Datum:** 2026-11-22  
**Zdroj dat:** cíleně načtené české řádky `public.postal_codes`; bez porovnávání s Neonem.

## 1. Inventář

Očekávaný a nalezený rozsah: **29/29 PSČ**:

`26901, 27001, 27002, 27004, 27006, 27007, 27008, 27009, 27021, 27023, 27024, 27031, 27032, 27033, 27034, 27035, 27036, 27041, 27042, 27051, 27052, 27053, 27054, 27055, 27061, 27062, 27064, 27065, 27101`

- Před doplněním chybějící osobnosti: 319 faktů.
- Po doplnění Zikmunda Wintra: **320 faktů**.
- Všechny záznamy mají `data_version=1`.
- 17 záznamů má `status=validated`, 12 má `status=placeholder`.
- Publikace V5, změna statusů, záloha ani read-only lock nebyly provedeny.

## 2. Zásadní turistická úplnost

### Doplněno
- **26901 / fact_010 — Zikmund Winter (1846–1912)**: chybějící významná osobnost spojená s Rakovníkem. Doplněn český master text, všech šest cizojazyčných překladů a poloha Gymnázia Zikmunda Wintra. Podklady: městské informační centrum Rakovník, Gymnázium Zikmunda Wintra a Státní oblastní archiv v Praze.

### Ověřené hlavní okruhy, které již v datech jsou
- Rakovník a jeho historické jádro, Muzeum T. G. M. a bitva roku 1620.
- Křivoklát, Týřov, Krakovec, Ota Pavel a Berounka.
- Železniční muzeum Lužná.
- Keltská hlava ze Mšeckých Žehrovic.
- Lány a T. G. Masaryk.
- Jiří Anderle a Pavlíkov; Václav Rabas a Krušovice.

Kounovské kamenné řady jsou v datech rozlišeny od kounovské návštěvnické expozice; samotné řady leží v katastru Domoušic, nikoli v Kounově. Nepřesouvat je bez nového geografického důkazu.

### Zásadní tematická kontrola
První tematická rešerše je provedena. Po doplnění Wintra nebyla potvrzena další jednoznačná zásadní tematická mezera. Kontrola se však znovu otevře, pokud se při řešení geografických duplicit prokáže chybné přiřazení.

## 3. Provedené opravy

1. **26901 / fact_010** — přidán Zikmund Winter; master 648 znaků; překlady cs/de/en/es/fr/it/nl doplněny; `map_category=personality`; poloha Gymnázia Zikmunda Wintra, Žižkovo náměstí 186, Rakovník.
2. **27021 / fact_009** — český překlad synchronizován s master textem.
3. **27023 / fact_006** — český překlad synchronizován s master textem.
4. **27055 / fact_006** — český master opraven z nizozemského textu na odpovídající český text; cizojazyčné překlady ponechány.
5. **27051 / fact_003 — Hlavačov** — duplicitní fakt odstraněn ze všech sedmi jazyků; jeho věcně užitečné informace byly sloučeny do 26901/fact_005. Přiřazení 26901 potvrzeno adresním rozpisem pro ulici Hlavačov.
6. **Svatý Hubert — opravené konečné přiřazení:** po ověření části obce Svatý Hubert v Drahouši byl fakt obnoven jako `27033/fact_005` ze všech sedmi jazykových verzí; nesprávná kopie `27034/fact_007` byla odstraněna. GPS 50.070850, 13.512100 byla zachována u správného záznamu.
7. **26901 / fact_009 — kostel sv. Kateřiny** — duplicitní fakt odstraněn ze všech sedmi jazyků; ponechán v 27021/fact_001. Adresní evidence ukazuje, že PSČ 26901 v části obce Pavlíkov pokrývá pouze izolované adresní místo č.p. 146 (50.0871358, 13.7607839), zatímco centrální sídlo má převážně PSČ 27021. Kostel leží v jádru obce.

Read-back změněných položek potvrdil:
- nový fakt 26901/fact_010 existuje a má 648 znaků;
- všech šest cizojazyčných polí v 26901 má po doplnění 10 faktů;
- opravené položky 27021/fact_009, 27023/fact_006 a 27055/fact_006 mají `facts[].text = translations.cs`;
- u všech čtyř změněných položek je český master a český překlad synchronní.

## 4. Technické kontroly

- 29/29 očekávaných řádků nalezeno.
- ID faktů jsou v každém řádku unikátní.
- 0 nepovolených hodnot `category`.
- 0 nepovolených hodnot `map_category`.
- 0 faktů bez zdrojového pole / bez zdrojů.
- 0 neplatných hodnot `location.type` nebo `location.accuracy` u vyplněných poloh.
- Všech šest cizojazyčných polí má u každého řádku stejný počet faktů jako český master.
- Po opravách je počet rozdílů `facts[].text` vs `translations.cs` **0**.
- Existující neprázdné souřadnice nebyly znovu kontrolovány ani měněny.
- Mapové body `explorer_map_points` nebyly načítány ani měněny; jejich případná návaznost na nově přidaný fakt není v tomto běhu potvrzena.
- Plná sémantická revize všech 2 254 textových položek (322 × 7) zatím není dokončena.

## 5. Otevřené nálezy — REVIEW REQUIRED

### 5.1 Krátké české master texty (<350 znaků)

Zjištěno **54** krátkých textů. Počty podle PSČ:

| PSČ | Počet |
|---|---:|
| 26901 | 5 |
| 27001 | 15 |
| 27002 | 13 |
| 27004 | 2 |
| 27023 | 8 |
| 27024 | 5 |
| 27035 | 1 |
| 27054 | 1 |
| 27055 | 4 |
| **Celkem** | **54** |

Každý konkrétní fakt musí být odpovědně rozšířen ověřitelnými informacemi alespoň na 350 znaků, nebo ponechán jako `REVIEW REQUIRED` s konkrétním důvodem. Po rozšíření je nutné upravit odpovídající překlady de/en/es/fr/it/nl. Cizojazyčné délky se nekontrolují.

### 5.2 Chybějící polohy

Zjištěno **33** faktů s `location=null`. Existující polohy nebyly znovu kontrolovány.

- **27004:** fact_006, fact_007, fact_011, fact_019, fact_021, fact_022, fact_025, fact_026, fact_027, fact_028, fact_029, fact_030
- **27009:** fact_004
- **27033:** fact_002, fact_003, fact_005, fact_006, fact_007
- **27034:** fact_001, fact_002, fact_004, fact_005, fact_006
- **27062:** fact_009, fact_010
- **27064:** fact_009, fact_012, fact_013
- **27065:** fact_003, fact_004, fact_005, fact_008

Při pokračování hledat přibližný, ale geograficky smysluplný bod podle Content Standardu a prompt_rework. Pokud nelze obhájit ani přibližnou polohu, ponechat null a zdůvodnit.

### 5.3 Duplicitní nebo sporná primární přiřazení mezi PSČ

1. **Hlavačov — UZAVŘENO:** 26901/fact_005 ponechán; 27051/fact_003 odstraněn po potvrzení adresního přiřazení ulice Hlavačov k PSČ 26901.
2. **Kostel sv. Kateřiny — UZAVŘENO:** ponechán pouze 27021/fact_001; duplicitní 26901/fact_009 odstraněn. Centrální jádro Pavlíkova je přiřazeno k 27021; jediné adresní místo 26901 v části Pavlíkov leží výrazně mimo jádro.
3. **Svatý Hubert — UZAVŘENO:** ponechán pouze 27034/fact_007; duplicitní 27033/fact_005 odstraněn. Oficiální evidence přiřazuje část obce Svatý Hubert k Drahouši a PSČ 27033; původní předběžné přiřazení do 27034 bylo chybné a bylo vráceno.
4. **Kolešovka — NENÍ potvrzena duplicita:** 27001/fact_005 (stanice Kněževes), 27002/fact_007 (koncová stanice Kolešovice) a 27009/fact_003 (stanice Krupá) popisují tři odlišná fyzická místa na jedné trati. Zachovat všechny tři; při pozdější redakční úpravě jasně oddělit místní příběhy, aby se neopakovala obecná historie celé trati.

## 6. Další krok

1. Vyřešit čtyři skupiny duplicit a určit jedno primární PSČ pro každý objekt/trasu.
2. Projít 54 krátkých českých master textů a odpovědně je rozšířit; následně aktualizovat šest překladů.
3. Doplnit 33 chybějících poloh tam, kde to lze doložit; ostatní ponechat s odůvodněním.
4. Dokončit sémantickou kontrolu všech sedmi jazyků a kontrolu administrativních údajů podle sídel obsluhujících pošt.
5. Ověřit návaznost nového faktu 26901/fact_010 na mapové body pouze tehdy, pokud je to podle aktuálního schématu/provozu nutné.
6. Provedení pouze cílených read-back kontrol změněných položek.

**Zatímní výsledek: REVIEW REQUIRED.** Neprovádět publikaci V5, zálohu, read-only lock, změny sequence.json ani změny schématu.
