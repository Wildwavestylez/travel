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

## Provozní efektivita, limity API a bezpečné pokračování (POVINNÉ)

Tato pravidla platí pro celý rework a mají přednost před opakováním již provedených kroků. Jejich cílem je snížit počet externích požadavků a zabránit chybám typu `429 Too Many Requests`, aniž by se snižovala požadovaná kvalita.

1. **Jednorázové načtení společných podkladů:** Na začátku pracovní relace načti aktuální schema, Content Standard, relevantní promptové dodatky, sequence a společné RÚIAN reference. Zaznamenej jejich verzi/commit nebo kontrolní identifikátor. Pro další PSČ ve stejné relaci je znovu nenačítej, pokud se jejich verze nezměnila, soubor nebyl neúplný nebo se neobjevil konkrétní rozpor. RÚIAN inventář načti jednou a opakovaně v něm vyhledávej lokálně; nestahuj ani neparsuj celý soubor pro každé PSČ.
2. **Cílená rešerše místo opakovaných širokých dotazů:** Nejprve sestav stručný seznam kandidátů a otevřených otázek. Podobné dotazy sluč do jednoho dávkového vyhledávání, pokud to nástroj podporuje. Stejný dotaz ani stejnou URL znovu nevolej, pokud už výsledek máme a neexistuje důvodné podezření na změnu nebo neúplnost. U každého kandidáta dohledávej pouze chybějící důkaz; nezačínej znovu celou rešerši.
3. **Důkazy a tematické pokrytí:** Počet požadavků není cílem. Nevynechávej povinný důkaz jen kvůli úspoře volání. Jakmile je kandidát spolehlivě ověřen kompetentním zdrojem a jeho poloha/PSČ je doloženo příslušným autoritativním zdrojem, další redundantní hledání ukonči. Nevyřešenou otázku označ přesně a pokračuj bezpečnou částí práce.
4. **Omez souběh:** Nespouštěj velké množství požadavků paralelně. Standardně prováděj nejvýše 2 externí požadavky současně; databázové zápisy prováděj sekvenčně. Pokud nástroj nabízí dávkové čtení více položek, použij je místo mnoha jednotlivých čtení.
5. **Povinné zpracování 429 / Too Many Requests:** Při HTTP 429 nebo ekvivalentní chybě okamžitě zastav další požadavky vůči dané službě. Pokud odpověď obsahuje `Retry-After`, dodrž jej. Jinak použij exponenciální prodlevu přibližně 2, 4, 8, 16 a 32 sekund; mezi pokusy nepokračuj v paralelním volání stejné služby. Po nejvýše 5 neúspěšných pokusech daný zdroj dočasně označ jako `RATE LIMITED`, ulož poslední stav a pokračuj pouze kroky, které na něm nezávisí. Neopakuj bezprostředně totožný požadavek.
6. **Bezpečný checkpoint:** Před čekáním, přerušením nebo předáním ulož PSČ, dokončené kroky, použité zdroje, již získané důkazy, otevřené otázky, poslední chybu/čas a přesný další krok. Po obnovení pokračuj od prvního nedokončeného kroku; neopakuj hotové rešerše ani validace.
7. **Lokální validace:** JSON, schéma, ID, strukturu, překlady a konzistenci kontroluj lokálně nad již načtenými daty, kdykoli to nástroje umožňují. Nevolej externí službu pro kontrolu, kterou lze spolehlivě provést lokálně. Po změně textu kontroluj dotčený fakt a jeho jazykové verze; úplnou validaci záznamu proveď před uložením, ne po každé dílčí editaci.
8. **Databáze:** Načti pouze cílový český řádek. Před zápisem ověř jeho identitu a ochranná pravidla. Proveď jeden cílený zápis a jedno následné načtení pro ověření; neopakuj čtení celé tabulky. Při chybě zápisu nejprve ověř, zda se změna přesto neuložila, a teprve potom rozhodni o opakování. Nikdy neposílej opakovaný UPDATE naslepo.
9. **Žádné falešné dokončení:** Rate limit, nedostupný zdroj ani timeout neznamená úspěšné ověření. Označ pouze dotčený bod jako čekající/nedoložený; ostatní nezávislé části dokonči.

**Provozní pravidlo:** načti jednou → hledej cíleně → ukládej důkazy → validuj lokálně → zapisuj jednou → ověř jedním read-backem → pokračuj.

## Ochrana Supabase I/O a databázové zátěže — POVINNÉ

Tato pravidla platí pro každou práci s produkční databází, nejen pro audit. Cílem je omezit fyzické čtení/zápis, zbytečné PostgREST požadavky a opakované načítání, nikoli omezit kvalitu obsahu nebo povinné ověřování.

