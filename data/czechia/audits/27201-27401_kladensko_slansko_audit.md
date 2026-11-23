# CZ-KLADENSKO-SLANSKO — finální audit 27101–27401

**Kanonické ID:** `CZ-KLADENSKO-SLANSKO-27201-27401`  
**Auditní prompt:** `data/czechia/prompt_audit.md` v2.1  
**Výsledek:** `PASS`  
**Stav běhu:** dokončený auditní průchod; otevřené položky jsou přesně vypsány níže.

> Uživatelem zadaný rozsah byl 27101–27401. PSČ 27101 je již součástí kanonického taháku [26901–27101](26901-27101_rakovnicko_audit.md), kde je uzavřeno jako PASS / PUBLISHED V5. Je proto převzato jako hotové a nebylo znovu auditováno. Tento tahák pokrývá zbývajících 42 PSČ 27201–27401. Nevzniká duplicitní audit pro 27101.

## 1. Inventář

- Požadovaný celek: **27101–27401 (43 PSČ)**.
- 27101 je převzato z předchozího uzavřeného taháku 26901–27101: PASS / PUBLISHED V5 / BACKUP VERIFIED / READ-ONLY LOCKED.
- Tento tahák zahrnuje zbývajících **42 PSČ: 27201–27401**.
- 42/42 nových PSČ odpovídá `sequence.json`, `groups`, RÚIAN CSV a Supabase.
- Po odstranění duplicitního faktu: **349 faktů / 2 443 jazykových položek**.
- Každý jazyk (`cs,de,en,es,fr,it,nl`) obsahuje 349 položek.
- Statusy nového rozsahu: **40 validated, 2 placeholder, 0 published**; všech 42 záznamů má `data_version=1`.
- 27101 zůstává published/v5 v předchozím bloku.

## 2. Zásadní turistická a historická úplnost — kontrola za celek

Hlavní témata, která jsou v existujících záznamech pokryta:

- Lidice a vyhlazení v roce 1942 — 27354.
- Přemyslovské hradiště Budeč — 27328.
- Libušínské hradiště — 27306.
- Hornický skanzen Mayrau — 27307.
- Vesnická památková rezervace Třebíz — 27375.
- Historické jádro a husitské dobytí Slaného — 27401.
- Dvořákovy hudební začátky ve Zlonicích — 27371.
- Lány a T. G. Masaryk jsou již pokryty v předchozím bloku 27061; nepřidávat duplicitně.

### Doplněná zásadní osobnost

Do 27201 byl doplněn **Antonín Čermák**, kladenský rodák a starosta Chicaga, jako `fact_013`:

- narození v Kladně 9. 5. 1873;
- emigrace s rodiči do USA;
- zvolení starostou Chicaga 7. 4. 1931;
- postřelení při atentátu na Franklina D. Roosevelta 15. 2. 1933 a úmrtí 6. 3. 1933;
- kategorie `people`, priorita B, `map_category=personality`;
- zdroje: město Kladno a Ministerstvo zahraničních věcí ČR;
- český text a všech šest cizojazyčných verzí uloženy; všech sedm jazykových položek ověřeno read-backem.
- `location=null` ponecháno: dostupný zdroj dokládá rodné město a pamětní místo, nikoli ověřené souřadnice konkrétního bodu. Reprezentativní bod PSČ nebyl převzat.

Po doplnění Čermáka nebyla v cíleném regionálním průzkumu zjištěna další srovnatelně zásadní mezera, která by odůvodňovala nový fakt.

## 3. Potvrzené opravy

Všechny zápisy byly provedeny sekvenčně a změněné položky byly načteny zpět.

