# Auditní tahák — 288xx–290xx (Nymbursko a přilehlé Polabí)

**Kanonické ID:** `CZ-NYMBURSKO-28802-29001`  
**Rozsah:** 288xx–290xx; přesně 31 existujících PSČ uvedených níže  
**Stav auditu:** **REVIEW REQUIRED**  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.1  
**Zdroj pravdy:** Supabase `public.postal_codes`, `country_code='CZ'`  
**Publikace / záloha / Neon / read-only lock:** neprovedeno a nepožadováno

## 1. Přesný inventář

`28802`; `28901`–`28908`; `28911`–`28917`; `28921`–`28926`; `28931`–`28937`; `28941`; `29001`.

- 31/31 v `sequence.json`.
- 31/31 právě jednou v `groups`; žádný rozdíl ani duplicita.
- 31/31 v kanonickém RÚIAN CSV.
- 31/31 existujících záznamů v Supabase.
- 253 faktů před opravami; počet faktů zůstal zachován.
- `sequence.json` ani rozsah nebyly změněny.
- RÚIAN manifest: feed aktualizován 2026-11-01; CSV staženo 2026-11-13.

## 2. Turistická úplnost — kontrola území jako celku

**Bez potvrzené zásadní tematické mezery.** Stávající data pokrývají hlavní dominanty a příběhy regionu:

- Nymburk: královské město, středověké opevnění, kostel sv. Jiljí a Turecká věž.
- Libice nad Cidlinou: slavníkovské hradiště a dějiny Slavníkovců.
- Poděbrady: Jiří z Poděbrad a mírová iniciativa, havířská historie, lázeňství, Silver A.
- Milovice: vojenský prostor, zaniklá Mladá, zajatecká historie a Boží Dar.
- Lysá nad Labem a okolí: Bedřich Hrozný, zámek, barokní krajina a dostihové dědictví.
- Nymbursko/Kersko: Bohumil Hrabal, Hrabalova chata a místní literární vazby.
- Přerov nad Labem: archeologické hradiště a národopisné muzeum.
- Loučeň: zámek a krajinné dědictví.
- Křinec, Rožďalovice a další sídla: historická, archeologická a přírodní témata.

Přemysl Otakar II. je zastoupen v souvislosti s Nymburkem a Městcem Králové. Městská tradice o jeho narození v Městci je v existujícím textu správně označena jako pověst, nikoli jako doložený životopisný fakt. Nebylo přidáno nové faktum jen kvůli tematické kvótě.

## 3. Provedené opravy

### Překlady a master texty
- Opraveno 15 rozdílů mezi `facts[].text` a odpovídajícími `translations.cs`.
- U 28922 bylo zjištěno, že devět master faktů mělo anglický text, zatímco české verze byly uloženy v `translations.cs`. Český master `title` a `text` byl obnoven z odpovídajících českých překladů; anglické verze zůstaly v `translations.en`.
- Při read-backu opravených řádků se české master texty a `translations.cs` shodují.
- Strukturální kontrola jazykových polí potvrdila shodu ID faktů napříč `cs, de, en, es, fr, it, nl`. Kompletní individuální sémantická revize všech cizojazyčných textů zatím není uzavřena.

### Mapové kategorie
- 28802/fact_002: nepovolené `fortification` → `castle`.
- 28802/fact_007: nepovolené `historic_village` → `local_culture`.
- Ostatní nalezené mapové kategorie odpovídaly povoleným hodnotám při provedené kontrole.

### Správní údaje
- Top-level `region` doplněn/synchronizován na `Středočeský kraj` u 26 záznamů; zbývajících 5 již hodnotu mělo.
- Top-level `district` a JSON `district` byly srovnány s pravidlem „pouze relevantní část obce/města“:
  - 28907: chybné `Nymburk` (okres, nikoli část obce Libice nad Cidlinou) odstraněno.
  - 28901, 28931, 28932: redundantní hodnota totožná s `city` odstraněna.
  - 28924: top-level `district` doplněn jako `Mladá`, shodně s JSON.
  - 28941 `Pňov` a 29001 `Poděbrady III` ponechány jako relevantní místní části.
