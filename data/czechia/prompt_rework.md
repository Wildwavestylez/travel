# TRAVEL — REWORK PROMPT FOR EXISTING CZECH POSTCODE RECORDS

## Purpose
Rework existing Czech postcode records into the current Czechia production standard. This is a full research and editorial rework, not a mechanical conversion.

Use only:
1. `data/czechia/schema.json`
2. `data/czechia/CONTENT_STANDARD.md`

**Czechia is isolated from Germany. Never use German records as content sources or merge their data into Czech records.**

## Mandatory postcode authority
For every reworked record, apply the authority hierarchy in `data/czechia/CONTENT_STANDARD.md`. ČSÚ is authoritative for official postcode registration (code list 0028); the shared RÚIAN inventory is the default nationwide reference for geographic postcode-to-address-point assignment; administrative fields must be checked against the appropriate official ČSÚ/RÚIAN data. Routine retrieval of code list 0029 is not required. If a specific conflict makes the territorial or organisational nature of a postcode material, verify that classification individually from an official source; do not let it automatically change sequence membership or existing content. Do not describe ČSÚ as the geographic address-point authority. Never change a postcode merely because a search result, map, directory or changed delivery office displays a different code. Record discrepancies separately and correct only after source-specific verification.

## Shared RÚIAN reference inventory (mandatory)

Before reworking a postcode, read `data/czechia/reference/README.md` and load `data/czechia/reference/ruian_postcodes.json` from the repository's current `main` branch. Find the exact five-digit postcode and use its `address_points`, `municipalities`, `municipality_parts`, `city_districts`, `prague_districts` and `validity_dates` as the common nationwide geographic reference. Use `ruian_import_manifest.json` to identify the source feed and data refresh timestamp. The CSV is a human-readable alternative, not a separate authority.

Do not redownload or reprocess the nationwide RÚIAN archive when the committed reference files are available. Reuse the shared inventory across all records and work windows. It does not establish official ČSÚ registration, PO-box-only status, or the location of an individual attraction. Check ČSÚ code list 0028 for official registration and verify each fact's own location independently. Do not routinely search code list 0029; consult an official type/classification source only when a concrete unresolved case requires it.

If the files are unavailable, unreadable or stale, state that explicitly and follow the official fallback process in the Content Standard. Absence from the inventory is a discrepancy to investigate, not automatic proof that a postcode is invalid. Never modify the shared inventory during ordinary rework.

## Production storage — mandatory

This workflow is for Czech records only. Work exclusively with the intended Czech postcode record; German records and the German dataset are out of scope.

**Save the completed Czech JSON into the already prepared Supabase record. Do not save it as a standalone production JSON file in the GitHub repository.**

- Production table: `public.postal_codes`.
- Czech country discriminator: `country_code = 'CZ'`.
- JSON record payload: existing JSONB column `content`.
- Find the pre-created row by the exact five-digit postcode and confirm that its `country_code` is `CZ` before writing.
- Update that existing prepared row; preserve its row identity and unrelated metadata.
- Do not create duplicate rows or new tables. Create a row only if the user explicitly requests it and the approved workflow permits it.
- If the target row is missing, ambiguous, or does not have `country_code = 'CZ'`, stop and report the issue instead of guessing.
- Never read-modify-write or otherwise alter rows where `country_code = 'DE'`. Never change a row's country identifier.
- Do not change database structure, RLS, application code, or the Czech schema during ordinary rework.
- Validate the complete JSON against `data/czechia/schema.json` before saving.
- After saving, read the same row back and verify the postcode, `country_code`, and stored `content`.

The repository holds the Czech rules, schema and shared reference inventory. Supabase is the production storage for prepared Czech postcode JSON records.

## Workflow
**READ → RESEARCH → LOCAL SIGNIFICANCE CHECK → DEFINE STORIES → GEOGRAPHIC CHECK → AUDIT → REMOVE/KEEP/ADD → TRANSLATE → VALIDATE → SAVE → NEXT**

Treat the existing record as working material, not as truth.

