# 59100 Prato — samostatný rework a audit

**Stav: IN PROGRESS — NEVALIDOVÁNO, NEPUBLIKOVÁNO**

- Kanonický rozsah: CAP `59100` — Comune di Prato, Toscana.
- Databázový zdroj pravdy: Neon `public.italy_cap_records`.
- Aktuální `workflow_status`: `placeholder` (záměrně beze změny).
- Původní inventář: 46 master faktů a 46 × 7 = 322 překladových položek.
- Stav po průběžném reworku: **48 master faktů a 48 × 7 = 336 překladových položek**.
- Tento tahák je oddělený od uzavřeného auditu osmi validovaných CAP 59011, 59013, 59015, 59016, 59021, 59024, 59025 a 59026.

## 1. Provedené obsahové změny

### Nové faktové záznamy

- `fact_047` — **Gonfienti: la città etrusca tra le vie dell’Etruria e la pianura padana**.
  - Doplněna etruská archeologická lokalita v lokalitě Gonfienti na území Comune di Prato.
  - Odděleno od Museo Archeologico di Gonfienti v Rocca Strozzi, které se nachází v Campi Bisenzio; muzeum nebylo chybně přiřazeno k CAP 59100.
  - Chronologie rozlišuje nejstarší fáze osídlení na konci 7. století př. n. l. a rozvoj plánovaného města v 6. století př. n. l.; nejde o nerozlišený rozpor datací.
  - Lokalita: `43.85476, 11.12943`, `archaeological_site`, přesnost `area_representative`. Bod reprezentuje archeologickou oblast, nikoli konkrétní vykopanou budovu.
  - Zdroje: Soprintendenza ABAP – strategický plán Gonfienti (2024); Prato Turismo; Prato Musei.

- `fact_048` — **Le Cascine di Tavola: la fattoria modello di Lorenzo il Magnifico e il paesaggio mediceo**.
  - Doplněna významná medicejská zemědělská usedlost a historická krajina na prat­ském břehu Ombrone.
  - Obsah zahrnuje vznik modelového statku v roce 1477, odvodnění mokřadů, síť kanálů a hrází, produkci medu a hedvábí, experimentální pěstování rýže a dochovanou strukturu historické krajiny.
  - Lokalita: `43.8376, 11.0439`, `historic_estate`, `exact`, podle geografického záznamu Museo Galileo / IMSS.
  - Zdroje: Città di Prato; Museo Galileo / IMSS; Cultura Toscana.

### Opravy a doplnění existujících faktů

- `fact_002` Palazzo Pretorio: doplněna nová expozice **“Prato prima di Prato”**, otevřená v květnu 2024. Představuje nálezy od pravěku do pozdní antiky, včetně materiálu z Gonfienti. Doplnění je podloženo strategickým plánem Soprintendenza z roku 2024.
- `fact_018` Pieve di San Pietro a Iolo: název již netvrdí langobardský původ jako jistotu; nově přesněji odkazuje na zasvěcení San Donatovi a fresky 14. století.
- `fact_041` Pieve di Sant’Ippolito: název nově uvádí kostel 11. století s **možnými** langobardskými počátky, v souladu s opatrností v textu.
- `fact_034` Centro di Scienze Naturali di Galceti: odstraněna proměnlivá informace o dočasném uzavření. Fakt nyní popisuje historickou, přírodovědnou a krajinnou hodnotu místa.
- `fact_034/nl`: opraven překlep `milie park` na `milieupark`.
- `fact_028` Teatro Politeama: `translations.it` bylo opraveno tak, aby přesně zrcadlilo italský master.
- Překladové názvy u `fact_018` a `fact_041` byly aktualizovány ve všech sedmi jazycích.

## 2. Průběžná strukturální kontrola databáze

Databázový read-back po provedených změnách potvrdil:

- 48 master faktů, unikátní ID `fact_001` až `fact_048`.
- 7 jazyků: `cs,de,en,es,fr,it,nl`; každý obsahuje přesně 48 položek.
- Celkem 336 překladových položek; žádný prázdný překlad.
- Italský mirror odpovídá masteru u všech 48 faktů.
- Pořadí a ID překladů odpovídají pořadí a ID master faktů.
- Všechny master texty splňují minimální délku 350 znaků.
- Všechny kategorie, mapové kategorie, typy lokací a přesnosti lokací odpovídají enumům aktuálního `schema.json`.
- Všech 48 faktů má lokaci s číselnými souřadnicemi, platným rozsahem a zdrojem.
- Všechny zdroje odkazované z `facts[].sources` a `facts[].location.source` jsou v top-level `sources[]`.
- Top-level inventář má po deduplikaci 211 unikátních URL; žádné duplicitní URL.
- Žádné chybějící povinné root pole; JSONB neobsahuje zakázaná root pole `status` ani `data_version`.
- Po odstranění soft hyphenů a dalších neviditelných znaků musí finální kontrola potvrdit nulový výskyt ve všech 336 překladech.

