# 59100 Prato — samostatný rework a audit

**Stav: REVIEW REQUIRED — A–I PASS; formální uzavření čeká pouze na lifecycle `placeholder`; nepublikováno**

- Kanonický rozsah: CAP `59100` — Comune di Prato, Toscana.
- Databázový zdroj pravdy: Neon `public.italy_cap_records`.
- Aktuální `workflow_status`: `placeholder` (záměrně beze změny).
- Původní inventář: 46 master faktů a 46 × 7 = 322 překladových položek.
- Aktuální stav po reworku: **61 master faktů a 61 × 7 = 427 překladových položek**.
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

- 61 master faktů, unikátní ID `fact_001` až `fact_061`.
- 7 jazyků: `cs,de,en,es,fr,it,nl`; každý obsahuje přesně 61 položek.
- Celkem 427 překladových položek; žádný prázdný překlad.
- Italský mirror odpovídá masteru u všech 61 faktů.
- Pořadí a ID překladů odpovídají pořadí a ID master faktů.
- Všech 61 italských master textů splňuje minimální délku 350 znaků.
- Všechny kategorie, mapové kategorie, typy lokací a přesnosti lokací odpovídají enumům aktuálního `schema.json`.
- Všech 61 faktů má lokaci s číselnými souřadnicemi, platným rozsahem a zdrojem.
- Všechny zdroje odkazované z `facts[].sources` a `facts[].location.source` jsou v top-level `sources[]`.
- Top-level inventář má po deduplikaci 259 unikátních URL; žádné duplicitní URL.
- Žádné chybějící povinné root pole; JSONB neobsahuje zakázaná root pole `status` ani `data_version`.
- Finální scan všech 427 překladových položek potvrdil 0 soft hyphenů, 0 zero-width znaků a 0 replacement znaků.

### Geografické poznámky

- `fact_029` Teatro Fabbricone a `fact_038` Il Fabbricone mají shodné souřadnice, protože popisují dvě různé, ale fyzicky propojené stránky téhož průmyslového komplexu. Nejde o duplicitní příběhy ani duplicitní faktové texty; je třeba rozhodnout, zda pro mapové zobrazení ponechat společný bod.
- `fact_047` je bod reprezentující archeologickou oblast, nikoli geodeticky přesný bod jedné stavby.
- `fact_059` je reprezentativní bod oblasti Macrolotto Zero, nikoli přesná hranice čtvrti.
- `fact_060` a `fact_061` mají přibližnou polohu (`approximate`), nikoli deklarovanou geodetickou přesnost.
- Strukturální přítomnost souřadnic a zdroje sama o sobě neznamená nové nezávislé geodetické ověření každého ze všech 61 bodů.

## 3. Reklama, zdroje a správní identita

- Automatický slovní scan našel dva výskyty kořene `acquista`: u `fact_021` jde o historický nákup domů řeholnicemi a u `fact_039` o historické nabytí pozemků rodinou Lucchesi. Nejde o reklamu, nabídku ani výzvu k nákupu.
- Nebyl nalezen potvrzený affiliate obsah, sponzoring, sleva, prodejní CTA ani SEO výplň.
- Z top-level inventáře byly odstraněny dvě staré položky o seznamech poštovních poboček. Uživatel výslovně určil, že informace o tom, kdo poštu obsluhuje nebo zda je pobočka zavřená, nejsou obsahem Europe Exploreru.
- Identifikační kontrola používá CAP 59100 jako městský CAP Prata; správní přiřazení je Comune di Prato, Provincia di Prato, Toscana. Poštovní provozní informace ani budoucí změny CAP nejsou součástí tohoto auditu.

## 4. Stav kontrol A–I