- `city`, `municipality` a JSON `city` se v kontrolovaném inventáři shodují. Přímé ověření fyzického sídla obsluhující pošty pro všech 31 PSČ proti oficiálnímu provoznímu zdroji však zůstává otevřené; samotná shoda polí není důkazem sídla pošty.
- Okresy v JSON: Kolín pro 28905, 28911, 28914 a 28941; Nymburk pro ostatní cílová PSČ. Kraj je Středočeský.
- ČSÚ potvrzuje, že Pečky a Poříčany přešly z okresu Nymburk do okresu Kolín k 1. 1. 1996; Pňov-Předhradí náleží do okresu Kolín.

### Geografické polohy
- Z 38 původních `location=null` bylo doplněno 9 přibližných orientačních bodů s `accuracy='historical_approximate'`, typem `historic_settlement` a zdrojovou URL.
- Opravené polohy: 28901/fact_001, fact_002, fact_004, fact_005, fact_006; 28902/fact_003, fact_004, fact_005; 28908/fact_008.
- Všech 9 změn prošlo read-back kontrolou.
- Zbývá 29 faktů bez dostatečně ověřené polohy; souřadnice nebyly domýšleny.

## 4. Otevřené položky — blokují PASS

### A. Český master text pod 350 znaků (18 faktů; po první dávce)

- 28802: **vyřešeno v první dávce** — fact_001 (696), fact_003 (632), fact_004 (618), fact_007 (613). České master texty byly rozšířeny a synchronizovány s `translations.cs`; šest dalších jazyků dostalo odpovídající rozšíření. Read-back potvrdil délky nad 350 znaků a shodu českého masteru.
- 28903: fact_003 (320)
- 28905: fact_004 (324)
- 28906: fact_001 (323)
- 28911: fact_010 (340)
- 28912: fact_007 (335), fact_008 (317)
- 28915: fact_001 (315)
- 28921: fact_003 (345), fact_008 (306), fact_010 (328), fact_013 (245)
- 28931: fact_002 (307), fact_004 (262), fact_005 (346)
- 28932: fact_003 (316), fact_006 (348), fact_007 (318)
- 28934: fact_001 (343)

Délková hranice se vztahuje výhradně na český master text. Tyto položky nebyly vyplněny obecným textem ani neověřenými dodatky; vyžadují konkrétní doplnění ze zdrojů a následnou aktualizaci všech šesti cizojazyčných překladů.

### B. Zbývající `location=null` (29 faktů)

- 28802: fact_001–fact_007
- 28901: fact_003
- 28907: fact_006
- 28908: fact_003, fact_009
- 28912: fact_003, fact_004, fact_008
- 28914: fact_004
- 28923: fact_004
- 28926: fact_004, fact_007
- 28932: fact_005
- 28933: fact_010
- 28934: fact_001, fact_007, fact_011
- 28935: fact_001, fact_002
- 28936: fact_003, fact_004
- 28941: fact_004
- 29001: fact_009

U každého zbývajícího faktu je nutné dohledat konkrétní veřejný orientační bod nebo doloženou přibližnou polohu podle Content Standardu. Pokud ji nelze bezpečně určit, ponechat `null` a uvést důvod.

### C. Ověření sídla obsluhující pošty
- Pole `city` je interně konzistentní s `municipality` a JSON `city`, ale fyzické sídlo obsluhující pošty nebylo nezávisle doloženo pro všech 31 kódů. Ověřit oficiální provozní zdroj; neměnit `city` jen podle doručovací trasy nebo sídla jiné pošty.

