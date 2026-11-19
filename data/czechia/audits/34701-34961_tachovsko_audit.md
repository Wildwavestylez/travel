# Finální audit Tachovska — PSČ 34701 až 34961

**Kanonické ID:** `CZ-TACHOVSKO-34701-34961`  
**Datum auditu:** 2026-11-19  
**Verze pravidel:** `data/czechia/prompt_audit.md` V2.0  
**Stav:** `REVIEW REQUIRED`

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
- Všech 11 záznamů zůstává `status = validated`, `data_version = 1`.

Sémanticky byly zkontrolovány všechny překlady 12 obsahově změněných faktů (72 cizojazyčných položek). Strukturální kontrola pokryla všech 847 jazykových položek.

## 5. Otevřená položka a výsledek

**REVIEW REQUIRED — jediný otevřený krok:** dokončit individuální sémantickou kontrolu 654 cizojazyčných položek u 109 nezměněných faktů (de/en/es/fr/it/nl). Jejich struktura, přiřazení ID, úplnost polí a pořadí prošly; tato položka zůstává otevřená pouze proto, že nebyla dokončena individuální kontrola významové shody každého z těchto textů.

Prázdná poloha u 34801/fact_013 není závadou vyžadující odhad; důvod ponechání je výše zaznamenán.

## 6. Publikace, záloha a zamčení

- Publikace V5: **neprovedena**.
- Změna `status` na `published`: **neprovedena**.
- Záloha: **nespuštěna**.
- Read-only zamčení: **neprovedeno**.
- Schéma, `sequence.json`, `groups`, triggery, RLS a aplikační kód nebyly měněny.

Podle `prompt_audit.md` se publikace ani záloha nespouští bez výslovného pokynu uživatele. Read-only zamčení vyžaduje samostatný výslovný příkaz.