## Re-research
For each Czech postcode:
- identify the post office that serves the postcode and verify the municipality in which that post office physically stands;
- set `city` to exactly that one post-office municipality; never list all municipalities, villages or settlements covered by the postal district in administrative fields;
- set `county` and `state` from the official administrative affiliation of that post-office municipality, not from the location of another settlement in the postal district;
- set `district` only to a documented local part/quarter within the post-office municipality when relevant; otherwise use `null`;
- keep the research and fact scope across the entire geographic area served by the postcode, including all municipalities, villages and settlements in that postal district; this administrative naming rule does not narrow the content scope;
- verify representative and access coordinates;
- research defining historical, cultural, industrial, natural and local stories across the full postcode/postal-district area;
- check important people, companies, products, transport, military history, archaeology and hidden gems where relevant;
- check meaningful surroundings without duplicating facts assigned to another postcode.

## Geographic truth
A city-wide or regional association is insufficient. Every important fact must have a concrete connection to the specific postcode area. Remove facts that only belong to another part of the municipality.

## Editorial rework
Keep verified strong facts. Remove generic, duplicated, weak or unsupported facts. Add missing defining stories. Do not preserve the old fact count as a quota.

## Translations
Final records must contain cs, de, en, es, fr, it and nl with identical sequential fact IDs and semantically complete natural translations. Dutch uses standard Netherlands Dutch (`nl-NL`), phrased naturally and clearly for readers in both the Netherlands and Flanders.

## Validation
Before saving verify schema, administrative data, coordinates, facts, sources, fact IDs and all seven languages.

## Database safety
Modify only intended Czech records. Never delete unrelated records, alter German records, change RLS, change application code, expose credentials or change the Czech schema during normal rework.

## Completion
A record is complete only after research, geographic audit, content audit, translation and schema validation all pass.


## Official-source fallback (mandatory)
A missing, empty, inaccessible or incomplete local reference file must not repeatedly block Czech rework. First try the local JSON/CSV/manifest and an alternative supported endpoint (including the official raw file endpoint where applicable). If the needed field is still unavailable, verify it directly online using the official authority responsible for that field:
- ČSÚ for statistical postcode registers, code lists and classifications;
- RÚIAN/ČÚZK for territorial, address-point and administrative geography;
- Česká pošta official sources for postal-service information within its remit.

Do not treat these sources or code lists as interchangeable. In particular, postcode existence/territorial designation, postcode type, RÚIAN address geography and delivery-post-office records are separate checks. Use each source only for claims it actually supports.

For every externally verified value, record the exact official source URL and the date checked. Keep source validity/reference dates separate from the check date. A fallback CSV can support only fields it actually contains. Never infer missing `validity_dates`, a postcode type, or any other missing field from a neighboring postcode or unrelated list. If official online verification also fails, mark only that field as unverified/pending, state what is missing, leave it unset as permitted by the schema, and continue the remaining safe work. Carry the blocker and its last-known status into the next work window so the same failed attempts are not repeated without reason.
---
## Povinný dodatek — rozšířená turistická rešerše a dvoufázový postup

Tento dodatek používej společně s úplným aktuálním českým Content Standardem. Doplňuje stávající workflow; nenahrazuje pravidla schématu, územní správnosti, redakčního výběru, zdrojů, ukládání, zachování dat ani překladů.

U každého PSČ při běžném obsahovém reworku:

