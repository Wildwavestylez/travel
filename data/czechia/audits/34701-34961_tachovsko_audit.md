# Finální audit Tachovska — PSČ 34701 až 34961

**Kanonické ID:** `CZ-TACHOVSKO-34701-34961`  
**Datum auditu:** 2026-11-19  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.0  
**Stav:** `PASS`

## 1. Rozsah a inventář

Auditovaný číselný interval: **34701–34961**.

Přesný inventář existujících PSČ:

`34701, 34801, 34802, 34806, 34813, 34815, 34901, 34952, 34953, 34958, 34961`

- RÚIAN referenční CSV: 11/11.
- `sequence.json`: 11/11, každý kód právě jednou.
- `groups`: 11/11, každý kód právě jednou.
- Supabase: 11/11 existujících záznamů.
- Globální kontrola české sekvence: 2 677 kódů v `sequence`, 2 677 položek v `groups`, 0 duplicit, 0 rozdílů.
- Všech 11 PSČ náleží do okresu Tachov a Plzeňského kraje.
- RÚIAN potvrdil, že Víchov je místní část Černošína, ale adresní inventář jej řadí pod PSČ 34901; Jakoubek ze Stříbra je proto geograficky přiřazen do 34901, nikoli automaticky do 34958.

## 2. Obsahové nálezy a provedené opravy

Původní stav: 118 faktů.  
Stav po opravách: **121 faktů**.

### Doplněné zásadní osobnosti

- **34801 / fact_015 — Ignác Anton Born:** doplněn osvícenský mineralog a geolog, jeho působení ve Starém Sedlišti, katalog a rozsah sbírky, prodej Charlesi Grevilleovi a založení Soukromé učené společnosti v Čechách. Text výslovně rozlišuje Bornovu sbírku od pozdější sbírky spojované s Karlem Josefem Heidlerem.
- **34901 / fact_013 — Jakoubek ze Stříbra:** doplněn husitský teolog pocházející z Vítkova/Víchova, jeho vazba na Jana Husa, přijímání podobojí a role v utrakvistické správě. Geografické přiřazení vychází z RÚIAN, nikoli pouze z přídomku „ze Stříbra“.
- **34701 / fact_021 — Max von der Grün:** doplněno jeho dětství a školní docházka v Pavlově Studenci, literární zpracování pohraniční zkušenosti a osud zaniklé obce.

### Upřesněné historické příběhy

- **34701 / fact_008:** rozlišena bitva/ústup křižáckého vojska 3.–4. srpna 1427 od samostatného obléhání a dobytí Tachova 11. srpna; doplněna kapitulace hradní posádky 14. srpna.
- **34953 / fact_006:** rozšířen příběh náměstí Kryštofa Haranta. Text uvádí jeho význam jako šlechtice, cestovatele, spisovatele a skladatele a výslovně upřesňuje, že se narodil na Klenové; Bezdružice jsou součástí jeho rodového přídomku, nikoli rodištěm.

### Délka českého master textu

Všech sedm původně krátkých textů v 34801 bylo věcně doplněno a odpovídající překlady aktualizovány: `fact_004`, `fact_005`, `fact_006`, `fact_007`, `fact_008`, `fact_012`, `fact_013`.

Po opravách: **0 českých master textů pod 350 znaků**.

### Administrativní oprava

- **34801:** `district` a `district_type` nastaveny na `null`. Staré Sedliště je v tomto záznamu obslužným sídlem/obcí, nikoli místní částí jiné obce.

## 3. Polohy

- Doplněny čtyři z pěti původně prázdných poloh v 34801: `fact_001`, `fact_002`, `fact_011`, `fact_014`.
- **34801 / fact_013 — poutní kostel sv. Anny Samotřetí:** `location = null` ponecháno záměrně. Zdroje jej umisťují přibližně kilometr severně od Pernolce, ale v rámci dostupných podkladů nebyl nalezen dostatečně spolehlivý bod přímo u kostela. Souřadnice nebyly odhadnuty.
- Všechny ostatní existující neprázdné souřadnice zůstaly beze změny.

## 4. Strukturální a technické kontroly

Read-back ze Supabase po opravách:

- 11/11 PSČ.
- 121 faktů.
- 847 jazykových položek v sedmi jazycích `cs, de, en, es, fr, it, nl`.
- 0 prázdných jazykových titulků/textů.
- 0 rozdílů v pořadí a přiřazení ID mezi master fakty a jazykovými poli.
- 0 rozdílů `translations.cs.title/text` proti českému masteru.
- 0 krátkých českých master textů.
- 0 duplicitních ID faktů a 0 duplicitních názvů faktů v auditovaném rozsahu.
- 0 chybějících zdrojů faktů.
- 0 nepovolených `category`, `map_category`, `priority`, `location.type` nebo `location.accuracy`.
- 0 nálezů reklamních či propagačních formulací v jazykových textech.
- Po publikaci: všech 11 záznamů má `status = published`, `data_version = 5`; přesný seznam i počet 11/11 potvrzeny samostatným read-backem ze Supabase.

