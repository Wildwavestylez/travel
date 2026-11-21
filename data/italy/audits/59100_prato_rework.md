# 59100 Prato — samostatný rework a audit

**Stav: IN PROGRESS — NEVALIDOVÁNO, NEPUBLIKOVÁNO**

- Kanonický rozsah: CAP `59100` — Comune di Prato, Toscana.
- Databázový zdroj pravdy: Neon `public.italy_cap_records`.
- Aktuální `workflow_status`: `placeholder` (záměrně beze změny).
- Původní inventář: 46 master faktů a 46 × 7 = 322 překladových položek.
- Stav po průběžném reworku: **58 master faktů a 58 × 7 = 406 překladových položek**.
- Tento tahák je oddělený od uzavřeného auditu osmi validovaných CAP 59011, 59013, 59015, 59016, 59021, 59024, 59025 a 59026.

## 1. Provedené obsahové změny

### Nové faktové záznamy

- `fact_047` — **Gonfienti: la città etrusca tra le vie dell’Etruria e la pianura padana**.
  - Doplněna etruská archeologická lokalita v lokalitě Gonfienti na území Comune di Prato.
  - Odděleno od Museo Archeologico di Gonfienti v Rocca Strozzi, které se nachází v Campi Bisenzio; muzeum nebylo chybně přiřazeno k CAP 59100.
  - Chronologie rozlišuje nejstarší fáze osídlení na konci 7. století př. n. l. a rozvoj plánovaného města v 6. století př. n. l.; nejde o nerozlišený rozpor datací.
  - Lokalita: `43.85476, 11.12943`, `archaeological_site`, přesnost `area_representative`. Bod reprezentuje archeologickou oblast, nikoli konkrétní vykopanou budovu.
  - Zdroje: Soprintendenza ABAP – strategický plán Gonfienti (2024); Prato Turismo.

- `fact_048` — **Le Cascine di Tavola: la fattoria modello di Lorenzo il Magnifico e il paesaggio mediceo**.
  - Doplněna významná medicejská zemědělská usedlost a historická krajina na břehu Ombrone na území Prata.
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

- 58 master faktů, unikátní ID `fact_001` až `fact_058`.
- 7 jazyků: `cs,de,en,es,fr,it,nl`; každý obsahuje přesně 58 položek.
- Celkem 406 překladových položek; žádný prázdný překlad.
- Italský mirror odpovídá masteru u všech 58 faktů.
- Pořadí a ID překladů odpovídají pořadí a ID master faktů.
- Všechny master texty splňují minimální délku 350 znaků.
- Všechny kategorie, mapové kategorie, typy lokací a přesnosti lokací odpovídají enumům aktuálního `schema.json`.
- Všech 58 faktů má lokaci s číselnými souřadnicemi, platným rozsahem a zdrojem.
- Všechny zdroje odkazované z `facts[].sources` a `facts[].location.source` jsou v top-level `sources[]`.
- Top-level inventář má po deduplikaci 245 unikátních URL; žádné duplicitní URL.
- Žádné chybějící povinné root pole; JSONB neobsahuje zakázaná root pole `status` ani `data_version`.
- Finální scan všech 406 překladových položek potvrdil 0 soft hyphenů, 0 zero-width znaků a 0 replacement znaků.

### Geografické poznámky

- `fact_029` Teatro Fabbricone a `fact_038` Il Fabbricone mají shodné souřadnice, protože popisují dvě různé, ale fyzicky propojené stránky téhož průmyslového komplexu. Nejde o duplicitní příběhy ani duplicitní faktové texty; je třeba rozhodnout, zda pro mapové zobrazení ponechat společný bod.
- `fact_047` je bod reprezentující archeologickou oblast, nikoli geodeticky přesný bod jedné stavby.
- Strukturální přítomnost souřadnic a zdroje sama o sobě neznamená nové nezávislé geodetické ověření každého ze všech 58 bodů.

## 3. Reklama, zdroje a CAP metadata