| PSČ | Oprava |
|---|---|
| 27201 | Přidán Antonín Čermák jako `fact_013` ve všech 7 jazycích |
| 27201 | Zdeněk Miler: `map_category` z `museum` na `personality` |
| 27308 | `fact_001` a `fact_004`: české master texty obnoveny, protože byly omylem v nizozemštině; aktualizováno všech 6 cizojazyčných verzí |
| 27308 | `fact_005`: `historic_village` opravena na `architecture` |
| 27309 | `fact_004`: český překlad synchronizován s master textem |
| 27321 | `fact_007`: český překlad synchronizován s master textem |
| 27401 | `fact_002` Pražská brána: `map_category` z `castle` na `historical_monument` |
| 27306 | Odstraněn zastaralý `postcode_conflict`; aktuální RÚIAN CSV bez konfliktu, kontrola k 2026-11-23 |
| 27304, 27322, 27324, 27328, 27351, 27353, 27354, 27362, 27363, 27364, 27372, 27379 | Rozšířeno všech 38 krátkých českých master textů; doplněny odpovídající překlady v šesti jazycích |
| více PSČ | Doplněno 33 poloh s přímými zdroji a odpovídající přesností; 12 neověřitelných poloh ponecháno jako null |
| 27203 / 27309 | Duplicita lesního památníku vyřešena: hlavní záznam zachován v 27203/fact_007, duplicitní 27309/fact_008 odstraněn z facts i všech 7 jazykových polí |

Doplňující administrativní ověření:
- 27341: sídlo pošty Brandýsek je v části Olšany, Slánská 62; `city=Brandýsek`, `district=Olšany` je správně.
- 27372: `city=Šlapanice` odpovídá evidenci adres pro PSČ 27372.
- 27306: po kontrole RÚIAN bez aktivního konfliktu.

### Rozšíření 38 krátkých českých textů

| PSČ | Počet |
|---|---:|
| 27304 | 1 |
| 27322 | 5 |
| 27324 | 7 |
| 27328 | 1 |
| 27351 | 1 |
| 27353 | 6 |
| 27354 | 1 |
| 27362 | 6 |
| 27363 | 1 |
| 27364 | 1 |
| 27372 | 7 |
| 27379 | 1 |
| **Celkem** | **38** |

Read-back: 38/38 textů má nejméně 350 znaků, všech 38 odpovídá `translations.cs` a všech 228 cizojazyčných doplnění je vyplněno.

## 4. Mechanické a překladové kontroly

Pro 42 nových PSČ / 349 faktů:

- 349/349 českých master textů má nejméně 350 znaků.
- 349/349 `translations.cs` odpovídá master textům.
- Každý jazyk obsahuje 349/349 položek.
- 0 nesouladů ID mezi jazykovými verzemi.
- 0 prázdných překladových textů.
- 0 faktů bez zdroje.
- 0 neplatných `map_category`.
- 0 neplatných objektů `location`; všechny vyplněné polohy mají platné souřadnice, povolený typ a přesnost a zdrojovou URL.
- 337 faktů má vyplněnou polohu; 12 zůstává záměrně null.
- 0 aktivních konfliktů PSČ.
- 0 známých duplicit po sloučení památníku.

Nebyl spuštěn samostatný AJV běh. Nebyla čtena ani měněna tabulka `explorer_map_points`; žádná existující souřadnice nebyla přeměřena nebo posunuta.

## 5. Záměrně prázdné polohy

Po cíleném dohledávání zůstává **12 faktů s `location=null`**. Nejde o nevyřešené chyby: v každém případě by doplnění souřadnic znamenalo nepodložený odhad nebo zavádějící reprezentativní bod.

