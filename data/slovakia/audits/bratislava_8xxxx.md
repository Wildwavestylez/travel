# Finální audit Bratislava – PSČ 8xxxx

- Datum: 2026-11-22
- Rozsah: všechny bratislavské kódy řady 8xxxx obsažené v naplněném `data/slovakia/sequence.json`.
- Celkový výsledek: **BLOCKED** – obsahová kontrola dokončena, publikaci blokují dvě nevyřešené projektové podmínky.
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

### BLOCKED – 14 záznamů

V těchto záznamech jsou zdrojové objekty opatřeny vlastností id a pole facts[].sources na ně odkazuje. Odkazy na zdroje se podařilo spárovat s položkami v hlavním poli sources, ale aktuální schema.json v definici $defs.source povoluje pouze title, url a type a má additionalProperties=false. Vlastnost id tedy schéma zakazuje, zatímco CONTENT_STANDARD.md a auditní pravidla s identifikátory zdrojů počítají.

Dotčené záznamy:
82104, 84105, 84106, 84107, 84108, 84110, 85101, 85102, 85103, 85104, 85105, 85106, 85107, 85110

Jde o dokumentový rozpor mezi schématem a obsahovým standardem. Nebylo provedeno obcházení problému převodem ID na URL, mazáním identifikátorů ani změnou schématu. Všech 14 záznamů zůstává validated a nesmí být publikováno, dokud nebude rozpor vyřešen na úrovni projektových dokumentů.

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
- Všechny běžné URL odkazy na zdroje se párují s hlavním seznamem. U 14 záznamů s ID odkazy jsou ID dohledatelná, ale narážejí na výše uvedený rozpor schématu.
- Kontrola explorer_index.json: status=published, data_version=5, count=0, map_point_count=0, bez mapových dlaždic. To odpovídá stavu, kdy žádný záznam z tohoto rozsahu není publikován jako V5. Manifest nebyl ručně upravován.
- Nebylo použito AJV ani jiný plný validační běh; kontrola byla provedena podle aktuálních definic schématu a povolených hodnot.
- Nebyla provedena záloha na Dropbox; uživatel o ni v tomto požadavku nežádal.

## Otevřené kroky

1. Rozhodnout a sjednotit dokumentový kontrakt pro zdroje: buď povolit sources[].id ve schématu, nebo upravit obsahový standard a auditní pravidla na formát, který současné schéma skutečně dovoluje. Do té doby zůstává 14 uvedených záznamů blokovaných.
2. Po vyřešení rozporu znovu ověřit těchto 14 záznamů a dokončit audit celé sady.
3. Teprve po úspěšném dokončení celého rozsahu může uživatel výslovně zadat převod na V5 a publikaci. Bez takového pokynu nebyl data_version měněn a žádný záznam nebyl publikován.
