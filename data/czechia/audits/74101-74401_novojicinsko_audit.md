# Audit PSČ 74101–74401 — Novojičínsko a okolí

**Kanonické ID:** CZ-74101-74401-NOVOJIČÍNSKO  
**Verze auditu:** `prompt_audit.md` V2.0  
**Datum:** 2026-11-20  
**Výsledek:** **REVIEW REQUIRED**  
**Publikace / záloha / read-only lock:** neprovedeno — čeká na výslovný pokyn uživatele.

## 1. Inventář a rozsah

- Rozsah podle `sequence.json`: 38 PSČ.
- Supabase `public.postal_codes`, `country_code='CZ'`: přesně 38/38; žádné chybějící ani nadbytečné kódy.
- `sequence` a `groups`: přesná shoda 38/38, bez duplicit.
- RÚIAN reference `ruian_postcodes.csv`: všech 38 PSČ má záznam.
- Počet faktů po opravách: **261**.
- Jazykové položky: **1 827** (261 × 7).
- Aktuální databázový stav: 38/38 `validated`, `data_version=1`. Audit nemění verzi ani stav.

PSČ:
74101, 74201, 74213, 74221, 74231, 74233, 74235, 74236, 74237, 74242, 74243, 74245, 74247, 74251, 74253, 74254, 74255, 74256, 74257, 74258, 74260, 74265, 74266, 74267, 74271, 74272, 74273, 74274, 74275, 74281, 74282, 74283, 74285, 74291, 74292, 74293, 74301, 74401.

## 2. A — Zásadní turistická úplnost

Průzkum celého území dokončen. Zásadní památky, události a osobnosti jsou z velké části zastoupeny: Nový Jičín a kloboučnická tradice, Štramberk a Šipka, Kopřivnice a Tatra/Zátopkovi/Burian, Fulnek a Komenský, Příbor a Freud, Hodslavice a Palacký, Kunín a Walburga, Frenštát a Albín Polášek, Moravští bratři, Poodří a historické události regionu.

### Potvrzená mezera a oprava

- **74235 — Hynčice (Vražné):** chyběl zásadní příběh Johanna Gregora Mendela a jeho rodného domu.
- Doplněn `fact_005` „Johann Gregor Mendel – rodný dům zakladatele genetiky“.
- Doplněno všech 7 jazyků cs/de/en/es/fr/it/nl, zdroje obce Vražné, Poodří a Mendelianum, poloha 49.61955, 17.835383333, `map_category=personality`.
- Read-back: 74235 má 5 faktů; český master a všech 7 jazykových položek mají shodné ID.

Zdroje:
- https://www.vrazne.cz/obec-1/pamatky/rodny-dum-johanna-gregora-mendela/rodny-dum-johanna-gregora-mendela-259cs.html
- https://www.poodri.com/turisticke-informace-1/pamatky/rodny-dum-johanna-gregora-mendela-0_11.html
- https://www.mendelianum.cz/images/files/MendelianumBrno_rodny_dum_Mendela.pdf

## 3. B — PSČ a správní údaje

- 38/38 řádků má `verification.postcode_conflict=false` a `geographic_test_data=true`.
- Geografický inventář RÚIAN a PSČ odpovídají přesnému rozsahu.
- Okresy: Nový Jičín; pro 74283 a 74285 Ostrava-město.
- Kraj: Moravskoslezský kraj.
- Opraveno pět nekonzistentních hodnot `state`: 74101, 74201, 74213, 74281 a 74282 měly „Moravskoslezský“ místo jednotného „Moravskoslezský kraj“. Read-back všech pěti PASS.
- Ostatní top-level správní hodnoty ponechány beze změny.

## 4. C — Duplicity a přiřazení