| PSČ / fakt | Důvod ponechání null |
|---|---|
| 27201/fact_013 | U Antonína Čermáka je doloženo Kladno, nikoli přesný rodný dům. |
| 27304/fact_001 | Archeologický nález Na Pískách je popsán parcelou a polohou na okraji obce, ale bez ověřeného bodu pohřebiště. |
| 27306/fact_008 | Hrdlívská růže pocházela ze soukromé zahrady; přesné místo není veřejně doloženo. |
| 27307/fact_007 | U Ferdinanda Velce není určen přesný rodný dům. |
| 27321/fact_005 | Pohřebiště mezi Hobšovicemi a Ješínem je doloženo v širším úseku stavby I/16, nikoli přesným bodem. |
| 27321/fact_006 | Údajné Krolmusovo pohřebiště nemá přesně doloženou polohu. |
| 27321/fact_009 | Pomník na silnici k Luníkovu je popsán pouze orientačně, bez ověřených souřadnic. |
| 27343/fact_007 | U vodojemu v Buštěhradě je doložena západní část města, nikoli přesný bod. |
| 27351/fact_006 | Historie Horního Bezděkova a Malých Kyšic se týká dvou sídel; nemá jeden reprezentativní fyzický bod. |
| 27354/fact_009 | Zákolanský potok je liniová chráněná lokalita; přesný bod chráněného úseku v Makotřasech není ověřen. |
| 27363/fact_007 | U Antonína Kammela je doložena Běleč, nikoli přesný rodný dům. |
| 27363/fact_008 | NPR Vůznice je rozsáhlé území; zdroj potvrzuje přesah do katastru Bělče, nikoli přesný bod této části. |

### Vyřešená duplicita lesního památníku

- `27203/fact_007` a `27309/fact_008` popisovaly stejný lesní památník civilním obětem náletu 12. 9. 1944.
- Přímý zdroj památníku uvádí souřadnice **50.1563778, 14.1450417** a polohu v lese u Dubí.
- Počet obětí se v pramenech rozchází: zpráva Vlády ČR uvádí 35 (22 usmrcených na místě a 13 zemřelých po převozu), Katolické noviny 36 a farnost 38. Proto byl titul i text faktu upraven tak, aby žádné jediné číslo nepředstíral jako jisté; všechny tři varianty jsou výslovně uvedeny.
- Porovnání s adresními místy v Dubí podporuje primární přiřazení **27203**: nejbližší doložené adresní body na ulici Lesní mají PSČ 27203, zatímco adresy 27309 na Na Cikánce leží dále.
- V `27203/fact_007` zůstal hlavní záznam; doplněna informace o poškození kostela sv. Jana Křtitele při témže náletu a přístupové cestě.
- Duplicitní `27309/fact_008` byl odstraněn z `facts` i ze všech sedmi jazykových polí. Ostatní ID a položky byly zachovány.

Zdroje:
- https://vets.estranky.cz/clanky/vpm-okres-kladno/kladno---dubi.html
- https://www.vets.cz/vpm/mista/obec/4214-/
- https://regiony.kurzy.cz/psc/kladno-okres-kladno/dubi-cast/
- https://regiony.kurzy.cz/psc/kladno-okres-kladno/lesni/
- https://vlada.gov.cz/cz/clenove-vlady/pri-uradu-vlady/jiri-dienstbier/aktualne/ministr-dienstbier-uctil-na-kladne-pamatku-obeti-tragedie-z-2--svetove-valky-122504/
- https://www.velvary.cz/mesto/aktuality/mestske-muzeum-patra-po-obeti-tragicke-udalosti-z-2-svetove-valky-3000cs.html
- https://katolickenoviny.cz/nalet-z-roku-1944-aktualni-i-po-80-letech/

## 6. Provozní uzavření

- Nebyla změněna `sequence.json`, RÚIAN CSV, schéma ani aplikační kód.
- Statusy zůstaly beze změny: 40 validated, 2 placeholder.
- Nebyla provedena publikace V5 ani změna `data_version`.
- Nebyla spuštěna záloha ani Edge Function.
- Nebyl aktivován read-only zámek.
- Nebyla provedena žádná změna v Neonu.
- 27101 zůstává převzatý z předchozího uzavřeného auditu.

**Auditní výsledek: PASS.** Všechny relevantní kontroly jsou dokončeny. Dvanáct prázdných poloh je ponecháno záměrně a má konkrétní zdůvodnění. Obsahový audit je dokončen, ale záznamy 27201–27401 zůstávají ve stávajících stavech a nejsou publikované.

Publikaci, zálohu a read-only zamčení provést pouze na výslovný pokyn uživatele.
