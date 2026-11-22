# CZ-KLADENSKO-SLANSKO — finální audit 27201–27401

**Kanonické ID:** `CZ-KLADENSKO-SLANSKO-27201-27401`  
**Auditní prompt:** `data/czechia/prompt_audit.md` v2.1  
**Výsledek:** `REVIEW REQUIRED`  
**Stav běhu:** dokončený auditní průchod; otevřené položky jsou přesně vypsány níže.

> Uživatelem zadaný rozsah byl 27101–27401. PSČ 27101 je již součástí kanonického taháku [26901–27101](26901-27101_rakovnicko_audit.md), kde je uzavřeno jako PASS / PUBLISHED V5. Je proto převzato jako hotové a nebylo znovu auditováno. Tento tahák pokrývá zbývajících 42 PSČ 27201–27401. Nevzniká duplicitní audit pro 27101.

## 1. Inventář

- Požadovaný celek 27101–27401: **43 PSČ**.
- Již uzavřeno v předchozím taháku: **27101 (1 PSČ)**.
- Nový auditní rozsah: **42 PSČ**.
- Přesný seznam nového rozsahu:  
  `27201, 27203, 27204, 27301, 27302, 27303, 27304, 27305, 27306, 27307, 27308, 27309, 27321, 27322, 27323, 27324, 27325, 27326, 27327, 27328, 27329, 27341, 27342, 27343, 27345, 27351, 27353, 27354, 27361, 27362, 27363, 27364, 27371, 27372, 27373, 27374, 27375, 27376, 27377, 27378, 27379, 27401`.
- Sequence: 42/42; groups: 42/42; RÚIAN CSV: 42/42; Supabase: 42/42. V požadovaném celku včetně převzatého 27101 je shoda 43/43.
- Nový rozsah obsahuje **350 faktů / 2 450 jazykových položek** (7 jazyků).
- Statusy nového rozsahu: **40 validated, 2 placeholder, 0 published**; všech 42 záznamů má `data_version=1`. Převzatý 27101 zůstává published/v5.
- RÚIAN reference: manifest uvádí feed update 2026-11-01; použit aktuální sdílený `ruian_postcodes.csv`, nikoli nový celostátní download.

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

Všechny níže uvedené změny byly zapsány sekvenčně do Supabase a následně načteny zpět:

| PSČ | Oprava |
|---|---|
| 27201 | Přidán Antonín Čermák jako `fact_013` ve všech 7 jazycích |
| 27201 | `fact_011` Zdeněk Miler: `map_category` změněna z `museum` na `personality` |
| 27308 | `fact_001` a `fact_004`: české master texty obnoveny z českých překladových verzí; původní master texty byly omylem v nizozemštině |
| 27308 | U obou opravených faktů aktualizováno všech 6 cizojazyčných verzí tak, aby odpovídaly českému masteru |
| 27308 | `fact_005`: nepovolená `map_category=historic_village` opravena na `architecture` |
| 27309 | `fact_004`: český překlad synchronizován s českým master textem |
| 27321 | `fact_007`: český překlad synchronizován s českým master textem |
| 27401 | `fact_002` Pražská/Velvarská brána: `map_category` opravena z `castle` na `historical_monument` |
| 27306 | Zrušen zastaralý příznak `postcode_conflict`: aktuální RÚIAN CSV obsahuje 27306 s 1 444 adresními body v Hrdlívě, Libušíně a Třebichovicích. Konfliktní poznámka odstraněna a zdrojová kontrola aktualizována k 2026-11-23. |

Doplňující ověření administrativních údajů:
- 27341: sídlo pošty Brandýsek, část Olšany, potvrzeno adresou Slánská 62; `city=Brandýsek`, `district=Olšany` je správně.
- 27372: `city=Šlapanice` potvrzeno adresními záznamy ČSÚ pro PSČ 27372; nebylo měněno.
- 27306: `city=Libušín`, okres Kladno; po doplnění aktuálního RÚIAN CSV je bez konfliktu.
- V novém rozsahu nyní není žádný záznam s `postcode_conflict=true`.

## 4. Mechanické a překladové kontroly

