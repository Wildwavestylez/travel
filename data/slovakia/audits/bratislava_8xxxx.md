# Finální audit Bratislava – PSČ 8xxxx

- Datum: 2026-11-22
- Rozsah: všechny bratislavské kódy řady 8xxxx obsažené v naplněném `data/slovakia/sequence.json`.
- Celkový výsledek: **CONTENT AUDIT READY FOR FINAL RECHECK** – rozpor zdrojových referencí byl odstraněn podle českého technického formátu; před uzavřením auditu je nutný závěrečný read-back a validační průchod.
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
- Po migraci musí být při závěrečném read-backu potvrzeno, že každý faktový zdroj je přímá URL a přesně odpovídá položce sources[].url; žádný zdrojový objekt nesmí obsahovat id.
- Kontrola explorer_index.json: status=published, data_version=5, count=0, map_point_count=0, bez mapových dlaždic. To odpovídá stavu, kdy žádný záznam z tohoto rozsahu není publikován jako V5. Manifest nebyl ručně upravován.
- Nebylo použito AJV ani jiný plný validační běh; kontrola byla provedena podle aktuálních definic schématu a povolených hodnot.
- Nebyla provedena záloha na Dropbox; uživatel o ni v tomto požadavku nežádal.

## Otevřené kroky

1. Dokončit závěrečný read-back a kontrolu přímých URL u 14 migrovaných bratislavských záznamů a znovu ověřit všech 49 obsahových záznamů proti schématu.
2. Zachovat všech 49 záznamů ve stavu validated, dokud nebude celý audit úspěšně uzavřen a uživatel výslovně nepožádá o převod na V5 a publikaci.
3. Samostatně zohlednit migraci záznamu 90001, který leží mimo tento auditní rozsah, ale používal stejný starý zdrojový formát.