- Potvrzena duplicita hradu Starý Jičín: 74101/fact_006 a 74231/fact_001 odkazovaly na stejnou zříceninu a prakticky totožné souřadnice.
- Primární přiřazení ponecháno v 74231, které odpovídá samostatnému PSČ Starý Jičín.
- Duplicitní 74101/fact_006 odstraněn z `facts` a ze všech sedmi jazykových polí.
- Ostatní ID zachována; vzniklá mezera v číslování ID je záměrná kvůli pravidlu zachování ID. Pořadí zbývajících faktů zůstává vzestupné.
- Rychlý průchod názvů a lokalizačních názvů neodhalil další potvrzenou duplicitu téhož objektu. Shodné obecné názvy kostelů patří různým obcím.

## 5. D — Mapové kategorie

- 261/261 faktů používá povolenou hodnotu `map_category`.
- 0 nepovolených hodnot.
- `category` a `map_category` zůstávají oddělené.

## 6. E — Překlady

- 261/261 faktů má odpovídající položku ve všech sedmi jazycích.
- Celkem 1 827 jazykových položek.
- 0 chybějících nebo prázdných textů/názvů.
- 0 strukturálních nesouladů ID a počtu faktů mezi masterem a překladovými poli.
- Opraveny rozdíly českého masteru a `translations.cs`:
  - 74301: 4 fakta — anglické texty v `facts[].text/title` nahrazeny odpovídajícími českými verzemi z `translations.cs`.
  - 74401: 5 faktů — stejná oprava.
  - 74254: 3 fakta, 74258: 1 fakt, 74267: 1 fakt — české překladové položky synchronizovány s českým masterem.
- Celkem 15 synchronizovaných faktů; read-back potvrzuje shodu masteru a cs u všech dotčených záznamů.
- Mendelův nový fakt má všech 7 jazyků.

**Průběžný stav sémantické kontroly (20. 11. 2026):** individuálně zkontrolováno 57/261 faktů, tedy 342/1 566 cizojazyčných textů (de/en/es/fr/it/nl) včetně názvů; z toho 7 faktů v 74101, 8 v 74201, 7 v 74213, 8 v 74221, 6 v 74231, 4 v 74233, 5 v 74235, 3 v 74236, 3 v 74237, 3 v 74242 a 3 v 74243. Zjištěné významové nedostatky byly opraveny a načteny zpět. Read-back dotčených 11 PSČ potvrdil 342/342 kompletních jazykových položek (title i text) a 57/57 faktů validated V1. Zbývá 204 faktů / 1 224 cizojazyčných textů. Strukturální a návaznostní kontroly PASS; sémantická kontrola zůstává otevřená.

## 7. E2 — Délka českého master textu

Původně nalezeno **23 faktů kratších než 350 znaků**. Dosud uzavřeno **22/23 faktů** v pěti dávkách; zbývá **1 položka REVIEW REQUIRED**.

| PSČ | ID | Původní délka | Fakt | Stav |
|---|---|---:|---|---|
| 74272 | fact_013 | 336 | Zaniklá ves Zdislavice | REVIEW REQUIRED — oficiální zdroj potvrzuje pouze polohu v dolině mezi Jedlí a Hlásnicí a pravděpodobný zánik živelnou pohromou; další bezpečně doložený obsah pro odpovědné rozšíření nebyl nalezen. |