1. Zachovej stávající geografický postup. Ověř území PSČ a primární polohu kandidátů podle českého Content Standardu. Širší oblast slouží k objevování a kontextu, nikoli k přiřazování atrakce z jiného PSČ.
2. **Fáze 1 — široké objevování:** hledej podle PSČ, obcí, částí obcí a místních či historických názvů v oficiálních turistických portálech, památkových registrech, muzeích, obecních a regionálních zdrojích, institucích ochrany přírody, odborných institucích a vlastivědných zdrojích. Neomezuj se na starý záznam ani první obecné výsledky.
3. **Fáze 2 — tematický audit:** použij kapitolu 28.2 českého Content Standardu jako kontrolní seznam. Cíleně prověř všechny relevantní skupiny, zejména muzea a specializované sbírky, architekturu, sakrální dědictví, pomníky, archeologii, chráněnou přírodu, geologii, vyhlídky, zahrady, zoo/akvária, jeskyně a podzemí, technické a dopravní dědictví, paměťová místa, turistické atrakce, UNESCO, místní příběhy a pověsti, historické události, osobnosti, film/literaturu/hudbu, tradice, řemesla a gastronomické dědictví.
4. Dodrž vyloučení v kapitole 28.3: běžné hřbitovy, hroby a současné firmy nejsou běžnými turistickými fakty; platí pouze úzce vymezené výjimky pro doloženou mimořádnou památkovou či návštěvnickou hodnotu.
5. Ověř identitu, význam, fakta, přesnou primární polohu, příslušnost k PSČ, zdrojovou oporu a duplicity každého vybraného kandidáta. Příslušnost k PSČ neodvozuj pouze z města, okresu ani blízkosti.
6. V pracovních poznámkách eviduj u každé skupiny stav: nalezeno a ověřeno; prověřeno bez relevantního výsledku; nebo nevyřešeno. Tyto stavy nevkládej do JSON. Relevantní nevyřešená skupina nebo podstatná nejasnost polohy brání dokončení.
7. Teprve potom vybírej a piš fakta podle stávajících pravidel významu, priority, absence kvót, zdrojů, mapových kategorií, polohy, překladů a validace. Turistická témata nemají automatickou prioritu.

Dvoufázová metoda je povinná při běžném obsahovém reworku. Neopravňuje k úpravám chráněných záznamů během čistě geografického obohacování; stávající pravidla zachování obsahu zůstávají závazná. Pokud je úkol výslovně omezen na geografické obohacení, neprováděj redakční rešerši a neměň chráněné texty.

Tento dodatek mění pouze stručný pokyn k jednorázové rešerši tím, že zavádí dvě povinné fáze. Všechna ostatní stávající pravidla zůstávají v platnosti.
## Povinný dodatek — mezinárodní srozumitelnost a kulturní kontext

Toto pravidlo je závazné pro každý nově napsaný nebo podstatně přepracovaný fakt a pro každou jeho jazykovou verzi. Platí společně s úplným českým Content Standardem a nemění schéma.

Piš pro zahraničního čtenáře, který Českou republiku nemusel nikdy navštívit a nemusí znát její historii, kulturu, instituce, tradice ani místní pojmy. Správný překlad sám o sobě nestačí: překládej význam a potřebný kontext, nejen jednotlivá slova.

- Při prvním smysluplném výskytu vysvětli neznámé kulturní, historické, institucionální, politické, náboženské, společenské a správní pojmy.
- Zachovej správné vlastní názvy, ale stručně vysvětli, co označují a proč jsou důležité, pokud to zahraničnímu čtenáři není zřejmé.
- Vysvětli české instituce, hnutí, zvyky, pamětní formy, historické události a specifické pojmy, pokud by bez toho čtenář z jiné země nepochopil jejich význam.
- U historických událostí doplň stručný kontext toho, co se stalo, kdy nebo proč je událost důležitá, pokud je to pro pochopení potřeba.
- Nenechávej bez vysvětlení zkratky, místní správní označení, nářeční výrazy ani kulturně specifické odkazy, které jsou podstatné pro pochopení.
- Požadavek uplatni samostatně v cs, de, en, es, fr, it a nl. Nepředpokládej, že vysvětlení v jednom jazyce automaticky zpřístupní význam ostatním čtenářům.
- Vysvětlení přirozeně a úsporně začleň do textu. Nedělej z každého faktu encyklopedické heslo a nepřidávej kontext, který čtenáři nepomáhá.
- Nevymýšlej historické pozadí, interpretace ani význam. Kontext musí být podložen důvěryhodnými zdroji.

Příklad: nestačí napsat, že Stolpersteine připomínají oběti nacismu. Vysvětli, že jde o malé mosazné pamětní destičky zasazené do chodníku, obvykle před posledním svobodně zvoleným bydlištěm lidí pronásledovaných nebo zavražděných nacistickým režimem, přičemž každá destička připomíná konkrétního člověka.