| Oblast | Výsledek | Poznámka |
|---|---|---|
| A — zásadní tematická úplnost | PASS | Srovnání s oficiálními turistickými a muzejními přehledy Prata potvrzuje pokrytí hlavních dominant: Duomo, Castello dell’Imperatore, Palazzo Pretorio, Museo del Tessuto, Centro Pecci, Palazzo Datini, Gonfienti, hlavní sakrální a průmyslové dědictví. Nebyla zjištěna další zásadní mezera podle auditního prahu. |
| B — CAP a správní plausibilita | PASS | CAP 59100 odpovídá městu Prato; Comune di Prato, Provincia di Prato a Toscana jsou správné správní jednotky. Kontrola se týká pouze identity a geografického přiřazení CAP. |
| C — geografické přiřazení | PASS | Přehled všech 61 faktových lokalit neodhalil cizí Comune ani zjevně nesprávné přiřazení mimo Comune di Prato. |
| D — duplicity | PASS | 0 duplicitních ID, názvů a master textů. Shodné souřadnice fact_029 a fact_038 jsou záměrné: jde o dvě odlišná fakta o propojeném komplexu Fabbricone. |
| E — kategorie a mapová klasifikace | PASS | Všechny kontrolované kategorie, priority, mapové kategorie, typy a přesnosti lokací odpovídají enumům schématu; ruční kontrola neodhalila zjevnou sémantickou záměnu. |
| F — překlady | PASS | Provedena čtenářská kontrola 61 faktů ve všech sedmi jazycích (427 položek) se srovnáním proti italskému masteru. Opraveny nalezené významové, gramatické a stylistické nedostatky; po zápisu proběhl read-back. Italský mirror odpovídá masteru 61/61. |
| G — JSON a technická konzistence | PASS (strukturální SQL kontrola) | Root klíče, povinná pole, vnořené tvary, zdrojové objekty, typy, enumy, souřadnice, ID a pořadí prošly cílenými SQL kontrolami proti aktuálnímu schématu. Nebyl spuštěn externí JSON-Schema validátor nad exportovaným celým dokumentem; jde o strukturální SQL kontrolu. |
| H — souřadnice | PASS v rozsahu auditu | 61/61 lokací je neprázdných, číselných, v platném rozsahu a má zdroj. Nebyl zjištěn konkrétní důkaz chybného pinu; neprovádělo se plošné přeměřování. |
| I — věcné vady a reklama | PASS v rozsahu auditu | Nebyla potvrzena reklama, affiliate, sponzoring, prodejní CTA ani SEO výplň. Historické nákupy jsou popsány jako historické události, nikoli jako výzvy k nákupu. |

## 5. Ochranné hranice

- `workflow_status` zůstává **`placeholder`**.
- Nebyla provedena publikace, změna na `validated`, záloha ani read-only lock.
- Nebylo změněno schéma ani lifecycle databáze.
- Opravené texty byly uloženy do Neonu; po zápisu proběhl cílený read-back.
- Obsahové a jazykové kontroly A–I jsou dokončené. Formální lifecycle stav nebyl změněn a záznam nebyl publikován.

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

- `fact_058` — **Villa del Palco**: sídlo, které si na konci 14. století nechal vybudovat Francesco Datini; roku 1439 se proměnilo ve františkánský klášter, později bylo rozšířeno, roku 1716 zde pobýval svatý Leonardo da Porto Maurizio, roku 1778 byl klášter zrušen a v roce 1956 areál získala diecéze Prato.
- `fact_059` — **Macrolotto Zero**: současný průmyslový a multikulturní městský obvod, jehož příběh spojuje textilní výrobu, migraci, občanské iniciativy a projekt PIU Prato. Mapový bod je výslovně reprezentativní pro oblast, nikoli přesnou hranicí ani jedním objektem.

### Opravy existujících faktů a mapových metadat

- `fact_001` — odstraněno chybné označení „pulpito bronzeo“. Text nyní správně identifikuje mramorový parapet venkovní kazatelny Donatella a Michelozza a uvádí, že originál je dnes v Museo dell’Opera del Duomo; venku je kopie. Opraveno v masteru a všech sedmi jazycích.
- `fact_008` — název a text přeorientovány na Muzeum deportací a odboje a deportace textilních dělníků; masakr 29 partyzánů zůstává pouze jako kontextový odkaz na samostatný památník `fact_055`.
- `fact_030` — `map_category` změněna z `museum` na `cultural_site`, protože Biblioteca Roncioniana je knihovna, nikoli muzeum.
- Odstraněny tři soft hyphens z českých překladů `fact_008`, `fact_052` a `fact_054`.
- U nových faktů byly zdroje souřadnic odděleny od obsahových zdrojů a zapsány do `facts[].location.source` i top-level inventáře.

### Opakovaná strukturální kontrola 59 faktů / 413 překladů

Read-back po druhém rozšíření potvrdil:

