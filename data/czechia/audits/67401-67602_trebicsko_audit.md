# Auditní tahák — 67401–67602 (Třebíčsko, Náměšťsko a Moravskobudějovicko)

**Kanonické ID:** CZ-TREBICSKO-67401-67602  
**Rozsah zadání:** 674xx–677xx  
**Přesný inventář:** 46 existujících PSČ: 67401; 67501–67508 (dle sequence); 67521–67529 (dle sequence); 67531–67534; 67541–67545; 67550–67557; 67559–67560; 67571; 67573–67579; 67602.  
**Stav:** IN PROGRESS / REVIEW REQUIRED. Audit není dokončen.  
**Pravidla:** `data/czechia/prompt_audit.md` V2.1. Publikace, záloha, Neon porovnání a read-only lock jsou mimo tento běh; nespouštět bez samostatného výslovného pokynu.

## 1. Inventář a autority

- `sequence.json`: 46/46 přesných PSČ v intervalu 67400–67799.
- `groups`: 46/46 stejných PSČ v odpovídající skupině 67xxx.
- `reference/ruian_postcodes.csv`: 46/46 odpovídajících řádků; CSV je jediný sdílený RÚIAN inventář.
- Manifest RÚIAN: feed aktualizován 2026-11-01, stažen 2026-11-13; 2 677 unikátních PSČ v celém inventáři.
- Supabase `public.postal_codes`: 46/46 přesných českých řádků nalezeno; ID 10481–10526; 46/46 `status=validated`; 12 záznamů má `data_version` vyšší než 1. Žádný řádek nebyl publikován ani změněn ve statusu/verzi.
- V `sequence.json`, `groups` ani RÚIAN CSV není v tomto rozsahu žádné PSČ 677xx. Neexistující PSČ nevytvářet; rozsah ani sekvenci neměnit.
- Celkem 289 faktů ve 46 záznamech.

## 2. Jednorázová turistická úplnost — průzkum

Hlavní regionální témata jsou převážně pokryta:
- Třebíčské UNESCO (židovská čtvrť, hřbitov, bazilika sv. Prokopa), Antonín Kalina, větrný mlýn a další třebíčské dědictví — 67401.
- Jan Kubiš / Anthropoid — 67552.
- Bible kralická, tiskárna Jednoty bratrské a archeologické nálezy — 67573.
- Jaroměřický zámek, hudební centrum a František Václav Míča — 67551.
- Jemnice, hradby, zámek, židovské dějiny a Barchan — 67531.
- Náměšťský zámek, Oslava, letiště — 67571.
- Mohelenská hadcová step, Dalešická přehrada a přečerpávací elektrárna — 67575–67577.
- Hrotovická tragédie 8. 5. 1945 — 67555.
- Babice 1951, Jan Bula, Otokar Březina, Vítězslav Nezval, Jakub Deml, Ludvík Svoboda a další regionální osobnosti jsou zastoupeny.

### Otevřené významné historické téma
1. **Třebíč 1468 — PSČ 67401:** obléhání 12. 5. a dobytí 14. 5. 1468 je zmíněno pouze kontextově v 67521/fact_003 (Heraltice); chybí samostatný hlavní příběh správně přiřazený Třebíči. Zvážit doplnění samostatného faktu do 67401, bez přesunu/mazání původního faktu.
   - Město Třebíč, historie v datech: https://www.trebic.cz/historie-mesta-v-datech/d-1385/p1%3D30143
   - Město Třebíč, historie: https://www.trebic.cz/historie-mesta/ms-30137/p1%3D30137
2. **Jemnice 1468 — PSČ 67531:** zpustošení města uherským vojskem a konec předchozího rozmachu v hlavním faktu 67531/fact_001 chybí. Doplnit do stávajícího městského historického faktu, ne jako duplicitní samostatný příběh; doplnit doložený zdroj NPÚ.
   - NPÚ, odborná nálezová zpráva Jemnice, část „Z historie Město Jemnice“: https://iispp.npu.cz/mis_public/documentDetail.htm?id=1261994 (text uvádí zpustošení roku 1468, strana 7/8 v textové části).

## 3. Dosavadní technické kontroly a opravy

