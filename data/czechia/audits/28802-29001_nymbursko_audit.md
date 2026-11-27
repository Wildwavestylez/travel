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
- `city`, `municipality` a JSON `city` se v kontrolovaném inventáři shodují.
- Okresy v JSON: Kolín pro 28905, 28911, 28914 a 28941; Nymburk pro ostatní cílová PSČ. Kraj je Středočeský.
- ČSÚ potvrzuje, že Pečky a Poříčany přešly z okresu Nymburk do okresu Kolín k 1. 1. 1996; Pňov-Předhradí náleží do okresu Kolín.

### Geografické polohy
- Z 38 původních `location=null` bylo doplněno 9 přibližných orientačních bodů s `accuracy='historical_approximate'`, typem `historic_settlement` a zdrojovou URL.
- Opravené polohy: 28901/fact_001, fact_002, fact_004, fact_005, fact_006; 28902/fact_003, fact_004, fact_005; 28908/fact_008.
- Všech 9 změn prošlo read-back kontrolou.
- Zbývá 29 faktů bez dostatečně ověřené polohy; souřadnice nebyly domýšleny.

## 4. Otevřené položky — blokují PASS

### A. Český master text pod 350 znaků (22 faktů)

- 28802: fact_001 (320), fact_003 (278), fact_004 (252), fact_007 (297)
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

### C. Sémantická revize překladů
- Struktura a shoda ID ve všech sedmi jazycích byla zkontrolována.
- Zbývá individuální sémantická kontrola cizojazyčných textů `de, en, es, fr, it, nl` pro všech 253 faktů (1 518 položek); stylistické přepisování správných překladů není cílem.

## 5. Technický stav a životní cyklus

- Vybrané mapové body byly načteny pouze podle ID cílových PSČ; pro tento blok nebyl nalezen žádný záznam v `explorer_map_points`. Záznamy jsou nyní ve validačním, nikoli publikovaném stavu; mapový sync je proto ponechán na publikační workflow.
- Nebyla provedena změna `data_version` ani `status`.
- Nebyla spuštěna záloha, publikace, Neon import ani read-only lock.
- Nebyla spuštěna samostatná AJV validace, Edge Function ani celodatabázový inventář.

## 6. Další přesný krok

1. Dokončit 22 krátkých českých master textů pouze na základě ověřitelných zdrojů a aktualizovat jejich překlady `de/en/es/fr/it/nl`.
2. Dohledat a bezpečně doplnit zbývajících 29 poloh; neověřitelné ponechat jako `null` s důvodem.
3. Provést individuální sémantickou kontrolu 1 518 cizojazyčných textů a opravit pouze významové vady.
4. Ověřit pouze změněné řádky a jejich navázané údaje.
5. Uzavřít audit až po vyřešení nebo výslovném přijetí každé otevřené položky.

**Konečný výsledek tohoto běhu: REVIEW REQUIRED.** Auditní rozsah je přesně vymezen a první opravy jsou zapsány a ověřeny; zbývající obsahové, geografické a sémantické kontroly nejsou uzavřeny.
