# Audit českých PSČ — okres Prachatice

**Kanonické ID:** CZ-PRACHATICE-38301-38501  
**Stav:** REVIEW REQUIRED — AUDIT / SEMANTIC TRANSLATION REVIEW OPEN  
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
- Aktuálně 145 faktů; každý jazyk cs, de, en, es, fr, it, nl obsahuje 145 překladových položek.
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

## Výsledek auditního běhu — 18. 11. 2026

**Průběžný výsledek:** REVIEW REQUIRED — technické a obsahové opravy jsou zapsány a ověřeny, ale sémantická kontrola všech starších překladů v sedmi jazycích ještě není kompletně uzavřena. Nepublikovat.

### Inventář a rozsah
- Ověřeno 28/28 cílových PSČ v Supabase.
- V sequence.json je 2 677 kódů; groups obsahuje přesně 2 677 položek, všechny unikátní a množina se přesně shoduje se sequence.
- Každé z 28 cílových PSČ je v sequence i groups právě jednou.
- RÚIAN/ČÚZK kontrola provedena podle dostupného referenčního CSV a manifestu; všech 28 kódů je v inventáři. ruian_postcodes.json se přes konektor nepodařilo načíst, CSV je doložená alternativní reference uvedená v README.
- Všech 28 záznamů má shodné postcode, vyplněné city, county Prachatice a state Jihočeský kraj; bez zjištěného rozporu.

### Zásadní turistická úplnost — nálezy a doplnění
- 38301/fact_006: doplněn sv. Jan Nepomuk Neumann a jeho rodný dům (Neumannova 142); 7 jazyků. Poloha je orientačně reprezentována Velkým náměstím, nikoli vydávána za přesný bod domu.
- 38301/fact_007: doplněna dvě zásadní dobytí Prachatic v letech 1420 a 1620; 7 jazyků. Poloha historicky přibližná v centru města.
- 38451/fact_003: duplicitní příběh Stožecké kaple a skály byl odstraněn, protože primární zpracování těchto dvou míst zůstává v 38444/fact_001 a 38444/fact_002. Zachováno ID a pořadí; místo duplicity doplněny Volarské šance, polní opevnění z let 1618–1620, s polohou podle Archeologického atlasu Čech a překlady v 7 jazycích.
- Volarské šance u Volar jsou odlišné místo od opevnění Šance u Kořenného v 38443/fact_005; obě položky zůstávají samostatné.
- V průzkumu nebyla zjištěna další chybějící památka, událost nebo osobnost srovnatelného zásadního významu.

### Technické kontroly po zápisu
- 28 PSČ, 145 faktů.
- Všech 145 českých master textů má nejméně 350 znaků.
- 145/145 položek ve všech sedmi jazykových vrstvách; české překlady přesně odpovídají českým master textům podle ID, titulku a textu.
- 0 chybějících překladových ID, 0 neplatných ID, 0 nepořadových ID.
- 0 chybějících zdrojových polí, 0 neplatných mapových kategorií, 0 neplatných obsahových kategorií.
- 0 location=null; všechny polohy mají požadovaná pole a povolené hodnoty.
- 0 chyb v povinných strukturálních polích, 0 chyb ve verification, 0 chybných zdrojových objektů.
- Rychlá kontrola reklamních a propagačních formulací: bez nálezu.
- Odstraněna jedna potvrzená duplicita mezi 38444 a 38451.

### Otevřené položky
1. Dokončit sémantickou kontrolu starších překladů de, en, es, fr, it, nl u všech dříve existujících faktů. Strukturální synchronizace a počty jsou v pořádku, ale tento běh neprošel ruční sémantickou kontrolou všech 145 × 6 překladových textů.
2. Po uzavření překladové kontroly znovu načíst celý rozsah a předložit finální výsledek.
3. Nepublikovat ani nezálohovat bez výslovného následného pokynu uživatele. Aktuální stavy zůstávají 1 validated a 27 placeholder; žádné statusy ani verze nebyly tímto během měněny.