# Finální audit 25601–25901 — Benešovsko, Podblanicko, Posázaví a Český Merán

- **Kanonické ID:** `CZ-BENESOVSKO-25601-25901`
- **Rozsah:** 25601–25901
- **Datum:** 2026-11-20
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.0
- **Výsledek:** **PASS — audit dokončen; rozsah zůstává nepublikovaný**
- **Zdroj pravdy:** Supabase. Repozitář slouží pro pravidla, sekvenci, RÚIAN referenci a tento tahák.

## 1. Průzkum zásadních památek, událostí a osobností

Průzkum proběhl jako první krok před kontrolou jednotlivých záznamů. V rozsahu byly pokryty hlavní historické a kulturní osy: Konopiště, Jemniště, Blaník a Jankov, Vlašim, Vrchotovy Janovice a Sidonie Nádherná, Růžkovy Lhotice a Bedřich Smetana, Neveklovsko a nucené vysídlení obcí kvůli výcvikovému prostoru SS, staré Dolní Kralovice a jejich zánik pod nádrží Švihov i události května 1945 v Sedlci.

### Zjištěné zásadní mezery — doplněno

1. **Zdeněk Fibich a Všebořice — 25768/fact_004**
   - Skladatelovo rodiště ve všebořické myslivně chybělo, přestože záznam 25768 již obsahoval dějiny Dolních Kralovic a Všebořic.
   - Doplněn samostatný fakt s životopisným a hudebněhistorickým kontextem.
   - Poloha Fibichovy myslivny doplněna z geolokačních údajů fotografie hlavní budovy.
   - Zdroje: Česká filharmonie, Český hudební slovník a geolokovaná fotografie Fibichovy myslivny.

2. **Pochod Praha–Prčice — 25791/fact_007**
   - Chyběla zásadní událost spojená s identitou Prčice.
   - Doplněna historie prvního ročníku 17. 4. 1966, iniciátoři Jiří Dvořák, Karel Kulle a Stanislav Rataj, původní 65km trasa „Sukovou cestou“, průchod Křečovicemi a vývoj pochodu včetně cíle v Prčici.
   - Orientační poloha cíle vedena na Vítkově náměstí.
   - Zdroje: oficiální městský web Sedlec-Prčice a historie pochodu.

Jan Očko z Vlašimi je již zmíněn v kontextu historie Vlašimského hradu; nebyl proto vytvářen duplicitní samostatný fakt. Další zásadní tematická mezera nebyla v rozsahu potvrzena.

## 2. Opravy databáze a obsahu

### Sídla obsluhujících pošt a správní údaje

Oficiální detaily České pošty byly ověřeny pro všech 32 PSČ. Opraveny tři chybné hodnoty sídla pošty v Supabase:

- **25742:** Týnec nad Sázavou → **Krhanice**. Ověřeno na detailu České pošty; současně odstraněno chybné `content.district = Chrást nad Sázavou`, protože nejde o část Krhanic.
- **25751:** top-level `city/municipality` Olbramovice → **Bystřice**.
- **25755:** top-level `city/municipality` Vrchotovy Janovice → **Maršovice**.

Top-level `city` a `municipality` nyní odpovídají `content.city`; top-level `district` a `region` odpovídají `content.county` a `content.state`. Kontrolní dotaz po opravách: **0 rozdílů**. V `content.district` zůstává pouze doložená část **Sedlec** u 25791; redundantní hodnota Netvořice u 25744 byla odstraněna.

### Duplicitní a nejednoznačné záznamy

- Z **25751** odstraněn duplicitní kostel Všech svatých v Olbramovicích, který patří k 25901/fact_005.
- Z **25751** odstraněn duplicitní kostel v Maršovicích, který je pokryt v 25755/fact_002.
- Zbývající fakt o Stajicích byl po odstranění duplicit přečíslován na `fact_003` ve všech sedmi jazykových verzích; pořadí faktů zůstalo zachováno.
- Dříve totožné názvy kostela Nanebevzetí Panny Marie byly rozlišeny názvem obce: **Chocerady** (25724/fact_010) a **Netvořice** (25744/fact_002).
- Duplicitní zdrojové URL a opakované položky v `fact.sources` byly deduplikovány.

### Texty a překlady

- **25723/fact_005:** rozšířen text kapličky na návsi v Přestavlkách o její stavební charakter, opravy a kontext místních pamětihodností.
- **25763/fact_006:** rozšířen příběh Včelího světa o historii školní budovy, její původní funkci, přeměnu a ocenění.
- **25765/fact_001 a fact_002:** doplněny zkrácené překlady tak, aby zachovaly historická data, stavební etapy a podstatné architektonické informace.
- **25744/fact_002:** doplněny překlady kostela v Netvořicích včetně dat 1350, 1747–1753, 1887 a 1991–1994 a jmen osob na dochovaných náhrobcích.
- **25726/fact_001:** neutrálně přeformulována věta o současné Speedway Factory; odstraněn reklamně působící výčet dodávaných služeb a produktů.
- Nové fakty 25768/fact_004 a 25791/fact_007 mají kompletní verze cs/de/en/es/fr/it/nl.