- 59 master faktů a 59 překladů v každém z jazyků `cs,de,en,es,fr,it,nl` — celkem 413 položek.
- 59/59 přesných italských mirrorů; žádné prázdné nebo kratší než 350 znaků.
- 0 duplicitních fact ID, názvů a textů.
- 0 neplatných hodnot `category`, `map_category`, `priority`, `location.type` a `location.accuracy` podle aktuálního `schema.json`.
- 0 chybných nebo chybějících číselných souřadnic; všech 57 lokací má zdroj.
- 0 chybějících odkazů z `facts[].sources` a `facts[].location.source` do top-level `sources[]`.
- 251 unikátních URL v top-level `sources[]`; žádné duplicitní URL.
- 0 soft hyphenů, 0 zero-width znaků a 0 replacement znaků ve všech 413 překladech.
- 2 výskyty italského kořene `acquista` zůstávají pouze v historickém významu: `fact_021` (nákup domů řeholnicemi) a `fact_039` (historické nabytí pozemků rodinou Lucchesi). Nejde o reklamu ani nákupní výzvu.
- Jediná skupina přesně shodných souřadnic zůstává `fact_029` a `fact_038`, dvě různá místa / příběhy ve fyzicky propojeném komplexu Fabbricone.

### Tematická poznámka — Macrolotto Zero

- **Macrolotto Zero** bylo doplněno jako `fact_059`. Reprezentativní bod používá středovou souřadnici v oblasti Via Umberto Giordano s přesností `area_representative`; nejde o přesnou polohu hranic čtvrti ani konkrétního projektu. Fakt popisuje průmyslový vývoj, migraci, kulturní proměnu a městskou regeneraci. Další tematické mezery města zůstávají otevřené.

## 8. Třetí tematické doplnění — Museo del Calcolatore (21.11.2026)

- fact_060 — **Il Museo del Calcolatore Laura Tellini: dalla scuola pratese alla storia dell’informatica**.
- Doplněno samostatné muzeum dějin počítání a informatiky. Projekt vznikl roku 1996 na Istituto Tecnico “Paolo Dagomari”; stálá expozice byla otevřena roku 2011. Sbírka se rozšiřovala díky záchraně starších přístrojů a darům a zahrnuje mechanické počítací pomůcky, počítače i herní konzole. Důraz je na historický vývoj výpočetních technologií a na možnost prakticky vyzkoušet řadu exponátů.
- Muzeum vstoupilo v roce 2026 do Rete Musei di Prato. Nezaměňovat stálé muzeum na Via dell’Aiale 15 s dočasnou výstavou Apple na Via Ricasoli 7 (17. 10. 2026–3. 1. 2027).
- Poloha: 43.8798389, 11.0945167, museum, approximate. Adresa je doložena oficiálním turistickým portálem a oficiální stránkou muzea; souřadnice jsou převzaty z mapového údaje u hesla muzea a záměrně nejsou označeny jako přesné.
- Obsahové zdroje: Prato Turismo; Museo del Calcolatore; Comune di Prato – vzdělávací nabídka. Zdroj polohy: mapové souřadnice hesla muzea.
- Fakt je tematicky odlišný od Museo di Scienze Planetarie (fact_009): jedno dokumentuje dějiny výpočtu a informatiky, druhé planetární vědy a meteority.

### Read-back po fact_060

- 60 master faktů.
- 60 položek v každém ze sedmi jazyků cs,de,en,es,fr,it,nl — celkem 420 překladových položek.
- fact_060 má tři obsahové zdroje; všechny tři jsou přítomny v top-level inventáři.
- Zdroj souřadnic fact_060.location.source je rovněž přítomen v top-level inventáři.
- Top-level inventář obsahuje 255 unikátních URL.
- workflow_status zůstává placeholder; bez validace a publikace.
- Plný čtenářský audit sedmi překladů a nezávislá geodetická kontrola zůstávají součástí otevřených kontrol A–I.

## 9. Čtvrté tematické doplnění — Istituto Magnolfi (21.11.2026)

- fact_061 — **Il Magnolfi: l’orfanotrofio tecnologico che formò artigiani e ferrovieri**.
- Doplněna samostatná sociálně-historická a průmyslově-vzdělávací kapitola o instituci založené Gaetanem Magnolfim v roce 1838 v bývalém karmelitánském konventu Pietà. Nešlo pouze o útulek: vzdělávání spojovalo základní výuku s praktickým výcvikem v řemeslech.
- Od roku 1845 byly v institutu díky dohodě se železniční společností Maria Antonia zřízeny dílny pro stavbu a údržbu vozů a kolejových vozidel. Archivní prameny dokládají trvání instituce do roku 1978.
- Fakt je oddělen od fact_023 Santa Maria della Pietà: ten popisuje mariánskou svatyni a její tradici, zatímco fact_061 se věnuje instituci sirotčince, odbornému vzdělávání a dílnám.
- Poloha: Via Piero Gobetti 79, 43.882992, 11.105428; typ building, přesnost approximate. Adresu podporuje inventář majetku Comune di Prato; souřadnice jsou vedeny jako přibližné.
- Obsahové zdroje: Archivio di Stato di Prato; Sistema Archivistico Toscano; Città di Prato. Zdroj souřadnic je v top-level inventáři samostatně evidován.

