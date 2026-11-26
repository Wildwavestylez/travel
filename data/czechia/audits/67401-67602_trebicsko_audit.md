# Auditní tahák — 67401–67602 (Třebíčsko, Náměšťsko a Moravskobudějovicko)

**Kanonické ID:** CZ-TREBICSKO-67401-67602  
**Rozsah zadání:** 674xx–677xx  
**Přesný inventář:** 46 existujících PSČ: 67401; 67501–67508 (dle sequence); 67521–67529 (dle sequence); 67531–67534; 67541–67545; 67550–67557; 67559–67560; 67571; 67573–67579; 67602.  
**Stav:** IN PROGRESS / REVIEW REQUIRED. Audit není dokončen.  
**Pravidla:** `data/czechia/prompt_audit.md` V2.1. Publikace, záloha, Neon porovnání a read-only lock jsou mimo tento běh; nespouštět bez samostatného výslovného pokynu.

## 1. Inventář a autority

- `sequence.json`: 46/46 přesných PSČ v intervalu 67400–67799.
- `groups`: 46/46 stejných PSČ v odpovídající skupině 67xxx.
- `reference/ruian_postcodes.csv`: 46/46 odpovídajících řádků; CSV je jediný sdílený RÚIAN inventář.
- Manifest RÚIAN: feed aktualizován 2026-11-01, stažen 2026-11-13; 2 677 unikátních PSČ v celém inventáři.
- Supabase `public.postal_codes`: 46/46 přesných českých řádků nalezeno; ID 10481–10526; 46/46 `status=validated`; 12 záznamů má `data_version` vyšší než 1. Žádný řádek nebyl publikován ani změněn ve statusu/verzi.
- V `sequence.json`, `groups` ani RÚIAN CSV není v tomto rozsahu žádné PSČ 677xx. Neexistující PSČ nevytvářet; rozsah ani sekvenci neměnit.
- Celkem 290 faktů ve 46 záznamech.

## 2. Jednorázová turistická úplnost — průzkum

Hlavní regionální témata jsou převážně pokryta:
- Třebíčské UNESCO (židovská čtvrť, hřbitov, bazilika sv. Prokopa), Antonín Kalina, větrný mlýn a další třebíčské dědictví — 67401.
- Jan Kubiš / Anthropoid — 67552.
- Bible kralická, tiskárna Jednoty bratrské a archeologické nálezy — 67573.
- Jaroměřický zámek, hudební centrum a František Václav Míča — 67551.
- Jemnice, hradby, zámek, židovské dějiny a Barchan — 67531.
- Náměšťský zámek, Oslava, letiště — 67571.
- Mohelenská hadcová step, Dalešická přehrada a přečerpávací elektrárna — 67575–67577.
- Hrotovická tragédie 8. 5. 1945 — 67555.
- Babice 1951, Jan Bula, Otokar Březina, Vítězslav Nezval, Jakub Deml, Ludvík Svoboda a další regionální osobnosti jsou zastoupeny.

### Významná historická témata — obě zapracována a read-back ověřena
1. **Třebíč 1468 — PSČ 67401:** doplněn samostatný hlavní fakt `67401/fact_009`, bez přesunu či mazání původních faktů. Zachycuje obležení 12. 5. a dobytí 14. 5. 1468, vypálení a zničení města i následnou obnovu, při níž vzniklo dnešní Karlovo náměstí. Český master má 635 znaků; všech 7 jazyků včetně `translations.cs` bylo doplněno, všech 6 cizojazyčných verzí významově zkontrolováno a read-back ověřeno. Poloha používá přibližný orientační bod Karlova náměstí, nikoli tvrzení o přesném místě bojů.
   - Město Třebíč, historie v datech: https://www.trebic.cz/historie-mesta-v-datech/d-1385/p1%3D30143
   - Město Třebíč, historie: https://www.trebic.cz/historie-mesta/ms-30137/p1%3D30137
2. **Jemnice 1468 — PSČ 67531:** doplněno do stávajícího hlavního historického faktu `67531/fact_001`, nikoli jako duplicitní samostatný příběh. Text nyní uvádí zpustošení a vypálení města uherským vojskem Matyáše Korvína a souvislost se zánikem místního hornictví. Český master a všech 6 cizojazyčných překladů byly aktualizovány; všech 6 překladů zachovává datum, aktéra, vypálení města i souvislost se zánikem hornictví. `translations.cs` přesně odpovídá masteru a read-back byl ověřen. Do zdrojů byly přidány odborný dokument NPÚ, historický přehled MUNI a oficiální TIC/Kraj Vysočina.
   - NPÚ, odborná nálezová zpráva Jemnice, část „Z historie Město Jemnice“: https://iispp.npu.cz/mis_public/documentDetail.htm?id=1261994
   - TIC Jemnice, historie města: https://www.tic.jemnice.cz/cs/historie-mesta
   - Kraj Vysočina, městská památková zóna: https://www.kr-vysocina.cz/mestska-pamatkova-zona-jemnice/d-1111195/p1%3D122140%26p3%3D%29
   - MUNI, Historie v datech: https://is.muni.cz/www/105206/fotkyJemnice/Text/Historie_v_datech.pdf

