# Znojemsko — audit PSČ 66902–67201

**Kanonické ID:** `CZ-ZNOJEMSKO-66902-67201`  
**Stav:** **REVIEW REQUIRED**  
**Auditní pravidla:** `data/czechia/prompt_audit.md`, V2.1 (odlehčený audit)  
**Datum:** 2026-11-22  
**Zdroj pravdy:** cíleně načtené řádky `public.postal_codes` v Supabase; bez porovnávání s Neonem.

## 1. Rozsah a inventář

Rozsah uživatele: 669xx až 673xx. Aktuální `sequence.json` však v tomto intervalu obsahuje pouze **47 existujících PSČ**:

`66902, 66904, 67101, 67102, 67103, 67106, 67107, 67110, 67122, 67124, 67125, 67126, 67127, 67128, 67129, 67131, 67132, 67133, 67134, 67138, 67139, 67140, 67142, 67151, 67152, 67153, 67154, 67155, 67156, 67161, 67162, 67163, 67164, 67165, 67167, 67168, 67169, 67171, 67172, 67173, 67175, 67176, 67177, 67178, 67181, 67182, 67201`

- 47/47 PSČ nalezeno v `sequence.json`, `groups`, RÚIAN CSV a cíleném databázovém výběru.
- V tomto rozsahu nejsou v aktuální sequence žádná PSČ 670xx ani 673xx; nebyla vytvářena ani přidávána.
- Původně 374 faktů; po doplnění čtyř zásadních témat **378 faktů / 2 646 jazykových položek** (378 × 7).
- Všech 47 záznamů zůstává `data_version=1`, `status=validated`. Žádná publikace ani změna verze neproběhla.
- `sequence.json`, `groups` ani centrální referenční soubory nebyly změněny.

## 2. Průzkum tematických mezer

### Již pokryté významné příběhy
- Prokop Diviš a Přímětice.
- Klement Maria Hofbauer a Tasovice.
- Charles Sealsfield a Popice.
- Ludwig Winder a Šafov.
- Adolf Opálka a František Pospíšil.
- Bitva u Znojma roku 1809 a její následky.
- Slovanská epopej Alfonse Muchy v Moravském Krumlově.
- Hrady Bítov a Cornštejn, zámky Vranov nad Dyjí a Uherčice.
- Železná opona a pohraniční historie.

### Doplněné zásadní mezery — PSČ 66902
Doplněny čtyři nové fakty, každé se zdroji, polohou a všemi sedmi jazykovými verzemi:

| ID | Téma | Důvod doplnění |
|---|---|---|
| fact_026 | Loucký klášter | Premonstrátský klášter založený roku 1190, významné duchovní, vzdělanostní a umělecké centrum; národní kulturní památka |
| fact_027 | Znojemské podzemí | Rozsáhlý středověký systém chodeb a sklepů, přibližně 27 km |
| fact_028 | Znojmo 1938–1945 | Německá okupace 9. 10. 1938, válečné bombardování a osvobození 8. 5. 1945 |
| fact_029 | Znojemské historické vinobraní | Významná kulturní událost s prvním oficiálním ročníkem v roce 1966 |

Historická přesnost u vinobraní: rok 1327 je součástí festivalové scénografie spojené s Janem Lucemburským; není vydáván za doložený počátek dnešního festivalu. První oficiální ročník se konal roku 1966, tradice byla přerušena roku 1974 a obnovena v 90. letech.

Read-back PSČ 66902 potvrdil 29 faktů, všechny čtyři nové master texty s délkou nad 350 znaků, polohy a zdroje; všech sedm jazyků obsahuje nové ID fact_026–fact_029 (4/4 v každém jazyce) a české překlady se shodují s masterem.

## 3. Opravy provedené v databázi

### 3.1 Administrativní údaj
- PSČ 67155: `state` opraveno z `Jihomoravský` na `Jihomoravský kraj`.
- Ostatní kontrolované hodnoty `city`, `county` a `state` nebyly hromadně měněny. Oficiální detailní stránky České pošty byly použity jako kontrolní zdroj; u PSČ 67110 nebyla stránka při kontrole dostupná.

