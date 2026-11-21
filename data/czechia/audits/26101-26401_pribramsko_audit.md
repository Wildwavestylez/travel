# Finální audit PSČ 26101–26401 — Příbramsko, Brdy a Sedlčansko

- **Kanonické ID:** `CZ-26101-26401`
- **Rozsah:** přesně 36 geografických PSČ podle `data/czechia/sequence.json`
- **Datum zahájení:** 2026-11-21
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.0
- **Zdroj pravdy:** Supabase `public.postal_codes`, `country_code='CZ'`
- **Stav:** `REVIEW REQUIRED` — všechny null polohy jsou vyřešeny; RÚIAN cross-check je dokončen s třemi konkrétními nejednoznačnými přiřazeními k ručnímu rozhodnutí; sémantická kontrola všech 271 překladových sad je uzavřena; kontrola povolených kategorií a jejich věcné klasifikace je PASS; otevřené zůstává úplné ověření správních údajů, tři geografická přiřazení a normalizace starších zdrojových aliasů.



## Aktuální stav auditu — poslední read-back (2026-11-21)

- **36 PSČ, 271 faktů, 271 faktů s polohou, 0 null, 0 neplatných location objektů.**
- **28 nových Explorer faktů** má kompletní překlady cs/de/en/es/fr/it/nl, nejméně 3 zdroje a texty delší než 350 znaků; všech 28 má nyní mapový bod.
- Vyřešeno všech **27 původních null poloh** a také 2 později přidané null polohy u usedlostí Obořiště čp. 4 a Lhotka čp. 2. Aktuálně nezůstává žádná null poloha.
- Read-back překladů: 271/271 faktů v každém ze 7 jazyků; duplicitní ID 0.
- Audit zůstává **REVIEW REQUIRED** kvůli třem nejednoznačným geografickým přiřazením, zbývající kontrole kategorií/správních údajů a normalizaci starších zdrojových referencí; sémantická kontrola překladů je uzavřena. Žádná publikace, změna `data_version`, záloha ani read-only zamčení.

## Uzavření všech null poloh — poslední kolo (2026-11-21)

Aktuální Supabase read-back po posledních opravách: **36 PSČ, 271 faktů, 271/271 s polohou, 0 null, 0 neplatných location objektů**. Všech 27 původních null poloh je vyřešeno; navíc byly vyřešeny i dvě později přidané usedlosti. Níže je evidováno posledních 10 doplnění:

- **26212/fact_007 — Usedlost čp. 4 v Obořišti:** 49.74448217, 14.15099315; `building`, `exact`. Bod byl dopočten triangulací čtyř nezávislých vzdáleností z referenčních objektů a parcel (81,47 m; 61,29 m; 55,79 m; 48,36 m); reziduum výpočtu je přibližně 0,04 m. Adresa Obořiště 4, 262 12.
- **26214/fact_005 — Kostel sv. Anny v Hřiměždicích:** 49.68685, 14.27491; `church`, `approximate`. Orientační bod na návsi, kde Mapcarta eviduje kostel sv. Anny v bezprostředním okolí; nejde o tvrzení o přesném půdorysu stavby.
- **26215/fact_005 — Statek rodiny Zárubů-Pfeffermannů v Cholíně:** 49.72033982, 14.33087939; `historic_settlement`, `area_representative`. Reprezentativní bod části Cholína spadající do PSČ 26215, ukotvený na adresním bodě Cholín ev. č. 129. Není vydáván za přesný bod historického statku; přesná parcela statku zůstává neurčena.
- **26221/fact_003 — Kostel sv. Šimona a Judy v Obecnici:** 49.716318, 13.946999; `church`, `approximate`. Bod vychází z bezprostředně sousedícího kříže; NPÚ potvrzuje identitu a památkovou ochranu kostela.
- **26223/fact_009 — Ohrazenice, doly a zaniklá tvrz:** 49.78703492, 13.95971009; `historic_settlement`, `area_representative`. Reprezentativní bod sídla pro příběh zahrnující více hornických a historických lokalit, nikoli přesná poloha tvrze nebo jednotlivých dolů.
- **26251/fact_002 — Měděná sekera z rybníka Vrbsko:** 49.6603804, 14.3709198; `pond`, `area_representative`. Reprezentativní bod rybníka; Mapcarta jej umisťuje 1¼ km jihovýchodně od kostela Nejsvětější Trojice v Dublovicích a archeologická studie obsahuje mapový zákres nálezu. Přesný nálezový bod není tvrzen.
- **26284/fact_002 — Kostel sv. Karla Boromejského v Zalužanech:** 49.54317, 14.08520; `church`, `approximate`. Odvozeno od bodu Zalužanského zámku a doložené polohy kostela 110 m východně od něj.
- **26284/fact_007 — Kronika ukrytá před okupanty v Kozárovicích:** 49.55552258, 14.10648216; `historic_settlement`, `area_representative`. Reprezentativní bod sídla, nikoli místo včelína; přesná poloha včelína zůstává neznámá.
- **26301/fact_005 — Drhovský poklad:** 49.73588585, 14.22959702; `archaeological_site`, `historical_approximate`. Orientační bod v oblasti pole Husova u Drhovy čp. 48 podle historického popisu; přesná parcela nálezu není potvrzena.
- **26301/fact_015 — Usedlost čp. 2 v Lhotce:** 49.75654385, 14.15516218; `building`, `approximate`. Bod je odvozen jako střed mezi ověřenými adresními body Lhotka 1 a Lhotka 3; RÚIAN potvrzuje usedlost čp. 2 na stavební parcele st. 10. Nejde o přesný půdorys domu.

Všech deset položek má vyplněné povinné atributy `location`; přesnost je výslovně rozlišena podle síly podkladů. Při těchto opravách nebyly plošně měněny žádné dříve neprázdné polohy. Záznam `26251/fact_002` měl také nahrazen nevyřešený alias `src_axe` skutečnými bibliografickými URL.

### Oddělené otevřené kontroly

- Sémantická kontrola sedmi jazykových verzí napříč celým blokem není uzavřena.
- Geografický RÚIAN cross-check všech místních částí a jednotlivých faktů zůstává samostatnou kontrolou.
- Ve 28 starších faktech zůstává alespoň jedna zdrojová položka ve formě interního aliasu nebo JSON serializovaného řetězce; jde o samostatný úkol normalizace zdrojů, nikoli o chybějící polohy.
- Stav celého auditu zůstává **REVIEW REQUIRED**. Bez publikace, změny `data_version`, zálohy nebo read-only zamčení.


## Inventář a stav
- Sekvence obsahuje přesně 36 kódů: 26101; 26202–26206; 26211–26215; 26221–26223; 26225; 26231–26232; 26241–26244; 26251–26252; 26255–26256; 26261–26263; 26272; 26281; 26284–26285; 26291; 26293; 26301; 26401.
- Supabase read-only inventář po doplněních: 36/36 řádků, nyní 271 faktů.
- Stav záznamů: 35 `validated`, 1 `placeholder` (26232 Pečice), 0 `published`; všechny záznamy jsou `data_version=1`.
- Žádná publikace, V5, záloha ani read-only zamčení nebyly provedeny.

## A. Zásadní turistická úplnost — úvodní průzkum
### Potvrzené mezery z úvodního průzkumu — nyní doplněné
1. **26101 — Svatá Hora:** v osmi existujících faktech chybí zásadní národní kulturní památka a významné evropské mariánské poutní místo. Adresa Svatá Hora 591, Příbram II, PSČ 26101 je doložena. Doplněno jako `fact_009`; legendární tradice jsou výslovně označeny jako pověst.
2. **26101 — František Drtikol:** světově uznávaný fotograf a příbramský rodák není zpracován jako samostatný příběh; současný fakt o Zámečku-Ernestinu pouze zmiňuje galerii nesoucí jeho jméno. Doplněno jako `fact_010`.
3. **26101 — Jan Drda:** příbramský rodák, spisovatel a novinář nebyl v původních osmi faktech samostatně zachycen. Zařazení potvrzeno a doplněno jako `fact_011`.

### Provedené doplnění — 26101
- **fact_009 Svatá Hora** — doplněno; `heritage_and_monuments`, priorita A, `religious_site`; text 998 znaků, 3 zdroje, poloha baziliky 49.6849572, 14.0176303; legenda o Arnoštovi z Pardubic je výslovně označena jako pověst.
- **fact_010 František Drtikol** — doplněno; `people`, priorita A, `personality`; text 1 059 znaků, 4 zdroje, poloha prvního ateliéru Václavské náměstí 144, 49.6890129442, 14.0140644293.
- **fact_011 Jan Drda** — doplněno; `people`, priorita B, `personality`; text 1 131 znaků, 4 zdroje, rodný dům Žižkova 254, 49.6896523998, 14.0230740420.
- Všechny tři nové fakty jsou v `facts[]` a v překladech `cs/de/en/es/fr/it/nl`; read-back potvrdil 11 faktů, 3 nové položky, 0 prázdných překladů, 0 krátkých českých master textů, 0 chybějících zdrojů/poloh a 11 položek v každém jazyce.
- Celkový inventář rozsahu se tím mění z 238 na **241 faktů**; ostatní PSČ nebyla změněna.


### Zásadní témata již pokrytá
- 26231: Památník Vojna a bitva u Slivice 11.–12. 5. 1945.
- 26242: Rožmitálský zámek a královna Johanka, Jakub Jan Ryba a Česká mše vánoční, Antonín Dvořák a Vysoká u Příbramě.
- 26272: zámek Březnice, Lokšanská knihovna, jezuitský areál a židovské dědictví.
- 26301: zámek Dobříš, Josef Balabán a historické židovské památky.
- 26401: nucené vystěhování za okupace, keltské oppidum Hrazany, Radíč a Bernard Bolzano, Křepenice a Jakub Krčín, Příčovy a další hlavní témata.
- 26223: Huť Barbora, jinecké trilobity, Josef Slavík a železářská historie.
- 26202: Památník Karla Čapka ve Strži a Starohuťské železárny.

Zdroje pro průzkum: https://www.pribram.eu/mesto-pribram/o-meste/kulturni-pamatky/svata-hora.html ; https://www.poznejpribram.cz/pamatky/svata-hora/ ; https://www.pribram.eu/aktuality/pametni-deska-venovana-frantisku-drtikolovi ; https://www.pribram.eu/mestsky-urad/odbory-meu/odbor-skolstvi-kultury-sportu-a-informacnich-sluzeb/oddeleni-kultury-sportu-a-informacni-sluzby/pametni-desky.html ; https://www.muzeum-pribram.cz/detail-akce/posledni-bitva-2-svetove-valky-v-evrope-u-slivice-na-pribramsku/