### D. Sémantická revize překladů
- Struktura a shoda ID ve všech sedmi jazycích byla zkontrolována.
- Zbývá individuální sémantická kontrola cizojazyčných textů `de, en, es, fr, it, nl` pro všech 253 faktů (1 518 položek); stylistické přepisování správných překladů není cílem.

## 5. Technický stav a životní cyklus

- Všech 31 záznamů má `status='validated'`: 26× `data_version=1`, 4× `data_version=2`, 1× `data_version=3`; žádný záznam není publikovaný.
- Vybrané mapové body byly načteny pouze podle ID cílových PSČ; pro tento blok nebyl nalezen žádný záznam v `explorer_map_points`. Záznamy jsou nyní ve validačním, nikoli publikovaném stavu; mapový sync je proto ponechán na publikační workflow.
- Nebyla provedena změna `data_version` ani `status`.
- Nebyla spuštěna záloha, publikace, Neon import ani read-only lock.
- Nebyla spuštěna samostatná AJV validace, Edge Function ani celodatabázový inventář.

## 6. Další přesný krok

1. Dokončit zbývajících 18 krátkých českých master textů pouze na základě ověřitelných zdrojů a aktualizovat jejich překlady `de/en/es/fr/it/nl`.
2. Dohledat a bezpečně doplnit zbývajících 29 poloh; neověřitelné ponechat jako `null` s důvodem.
3. Provést individuální sémantickou kontrolu 1 518 cizojazyčných textů a opravit pouze významové vady.
4. Ověřit pouze změněné řádky a jejich navázané údaje.
5. Uzavřít audit až po vyřešení nebo výslovném přijetí každé otevřené položky.

### Záznam průběžného postupu — 27. 11. 2026

**Dávka 1 dokončena: 28802 / Nymburk.** Rozšířeny fakty `fact_001`, `fact_003`, `fact_004`, `fact_007`. Nové historické detaily jsou podloženy městskou strategií rozvoje, Památkovým katalogem NPÚ a Státním archeologickým seznamem NPÚ; u Všechlap byl využit územní plán obce a RISY. U Turecké věže byla sjednocena datace na rok 1599 podle NPÚ (nikoli dříve uváděné 1597). Přidán zdroj NPÚ do seznamu zdrojů faktů 003 a 004. Souřadnice zůstávají `null` a čekají na samostatný geografický audit.

**Konečný výsledek tohoto běhu: REVIEW REQUIRED.** Auditní rozsah je přesně vymezen a první opravy jsou zapsány a ověřeny; zbývající obsahové, geografické a sémantické kontroly nejsou uzavřeny.


---

## Aktuální addendum — stav po pokračování auditu 27. 11. 2026

Tato část **nahrazuje průběžné počty a otevřené položky uvedené výše**, které odpovídají pouze první fázi auditu. Podrobný pracovní deník je v `28802-29001_progress_20261127.md`.

### Aktuální inventář a obsah
- 31/31 PSČ; 255 faktů (původně 253, doplněna dvě nová fakta v 28905: tvrziště Na Hradě a zaniklé mohylové pohřebiště Mírkoveček).
- Všech 22 původně krátkých českých master textů bylo rozšířeno; nyní 0 textů pod 350 znaků.
- 32 geografických poloh doplněno od prvního inventáře (9 v první fázi, 7 v Nymburku, 16 v dalších lokalizačních dávkách).
- Aktuálně 7 faktů s `location=null`: 28905/fact_008, 28907/fact_006, 28914/fact_004, 28923/fact_004, 28926/fact_007, 28935/fact_002 a 28941/fact_004. U těchto položek nebyl bezpečně určen jediný bod nebo je poloha historicky sporná/plošná; souřadnice nebyly domýšleny.

