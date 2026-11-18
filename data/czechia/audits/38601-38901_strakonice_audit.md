# Finální audit českých PSČ — okres Strakonice

**Kanonické ID:** CZ-STRAKONICE-38601-38901  
**Stav:** REVIEW REQUIRED — geografické dořešení 7 NULL poloh (prompt_audit.md V2.0)  
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
- **25 validated**, 0 placeholder, 0 published.
- **25/25 data_version=1**.
- **188 faktů celkem**; PSČ 38601 obsahuje 16 faktů.
- 38801 Blatná má 14 faktů a 38901 Vodňany 21 faktů; starý záznam o prázdných placeholder z těchto PSČ je zastaralý a pro tento audit neplatí.

Publikace V5, změna statusu, záloha ani read-only zámek nebyly provedeny.

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

### G. Souřadnice — otevřená kontrola podle promptu V2.0

Stávající neprázdné souřadnice nebyly plošně znovu kontrolovány ani přesouvány. Doplněny byly tři dříve prázdné polohy. Při následném ověření pravidel sekce G se ukázalo, že zbývajících sedm NULL nebylo před původním uzavřením dostatečně individuálně prověřeno. Proto se výsledek mění na REVIEW REQUIRED a níže uvedené případy zůstávají otevřené; nejde o potvrzení, že všechny musejí zůstat NULL.
- 38772/fact_004 — orientační bod u Nového zámku Libějovice pro krajinnou osu.
- 38772/fact_006 — orientační bod areálu Nového zámku pro příběh Františka Horského.
- 38773/fact_015 — reprezentativní bod historického jádra Bavorova pro skupinu místních osobností.

Sedm poloh je zatím `null`; jejich konečný stav musí být určen po cíleném ověření:
- 38706/fact_007 — více archeologických lokalit a zaniklé/nejasně rozpoznatelné mohyly.
- 38772/fact_008 — historická chovatelská stanice československého vlčáka bez spolehlivě doloženého přesného stanoviště.
- 38772/fact_009 — archeologické pohřebiště Černoháj bez veřejně ověřitelného přesného bodu.
- 38773/fact_006 — chráněná louka je plošná lokalita; nebyl ověřen vhodný jednoznačný bod.
- 38773/fact_014 — několik sakrálních a lidových staveb ve dvou obcích, bez jediného primárního bodu.
- 38775/fact_008 — archeologické pohřebiště pod Růžovým vrchem, přesná poloha není bezpečně doložena.
- 38801/fact_014 — žárové pohřebiště u Škvořetic je ve zdrojích lokalizováno pouze přibližně.

Předběžné dohledání po zjištění nedostatečné kontroly již ukázalo konkrétní kandidátní zdroje a pravděpodobně doplnitelné polohy:
- 38706/fact_007: Atlas české architektury lokalizuje původní dvě mohyly na návrší asi 700 m západně od Volyňky, ale uvádí, že je dnes nelze spolehlivě identifikovat. Prověřit, zda lze doložit reprezentativní bod původního naleziště; jinak ponechat null. Zdroj: https://www.archmap.cz/cs/objekt/5638.
- 38772/fact_008: první kříženci československého vlčáka se narodili 26. 5. 1958 v chovatelské stanici Libějovice; existující body faktů 004/006 označují Nový zámek Libějovice. Prověřit, zda jde o totožný historický areál a zda lze bod bezpečně převzít. Zdroje: https://csv.sk/plemeno/nic a https://www.mistopisy.cz/pruvodce/body-zajmu/2308/novy-zamek-libejovice.
- 38772/fact_009: NPÚ ISAD vymezuje mohylové pohřebiště na jižním okraji lesa Černoháj, jižně od Velkého Černohájského rybníka, s přesností vymezení cca 200 m. Pravděpodobně lze použít area_representative bod podle polygonu. Zdroj: https://isad.npu.cz/ujezd-s-okraj-lesa-cernohaj-20298.
- 38773/fact_006: AOPK eviduje přírodní památku Bavorovská stráň a odkazuje na mapu i úřední polygon; získat reprezentativní bod z oficiální geometrie. Zdroje: https://portal.nature.cz/w/uzemi-1687 a https://sbirkapp.gov.cz/detail/SPPQGUE4U4BO6VYK/text.
- 38773/fact_014: text zahrnuje více objektů ve dvou obcích; prověřit konkrétní polohu kaple sv. Prokopa v Měkynci nebo vybrat jeden hlavní objekt podle faktu, případně ponechat null, pokud není možné určit jediný reprezentativní bod. Pro Tourov jsou doložené body božích muk a kapličky.
- 38775/fact_008: obec Skočice uvádí pohřebiště asi 700 m jihozápadně od hradiště v sedle mezi Růžovým vrchem a Kostelním lesem. Prověřit mapové vymezení a reprezentativní bod. Zdroj: https://www.skocice.cz/pamatky-zajimavosti/skocicky-hrad.
- 38801/fact_014: NPÚ ISAD eviduje pohřebiště pod vrchem Hradiště a uvádí vymezení s rozptylem cca 200 m; doplnit area_representative bod z oficiálního polygonu, pokud je dostupný. Zdroj: https://isad.npu.cz/pod-vrchem-hradiste-17378.

Toto předběžné dohledání není dokončená lokalizace ani souhlas s odhadem. Pro každý případ je nutné získat a ověřit konkrétní souřadnice, správný `location.type`, `accuracy` a zdroj; následně zapsat do Supabase, načíst zpět a ověřit. Nevyplňovat souřadnice naslepo. Po dokončení všech sedmi případů znovu vyhodnotit stav auditu.

### H. Zjevné věcné vady a propagace

0 reklamních nebo propagačních textů podle kontrolních výrazů. Nebyla nalezena jiná podstatná věcná, zdrojová nebo místní záměna vyžadující opravu.

## Historické poznámky a rozsah starších taháků

- Předchozí opravy v 38773, včetně synchronizace českých překladů a dřívější polohy 38773/fact_013, byly zachovány.
- Starý společný tahák `38101-38901_audit.md` je historický a pro strakonický okresní podblok již není autoritativní. Jeho údaj, že 38801 a 38901 jsou prázdné placeholdery, je překonaný.
- Václav Čeněk Bendl ve Volyni je doložitelná regionální literární stopa, ale při odlehčeném auditu nebyl vyhodnocen jako zásadní chybějící téma srovnatelné s nově doplněnými osobnostmi; není otevřenou vadou auditu.

## Konečný stav a další krok

**REVIEW REQUIRED — auditní obsah a technické kontroly jsou dokončeny, ale geografická kontrola sedmi NULL poloh nebyla podle sekce G promptu V2.0 řádně uzavřena.** Konečný PASS lze udělit až po individuálním prověření všech sedmi poloh, doplnění těch, které lze doložit, a zdůvodnění těch, které skutečně musí zůstat null.

Supabase zůstává na `data_version=1`, `status='validated'`. **Neprovádět V5, published, zálohu ani read-only zamčení bez výslovného následného pokynu uživatele.** Při pokračování nejprve načíst tento tahák; dokončené kontroly neopakovat.