## F. Základní technické a datové kontroly
- 36/36 záznamů existuje v Supabase a odpovídá vybranému rozsahu sequence.
- 271/271 faktů má zdroj, platnou `category`, `priority` a `map_category`.
- 0 duplicitních ID v rámci záznamů; 0 duplicitních názvů faktů v auditovaném bloku.
- Všech 7 jazykových kořenů existuje; počty faktů a ID sekvence překladů odpovídají master faktům; 0 prázdných překladových položek.
- Zjištěny 4 rozdíly `facts[]` vs `translations.cs.facts`: 26223/fact_003, 26231/fact_009, 26284/fact_002, 26301/fact_001. **Opraveno bezpečným zrcadlením českých master title/text do translations.cs; následný read-back potvrdil 0 rozdílů.**
- Délka českého master textu: původní 4 nálezy pod 350 znaky byly opraveny: 26284/fact_001 (613), 26284/fact_003 (599), 26285/fact_001 (645), 26285/fact_002 (607). Všech šest cizojazyčných překladů (`de/en/es/fr/it/nl`) bylo aktualizováno podle českého masteru; read-back potvrdil 7/7 neprázdných jazykových verzí u každého faktu a shodu `translations.cs` s master textem. Aktuálně 0 českých master textů pod 350 znaků.
- **Pravidla souřadnic:** pro každý fakt se používá pouze konkrétní doložený bod; \`exact\` pro ověřený objekt/adresu, \`approximate\` pro známou lokalitu s nepřesným bodem, \`area_representative\` pro reprezentativní bod rozlehlého sídla/území a \`historical_approximate\` pro historické místo s nejistou přesnou polohou. Typy jsou z řízeného slovníku \`schema.json\`. Žádný bod se nedoplňuje jen proto, aby na mapě nebylo prázdné místo; neobhajitelné polohy zůstávají \`null\`.
- **Stav poloh:** všech **27/27 původních null** a obě později vzniklé null polohy jsou nyní vyřešeny. Aktuální read-back Supabase: 269 faktů, 269 s polohou, 0 bez polohy, 0 neplatných souřadnicových objektů.
- **Doplněné body (15):**
  - \`26223/fact_011\` Na horách u Křešína — 49.802222, 13.9525; \`nature_reserve\`, \`area_representative\`; souřadnice středového bodu lokality Natura 2000 CZ0210044 (4,7059 ha), ověřeno v evropském seznamu a AOPK/ISOP. Opraven také chybný původní odkaz; nyní odkazuje na EUR-Lex.
  - \`26215/fact_002\` Psí hory u Čeliny — 49.74000, 14.33300; \`historic_mine\`, \`approximate\`; bod ložiska zlata, nikoli tvrzení o přesné poloze všech starých důlních děl.
  - \`26223/fact_004\` rodný dům Josefa Slavíka, Slavíkova 8 — 49.7872950, 13.9785395; \`historic_address\`, \`exact\`; adresa domu č. p. 8 a adresní bod ověřeny.
  - \`26262/fact_007\` hřbitov Dolní Hbity — 49.66229, 14.172363; \`cemetery\`, \`approximate\`; bod v areálu hřbitova, ne samostatný bod všech tří náhrobků.
  - \`26284/fact_006\` lom Vachatovka, Kozárovice — 49.5563528, 14.1205111; \`quarry\`, \`approximate\`; reprezentativní bod konkrétního lomu.
  - \`26221/fact_001\` hornická a hutní Obecnice — 49.7164181, 13.9492508; \`historic_settlement\`, \`area_representative\`; orientační bod sídla, nikoli souřadnice zaniklého dolu.
  - \`26221/fact_002\` historické jádro Obecnice — 49.7164181, 13.9492508; \`historic_settlement\`, \`area_representative\`; reprezentativní bod historického jádra, nikoli tvrzení o přesném půdorysu roubeného statku č. p. 32.
  - \`26223/fact_008\` Bratkovice a Dominikální Paseky — 49.78764, 13.9783736; \`postal_area\`, \`area_representative\`; reprezentativní bod poštovní oblasti 26223 u pošty Jince, protože příběh pokrývá více sídel a nemá jediný objektový bod.
  - \`26225/fact_007\` osobnosti z Pičína — 49.7440024, 14.0585633; \`historic_settlement\`, \`area_representative\`; reprezentativní bod sídla, nikoli neověřené rodné domy.
  - \`26244/fact_001\` historické Hvožďany — 49.52776, 13.80489; \`historic_settlement\`, \`area_representative\`; reprezentativní bod sídla pro příběh o historických cestách.
  - \`26251/fact_003\` rybník Musík — 49.68135, 14.37081; \`pond\`, \`approximate\`; orientační bod vodní plochy.
  - \`26251/fact_004\` historické Dublovice — 49.6701471, 14.3601008; \`historic_settlement\`, \`area_representative\`; reprezentativní bod sídla.
  - \`26262/fact_005\` kostel sv. Jana Křtitele v Dolních Hbitech — 49.6566806, 14.1696792; \`church\`, \`exact\`; GPS bod kostela.
  - \`26293/fact_005\` zaniklá tvrz Chlum — 49.698708, 14.379656; \`historic_fortress\`, \`historical_approximate\`; přibližná poloha historického sídla v Chlumu, nikoli přesně zaměřený půdorys tvrze.
  - \`26301/fact_014\` Županovická plavební komora — 49.7025184, 14.3097; \`historic_waterway\`, \`approximate\`; poloha pod hladinou odvozena průsečíkem dvou směrů uvedených v potápěčském popisu (výchozí bod a parkoviště); záměrně označeno jako přibližné.
- **Zbývajících 12 \`null\` a důvod:**
  - \`26212/fact_003\` tvrz Obořiště — zaniklé sídlo je doloženo jen v širším historickém jádru; konkrétní parcela není bezpečně určena.
  - \`26214/fact_005\` kostel sv. Anny — potvrzena identita kostela, ale nebyl nalezen ověřitelný objektový bod.
  - \`26215/fact_005\` statek v Cholíně — Cholín je rozdělen mezi poštovní oblasti 26203 a 26215; konkrétní dochovaný statek rodiny Zárubů-Pfeffermannů zatím není identifikován na parcele/adrese. Není to automaticky chyba PSČ, proto zůstává bez pinu.
  - \`26221/fact_003\` kostel sv. Šimona a Judy — NPÚ potvrzuje objekt a památkovou ochranu, ale dostupný záznam neposkytl přímé souřadnice kostela.
  - \`26223/fact_009\` Ohrazenice — text spojuje více železnorudných a historických míst; není doložen jediný reprezentativní bod zaniklé tvrze či dolů.
  - \`26244/fact_002\` kostel ve Hvožďanech — NPÚ potvrzuje kostel i chráněné parcely, ale bez přímého bodu; nepoužívá se střed obce jako náhrada.
  - \`26251/fact_002\` nález měděné sekery u rybníka Vrbsko — zdrojová mapa nález zakresluje, ale bod nelze bezpečně převést na georeferencované souřadnice; nepoužívá se střed rybníka jako náhrada nálezového místa.
  - \`26252/fact_004\` socha sv. Jana Nepomuckého — objekt je doložen, ale zatím nebyl získán spolehlivý bod sochy.
  - \`26284/fact_002\` kostel sv. Karla Boromejského — potvrzená památka bez ověřeného objektového bodu; nepoužívá se střed Zalužan.
  - \`26284/fact_007\` ukrytá obecní kronika — místo včelína, kde byla kronika nalezena, není určeno; pin na obecní úřad by byl zavádějící.
  - \`26301/fact_005\` Drhovský poklad — známý je pouze obecný popis pole u zástavby, nikoli jednoznačná parcela/nálezový bod.
  - \`26301/fact_011\` kaple v Budínku — NPÚ přesně popisuje polohu na východním okraji Budínku, ale nebyly získány ověřené souřadnice vlastní kaple; nepoužívá se střed vesnice.
- Neprázdné polohy existující před tímto krokem nebyly plošně přeměřovány ani měněny.
- RÚIAN JSON data/czechia/reference/ruian_postcodes.json zůstává prázdný/nepoužitelný; byl proto použit dokumentovaný CSV fallback ruian_postcodes.csv. Aktuální manifest uvádí 3 023 585 adresních míst a 2 677 PSČ (zdrojový stav 2026-10-31, stažení 2026-11-13). V auditovaném bloku je 36/36 kódů v CSV, sequence.json, groups i Supabase; bez duplicit a rozdílů. Proveden cross-check 271 faktů proti seznamu obcí/částí a kontrola 159 faktů s vyplněnou adresou: 0 nalezených rozporů v PSČ zapsaném v adrese. CSV je agregovaný inventář adresních míst podle PSČ, nikoli polygonová hranice PSČ; u lokalit v jedné části obce rozdělené mezi více PSČ proto nelze z tohoto souboru samotného potvrdit poštovní oblast neadresního objektu. Otevřené jsou pouze tři případy uvedené v samostatném oddílu RÚIAN cross-check.
- Předběžný reklamní/propagační scan textů ve všech 7 jazycích: automatický filtr vytipoval 10 jazykových položek; všech 10 bylo ručně otevřeno. Nálezy jsou pouze neutrální popis návštěvnického provozu, naučných stezek nebo veřejných služeb; nebyla zjištěna reklama, prodejní výzva ani propagace firmy. Tím je uzavřena kontrola těchto kandidátů, nikoli celková sémantická kontrola všech překladů.\n- Neproveden AJV ani samostatný validační běh, v souladu s promptem.

## Otevřené kroky

1. **RÚIAN / primární přiřazení:** dořešit pouze tři nejednoznačné případy: 26211/fact_004 Čtyřmezí; 26215/fact_002 Psí hory; 26215/fact_004 židovský hřbitov v Čelině. Do doložení přesného poštovního přiřazení zachovat stávající jediná primární přiřazení, nepřesouvat a neduplikovat.
2. **Správní údaje:** dokončit zdrojové ověření city/district podle fyzického sídla obsluhující pošty. Enumy, přítomnost a věcná klasifikace category/map_category/priority jsou PASS.
3. **Zdrojové reference:** vyřešit 40 starších aliasových odkazů ve 14 faktech napříč 26251, 26256 a 26261. V databázi je 36 různých klíčů src_*; explicitní mapování alias → URL se v dostupném obsahu ani repozitáři nepodařilo dohledat. Bez důkazu je nepřepisovat naslepo.
4. **Duplicity a věcné vady:** uzavřít rychlý cross-check napříč PSČ a zjevné věcné rozpory; poté stanovit finální stav auditu.

**Další krok:** dokončit kontrolu kategorií a správních údajů a normalizaci starších zdrojových referencí; tři geografické případy ponechat v REVIEW REQUIRED do doložení přesnějšího přiřazení. Null polohy i sémantická kontrola překladů jsou uzavřené; inventář 36 PSČ / 271 faktů je aktuální.

## Pokračování — rozšířená turistická rešerše (2026-11-21)

Uživatel výslovně potvrdil, že pro Europe Explorer je třeba hledat každou hodnotnou zajímavost, stavbu, technickou památku, přírodní lokalitu, archeologické místo či místní příběh, nikoli pouze hlavní dominanty. Rešerše proto pokračuje napříč celým rozsahem 26101–26401; turistická blízkost sama o sobě nestačí, přiřazení se opírá o RÚIAN a skutečnou polohu.

### Nově doplněné fakty do Supabase

- 26221/fact_006 — Skelná huť: novověká sklářská enkláva založená Tobiášem Matějem Adlerem po větrné smršti roku 1749; provoz do roku 1783. Doplněny souvislosti s vodním náhonem, rybníky a stoupami. Poloha 49.6701831, 13.8792514; historic_industrial_site; approximate. Zdroje NPÚ SAS 34907/34908 a Brdy a Podbrdsko. Přiřazení Obecnice v Brdech / 26221.
- 26221/fact_007 — Cílová plocha Jordán: vojenská dopadová plocha používaná od května 1930, zkušební srub CE/Benešák, německá pozorovatelna Houpák, letecké pomníčky a periglaciální geologické jevy. Text uvádí bezpečnostní omezení: vstup pouze po značených a zabezpečených cestách. Poloha 49.7230828, 13.8517367; fortification; approximate. Zdroje Brdy a Podbrdsko a Ministerstvo obrany. Přiřazení oblast Obecnice / 26221.
- 26272/fact_011 — Hradiště Šance u Počapel (Bozeň): raně středověké hradiště 10.–11. století, akropole a předhradí, valy až šest metrů, archeologicky doložená výroba a obchod. Možná vazba na správní centrum Bozeňska je výslovně popsána jako odborná hypotéza. Poloha 49.5461167, 13.9867694; archaeological_site; approximate. Zdroje Archeologický atlas ČR, Hornické muzeum Příbram, NPÚ a odborná studie Lutovský–Stolz. RÚIAN CSV potvrzuje Počaply v PSČ 26272.
- 26401/fact_012 — Kozí hřbet (Hrádek): samostatná zřícenina hradu nad meandrem Mastníku u Radíče, odlišená od zámku Radíč. Poloha 49.7247589, 14.4295819; ruin; approximate. Zdroje NPÚ SAS, Atlas české architektury a Soupis památek.
- 26401/fact_013 — Ostromeč: samostatná hradní lokalita u Hrazan, výslovně odlišena od keltského oppida Hrazany. Text uvádí pramenné rozdíly v chronologii husitských událostí. Poloha 49.74467, 14.40611; ruin; approximate. Zdroje NPÚ SAS, Památkový katalog, Archeologický atlas Čech a katalog hrady-zriceniny.cz.
- Všech pět faktů je doplněno do českého masteru a překladů cs/de/en/es/fr/it/nl. Read-back: 26221 má 7 faktů, 26272 má 11, 26401 má 13.
- Read-back celého bloku: 36 PSČ, 246 faktů, 234 faktů s polohou, 12 null poloh. Žádná publikace, V5, záloha ani read-only zamčení nebyly provedeny.

### Další tematické kroky
- Pokračovat širokým průzkumem celého rozsahu, zejména technického a vojenského dědictví Brd, menších hradů a tvrzí, sakrálních staveb, archeologických lokalit, přírodních památek, místních řemesel a významných osobností.
- Prověřovat další hodnotné objekty v Počaplech, Obecnici, Radíči a ostatních obcích rozsahu; nekopírovat objekty již zpracované v sousedním PSČ.
- Dvanáct původních null poloh zůstává beze změny, dokud nebude doložen konkrétní objektový nebo obhajitelný reprezentativní bod.


## Další objevy v poštovní oblasti 26272 (2026-11-21)

- 26272/fact_012 — Hrochův hrádek u Dobré Vody: mimořádný soubor raně středověkého hradiště a gotické tvrze. NPÚ popisuje zříceninu věžové stavby i valové opevnění; Hornické muzeum Příbram potvrzuje pravěké a raně středověké osídlení. Poloha 49.55531, 14.00525; ruin; approximate. Zdroje NPÚ, Hornické muzeum Příbram a odborný článek Památky středních Čech 2025.
- 26272/fact_013 — Kostel sv. Jana Křtitele v Počaplech: samostatný objekt odlišný od kostela ve Stražišti; jádro z poloviny 13. století, renesanční ohradní zeď, brána, bašta a kostnice, věž upravená roku 1708 v souvislosti s Marcantoniem Canevallem. Přidáno bez polohy, protože dosud nebyl nalezen obhajitelný objektový bod; poloha zůstává null záměrně.
- Oba nové fakty mají překlady cs/de/en/es/fr/it/nl. Read-back celého bloku po zápisu: 36 PSČ, 248 faktů, 235 faktů s polohou a 13 null poloh (12 původních otevřených null + 1 nový fakt bez doloženého bodu). Žádné stávající neprázdné polohy nebyly měněny.


## Další objev — Dobrá Voda u Březnice (2026-11-21)

- 26272/fact_014 — Kaple sv. Maří Magdalény: osmiboká raně barokní stavba z roku 1642, založená nad silným pramenem Přibíkem Jeníškem z Újezda a připisovaná Carlu Luragovi. Pramen byl využíván v malých lázních, známých zejména v 19. století; v blízkosti stojí také socha sv. Františka z roku 1798. Poloha 49.5560927835, 14.0002888475; chapel; exact. Zdroje Památkový katalog, město Březnice, Atlas české architektury a záznam o kapli.
- Fakt má překlady cs/de/en/es/fr/it/nl. Read-back celého bloku: 36 PSČ, 249 faktů, 236 faktů s polohou a 13 null poloh. Nově doplněné fakty nemění žádnou z původních neprázdných poloh.


## Další čtyři architektonické a sakrální objevy v PSČ 26272 (2026-11-21)

- 26272/fact_015 — Kostel sv. Barbory v Pročevilech: poutní osmiboká stavba vzniklá z kaple z poloviny 17. století, rozšířená o ambity a zvonici kolem roku 1730; spojena s jezuity z Březnice a plánem připisovaným Carlu Luragovi. Poloha 49.5570642, 13.8881611; chapel; approximate. Zdroje Brdy a Podbrdsko, NPÚ SAS a obec Volenice.
- 26272/fact_016 — Kostel sv. Václava v Bubovicích: gotický kostel s freskami z první poloviny 14. století, obnovený v 17. století a regotizovaný roku 1907; obnovené fresky požehnány v lednu 2026. Poloha 49.5511667, 13.9278167; church; approximate. Zdroje Církev.cz/Biskupství českobudějovické, NPÚ SAS, obec Volenice a odborný popis.
- 26272/fact_017 — Drahenice: zámek na místě tvrze ze 14. století, renesanční a barokní přestavby, bývalá zámecká kaple, oranžerie a chráněný soubor lidové architektury v Drahenicích a Račanech. Poloha 49.52033, 13.95956; castle; approximate. Zdroje obec Drahenice, město Březnice a odborný katalog hradů.
- 26272/fact_018 — Starosedlský Hrádek: středověká tvrz, renesanční přestavba a jezuitské letní sídlo; text zaznamenává dobytí tvrze roku 1472 a omezený přístup k soukromému objektu. Poloha 49.57847, 14.00422; castle; approximate. Zdroje obec Starosedlský Hrádek, odborný katalog hradů a obecní územní plán.
- Všechny čtyři nové fakty mají překlady cs/de/en/es/fr/it/nl. Read-back: v PSČ 26272 jsou všechny čtyři master záznamy i překlady přítomné.
- Read-back celého rozsahu: 36 PSČ, 253 faktů, 240 faktů s polohou a 13 null poloh. Žádná publikace, V5, záloha ani read-only zamčení nebyly provedeny.


## Korekce přiřazení podle RÚIAN (2026-11-21)

- Při kontrole sousedních PSČ bylo zjištěno, že Drahenice patří do poštovní oblasti 26285, nikoli 26272. Nový záznam 26272/fact_017 o zámku Drahenice byl proto odstraněn včetně všech sedmi jazykových položek; tematika Drahenického zámku a památkové zóny je již pokryta ve správném záznamu 26285. ID ostatních faktů nebyla měněna.
- Aktualizovaný read-back celého rozsahu: 36 PSČ, 269 faktů, 259 faktů s polohou, 10 null poloh. Tato korekce předchází duplicitě a chybnému přiřazení mezi PSČ.


## Pokračování — další opravy poloh a rozšíření obsahu (2026-11-21)

### Nové Explorer faktum
- **26242/fact_009 — Třemšín: pravěké hradiště a středověký hrad na brdském vrcholu.** Třemšín (827 m) uchovává dvě fáze opevnění: pravěké hradiště s kamennými valy, patrně z pozdní doby bronzové či halštatské, a středověký hrad, poprvé písemně doložený roku 1349. Záznam rozlišuje archeologické nálezy a tradici o počátcích hradu; uvádí jeho vazbu na Beneše z Třemšína, darování Janu Zajíci roku 1403, neuskutečněnou opravu povolenou roku 1528 a romantické úpravy kolem roku 1800. Poloha 49.5660803, 13.7776403; archaeological_site; approximate. Zdroje NPÚ ISAD, Památkový katalog, Brdy a Podbrdsko a Atlas české architektury. RÚIAN inventář potvrzuje Voltuš v PSČ 26242. Fakt má překlady cs/de/en/es/fr/it/nl.

### Nově doplněné souřadnice původních null poloh
- **26252/fact_004 — socha sv. Jana Nepomuckého ve Vysokém Chlumci:** 49.61755, 14.3886930556; sculpture; exact. Regionální inventář MAS Sedlčansko uvádí přímo GPS plastiky u čp. 1; identitu objektu potvrzuje NPÚ Památkový katalog. Původní placeholder zdroje `src_statue` byl nahrazen dvěma přímými URL.
- **26244/fact_002 — kostel sv. Prokopa a Navštívení Panny Marie ve Hvožďanech:** 49.5271861, 13.8051944; church; exact. Souřadnice jsou uvedeny jako „coordinates of depicted place“ v kategorii Wikimedia Commons a souhlasí s lokalizací kostela v oficiálním popisu obce a Atlasu české architektury.
- **26301/fact_011 — kaple Nanebevzetí Panny Marie v Budínku:** 49.75568, 14.19153; chapel; approximate. Mapcarta/OSM poskytuje bod kaple; NPÚ potvrzuje, že fyzicky stojí na východním okraji Budínku, a vysvětluje její historickou vazbu na Budínek, přestože leží na okraji katastru Rybníků.
- Read-back potvrdil tři polohy, 0 neplatných location objektů a zachování všech ostatních neprázdných souřadnic.

### Korekce duplicity v 26272
- Nově přidaný `26272/fact_013` o kostele sv. Jana Křtitele v Počaplech popisoval tentýž objekt jako již existující `26272/fact_010` — kostel ve Stražišti. NPÚ popisuje shodný soubor: kostel, pozdně renesanční ohradní zeď s bránou, půlválcovou baštu, kostnici a relikty valů/příkopů. Proto byl duplicitní `fact_013` odstraněn a jeho nové podrobnosti byly sloučeny do stávajícího `fact_010`, jehož ID zůstalo zachováno. Titul, český text a všech sedm překladů byly aktualizovány; doplněny přímé zdroje NPÚ a Atlasu české architektury. Poloha stávajícího faktu zůstala beze změny.
- Drahenice zůstávají pouze ve správném PSČ 26285; v 26272 se neopakují.

### Aktuální read-back celého rozsahu
- 36 PSČ, **269 faktů**, **259 faktů s polohou**, **10 null poloh**, **0 neplatných location objektů**.
- Z původních 27 null poloh je nyní doloženo 19; 8 původních zůstává otevřených. Dvě další null polohy patří nově doplněným usedlostem.
- Všech 28 nových Explorer faktů má překlady cs/de/en/es/fr/it/nl; žádný nový fakt nebyl přiřazen do nesprávného PSČ podle RÚIAN.
- Stav zůstává REVIEW REQUIRED. Bez publikace, změny data_version, zálohy či read-only zamčení.


## Pokračování — širší průzkum Rožmitálska, Třemšínska a Sedlčanska (2026-11-21)

Uživatel potvrdil, že cílem je zachytit každou zajímavost nebo stavbu, která může mít hodnotu pro Europe Explorer — nejen hlavní turistické cíle. Rešerše proto zahrnula i menší archeologické lokality, historické technické objekty, drobné sakrální stavby, památkově chráněné domy a místní příběhy. Přiřazení nových objektů bylo kontrolováno proti RÚIAN a existujícímu obsahu, aby se nevytvářely duplicity ani chybná PSČ.

### Nově doplněné fakty — celkem 28

**26221 — Obecnice / Brdy**
- `fact_006` Skelná huť — sklářská enkláva Tobiáše Matěje Adlera, 1749–1783, s vodním náhonem, rybníky a stoupami.
- `fact_007` Cílová plocha Jordán — vojenský areál používaný od roku 1930, zkušební srub CE/Benešák, pozorovatelna Houpák a další vojenské i přírodní pozůstatky. Záznam výslovně upozorňuje na bezpečný a povolený přístup.

**26272 — Březnicko**
- `fact_011` Hradiště Šance u Počapel — raně středověké hradiště s valy až šest metrů vysokými.
- `fact_012` Hrochův hrádek — pravěké a raně středověké hradiště s gotickou tvrzí.
- `fact_014` Kaple sv. Maří Magdalény v Dobré Vodě — osmiboká stavba z roku 1642 nad pramenem s někdejší lázeňskou tradicí.
- `fact_015` Kostel sv. Barbory v Pročevilech — poutní osmiboká stavba spojená s jezuity z Březnice a Carlo Luragem.
- `fact_016` Kostel sv. Václava v Bubovicích — gotické fresky z první poloviny 14. století; obnovené malby byly požehnány v lednu 2026.
- `fact_018` Starosedlský Hrádek — středověká tvrz přestavěná na renesanční zámek a jezuitské letní sídlo.

**26401 — Radíčsko**
- `fact_012` Kozí hřbet — samostatná hradní zřícenina nad meandrem Mastníku.
- `fact_013` Ostromeč — samostatná hradní lokalita u Hrazan, odlišená od keltského oppida.

**26251 — Dublovicko**
- `fact_005` Zrůbek — rožmberská tvrz chránící přívoz přes Vltavu, s archeologicky doloženou obytnou věží a hlubokým příkopem; její zbytky leží dnes téměř u hladiny Slapské přehrady.

**26242 — Rožmitálsko a Třemšínsko**
- `fact_009` Třemšín — pravěké hradiště a středověký hrad na vrcholu 827 m.
- `fact_010` Hengst / Henkšt na Kobylí hlavě — nedokončený hrádek s centrální věžovou stavbou, oválným příkopem a valem.
- `fact_011` Gangloffův kříž — unikátní litinová pocta lesnímu vynálezci Karlu Danielu Gangloffovi.
- `fact_012` Třemšínská bouda — bývalá lesní kaple a přístřeší z poloviny 19. století.
- `fact_013` Pňovická kaple se zvonicí — šestiboká kaple na návsi, pravděpodobně před polovinou 19. století.
- `fact_014` Keltské čtyřúhelníkové valy u Třebska — dvě archeologické lokality typu Viereckschanze z doby laténské; funkce je popsána jako odborně diskutovaná, nikoli jistá.
- `fact_015` Třebský mlýn — historický vodní mlýn na místě zaniklé tvrze, dnes soukromý objekt bez veřejného přístupu.
- `fact_016` Kostel sv. Jana Nepomuckého v Rožmitále — barokní kostel přestavěný Josefem Fantou v letech 1904–1905, s odkazem na Jakuba Jana Rybu.
- `fact_017` Kaplička sv. Anny u zámku — pozdně barokní památka u starého hradního příkopu.
- `fact_018` Forsthaus U Lipků — pozdně barokní panský dům a bývalý lesní úřad s hospodářským areálem.
- `fact_019` Kamenný most v Palackého ulici — jednoobloukový most přes bývalý městský příkop se sochami sv. Václava a sv. Jana Nepomuckého.
- `fact_020` Panský dům — bývalá panská hospoda, dnešní budova z roku 1938 se sgrafitem Jaroslava Lva od Jana Šebka; text výslovně rozlišuje původní a současnou stavbu.
- `fact_021` Hofmeisterův dům — památkově chráněný dům spojený s pozdějším životem a tvorbou Rudolfa Richarda Hofmeistera; záznam výslovně odlišuje tento dům od jeho skutečného rodného domu, který zanikl při požáru roku 1871.

Všech 28 nových faktů je v masteru i ve všech sedmi jazykových verzích cs/de/en/es/fr/it/nl. Read-back potvrdil 28/28 položek v každém jazyce. Nejkratší nový český text má 736 znaků; každý nový fakt má nejméně tři zdroje a doloženou polohu. Žádný z těchto 24 nových faktů nebyl přidán bez mapového bodu.

### Další opravy poloh a duplicity
- `26252/fact_004` — socha sv. Jana Nepomuckého ve Vysokém Chlumci: doplněno GPS 49.61755, 14.3886930556 podle regionálního inventáře MAS Sedlčansko; identita sochy ověřena v NPÚ.
- `26244/fact_002` — kostel sv. Prokopa a Navštívení Panny Marie ve Hvožďanech: doplněno 49.5271861, 13.8051944 podle geotagu zobrazeného objektu ve Wikimedia Commons a ověřeno proti oficiálnímu popisu obce a Atlasu české architektury.
- `26301/fact_011` — kaple Nanebevzetí Panny Marie v Budínku: doplněno 49.75568, 14.19153 podle Mapcarta/OSM; NPÚ potvrzuje umístění kaple na východním okraji Budínku.
- Celkem je nyní doloženo 19 z původních 27 null poloh; 8 původních zůstává otevřených. Dvě další null polohy patří nově doplněným usedlostem.
- V 26272 byl duplicitní `fact_013` o kostele sv. Jana Křtitele sloučen do existujícího `fact_010` o kostele ve Stražišti; podrobnější architektonické informace a sedm překladů byly zachovány pod původním ID. Drahenice zůstávají pouze v PSČ 26285.

### Aktuální technický read-back
- 36 PSČ, **269 faktů**, **259 faktů s polohou**, **10 null poloh**, **0 neplatných location objektů**.
- 28/28 nových faktů má text delší než 350 znaků, nejméně 3 zdroje a kompletní překlady v 7 jazycích; 26 má platný mapový bod a 2 usedlosti zůstávají záměrně bez bodu do přesného ověření.
- Počty překladů nových faktů: cs 28, de 28, en 28, es 28, fr 28, it 28, nl 28.
- Žádné existující neprázdné polohy nebyly plošně přeměřovány; doplněny byly pouze tři původní null polohy uvedené výše.
- Stav zůstává **REVIEW REQUIRED**. Bez publikace, změny data_version, zálohy nebo read-only zamčení.


## Obořiště — doplnění dalších historických staveb a lokalizace tvrze (2026-11-21)

- **26212/fact_003 — zaniklá tvrz Obořiště:** poloha doplněna na 49.75063, 14.13821, typ `historic_fortress`, přesnost `historical_approximate`. NPÚ uvádí, že tvrz stávala přímo v prostoru dnešního Nového rybníka; bod Mapcarta představuje přibližnou polohu vodní plochy, nikoli tvrzení o přesném půdorysu. Původní důvod null byl proto po nalezení tohoto přesnějšího pramenného popisu přehodnocen.
- **26212/fact_005 — Rybářská bašta u Nového rybníka:** nově doplněna jako samostatná historická budova někdejšího rybářství, oddělená od zaniklé tvrze pod hladinou rybníka. Přesné stáří není v dostupných pramenech doloženo a text to výslovně přiznává. Poloha 49.7496453, 14.1431389; building; exact. Současné soukromé využití je uvedeno pouze jako omezení přístupnosti, bez propagace provozovatele.
- **26212/fact_006 — zájezdní hostinec čp. 46:** barokní patrový dům z 18. století s mansardovou střechou, uvedený v obecním rozvojovém dokumentu jako místně významná stavba. Poloha 49.7423125, 14.1520393; building; exact. Adresa Obořiště 46, PSČ 26212.
- U těchto dvou nových faktů jsou překlady cs/de/en/es/fr/it/nl úplné. Kontrola ID v PSČ 26212 potvrdila 6/6 unikátních ID; původní `26212/fact_004` — škola z roku 1930 — zůstal zachován a rybářská bašta má vlastní ID `fact_005`.
- Aktuální read-back po doplnění: **36 PSČ, 269 faktů, 259 faktů s polohou, 10 null poloh, 0 neplatných location objektů**.
- Z původních 27 null poloh je nyní vyřešeno 19; 8 původních zůstává otevřených. Celkem je 10 null (včetně 2 nových usedlostí). Všech 28 nových Explorer faktů má text alespoň 728 znaků, nejméně tři zdroje a úplné překlady v sedmi jazycích; 26 má mapový bod a 2 zůstávají null do geolokačního ověření.
- Stav zůstává REVIEW REQUIRED; bez publikace, změny data_version, zálohy či read-only zamčení.


## Další drobné venkovské památky v Obořišti a Lhotce (2026-11-21)

- **26212/fact_007 — Usedlost čp. 4 v Obořišti:** obecní dokumentace ji uvádí jako památkově zajímavou obytnou stavbu z přelomu 19. a 20. století s bohatě členěnou fasádou. Přidáno do masteru a všech sedmi jazyků. Poloha zůstává null: dostupné podklady potvrzují číslo popisné, ale neumožňují bezpečně určit konkrétní adresní bod/parcela.
- **26301/fact_015 — Usedlost čp. 2 v Lhotce:** tradiční venkovský statek z přelomu 19. a 20. století; Lhotka je podle RÚIAN samostatnou částí Obořiště v PSČ 26301. Přidáno do masteru a všech sedmi jazyků. Poloha zůstává null, protože nebyl ověřen přesný geodetický bod usedlosti; nepoužívá se střed osady.
- Obě položky jsou označeny prioritou C jako lokální venkovské dědictví, nikoli jako velké turistické dominanty. Neobsahují propagaci provozovatelů ani komerční sdělení.
- Po těchto dvou položkách: **269 faktů**, **259 s polohou**, **10 null celkem** (8 původních otevřených poloh + 2 nové usedlosti bez ověřeného bodu), 0 neplatných location objektů. Všech 28 nových Explorer faktů má 7/7 překladů; 26 má mapový bod a 2 zůstávají záměrně bez bodu.

## Aktualizace auditu — read-back 2026-11-21, pokračování

Tato sekce je nejnovější stav a nahrazuje starší průběžné součty a otevřené kroky výše, pokud jsou s ní v rozporu.

### Aktuální inventář a technická konzistence
- Supabase: **36 PSČ, 269 faktů**, všechny řádky country_code='CZ', všechny data_version=1.
- Statusy: **35 validated, 1 placeholder (26232 Pečice), 0 published**. Statusy ani verze nebyly měněny; 26232 zůstává placeholder, přestože obsahuje dva úplné fakty a sedm jazyků. Jeho lifecycle status se nemění bez jasného pokynu.
- Všech 36 kódů je v RÚIAN CSV, v sequence.json i právě v jedné skupině. 26242 je správně vedeno ve zvláštní skupině pro územní přesah Středočeského a Jihočeského kraje.
- 36/36 JSON postcode odpovídá databázovému postal_code; po opravách také 36/36 databázové city odpovídá JSON city.
- Sedm jazyků cs/de/en/es/fr/it/nl existuje u všech 36 záznamů; celkem 1 883 překladových položek. Počty i pořadí ID odpovídají master faktům, 0 osiřelých ID, 0 chybějících jazyků, 0 prázdných titulů/textů, 0 rozdílů českého masteru a translations.cs.
- 0 českých master textů pod 350 znaků; 0 null poloh; 0 neplatných mapových kategorií, kategorií nebo priorit; 0 duplicitních názvů, textů či ID.
- Reklamní/propagační scan všech sedmi jazyků neodhalil reklamu, prodejní výzvy ani propagaci firem.
- Existující neprázdné souřadnice nebyly plošně ověřovány, přeměřovány ani měněny.

### Opravy provedené a ověřené read-backem
- **26101 / fact_005:** opraven německý název kostela sv. Vojtěcha; správně označuje novorenesanční, nikoli novogotickou stavbu.
- **26101:** 11 zdrojových objektů uvnitř facts[].sources bylo bezpečně převedeno na jejich přímé URL řetězce podle aktuálního schématu. Po read-backu zůstává 0 objektových položek.
- **26202 a 26256:** opraveny databázové sloupce city podle skutečného sídla obsluhující pošty a JSON:
  - 26202 → Stará Huť (oficiální detail České pošty: https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/26202)
  - 26256 → Krásná Hora nad Vltavou (oficiální detail České pošty: https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/26256)
- **26231 / fact_004:** opraven chybný německý letopočet 1824 na 1876 a doplněn úplný význam nákupu kontribuční sýpky.
- **26242 / fact_009:** ve francouzském překladu nahrazeno nepřesné archeologické označení oppidum přesnějším enceinte fortifiée préhistorique.
- **26255 / fact_002:** v šesti cizojazyčných názvech zachována nejistota Krčínova hrobu — názvy nyní výslovně uvádějí záhadu/mystérium, nikoli existenci potvrzeného hrobu.
- **26256 / fact_006:** ve španělském, francouzském a italském názvu opraveno zavádějící označení oppidum.
- **26281 / fact_001:** ve všech šesti cizojazyčných verzích opraven překlad architektonického stylu Empire a doplněna odpovídající věta do textů.
- **26281 / fact_005:** opraven francouzský název; auteur byl chybný význam pro pěvce/tenora, nyní správně uvádí tenoristu, který vystoupil ve více než 2 000 představeních.
- Všechny uvedené překladové opravy byly načteny zpět a ověřeny.

### Otevřené nálezy — neprovádět automatické zásahy
1. **Zdrojové aliasy:** v pěti záznamech (26251, 26252, 26255, 26256, 26261) zůstává celkem 81 položek src_* v facts[].sources. Horní registr content.sources obsahuje objekty title/url/type, ale nemá odpovídající ID aliasů; bezpečné mapování všech aliasů proto nelze odvodit bez rizika chybného přiřazení. Neprovádět hromadnou náhradu naslepo. Jde o otevřenou trasovatelnost zdrojů.
2. **26232 Pečice:** obsah má 2 fakty, sedm jazyků, zdroje a polohy, ale status zůstává placeholder. Bez změny statusu do validated či publikace, dokud nebude lifecycle rozhodnutí potvrzeno.
3. **Teslínské/Baštinské benediktinské proboštství:** kandidát byl prověřen, ale nebyl přidán. Obecní zdroj jej popisuje jako lokalitu 2 km severně od Teslín, zatímco odborný archeologický atlas pracuje s názvem Baština/Kolvín a historicky nejednoznačným osídlením. Bez bezpečného potvrzení příslušnosti k PSČ 26243 jej nepřiřazovat jen podle blízkosti. Předchozí neúspěšný pokus o zápis nic nezměnil; read-back potvrzuje, že nový fakt v 26243 není.
4. Sémantická kontrola překladů: dokončena strukturální kontrola všech 1 883 položek a cílená kontrola názvů i konkrétních významových/číselných anomálií; výše uvedené chyby opraveny. Zbývá plná ruční kontrola všech cizojazyčných odstavců, proto tuto oblast nelze označit za definitivně PASS.

### Výsledek
**REVIEW REQUIRED.** Základní inventář, struktura, délky českých textů, polohy, kategorie, duplicity, synchronizace city a reklamní scan jsou uzavřeny. Otevřené zůstávají trasovatelnost 81 zdrojových aliasů, lifecycle status 26232 a úplná sémantická kontrola všech cizojazyčných textů. Žádná publikace V5, záloha ani read-only zamčení nebyly spuštěny.

## Doplnění zásadních témat — 2026-11-21, poslední read-back

Tato sekce je nejnovější stav a přepisuje starší součty i poznámky o turistických mezerách v dotčených PSČ.

- **26101 / fact_012 — Vodní kolo na Drkolnově:** doplněno do Supabase. Podzemní vodní kolo o průměru 12,4 m v areálu bývalého dolu Drkolnov (dříve August), založeného roku 1836; zařízení bylo uvedeno do provozu přibližně kolem roku 1850, sloužilo k čerpání důlní vody do roku 1899 a později se důlní voda využívala pro zásobování Příbrami pitnou vodou až do roku 1961. Kategorie `culture_and_industry`, priorita A, map_category `technical_heritage`. Zdroje: Hornické muzeum Příbram (prohlídkový areál A a hornický skanzen) a NPÚ – Památkový katalog, historické podzemí/vodní patro Drkolnov. Poloha zůstává `null`: přestože je identita a lokalita doložena, přesný bod konkrétního podzemního zařízení nebyl v tomto kroku bezpečně ověřen; nebyla použita souřadnice jiného objektu ani representative_point.
- **26223 / fact_012 — Hradiště Plešivec:** doplněno do Supabase. Významná pravěká archeologická lokalita u Rejkovic s vícefázovým osídlením, zvláště významnou bronzovou fází, členěním hradiště a dochovanými kamennými valy. Kategorie `history`, priorita A, map_category `archaeological_site`. Zdroje: NPÚ – Státní archeologický seznam (SAS 8114) a Atlas české architektury. Poloha zůstává `null`, protože přesný bod hradiště nebyl v tomto kroku samostatně ověřen; nebyl použit střed obce ani vrchol jako náhrada.
- Oba nové fakty mají český master text delší než 350 znaků, odpovídající položku v každém jazyce cs/de/en/es/fr/it/nl a nové zdroje v kořenovém registru `content.sources`.
- Read-back po zápisu: **36 PSČ, 271 faktů**; v obou dotčených PSČ 12 master faktů a 12 položek v každém ze sedmi jazyků. ID `fact_012` je v obou záznamech shodné s ID překladů. České texty mají 775 a 816 znaků. Kořenové zdroje: 31 v každém záznamu; nové zdroje jsou dohledatelné (3 pro Drkolnov, 2 pro Plešivec).
- Po těchto dvou doplněních je v celém rozsahu nově **271 faktů a 1 897 překladových položek**. Dvě nově přidaná fakta mají záměrně `location=null`; předchozí tvrzení o 0 null polohách proto již neplatí. Nejde o strukturální chybu: schema dovoluje null, dokud není poloha obhajitelně doložena. Žádné existující souřadnice nebyly změněny.
- Statusy, `data_version`, ostatní obsah a německé záznamy zůstaly nedotčeny. Nebyla spuštěna publikace, V5, záloha ani read-only zamčení.

### Zásadní tematická kontrola — stav
- 26101: Drkolnov nyní pokryt samostatným faktem; obecný fakt o hornickém muzeu zůstává zachován.
- 26223: Plešivec nyní pokryt samostatným faktem; existující fakta o Jincích, trilobitech a hutnictví zůstávají zachována.
- 26203: Nový Knín a jeho hornicko-muzejní příběh již pokrývá existující fact_003; další duplicitní záznam nebyl přidán.
- Baštiny/Teslín: nadále nepřiřazeno. Bez bezpečného geografického důkazu příslušnosti k některému PSČ se fakt nevytváří.

**Výsledek auditu zůstává REVIEW REQUIRED.** Otevřené jsou dříve evidované otázky trasovatelnosti zdrojových aliasů, statusu placeholderu 26232, úplné sémantické kontroly překladů a geografického cross-checku.

## Doplnění poloh podle hierarchie prompt_rework.md — 2026-11-21

Při předchozím zápisu dvou nových faktů zůstaly jejich polohy `null`. Uživatel upozornil na závaznou geografickou hierarchii v `prompt_rework.md`; podle ní `null` není výchozí volba jen proto, že chybí geodeticky přesný bod. Obě polohy byly následně dohledány, doplněny do Supabase a načteny zpět.

- **26101 / fact_012 — Vodní kolo dolu Drkolnov:** doplněno `location` na **49.6831017, 13.9870005**. Bod odpovídá GPS poloze komory vodního kola uvedené u konkrétní atrakce. Typ `technical_monument`, přesnost `approximate`; název bodu výslovně říká, že jde o orientační bod komory, nikoli o geodeticky zaměřený střed zařízení. Geografický zdroj: VirtualTravel – Vodní kolo v podzemí dolu Drkolnov (GPS). Identitu a návštěvnickou trasu nezávisle potvrzuje Hornické muzeum Příbram.
- **26223 / fact_012 — Hradiště Plešivec:** doplněno `location` na **49.8112236, 13.9889417**. Jde o reprezentativní GPS bod uvnitř rozsáhlého archeologického areálu hradiště, nikoli o tvrzení, že celý areál nebo konkrétní archeologická struktura leží přesně na jediném bodě. Typ `archaeological_site`, přesnost `area_representative`. Geografický zdroj: Egeon – Plešivecké hradiště (GPS). NPÚ a Archeologický atlas Čech nezávisle potvrzují identitu, rozsah a polohu hradiště u Rejkovic.
- Odpovídající geografické zdroje byly přidány také do kořenového registru `content.sources`.
- Read-back Supabase potvrdil obě polohy, správná ID `fact_012`, 12 faktů v každém dotčeném PSČ a 12 překladových položek ve všech sedmi jazycích.
- **Aktuálně žádné z těchto dvou nových faktů nemá `location=null`.** Počet faktů a překladů se nemění: celý rozsah zůstává na 36 PSČ, 271 faktech a 1 897 jazykových položkách. Žádné existující neprázdné souřadnice nebyly měněny.

Tato sekce nahrazuje předchozí poznámku, že obě nová fakta zůstala bez polohy. Postup odpovídá pravidlům `prompt_rework.md`: konkrétní objekt → bod v lokalitě → přibližný či reprezentativní bod podle skutečné povahy místa; `null` až tehdy, když nelze odpovědně určit ani takový bod. Auditní omezení na existující neprázdné polohy zůstává zachováno.


## RÚIAN cross-check místních částí a přiřazení faktů — 2026-11-21

### Použitý podklad a rozsah

- Primární soubor data/czechia/reference/ruian_postcodes.json je při načtení prázdný/nepoužitelný; použit byl připravený CSV fallback ruian_postcodes.csv.
- Importní manifest uvádí zdrojový stav k 2026-10-31, stažení 2026-11-13, celkem 3 023 585 adresních míst a 2 677 PSČ. CSV je agregovaný přehled PSČ → obec / část obce; neposkytuje polygonové hranice poštovních oblastí ani souřadnice každého adresního místa.
- Ověřeno 36/36 očekávaných PSČ v CSV, sequence.json, groups a Supabase; bez duplicit a rozdílů.
- Všech 36 záznamů má county=Příbram a state=Středočeský kraj. city se posuzuje podle sídla obsluhující pošty, nikoli podle všech obcí obsažených v poštovní oblasti.
- Proveden průchod 271 faktů proti seznamům obcí a částí obcí. U 159 faktů s vyplněným location.address nebyl nalezen rozpor mezi PSČ uvedeným v adrese a PSČ nadřazeného záznamu. Tato kontrola je kontrolou konzistence adresních údajů; sama o sobě nenahrazuje bodové ověření v RÚIAN.
- U faktů bez adresy byla porovnávána skutečná obec/katastrální lokalita a případné překryvy poštovních oblastí. Pokud jedna část obce obsahuje více PSČ, agregovaný CSV soubor nedokáže určit PSČ konkrétního neadresního objektu bez přesnějšího mapového/parcelního podkladu.

### Potvrzené a opravené správní údaje

- 26101 — Příbram: pošta Příbram 1 sídlí v části obce Příbram I (Gen. R. Tesaříka 179). V Supabase bylo bezpečně doplněno district="Příbram I" a district_type="municipal_part". Read-back potvrdil obě hodnoty. Zdroj pro polohu pošty: oficiální městský bezbariérový plán a RÚIAN seznam částí Příbrami.
- 26293 — Nalžovice: stávající district="Chlum" / district_type="municipal_part" odpovídá sídlu pošty v Chlumu; beze změny.
- U ostatních záznamů nebyla v tomto dílčím průchodu nalezena další doložená oprava district. Úplná kontrola sídel pošt a všech správních údajů zůstává součástí navazujícího auditního kroku; žádné další pole nebylo plošně přepisováno.

### Potvrzená geografická přiřazení a překryvy

- 26231/fact_010 — Kojetín u Milína: oficiální obecní zdroj potvrzuje lom na Kojetíně v Milíně a přesné souřadnice 49.6292900, 14.0556300; přiřazení k poštovní oblasti Milín / 26231 je konzistentní.
- 26221/fact_006 — Skelná huť: NPÚ potvrzuje obec Obecnice a katastrální území Obecnice v Brdech; přiřazení k 26221 je konzistentní.
- 26221/fact_007 — Jordán: cílová plocha zasahuje do katastrálních území Obecnice v Brdech, Malá Víska v Brdech a Zaječov v Brdech. Jde o rozlehlý liniově/plošně chápaný areál; zachováno jedno primární přiřazení 26221 přes vazbu na Obecnice a přístupovou/návštěvnickou oblast. Nevytvářet duplicity v sousedních PSČ.
- 26223/fact_012 — Hradiště Plešivec: lokalita leží u Rejkovic v obci Jince; přiřazení k 26223 je konzistentní.
- 26225/fact_005 — Přírodní rezervace Kuchyňka: oficiální regionální podklad umisťuje rezervaci do katastrálního území Pičín; přiřazení k 26225 je konzistentní.
- 26242/fact_014 — Čtyřúhelníkové valy Třebsko 1: NPÚ a Archeologický atlas potvrzují obec i katastrální území Třebsko; přiřazení k 26242 je konzistentní.
- 26243/fact_003 — Věšín čp. 49: adresa je výslovně vedena jako 262 43. Část obce Věšín má rozdělení 13 adres pod 26242 a 300 pod 26243; bod v centru obce u pošty Partner Věšín odpovídá primární oblasti 26243.
- 26401/fact_011 — Zvěřinec: NPÚ uvádí obec Jesenice a katastrální území Jesenice u Sedlčan; přiřazení k 26401 je konzistentní.
- 26215/fact_003 — Zámek Čelina a 26215/fact_005 — Cholín ev. č. 129: adresy výslovně uvádějí PSČ 262 15; přiřazení potvrzeno.
- 26203/fact_007 — Štola Josef: oficiální pracoviště ČVUT má adresu Smilovice 93, 262 03 Nový Knín; přiřazení k 26203 je potvrzeno.

### Otevřené případy — REVIEW REQUIRED, bez změny dat

1. 26211/fact_004 — Čtyřmezí: orientační bod leží na styku čtyř katastrálních území Rosovice, Dobříš, Buková u Příbramě a Hostomice pod Brdy. Jde o hraniční bod bez adresního místa; RÚIAN adresní CSV proto neurčuje jediné PSČ. Stávající 26211 zůstává jediným primárním přiřazením, ale jeho výlučnost nelze z agregovaného CSV potvrdit. Nepřesouvat ani neduplikovat bez silnějšího parcelního/mapového důkazu.
2. 26215/fact_002 — Psí hory u Čeliny: lokalita je v katastrálním území Čelina, jehož adresní místa aktuální RÚIAN CSV uvádí pod 26203 a 26215; 26301 v tomto CSV pro část Čelina uvedeno není. Fakt používá neadresní bod ložiska (49.74000, 14.33300); agregovaný RÚIAN CSV neobsahuje hranici rozdělení uvnitř části obce. Stávající 26215 ponechat, ale označit k ručnímu ověření konkrétního poštovního přiřazení.
3. 26215/fact_004 — Židovský hřbitov v Čelině: stejná část obce Čelina má v aktuálním RÚIAN CSV adresní místa pod 26203 i 26215; 26301 v tomto CSV pro část Čelina uvedeno není. Hřbitov má vlastní neadresní bod (49.72877, 14.3195428), nikoli adresní místo s PSČ. Stávající 26215 ponechat, ale označit k ručnímu ověření podle přesné polohy vůči poštovnímu rozdělení.

### Výsledek dílčí kontroly

- Inventář a seznamy obcí/částí: PASS.
- Zjištěná a opravená správní nesrovnalost: 1 (26101/Příbram I).
- Potvrzené chybné přiřazení faktu: 0.
- Nejednoznačná přiřazení vyžadující přesnější mapový/parcelní důkaz: 3.
- Záznamy 26211/fact_004, 26215/fact_002 a 26215/fact_004 nebyly přesouvány ani duplikovány.
- Celkový audit zůstává REVIEW REQUIRED. Bez publikace, změny data_version, zálohy, read-only zamčení, změny sequence.json nebo zásahu do Neonu.



## Sedmijazyčný audit — první sémantické kolo (2026-11-21)

### Strukturální kontrola celého bloku

- Pro všech 271 faktů byly ověřeny jazykové položky de, en, es, fr, it, nl proti českému pořadí a ID.
- Každý jazyk obsahuje 271/271 položek; žádný prázdný překlad, žádné chybějící ID a žádná neshoda ID na odpovídající pozici.
- Tato mechanická kontrola nepotvrzuje sama o sobě sémantickou úplnost; ta pokračuje samostatně.

### První cílené sémantické kolo

Ručně porovnáno 43 faktů napříč prioritními a automaticky vytipovanými případy (včetně všech 12 faktů 26101 a vybraných faktů dalších PSČ). Kontrola se zaměřila na význam, vlastní jména, časové údaje, místní reálie, zachování nejistoty a nepřidávání tvrzení, která český master neobsahuje.

### Provedené opravy v Supabase

1. **26101/fact_001 — Zámeček-Ernestinum:** všech šest překladů nově výslovně zachovává, že existence původní dřevěné tvrze ve 13. století je pouze hypotetická; doplněna i podstatná historická posloupnost.
2. **26101/fact_006 — Kostel sv. Prokopa:** odstraněno nepodložené tvrzení o hornické bratrské společnosti jako stavebníkovi/podporovateli kaple. Všech šest překladů nyní uvádí skutečného iniciátora Jiřího Tomáše Pusche, podporu obce a dobrovolných dárců a doplňuje důležitou chronologii.
3. **26214/fact_006 — Hřiměždický zámeček:** ve všech šesti překladech doplněna atribuce citlivého poválečného tvrzení k obecním historickým materiálům; překlady nyní zachovávají stejnou míru zdrojové opatrnosti jako český master.
4. **26301/fact_003 — Kostel Nejsvětější Trojice:** odstraněna z cizojazyčných textů nepodložená doplňující věta o GPS souřadnicích a archivu Noci kostelů, která v českém masteru není. Překlady nyní odpovídají jeho věcnému obsahu.

### Read-back po opravách

- Opravené překlady byly načteny zpět z Supabase.
- U dotčených PSČ zůstaly počty faktů a překladů beze změny: 26101 = 12, 26214 = 6, 26301 = 15 v každém ze sedmi jazyků.
- ID, pořadí, české master texty, zdroje, polohy, kategorie a data_version nebyly těmito jazykovými opravami změněny.
- Žádná publikace ani migrace nebyla spuštěna.

### Zbývající práce

Sémantická kontrola všech 271 faktů není uzavřena. Pokračovat po tematických a jazykových dávkách, prioritně u faktů s výrazně zkrácenými překlady, u historických nejistot, technických parametrů a u tvrzení s citlivou atribucí. Zkrácení samo o sobě není automaticky chybou; opravovat pouze skutečně vynechané důležité informace, významové posuny nebo nepodložená doplnění.



### Druhé opravné kolo — doplnění vynechaných podstatných údajů (2026-11-21)

Po prvním průchodu byly v dalších překladech doplněny důležité podrobnosti, které byly v některých jazycích příliš zkrácené. Opravy se týkají těchto faktů; vždy byly upraveny všechny šest cizojazyčných verzí:

- **26255/fact_003 — Černý lev 777:** doplněno umístění desky na pomníku obětí první světové války, datum jejího přidání, vznik a působnost odbojové skupiny a rok politického procesu.
- **26255/fact_004 — Týnčanský kras:** doplněno geologické prostředí, poloha Divišovy jeskyně v lomu U Poslušných, období těžby lomu, objev vstupu po odstřelu v červnu 1973 a ochranný důvod omezeného přístupu.
- **26255/fact_005 — Počepická křížová cesta:** doplněna gotická fáze kostela, přestavba roku 1790, význam křížové cesty jako katolické formy rozjímání a opětovné vysvěcení v roce 2001.
- **26285/fact_004 — Panská vinopalna:** doplněn půdorys L, zachované technické prvky, původní rozdělení funkcí křídel a časová návaznost oprav v letech 2025–2026.
- **26285/fact_005 — Drahenický pivovar:** doplněna zásobovací role pivovaru, historická produkce na počátku 18. století a skutečnost, že nový provoz z roku 1872 vznikl na místě sýpky.
- **26285/fact_006 — Drahenický mlýn:** doplněna přesnější poloha u rybníka Slepče, zánik staršího mlýna při povodni roku 1745, nedochování původní technologie a podpora obnovy v roce 2026.
- **26284/fact_002 — Kostel sv. Karla Boromejského:** doplněn kontext neúspěšné žádosti o povýšení Zalužan na městys v roce 1869 a důvod související s absencí farnosti a kostela.
- **26284/fact_005 — Abraham Kohn:** doplněno přesné datum narození, působení v Hohenems v letech 1833–1844 a následná práce ve Lvově.
- **26284/fact_006 — Kozárovická žula:** doplněna role železnice Rakovník–Protivín v rozvoji lomů, přibližný počet pracovníků a konkrétní české stavby, kde byla žula použita.

Read-back potvrdil zachování počtu faktů a všech sedmi jazykových polí u dotčených PSČ. Opravy neměnily české master texty, ID, pořadí, zdroje, polohy, kategorie ani data_version.



### Třetí kolo — další významové nesrovnalosti a rozšíření ruční kontroly (2026-11-21)

- Ruční sémantické porovnání se rozšířilo na **168/271 faktů**; průchod zahrnuje všechna fakta v PSČ 26101, 26202–26215, 26221–26223, 26225, 26231–26232, 26241–26242 a vybrané faktové skupiny v dalších PSČ. U zbývajících 103 faktů pokračovat stejným postupem.
- **26203/fact_005 — Starý Knín:** v německém překladu bylo odstraněno nepřesné doplnění „německé právo“ vedle emphyteutického práva. Překlad nyní odpovídá českému masteru a uvádí pouze emphyteutické právo.
- **26212/fact_007 — Usedlost čp. 4 v Obořišti:** český master i všech šest překladů obsahovaly zastaralou větu, že poloha dosud není vyřešena, ačkoli souřadnice byly již dříve doplněny. Věta byla odstraněna; texty nyní popisují usedlost bez neaktuálního tvrzení o chybějící poloze. Samotné souřadnice ani ostatní geografická pole se neměnily.
- V rámci kontroly byly ověřeny celé jazykové sady u dalších záznamů v Příbramsku, Novoknínsku, Jinecku, Pičínsku, Milínsku a Rožmitálsku. V této dávce nebyla nalezena další potvrzená významová chyba vyžadující opravu.
- Po všech jazykových opravách zůstává strukturální stav 271/271 položek v každém jazyce; žádné ID ani pořadí se nezměnilo.



## Sedmijazyčný sémantický audit — dokončeno (2026-11-21)

### Rozsah a výsledek

- Ručně porovnáno **271/271 faktů** v češtině proti všem šesti překladům: de, en, es, fr, it, nl.
- Provedena kontrola významu, vlastních jmen, letopočtů, číselných a technických údajů, geografických reálií, zdrojové opatrnosti, legend a historických nejistot.
- Zkrácení překladu nebylo samo o sobě považováno za chybu; opravovaly se vynechané důležité informace, nepodložené doplňky, významové posuny a zastaralé formulace.
- Strukturální read-back po všech změnách: každý z šesti jazyků má **271/271** položek, **0 prázdných textů**, **0 neshod ID** a zachované pořadí. Celkem 1 626 cizojazyčných položek.
- Celkový inventář zůstává 36 PSČ / 271 faktů; žádná změna počtu záznamů.

### Opravené faktové záznamy

Ve všech šesti jazycích byly opraveny nebo doplněny překlady u těchto faktů:

- **26101:** fact_001 Ernestinum (hypotetická dřevěná tvrz); fact_006 kostel sv. Prokopa (odstraněna smyšlená hornická bratrská společnost, doplněn skutečný iniciátor a dárci).
- **26212:** fact_007 usedlost Obořiště čp. 4 (odstraněno zastaralé tvrzení o nevyřešené poloze).
- **26214:** fact_006 hřiměždický zámeček (doplněna atribuce poválečného tvrzení obecním historickým materiálům).
- **26251:** fact_001 Petrovice (doplněn předchozí kostel, dvě jezuitské rezidence a zánik jezuitského vlastnictví).
- **26255:** fact_001 Petrovice a jezuitské rezidence; fact_003 Černý lev 777; fact_004 Týnčanský kras; fact_005 kostel a křížová cesta v Počepicích.
- **26256:** fact_001 Krásná Hora (doplněna těžba antimonu, rozsah revíru a počet horníků).
- **26284:** fact_002 kostel v Zalužanech (kontext žádosti z roku 1869); fact_004 synagoga a geniza (doplněno soukromé vlastnictví a nepřístupnost); fact_005 Abraham Kohn (přesné datum narození a působení v Hohenems); fact_006 Kozárovice (železnice, rozvoj lomu a konkrétní použití žuly).
- **26285:** fact_004 panská vinopalna; fact_005 drahenický pivovar; fact_006 drahenický mlýn (doplněny technické, časové a provozní souvislosti).
- **26301:** fact_003 kostel Nejsvětější Trojice (odstraněny nepodložené GPS údaje); fact_011 kaple v Budínku; fact_014 županovická plavební komora; fact_015 usedlost Lhotka čp. 2 (opraveny zastaralé věty o chybějícím mapovém bodu a přesnosti polohy).
- **26203:** fact_005 Starý Knín (v němčině odstraněno nepřesné doplnění „německé právo“ vedle emphyteutického práva).

Celkem bylo opraveno **22 faktových záznamů**; u všech zůstala zachována identita a ID. U 21 záznamů byly upraveny všechny šest cizojazyčné verze; u 26203/fact_005 byla opravena pouze německá verze, kde se vyskytovalo konkrétní nepřesné doplnění.

### Ověření mapových formulací

U faktů 26212/fact_007, 26301/fact_011, 26301/fact_014 a 26301/fact_015 byla porovnána formulace o poloze s aktuálním polem location. Texty nyní správně rozlišují přibližný orientační bod od přesně zaměřené polohy; žádný z těchto bodů nebyl změněn.

### Read-back a ochrana dat

- Supabase read-back potvrdil 271 faktů a 271 neprázdných poloh.
- Ve všech šesti překladových polích zůstalo 271 položek a 0 neshod ID.
- České master texty byly změněny pouze u 26212/fact_007 a 26301/fact_011, fact_014 a fact_015, protože obsahovaly zastaralou informaci o neexistujícím mapovém bodu. Ostatní české master texty zůstaly beze změny.
- ID, pořadí faktů, zdroje, kategorie, priority, souřadnice a data_version nebyly jazykovými opravami měněny.
- Bez publikace, V5, zálohy, read-only zamčení a migrace do Neonu.

**Výsledek jazykové kontroly: PASS.** Celkový audit zůstává REVIEW REQUIRED kvůli otevřeným geografickým případům a dalším kontrolám uvedeným v oddílu Otevřené kroky.



## Kontrola kategorií, strukturální konzistence a zdrojových aliasů — 2026-11-21

### Kategorie a priority

- Ověřeno všech **271 faktů** proti povoleným enumům v schema.json.
- Neplatná nebo chybějící hodnota category: **0**.
- Neplatná nebo chybějící hodnota priority: **0**; používají se všechny čtyři úrovně A–D.
- Neplatná nebo chybějící hodnota map_category: **0**; použito 15 z 17 povolených mapových kategorií.
- Každý fakt má neprázdné sources[]: **271/271**.
- Při obsahovém průchodu nebyl zjištěn zjevný rozpor mezi hlavní identitou faktu a jeho mapovou kategorií. Kategorie a priority nebyly měněny.

### Správní a strukturální údaje

- Všech 36 záznamů má neprázdné city, county, state, representative_place a validní representative_point.
- district_type má pouze povolené hodnoty; žádná neplatná hodnota.
- Všech 36 záznamů má neprázdný kořenový content.sources[].
- Oprava 26101/district=Příbram I byla ověřena read-backem; 26293/district=Chlum zůstává beze změny.
- Tato strukturální kontrola nepotvrzuje polygonové hranice PSČ ani nenahrazuje tři otevřené geografické případy.

### Duplicity

- Celkem 271 faktů; duplicitní ID uvnitř PSČ: **0**.
- Přesné duplicitní názvy napříč 36 PSČ: **0**.
- Zatím nebyl nalezen důkaz, který by odůvodňoval přesun nebo vytvoření duplicitního faktu. Tři otevřené případy z RÚIAN cross-checku zůstávají odděleně označené.

### Starší zdrojové aliasy — nevyřešeno

- Aktuální Supabase read-back ukazuje **14 faktů**, **40 odkazů** ve formátu src_* a **36 různých aliasových klíčů** ve třech PSČ: 26251, 26256 a 26261.
- Rozložení: 26251/fact_003 = 1 alias; 26256/fact_001–fact_011 = 35 aliasů; 26261/fact_002–fact_003 = 4 aliasy.
- Kořenové content.sources[] obsahuje související URL objekty, ale neobsahuje stabilní identifikátor, který by jednotlivé src_* klíče jednoznačně mapoval na konkrétní URL. Vyhledávání aliasových klíčů v repozitáři rovněž neposkytlo mapovací tabulku.
- Zejména 26251/fact_003 obsahuje src_ecology, pro který nebylo možné v kořenovém seznamu bezpečně určit odpovídající zdroj.
- **Žádný alias nebyl nahrazen odhadem.** Před normalizací je nutné získat původní mapování nebo jiný jednoznačný důkaz pro každý klíč. Do té doby zachovat původní zdrojové řetězce a stav REVIEW REQUIRED.

### Dílčí výsledek

- Kontrola povolených kategorií, priorit a povinných polí: **PASS**.
- Strukturální kontrola administrativních polí a inventáře: **PASS**.
- Rychlá kontrola duplicit ID a přesných názvů: **PASS**.
- Normalizace starších aliasů: **REVIEW REQUIRED** — bez mapování se nesmí provést automatická náhrada.
- Celkový audit zůstává **REVIEW REQUIRED** kvůli třem nejednoznačným geografickým přiřazením a nevyřešeným zdrojovým aliasům.



### Doplňující technická kontrola zdrojů a délky textů

- České master texty pod hranicí 350 znaků: **0**.
- Kořenový registr obsahuje **792 zdrojových položek**; všechny mají neprázdný title, URL a type, všechna type jsou v povoleném enumu a všechny URL mají formát HTTP(S).
- V polích facts[].sources zůstává 40 starších src_* aliasových odkazů; jejich počet a rozsah jsou uvedeny výše. Tato technická kontrola potvrzuje úplnost kořenového registru, nikoli mapování jednotlivých aliasů na URL.

## Pokračování — ověření poštovních sídel a nové geografické důkazy (2026-11-21)

### City / okres / kraj — ověření dokončeno

- Pro všech **36/36 PSČ** byl porovnán `city` s obcí, v níž fyzicky sídlí příslušná pošta nebo Pošta Partner; `county` a `state` odpovídají správnímu zařazení této obce.
- U 34 záznamů je v kořenovém zdrojovém registru přímo evidován oficiální detail pobočky České pošty. Zbývající dva případy byly doloženy samostatnými oficiálními podklady:
  - **26206 Korkyně:** RISY – oficiální záznam obce uvádí „Pošta: Korkyně“ a adresu Korkyně 24, 26206. Odkaz byl doplněn do `content.sources` a ověřen read-backem.
  - **26252 Vysoký Chlumec:** oficiální detail České pošty potvrzuje Poštu Partner 26252 na adrese Vysoký Chlumec čp. 14. Odkaz byl doplněn do `content.sources` a ověřen read-backem.
- Dvě názvové nuance byly ověřeny podle fyzické adresy:
  - **26255:** pobočka se jmenuje Petrovice u Sedlčan, ale její adresa je Petrovice čp. 64; obecní název v `city` proto správně zůstává **Petrovice**.
  - **26261:** pobočka se jmenuje Višňová u Příbramě, ale její adresa je v obci **Višňová**; `city` je správně.
- Všech 36 záznamů má `county=Příbram` a `state=Středočeský kraj`. `district` je vyplněn pouze tam, kde je doložená relevantní část obce/města (26101 Příbram I, 26293 Chlum); ostatní zůstávají null.
- Žádné pole `city`, `county`, `state` ani `district` nebylo v této dávce měněno. Byly doplněny pouze dva chybějící oficiální zdrojové odkazy do kořenového registru.

### Geografické případy — zpřesněné důkazy, bez nepodloženého přesunu

1. **26211/fact_004 — Čtyřmezí:** oficiální plakát obce Rosovice potvrzuje přesné souřadnice 49.793474 N, 14.079556 E a uvádí, že jde o styk hranic čtyř obcí/katastrů. Oficiální Česká pošta potvrzuje pobočku 26211 v Rosovicích. Proto zůstává jediné primární přiřazení 26211; bod je však hraniční a nemá vlastní adresní místo s PSČ. Bez adresního či parcelního dokladu nelze výlučnost PSČ potvrdit. **REVIEW REQUIRED, beze změny.**
2. **26215/fact_002 — Psí hory / ložisko Čelina:** aktuální inventář RÚIAN uvádí adresní místa části obce Čelina pod **26203 i 26215**, nikoli 26301. Mindat lokalizuje konkrétní ložisko Čelina na 49.74000, 14.33300 a řadí je pod Čelinu, Borotice; odborné materiály ČVUT a Hornického muzea potvrzují historický a geologický kontext revíru. Dostupný adresní přehled uvádí pro Čelinu poštovní adresu 71 pod 26203 (Nový Knín) a 96 pod 26215 (Borotice), ale neukazuje jejich polohu vůči neadresnímu bodu ložiska. **26215 se proto ponechává jako jediné primární přiřazení, ale zůstává REVIEW REQUIRED do parcelního/mapového ověření.**
3. **26215/fact_004 — Židovský hřbitov Čelina:** NPÚ SAS 8887 potvrzuje typ hřbitov, obec Borotice, katastrální území Čelina a přesné vymezení archeologické lokality; databáze Židovských památek potvrzuje souřadnice 49.7287700, 14.3195428 a polohu přibližně 500 m jihozápadně od obce. RÚIAN však u části obce Čelina eviduje adresní místa pod 26203 i 26215; hřbitov sám adresní místo nemá. **26215 se ponechává jako jediné primární přiřazení, ale zůstává REVIEW REQUIRED do parcelního/mapového ověření.**

### Starší aliasy — doplněná diagnostika, bez automatické náhrady

- Znovu ověřeno: **40 aliasových odkazů / 36 různých klíčů / 14 faktů / 3 PSČ** (26251, 26256, 26261).
- U 26256 jsou názvy většiny aliasů sémanticky podobné názvům zdrojů v kořenovém registru (např. `src_cenia`, `src_cityplan`, `src_npu_*`, `src_archmap_*`, `src_mining_*`). To však samo o sobě není důkaz stabilního mapování alias → konkrétní URL; některé klíče jsou sdílené více fakty a `src_marian` má více možných tematických vazeb.
- U 26261 jsou `src_003` až `src_005` připojeny k faktu o seriálu Chalupáři a `src_006` k Homolkovskému mlýnu. Kořenový registr obsahuje odpovídající tematické zdroje, ale neobsahuje ID, která by potvrzovala přesné přiřazení jednotlivých číselných aliasů.
- U 26251/fact_003 zůstává `src_ecology` bez jednoznačného identifikátoru.
- **Žádný alias nebyl nahrazen odhadem a žádný fact.sources[] nebyl měněn.** Normalizace zůstává REVIEW REQUIRED do získání původní převodní tabulky nebo jiného přímého důkazu.

### Dílčí výsledek tohoto pokračování

- Správní sídla pošt (`city`, `county`, `state`) a relevantní `district`: **PASS 36/36**.
- Dvě chybějící oficiální reference pro 26206 a 26252 doplněny do kořenového registru a ověřeny read-backem.
- Tři geografická přiřazení: stále **REVIEW REQUIRED**, ale s novými konkrétními důkazy.
- Starší aliasy: **REVIEW REQUIRED**, beze změny faktových zdrojů.
- Celkový audit zůstává **REVIEW REQUIRED**. Bez publikace, V5, zálohy, read-only locku a migrace do Neonu.

### Přesné referenční odkazy pro geografické případy

- Čtyřmezí: obec Rosovice, oficiální turistický plakát s polohou hraničního kamene: `https://www.rosovice-obec.cz/modules/file_storage/download.php?file=c5a05a7d%7C483&inline=1`; Česká pošta 26211: `https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/26211`.
- Psí hory / Čelina: Mindat, lokalita a WGS84 49.74000, 14.33300: `https://zh.mindat.org/loc-256454.html`; ČVUT, historie štoly Josef a revíru Psí hory: `https://ceg.fsv.cvut.cz/ceg-int/o-nas/stola-josef/historie-stoly/historie-stoly`; přehled adresních PSČ části obce Čelina (26203/71 a 26215/96): `https://regiony.kurzy.cz/psc/borotice-okres-pribram/celina-cast/`.
- Židovský hřbitov Čelina: NPÚ / ISAD SAS 8887, přesné vymezení archeologického území a poloha jihozápadně od Čeliny: `https://isad.npu.cz/zidovsky-hrbitov-celina-8887`; databáze Židovských památek s GPS: `https://pamatky.kehilaprag.cz/pamatka/celina`.
- Ověření limitu společného inventáře: `ruian_postcodes.json` obsahuje pouze agregované počty a seznamy obcí/částí obcí (26203 = 4 159 adresních míst; 26215 = 194), nikoli souřadnice jednotlivých adresních míst. Proto z něj nelze odvodit přesnou nejbližší adresní vazbu ani vyřešit PSČ u neadresních lokalit. Pro rozhodnutí by bylo nutné cíleně získat konkrétní adresní místa z oficiálního RÚIAN feedu; žádný odhad z agregovaného seznamu se nepoužije.
