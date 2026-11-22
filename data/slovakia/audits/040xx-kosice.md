# Finální audit Košice 040xx

- Datum auditu: 2026-11-22
- Rozsah: 04001, 04011, 04012, 04013, 04014, 04015, 04016, 04017, 04018, 04022, 04023
- Stav: **AUDIT PASS — obsahové a strukturální kontroly dokončeny**
- Publikace: neprovedena; všech 11 záznamů zůstává `validated`
- Neon / Supabase: beze změny

## 1. Výsledek v kostce

| Kontrola | Výsledek |
|---|---:|
| Auditované PSČ | 11 / 11 |
| Fakta po auditu | 69 |
| Fakta s ověřeným mapovým bodem | 66 |
| Fakta bez samostatného mapového bodu | 3 |
| Jazykové větve | cs, de, en, es, fr, it, nl |
| Nesoulad ID nebo pořadí překladů | 0 |
| Nesoulad českého rootu a `translations.cs` | 0 |
| Schema / enum / souřadnicové chyby | 0 |
| Záznamy změněné na published | 0 |

Všech 11 záznamů bylo znovu načteno z GitHubu. Všechny zůstávají `validated`; pole `data_version` nebylo nastaveno. `database_index.json` odpovídá jejich stávajícím městům a stavům, proto nebyl obsahově měněn. Neproběhl build publikovaného Exploreru ani synchronizace do Neonu.

## 2. Nově doplněná významná témata

### 04001 — Košice / historické centrum a širší městská oblast

Doplněno pět samostatných faktů:
- `fact_008` — Kaplnka sv. Michala, středověká hřbitovní kaple a kostnice.
- `fact_009` — Košický maraton, pořádaný od roku 1924 a označovaný za nejstarší maraton v Evropě.
- `fact_010` — Košický hrad na Hradové, nedokončená středověká pevnost.
- `fact_011` — Košická dětská historická železnica, jediná zachovaná pionýrská železnice bývalého Československa.
- `fact_012` — ZOO Košice v Kavečanech, areál o rozloze přibližně 288 ha.

Po doplnění bylo pořadí všech 12 faktů upraveno podle významu a lokální relevance. Rozsah 04001 se neztotožňuje pouze se Starým Městem; ověřovací poznámka již zachycuje více městských částí uvedených v oficiálním katalogu ulic.

### 04011 — Košice-Západ a další lokality

Doplněno:
- `fact_005` — Lorinčík: kostel sv. Vavřince, jeho historický vývoj a klášter bosých karmelitánů dokončený v roce 2014.

Ověřovací poznámka zachovává širší rozsah PSČ včetně Terasy, Juhu, Lorinčíku, Pereše a Luníku IX. Terasa zůstává reprezentativní lokalitou. Pořadí faktů bylo upraveno tak, aby památník obětem holokaustu a významný sakrální areál nebyly až za drobnějšími místními příběhy.

### 04012 — Nad jazerom

- U `fact_003` doplněna poloha vodní plochy Jazero jako reprezentativní bod plochy (`area_representative`).

### 04014 — Košická Nová Ves

- U `fact_002` a `fact_003` doplněn reprezentativní bod historického jádra v okolí kostela sv. Ladislava.
- Nejde o tvrzení, že se celý příběh odehrál přímo v kostele; bod označuje historické jádro obce.

### 04015 — Šaca a Poľov

- U `fact_002` doplněn reprezentativní bod historického jádra Šace u kostela Nanebevzetí Panny Marie.

### 04016 — Myslava a Baška

Doplněno:
- `fact_006` — Baška: první písemná zmínka z roku 1247, deset hospodářských dvorů v roce 1427 a získání obcí Košicemi v roce 1447; vazba na dřevařské a báňské zázemí města.

Doplněny také polohy:
- `fact_001` — reprezentativní bod historického jádra Myslavy u kostela sv. Bartoloměje.
- `fact_003` — historicky přibližná poloha lokality Maša u stejnojmenné zastávky.

Rozsah PSČ 04016 byl výslovně rozšířen i o Bašku: oficiální stránka obce uvádí adresu obecního úřadu Baška 71, 040 16. Reprezentativní město a městská část zůstávají Košice / Myslava; to neomezuje obsahový rozsah PSČ.

Bez samostatného bodu zůstávají:
- `fact_004` — pivovar a cihelna: zdroje popisují více historických provozů, ale nebyla doložena jedna přesná poloha, kterou by bylo možné bezpečně použít pro společný bod.
- `fact_005` — folklorní soubor Hrabina: nebylo doloženo jedno stabilní veřejné místo, které by reprezentovalo samotný soubor.

### 04017 — Barca a Šebastovce

Doplněno:
- `fact_007` — avarské pohřebiště v poloze Lapiše: výzkum 1966–1977, 370 hrobů a 46 jezdeckých pohřbů; odborné zdroje je řadí mezi nejvýznamnější pohřebiště avarského období na Slovensku.
- `fact_008` — kostel sv. Jana Křtitele v Šebastovcích, s ranogotickým jádrem z druhé poloviny 13. století.