### Read-back po fact_061

- 61 master faktů.
- 61 položek v každém ze sedmi jazyků cs,de,en,es,fr,it,nl — celkem 427 překladových položek.
- fact_061 má tři obsahové zdroje a jeden zdroj polohy; všechny jsou přítomny v top-level inventáři.
- Top-level inventář obsahuje 259 unikátních URL.
- workflow_status zůstává placeholder; bez validace a publikace.
- Nezávislá geodetická kontrola a plný čtenářský audit překladů zůstávají otevřené.

## 10. Finální čtenářská kontrola A–I a jazykové opravy (21.11.2026)

### Jazyková kontrola všech 427 překladů
- Prošlo se všech 61 faktů v každé jazykové verzi: čeština, němčina, angličtina, španělština, francouzština, italština a nizozemština.
- Kontrola porovnávala význam s italským masterem, gramatiku, přirozenost formulací, místní názvy, historické termíny a to, zda překlad nevytváří silnější tvrzení než zdrojový text.
- Italská verze zůstává přesným jazykovým mirrorem masteru 61/61.
- Opraveny zejména:
  - `fact_006`: odstraněno nepodložené tvrzení o langobardských počátcích Prata; opraven master i všech sedm jazykových titulů.
  - `fact_017`: nepodložené označení kostela v Galcianě za románský nahrazeno neutrálním označením středověkého kostela; opraven master a všech sedm jazyků.
  - `fact_021`: nadpisy nyní zachovávají, že záchrana kláštera během plenění Prata je místní tradicí, nikoli jistě doloženou událostí; opraven master a všech sedm jazyků.
  - `fact_012`, `fact_013`, `fact_014`: upraveny české titulky pro přirozenější a přesnější formulaci.
  - `fact_020`: v češtině opravena nepřesná lokalizace zvonice; italské `area absidale` je přeloženo jako apsidální část stavby, nikoli východní část.
  - `fact_023`: opravena česká gramatická chyba „ke toskánskému“ na „k toskánskému“.
  - `fact_038`, `fact_046`, `fact_051`, `fact_059`, `fact_061`: zpřesněny české názvy a formulace, včetně překladu termínu medialibrary a historického označení „orfanotrofio tecnologico“.
  - `fact_012/nl`: opraven významový posun u původu Alessandra Lazzeriniho; nyní je správně označen jako římský prelát pratského původu.
  - `fact_017/de` a `fact_018/de`: opraveny chybné německé složené formulace pro fresky z konce 14. století.
  - `fact_057/fr`: opraven rod ve spojení `l’ancienne léproserie`.
- Zachovány jsou místní názvy, umělecká atribuce a historické nejistoty; překlady nebyly mechanicky sjednocovány na úkor jazykové přirozenosti.

### Strukturální read-back po jazykových opravách
- `workflow_status=placeholder`; 61 master faktů.
- 61 položek v každém z cs,de,en,es,fr,it,nl — celkem 427.
- ID a pořadí překladů odpovídají masteru ve všech sedmi jazycích.
- Italský mirror 61/61.
- Opravené titulky a texty byly přečteny zpět z databáze; lifecycle stav zůstal nezměněn.
- 0 prázdných překladových polí; dřívější strukturální kontrola potvrdila 0 soft hyphenů, zero-width znaků a replacement znaků.
- 259 unikátních URL v top-level inventáři; všechny faktové a lokalizační zdrojové vazby jsou přítomné.
- 0 duplicitních faktových ID, názvů a master textů.
- Všechny faktové a lokalizační enumy i souřadnice prošly strukturální kontrolou.

### Konečný výsledek A–I
A, B, C, D, E, F, G, H a I: **PASS** v uvedeném rozsahu kontrol. U G jde o strukturální SQL kontrolu proti schématu, nikoli o běh externího JSON-Schema validátoru. U H jde o kontrolu přítomnosti, rozsahu a zdrojů souřadnic, nikoli o nové nezávislé geodetické zaměření.

### Lifecycle
Záznam zůstává ve stavu `placeholder`. Tento auditní zápis sám o sobě nemění stav na `validated` ani `published`; publikace, záloha a read-only lock nebyly provedeny.