- Automatický slovní scan našel dva výskyty kořene `acquista`: u `fact_021` jde o historický nákup domů řeholnicemi a u `fact_039` o historické nabytí pozemků rodinou Lucchesi. Nejde o reklamu, nabídku ani výzvu k nákupu.
- Nebyl nalezen potvrzený affiliate obsah, sponzoring, sleva, prodejní CTA ani SEO výplň.
- Z top-level inventáře byly odstraněny dvě staré položky o seznamech poštovních poboček. Uživatel výslovně určil, že informace o tom, kdo poštu obsluhuje nebo zda je pobočka zavřená, nejsou obsahem Europe Exploreru.
- CAP metadata nyní odkazují na oficiální stránku Poste Italiane a seznam CAP/provincií, verze 8 z 20. dubna 2026. Tento seznam uvádí 59100 jako CAP města Prato.
- **Otevřený bod:** Poste Italiane na oficiální stránce oznámila třetí aktualizaci CAP 2026 s účinností od 16. listopadu 2026. Její ZIP se během kontroly nepodařilo stáhnout. Před finálním PASS je nutné ověřit, zda tato aktualizace zasáhla 59100. Do té doby se nesmí tvrdit, že byl prověřen i poslední listopadový update.

## 4. Stav kontrol A–I

| Oblast | Průběžný stav | Poznámka |
|---|---|---|
| A — tematická úplnost | IN PROGRESS | Doplněny Gonfienti, Cascine di Tavola, Villa del Palco a další městské lokality; tematické hledání celého území ještě není uzavřeno. Macrolotto Zero zůstává kandidátem k doplnění po doložení bezpečného mapového bodu. |
| B — geografická plausibilita | IN PROGRESS | Všechny body mají lokaci a zdroj; úplná nezávislá revize každého bodu ještě není uzavřena. |
| C — geografické přiřazení | IN PROGRESS | Nové body jsou doloženy v Comune di Prato; závěrečný průchod všech 58 přiřazení zbývá. |
| D — duplicity | STRUCTURAL PASS | Žádné duplicitní názvy ani texty; společný bod Fabbricone je vysvětlen výše. |
| E — sémantické kategorie | STRUCTURAL PASS | Žádné neplatné enumy; zbývá závěrečné ruční posouzení všech hraničních případů. |
| F — překlady | STRUCTURAL PASS | 406/406 položek, italské mirrory 58/58; žádné prázdné nebo krátké texty ani skryté znaky; úplný čtenářský audit všech sedmi jazyků ještě není uzavřen. |
| G — JSON a schéma | PASS (průběžný read-back) | Struktura, ID, povinná pole a enumy prošly kontrolou. |
| H — souřadnice | IN PROGRESS | Souřadnice a zdroje jsou přítomny; úplné nezávislé přeměření všech bodů nebylo provedeno. |
| I — reklama a cílená factual kontrola | IN PROGRESS | Reklamní scan bez potvrzené reklamy; cílené ověření všech významných tvrzení ještě pokračuje. |

## 5. Ochranné hranice

- `workflow_status` zůstává **`placeholder`**.
- Nebyla provedena publikace, změna na `validated`, záloha ani read-only lock.
- Nebylo změněno schéma ani lifecycle databáze.
- Nové a opravené texty byly uloženy do Neonu; po každém zápisu proběhl read-back.
- Tento dokument **není finální auditní PASS**. Uzavření A–I nastane až po dokončení otevřených kontrol a výslovném zaznamenání jejich výsledků.


## 6. Sjednocení pravidel poštovního rozsahu (21.11.2026)

Na základě výslovného pokynu uživatele bylo odstraněno zaměření na provoz poštovních poboček. Aktualizovány byly:

- `data/italy/prompt_rework.md`
- `data/italy/prompt_audit.md`
- `data/italy/CONTENT_STANDARD.md`
- `data/italy/COUNTRY_PROFILE.md`

Závazné pravidlo: poštovní zdroje se používají pouze k ověření samotného CAP a jeho geografického přiřazení. Nezjišťuje se, kdo CAP obsluhuje, zda je konkrétní pobočka otevřená či zavřená, její otevírací doba, nabídka služeb ani doručovací trasy nebo režimy. Tyto informace nejsou obsahem Europe Exploreru a nemají se ukládat do faktů ani do běžného inventáře zdrojů.

Schéma ani lifecycle databáze se neměnily.


## 7. Druhé rozšíření obsahu a opakovaný read-back (21.11.2026)

### Nové fakty `fact_049` až `fact_057`