Poloha pohřebiště Lapiše zůstává `location: null`: dostupné zdroje potvrzují lokalitu a její název, ale neposkytují dostatečně přesný a bezpečně ověřitelný mapový bod. Nebyla proto vymyšlena souřadnice ani použita poloha jiné památky jako náhrada.

Ověřovací poznámka nyní výslovně uvádí, že PSČ 04017 pokrývá obsahově jak Barcu, tak Šebastovce; reprezentativní městská část zůstává Barca.

## 3. Záměrně nepřidaná nebo nezmapovaná místa

- U 04011 byly zohledněny také Pereš a Luník IX. Nebyl přidán obecný nebo slabě doložený text jen proto, aby měla každá městská část vlastní fakt.
- U 04016 zůstaly bez souřadnic dvě témata, u nichž by jeden bod vytvářel falešnou přesnost.
- U 04017 nebyla poloha avarského pohřebiště nahrazena souřadnicí kostela, hřbitova ani středu městské části.
- U plošných nebo historicky rozptýlených témat byly použity reprezentativní body pouze tehdy, když jejich účel a omezení odpovídají standardu.

## 4. Strukturální a jazyková kontrola

Pro všech 11 JSON záznamů byla provedena read-back kontrola:
- unikátní ID faktů;
- shodné ID a pořadí ve všech sedmi jazykových větvích;
- česká větev přesně odpovídá root `facts`;
- všechny odkazy z `facts[].sources` existují v root registru `sources`;
- povolené hodnoty `category`, `priority`, `map_category`, `location.type` a `location.accuracy`;
- všechny souřadnice jsou číselné a v platném rozsahu;
- každý fakt má explicitní objekt `location` nebo záměrné `null`; žádné pole polohy nechybí.

Výsledek: **0 strukturálních chyb**. Kontrola překladů zde potvrzuje zejména úplnost a zarovnání jazykových větví; není vydávána za samostatnou profesionální jazykovou korekturu každé věty.

### Jazykové úpravy českého rootu

Při kontrole českých textů byly opraveny zjevné slovakismy a smíšené názvy, zejména:
- `Kaplnka` → `Kaple`, `železnica` → `železnice` (04001);
- `stĺp` a `Božia muka` → české `sloup` a `Boží muka` (04013);
- `kaštieľ` → `kaštel`, `Slávikov mlyn` → `Slávikův mlýn`, `Hutnícky kombinát` → `Hutní kombinát` a úprava názvu kaple v Poľově (04015);
- `kaštieľ` → `kaštel` a české skloňování rodových jmen (04017, 04018).

Oficiální místní název `Nad Begányiho mlynom` v Barci byl ponechán v původním znění jako vlastní název archeologické polohy. České `translations.cs` byly po každé jazykové úpravě znovu synchronizovány s root fakty.

## 5. Zdroje použitých doplnění

### Košice 04001
- https://www.kosice.sk/mesto/kaplnka-sv-michala
- https://www.kosicemarathon.com/milniky/
- https://visitkosice.org/vidiet-a-zazit/marathonpoint
- https://www.kosice.sk/mesto/kosicky-hrad-revitalizacia-a-spristupnenie-arch-naleziska
- https://vedanadosah.cvtisr.sk/ludia/historia-a-archeologia/zachranny-archeologicky-vyskum-v-kosiciach-hradovej/
- https://www.pamiatkynaslovensku.sk/kosice-hradova-hrad
- https://www.detskazeleznica.sk/historia
- https://www.detskazeleznica.sk/kontakt
- https://zookosice.sk/o-nas/
- https://visitkosice.org/vidiet-a-zazit/zoo-kosice

### Košice 04011
- https://lorincik.eu/index.php/o-mestskej-casti/historia
- https://www.pamiatkynaslovensku.sk/lorincik-kosice-kostol-sv-vavrinca-diakona
- https://farnostperes.sk/historia/

### Košice 04016
- https://www.baska-obec.sk/historia.html
- https://www.baska-obec.sk/kontakty-0.html
- https://www.pamiatkynaslovensku.sk/baska-kostol-sv-stefana-uhorskeho

### Košice 04017
- https://www.slovensko.sk/sk/institucie/o-institucii/informacie-o-obci/_03bac165-0d57-4b1b-8143-b4449a59ae60
- https://cevnad.sav.sk/aktivita_1_1/SZ_31.pdf
- https://www.pamiatkynaslovensku.sk/sebastovce-kosice-kostol-sv-jana-krstitela
- https://www.enviroportal.sk/eia/dokument/277350

## 6. Konečný stav

- 11/11 záznamů zůstává `validated`.
- `data_version` nebylo nastaveno.
- Žádný záznam nebyl publikován jako V5.
- `database_index.json` byl ověřen a jeho stávající města a statusy odpovídají záznamům; nebyla nutná změna.
- Explorer index, mapové tiles a Pages deployment nebyly spuštěny, protože auditní záznamy zůstávají nepublikované.
- Neon/Supabase nebyl změněn.

**Audit result: PASS — 11/11 Košice 040xx records checked; 69 facts; 66 mapped facts; 3 deliberately unmapped facts; seven language branches aligned; no structural errors; publication not authorized or performed.**