### Geografické poznámky

- `fact_029` Teatro Fabbricone a `fact_038` Il Fabbricone mají shodné souřadnice, protože popisují dvě různé, ale fyzicky propojené stránky téhož průmyslového komplexu. Nejde o duplicitní příběhy ani duplicitní faktové texty; je třeba rozhodnout, zda pro mapové zobrazení ponechat společný bod.
- `fact_047` je bod reprezentující archeologickou oblast, nikoli geodeticky přesný bod jedné stavby.
- Strukturální přítomnost souřadnic a zdroje sama o sobě neznamená nové nezávislé geodetické ověření každého ze všech 48 bodů.

## 3. Reklama, zdroje a CAP metadata

- Automatický slovní scan našel dva výskyty kořene `acquista`: u `fact_021` jde o historický nákup domů řeholnicemi a u `fact_039` o historické nabytí pozemků rodinou Lucchesi. Nejde o reklamu, nabídku ani výzvu k nákupu.
- Nebyl nalezen potvrzený affiliate obsah, sponzoring, sleva, prodejní CTA ani SEO výplň.
- Z top-level inventáře byly odstraněny dvě staré položky o seznamech poštovních poboček. Uživatel výslovně určil, že informace o tom, kdo poštu obsluhuje nebo zda je pobočka zavřená, nejsou obsahem Europe Exploreru.
- CAP metadata nyní odkazují na oficiální stránku Poste Italiane a seznam CAP/provincií, verze 8 z 20. dubna 2026. Tento seznam uvádí 59100 jako CAP města Prato.
- **Otevřený bod:** Poste Italiane na oficiální stránce oznámila třetí aktualizaci CAP 2026 s účinností od 16. listopadu 2026. Její ZIP se během kontroly nepodařilo stáhnout. Před finálním PASS je nutné ověřit, zda tato aktualizace zasáhla 59100. Do té doby se nesmí tvrdit, že byl prověřen i poslední listopadový update.

## 4. Stav kontrol A–I

| Oblast | Průběžný stav | Poznámka |
|---|---|---|
| A — tematická úplnost | IN PROGRESS | Doplněny Gonfienti a Cascine di Tavola; tematické hledání celého území ještě není uzavřeno. |
| B — geografická plausibilita | IN PROGRESS | Všechny body mají lokaci a zdroj; úplná nezávislá revize každého bodu ještě není uzavřena. |
| C — geografické přiřazení | IN PROGRESS | Nové body jsou doloženy v Comune di Prato; závěrečný průchod všech 48 přiřazení zbývá. |
| D — duplicity | STRUCTURAL PASS | Žádné duplicitní názvy ani texty; společný bod Fabbricone je vysvětlen výše. |
| E — sémantické kategorie | STRUCTURAL PASS | Žádné neplatné enumy; zbývá závěrečné ruční posouzení všech hraničních případů. |
| F — překlady | STRUCTURAL PASS | 336/336 položek, italské mirrory 48/48; úplný čtenářský audit všech sedmi jazyků ještě není uzavřen. |
| G — JSON a schéma | PASS (průběžný read-back) | Struktura, ID, povinná pole a enumy prošly kontrolou. |
| H — souřadnice | IN PROGRESS | Souřadnice a zdroje jsou přítomny; úplné nezávislé přeměření všech bodů nebylo provedeno. |
| I — reklama a cílená factual kontrola | IN PROGRESS | Reklamní scan bez potvrzené reklamy; cílené ověření všech významných tvrzení ještě pokračuje. |

## 5. Ochranné hranice

- `workflow_status` zůstává **`placeholder`**.
- Nebyla provedena publikace, změna na `validated`, záloha ani read-only lock.
- Nebylo změněno schéma ani lifecycle databáze.
- Nové a opravené texty byly uloženy do Neonu; po každém zápisu proběhl read-back.
- Tento dokument **není finální auditní PASS**. Uzavření A–I nastane až po dokončení otevřených kontrol a výslovném zaznamenání jejich výsledků.