### Aktuální jazykový stav
- 255/255 unikátních faktů v každém jazyce `cs/de/en/es/fr/it/nl`.
- 0 rozdílů `facts.title/text` proti `translations.cs`.
- 45 faktů má překlady nově vytvořené, přepracované nebo individuálně sémanticky zkontrolované; zbývá 210 faktů × 6 jazyků = **1 260 cizojazyčných textů** k individuální sémantické revizi.
- V rámci revize byly opraveny významové nedostatky: terminologie Božehrobců, chybějící historické a památkové souvislosti, opakování v překladech kostela sv. Markéty, název Křižovníků s červenou hvězdou a další vypuštěné věty.

### Aktuální správní a strukturální stav
- 31/31 shoda `city = municipality = content.city`; všechny záznamy mají `state = Středočeský kraj`.
- Poštovní sídla odpovídají oficiálnímu seznamu provozoven; u 28802 byla pobočka Nymburk 2 uzavřena v roce 2023, současná Nymburk 1 je ve stejném městě. U 28913 nebyl nalezen aktuální detail pobočky, ale oficiální seznam uvádí Zvěřínek.
- Strukturální read-only kontrola podle aktuálního `schema.json`: 0 chybějících povinných polí, 0 nepovolených kategorií/priorit/map kategorií, 0 prázdných zdrojů, 0 duplicitních ID faktů, 0 duplicitních ID překladů, 0 neplatných lokalizačních objektů.
- Přesná duplicita titulů mezi fakty nebyla nalezena.
- `sequence.json` a rozsah nebyly změněny; data_version/status nebyly měněny.

### Konečný stav tohoto pokračování
**REVIEW REQUIRED.** Obsahové a strukturální kontroly jsou výrazně pokročilejší, ale audit nelze označit jako PASS, dokud nebude dokončena individuální sémantická revize 1 260 překladů a uzavřeno nebo výslovně odůvodněno sedm zbývajících nulových poloh. V5, publikace, záloha, Neon import ani read-only lock nebyly spuštěny.


### Addendum — pokračující sémantická revize překladů

Od předchozího addenda byly dokončeny další jazykové dávky:
- 28901: 6 faktů / 36 překladů; opravena terminologie Božehrobců.
- 28902: 5 faktů / 30 překladů; doplněny vypuštěné historické a památkové věty.
- 28903: 10 faktů / 60 překladů; odstraněno opakování v překladu kostela sv. Markéty a doplněny chybějící historické souvislosti.
- 28904: 7 faktů / 42 překladů; opravena role faráře Josefa Koukala a další vypuštěné informace.
- 28905: 8 faktů / 48 překladů; opraven závažný nesoulad českého masteru 28905/fact_001, který omylem popisoval kostel v Sánech místo kostela sv. Gotharda a kostnice v Žehuni. Všechny překlady byly srovnány s obnoveným českým textem.
- 28906: 7 faktů / 42 překladů; opraven závažný nesoulad českého masteru 28906/fact_004, který omylem popisoval kostel v Choťovicích místo Sánského kanálu a Bačovky. Chronologie byla zpřesněna podle odborného článku VTEI a databáze vodních mlýnů. Odstraněno opakování v překladu 28906/fact_001.
- 28907: 6 faktů / 36 překladů; zkontrolováno bez nutných změn.

Celkem je nyní nově vytvořeno, přepracováno nebo individuálně sémanticky zkontrolováno **73 faktů**. Zbývá **1 092 cizojazyčných textů** (182 faktů × 6 jazyků). Audit zůstává **REVIEW REQUIRED**.


---

## Závěrečné addendum — sémantická a strukturální kontrola překladů (27. 11. 2026)

Toto addendum nahrazuje starší průběžný stav jazykové revize v tomto taháku.

### Sémantická kontrola překladů: COMPLETE

