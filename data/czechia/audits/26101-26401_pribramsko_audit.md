# Finální audit PSČ 26101–26401 — Příbramsko, Brdy a Sedlčansko

- **Kanonické ID:** `CZ-26101-26401`
- **Rozsah:** přesně 36 geografických PSČ podle `data/czechia/sequence.json`
- **Datum zahájení:** 2026-11-21
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.0
- **Zdroj pravdy:** Supabase `public.postal_codes`, `country_code='CZ'`
- **Stav:** `REVIEW REQUIRED` — úvodní průzkum turistické úplnosti a základní databázové kontroly hotové; opravy a zbývající auditní oblasti jsou otevřené.

## Inventář a stav
- Sekvence obsahuje přesně 36 kódů: 26101; 26202–26206; 26211–26215; 26221–26223; 26225; 26231–26232; 26241–26244; 26251–26252; 26255–26256; 26261–26263; 26272; 26281; 26284–26285; 26291; 26293; 26301; 26401.
- Supabase read-only inventář před zahájením oprav: 36/36 řádků, nyní 241 faktů.
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
- `facts[].location=null`: po cílené opravě zbývá 26 faktů (původně 27). Doplněn `26223/fact_011` — Na horách u Křešína: reprezentativní bod území 49.802222, 13.9525, `nature_reserve`, `area_representative`; identita a charakter lokality potvrzeny AOPK/ISOP, souřadnice převzaty z oficiálního podkladu Natura 2000. Read-back potvrdil kompletní objekt polohy a povolené hodnoty. Ostatních 26 null poloh vyžaduje samostatné cílené ověření; neznámé body zůstanou null s důvodem. Existující neprázdné polohy nebyly přeměřovány.
- RÚIAN JSON `data/czechia/reference/ruian_postcodes.json` se načetl jako prázdný obsah; CSV fallback je dostupný. Ověřena přesná přítomnost všech 36 kódů v CSV (36/36), shoda všech 36 kódů mezi `sequence` a `groups` bez duplicit či rozdílů (36/36) a přítomnost 36/36 v Supabase. Zbývá věcný geografický cross-check místních částí a přiřazení faktů vůči RÚIAN inventáři. Doplnění bodu Na horách u Křešína bylo provedeno na základě AOPK/ISOP a oficiálního Natura 2000 souřadnicového podkladu.
- Neproveden AJV ani samostatný validační běh, v souladu s promptem.

## Otevřené kroky
1. Doplnit a přeložit zásadní chybějící příběhy v 26101 (Svatá Hora, Drtikol; rozhodnout a doložit Jan Drda).
2. Doplnit čtyři české master texty pod 350 znaků a synchronizovat de/en/es/fr/it/nl.
3. Prověřit 27 null poloh a doplnit jen doložitelné body.
4. Dokončit tematický/geografický cross-check RÚIAN CSV, skupin a případných překryvů/duplicit.
5. Dokončit sémantickou kontrolu šesti cizojazyčných překladů a reklamního/propagačního obsahu.
6. Uzavřít kontrolu správních údajů, kategorií a věcných vad napříč celým blokem; následně stanovit PASS/FIX REQUIRED/REVIEW REQUIRED.

**Další krok:** pokračovat cíleným řešením zbývajících 26 prázdných poloh podle hierarchie v Content Standardu; existující neprázdné polohy znovu neověřovat.
