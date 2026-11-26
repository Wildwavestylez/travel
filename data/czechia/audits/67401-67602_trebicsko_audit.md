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
- Celkem 289 faktů ve 46 záznamech.

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

### Otevřené významné historické téma
1. **Třebíč 1468 — PSČ 67401:** obléhání 12. 5. a dobytí 14. 5. 1468 je zmíněno pouze kontextově v 67521/fact_003 (Heraltice); chybí samostatný hlavní příběh správně přiřazený Třebíči. Zvážit doplnění samostatného faktu do 67401, bez přesunu/mazání původního faktu.
   - Město Třebíč, historie v datech: https://www.trebic.cz/historie-mesta-v-datech/d-1385/p1%3D30143
   - Město Třebíč, historie: https://www.trebic.cz/historie-mesta/ms-30137/p1%3D30137
2. **Jemnice 1468 — PSČ 67531:** zpustošení města uherským vojskem a konec předchozího rozmachu v hlavním faktu 67531/fact_001 chybí. Doplnit do stávajícího městského historického faktu, ne jako duplicitní samostatný příběh; doplnit doložený zdroj NPÚ.
   - NPÚ, odborná nálezová zpráva Jemnice, část „Z historie Město Jemnice“: https://iispp.npu.cz/mis_public/documentDetail.htm?id=1261994 (text uvádí zpustošení roku 1468, strana 7/8 v textové části).

## 3. Dosavadní technické kontroly a opravy

### Inventář / struktura
- 46/46 přesných PSČ v sequence, groups, RÚIAN CSV a Supabase.
- 289 faktů.
- Všech 46 záznamů obsahuje všech sedm jazyků: cs, de, en, es, fr, it, nl.
- Počty faktů v překladových polích odpovídají masterům; v cílené kontrole nebyl zjištěn rozdíl počtů.
- 0 duplicitních názvů uvnitř jednotlivých PSČ.
- 31 českých master textů je kratších než 350 znaků.
- 59 faktů má `location=null` nebo chybějící pole location.
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

## 5. Geografické nálezy — 45/59 poloh doplněno, 14 otevřeno

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

Všech 45 změn bylo po zápisu načteno zpět a hodnoty location odpovídají uloženým souřadnicím, typu, přesnosti a zdroji.

### Zbývá prověřit — 14 faktů
- 67504: fact_003
- 67508: fact_003
- 67523: fact_001, fact_006
- 67529: fact_005
- 67531: fact_007
- 67532: fact_008
- 67542: fact_005
- 67544: fact_009
- 67545: fact_002
- 67557: fact_007
- 67574: fact_003
- 67576: fact_005
- 67577: fact_006

#### Nově prověřeno v tomto pokračování — bez změny souřadnic

- `67557/fact_007` — oficiální web obce odkazuje na popis tvrze Biskupice na Hrady.cz. Ten lokalizuje terénní pozůstatky na úzkém zalesněném hřebeni vybíhajícím k severozápadnímu konci obce a popisuje příkop i jádro hrádku. Popis zpřesňuje polohu v terénu, ale neposkytuje GPS bod jádra; obecní střed ani střed kopce proto nelze vydávat za přesný bod. Zatím ponecháno null. Zdroje: https://www.biskupice-pulkov.cz/o-obci/ ; https://www.hrady.cz/tvrz-biskupice-trebic
- `67574/fact_003` — NPÚ a Památkový katalog potvrzují konkrétní stavbu Vápenice na hřebeni nad levým břehem Oslavy jižně od Březníka. Dostupné oficiální texty ale neuvádějí souřadnice ani adresní bod objektu. Obecní střed, Vlčí Kopec ani blízký gloriet nejsou náhradou polohy pavilonu. Zatím ponecháno null. Zdroje: https://www.npu.cz/cs/uop-telc/pamatky-v-nasem-kraji/nove-prohlasene-nemovite-pamatky-na-uzemi-kraje-vysocina/2024 ; https://www.pamatkovykatalog.cz/lovecky-pavilon-vapenice-26813913
- `67576/fact_005` — oficiální stránka Hartvíkovic potvrzuje, že bývalá kaple byla přestavěna na tělocvičnu a dnes slouží převážně škole a veřejnosti. Stránka však neuvádí adresu ani přímý mapový bod kaple; odkaz „Najít na mapě“ vede na obecní profil, nikoli na objekt. Adresa školy čp. 90 proto nebyla automaticky použita jako poloha kaple. Zatím ponecháno null. Zdroj: https://www.hartvikovice.cz/kaple
- `67577/fact_006` — při dohledávání se objevil další místopisný popis „Na Hrádku“ v Kramolíně: lokalizuje jej proti Slavětickému mlýnu nad Francouzským žlebem a popisuje příkop a kruhovou prohlubeň. To se místně nemusí shodovat s formulací aktuálního faktu („v lesích pod hrází Dalešické přehrady, poblíž silnice z Kramolína k elektrárně“). Před případným geokódováním je nutné vyřešit, zda jde o totožné místo; souřadnice nebyly doplněny. Zdroj: https://www.mestysbudisov.cz/e_download.php?file=data%2Feditor%2F66cs_97.pdf&original=200604bz.pdf
- `67508/fact_003` — oficiální historie Koutů potvrzuje postavení Amerikánského kříže roku 1874, ale neuvádí jeho umístění. Zatím bez bezpečného bodu. Zdroj: https://www.obeckouty.cz/o-obci/historie-obce/prehled-nejdulezitejsich-udalosti-od-zalozeni-1945
- `67532/fact_008` — web Jemnického mikroregionu potvrzuje kamenný sloup se čtyřmi kříži a čtyřmi hlavami „směrem na Budkov“, stále však bez přesnějšího bodu. Zatím ponecháno null. Zdroj: https://www.mikroregion.jemnice.cz/clenske-obce/obec-oponesice.html

U každého zbylého faktu dohledat konkrétní bod nebo vhodný veřejný orientační bod podle hierarchie prompt_rework a Content Standardu. Pokud bod nelze odpovědně doložit, ponechat null a zaznamenat důvod. Nezkoumat ani nepřeměřovat již neprázdné polohy; nekopírovat representative_point/access_point.
## 6. Další kontroly, které zůstávají otevřené

- Dokončit významovou kontrolu překladů de/en/es/fr/it/nl; ověřovat skutečné významové vady, nikoli stylistické preference.
- Rychlá kontrola zjevných duplicit a chybných přiřazení napříč 46 PSČ (dosud neuzavřeno).
- Ověřit správní údaje a sídlo obslužné pošty podle pravidel Content Standardu, pouze při konkrétním rozporu; neprovádět plošnou novou rešerši.
- 31/31 krátkých master textů opraveno a read-back ověřeno; zbývá 59 null poloh a dvě historická témata výše.
- Po každém zápisu načíst zpět pouze změněné PSČ/fakta. Nepoužívat opakované široké SELECT.
- Žádné publikování V5/published, žádná záloha Dropbox, žádný Neon import, žádný read-only lock bez samostatného výslovného pokynu.

## 7. Přesný další krok

31/31 krátkých českých master textů a jejich překladů bylo opraveno a read-back ověřeno. Další krok: projít 59 null poloh podle geografické hierarchie prompt_rework a Content Standardu; poté zapracovat/uzavřít témata Třebíč 1468 a Jemnice 1468. Neopakovat dokončené inventární kontroly ani již ověřené opravy.