## 3. Dosavadní technické kontroly a opravy

### Inventář / struktura
- 46/46 přesných PSČ v sequence, groups, RÚIAN CSV a Supabase.
- 290 faktů (po doplnění samostatného faktu 67401/fact_009).
- Všech 46 záznamů obsahuje všech sedm jazyků: cs, de, en, es, fr, it, nl.
- Počty faktů v překladových polích odpovídají masterům; v cílené kontrole nebyl zjištěn rozdíl počtů.
- 0 duplicitních názvů uvnitř jednotlivých PSČ.
- Původně 31 českých master textů bylo kratších než 350 znaků; všech 31 bylo rozšířeno a read-back ověřeno (596–724 znaků).
- Původně 59 faktů mělo `location=null` nebo chybějící pole location; všech 59 poloh je nyní doplněno a read-back ověřeno, aktuálně 0 null poloh.
- 4 neplatné hodnoty `map_category` byly nalezeny a opraveny.
- 8 rozdílů `translations.cs` proti českému masteru bylo nalezeno a opraveno.
- Před publikací nebyly nalezeny mapové body pro 230 faktů s neprázdnou polohou; odpovídá to stavu validated před publikací. Žádné mapové body nebyly ručně vytvořeny ani změněny.
- Samostatný AJV ani jiný validační běh nespouštět; prompt_audit V2.1 jej nevyžaduje.

### Opravy již provedené a read-back ověřené
- `67501/fact_002`, `67501/fact_006`: `map_category=historic_city`.
- `67502/fact_001`: `map_category=historic_city`.
- `67502/fact_004`: `map_category=castle`.
- `translations.cs` synchronizováno přesně s masterem pro:
  - `67503/fact_001`, `67503/fact_002`;
  - `67545/fact_004`;
  - `67554/fact_001` až `67554/fact_005`.
- Cílený read-back změněných pěti PSČ potvrdil 0 neplatných mapových kategorií a 0 rozdílů `translations.cs`/master.

## 4. Délkové nálezy — 31/31 opraveno

Všech 31 českých master textů kratších než 350 znaků bylo věcně rozšířeno a návazné překlady v de/en/es/fr/it/nl aktualizovány. Česká verze v `translations.cs` byla synchronizována s masterem.

- 67505: fact_001
- 67521: fact_001, fact_002, fact_003, fact_004, fact_006
- 67525: fact_002, fact_003, fact_006
- 67526: fact_002
- 67528: fact_001–fact_006
- 67532: fact_003, fact_005, fact_006, fact_007, fact_008, fact_009
- 67534: fact_004
- 67555: fact_001, fact_002, fact_003, fact_005, fact_006, fact_007, fact_010, fact_012

**Read-back:** 31/31 master textů má 596–724 znaků; 31/31 `translations.cs` přesně odpovídá masteru; u všech 31 faktů je přítomno 7 jazyků a žádný překladový jazyk nechybí. Délka cizojazyčných textů nebyla použita jako validační kritérium.

## 5. Geografické nálezy — 59/59 původně chybějících poloh doplněno a read-back ověřeno