Zkrácené překlady u dalších faktů 25744 byly při kontrole posouzeny podle zachování podstatných dat, jmen a dějové informace; samotná menší délka nebyla považována za chybu.

## 3. Geografické polohy

Doplněno **11 poloh** u dříve prázdných míst. U existujících neprázdných souřadnic nebyla prováděna nová kontrola ani změna.

Doplněné body zahrnují most v Choceradech, orientační bod zvoničky ve Vestci, areál ESO/Speedway Factory v Divišově, Pelíškův most, orientační body pro lávku a rodiště ve Střechově nad Sázavou, historické jádro a kostel v Čechticích, Fibichovu myslivnu, kapli v Jetřichovicích a Vítkovo náměstí v Prčici. Přesnost je u každého bodu označena jako exact, approximate nebo area_representative podle podkladů.

### Záměrně ponechané null polohy

| PSČ / fakt | Důvod |
|---|---|
| 25703/fact_020 — Sedlečský potok | Lineární přírodní prvek; nemá jediný smysluplný bod. |
| 25742/fact_004 — Požárská žula | Téma zahrnuje více lomů a využití kamene v krajině i stavbách; jeden bod by byl zavádějící. |
| 25763/fact_011 — Zlatý důl | Přesná poloha historického dolu není dostatečně doložena. |
| 25768/fact_002 — židovská komunita Dolních Kralovic | Historické centrum starých Dolních Kralovic zaniklo pod nádrží Švihov; přesný bod nebyl bezpečně ověřen. |
| 25791/fact_005 — události května 1945 | Příběh zahrnuje více míst a událostí; jediný bod by nepřesně spojil několik lokalit. |

U 25724/fact_011 je bod umístěn pouze orientačně na zvoničku ve Vestci; poloha zaniklé tvrze zůstává neurčena. U 25763/fact_010 je použit orientační bod místní části, nikoli tvrzení o přesném středu lávky.

## 4. Strukturální a obsahové kontroly

| Kontrola | Výsledek |
|---|---:|
| PSČ v rozsahu | 32 |
| Fakta v Supabase | 219 |
| Jazykové položky (7 jazyků) | 1 533 |
| Překlady chybějící / prázdné | 0 |
| Rozdíly `facts.text` vs `translations.cs` | 0 |
| Krátké české master texty pod 350 znaků | 0 |
| Neplatné `category`, `map_category`, `priority` nebo `location` enumy | 0 |
| Mezery v ID / duplicitní ID | 0 |
| Duplicitní celé texty / názvy | 0 |
| Duplicitní zdrojové URL | 0 |
| Potvrzené reklamní nebo prodejní výzvy | 0 |
| Nevyřešené null polohy | 5, všechny zdůvodněny výše |

Všech sedm jazyků cs/de/en/es/fr/it/nl bylo strukturálně zkontrolováno: každý jazyk obsahuje 219 odpovídajících faktů, bez prázdných titulů či textů a bez rozdílů v české verzi. Cílená kontrola překladových odchylek vedla k opravám uvedeným výše.

## 5. Inventář a životní cyklus

- Sekvence, skupiny, RÚIAN CSV a Supabase: **32/32 PSČ**, bez rozdílu v inventáři.
- Soubor `data/czechia/reference/ruian_postcodes.json` je prázdný; pro kontrolu byl použit referenční `ruian_postcodes.csv` podle README reference.
- Stav Supabase: **31 validated + 1 placeholder (25763)**.
- `data_version=1` u všech 32 záznamů.
- `published=0`; žádný záznam nebyl publikován ani převeden na V5.
- AJV nebyl spuštěn; podle auditního promptu V2.0 není pro tento audit vyžadován.

## 6. Závěr a hranice provedených změn

**Audit V2.0: PASS.** Zásadní obsahové mezery byly doplněny, potvrzené duplicity odstraněny, administrativní údaje srovnány s oficiálními sídly pošt, překladová struktura a kategorie jsou bez chyb a zbývajících pět prázdných poloh má konkrétní zdůvodnění.

Záznam 25763 zůstává ve stavu `placeholder`; jeho workflow stav nebyl měněn. V tomto kroku nebyla provedena publikace V5, záloha ani read-only zamčení. Tyto kroky nebyly součástí požadavku na audit.