**Doložené rozšíření a zápisy — 22/23 faktů:**
- 74255/fact_004 — 345 → 632 znaků; doplněna pramenná výhrada k datu výsadby a přesný popis kronikářské slavnosti z roku 1928.
- 74255/fact_006 — 339 → 667 znaků; doplněn průběh leteckých a pozemních bojů a škody na obci.
- 74256/fact_005 — 343 → 580 znaků; doplněna metodika měření a výslovné omezení, že zdroj nepotvrzuje léčivost ani pitnost.
- 74272/fact_001 — 342 → 559 znaků; doplněna délka 9,76 km, průběh trasy a společná realizace pěti obcí.
- 74272/fact_003 — 253 → 531 znaků; doplněn význam heraldické desky a její památkový kontext.
- 74272/fact_008 — 331 → 562 znaků; doplněna historie první školy v Mořkově (1844, rozšíření 1879 a dnešní využití).
- 74285/fact_007 — 267 → 647 znaků; doplněna stavba a rozšiřování trati, počet stanic, jízdní doba, přepravní výkon a nákladní doprava.
- 74285/fact_011 — 184 → 633 znaků; doplněno umístění kina, technika projekce, formát filmu, premiéra filmu v roce 1991 a filmový festival.
- 74285/fact_014 — 263 → 732 znaků; doplněn správní kontext záboru, přejmenování obce, protest žen, zásah vojska a následné propuštění zadržených.
- 74293/fact_003 — 346 → 675 znaků; doplněn kontext obecní koupě zámku a velkostatku v roce 1910 jako ochrany před germanizací, ručení občanů a následné hospodaření s pozemky.
- 74293/fact_004 — 325 → 684 znaků; doplněn výběr návrhu občany, termín realizace a financování z programu přeshraniční spolupráce INTERREG Česko–Polsko.
- 74285/fact_005 — 194 → 608 znaků; doplněno studium a kněžská dráha Kazimíra Tomáška, jeho podíl na vzniku Opavského besedníku a táboru lidu na Ostré hůrce.
- 74285/fact_006 — 217 → 640 znaků; doplněno financování pomníku, odhalení v roce 1923, pozdější rozšíření a úprava Evženem Schollerem.
- 74285/fact_008 — 256 → 683 znaků; doplněn rozsah ledovcového postupu, změna odtoku Odry, sedimenty a pazourky.
- 74285/fact_009 — 238 → 646 znaků; doplněna posloupnost prvních usedlostí, rodina Rykalových a původní místní názvy.
- 74285/fact_010 — 236 → 638 znaků; neutrálně doplněna současná struktura areálu (minizoo, 18jamkový minigolf, lanové a další atrakce), výslovně odlišeno od historické památky.
- 74285/fact_012 — 212 → 559 znaků; doplněna existence dvou původních svatých obrázků a rozlišení původních zaniklých objektů od dnešního novodobého památníku.
- 74285/fact_013 — 281 → 987 znaků; doplněn detailní rodinný příběh ukrývání Andreje Melnika na statku čp. 43, přesun do silážního žlabu, řezbářství a jeho odchod po osvobození.

U všech 22 opravených faktů byly aktualizovány texty cs/de/en/es/fr/it/nl. Read-back potvrdil 154/154 jazykových položek bez prázdných textů a pod 350 znaků; české master texty i translations.cs mají 0 rozdílů. Po synchronizaci cs je 0 nesouladů master/cs napříč všemi 261 fakty. Zbývá jediná položka: 74272/fact_013 — Zdislavice. Oficiální obecní zdroj potvrzuje pouze polohu v dolině mezi Jedlí a Hlásnicí a pravděpodobný zánik živelnou pohromou; další bezpečně doložené informace nebyly nalezeny, proto je text ponechán bez výplně a označen REVIEW REQUIRED.

Primární podklady první dávky:
- https://www.albrechticky.cz/pamatne-stromy
- https://casopispoodri.cz/starsicisla/pdf/POODRI%201-2013.pdf
- https://moravskoslezsky.kraj.cz/encyklopedie/objekty1.phtml?id=51475
- https://ftp.sedlnice.cz/cs/turista-sedlnice/prirodni-zajimavost
- https://www.icnj.cz/stranka/cyklostezka-koleje-novy-jicin.html
- https://iispp.npu.cz/mis_public/documentDetail.htm?id=735521
- https://www.obec-morkov.cz/historie

## 8. F — JSON, databáze a technická konzistence