### Opraveno a read-back ověřeno
- 67521/fact_001 — železniční stanice Okříšky; přesný bod doložen evidencí objektů Správy železnic.
- 67521/fact_002 — soubor kostelů sv. Anny a Narození Panny Marie v Přibyslavicích; bod doložen turistickým portálem Kraje Vysočina.
- 67521/fact_004 — tvrziště Bransouze; přibližná historická poloha podle lokalizace památky.
- 67522/fact_001 — kostel sv. Jakuba Staršího ve Starči; GPS z evidence Noc kostelů.
- 67522/fact_002 — kostel sv. Petra a Pavla v Horním Újezdě; publikované souřadnice objektu.
- 67528/fact_005 — kaple sv. Anny v Opatově; poloha ověřena mapovým záznamem OSM/Mapcarta.
- 67528/fact_006 — přírodní rezervace Opatovské zákopy; reprezentativní bod z geografických dat AOPK.
- 67529/fact_003 — kaple sv. Jana Nepomuckého; přibližný orientační bod návsi Kněžic, samotná kaple je na návsi doložena NPÚ.
- 67529/fact_004 — Pieta v Brodcích; přibližný bod lokality Brodce, nikoli tvrzení o přesné poloze sousoší.
- 67531/fact_001 — historické jádro Jemnice; orientační bod náměstí Svobody.
- 67531/fact_002 — zámek Jemnice; bod objektu.
- 67531/fact_003 — městské opevnění Jemnice; přibližný bod Dolní brány.
- 67531/fact_004 — slavnost Barchan; orientační bod centra Jemnice na náměstí Svobody.
- 67531/fact_005 — židovský hřbitov Jemnice; souřadnice odborného katalogu židovských památek.
- 67531/fact_006 — kostel sv. Jakuba v Podolí; publikované souřadnice objektu.
- 67532/fact_009 — boží muka u nádraží v Třebelovicích; souřadnice památkového katalogu.
- 67545/fact_003 — přírodní památka Hájky; reprezentativní bod chráněného území.
- 67545/fact_004 — historický mlýn a pila v Milaticích; GPS databáze vodních mlýnů.
- 67553/fact_002 — kostel Povýšení sv. Kříže ve Valči; publikované GPS kostela.
- 67573/fact_003 — kostel sv. Martina v Kralicích nad Oslavou; publikované souřadnice objektu.
- 67573/fact_004 — dvojice středověkých hrádků nad Chvojnicí; jako reprezentativní bod zvolen horní hrádek.
- 67573/fact_005 — historické jádro Rapotic; přibližný orientační bod obce pro příběh Rapotic a zaniklého Zašova.
- 67577/fact_004 — historické jádro Kramolína; přibližný orientační bod obce.
- 67578/fact_001 — historické jádro Čikova; přibližný orientační bod obce.

- 67521/fact_003 — tvrziště v prostoru Panského dvora v Heralticích; přibližná poloha podle obecního historického přehledu.
- 67521/fact_005 — tvrziště Krahulov; přesné souřadnice publikovaného odborného popisu terénních pozůstatků.
- 67521/fact_006 — přírodní rezervace U Trojáku a U Římské studánky; reprezentativní bod přírodní rezervace.
- 67522/fact_003 — historické jádro Čechočovic; orientační bod obce, doložený oficiálním webem.
- 67522/fact_004 — Chlístov; orientační bod historické vsi.
- 67522/fact_005 — historické jádro Římova; orientační bod obce.
- 67522/fact_006 — historické jádro Mastníku; souřadnice fotografie centra obce.
- 67522/fact_007 — historické jádro Mikulovic; orientační bod vsi.
- 67523/fact_005 — železniční stanice Kojetice na Moravě; poloha stanice.
- 67528/fact_001 — historické jádro Opatova; orientační bod obce.
- 67528/fact_002 — kostel sv. Bartoloměje v Opatově; GPS evidence Noc kostelů.
- 67528/fact_003 — historické jádro Opatova; orientační bod sídla pro souhrnný příběh průmyslové minulosti.
- 67528/fact_004 — pravoslavný chrám sv. Jáchyma a Anny; publikované souřadnice objektu.
- 67544/fact_001 — bývalá škola v Babicích; geotag fotografie objektu, místa babické tragédie.
- 67544/fact_007 — historické jádro Martínkova; orientační bod obce a rodiště Václava Kosmáka.
- 67553/fact_004 — historické jádro Valče; orientační bod bývalého panství.
- 67573/fact_006 — železniční stanice Rapotice; publikované souřadnice stanice.
- 67578/fact_004 — Čikovská doubrava nad Oslavou; reprezentativní bod doložen botanickým floristickým záznamem pro tuto lokalitu.
- 67532/fact_007 — socha sv. Jana Nepomuckého v Rácovicích; přibližný orientační bod Rácovického rybníka, proti němuž socha stojí.
- 67541/fact_005 — Grázlův mls; přibližný bod Nových Syrovic jako místa původu místní receptury.
- 67542/fact_004 — historická školní budova v Budkově, čp. 5; souřadnice adresního místa školy.

Všech 59 změn bylo po zápisu načteno zpět a hodnoty location odpovídají uloženým souřadnicím, typu, přesnosti a zdroji.

### Dokončení zbývajících 14 poloh podle geografické hierarchie prompt_rework a Content Standardu

