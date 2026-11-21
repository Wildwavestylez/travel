# Finální audit PSČ 26101–26401 — Příbramsko, Brdy a Sedlčansko

- **Kanonické ID:** `CZ-26101-26401`
- **Rozsah:** přesně 36 geografických PSČ podle `data/czechia/sequence.json`
- **Datum zahájení:** 2026-11-21
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.0
- **Zdroj pravdy:** Supabase `public.postal_codes`, `country_code='CZ'`
- **Stav:** `REVIEW REQUIRED` — úvodní průzkum turistické úplnosti a základní databázové kontroly hotové; opravy a zbývající auditní oblasti jsou otevřené.

## Inventář a stav
- Sekvence obsahuje přesně 36 kódů: 26101; 26202–26206; 26211–26215; 26221–26223; 26225; 26231–26232; 26241–26244; 26251–26252; 26255–26256; 26261–26263; 26272; 26281; 26284–26285; 26291; 26293; 26301; 26401.
- Supabase read-only inventář před zahájením oprav: 36/36 řádků, nyní 269 faktů.
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
- 269/269 faktů má zdroj, platnou `category`, `priority` a `map_category`.
- 0 duplicitních ID v rámci záznamů; 0 duplicitních názvů faktů v auditovaném bloku.
- Všech 7 jazykových kořenů existuje; počty faktů a ID sekvence překladů odpovídají master faktům; 0 prázdných překladových položek.
- Zjištěny 4 rozdíly `facts[]` vs `translations.cs.facts`: 26223/fact_003, 26231/fact_009, 26284/fact_002, 26301/fact_001. **Opraveno bezpečným zrcadlením českých master title/text do translations.cs; následný read-back potvrdil 0 rozdílů.**
- Délka českého master textu: původní 4 nálezy pod 350 znaky byly opraveny: 26284/fact_001 (613), 26284/fact_003 (599), 26285/fact_001 (645), 26285/fact_002 (607). Všech šest cizojazyčných překladů (`de/en/es/fr/it/nl`) bylo aktualizováno podle českého masteru; read-back potvrdil 7/7 neprázdných jazykových verzí u každého faktu a shodu `translations.cs` s master textem. Aktuálně 0 českých master textů pod 350 znaků.
- **Pravidla souřadnic:** pro každý fakt se používá pouze konkrétní doložený bod; \`exact\` pro ověřený objekt/adresu, \`approximate\` pro známou lokalitu s nepřesným bodem, \`area_representative\` pro reprezentativní bod rozlehlého sídla/území a \`historical_approximate\` pro historické místo s nejistou přesnou polohou. Typy jsou z řízeného slovníku \`schema.json\`. Žádný bod se nedoplňuje jen proto, aby na mapě nebylo prázdné místo; neobhajitelné polohy zůstávají \`null\`.
- **Stav poloh:** původně 27 \`null\`; nyní doplněno 15, zbývá **12 \`null\`**. Aktuální read-back Supabase: 252 faktů, 239 s polohou, 13 bez polohy (12 původních otevřených null + 1 nový fakt bez ověřeného bodu), 0 neplatných souřadnicových objektů (chybějící název/typ/accuracy/source nebo souřadnice mimo rozsah).
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
- RÚIAN JSON `data/czechia/reference/ruian_postcodes.json` se načetl jako prázdný obsah; CSV fallback je dostupný. Ověřena přesná přítomnost všech 36 kódů v CSV (36/36), shoda všech 36 kódů mezi `sequence` a `groups` bez duplicit či rozdílů (36/36) a přítomnost 36/36 v Supabase. Zbývá věcný geografický cross-check místních částí a přiřazení faktů vůči RÚIAN inventáři. Doplnění bodu Na horách u Křešína bylo provedeno na základě AOPK/ISOP a oficiálního Natura 2000 souřadnicového podkladu.
- Předběžný reklamní/propagační scan textů ve všech 7 jazycích: automatický filtr vytipoval 10 jazykových položek; všech 10 bylo ručně otevřeno. Nálezy jsou pouze neutrální popis návštěvnického provozu, naučných stezek nebo veřejných služeb; nebyla zjištěna reklama, prodejní výzva ani propagace firmy. Tím je uzavřena kontrola těchto kandidátů, nikoli celková sémantická kontrola všech překladů.\n- Neproveden AJV ani samostatný validační běh, v souladu s promptem.

## Otevřené kroky
1. Doplnit a přeložit zásadní chybějící příběhy v 26101 (Svatá Hora, Drtikol; rozhodnout a doložit Jan Drda).
2. Doplnit čtyři české master texty pod 350 znaků a synchronizovat de/en/es/fr/it/nl.
3. Prověřit 27 null poloh a doplnit jen doložitelné body.
4. Dokončit tematický/geografický cross-check RÚIAN CSV, skupin a případných překryvů/duplicit.
5. Dokončit sémantickou kontrolu šesti cizojazyčných překladů a reklamního/propagačního obsahu.
6. Uzavřít kontrolu správních údajů, kategorií a věcných vad napříč celým blokem; následně stanovit PASS/FIX REQUIRED/REVIEW REQUIRED.

**Další krok:** pokračovat pouze u zbývajících 12 `null` poloh; nepřidávat náhradní souřadnice bez doloženého objektu nebo výslovně označeného reprezentativního bodu.


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
- Aktualizovaný read-back celého rozsahu: 36 PSČ, 252 faktů, 239 faktů s polohou, 13 null poloh. Tato korekce předchází duplicitě a chybnému přiřazení mezi PSČ.


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
- Z původních 27 null poloh je nyní doloženo 18; 9 zůstává otevřených, protože pro ně nebyl nalezen dostatečně přesný a obhajitelný bod.
- Všech 24 nových Explorer faktů má překlady cs/de/en/es/fr/it/nl; žádný nový fakt nebyl přiřazen do nesprávného PSČ podle RÚIAN.
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
- Celkem je nyní doloženo 18 z původních 27 null poloh; 9 zůstává otevřených.
- V 26272 byl duplicitní `fact_013` o kostele sv. Jana Křtitele sloučen do existujícího `fact_010` o kostele ve Stražišti; podrobnější architektonické informace a sedm překladů byly zachovány pod původním ID. Drahenice zůstávají pouze v PSČ 26285.

### Aktuální technický read-back
- 36 PSČ, **265 faktů**, **256 faktů s polohou**, **9 null poloh**, **0 neplatných location objektů**.
- 24/26 nových faktů má text delší než 350 znaků, nejméně 3 zdroje, platný mapový bod a kompletní překlady v 7 jazycích.
- Počty překladů nových faktů: cs 28, de 28, en 28, es 28, fr 28, it 28, nl 28.
- Žádné existující neprázdné polohy nebyly plošně přeměřovány; doplněny byly pouze tři původní null polohy uvedené výše.
- Stav zůstává **REVIEW REQUIRED**. Bez publikace, změny data_version, zálohy nebo read-only zamčení.


## Obořiště — doplnění dalších historických staveb a lokalizace tvrze (2026-11-21)

- **26212/fact_003 — zaniklá tvrz Obořiště:** poloha doplněna na 49.75063, 14.13821, typ `historic_fortress`, přesnost `historical_approximate`. NPÚ uvádí, že tvrz stávala přímo v prostoru dnešního Nového rybníka; bod Mapcarta představuje přibližnou polohu vodní plochy, nikoli tvrzení o přesném půdorysu. Původní důvod null byl proto po nalezení tohoto přesnějšího pramenného popisu přehodnocen.
- **26212/fact_005 — Rybářská bašta u Nového rybníka:** nově doplněna jako samostatná historická budova někdejšího rybářství, oddělená od zaniklé tvrze pod hladinou rybníka. Přesné stáří není v dostupných pramenech doloženo a text to výslovně přiznává. Poloha 49.7496453, 14.1431389; building; exact. Současné soukromé využití je uvedeno pouze jako omezení přístupnosti, bez propagace provozovatele.
- **26212/fact_006 — zájezdní hostinec čp. 46:** barokní patrový dům z 18. století s mansardovou střechou, uvedený v obecním rozvojovém dokumentu jako místně významná stavba. Poloha 49.7423125, 14.1520393; building; exact. Adresa Obořiště 46, PSČ 26212.
- U těchto dvou nových faktů jsou překlady cs/de/en/es/fr/it/nl úplné. Kontrola ID v PSČ 26212 potvrdila 6/6 unikátních ID; původní `26212/fact_004` — škola z roku 1930 — zůstal zachován a rybářská bašta má vlastní ID `fact_005`.
- Aktuální read-back po doplnění: **36 PSČ, 267 faktů, 259 faktů s polohou, 8 null poloh, 0 neplatných location objektů**.
- Z původních 27 null poloh je nyní vyřešeno 19; 8 zůstává otevřených. Všech 26 nových Explorer faktů má text alespoň 736 znaků, nejméně tři zdroje a úplné překlady v sedmi jazycích.
- Stav zůstává REVIEW REQUIRED; bez publikace, změny data_version, zálohy či read-only zamčení.


## Další drobné venkovské památky v Obořišti a Lhotce (2026-11-21)

- **26212/fact_007 — Usedlost čp. 4 v Obořišti:** obecní dokumentace ji uvádí jako památkově zajímavou obytnou stavbu z přelomu 19. a 20. století s bohatě členěnou fasádou. Přidáno do masteru a všech sedmi jazyků. Poloha zůstává null: dostupné podklady potvrzují číslo popisné, ale neumožňují bezpečně určit konkrétní adresní bod/parcela.
- **26301/fact_015 — Usedlost čp. 2 v Lhotce:** tradiční venkovský statek z přelomu 19. a 20. století; Lhotka je podle RÚIAN samostatnou částí Obořiště v PSČ 26301. Přidáno do masteru a všech sedmi jazyků. Poloha zůstává null, protože nebyl ověřen přesný geodetický bod usedlosti; nepoužívá se střed osady.
- Obě položky jsou označeny prioritou C jako lokální venkovské dědictví, nikoli jako velké turistické dominanty. Neobsahují propagaci provozovatelů ani komerční sdělení.
- Po těchto dvou položkách: **269 faktů**, **259 s polohou**, **10 null celkem** (8 původních otevřených poloh + 2 nové usedlosti bez ověřeného bodu), 0 neplatných location objektů. Všech 28 nových Explorer faktů má 7/7 překladů; 26 má mapový bod a 2 zůstávají záměrně bez bodu.
