# Audit českých PSČ — okres Prachatice

**Kanonické ID:** CZ-PRACHATICE-38301-38501  
**Stav:** AUDIT COMPLETE — NOT PUBLISHED (AWAITING USER INSTRUCTION)  
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

1. Pokračovat pouze sémantickou kontrolou starších překladů de, en, es, fr, it, nl u 142 původních faktů. Tři nově doplněné/upravené fakty (38301/fact_006, 38301/fact_007, 38451/fact_003) mají nové překlady připravené v sedmi jazykových vrstvách.
2. Opravovat pouze prokazatelné významové chyby; po každé skutečné opravě načíst dotčený záznam zpět a ověřit všech sedm jazyků. Nepřepisovat správné překlady stylisticky.
3. Po uzavření sémantické kontroly provést cílený závěrečný read-back inventáře a všech opravených položek a aktualizovat výsledek auditu.
4. Nepublikovat V5, nezálohovat ani nezamykat bez výslovného následného pokynu uživatele. Aktuální stav zůstává REVIEW REQUIRED.

## Zákaz použití starého společného taháku

Soubor `DEPRECATED_DO_NOT_USE_38101-38901_audit.md` je pouze historický archiv a **není platným pracovním zadáním**. Nepřebírat z něj celkový rozsah 81 PSČ ani souhrnné počty. Pro Prachatice se řídit výhradně tímto souborem a aktuálním Supabase read-backem.

## Výsledek auditního běhu — 18. 11. 2026

**Konečný výsledek:** AUDIT COMPLETE — všech 28 PSČ a 145 faktů prošlo obsahovou, strukturální a sémantickou kontrolou. Záznamy zůstávají V1; publikace ani záloha nebyly spuštěny.

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

### Uzavření auditu
- Sémantická kontrola překladů je dokončena pro všech 145 faktů × 6 cizojazyčných vrstev.
- Závěrečný technický read-back celého okresního rozsahu je dokončen; souhrn je uveden v posledním checkpointu níže.
- Bez otevřených auditních oprav. Publikace a záloha zůstávají odděleným krokem a vyžadují výslovný pokyn uživatele.
- Aktuální stavy zůstávají 1 validated a 27 placeholder; všech 28 záznamů má data_version=1.
## Průběžný checkpoint sémantické kontroly překladů — 18. 11. 2026

- Ručně porovnány české master texty a překlady de/en/es/fr/it/nl u všech faktů v PSČ 38301, 38401, 38402, 38403, 38404 a 38411.
- Zkontrolováno celkem 31 faktů napříč šesti jazyky; z toho 29 původních faktů a 2 nově doplněné pražské? Ne — 2 nově doplněné prachatické faktové záznamy 38301/fact_006 a 38301/fact_007. Nové překlady jsou významově v pořádku.
- U 38411/fact_002 byla nalezena terminologická nepřesnost ve francouzském titulku: výraz «oppidum» mohl mylně označovat antické oppidum. Opraveno na «La fortification de hauteur de Svatý Ján et le parc archéologique». Read-back potvrzen.
- V ostatních zkontrolovaných překladech nebyla zjištěna významová záměna, vynechání zásadní informace ani změna chronologie, osob, míst či příčinných vztahů. Nebyly provedeny stylistické přepisy.
- Automatické rozdíly v číselných tokenech nejsou samy o sobě závadou: čeština zapisuje století číslicemi s tečkou, zatímco některé překlady je vyjadřují slovně nebo římskými číslicemi. Proto nebyly tyto rozdíly mechanicky opravovány.

### Další pracovní dávka
- Pokračovat od PSČ 38421 a následně v pořadí sequence až do 38501.
- Audit zůstává REVIEW REQUIRED; tento checkpoint není uzavřením okresu a neopravňuje k publikaci.

## Konečný checkpoint sémantické kontroly překladů — 18. 11. 2026

**Stav sémantické kontroly: COMPLETE. Celkový audit okresu však zůstává REVIEW REQUIRED; publikace není povolena.**

