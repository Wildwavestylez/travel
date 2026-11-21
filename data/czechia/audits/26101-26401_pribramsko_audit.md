# Finální audit PSČ 26101–26401 — Příbramsko, Brdy a Sedlčansko

- **Kanonické ID:** `CZ-26101-26401`
- **Rozsah:** přesně 36 geografických PSČ podle `data/czechia/sequence.json`
- **Datum zahájení:** 2026-11-21
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.0
- **Zdroj pravdy:** Supabase `public.postal_codes`, `country_code='CZ'`
- **Stav:** `REVIEW REQUIRED` — úvodní průzkum turistické úplnosti a základní databázové kontroly hotové; opravy a zbývající auditní oblasti jsou otevřené.

## Inventář a stav
- Sekvence obsahuje přesně 36 kódů: 26101; 26202–26206; 26211–26215; 26221–26223; 26225; 26231–26232; 26241–26244; 26251–26252; 26255–26256; 26261–26263; 26272; 26281; 26284–26285; 26291; 26293; 26301; 26401.
- Supabase read-only inventář před zahájením oprav: 36/36 řádků, nyní 246 faktů.
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
- 241/241 faktů má zdroj, platnou `category`, `priority` a `map_category`.
- 0 duplicitních ID v rámci záznamů; 0 duplicitních názvů faktů v auditovaném bloku.
- Všech 7 jazykových kořenů existuje; počty faktů a ID sekvence překladů odpovídají master faktům; 0 prázdných překladových položek.
- Zjištěny 4 rozdíly `facts[]` vs `translations.cs.facts`: 26223/fact_003, 26231/fact_009, 26284/fact_002, 26301/fact_001. **Opraveno bezpečným zrcadlením českých master title/text do translations.cs; následný read-back potvrdil 0 rozdílů.**
- Délka českého master textu: původní 4 nálezy pod 350 znaky byly opraveny: 26284/fact_001 (613), 26284/fact_003 (599), 26285/fact_001 (645), 26285/fact_002 (607). Všech šest cizojazyčných překladů (`de/en/es/fr/it/nl`) bylo aktualizováno podle českého masteru; read-back potvrdil 7/7 neprázdných jazykových verzí u každého faktu a shodu `translations.cs` s master textem. Aktuálně 0 českých master textů pod 350 znaků.
- **Pravidla souřadnic:** pro každý fakt se používá pouze konkrétní doložený bod; \`exact\` pro ověřený objekt/adresu, \`approximate\` pro známou lokalitu s nepřesným bodem, \`area_representative\` pro reprezentativní bod rozlehlého sídla/území a \`historical_approximate\` pro historické místo s nejistou přesnou polohou. Typy jsou z řízeného slovníku \`schema.json\`. Žádný bod se nedoplňuje jen proto, aby na mapě nebylo prázdné místo; neobhajitelné polohy zůstávají \`null\`.
- **Stav poloh:** původně 27 \`null\`; nyní doplněno 15, zbývá **12 \`null\`**. Read-back Supabase: 241 faktů, 229 s polohou, 12 bez polohy, 0 neplatných souřadnicových objektů (chybějící název/typ/accuracy/source nebo souřadnice mimo rozsah).
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