Individuálně sémanticky zkontrolováno všech **726/726 cizojazyčných překladů** (654 položek u 109 dříve nezměněných faktů + 72 položek u 12 obsahově změněných faktů z předchozí fáze). Všech 121 českých master faktů má odpovídající českou překladovou položku; 0 rozdílů mezi facts[].title/text a translations.cs; 0 prázdných jazykových položek. V této fázi bylo opraveno **26 cizojazyčných překladových položek** a jeden český master text s odpovídající českou překladovou položkou.

## 5. Sémantická kontrola překladů a opravy

**Individuální sémantická kontrola: PASS — 726/726 cizojazyčných položek.** Kontrola porovnávala význam, klíčová fakta, jména, data, geografii a omezení přístupnosti s českým masterem. Správné a srozumitelné překlady nebyly stylisticky přepisovány.

Provedené překladové opravy:
- **34701 / fact_017:** opraveno nepřesné označení drobné sakrální památky ve francouzštině a nizozemštině.
- **34801 / fact_001:** opravena chybná nizozemská větná konstrukce.
- **34802 / fact_005:** do španělštiny, francouzštiny, italštiny a nizozemštiny vrácena informace o gotické a pozdější barokní úpravě kostela.
- **34901 / fact_002:** v šesti cizojazyčných verzích odstraněna délka důlní železnice 325 m, která nebyla obsažena v českém masteru.
- **34901 / fact_004:** do šesti překladů doplněno důležité srovnání věže mostu ve Stříbře s věží Karlova mostu jako jednoho ze dvou dochovaných příkladů tohoto typu v Česku.
- **34901 / fact_007:** opraven rozpor mezi narozením Antonína Petra Příchovského roku 1707 a stavbou zámku roku 1723. Český master a všech šest překladů nyní správně uvádějí narození ve Svojšíně, nikoli na později postaveném zámku. Ověřeno podle oficiální historie obce Svojšín: https://www.svojsin.cz/nase-obec/historie/
- **34958 / fact_007:** opravena italská formulace povolání France Richtera a gramatika názvu.

Po opravách proběhl read-back dotčených položek. České facts[].title/text a translations.cs.title/text zůstávají synchronizované.

**Nevyřešené sémantické vady: 0.**  
**Výsledek celého auditu: PASS.**

Prázdná poloha u 34801/fact_013 není závadou vyžadující odhad; důvod ponechání je výše zaznamenán.

## 6. Publikace, záloha a zamčení

### Publikace V5 — dokončena

- Všech 11 přesně auditovaných PSČ bylo v Supabase nastaveno na `data_version = 5`, `status = published`.
- Read-back: **11/11**, přesný inventář potvrzen, 0 nesouladů.
- Žádná jiná PSČ ani země nebyly změněny.

### Záloha Dropbox — VERIFIED

- Dedikovaná Supabase Edge Function: `travel-backup-cz-34701-34961-tachovsko-audited` (ACTIVE, verze 1).
- Funkce čte pouze přesný inventář 11 PSČ, před exportem vyžaduje V5 + published, CZ, Plzeňský kraj a okres Tachov; databázi nemění.
- Spuštěno zavedenou cestou přes Supabase `pg_net` HTTP GET.
- Dropbox složka: `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_34701-34961_2026-11-19T21-44-39-551Z/`.
- Uloženy všechny tři požadované soubory: `CZ_AUDIT_34701-34961_backup.json` (963 466 B), `CZ_AUDIT_34701-34961_restore.sql` (823 031 B) a `manifest.json` (2 008 B).
- Dropbox read-back SHA-256 všech tří souborů: **PASS**; metadata všech tří souborů ověřena přímo v aplikačním Dropbox prostoru.
- Manifest potvrzuje `validation.status = VERIFIED`, `validation.readback_verified = true`, `verified_record_count = 11` a shodu `verified_scope_hash`.
- Počet a seznam PSČ v manifestu: 11/11, přesná shoda. SHA-256 scope: `1460068b24575c1e0a80155c5d949b4b5fb672977e81fda84ae9de4e2dc614ca`.

### Read-only zamčení

- **Neprovedeno.** Vyžaduje samostatný výslovný příkaz uživatele.
- Schéma, `sequence.json`, `groups`, triggery, RLS a aplikační kód nebyly při publikaci ani záloze měněny.