### Inventář / struktura
- 46/46 přesných PSČ v sequence, groups, RÚIAN CSV a Supabase.
- 289 faktů.
- Všech 46 záznamů obsahuje všech sedm jazyků: cs, de, en, es, fr, it, nl.
- Počty faktů v překladových polích odpovídají masterům; v cílené kontrole nebyl zjištěn rozdíl počtů.
- 0 duplicitních názvů uvnitř jednotlivých PSČ.
- 31 českých master textů je kratších než 350 znaků.
- 59 faktů má `location=null` nebo chybějící pole location.
- 4 neplatné hodnoty `map_category` byly nalezeny a opraveny.
- 8 rozdílů `translations.cs` proti českému masteru bylo nalezeno a opraveno.
- Před publikací nebyly nalezeny mapové body pro 230 faktů s neprázdnou polohou; odpovídá to stavu validated před publikací. Žádné mapové body nebyly ručně vytvořeny ani změněny.
- Samostatný AJV ani jiný validační běh nespouštět; prompt_audit V2.1 jej nevyžaduje.

### Opravy již provedené a read-back ověřené
- `67501/fact_002`, `67501/fact_006`: `map_category=historic_city`.
- `67502/fact_001`: `map_category=historic_city`.
- `67502/fact_004`: `map_category=castle`.
- `translations.cs` synchronizováno přesně s masterem pro:
  - `67503/fact_001`, `67503/fact_002`;
  - `67545/fact_004`;
  - `67554/fact_001` až `67554/fact_005`.
- Cílený read-back změněných pěti PSČ potvrdil 0 neplatných mapových kategorií a 0 rozdílů `translations.cs`/master.

## 4. Otevřené délkové nálezy — 31 faktů pod 350 znaků

- 67505: fact_001
- 67521: fact_001, fact_002, fact_003, fact_004, fact_006
- 67525: fact_002, fact_003, fact_006
- 67526: fact_002
- 67528: fact_001–fact_006
- 67532: fact_003, fact_005, fact_006, fact_007, fact_008, fact_009
- 67534: fact_004
- 67555: fact_001, fact_002, fact_003, fact_005, fact_006, fact_007, fact_010, fact_012

Doplnit pouze české master texty konkrétními ověřitelnými informacemi na nejméně 350 znaků; následně přirozeně aktualizovat de/en/es/fr/it/nl. Délku cizojazyčných textů nehodnotit. Pokud nelze bezpečně doplnit, označit konkrétní fakt REVIEW REQUIRED.

## 5. Otevřené geografické nálezy — 59 null poloh

- 67504: fact_003
- 67508: fact_003
- 67521: fact_001–fact_006
- 67522: fact_001–fact_007
- 67523: fact_001, fact_005, fact_006
- 67528: fact_001–fact_006
- 67529: fact_003–fact_005
- 67531: fact_001–fact_007
- 67532: fact_007–fact_009
- 67541: fact_005
- 67542: fact_004, fact_005
- 67544: fact_001, fact_007, fact_009
- 67545: fact_002–fact_004
- 67553: fact_002, fact_004
- 67557: fact_007
- 67573: fact_003–fact_006
- 67574: fact_003
- 67576: fact_005
- 67577: fact_004, fact_006
- 67578: fact_001, fact_004

U každého se pokusit dohledat obhajitelnou polohu podle prompt_rework a Content Standard. Nezkoumat ani nepřeměřovat již neprázdné polohy. Pokud není konkrétní místo doložitelné, ponechat null a zaznamenat stručný důvod. Nikdy nekopírovat representative_point/access_point.

## 6. Další kontroly, které zůstávají otevřené

- Dokončit významovou kontrolu překladů de/en/es/fr/it/nl; ověřovat skutečné významové vady, nikoli stylistické preference.
- Rychlá kontrola zjevných duplicit a chybných přiřazení napříč 46 PSČ (dosud neuzavřeno).
- Ověřit správní údaje a sídlo obslužné pošty podle pravidel Content Standardu, pouze při konkrétním rozporu; neprovádět plošnou novou rešerši.
- Dovyřešit 31 krátkých master textů, 59 null poloh a dvě historická témata výše.
- Po každém zápisu načíst zpět pouze změněné PSČ/fakta. Nepoužívat opakované široké SELECT.
- Žádné publikování V5/published, žádná záloha Dropbox, žádný Neon import, žádný read-only lock bez samostatného výslovného pokynu.

## 7. Přesný další krok

Pokračovat z již načtených dat nejprve významovou kontrolou a opravou 31 krátkých českých master textů (včetně všech šesti cizojazyčných návazností), poté projít 59 null poloh podle doložitelných zdrojů. Zároveň zapracovat/uzavřít témata Třebíč 1468 a Jemnice 1468. Neopakovat dokončené inventární kontroly ani již ověřené opravy.