Při druhém průchodu byly znovu použity závazné úrovně: konkrétní objekt; reprezentativní bod uvnitř rozlehlé lokality; u historického objektu s neznámou přesnou polohou přibližný bod nebo veřejné centrum související obce; u místního tématu vhodný orientační bod; pro fakt o celé oblasti PSČ lze použít její `representative_point`. Název vždy popisuje skutečný bod pinu a přesnost nepředstírá přesnou polohu faktu.

- `67504/fact_003` — Róbiřsky skale u Hodova: přesný skalní výchoz nebyl doložen; použit veřejný orientační bod v Hodově, 49.293980, 15.983849, `historic_village`, `approximate`. Zdroj polohy: https://www.mistopisy.cz/pruvodce/obec/6055/hodov/okoli-priroda/. Obsahové potvrzení výskytu Róbiřsky skale: https://www.hodov.cz/priroda.
- `67508/fact_003` — Amerikánský kříž v Koutech: obecní historie potvrzuje kříž, ale neurčuje jeho přesné umístění; použit veřejný orientační bod obce Kouty, 49.31473, 15.79269, `historic_village`, `approximate`. Zdroj polohy: https://mapcarta.com/18491838. Obsahový zdroj: https://www.obeckouty.cz/o-obci/historie-obce/prehled-nejdulezitejsich-udalosti-od-zalozeni-1945.
- `67523/fact_001` — zaniklá kojetická tvrz a historické události: přesná poloha tvrze není doložena; použit veřejný orientační bod Kojetic, 49.157825, 15.818042, `historic_village`, `approximate`. Zdroj: https://www.mistopisy.cz/pruvodce/obec/6797/kojetice/.
- `67523/fact_006` — soubor drobných památek Kojetic: fakt zahrnuje více objektů; použit veřejný orientační bod obce, 49.157825, 15.818042, `historic_village`, `approximate`, nikoli tvrzení, že všechny památky stojí na tomto bodě. Zdroj: https://www.mistopisy.cz/pruvodce/obec/6797/kojetice/.
- `67529/fact_005` — Babák pod Víským vrchem: původní poloha kamene není přesně doložena a současné uložení originálu v kněžickém zámku není zaměněno za původní místo; použit veřejný orientační bod Vísky u Kněžic, 49.27236, 15.67749, `historic_village`, `approximate`. Zdroj: https://mapcarta.com/18471380.
- `67531/fact_007` — osm obcí v poštovním obvodu Jemnice: jde výslovně o souhrnný fakt pro celou oblast PSČ, proto byl použit uložený `representative_point` daného poštovního obvodu, 49.018986, 15.569936, `postal_area`, `area_representative`. Nešlo o automatické kopírování: bod byl použit právě proto, že fakt nemá jediné místo a vztahuje se k oblasti PSČ jako celku. Poloha centrálního orientačního bodu v Jemnici: https://www.turistika.cz/mista/jemnicke-namesti-svobody/detail.
- `67532/fact_008` — sloup se čtyřmi kříži směrem na Budkov: přesný bod na silnici nebyl nezávisle určen; použit veřejný orientační bod Oponešic, 49.03774, 15.65205, `historic_village`, `approximate`. Zdroj polohy: https://mapcarta.com/18483498. Obsahový zdroj a popis směru: https://www.mikroregion.jemnice.cz/clenske-obce/obec-oponesice.html.
- `67542/fact_005` — kotlina prameniště Bíhanky a okolní vrchy: fakt popisuje krajinu širšího okolí Budkova; použit veřejný orientační bod obecního úřadu, 49.05392, 15.65878, `town_hall`, `approximate`. GPS bod srážkoměrné stanice na střeše OÚ: https://www.edpp.cz/srazkomery/budkov.
- `67544/fact_009` — Lesonická Obora: použit bod uvnitř lesa u křižovatky lesních cest ve východní části porostu, 49.119722, 15.751389, `forest`, `area_representative`. Poloha vychází z geolokovaného památného stromu v dané části Obory; zdroj: https://web.kurzy.cz/wiki/Seznam_pam%C3%A1tn%C3%BDch_strom%C5%AF_v_okrese_T%C5%99eb%C3%AD%C4%8D.
- `67545/fact_002` — rodina Plichtových: příběh propojuje Šebkovice a další místa Babicka; jako veřejný orientační bod místního těžiště příběhu v Šebkovicích použit bod obce, 49.12093, 15.8182, `historic_village`, `approximate`. Zdroj: https://mapcarta.com/18478384.
- `67557/fact_007` — hrádek na Hradišti: terénní lokalita leží na hřebeni při severozápadním okraji Biskupic, přesný GPS bod jádra není publikován; použit veřejný orientační bod Biskupic, 49.038155, 16.009455, `historic_village`, `approximate`. Zdroj polohy obce: https://www.mistopisy.cz/pruvodce/obec/6031/biskupice-pulkov/. Lokalizace hrádku: https://www.hrady.cz/tvrz-biskupice-trebic.
- `67574/fact_003` — lovecký pavilon Vápenice: NPÚ a Památkový katalog jej umisťují na hřeben nad levým břehem Oslavy, ale bez zveřejněných GPS. Jako blízký veřejný orientační bod ve stejném historickém loveckém areálu byl zvolen lovecký zámeček na Vlčím Kopci, 49.15552, 16.16306, `building`, `approximate`; název polohy výslovně označuje zámeček jako orientační bod, nikoli jako pavilon. Zdroj bodu: https://mapcarta.com/W42268639. Lokalizace a vazba na areál: https://www.pamatkovykatalog.cz/lovecky-pavilon-vapenice-26813913.
- `67576/fact_005` — bývalá kaple v Hartvíkovicích, dnes využívaná jako tělocvična a pro školu: použit veřejný orientační bod školy na adrese Hartvíkovice 90, 49.17233805619339, 16.085739146587677, `school`, `approximate`. Přesná identita budovy jako bývalé kaple není v adresním zdroji samostatně vyznačena, proto není použito `exact`. Poloha školy: https://firmy.euro.cz/misto-hartvikovice-90-0-2745925. Historie kaple a její dnešní využití: https://www.hartvikovice.cz/kaple.
- `67577/fact_006` — Na Hrádku u Kramolína: místopisný popis spojuje hrádek s prostorem naproti zaniklému Slavětickému mlýnu nad Francouzským žlebem; použit historický orientační bod bývalého mlýna, 49.12278, 16.12775, `historic_mill`, `historical_approximate`. Bod označuje referenční místo v krajině, ne přesné jádro hrádku. Souřadnice mlýna: https://zanikleobce.cz/misto/7827-slaveticky-mlyn/. Popis hrádku a jeho vztahu k mlýnu: https://www.mestysbudisov.cz/e_download.php?file=data%2Feditor%2F66cs_127.pdf&original=200902bz.pdf.