- Dokončeno porovnání českých master textů se všemi šesti překladovými vrstvami (de, en, es, fr, it, nl) u všech **145 faktů v 28/28 cílových PSČ**.
- Celkem tedy prošlo sémantickou kontrolou **870 jazykových překladů**. České překladové vrstvy cs zůstávají synchronizované s master texty.
- Zaznamenáno a opraveno **9 faktových položek / 28 jazykových výskytů**:
  - **38421/fact_003:** odstraněno nepodložené tvrzení, že kaplan konal bohoslužby pouze příležitostně; opraveno ve všech šesti jazycích.
  - **38421/fact_004:** opravena záměna latinského a cyrilského znaku v příjmení Šwéd; opraveno ve všech šesti jazycích.
  - **38427/fact_005:** německý překlad přestal překládat vlastní název řeky Zlatý Potok jako „Goldbach“.
  - **38433/fact_001:** francouzský a italský titulek i text přesněji pojmenovávají zasvěcení kostela jako stětí/decollaci sv. Jana Křtitele, nikoli obecné mučednictví.
  - **38472/fact_005:** do všech šesti překladů doplněny dva konkrétní názvy písní Karla Polaty uvedené v českém masteru.
  - **38481/fact_003:** ve francouzštině nahrazen zavádějící termín „oppidum“ obecným označením pravěkého opevněného místa; opraven titulek i text.
  - **38492/fact_004:** ve španělštině opraveny smrkové porosty, které byly chybně označeny jako porosty jedlí.
  - **38493/fact_002:** opraven francouzský titulek pro sejpy; nepřesný výraz „terrils“ nahrazen označením hromad po rýžování zlata.
  - **38493/fact_004:** zpřesněno druhové označení borovice blatky ve španělštině, francouzštině, italštině a nizozemštině.
- Všechny provedené změny byly zapsány do Supabase a ověřeny následným read-backem. U oprav 38421 byla samostatně ověřena oprava frekvenčního tvrzení i zápisu příjmení ve všech šesti jazycích.
- U ostatních porovnaných překladů nebyla zjištěna další významová záměna, vynechání zásadní informace ani posun chronologie, osob, míst či příčinných vztahů. Správné překlady nebyly stylisticky přepisovány.

### Stav Supabase po dokončení kontroly

Read-back po všech opravách:
- 28/28 cílových PSČ.
- 145 faktů.
- 145 překladových položek v každé vrstvě cs, de, en, es, fr, it, nl.
- 1 `validated`, 27 `placeholder`, 0 `published`.
- Všech 28 záznamů má `data_version=1`.
- Sémantické opravy nezměnily statusy, verze ani inventář PSČ.

### Závěrečné technické ověření a uzavření — 18. 11. 2026

- Supabase read-back: 28/28 PSČ, 145 faktů; 145 položek v každé jazykové vrstvě cs/de/en/es/fr/it/nl.
- Povinná pole a administrativní údaje: 0 chyb; všech 28 záznamů má county Prachatice a state Jihočeský kraj.
- Český master a překladové ID/pořadí: 0 nesouladů. Všech 145 českých textů má nejméně 350 znaků.
- Kategorie, priority, mapové kategorie, polohy, reprezentativní body, access_point a zdrojové objekty: 0 zjištěných strukturálních chyb.
- Kontrola vazeb zdrojů odhalila v 38472 dva osiřelé interní odkazy: 38472/fact_003 odkazoval na neexistující s17 (odstraněn; zůstaly s10 a s11), 38472/fact_006 odkazoval na neexistující s15 (opraven na existující s14 – položka Schwarzenberského pivovaru). Následný read-back potvrdil 0 osiřelých interních odkazů.
- RÚIAN CSV: všech 28 cílových PSČ je v oficiálním referenčním inventáři; žádné nechybí. Manifest uvádí 2 677 unikátních PSČ a zdrojový feed ČÚZK aktualizovaný 1. 11. 2026, zpracovaný 13. 11. 2026.
- sequence.json: 2 677/2 677 unikátních kódů. groups: 2 677/2 677 unikátních položek. Množiny sequence a groups se přesně shodují; všech 28 cílových PSČ je v každé právě jednou.
- Stav po opravách: 1 validated, 27 placeholder, 0 published; všech 28 záznamů data_version=1.
- Nebyly zjištěny reklamní ani propagační formulace. Zásadní obsahové doplnění a odstranění duplicity jsou popsány výše.

**AUDIT COMPLETE.** Neprovádět publikaci V5, změnu statusů, zálohu ani read-only zamčení bez výslovného následného pokynu uživatele.