Pro 42 nových PSČ / 350 faktů:

- 350/350 faktů má zdroj.
- 7/7 jazyků obsahuje 350/350 položek.
- 0 prázdných překladových textů.
- 0 nesouladů ID mezi fakty a jazykovými poli.
- 0 rozdílů mezi `facts[].text` a `translations.cs`.
- 0 neplatných fact ID, `category` nebo `priority`.
- 0 neplatných `map_category` po opravách.
- 0 aktuálních příznaků konfliktu PSČ.
- Nebyl spuštěn AJV ani samostatný validační běh.
- Nebyla čtena ani měněna tabulka `explorer_map_points`; žádná existující souřadnice nebyla přeměřena nebo posunuta.

## 5. Otevřené položky — důvod výsledku REVIEW REQUIRED

### E2. Krátké české master texty

Zjištěno **38 faktů pod 350 znaků**. Cizojazyčné délky nebyly posuzovány. Níže je přesný seznam:

| PSČ / fakt | Znaků | Název |
|---|---:|---|
| 27304/fact_004 | 268 | Barokní socha svatého Blažeje na kačické návsi |
| 27322/fact_002 | 343 | Kostel Stětí sv. Jana Křtitele – renesanční stavba z roku 1595 |
| 27322/fact_005 | 334 | Karel Dymeš – rodák z Hospozína a oběť nacistické represe |
| 27322/fact_007 | 312 | Kostel sv. Václava v Kmetiněvsi – gotická věž a barokní přestavba |
| 27322/fact_009 | 266 | Barokní sousoší sv. Jana a Pavla mezi Hospozínem a Hospozínkem |
| 27322/fact_011 | 342 | Pomník padlým v Kmetiněvsi – připomínka roku 1922 |
| 27324/fact_001 | 343 | Velvary – královské město na staré obchodní cestě |
| 27324/fact_002 | 238 | Pražská brána – poslední výrazná brána velvarského opevnění |
| 27324/fact_003 | 276 | Kostel sv. Kateřiny – gotické jádro a pozdější přestavby |
| 27324/fact_004 | 304 | Kostel sv. Jiří – pozoruhodná renesanční stavba |
| 27324/fact_010 | 348 | Sazená – barokní kamenný most se sochařskou výzdobou |
| 27324/fact_014 | 323 | Bratkovice – kaple Panny Marie a paměť na starou ves |
| 27324/fact_018 | 315 | Velká Bučina – kaplička po krupobití a starý les |
| 27328/fact_008 | 324 | Kováry – kaple sv. Isidora, patrona rolníků |
| 27351/fact_004 | 332 | Dolany u Kladna – poutní kaplička a památné duby |
| 27353/fact_001 | 332 | Hostouň – středověké panství a dvě tvrze |
| 27353/fact_002 | 227 | Kostel sv. Bartoloměje |
| 27353/fact_003 | 270 | Starý židovský hřbitov |
| 27353/fact_004 | 302 | Nový židovský hřbitov a rodina Brandeisových |
| 27353/fact_005 | 284 | Běloky: kaple sv. Floriána a paměť obce |
| 27353/fact_006 | 291 | Běloky – ves doložená od roku 1257 |
| 27354/fact_006 | 343 | Makotřaská tvrz: opevněné sídlo zničené za husitských válek |
| 27362/fact_002 | 284 | Pod Veselovem: stepní svah s konikleci |
| 27362/fact_003 | 346 | Zkamenělec – kámen s několika legendami |
| 27362/fact_004 | 277 | Vodní mlýny a vlastní elektřina před elektrifikací |
| 27362/fact_005 | 274 | Mariánský sloup z roku 1674 |
| 27362/fact_006 | 329 | František Bakule – učitel z Družce |
| 27362/fact_007 | 285 | Kaplička Panny Marie v Dolním Bezděkově |
| 27363/fact_002 | 342 | Bratroňská lípa – památný strom u kostela |
| 27364/fact_003 | 321 | Kaple sv. Jana Nepomuckého a socha na návsi |
| 27372/fact_001 | 316 | Poutní kostel sv. Isidora v Budenicích |
| 27372/fact_003 | 227 | Barokní kaple sv. Jana Nepomuckého |
| 27372/fact_004 | 317 | Jarpice mezi dvěma středověkými klášterními panstvími |
| 27372/fact_005 | 334 | Římský hrob a první písemná zmínka o Poštovicích |
| 27372/fact_006 | 255 | Kaplička se slunečními hodinami z roku 1849 |
| 27372/fact_007 | 244 | Barokní socha sv. Donáta z roku 1724 |
| 27372/fact_008 | 255 | Poštovický dub – čtyřsetletý památný strom |
| 27379/fact_002 | 330 | Kostel Nanebevzetí Panny Marie |

