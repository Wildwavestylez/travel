# Finální audit českých PSČ — okres Strakonice

**Kanonické ID:** CZ-STRAKONICE-38601-38901  
**Stav:** PASS — PUBLISHED V5 / BACKUP VERIFIED  
**Datum dokončení:** 18. 11. 2026  
**Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`  
**Jediný kanonický tahák pro tento přesný okresní rozsah.**

## Závazný rozsah

Pouze české záznamy `country_code='CZ'` a `content.county='Strakonice'`, přesně těchto 25 PSČ:

`38601, 38701, 38706, 38711, 38715, 38716, 38719, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38742, 38743, 38751, 38752, 38756, 38771, 38772, 38773, 38775, 38801, 38901`.

Nejde o celý souvislý číselný interval. Český Krumlov, Prachatice, německá data ani jiná PSČ nebyla měněna.

## Konečný databázový snapshot

Read-back ze Supabase po všech opravách:
- **25/25** očekávaných českých řádků.
- **25 published**, 0 validated, 0 placeholder.
- **25/25 data_version=5**; read-back potvrdil přesný inventář a nulový počet výjimek.
- **188 faktů celkem**; PSČ 38601 obsahuje 16 faktů.
- 38801 Blatná má 14 faktů a 38901 Vodňany 21 faktů; starý záznam o prázdných placeholder z těchto PSČ je zastaralý a pro tento audit neplatí.

Publikace V5 a `status='published'` byly dokončeny. Následná záloha byla ověřena v Dropboxu. Read-only zámek nebyl proveden.

## Inventář, sekvence a RÚIAN

- Všech 25 PSČ je v `sequence.json` právě jednou a v `groups` právě jednou. Sekvence ani její pořadí nebyly změněny.
- V Supabase je přesně 25/25 očekávaných řádků; obsahové PSČ, okres a kraj jsou vyplněné a souhlasí.
- Obsahová sídla pošty jsou: Strakonice, Volyně, Malenice, Katovice, Střelské Hoštice, Volenice, Čestice, Radomyšl, Sedlice, Kadov, Záboří, Doubravice, Mečichov, Třebohostice, Lnáře, Bělčice, Štěkeň, Cehnice, Čepřovice, Číčenice, Libějovice, Bavorov, Skočice, Blatná a Vodňany. Doložené části obce: Strakonice I u 38601 a Vodňany II u 38901; ostatní `district` zůstává prázdné.
- `ruian_postcodes.json` je v repozitáři prázdný/nečitelný jako inventář; podle dokumentace byl proto použit povolený CSV fallback `ruian_postcodes.csv`. V CSV bylo nalezeno všech 25/25 PSČ.
- Manifest uvádí oficiální feed ČÚZK RÚIAN, aktualizaci feedu 1. 11. 2026 a stažení 13. 11. 2026. Centrální RÚIAN soubory nebyly měněny.

## Výsledek kontrol podle prompt_audit.md V2.0

### A. Zásadní turistická úplnost

Hlavní dominanty a příběhy oblasti jsou pokryté: Strakonický hrad, johanité, bitva u Sudoměře, dudácká tradice, Josef Skupa, Hoslovický mlýn, Helfenburk, Blatná, Lomec, historické Vodňany, Volyně, Lnáře a další regionální celky.

Při úvodním průzkumu byly nalezeny a doplněny čtyři skutečně významné chybějící příběhy do 38601, vždy jako nové navazující ID a se všemi sedmi jazykovými verzemi:
- `fact_013` — František Ladislav Čelakovský, básník českého národního obrození.
- `fact_014` — Josef Šmidinger, šiřitel českých knih a zakladatel strakonické knihovny.
- `fact_015` — povstání odbojové organizace Niva a osvobození Strakonic v květnu 1945.
- `fact_016` — Josef Režný, folklorista a zakladatel Mezinárodního dudáckého festivalu.

Příběhy jsou doložené městskými, knihovními, odbornými a paměťovými zdroji. U nových faktů byly doplněny odpovídající mapové body. Nebyl vytvářen katalog drobných objektů. U události z května 1945 byl vyřešen rozpor v pramenech: rozporné označení „94. divize“ z jednoho sekundárního zdroje nebylo převzato; finální text uvádí první tanky 4. obrněné divize XII. sboru 3. americké armády odpoledne 6. 5. 1945 podle městského zpravodaje a přehledu postupu 4th Armored Division.

### B. PSČ a správní údaje

25/25 záznamů má shodné PSČ, okres Strakonice, Jihočeský kraj a neprázdné sídlo pošty. `district` je vyplněn pouze tam, kde je relevantní a doložená městská část. Bez nálezu.

### C. Duplicity a přiřazení

- 0 duplicitních ID.
- 0 duplicitních názvů faktů v rámci bloku.
- 0 identických textů faktů napříč blokem.
- Každé PSČ v sekvenci a groups právě jednou.
- Stávající přiřazení poutního kostela ve Skočicích k 38775/fact_001 zachováno; duplicitní fakt nebyl přidán.

### D. Kategorie mapy

0 neplatných `category`, `map_category`, `priority`, `location.type` nebo `location.accuracy`. Rozlišení `category` a `map_category` zachováno.

### E. Překlady a délka

- Všech 7 jazyků `cs, de, en, es, fr, it, nl` je přítomno pro všech 188 faktů — celkem 1 316 jazykových textů.
- 0 chybějících nebo prázdných překladů, 0 nesouladů ID, 0 rozdílů mezi českým master textem a `translations.cs`.
- Všech 188 českých master textů má alespoň 350 znaků.
- Kontrola jazykových signálů neodhalila záměnu jazyků.
- Doplňující porovnání důležitých čísel a letopočtů odhalilo a opravilo chybějící údaje v překladech:
  - 38701/fact_001 — kolem roku 1470; 38701/fact_004 — náhrobek z roku 1688.
  - 38706/fact_007 — první písemná zmínka o Malenicích z roku 1318.
  - 38773/fact_005 — přestavba mlýna kolem roku 1900.
  - 38801/fact_003 — hypotéza o zpracování zlata v době laténské, přibližně od 200 př. n. l.; 38801/fact_004 — výslovně doplněn kontrast mezi dendrochronologickým datováním 1490–1499 a tradičně uváděným rokem 1444.
  - 38901/fact_001 — husitské období od roku 1420; 38901/fact_018 — ochrana Zeyerova dubu od roku 1979 a obvod kmene přibližně 380 cm.
- 38901/fact_008: z českého textu byla odstraněna interní redakční věta o PSČ a nahrazena přirozeným turistickým závěrem; překlady byly sladěny.
- 38601/fact_014: tvrzení „jedna z nejstarších v Čechách“ bylo zpřesněno na „jedna z nejstarších veřejných knihoven v České republice“ podle zdroje knihovny.

Po opravách: 0 chybějících důležitých číselných údajů v překladech.

### F. JSON a technická konzistence

- 25/25 záznamů obsahuje povinná top-level pole a správné datové typy.
- 188/188 faktů má povinná pole a zdroje.
- 0 krátkých českých master textů, 0 prázdných zdrojových polí, 0 neplatných enumů, 0 duplicitních ID a 0 duplicitních názvů.
- Základní strukturální a databázové kontroly PASS.
- AJV ani samostatné validační prostředí nebyly spouštěny; prompt je výslovně nevyžaduje.

### G. Souřadnice — dokončeno podle promptu V2.0

Cílená kontrola všech sedmi původních NULL poloh byla dokončena. Byly doplněny konkrétní nebo orientační mapové body; přesnost je označena podle skutečné jistoty. Žádný bod není vydáván za přesné zaměření tam, kde zdroje uvádějí pouze širší či historickou lokalizaci.

- **38706/fact_007:** `49.126406, 13.882827`; `postal_area / area_representative`. Fakt shrnuje více archeologických stop Malenicka; použit orientační bod návsi Malenic. Zdroj polohy: https://www.mistopisy.cz/pruvodce/obec/9052/malenice/.
- **38772/fact_008:** `49.1115556, 14.1833333`; `historic_estate / historical_approximate`. Orientační bod areálu Nového zámku, kde je doloženo někdejší zařízení Pohraniční stráže / výcvikové středisko psovodů. Neznamená to, že porodní kotec stál přesně na bodě. Zdroj polohy: https://koda.kominari.cz/88~Metodologie?action=karta&cislo=8200.
- **38772/fact_009:** `49.1310, 14.2295`; `archaeological_site / approximate`. Orientační poloha u jižního okraje lesa Černoháj a jižně od Velkého Černohájského rybníka; NPÚ uvádí přesnost vymezení cca 200 m. Zdroj: https://isad.npu.cz/ujezd-s-okraj-lesa-cernohaj-20298.
- **38773/fact_006:** `49.1216987, 14.0941091`; `protected_area / area_representative`. Reprezentativní bod PP Bavorovská stráň odvozený z úředně publikovaného polygonu S-JTSK a převedený do WGS84. Zdroj: https://portal.gov.cz/vestniky/kdib3rr/948480253.pdf.
- **38773/fact_014:** `49.158274, 14.029383`; `historic_village / area_representative`. Fakt popisuje více památek ve dvou obcích; jako jediný orientační bod byl zvolen Měkynec, jehož památky tvoří první a hlavní část textu. Bod nereprezentuje přesnou polohu objektů v Tourově. Zdroj: https://www.mistopisy.cz/pruvodce/obec/7822/mekynec/pamatky-turistika/.
- **38775/fact_008:** `49.16375, 14.0853`; `archaeological_site / approximate`. Orientační poloha odvozená z obecního popisu „asi 700 m jihozápadně od hradiště“ a sedla mezi Růžovým vrchem a Kostelním lesem; nejde o přesný bod jednotlivé mohyly. Zdroj: https://www.skocice.cz/pamatky-zajimavosti/skocicky-hrad.
- **38801/fact_014:** `49.3960, 13.9399`; `archaeological_site / historical_approximate`. Orientační poloha na jižním svahu pod vrchem Hradiště, přibližně 1 km jihozápadně od Škvořetic. NPÚ uvádí rozptyl vymezení cca 200 m. Zdroj: https://isad.npu.cz/pod-vrchem-hradiste-17378.

### G.1 Read-back a kontrola NULL

Po zápisu proběhl samostatný read-back všech sedmi faktů. Všech sedm `location` objektů obsahuje povinná pole `name`, `lat`, `lon`, `type`, `accuracy` a `source`. Kontrola celého strakonického bloku potvrdila **188/188 faktů a 0 NULL poloh**. Ostatní faktové polohy nebyly tímto zásahem měněny. Přibližné body se nesmějí interpretovat jako přesné zaměření archeologických lokalit.
### H. Zjevné věcné vady a propagace

0 reklamních nebo propagačních textů podle kontrolních výrazů. Nebyla nalezena jiná podstatná věcná, zdrojová nebo místní záměna vyžadující opravu.

## Historické poznámky a rozsah starších taháků

- Předchozí opravy v 38773, včetně synchronizace českých překladů a dřívější polohy 38773/fact_013, byly zachovány.
- Starý společný tahák `38101-38901_audit.md` je historický a pro strakonický okresní podblok již není autoritativní. Jeho údaj, že 38801 a 38901 jsou prázdné placeholdery, je překonaný.
- Václav Čeněk Bendl ve Volyni je doložitelná regionální literární stopa, ale při odlehčeném auditu nebyl vyhodnocen jako zásadní chybějící téma srovnatelné s nově doplněnými osobnostmi; není otevřenou vadou auditu.

## Publikace V5 a ověřená záloha

- **Supabase:** přesně 25/25 očekávaných PSČ nastaveno na `data_version=5`, `status='published'`.
- **Read-back:** 25 řádků, 25 published V5, 0 výjimek, 0 nesouladů země/okresu. Ověřený seznam: `38601, 38701, 38706, 38711, 38715, 38716, 38719, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38742, 38743, 38751, 38752, 38756, 38771, 38772, 38773, 38775, 38801, 38901`.
- **Záloha:** dedikovaná Supabase Edge Function `travel-backup-cz-38601-38901-strakonice-audited`, spuštěná zavedenou cestou přes `pg_net` HTTP GET. Supabase byl při exportu pouze čten.
- **Dropbox složka:** `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_38601-38901_2026-11-18T19-45-30-717Z/`.
- **Soubory:** `CZ_AUDIT_38601-38901_backup.json` (1 714 057 B), `CZ_AUDIT_38601-38901_restore.sql` (1 500 194 B), `manifest.json` (2 393 B).
- **Manifest:** `record_count=25`, úplný seznam PSČ a record IDs, `validation.status=VERIFIED`, `validation.readback_verified=true`, `verified_record_count=25`, `verified_scope_hash=52385dce1a017e0bafd7892cae6b47852f7628d14a47bf3a50eba2cd74712ea1`.
- **SHA-256 read-back:** JSON `1d004e2afb3d383c4fb5eadeff9605f5693c7f2fd099a52ed667e8dce5bc557c`; restore SQL `2c185df67facc7881098010cc0c4e115db5482dca4dcb40056a7d9bd802ee5d4`; manifest `0daa984fe1a5a6a116b25aa8019d8f8c2a1dea7936f5156958fbb168271528d6`. Všechny tři soubory byly po uploadu znovu staženy Edge Function a jejich SHA-256 souhlasí; Dropbox listing následně potvrdil právě tyto tři soubory.
- Read-only zámek nebyl proveden; uživatel jej nepožadoval.

## Konečný stav

**PASS — audit okresu Strakonice dokončen, 25/25 PSČ publikováno ve V5 a záloha ověřena.**
