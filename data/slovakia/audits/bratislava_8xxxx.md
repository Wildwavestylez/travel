# Finální audit Bratislava – PSČ 8xxxx

- Datum: 2026-11-22
- Rozsah: všechny bratislavské kódy řady 8xxxx obsažené v naplněném `data/slovakia/sequence.json`.
- Celkový výsledek: **FINAL AUDIT RECHECK COMPLETE — 43 PASS / 6 REVIEW REQUIRED; PUBLICATION HELD**. Zdrojové reference odpovídají českému technickému formátu. Závěrečný průchod potvrdil strukturální a jazykové zarovnání všech 49 obsahových záznamů; šest geografických konfliktů s odlehlými adresními body zůstává otevřeno.
- Nebyla změněna žádná hodnota `data_version`, schéma ani pořadí sekvence.

## Inventář rozsahu

Celkem 51 kódů:
- 81101–81109
- 82101–82109
- 83000, 83007
- 83101–83104, 83106, 83107, 83151–83154
- 84002, 84008
- 84101–84108, 84110
- 85000, 85009
- 85101–85107, 85110

Z toho 49 obsahových záznamů a 2 záměrné placeholdery (85000, 85009). Oba placeholdery zůstaly beze změny a jejich položky v database_index.json odpovídají kanonickým JSONům.

## Status a verze

- Před auditem: 48 obsahových záznamů mělo status=validated; u 84101 povinný status chyběl; 2 placeholdery.
- Po auditu: všech 49 obsahových záznamů má status=validated; 2 placeholdery zůstaly placeholder; žádný záznam nebyl převeden na published.
- data_version: u všech 49 obsahových záznamů chyběl před auditem a chybí i po auditu. Hodnota nebyla doplněna ani změněna. Totéž platí pro placeholdery.
- sequence.json nebyl změněn. Pořadí záznamů bylo zachováno.
- database_index.json byl po každé změně záznamu synchronizován a následně ověřen. V rozsahu 8xxxx má 51 položek: 49 validated, 2 placeholder; city u všech 49 obsahových záznamů odpovídá Bratislavě.

## Výsledky jednotlivých záznamů

### Obsahová kontrola PASS – 35 záznamů

Tyto záznamy prošly provedenými obsahovými, jazykovými, geografickými a strukturálními kontrolami. Zůstávají validated, protože v celé auditované sadě není nastaveno data_version=5 a publikace by nebyla kompatibilní s generátorem Exploreru.

81101, 81102, 81103, 81104, 81105, 81106, 81107, 81108, 81109

82101, 82102, 82103, 82105, 82106, 82107, 82108, 82109

83000, 83007

83101, 83102, 83103, 83104, 83106, 83107, 83151, 83152, 83153, 83154

84002, 84008

84101, 84102, 84103, 84104

### Opravený zdrojový formát – 14 záznamů v rozsahu Bratislava a 1 další slovenský záznam

Ve všech 14 dotčených bratislavských záznamech a v záznamu 90001 byly zdrojové reference převedeny na formát používaný českými originály: sources[] obsahuje pouze title, url, type a facts[].sources[] obsahuje přímo URL, které se přesně shodují s sources[].url. Všechny původní reference byly před převodem jednoznačně namapovány; žádný zdroj nebyl ztracen. Opakované URL v 84110 a 90001 byly sloučeny na jedinou položku; reference ve faktech byly zachovány jako přímé URL.

Slovenský schema.json již používá stejnou technickou definici source a facts[].sources jako české schéma, proto nebylo nutné měnit samotné schéma. Opraveny byly dokumenty, které chybně vyžadovaly src_* identifikátory. Všech 14 bratislavských záznamů zůstává validated; tato technická oprava sama o sobě nemění výsledek ostatních auditních kontrol a není pokynem k publikaci.

## Provedené obsahové a datové opravy