- 31/31 PSČ, **255/255 faktů**.
- Všech 255 faktů je individuálně sémanticky zkontrolováno v šesti cizojazyčných verzích: **1 530/1 530 textů de/en/es/fr/it/nl**.
- 24 faktů mělo překlady nově vytvořené nebo kompletně přepracované; zbývajících 231 faktů prošlo individuální kontrolou existujících překladů.
- Všech sedm jazyků má přesně 255/255 faktů: cs/de/en/es/fr/it/nl.
- 0 prázdných překladových polí, 0 duplicitních překladových ID, 0 rozdílů mezi českým masterem a `translations.cs`.
- 0 českých master textů pod 350 znaků a 0 textových polí s chybným JSON wrapperem.
- Během revize byly opraveny významové vady a nepřesnosti: chybná botanická ekvivalence, nesprávné označení historické osoby jako rytíře, nepodložený letopočet v překladu, vynechané datace a památkové souvislosti, opakované odstavce a dva závažné nesoulady českých masterů (28905/fact_001 a 28906/fact_004).
- Při technických opravách překladových objektů 28913 a 28923 byly jazykové bloky obnoveny z bezprostředního read-backu a následně znovu ověřeny; všechny jazyky, překladové názvy a lokalizovaná `representative_place` jsou kompletní.

### Strukturální kontrola podle aktuálního schema.json

- 31/31 záznamů; 255 faktů; 255/255 v každém jazyce.
- 0 chybějících povinných top-level/faktových polí.
- 0 nepovolených kategorií, priorit, mapových kategorií, typů polohy nebo přesností.
- 0 prázdných zdrojových polí, 0 prázdných překladových polí, 0 duplicitních ID.
- 0 rozdílů českého masteru a `translations.cs`.
- 0 neplatných geografických souřadnic, 0 neplatných location objektů, 0 neplatných representative/access points.
- 0 prázdných lokalizovaných `representative_place`.

### Zbývající geografické položky

Stále zůstává **7 faktů s `location=null`**:
- 28905/fact_008
- 28907/fact_006
- 28914/fact_004
- 28923/fact_004
- 28926/fact_007
- 28935/fact_002
- 28941/fact_004

Souřadnice nebyly domýšleny. Každý případ musí být buď bezpečně lokalizován podle Content Standardu, nebo výslovně přijat jako zdůvodněná výjimka.

### Aktuální konečný stav

**TRANSLATION SEMANTIC REVIEW: COMPLETE. OVERALL AUDIT: REVIEW REQUIRED.**

Otevřených sedm geografických případů a ostatní položky původního auditního checklistu musí být uzavřeny nebo výslovně přijaty. Záznamy zůstávají ve stávajícím validačním stavu; nebyla provedena V5, publikace, záloha, Neon import ani read-only lock.


### Geografická aktualizace — 27. 11. 2026

**28923/fact_004 – Vrutický rybník: poloha doplněna.** Diplomová práce ČZU uvádí lokalizaci N 50°13.55520′, E 14°51.32603′ a popisuje rybník jako rozsáhlou vodní plochu jihozápadně od Benátecké Vrutice směrem k Milovicím. Do databáze byl uložen desetinný převod 50.225920, 14.855434 s `type=pond` a `accuracy=area_representative`. Zdroj: https://theses.cz/id/rc17lv/103809_prace.pdf?lang=sk.

Po doplnění této reprezentativní polohy zůstává **6 záměrně nevyplněných poloh**:
- 28905/fact_008 – zaniklé pohřebiště Mírkoveček; známá lesní trať jihovýchodně od Choťovic, ale bez bezpečného přesného bodu.
- 28907/fact_006 – více sídel v jednom faktu.
- 28914/fact_004 – více historických mlýnů a vodních děl.
- 28926/fact_007 – dvě zaniklé vodní plochy.
- 28935/fact_002 – dva oddělené archeologické nálezové celky.
- 28941/fact_004 – fragment reliéfu s nejednoznačným původním umístěním a více možnými nálezovými souvislostmi.

Tyto souřadnice nebyly domýšleny; `location=null` je v těchto případech záměrné. Celkový audit proto zůstává **REVIEW REQUIRED**, dokud nebudou tyto výjimky výslovně přijaty a uzavřeny zbývající položky auditního checklistu.