Před uložením proveď čtenářský test v každém jazyce: pochopí člověk bez předchozí znalosti země, o jaký objekt či téma jde, co znamená neznámý pojem, jaký kontext potřebuje a proč je fakt významný? Pokud ne, uprav příslušnou jazykovou verzi.

Jde o běžnou součást psaní a překladu, nikoli o volitelnou dodatečnou redakční fázi. Základní validace musí potvrdit, že tímto testem prošlo všech sedm jazykových verzí.


## Povinný dodatek — ochrana geografického PSČ před záměnou s poštovní adresou instituce

Při každém reworku bez výjimky dodrž oddíl 3.5 českého Content Standardu. PSČ uvedené na webu památky, synagogy, muzea, firmy, úřadu nebo jiné instituce není samo o sobě důkazem geografického PSČ její fyzické polohy. Může jít o korespondenční adresu, P.O. BOX, poštovní přihrádku, podatelnu, organizační PSČ nebo údaj poštovní pobočky.

- Nejdříve ověř skutečnou fyzickou polohu objektu a jeho adresní místo v RÚIAN; geografické přiřazení faktu odvozuj od tohoto ověření, nikoli automaticky od PSČ uvedeného na webu instituce.
- Rozlišuj fyzickou/návštěvnickou adresu od korespondenční, fakturační, sídelní adresy organizace a P.O. BOX. Pokud účel adresy není jasný, údaj nepovažuj za rozhodující.
- Existence pošty, přepážek, příjmu a výdeje zásilek, dalších poštovních služeb nebo P.O. BOX pro velké zákazníky nedokazuje, že okolní objekty geograficky patří do PSČ této pošty.
- Aktuální sequence.json je závazný rozsah kandidátních PSČ. PSČ nalezené mimo sequence je pouze podnět k prověření; nikdy je automaticky nepřidávej a kvůli němu nepřesouvej fakta, nerozděluj záznamy ani nepřepisuj existující obsah.
- Pokud web instituce uvádí jiné PSČ než RÚIAN pro její skutečné adresní místo, nejprve prověř účel webového údaje. Zachovej geografické přiřazení podložené RÚIAN; nevyřešený rozpor zaznamenej a změnu zastav.
- Nevyvozuj závěr o celé městské oblasti z jedné pošty nebo jedné instituce. Stejný postup používej v Praze, Brně, Ostravě, Plzni i všech ostatních městech.
- Změna sequence.json je samostatný zásah, který vyžaduje doložený oficiální geografický důvod a výslovné schválení. Běžný rework sequence nemění.

Před jakoukoli změnou sporného PSČ ověř: skutečnou fyzickou polohu; konkrétní adresní místo v RÚIAN; účel PSČ uvedeného institucí; zda nejde o poštovní/korespondenční údaj; a soulad s aktuální sequence. Pokud něco z toho chybí, PSČ ani sequence neměň, rozpor zaznamenej a pokračuj jen v bezpečné části práce.

**Nikdy nerozbourej existující geografické přiřazení ani obsah na základě jediného PSČ nalezeného na webu instituce.**


## Povinná mapová klasifikace faktů

Před dokončením každého faktu přiřaď právě jednu `map_category` podle oddílu 11A v `data/czechia/CONTENT_STANDARD.md`. Povolené hodnoty a jejich význam jsou závazně definovány v `data/czechia/schema.json`. Používej všech 17 sdílených identifikátorů přesně; nevytvářej vlastní hodnoty ani nepoužívej obsahovou `category` jako náhradu mapové kategorie.

Rozhoduj podle hlavního tématu faktu, nikoli pouze podle fyzického objektu nebo souřadnic pinu. U osobnostního faktu použij `personality`, pokud je konkrétní osoba hlavním tématem. Při překryvu uplatni pravidla přednosti a hraniční případy zdůvodni v pracovních poznámkách. Mapová kategorie se neukládá do překladů a nepřekládá se. Neodvozuj ji z `location.type`; mapová klasifikace a fyzická poloha jsou nezávislé údaje.

Při geografickém obohacení existujícího chráněného záznamu zachovej veškerý existující redakční obsah; doplň nebo oprav `map_category` pouze v rozsahu povoleném příslušným zadáním a pravidly zachování dat. Před uložením ověř, že každý fakt má právě jednu povolenou hodnotu.