**Read-back:** všech 14 nově doplněných poloh bylo po zápisu načteno zpět. Spolu s předchozími 45 opravami je nyní **59/59 původních null poloh doplněno**; všech 59 hodnot location bylo ověřeno v Supabase. U přibližných a historicky přibližných pinů název popisuje skutečný orientační bod a přesnost nepředstírá přesné umístění objektu či události.

## 6. Další kontroly, které zůstávají otevřené

- Významová kontrola překladů de/en/es/fr/it/nl probíhá: dokončeno 5/46 záznamů (67401, 67521, 67522, 67523, 67531), celkem 35 faktů a 210 cizojazyčných překladů. Strukturální kontrola těchto záznamů: 0 prázdných/chybějících cizojazyčných textů a 0 rozdílů `translations.cs` proti masteru. Opraveny 3 překladové položky v 67401: fact_006 (es – gramatický rod v názvu a textu; it – shoda přísudku), fact_009 (it – chybný význam slova `ricostruzione`, nahrazeno `resoconto`). V 67521, 67522, 67523 a 67531 nebyla zjištěna další významová vada. Zbývá 41/46 záznamů; opravovat skutečné významové vady, nikoli stylistické preference.
- Rychlá kontrola zjevných duplicit a chybných přiřazení napříč 46 PSČ (dosud neuzavřeno).
- Ověřit správní údaje a sídlo obslužné pošty podle pravidel Content Standardu, pouze při konkrétním rozporu; neprovádět plošnou novou rešerši.
- 31/31 krátkých master textů opraveno a read-back ověřeno; geografická část 59/59 původních null poloh je uzavřena; obě historická témata 1468 jsou zapracována a read-back ověřena.
- Po každém zápisu načíst zpět pouze změněné PSČ/fakta. Nepoužívat opakované široké SELECT.
- Žádné publikování V5/published, žádná záloha Dropbox, žádný Neon import, žádný read-only lock bez samostatného výslovného pokynu.

## 7. Přesný další krok

31/31 krátkých českých master textů a jejich překladů bylo opraveno a read-back ověřeno. Geografická část je uzavřena: 59/59 původních null poloh doplněno podle hierarchie prompt_rework a Content Standardu, 0 aktuálních null poloh. Další krok: pokračovat v sémantické kontrole zbývajících 41 záznamů v šesti cizojazyčných verzích; následně uzavřít rychlou kontrolu zjevných duplicit/přiřazení podle oddílu 6. Neopakovat dokončené inventární kontroly ani již ověřené opravy.
