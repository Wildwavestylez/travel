# Audit českých PSČ — okres Prachatice

**Kanonické ID:** CZ-PRACHATICE-38301-38501  
**Stav:** WORK IN PROGRESS — AUDIT / REWORK REQUIRED  
**Snapshot:** 18. 11. 2026  
**Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`  
**Jediný platný tahák pro okres Prachatice.**

## Závazné vymezení rozsahu

Pouze české záznamy s `country_code='CZ'` a `county='Prachatice'`, přesně těchto 28 PSČ:

`38301, 38401, 38402, 38403, 38404, 38411, 38421, 38422, 38425, 38426, 38427, 38432, 38433, 38441, 38442, 38443, 38444, 38451, 38462, 38471, 38472, 38473, 38481, 38486, 38491, 38492, 38493, 38501`.

Toto je okresní inventář, nikoli celý souvislý interval. Vždy ověřovat současně `country_code='CZ'` a `county='Prachatice'`. Nikdy nezahrnovat Český Krumlov ani Strakonice.

## Aktuální databázový snapshot

Read-back ze Supabase dne 18. 11. 2026:
- 28/28 českých záznamů v tomto okrese.
- 1 `validated`, 27 `placeholder`, 0 `published`.
- Všech 28 má `data_version=1`.
- Žádný záznam tohoto okresu není V5 ani publikovaný podle tohoto snapshotu.

Tyto počty jsou orientační snapshot; před každou dávkovou změnou znovu načíst aktuální stav z Supabase. Supabase je jediný zdroj pravdy.

## Již evidované práce a nálezy z historického auditu

- **38451:** doplněn významný příběh Boubínského pralesa a Boubínského jezírka jako `fact_010`, v sedmi jazycích; čtyři zdroje a poloha jezírka (48.973809, 13.8192428). Historický read-back byl PASS; tehdy záznam zůstal placeholder, V1.
- **38486/fact_001:** opraven český text a zpřesněna chronologie činnosti dílny Jana Krále / JEKA; aktualizováno šest cizojazyčných překladů a synchronizována česká překladová vrstva.
- **38501:** v posledním historickém inventáři veden jako `validated`; ostatní okresní záznamy byly vedeny jako placeholder. Aktuální stav vždy znovu ověřit.
- Historický audit uváděl technické kontroly bez neplatných kategorií, zdrojů či krátkých českých master textů; překlady vyžadují dokončení sémantické kontroly. Tyto historické výsledky nepovažovat za aktuální finální audit bez nového read-backu.
- V tomto okresu se nachází i Boubín; nepřesouvat příběhy podle korespondenční adresy, ale podle fyzického místa a doloženého PSČ.

## Povinný další postup

1. Před prací znovu načíst `data/czechia/prompt_rework.md`, `data/czechia/CONTENT_STANDARD.md`, `data/czechia/schema.json`, `data/czechia/prompt_audit.md`, `data/czechia/sequence.json` a relevantní RÚIAN referenční podklady.
2. Ověřit přesný inventář tohoto souboru proti sequence a Supabase. Změny provádět pouze pro uvedená PSČ s `country_code='CZ'` a okresním zařazením Prachatice.
3. Pokračovat v reworku/auditu po jednotlivých PSČ; po každé změně provést read-back.
4. Nepublikovat V5, nezálohovat ani nezamykat, dokud nebude dokončen okresní audit a uživatel to výslovně neschválí.
5. Při budoucím uzavření: audit → V5 + published → ověřená Dropbox záloha → read-only zámek.

## Zákaz použití starého společného taháku

Soubor `DEPRECATED_DO_NOT_USE_38101-38901_audit.md` je pouze historický archiv a **není platným pracovním zadáním**. Nepřebírat z něj celkový rozsah 81 PSČ ani souhrnné počty. Pro Prachatice se řídit výhradně tímto souborem a aktuálním Supabase read-backem.