- 38/38 očekávaných řádků v Supabase; přesná shoda s `sequence` a `groups`.
- 261 faktů; ID odpovídají formátu `fact_NNN` a pořadí je vzestupné.
- 7 jazyků, žádné prázdné položky, žádné nesoulady počtu/ID.
- 261/261 mapových kategorií povolených.
- 0 chybějících zdrojů u faktů.
- 0 zjištěných reklamních výzev nebo propagačních textů v rychlém skenu.
- AJV nebyl spuštěn — podle promptu není požadován.
- Bez změny schématu, RLS, triggerů, sequence nebo jiných zemí.

## 9. G — Souřadnice

**Dokončeno 2026-11-20 — všech 32 původně prázdných poloh doplněno.**

- Původní stav: 32 faktů s explicitním `facts[].location = null`.
- Nový stav po zápisech a read-backu: **261/261 faktů má neprázdnou polohu; 0 null**.
- Existující neprázdné polohy nebyly plošně znovu ověřovány ani přeměřovány. U již neprázdných faktů byly změny omezeny na několik cílených oprav vzniklých při dohledávání chybně určeného bodu v rámci této nulové výjimky.
- Každý nově doplněný objekt má povinná pole `name`, `lat`, `lon`, `type`, `accuracy`, `source`; read-back potvrdil 0 neúplných objektů.
- Použité hodnoty `accuracy` jsou pouze povolené enumy: `exact`, `approximate`, `area_representative`, `historical_approximate`.
- Použité hodnoty `type` jsou ověřeny proti slovníku `schema.json`; 0 nepovolených hodnot.
- Dodržena hierarchie rework promptu: konkrétní objekt → reprezentativní bod uvnitř rozlehlé lokality → doložená historická poloha → veřejný orientační bod obce → relevantní dopravní/infrastrukturní bod. `representative_point` ani `access_point` nebyly automaticky kopírovány.

### Příklady vyřešených poloh
- 74201: Muzeum Moravských bratří v usedlosti čp. 21; železniční stanice Suchdol; reprezentativní bod nivy Odry v Poodří; veřejný orientační bod historického centra pro příběh očkování.
- 74213: areál bývalé Vagonky v Butovicích; železniční stanice Studénka.
- 74260: kaple na Dvorku; reprezentativní bod krajiny Petřvaldíku; památník v Petřvaldíku pro Hrabovského; orientační bod Petřvaldu pro rodáky RAF, pivovar a zaniklý zámek; podstavec u domu čp. 44; kostel sv. Mikuláše pro boje v květnu 1945.
- 74267: pomník padlým německým vojákům v Ženklavě.
- 74273: plastika Vlčí hlava s dítětem; přibližná oblast železniční nehody mezi Veřovicemi a Mořkovem.
- 74274 a 74275: veřejné orientační body v Tiché a Lichnově pro osobnostní příběhy bez doložené konkrétní adresy či památníku.
- 74281: památník Antona Hankeho před školou v Bravanticích.
- 74282: reprezentativní bod PR Jistebnické mokřady; sousoší Jistebnických zpěváčků.
- 74285: orientační bod Vřesiny pro bývalé letní kino Lesana; historický statek čp. 43 pro příběh Andreje Melnika.
- 74291: kostel sv. Jana Křtitele a orientační bod historického sídla pro příběh hranice Moravy a Slezska.
- 74292: historické jádro Lubojat pro listinu o původní kapli a pro urbářové rybníčky, jejichž přesná historická poloha nebyla bezpečně určena.
- 74293: historické centrum Slatiny jako reprezentativní bod příběhu moravské enklávy.

### Přesnost a omezení
- Přesné body konkrétních objektů jsou označeny `exact` jen tam, kde zdroj identifikuje konkrétní místo.
- Rozlehlé přírodní lokality používají `area_representative`.
- Příběhy bez dochovaného přesného místa používají `approximate` nebo `historical_approximate`; pin nepředstírá přesnost.
- U Lubojat zůstává bod pro urbářový příběh orientační v historickém jádru, nikoli tvrzení, že rybníčky ležely přímo u kostela.
- Nevyřešené geografické null položky: **0**.

