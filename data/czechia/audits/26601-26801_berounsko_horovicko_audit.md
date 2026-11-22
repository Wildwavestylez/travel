# Auditní tahák — Berounsko a Hořovicko (26601–26801)

**Kanonické ID:** CZ-BEROUNSKO-HOROVICKO-26601-26801  
**Rozsah:** 26601–26801, přesně 31 PSČ  
**Auditní pravidla:** data/czechia/prompt_audit.md V2.0  
**Datum:** 2026-11-22  
**Stav:** PASS / AUDIT V2.0 COMPLETE / NOT PUBLISHED

## 1. Inventář a návaznost

- 31/31 PSČ nalezeno v Supabase.
- 31/31 PSČ se vyskytuje právě jednou v sequence.json a právě jednou v groups.
- Seznam obcí v groups odpovídá pro všech 31 PSČ seznamu obcí v data/czechia/reference/ruian_postcodes.csv.
- Všech 31 PSČ je obsaženo v oficiálním soupisu RÚIAN.
- Celkem 242 faktů, 1 694 jazykových položek (7 jazyků × 242 faktů).

PSČ v rozsahu:
26601, 26701, 26703, 26705, 26706, 26707, 26711, 26712, 26716, 26717, 26718, 26721, 26722, 26723, 26724, 26725, 26726, 26727, 26728, 26729, 26741, 26742, 26743, 26751, 26753, 26754, 26761, 26762, 26763, 26764, 26801.

## 2. Poštovní a správní údaje

- Oficiální detail České pošty ověřen pro všech 31 PSČ; obec fyzického sídla obsluhující pošty odpovídá poli city v Supabase.
- Ověřeny také partnerské pošty; jejich označení jako Pošta Partner nemění obec sídla.
- Kontrolní URL pro jednotlivé pobočky: https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/{PSČ}
- Všech 31 záznamů má v content správně county = Beroun a state = Středočeský kraj.
- Top-level legacy sloupce district/region nebyly hromadně normalizovány; kanonické správní hodnoty jsou v content a odpovídají oficiálním údajům.

## 3. Obsahové a strukturální kontroly

- 31/31 záznamů prošlo uloženým JSON Schema CZ_V2.
- 242/242 faktů má zdroje a map_category.
- 0 krátkých českých master textů pod 350 znaků.
- 0 null poloh; 29 původně chybějících poloh bylo doplněno.
- 0 neúplných location objektů; všechny polohy mají název, souřadnice, typ, přesnost a zdroj.
- 0 rozdílů facts vs translations.cs; česká jazyková větev je přesně synchronizována s master texty a názvy.
- Všech 7 jazyků obsahuje 242/242 faktů; 0 chybějících nebo prázdných titulů/textů.
- Kontrola délkových poměrů překladů neukázala podezřelé zkrácení či extrémní prodloužení.
- Reklamní scan sedmi jazyků bez nálezů.
- 0 duplicitních ID, 0 duplicitních názvů v rámci PSČ, 0 duplicitních URL uvnitř jednotlivých seznamů zdrojů.
- 0 chybějících mapových kategorií a 0 strukturálních vad.

## 4. Obsahové doplnění a opravy

### Nové významné skutečnosti

- 26601 / fact_009 — doplněn Václav Talich a jeho berounská vazba.
- 26701 / fact_006 — doplněn malíř a grafik Jan Preisler, rodák z Popovic.
- 26601 / fact_001 — rozšířen historický přehled Berouna o dobytí města husity roku 1421.

### Rozšíření krátkých textů

Rozšířeno 12 krátkých českých master textů; odpovídající překlady byly doplněny ve všech šesti cizích jazycích:
- 26723 / fact_003
- 26801 / fact_001, fact_002, fact_003, fact_004, fact_005, fact_006, fact_007, fact_008, fact_011, fact_012, fact_013

U 26801 / fact_011 bylo upřesněno opětovné vysvěcení kaple sv. Václava na 23. 9. 2017 a doplněn doložený architektonický popis. U 26801 / fact_012 byl doplněn vznik kolem 80. let 18. století a nejistota, zda stavbu zadal Evžen Norbert Václav hrabě Bruntálský z Vrbna, nebo jeho syn.

### Zdroje

- U 26601 / fact_001 byly odstraněny duplicitní URL v seznamu zdrojů.
- Všechny nově doplněné polohy mají vlastní location.source; u historických a plošných lokalit je přesnost výslovně označena.

## 5. Polohy — dokumentované orientační body

Všech 29 původně prázdných poloh je nyní vyplněno. Pět bodů je záměrně reprezentativních nebo historicky přibližných, nikoli vydávaných za přesnou polohu objektu:

- 26701 / fact_003 — postal_area; zámek Králův Dvůr jako reprezentativní bod pro dvě dělnické kolonie v Počaplech a na Výšinách.
- 26742 / fact_007 — nature_reserve; reprezentativní bod části NPR Týřov v katastru Broumy podle odborného geografického vymezení.
- 26754 / fact_003 — kostel sv. Mikuláše v Praskolesích jako orientační bod k lokalitě Na Hájku; přesná místa nálezů meteoritu nejsou určena.
- 26754 / fact_004 — kostel sv. Mikuláše v Praskolesích jako orientační bod k bývalému pivovaru čp. 42; přesné místo zaniklé stavby nebylo geokódováno.
- 26761 / fact_008 — Jägerhaus v Drozdově jako veřejný orientační bod v obci; nejde o tvrzení, že továrna sídlila přímo v tomto objektu.

U těchto bodů jsou v location.accuracy použity hodnoty area_representative nebo historical_approximate. Ostatní polohy mají přesnost odpovídající konkrétnímu objektu, adrese či doloženému orientačnímu místu.

## 6. Stav Supabase a mapové vrstvy

- 27 záznamů status = validated.
- 4 záznamy status = placeholder: 26712, 26716, 26717, 26718.
- 31/31 záznamů má data_version = 1; 0 záznamů je published.
- Stavové a geografické ověřovací příznaky nebyly hromadně měněny.
- explorer_map_points má pro tento rozsah 0 řádků. Je to očekávané: trigger postal_codes_sync_explorer_map_points vytváří mapové body pouze pro status = published. Žádné body nebyly do této tabulky vkládány ručně.
- Žádná publikace, přechod na V5, záloha ani read-only zámek nebyly provedeny.

## 7. Závěr a další krok

Audit V2.0 pro rozsah 26601–26801 je dokončen. Nezůstává žádná blokující obsahová ani strukturální vada. Reprezentativní a historicky přibližné polohy jsou výslovně označeny v datech a popsány výše.

Další krok: vyčkat na výslovný pokyn k publikaci V5, záloze a případnému read-only zámku. Neon nebyl v tomto auditu použit; jeho řešení a přesun dat zůstávají odloženy.