1. **Přesný rozsah každého dotazu:** při práci s českým PSČ vždy filtruj současně `country_code = 'CZ'` a přesný seznam požadovaných `postal_code`. Nikdy nenačítej všechny země, všechna PSČ ani celý status/data_version jen proto, abys následně filtroval výsledek v paměti.
2. **Žádné plošné čtení:** nepoužívej full-table scan, globální `COUNT(*)`, seskupování celé tabulky, neomezené stránkování ani `SELECT *` bez přesného omezení rozsahu. Nečti sloupce, které daný krok nepotřebuje. JSONB `content` načítej pouze pro konkrétní vybrané záznamy, které se skutečně zpracovávají.
3. **Mapové body až podle vybraných ID:** záznamy `explorer_map_points` načítej pouze pro `postal_id` cílových záznamů. Nikdy nenačítej celou tabulku mapových bodů a nefiltruj ji až v aplikaci. Respektuj složený primární klíč `(postal_id, fact_id)`; stránkování nesmí předpokládat, že samotné `postal_id` jednoznačně určuje řádek.
4. **Jedno načtení, lokální práce:** jednou načtený záznam nebo dávku používej pro všechny nezávislé kontroly daného běhu. JSON, schéma, překlady, ID, počty a vnitřní konzistenci kontroluj lokálně. Neopakuj stejný SELECT kvůli další kontrolní oblasti, pokud se data mezitím nezměnila.
5. **Čtení po zápisu jen v nezbytném rozsahu:** po zápisu načti zpět pouze změněný cílový řádek nebo změněné mapové body. Neprováděj následnou inventuru celé tabulky. Před opakováním zápisu po timeoutu nejprve ověř stav konkrétní položky; nikdy neopakuj UPDATE naslepo.
6. **Omez zbytečné požadavky:** nespoléhej na opakované refreshování stejného datasetu, opakované přesné počty, zbytečné `HEAD`/count požadavky, paralelní dotazy ani polling bez skutečné potřeby. Použij dávkové načtení, pokud je bezpečné a podporované. Výsledky sdílených referencí a již načtených dat znovu používej v rámci pracovní relace.
7. **Edge Functions a exporty:** funkce musí mít předem omezený rozsah a stránkovat pouze vybrané řádky. Žádný export celé tabulky, všech mapových bodů ani všech zemí při práci s jedním blokem. Preview nesmí skrytě provádět širší čtení než vlastní cílená operace. Zálohu nebo export nespouštěj během běžného reworku/auditu; pouze na výslovný pokyn a s přesným rozsahem.
8. **SQL pouze podle ověřeného schématu:** nevymýšlej názvy tabulek, sloupců, indexů, operátorů ani vztahů. Před dotazem ověř potřebné schéma z již dostupné dokumentace nebo cíleného popisu. Pokud bezpečný filtr nelze sestavit, dotaz nespouštěj a oznam překážku.
9. **Indexy a RLS neměň naslepo:** nepřidávej ani nemaž indexy a neupravuj RLS/politiky jen na základě obecného doporučení nebo jednoho upozornění. Nejprve ověř skutečný plán a vzorec používání dotazů, dopad na bezpečnost a přínos změny; změnu schématu, indexů či oprávnění prováděj pouze v samostatně schváleném optimalizačním kroku.
10. **Žádné automatické databázové porovnávání:** Supabase a Neon ani jiné databáze mezi sebou automaticky neporovnávej. Takové porovnání proveď pouze tehdy, když si je uživatel výslovně vyžádá.
11. **Sekvenčně a bez retry bouří:** databázové zápisy prováděj sekvenčně. Při timeoutu, 429 nebo 5xx zastav opakované požadavky, respektuj `Retry-After` a nejprve ověř, zda předchozí operace již neproběhla. Nespouštěj paralelní opakování stejného dotazu.

**Zásada:** přesně vybrat → jednou načíst → zpracovat lokálně → zapsat pouze změnu → ověřit pouze změněnou položku. Pokud nástroj neumí dodržet přesný rozsah, zastav se; nikdy nenahrazuj bezpečný dotaz plošným čtením.

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

## Geographic truth — postcode is an organizational aid, not a content boundary
Postcodes are used to organize and index TRAVEL facts. They do not restrict the real-world extent of a landmark or story. Every fact receives exactly one primary postcode assignment, but a bridge, park, large complex, trail, linear structure or other feature may extend across several postcode areas.