- `fact_049` — **Le mura medievali di Prato**: první městská hradba z let přibližně 1175–1196, osm bran, druhý obranný okruh a pozdější bastiony. Reprezentativní mapový bod: Porta Mercatale.
- `fact_050` — **Il Cassero Medievale**: vyvýšený vojenský koridor z roku 1351, který po florentském ovládnutí Prata spojil opevnění u Porta Fiorentina s Císařským hradem. Zaznamenáno i částečné zboření a obnova dokončená roku 2000.
- `fact_051` — **Museo dell’Opera del Duomo**: samostatný muzeální bod pro mramorový parapet venkovní kazatelny Donatella a Michelozza a další díla z katedrály a diecéze.
- `fact_052` — **Badia di San Fabiano**: klášterní komplex doložený od roku 1082, péče o poutníky a nemocné, románské části, mozaiky XI.–XII. století a pozdější biskupský seminář.
- `fact_053` — **Casa Museo Leonetto Tintori**: dům-restaurátora, fresková dílna založená roku 1983, městská donace z roku 1988 a park s přibližně třemi sty sochami a reliéfy.
- `fact_054` — **Mausoleo di Curzio Malaparte**: hrobka spisovatele na Monte Le Coste / Spazzavento a jeho vztah k rodnému Pratu.
- `fact_055` — **Monumento ai 29 Martiri di Figline**: pamětní místo k masakru 29 partyzánů dne 6. září 1944. Text rozlišuje vlastní místo popravy u oblouku ve Via Maggio a památník na Piazza XXIX Martiri.
- `fact_056` — **Bastione delle Forche**: medicejská fortifikace navržená v kontextu projektu Antonia da Sangalla mladšího, práce obnovené roku 1551, poškození povodní roku 1618 a dokončená městská obnova v roce 2026.
- `fact_057` — **Oratorio di Santa Maria Maddalena ai Malsani**: středověký oratoriální kostel vedle někdejšího leprosaria Sant’Iacopo, s fragmenty fresek z poloviny XIII. století a malbou připisovanou Pietru di Miniato z roku 1414.

- `fact_058` — **Villa del Palco**: dimora commissionata da Francesco Datini alla fine del Trecento, trasformata nel 1439 in convento francescano; ampliamenti successivi, soggiorno di San Leonardo da Porto Maurizio nel 1716, soppressione nel 1778 e acquisizione da parte della Diocesi nel 1956.

### Opravy existujících faktů a mapových metadat

- `fact_001` — odstraněno chybné označení „pulpito bronzeo“. Text nyní správně identifikuje mramorový parapet venkovní kazatelny Donatella a Michelozza a uvádí, že originál je dnes v Museo dell’Opera del Duomo; venku je kopie. Opraveno v masteru a všech sedmi jazycích.
- `fact_008` — název a text přeorientovány na Muzeum deportací a odboje a deportace textilních dělníků; masakr 29 partyzánů zůstává pouze jako kontextový odkaz na samostatný památník `fact_055`.
- `fact_030` — `map_category` změněna z `museum` na `cultural_site`, protože Biblioteca Roncioniana je knihovna, nikoli muzeum.
- Odstraněny tři soft hyphens z českých překladů `fact_008`, `fact_052` a `fact_054`.
- U nových faktů byly zdroje souřadnic odděleny od obsahových zdrojů a zapsány do `facts[].location.source` i top-level inventáře.

### Opakovaná strukturální kontrola 57 faktů / 399 překladů

Read-back po druhém rozšíření potvrdil:

- 58 master faktů a 58 překladů v každém z jazyků `cs,de,en,es,fr,it,nl` — celkem 406 položek.
- 58/58 přesných italských mirrorů; žádné prázdné nebo kratší než 350 znaků.
- 0 duplicitních fact ID, názvů a textů.
- 0 neplatných hodnot `category`, `map_category`, `priority`, `location.type` a `location.accuracy` podle aktuálního `schema.json`.
- 0 chybných nebo chybějících číselných souřadnic; všech 57 lokací má zdroj.
- 0 chybějících odkazů z `facts[].sources` a `facts[].location.source` do top-level `sources[]`.
- 245 unikátních URL v top-level `sources[]`; žádné duplicitní URL.
- 0 soft hyphenů, 0 zero-width znaků a 0 replacement znaků ve všech 406 překladech.
- 2 výskyty italského kořene `acquista` zůstávají pouze v historickém významu: `fact_021` (nákup domů řeholnicemi) a `fact_039` (historické nabytí pozemků rodinou Lucchesi). Nejde o reklamu ani nákupní výzvu.
- Jediná skupina přesně shodných souřadnic zůstává `fact_029` a `fact_038`, dvě různá místa / příběhy ve fyzicky propojeném komplexu Fabbricone.

### Další otevřený tematický kandidát

- **Macrolotto Zero** je významná vrstva průmyslového, migračního a současného sociálního příběhu Prata. Jeho obsahový význam je potvrzen zdroji Comune di Prato a Regione Toscana, ale do databáze zatím nebyl přidán, protože nebyl bezpečně ověřen konkrétní reprezentativní mapový bod pro celý městský obvod. Souřadnice nebudou odhadovány.
