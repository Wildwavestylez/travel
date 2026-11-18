# Audit českých PSČ — okres Strakonice

**Kanonické ID:** CZ-STRAKONICE-38601-38901  
**Stav:** WORK IN PROGRESS — AUDIT / REWORK REQUIRED  
**Snapshot:** 18. 11. 2026  
**Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`  
**Jediný platný tahák pro okres Strakonice.**

## Závazné vymezení rozsahu

Pouze české záznamy s `country_code='CZ'` a `county='Strakonice'`, přesně těchto 25 PSČ:

`38601, 38701, 38706, 38711, 38715, 38716, 38719, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38742, 38743, 38751, 38752, 38756, 38771, 38772, 38773, 38775, 38801, 38901`.

Toto je okresní inventář, nikoli celý souvislý interval. Vždy ověřovat současně `country_code='CZ'` a `county='Strakonice'`. Nikdy nezahrnovat Český Krumlov ani Prachatice.

## Aktuální databázový snapshot

Read-back ze Supabase dne 18. 11. 2026:
- 25/25 českých záznamů v tomto okrese.
- 25 `validated`, 0 `placeholder`, 0 `published`.
- Všech 25 má `data_version=1`.
- Žádný záznam tohoto okresu není V5 ani publikovaný podle tohoto snapshotu.

Tyto počty jsou orientační snapshot; před každou dávkovou změnou znovu načíst aktuální stav z Supabase. Supabase je jediný zdroj pravdy.

## Již evidované práce a nálezy z historického auditu

- **38773:** historicky proběhly souběžné obsahové a schema opravy; v posledním historickém snapshotu již nebyly neplatné hodnoty `category`, `map_category` ani `location.type`. Synchronizováno pět rozdílů `translations.cs`; opravena drobná německá gramatická chyba u fact_016.
- **38773/fact_013:** doplněna reprezentativní poloha návsi Pivkovice (49.1762544, 14.0575717), typ `historic_village`, přesnost `area_representative`.
- **38775:** poutní kostel ve Skočicích již pokrývá existující fact_001; nepřidávat duplicitní fakt.
- **38706/fact_007**, **38772/fact_004, fact_006, fact_008, fact_009**, **38773/fact_006, fact_014, fact_015**, **38775/fact_008** byly v historickém auditu vedeny s `location=null` z důvodu nedostatečně doloženého jednoznačného bodu nebo rozsáhlého tématu. Nepřidávat odhadované polohy.
- **38801 — Blatná** a **38901 — Vodňany:** historický audit je uváděl jako prázdné obsahové placeholdery, přestože aktuální status snapshot je `validated`. Je nutné znovu načíst aktuální obsah a metadata; starý popis nepřebírat jako současný stav.
- V historickém souhrnu bylo evidováno 422 faktů v celém původním smíšeném rozsahu; tento souhrnný počet se nesmí používat pro okresní Strakonice.

## Povinný další postup

1. Před prací znovu načíst `data/czechia/prompt_rework.md`, `data/czechia/CONTENT_STANDARD.md`, `data/czechia/schema.json`, `data/czechia/prompt_audit.md`, `data/czechia/sequence.json` a relevantní RÚIAN referenční podklady.
2. Ověřit přesný inventář tohoto souboru proti sequence a Supabase. Změny provádět pouze pro uvedená PSČ s `country_code='CZ'` a okresním zařazením Strakonice.
3. Pokračovat v reworku/auditu po jednotlivých PSČ; po každé změně provést read-back.
4. Nepublikovat V5, nezálohovat ani nezamykat, dokud nebude dokončen okresní audit a uživatel to výslovně neschválí.
5. Při budoucím uzavření: audit → V5 + published → ověřená Dropbox záloha → read-only zámek.

## Zákaz použití starého společného taháku

Soubor `DEPRECATED_DO_NOT_USE_38101-38901_audit.md` je pouze historický archiv a **není platným pracovním zadáním**. Nepřebírat z něj celkový rozsah 81 PSČ ani souhrnné počty. Pro Strakonice se řídit výhradně tímto souborem a aktuálním Supabase read-backem.
