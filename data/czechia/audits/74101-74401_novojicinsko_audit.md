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
- Opraveny čtyři nekonzistentní hodnoty `state`: 74101, 74201, 74281 a 74282 měly „Moravskoslezský“ místo jednotného „Moravskoslezský kraj“. Read-back všech čtyř PASS.
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

**Otevřeno:** úplná individuální sémantická kontrola všech 1 566 cizojazyčných textů nebyla v tomto běhu uzavřena. Strukturální a návaznostní kontroly PASS; sémantická kontrola zůstává součástí REVIEW REQUIRED.

## 7. E2 — Délka českého master textu

Nalezeno **23 faktů kratších než 350 znaků**. V tomto běhu nebyly uměle natahovány ani doplňovány neověřenou výplní.

| PSČ | ID | Délka | Fakt |
|---|---|---:|---|
| 74255 | fact_004 | 345 | Lípa svobody: živá připomínka vzniku Československa |
| 74255 | fact_006 | 339 | Boje o Albrechtičky: osvobození 3. května 1945 |
| 74256 | fact_005 | 343 | Pramen Pískovna: vydatný zdroj, který nikdy nezamrzá |
| 74272 | fact_001 | 342 | Cyklostezka Koleje: železnice dostala druhý život |
| 74272 | fact_003 | 253 | Kaple Panny Marie Bolestné a erb z roku 1587 |
| 74272 | fact_008 | 331 | Kostel sv. Jiří v Mořkově |
| 74272 | fact_013 | 336 | Zaniklá ves Zdislavice |
| 74285 | fact_001 | 238 | Od středověké vsi k dělnické Vřesině |
| 74285 | fact_002 | 184 | Gustav Kořený a tradice Vynášení Mařáka |
| 74285 | fact_003 | 184 | Kaple se zvoničkou – místní kulturní památka |
| 74285 | fact_004 | 173 | Kostel sv. Antonína Paduánského |
| 74285 | fact_005 | 194 | Kazimír Tomášek – slezský národní buditel |
| 74285 | fact_006 | 217 | Pomník padlým hrdinům a obětem osvobození |
| 74285 | fact_007 | 267 | Parní tramvaj údolím Porubky |
| 74285 | fact_008 | 256 | Ledovcové stopy ve Vřesinské strži |
| 74285 | fact_009 | 238 | Osada Mexiko na hranici dvou katastrů |
| 74285 | fact_010 | 236 | Skalka Family Park – současný rodinný areál |
| 74285 | fact_011 | 184 | Letní kino Lesana – širokoúhlé kino pod širým nebem |
| 74285 | fact_012 | 212 | Boží muka a tragédie sedláka Hurníka |
| 74285 | fact_013 | 281 | Andrej Melnik – ukrytý sovětský zajatec |
| 74285 | fact_014 | 263 | Protest proti německé okupaci v říjnu 1938 |
| 74293 | fact_003 | 346 | Zámek Slatina – sídlo, které koupili sami obyvatelé |
| 74293 | fact_004 | 325 | Rozhledna Slatina na vrchu Okrouhlík |

Všech 23 položek zůstává `REVIEW REQUIRED` do doloženého rozšíření českého textu a aktualizace šesti cizojazyčných verzí.

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

Nalezeno **32 explicitních `facts[].location = null`**. Existující neprázdné souřadnice nebyly znovu kontrolovány ani měněny.

Otevřené položky:
- 74201: fact_001, fact_004, fact_007, fact_008
- 74213: fact_002, fact_003
- 74260: fact_003, fact_005, fact_008, fact_009, fact_010, fact_011, fact_012, fact_013
- 74267: fact_008
- 74273: fact_003, fact_010
- 74274: fact_005, fact_006
- 74275: fact_006, fact_007, fact_008
- 74281: fact_004
- 74282: fact_002, fact_006
- 74285: fact_011, fact_013
- 74291: fact_002, fact_003
- 74292: fact_001, fact_003
- 74293: fact_001

V tomto běhu nebyly tyto polohy nahrazeny odhadovanými souřadnicemi. Každá položka vyžaduje dohledání konkrétního bodu nebo doloženého veřejného orientačního místa podle hierarchie v rework promptu. Pokud takový bod nelze doložit, musí zůstat null s vysvětlením.

## 10. H — Zjevné věcné vady a propagace

- Rychlý obsahový sken nenašel reklamní výzvy, prodejní texty ani propagaci firem.
- Zmínka o Skalka Family Park ve Vřesině je neutrální popis současného návštěvnického cíle, nikoli reklamní text.
- Nebyla provedena plošná nová historická rešerše ani plošné přeměřování souřadnic.

## 11. Provedené zápisy a read-back

1. 74235: přidán Mendelův fakt a 7 překladů; read-back 5 faktů a česká shoda PASS.
2. 74301 a 74401: opraven jazyk českého masteru podle již existujících českých překladů; read-back master/cs PASS.
3. 74254, 74258, 74267: synchronizován `translations.cs` s českým masterem; read-back PASS.
4. 74101: odstraněn duplicitní hrad Starý Jičín z masteru a všech jazyků; read-back 7 faktů a 7 českých překladů PASS.
5. 74101, 74201, 74281, 74282: sjednocen zápis kraje; read-back PASS.

## 12. Výsledek a další krok

**REVIEW REQUIRED** — blok není připraven k publikaci.

Blokující otevřené oblasti:
1. 23 krátkých českých master textů pod 350 znaků.
2. 32 null mapových poloh, které je třeba individuálně prověřit podle geografické hierarchie.
3. Nedokončená individuální sémantická kontrola cizojazyčných překladů.

Hotové kontroly se při pokračování neopakují. Další krok: vyřešit pouze uvedené otevřené položky, zapsat opravy a načíst je zpět.

**Neprovedeno:** `data_version` ani `status` nebyly změněny; žádná publikace V5, záloha Dropbox ani read-only zamčení. Tyto kroky vyžadují výslovný pokyn uživatele.