For a feature spanning more than one postcode, choose the single most plausible assignment using its principal/representative location, main section, primary entrance, verified address or strongest local association. Do not force the whole feature to fit inside one postcode boundary. Continue to verify concrete addresses and address points through RÚIAN/ČÚZK as required by the Czech Content Standard; RÚIAN verifies address-level postcode and territorial relationships, while the editorial assignment of a large or linear feature is made using the best-supported representative association.

Once an assignment has been reasonably supported and closed, treat it as stable and locked. Do not move or re-audit it merely because the feature also touches another postcode. Reopen it only if concrete new evidence demonstrates that the original assignment was wrong. Do not duplicate the same attraction or continuous story across postcode records.

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

1. Zachovej ověřování PSČ a adresních míst podle českého Content Standardu včetně RÚIAN. PSČ jsou však organizační pomůcka, nikoli nepřekročitelná hranice turistického příběhu. U mostu, parku, rozsáhlého areálu, stezky nebo jiné lokality přesahující více PSČ vyber jedno nejpravděpodobnější PSČ podle reprezentativního místa, hlavní části, vstupu, ověřené adresy či nejsilnější místní vazby.
2. **Fáze 1 — široké objevování:** hledej podle PSČ, obcí, částí obcí a místních či historických názvů v oficiálních turistických portálech, památkových registrech, muzeích, obecních a regionálních zdrojích, institucích ochrany přírody, odborných institucích a vlastivědných zdrojích. Neomezuj se na starý záznam ani první obecné výsledky.
3. **Fáze 2 — tematický audit:** použij kapitolu 28.2 českého Content Standardu jako kontrolní seznam. Cíleně prověř všechny relevantní skupiny, zejména muzea a specializované sbírky, architekturu, sakrální dědictví, pomníky, archeologii, chráněnou přírodu, geologii, vyhlídky, zahrady, zoo/akvária, jeskyně a podzemí, technické a dopravní dědictví, paměťová místa, turistické atrakce, UNESCO, místní příběhy a pověsti, historické události, osobnosti, film/literaturu/hudbu, tradice, řemesla a gastronomické dědictví.
4. Dodrž vyloučení v kapitole 28.3: běžné hřbitovy, hroby a současné firmy nejsou běžnými turistickými fakty; platí pouze úzce vymezené výjimky pro doloženou mimořádnou památkovou či návštěvnickou hodnotu.
5. Ověř identitu, význam, fakta, polohu, zdrojovou oporu a duplicity každého vybraného kandidáta. U konkrétních adres ověř PSČ přes RÚIAN. U rozsáhlých nebo liniových objektů dolož nejpravděpodobnější reprezentativní přiřazení; nevyžaduj, aby celý objekt ležel v hranicích jednoho PSČ.
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

### Zvláštní pravidlo — jazyk, nářečí, folklor a místní tradice

U faktů o regionální kultuře nestačí pojmenovat tradici nebo doslovně přeložit její název. Vysvětli zahraničnímu čtenáři, co konkrétně označuje, jak vypadá nebo zní, jak se praktikuje a jakou má místní funkci či význam — vždy jen v rozsahu doloženém zdroji.

- **Jazyk a nářečí:** uveď, ke kterému jazyku či jazykové skupině nářečí patří, kde se používá, čím se doložitelně vyznačuje (např. výslovností, slovní zásobou nebo gramatickými rysy) a jak souvisí s místní identitou. Rozlišuj jazyk, nářečí, místní mluvu a historickou jazykovou situaci; nikdy nevydávej nářečí za samostatný jazyk bez odborného podkladu. Uveď konkrétní příklady jen tehdy, jsou-li doložené.
- **Hudba a nástroje:** neznámý nástroj nejen pojmenuj, ale stručně popiš jeho konstrukci, způsob hry a roli v místní muzice. Vysvětli také místní hudební obsazení, zpěv nebo taneční doprovod, pokud jsou pro příběh podstatné.
- **Kroje a oděv:** vysvětli, že jde o tradiční regionální oděv, popiš jeho rozpoznávací prvky, místní varianty, kdo a při jakých příležitostech jej nosil či nosí. Nezaměňuj různé obce nebo národopisné oblasti do jednoho obecného „lidového kroje“.
- **Tance, slavnosti a obřady:** popiš, co se při nich skutečně děje, kdy a proč se konají, kdo se účastní a jaký mají společenský, kalendářní či náboženský význam. Vysvětli místní názvy, masky, průvody a rituální úkony.
- **Řemesla, jídlo a každodenní kultura:** vysvětli, co se vyrábí nebo připravuje, jakou technikou či z jakých typických surovin, k čemu předmět nebo pokrm sloužil a proč je pro danou obec či oblast charakteristický.
- **Místní rozdíly:** pokud se tradice liší mezi obcemi nebo částmi regionu, zachovej tyto rozdíly. Nepřisuzuj zvyk celé oblasti, pokud je doložen pouze v jedné obci.
- **Kulturní ekvivalenty:** nepoužívej automaticky podobný pojem z cílové kultury (např. jiný typ dud, tance, kroje nebo slavnosti), pokud nejde o skutečný ekvivalent. Původní název zachovej a jeho význam vysvětli.
- **Samostatná srozumitelnost:** vysvětlení musí být obsaženo v každé jazykové verzi, která je potřebuje. Nepředpokládej, že čtenář německé, anglické, španělské, francouzské, italské či nizozemské verze zná české reálie nebo že si chybějící kontext dohledá jinde.