- 81101: opraveny německé, anglické, španělské, francouzské, italské a nizozemské překlady faktů fact_002 a fact_004, které byly omylem česky. Doplněny zásadní chybějící příběhy: hlavní město v letech 1969/1993 (fact_011), Bratislavský hrad (fact_012), historická budova Slovenského národního divadla (fact_013) a Stará tržnica (fact_014).
- 81102: doplněna pamětní deska obětem střelby při invazi 21. srpna 1968 (fact_022) a Most SNP (fact_023). U Mostu SNP je datum otevření uvedeno jako 26. srpna 1972 bez chybného tvrzení, že šlo o výročí SNP.
- 81103: doplněn příběh Ľudovíta Štúra na bratislavském evangelickém lyceu (fact_011); zahrnuje také doložené absolventy Jána Kollára a Milana Rastislava Štefánika.
- 81106: do fact_002 doplněna role Grasalkovičova paláce jako rezidence prezidenta Slovenského státu během druhé světové války.
- 82107: všech šest faktů v českém originálu a translations.cs převedeno ze slovenštiny do češtiny. Zachován význam, data a věcný obsah.
- 84101: doplněn chybějící povinný status=validated.
- 83101: fact_003 nyní pokrývá pouze událost z roku 1683. Zmínka o bitvě u Lamače roku 1866 byla odstraněna, protože primární přiřazení této události zůstává v 84103.
- Administrativní zařazení opraveno: 82102, 82103, 82108, 82109 → městská část Ružinov, okres Bratislava II; 84110 → městská část Devín, okres Bratislava IV.
- Doplněny odpovědné orientační body pro dříve prázdné lokace: 84106/fact_005, 84107/fact_006, 84107/fact_009, 85105/fact_001. U kaple sv. Vendelína a horárny jsou body výslovně označeny jako přibližné/orientační; mostní soubor má reprezentativní bod a muzeum přesnou adresu.
- Opraveny vazby zdrojů: v 81109 odstraněn zastaralý duplicitní odkaz; do hlavních seznamů zdrojů doplněny chybějící položky pro 82105 (8), 84103 (2) a 84104 (3). Všechny URL použité v těchto faktech nyní odpovídají položkám v hlavním seznamu zdrojů.

## Závěrečné kontroly

- Všech 49 obsahových záznamů má všech 7 jazykových větví: cs, de, en, es, fr, it, nl.
- Pořadí a identifikátory faktů odpovídají napříč jazykovými větvemi; translations.cs přesně odpovídá českému originálu.
- Identifikátory faktů jsou jedinečné.
- V žádném z 49 obsahových záznamů již nezůstala prázdná location; souřadnice jsou v platném rozsahu.
- Kategorie, map_category, priority, typy a přesnosti lokací odpovídají povoleným hodnotám schématu.
- Read-back všech 14 migrovaných bratislavských záznamů a záznamu 90001 potvrdil, že každý faktový zdroj je přímá URL přesně odpovídající položce sources[].url; žádný zdrojový objekt neobsahuje id.
- Kontrola explorer_index.json: status=published, data_version=5, count=0, map_point_count=0, bez mapových dlaždic. To odpovídá stavu, kdy žádný záznam z tohoto rozsahu není publikován jako V5. Manifest nebyl ručně upravován.
- Nebylo použito AJV ani jiný plný validační běh; kontrola byla provedena podle aktuálních definic schématu a povolených hodnot.
- Nebyla provedena záloha na Dropbox; uživatel o ni v tomto požadavku nežádal.

## Stav před závěrečným kontrolním průchodem

1. Závěrečný kontrolní průchod všech 49 obsahových záznamů byl proveden a zdokumentován níže.
2. Všech 49 obsahových záznamů zůstává validated; V5 ani publikace nebyly požadovány.
3. Migrace záznamu 90001 leží mimo tento auditní rozsah a zůstává samostatně evidována.


## Dodatečná povinná rešerše významných témat – 2026-11-22

Rešerše byla provedena před závěrečným kontrolním průchodem za celé území 8xxxx. Porovnáním oficiálních městských, památkových, univerzitních a historických zdrojů s obsahem všech 49 záznamů byly potvrzeny tři významné mezery:

1. **81101 / fact_015 – Universitas Istropolitana (Academia Istropolitana):** doplněna první univerzita na území dnešního Slovenska, založená z iniciativy Matyáše Korvína v roce 1465 a otevřená v roce 1467. Původní název Universitas Istropolitana je odlišen od pozdějšího označení Academia Istropolitana. Doplněny zdroje, fyzická adresa Ventúrska 3 a souřadnice.
2. **81103 / fact_012 – Matej Bel:** doplněn významný polyhistor a pedagog, rektor bratislavského evangelického lycea od roku 1714 a farář německé evangelické obce od roku 1719. Doplněny zdroje SAV a evangelického sboru a mapový bod historického lycea na Konventná 15.
3. **81103 / fact_006 – Župní dům a 14. březen 1939:** existující fakt rozšířen o skutečnost, že zde zasedal Slovenský sněm a vyhlásil samostatný Slovenský stát. Text výslovně uvádí autoritářský charakter režimu a jeho podřízenost nacistickému Německu. Zachován příběh budovy i událost roku 1992.

Všechny tři změny byly zapsány do kanonických JSON souborů a ověřeny zpětným načtením z GitHubu. U 81101 a 81103 odpovídají ID a pořadí faktů ve všech sedmi jazykových větvích; česká větev přesně odpovídá českému originálu; všechny faktové URL odpovídají položkám v hlavním seznamu zdrojů.

## Finální kontrolní průchod

- Všech 49 obsahových JSON záznamů bylo znovu načteno z GitHubu.
- U všech 49: shoda názvu souboru a hodnoty postcode, status validated, jedinečná ID faktů, sedm jazykových větví, shodná ID a pořadí faktů, český originál shodný s translations.cs, všechny faktové zdrojové URL dohledatelné v top-level sources a všechny existující lokace s platnými rozsahy WGS84.
- Nové položky v 81101 a 81103 byly navíc samostatně zkontrolovány proti povoleným kategoriím, map_category, typům polohy a přesnosti.
- Oba placeholdery 85000 a 85009 byly ověřeny jako čisté placeholder záznamy; nebyly upraveny.
- database_index.json obsahuje všech 51 položek rozsahu; city a status odpovídají kanonickým JSONům. Nebyla potřebná žádná změna indexu.
- sequence.json obsahuje 1 413 položek; žádná změna pořadí ani obsahu nebyla provedena.
- Nebyl spuštěn AJV ani jiný plný externí validační běh, v souladu s auditním promptem. Provedena byla strukturální kontrola načtených JSON podle schématu.
- data_version nebyl u žádného záznamu doplněn ani změněn. Všech 49 obsahových záznamů zůstává validated; žádný záznam nebyl publikován.

## Geografické položky ponechané jako REVIEW REQUIRED

Následující konflikty jsou výslovně popsány v kanonických verification.postcode_conflict_note a bez primárního potvrzení Slovenskou poštou/RAGEO je nelze bezpečně uzavřít:

- **84002** – dva odlehlé adresní body v Lamači vedle hlavního souboru v Záhorské Bystrici.
- **82106** – adresní body ve více městských částech; nelze z nich odvozovat přesnou hranici doručovací oblasti.
- **82109** – jeden odlehlý odvozený adresní bod přiřazený k Pezinku.
- **83107** – dva odlehlé odvozené adresní body přiřazené k Pezinku.
- **84106** – jeden izolovaný odvozený adresní bod v Pezinku.
- **84110** – čtyři odlehlé adresní body mimo hlavní souvislou oblast Devína.

Uvedené záznamy zůstávají validated. Jejich faktický obsah ani reprezentativní body nebyly kvůli neověřeným odlehlým adresám automaticky rozšiřovány. Ostatní již doložené konflikty s vysvětleným řešením (např. aktuální PSČ kostela 82103, adresa Kalvínského kostela 81106 a synagogy 81108) nebyly znovu otevírány.

## Konečný stav a další krok

- **43 záznamů:** PASS v provedených auditních kontrolách.
- **6 záznamů:** REVIEW REQUIRED kvůli výše uvedeným neuzavřeným geografickým konfliktům.
- **2 záznamy:** placeholder, mimo obsahový audit.
- **Publikace/V5:** neprovedena; data_version zůstává beze změny a uživatel o publikaci ani změnu verze v tomto požadavku nežádal.
- **Dropbox záloha:** neprovedena; nebyla požadována.

Další nutný krok: ověřit šest konkrétních odlehlých adresních bodů proti primárnímu RAGEO a/nebo Slovenské poště. Do té doby nelze celý blok označit jako bezvýhradně PASS ani přistoupit k publikaci.