Tyto položky nebyly doplněny výplňovým textem. Je nutné doplnit pouze konkrétní ověřitelné informace, dostat český master na nejméně 350 znaků a upravit všech šest cizojazyčných překladů.

### G. Chybějící polohy

Zjištěno **45 faktů s `location=null`**. Nebyla provedena plošná náhrada reprezentativním bodem a nebyly vymyšleny souřadnice. Položky zůstávají otevřené pro cílené dohledání podle geografické hierarchie:

`27201/fact_007, fact_013; 27302/fact_002, fact_007; 27304/fact_001, fact_003; 27305/fact_003, fact_007, fact_008; 27306/fact_002, fact_005, fact_006, fact_007, fact_008; 27307/fact_004, fact_006, fact_007; 27308/fact_007; 27309/fact_006; 27321/fact_005, fact_006, fact_009; 27343/fact_007; 27345/fact_001, fact_002, fact_003; 27351/fact_001, fact_002, fact_004, fact_006, fact_007, fact_008, fact_009, fact_010; 27354/fact_009; 27362/fact_005, fact_006; 27363/fact_006, fact_007, fact_008; 27376/fact_005; 27379/fact_001, fact_005, fact_006; 27401/fact_005.`

### C. Duplicitní příběh — otevřené primární přiřazení

- `27203/fact_007` a `27309/fact_008` popisují stejný lesní památník 38 dělníkům zabitým při náletu 12. 9. 1944 v Kladně-Dubí.
- Spolek pro vojenská pietní místa uvádí umístění v lese u cesty k Jánu a souřadnice; evidence adresních míst ukazuje, že část Dubí má adresy pod více PSČ.
- Primární PSČ nelze z dostupného podkladu pro samotný lesní bod bezpečně určit. Oba fakty proto zatím zůstávají beze změny; před uzavřením je nutné určit jedno primární přiřazení a druhý výskyt odstranit včetně překladů.

Zdroje:
- https://vets.estranky.cz/clanky/vpm-okres-kladno/kladno---dubi.html
- https://www.vets.cz/vpm/mista/obec/4214-/
- https://regiony.kurzy.cz/psc/kladno-okres-kladno/dubi-cast/
- https://apl2.czso.cz/irso4/buddet.jsp?b=21&budid=387900&hkodcis=42&idob=1001924771&kod=65161&kodcis=42&kodpol=nnnnnn

## 6. Provozní uzavření

- Nebyla změněna `sequence.json`, RÚIAN CSV, schéma ani aplikační kód.
- Nebyla provedena publikace V5 ani změna statusů.
- Nebyla spuštěna záloha ani Edge Function.
- Nebyl aktivován read-only zámek.
- Nebyla provedena žádná změna v Neonu.
- 27101 zůstává převzatý z předchozího uzavřeného auditu.
- Auditní výsledek zůstává **REVIEW REQUIRED**, dokud nejsou vyřešeny krátké české texty, null polohy a primární přiřazení duplicitního památníku.

## 7. Přesný další krok

Pokračovat pouze otevřenými položkami: nejprve ověřit a rozšířit 38 krátkých českých master textů včetně šesti překladů, poté cíleně prověřit 45 null poloh a určit jediné primární PSČ pro památník v Dubí. Po opravách načíst zpět pouze změněné záznamy a aktualizovat tento tahák. Publikaci a zálohu provést až na výslovný pokyn uživatele.