### Technický read-back
- Celkem faktů: 261.
- Neprázdná `location`: 261.
- `location = null`: 0.
- Neúplné location objekty: 0.
- Nepovolené hodnoty accuracy: 0.
- Nepovolené hodnoty type: 0.
- Změněné statusy/verze záznamů: 0.

## 10. H — Zjevné věcné vady a propagace

- Rychlý obsahový sken nenašel reklamní výzvy, prodejní texty ani propagaci firem.
- Zmínka o Skalka Family Park ve Vřesině je neutrální popis současného návštěvnického cíle, nikoli reklamní text.
- Nebyla provedena plošná nová historická rešerše ani plošné přeměřování souřadnic.

## 11. Provedené zápisy a read-back

1. 74235: přidán Mendelův fakt a 7 jazykových verzí; read-back 5 faktů a česká shoda PASS.
2. 74255/fact_004, 74255/fact_006, 74256/fact_005, 74272/fact_001, 74272/fact_003, 74272/fact_008: rozšířeny české master texty a šest cizojazyčných překladů; následně synchronizováno translations.cs.
3. 74285/fact_001–014 (s výjimkou již delšího obsahu a zachovaných ID): rozšířeny krátké faktory fact_001–006, fact_007, fact_008–014; u všech dotčených faktů aktualizováno cs/de/en/es/fr/it/nl.
4. 74293/fact_003 a fact_004: rozšířeny české texty a všech šest cizojazyčných verzí.
5. Read-back 22 rozšířených faktů: 154/154 jazykových položek existuje, 0 prázdných textů, 0 jazykových textů pod 350 znaků.
6. Synchronizace českých překladů: 22 položek translations.cs srovnáno s facts[].text; následný read-back všech 261 faktů potvrdil 0 rozdílů master/cs.
7. Souřadnice: doplněno všech 32 původních null poloh; read-back potvrdil 261/261 faktů s neprázdnou polohou, 0 null, 0 neúplných location objektů a 0 nepovolených hodnot type/accuracy.
8. 74301 a 74401: opraven jazyk českého masteru podle již existujících českých překladů; read-back master/cs PASS.
9. 74254, 74258, 74267: synchronizován translations.cs s českým masterem; read-back PASS.
10. 74101: odstraněn duplicitní hrad Starý Jičín z masteru a všech jazyků; read-back PASS.
11. 74101, 74201, 74213, 74281, 74282: sjednocen zápis kraje; read-back PASS.
12. Sémantická kontrola překladů — 74101 (7 faktů): texty a názvy de/en/es/fr/it/nl individuálně zkontrolovány; bez nutnosti oprav.
13. 74201/fact_001: opraveno všech šest cizojazyčných názvů, které chybně přidávaly „muzeum“; nyní odpovídají příběhu Moravských bratří.
14. 74201/fact_002, fact_003, fact_005 a fact_007: doplněny ve všech šesti jazycích vynechané významové části (předchozí exil do Herrnhutu, památkový význam kostela a fary, historický význam budovy muzea a tradiční krajinná mozaika Poodří).
15. 74201/fact_006: opravena nizozemská chyba „ertsw inning“ → „ertswinning“; read-back PASS.
16. 74213/fact_001: francouzská a italská verze doplněny o městský nákup zámku s parkem v roce 1936 a jeho současnou kulturní funkci.
17. 74213/fact_004: nepřesný překlad české „tvrze“ jako velké pevnosti opraven ve všech šesti jazycích na význam odpovídající opevněnému panskému sídlu.
18. 74213/fact_006: opraveny botanicky chybné německé a nizozemské názvy druhu Nymphoides peltata („Schild-Wasserhahnenfuß“ / „schildbladige waterranonkel“) na správné „Seekanne“ / „watergentiaan“; read-back PASS.
19. 74221/fact_001: v šesti jazycích vysvětlen význam názvu Neutitscheinka (žena z Neutitscheinu, německého názvu Nového Jičína); zpřesněny i překlady historického fojtství v názvech.
20. 74221/fact_003: španělská, francouzská, italská a nizozemská verze zpřesněny na železniční motorové vozy/autoraily, nikoli obecné vlakové soupravy; doplněna závěrečná souvislost se strojírenskou tradicí.
21. 74221/fact_008: ve španělštině, francouzštině a italštině upřesněno, že se na stavbě kostela podílela místní stavební jednota, nikoli obecně farní sdružení.
22. 74231/fact_002: ve všech šesti jazycích doplněno časové vymezení Púchovské kultury (přibližně od 3. století př. n. l. do počátku našeho letopočtu).
23. 74231/fact_003: doplněno, že kostelní areál dokládá dlouhý historický vývoj městečka; odstraněno zdvojení závěrečné věty po read-back kontrole.
24. 74231/fact_005: ve španělštině, francouzštině, italštině a nizozemštině doplněn přechod historického centra od tržní vsi k dnešnímu obecnímu náměstí.
25. 74231/fact_006: opraven německý název, který mylně vykládal rok 1867 jako počátek samostatnosti; nyní odkazuje na dřívější samostatnost Vlčnova.
26. 74233/fact_001: ve všech šesti jazycích doplněna role několika generací místních mecenášů při obnově kostela.
27. 74233/fact_002: ve všech šesti jazycích doplněno vysvětlení chronogramu — zvýrazněná písmena dávají římskými číslicemi rok 1708.
28. 74233/fact_003: ve všech šesti jazycích doplněno, že přirozená říční krajina byla výrazně proměněna regulací Odry.
29. 74235/fact_002: německé „Folterjustiz“ zpřesněno na historické „Folterrecht“; z anglické, španělské, francouzské, italské a nizozemské verze odstraněno nepodložené tvrzení, že mučírna je rekonstruovaná; doplněna role obnovy budovy pro uchování regionální paměti.
30. 74235/fact_003: ve všech šesti jazycích výslovně uvedeno, že letopočet vyrytý v nadpraží potvrzuje dokončení stavby v roce 1795.
31. 74235/fact_004: ve všech šesti jazycích doplněna přesná geologická charakteristika krasového či pseudokrasového jevu.
32. 74237/fact_002: zpřesněn překlad šrotování obilí jako drcení na hrubou krmnou směs; odstraněna nepřesná formulace o výrobě sena/obecného krmiva.
33. 74237/fact_003: ve všech šesti jazycích doplněno náboženské poselství latinského nápisu na kříži obrácené ke Kristu ukřižovanému a výslovně zachováno, že památky nejsou jen dekorací cest a návsi.
34. 74242/fact_001: zpřesněn překlad hranolové věže; anglická, francouzská, italská a nizozemská verze nyní používají odpovídající termín „prismatic“.
35. 74243/fact_001: opraven německý název kostela, který ponechával české „Kostel sv.“ místo překladu „Kirche der heiligen Maria Magdalena“.
## 12. Výsledek a další krok

**REVIEW REQUIRED** — blok není připraven k publikaci.

Blokující otevřené oblasti:
1. Délková kontrola: 22/23 textů rozšířeno a ověřeno; 74272/fact_013 Zdislavice ponecháno REVIEW REQUIRED, protože nebyly nalezeny další bezpečně doložené informace.
2. Nedokončená individuální sémantická kontrola cizojazyčných překladů: 22/261 faktů hotovo (132/1 566 textů), zbývá 239 faktů.

Hotové kontroly se při pokračování neopakují. Další krok: pokračovat od 74221/fact_001 v individuální sémantické kontrole cizojazyčných překladů; 74272/fact_013 zůstává výslovnou obsahovou výjimkou REVIEW REQUIRED. Hotovou souřadnicovou ani délkovou kontrolu neopakovat.

**Neprovedeno:** `data_version` ani `status` nebyly změněny; žádná publikace V5, záloha Dropbox ani read-only zamčení. Tyto kroky vyžadují výslovný pokyn uživatele.