### 3.2 Rozdíly mezi českým masterem a `translations.cs`
Nalezeno 9 rozdílů v těchto faktech:
- 67127 / fact_007
- 67128 / fact_001
- 67154 / fact_006
- 67171 / fact_002
- 67172 / fact_011
- 67175 / fact_006 a fact_008
- 67181 / fact_004 a fact_008

České překladové pole bylo u sedmi dotčených PSČ synchronizováno s příslušnými master fakty. Read-back sedmi změněných záznamů potvrdil 74/74 českých překladových položek a **0 zbývajících rozdílů**.

## 4. Technické a strukturální kontroly

Po doplnění čtyř faktů:

- 47/47 záznamů.
- 378 faktů; každý z jazyků cs/de/en/es/fr/it/nl má 378 položek.
- 0 duplicitních ID faktů.
- 0 duplicitních názvů napříč rozsahem.
- 0 nepovolených hodnot `category` a `map_category`.
- 0 faktů bez zdrojového pole nebo s prázdným seznamem zdrojů.
- 9 původních rozdílů `facts` vs. `translations.cs` opraveno; read-back 0.
- Všechna čtyři nová fakta v 66902 mají neprázdné zdroje, vyplněnou polohu a 7 jazykových verzí.
- Existující neprázdné souřadnice nebyly znovu přeměřovány ani hromadně měněny.

## 5. Otevřené nálezy — důvod stavu REVIEW REQUIRED

### 5.1 Krátké české master texty
Zůstává **29 faktů pod hranicí 350 znaků**. Podle auditního promptu je nutné rozšířit je pouze o ověřitelné, věcně relevantní informace a aktualizovat odpovídající překlady de/en/es/fr/it/nl.

- 66904: fact_004
- 67164: fact_001, fact_006
- 67168: fact_001, fact_002
- 67172: fact_001, fact_002, fact_004, fact_005, fact_006, fact_007, fact_008, fact_010
- 67173: fact_003–fact_015
- 67178: fact_001–fact_003

### 5.2 Fakta bez `location`
Zůstává **37 faktů s `location=null` nebo chybějícím polem**. Je třeba posoudit každé jednotlivě podle geografické hierarchie; souřadnice se nesmějí odhadovat ani přebírat z `representative_point` bez věcné souvislosti.

- 67125: fact_003
- 67127: fact_005
- 67128: fact_006, fact_007, fact_008
- 67129: fact_002
- 67132: fact_001
- 67133: fact_005, fact_006
- 67134: fact_001, fact_004
- 67139: fact_002, fact_003, fact_005
- 67161: fact_002, fact_010
- 67162: fact_005, fact_006, fact_007
- 67163: fact_004, fact_006
- 67164: fact_002, fact_003, fact_007
- 67167: fact_008
- 67175: fact_006
- 67177: fact_005, fact_007
- 67178: fact_001, fact_003, fact_006, fact_007, fact_008, fact_009, fact_010, fact_011, fact_012

Dokud tyto dvě skupiny nálezů nebudou vyřešeny nebo řádně odůvodněny jako negeolokalizovatelné, audit nelze označit jako PASS.

## 6. Provozní stav

- **Auditní stav: REVIEW REQUIRED.**
- Žádné záznamy nebyly převedeny na V5 ani na `published`.
- Nebyla vytvořena záloha do Dropboxu.
- Nebyl aktivován read-only zámek.
- Nebyla provedena změna Neon databáze.
- Další krok: vyřešit 29 krátkých master textů a 37 chybějících poloh, poté provést cílený read-back a uzavřít audit.

## 7. Použité hlavní zdroje

- https://znojmoregion.cz/cs/loucky-klaster
- https://znojmoregion.cz/cs/znojemske-podzemi-znojmo
- https://www.regionem.cz/clanek/do-tmy-vody-a-uzkych-chodeb-znojemske-podzemi-nabizi-adrenalin-z-jine-doby/
- https://dspace.jcu.cz/bitstream/handle/20.500.14390/27455/Diplomova_prace_-_Jiri_Padalik.pdf?sequence=1
- https://www.znojmocity.cz/assets/File.ashx?id_dokumenty=1577&id_org=19341
- https://www.znojemskevinobrani.cz/historie/
- https://znojmoregion.cz/cs/akce/4777
- https://www.postaonline.cz/