## Závazná synchronizace sequence a groups

Pole `sequence` v `data/czechia/sequence.json` je kanonický úplný seznam všech PSČ zahrnutých do projektu. Pole `groups` je jeho členění a musí obsahovat každé PSČ z `sequence` právě jednou. Před každým pracovním blokem porovnej oba seznamy: počet, unikátnost i přesnou množinu kódů. Jejich počty a množiny se musí shodovat. Pokud se liší, zastav výběr bloku a nahlas nesoulad; nepracuj pouze podle jedné části souboru a nic automaticky nemaž.

PSČ s vlastním doručovacím obvodem, která jsou výslovně uvedena v `sequence`, patří do rozsahu projektu stejně jako ostatní položky, i když jejich území není rozepsáno v `localities` nebo nejsou součástí běžné číselné řady. Prázdné `localities` znamená pouze to, že seznam lokalit není v tomto souboru specifikován; neznamená to, že PSČ nemá vlastní územní/doručovací rozsah. Při reworku musí být skutečný rozsah ověřen samostatně podle Content Standardu. Nevymýšlej lokality ani nepřebírej území sousedního PSČ.


## NEPŘEKROČITELNÉ PRAVIDLO STAVŮ A UKLÁDÁNÍ — HOTOVÁ PRÁCE NIKDY DO DRAFT

Toto pravidlo je závazné pro každé české PSČ a má přednost před jakoukoli nejednoznačnou formulací v tomto promptu nebo neformálním pracovním postupu.

**Hotový rework PSČ se MUSÍ uložit přímo se stavem `status = 'validated'`. Hotový finální audit se MUSÍ uložit přímo se stavem `status = 'published'`. Hotový záznam se NIKDY nesmí ponechat ve stavu `draft` ani do něj přesunout.**

- **Dokončený rework → ihned `validated`.** Jakmile je obsah PSČ dokončen, zapsán do existujícího řádku Supabase a prošel příslušnou validací reworku, ulož/zachovej záznam jako `validated`.
- **Dokončený finální audit → ihned `published`.** Jakmile je finální audit daného záznamu nebo příslušné sekce dokončen a úspěšně prošel, ulož/zachovej auditovaný záznam jako `published`.
- **`draft` není odkladiště, mezistanice, záložní stav ani místo pro hotovou práci čekající na pozdější kontrolu.** Hotový obsah PSČ do `draft` nikdy neukládej, ani když chybí pole, fakt, překlad, souřadnice, zdroj, metadata nebo jiný požadavek.
- Chybějící nebo nevyřešená informace sama o sobě **není důvodem** změnit cílový stav na `draft`. Dokonči vše, co lze odpovědně ověřit; skutečně nedostupné volitelné či nullable údaje reprezentuj přesně podle schématu a podstatné nevyřešené problémy výslovně zaznamenej/nahlas. Nikdy si informace nevymýšlej.
- Pokud povinná podmínka skutečně brání dokončení nebo validaci, nesmíš nepravdivě tvrdit, že je rework či audit hotový. Uveď konkrétní blokátor a ponech záznam v jeho stávajícím nedokončeném stavu; nepřesouvej jej do `draft` jako náhradní řešení. Pokud je to možné, pokračuj dalšími PSČ.
- Při běžném reworku, překladu, obohacení ani auditu nikdy nesnižuj již dokončený záznam ze stavu `validated` nebo `published` do `draft`.
- Po každém zápisu ověř skutečný uložený stav v databázi. Samotný úspěšný zápis obsahu bez potvrzení požadovaného stavu neznamená dokončení operace.

**Povinný životní cyklus: rozpracovaná práce zůstává ve svém stávajícím pracovním stavu → hotový rework = `validated` → dokončený a úspěšný finální audit = `published`. Pro hotovou práci neexistuje cesta do `draft`.**

Toto pravidlo platí pro veškerý český rework a audit. Jde o provozní požadavek, nikoli o povolení měnit databázové schéma, RLS nebo aplikační logiku.
