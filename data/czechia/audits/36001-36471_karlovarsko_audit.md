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

Původně byly zjištěny dvě hodnoty `location: null`, obě v PSČ 36272. Obě byly vyřešeny:

- 36272 / `fact_006`: kostel sv. Václava v Radošově — doplněna konkrétní poloha.
- 36272 / `fact_008`: archeologické lokality poštovního obvodu — doplněna reprezentativní poloha typu `postal_area`.

U `fact_008` v 36272 byl zároveň opraven geografický rozsah textu: odstraněn Velichov, který do tohoto poštovního obvodu nepatří; příběh nyní zůstává u lokalit v okolí Kyselky, Dubiny, Radošova a Nové Kyselky.

Nové či doplněné mapové body byly vloženy a ověřeny pro:
- 36001 / `fact_030`, `fact_031`
- 36272 / `fact_006`, `fact_008`
- 36301 / `fact_013`, `fact_014`

Celkem **6/6 mapových bodů**. Ostatní již existující nenulové souřadnice nebyly plošně přepočítávány.

## 5. Překlady a nově upravené texty

U nových faktů `36001/fact_030`, `36001/fact_031`, `36301/fact_013`, `36301/fact_014` a upravených faktů `36251/fact_008`, `36272/fact_008` byly doplněny nebo synchronizovány texty v jazycích:

`cs, de, en, es, fr, it, nl`.

Read-back potvrdil:
- existenci položky ve všech sedmi jazycích u všech šesti změněných faktů;
- shodu české překladové položky `translations.cs` s českým master textem;
- neprázdné cizojazyčné texty u všech změněných faktů;
- délku všech nových/upravených českých textů nad 350 znaků.

Tento výsledek **neznamená**, že byla provedena kompletní sémantická kontrola všech původních 295 faktů ve všech šesti cizích jazycích. Taková plošná kontrola zůstává otevřená.

## 6. REVIEW REQUIRED — krátké české master texty

Při kontrole délky bylo nalezeno **51 původních faktů s českým textem kratším než 350 znaků**. V tomto průchodu nebyly doplňovány výplňovými větami bez ověřeného podkladu. Každý z níže uvedených faktů proto zůstává v auditním taháku označen jako `REVIEW REQUIRED`, dokud nebude možné bezpečně doplnit konkrétní ověřené informace a synchronizovat překlady.

| PSČ | Fakta k dalšímu ověření |
|---|---|
| 36001 | fact_004, fact_005, fact_006, fact_007, fact_008, fact_010, fact_011, fact_012, fact_013, fact_014, fact_016, fact_018, fact_019, fact_020, fact_021, fact_022, fact_023, fact_024, fact_025, fact_026, fact_027, fact_028, fact_029 |
| 36005 | fact_001, fact_002, fact_003 |
| 36221 | fact_003, fact_004, fact_005, fact_006, fact_007, fact_008 |
| 36225 | fact_007, fact_010, fact_011 |
| 36235 | fact_003 |
| 36262 | fact_001, fact_002 |
| 36273 | fact_004 |
| 36461 | fact_009 |
| 36471 | fact_002, fact_003, fact_004, fact_005, fact_006, fact_007, fact_008, fact_009, fact_010, fact_011, fact_012 |

**Součet: 51 faktů.** Tyto položky jsou hlavním důvodem výsledného stavu REVIEW REQUIRED.

## 7. Závěr a další postup

- Přesný inventář 27/27: PASS.
- Sequence a groups 27/27: PASS.
- Supabase 27/27: PASS.
- Administrativní okres/kraj a shoda city: PASS.
- Doplnění významných turistických a historických mezer: provedeno.
- Dvě původní chybějící polohy: 2/2 vyřešeny.
- Nové/doplněné mapové body: 6/6 ověřeno.
- Nové/upravené texty a jejich sedmijazyčné položky: PASS.
- Krátké české master texty: 51 REVIEW REQUIRED.
- Kompletní sémantická kontrola všech původních překladů: OPEN.

**Konečný stav: REVIEW REQUIRED.** Záznamy nebyly publikovány, nepřevedly se na V5, nebyla vytvořena záloha a nebyl aktivován read-only lock. Po vyřešení 51 krátkých textů a dokončení sémantické kontroly původních překladů lze provést závěrečný uzavírací průchod.