Vysvětlení má čtenáři umožnit představit si, co uvidí, uslyší nebo zažije. Zachovej přitom čtivost a přiměřenou délku; nepřidávej obecný folklorní výklad, který nesouvisí s konkrétním faktem.

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

---

## Závazné doplnění: geografické umístění faktů na mapě

Toto pravidlo upřesňuje a nahrazuje všechna starší ustanovení tohoto dokumentu, která by vedla k použití `location: null` pouze kvůli chybějící přesné souřadnici.

**Cíl: každé smysluplně lokalizovatelné faktum musí dostat použitelný mapový bod.** Nevyžadujeme geodetickou přesnost ani souřadnice přesně na centimetr. Přibližný, ale geograficky smysluplný bod je lepší než prázdná poloha a skrytý pin. `location: null` je až poslední možnost, nikoli běžná reakce na chybějící přesnou polohu.

Použij následující hierarchii:

1. **Konkrétní objekt nebo místo:** umísti pin na skutečnou polohu objektu (budova, památník, muzeum, most, nádraží apod.).
2. **Rozlehlá lokalita:** zvol reprezentativní bod uvnitř skutečného území lokality. U parku, lesa, areálu, přírodní rezervace, jezera nebo rozsáhlého komplexu nemusí být bod na jediné přesně určené atrakci; může ležet například na cestě, u vstupu, u vyhlídky nebo na jiném vhodném místě uvnitř území. Důležité je, aby pin ležel v lokalitě a rozumně ji zastupoval.
3. **Historický objekt nebo událost s neznámou přesnou polohou:** použij doloženou přibližnou polohu, pokud ji lze určit. Pokud ne, umísti orientační pin do centra historické obce nebo její veřejné orientační místo: náves, náměstí, radnici, obecní/městský úřad, případně informační centrum nebo jiný zásadní veřejný bod. Takový pin označ jako přibližný/historicky přibližný podle skutečné povahy nejistoty; nesmí předstírat, že historický objekt či událost stály přesně na tomto bodě.
4. **Historie obce nebo městské části:** použij její náves, hlavní náměstí, radnici, úřad městské části nebo jiné jasné veřejné centrum, které čtenáři pomůže místo na mapě najít.
5. **Doprava a infrastruktura:** použij příslušné nádraží, zastávku, terminál, dopravní uzel nebo konkrétní infrastrukturní bod, ke kterému se informace tematicky vztahuje.
6. **Další místní téma bez jediného bodu:** vyber nejvhodnější veřejný orientační bod v místě, se kterým je příběh skutečně spojen. Pokud je fakt o oblasti PSČ jako celku, lze použít `representative_point` podle pravidel pro `postal_area`.

### Přesnost, typ a zdroj

- Zvol `accuracy` podle skutečné přesnosti: `exact` jen pro ověřenou polohu konkrétního objektu; `approximate` pro přibližný bod; `area_representative` pro reprezentativní bod rozlehlé lokality; `historical_approximate` pro nejistou historickou polohu. Používej pouze hodnoty povolené aktuálním schématem.
- `name` má popisovat skutečný bod, na kterém pin leží (například název náměstí, radnice, zastávky nebo reprezentativního místa), nikoli předstírat přesné umístění samotného faktu.
- `type` vybírej podle skutečného fyzického typu zvoleného bodu a podle povoleného českého slovníku `location_types.json`/schématu.
- `source` musí podporovat polohu použitého bodu nebo umožnit její nezávislé ověření. U orientačního bodu stačí doložit existenci a polohu tohoto bodu; zdroj nemusí dokazovat, že se historická událost odehrála přesně tam. Obsahové zdroje nadále samostatně dokládají samotný příběh.
- Přibližný pin je orientační pomůcka pro mapu. Text faktu nesmí tvrdit, že se událost nebo objekt nacházely přesně v bodě, který byl zvolen pouze jako orientační náhrada.
- Nekopíruj automaticky `representative_point` ani `access_point`; použij je jen tehdy, když skutečně odpovídají zvolenému pravidlu pro daný fakt.
- Pokud lze určit alespoň smysluplnou oblast nebo veřejný orientační bod, `location` nesmí být `null` jen kvůli chybějící přesné poloze. `null` použij pouze tehdy, když nelze odpovědně určit ani konkrétní, přibližný, reprezentativní či orientační bod.

**Při tvorbě i reworku aktivně hledej použitelný bod pro mapu. Při auditu považuj `null` za nález, který je nutné zkusit vyřešit touto hierarchií; ponech jej pouze po doložení, proč není možné určit žádný smysluplný bod.**

---

## Závazné redakční pravidlo — legendy, kroniky a přiměřená přesnost letopočtů

Toto pravidlo platí pro výběr, psaní, přepracování i překlady všech historických a místních příběhů.

### 1. Legenda se vypráví jako legenda — ne jako doložený fakt ani jako omluva

- Pokud příběh pochází z pověsti, legendy, ústní tradice nebo literárního podání a jeho historická pravdivost není doložena, **neprezentuj jej jako ověřenou historickou událost**. Přesto jej můžeš a máš vyprávět poutavě, pokud je pro místo kulturně či turisticky významný.
- Původ příběhu označ přirozeně a stručně přímo ve vyprávění: „Podle staré pověsti…“, „Legenda vypráví…“, „Podle Kosmovy kroniky…“, „Staré české pověsti vyprávějí…“ nebo odpovídajícím místním a jazykovým ekvivalentem.
- Pokud odkazuješ na konkrétní kroniku, autora, sbírku pověstí nebo tradici, pojmenuj ji přesně, pokud to zdroje umožňují. Kronikářské podání samo o sobě automaticky nedokazuje, že se popisovaná událost skutečně stala.
- Po jasném označení původu příběh vyprávěj plynule a sebevědomě jako obsah dané tradice. Nezahlcuj text opakovanými výrazy „údajně“, „možná“, „pravděpodobně“, „nelze vyloučit“ ani dlouhými upozorněními, že příběh nemusí být pravdivý.
- Nevkládej do textu zbytečné akademické omluvy typu „historici si nejsou jisti, zda se to opravdu stalo“, pokud tato informace není pro pochopení příběhu zásadní.
- Nevymýšlej detaily legendy ani nepřipisuj příběh konkrétnímu prameni, který jej neobsahuje. Obsahové zdroje musí doložit existenci a podobu tradice/pověsti; u tvrzení o jejím historickém pozadí použij odpovídající historické zdroje.
- Příklad vhodného přístupu: „Podle starých českých pověstí vládla v dávných dobách kněžna Libuše. Legenda jí připisuje předpověď o městě, jehož sláva se dotkne hvězd — o budoucí Praze.“ Nepřepisuj to na suché upozornění, že existence kněžny není bezpečně doložena, pokud cílem faktu je představit významnou českou pověst.

### 2. Historické datování — přesnost podle významu, ne honba za jedním rokem

- Nevyžaduj přesný letopočet, pokud není důležitý pro identitu, význam nebo pochopení příběhu.
- Když se důvěryhodné zdroje v přesném roce mírně rozcházejí, zvol přiměřeně přesné a pravdivé vyjádření: „kolem roku…“, „přibližně v polovině…“, „v první polovině 18. století“, „na přelomu 18. a 19. století“, „během 14. století“ nebo „mezi lety…“.
- Pokud je přesný rok nejistý, ale období je doložené, napiš období. Pokud je doložené pouze století, nepředstírej přesnost na desetiletí či rok.
- Nezastavuj rework ani audit kvůli drobnému rozdílu v letopočtu, který nemění podstatu příběhu. Nepřepisuj jinak správný fakt jen kvůli kosmetickému zpřesnění data.
- Přesný rok ověřuj a opravuj pouze tehdy, pokud je zásadní pro identitu události/osoby, mění historickou souvislost nebo význam příběhu, případně pokud existuje skutečný a podstatný rozpor.
- Nikdy neskrývej významný rozpor ani nevytvářej falešnou jistotu. Pokud se prameny zásadně rozcházejí, stručně a srozumitelně popiš rozdíl nebo zvol bezpečnější časové vymezení.

### 3. Kontrola při reworku

U každého příběhu rozliš, zda jde o doloženou historickou událost, kronikářské podání, legendu/pověst, nebo novodobou interpretaci. Podle toho zvol formulaci a zdroje. Cílem je čtivý, konkrétní a věrohodný příběh, který poctivě označuje svůj původ — nikoli sterilní text ani smyšlená historie.
