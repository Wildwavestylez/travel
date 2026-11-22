# Znojemsko — audit PSČ 66902–67201

**Kanonické ID:** `CZ-ZNOJEMSKO-66902-67201`  
**Stav:** **PASS / PUBLISHED V5 / BACKUP VERIFIED — READ-ONLY LOCK NOT ACTIVATED**  
**Auditní pravidla:** `data/czechia/prompt_audit.md`, V2.1 (odlehčený audit)  
**Datum:** 2026-11-22  
**Zdroj pravdy:** cíleně načtené řádky `public.postal_codes` v Supabase; bez porovnávání s Neonem.

## 1. Rozsah a inventář

Rozsah uživatele: 669xx až 673xx. Aktuální `sequence.json` však v tomto intervalu obsahuje pouze **47 existujících PSČ**:

`66902, 66904, 67101, 67102, 67103, 67106, 67107, 67110, 67122, 67124, 67125, 67126, 67127, 67128, 67129, 67131, 67132, 67133, 67134, 67138, 67139, 67140, 67142, 67151, 67152, 67153, 67154, 67155, 67156, 67161, 67162, 67163, 67164, 67165, 67167, 67168, 67169, 67171, 67172, 67173, 67175, 67176, 67177, 67178, 67181, 67182, 67201`

- 47/47 PSČ nalezeno v `sequence.json`, `groups`, RÚIAN CSV a cíleném databázovém výběru.
- V tomto rozsahu nejsou v aktuální sequence žádná PSČ 670xx ani 673xx; nebyla vytvářena ani přidávána.
- Původně 374 faktů; po doplnění čtyř zásadních témat **378 faktů / 2 646 jazykových položek** (378 × 7).
- Všech 47 záznamů bylo převedeno na `data_version=5`, `status=published`; cílený závěrečný read-back potvrdil 47/47 bez výjimky.
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

## 5. Vyřešené nálezy — závěrečný read-back

### 5.1 Krátké české master texty
Původně bylo zjištěno 29 faktů pod hranicí 350 znaků. **Všech 29/29 krátkých českých master textů je nyní opraveno a ověřeno read-backem; nezbývá žádný délkový nález.** Rozšíření vycházela z konkrétních informací již obsažených v podkladových faktech a jejich zdrojích; nebyla přidávána výplň ani nové neověřené letopočty.

**První dávka — 13 faktů:** 66904/fact_004 (463 znaků), 67164/fact_001 a fact_006 (466 a 495 znaků), 67168/fact_001 a fact_002 (523 a 474 znaků), 67172/fact_001, fact_002, fact_004, fact_005, fact_006, fact_007, fact_008 a fact_010 (všechny nad 350 znaků).

**Druhá dávka — 16 faktů:** 67173/fact_003–fact_015 (13 faktů; 396–477 znaků) a 67178/fact_001–fact_003 (3 fakta; 451–466 znaků). U obou PSČ read-back potvrdil synchronizaci `translations.cs`, všech 13/13 a 3/3 ID ve všech sedmi jazycích a neprázdné překlady de/en/es/fr/it/nl. Délka cizojazyčných textů nebyla hodnocena, v souladu s promptem V2.1. Původní ID, názvy, zdroje a existující polohy zůstaly zachovány.

### 5.2 Geografické polohy faktů

Původní inventář obsahoval **37 faktů s `location=null` nebo chybějícím polem**. Nyní je vyřešeno a kontrolním načtením ze Supabase ověřeno **37/37 poloh**. Každá má číselné souřadnice v platném rozsahu, typ z řízeného slovníku, platnou hodnotu přesnosti a zdroj polohy.

**Závěrečný read-back geografických položek:**
- cílových položek: 37
- nalezených položek: 37
- chybějící / null polohy: 0
- chybějící souřadnice: 0
- neplatné souřadnice: 0
- nepovolené typy polohy: 0
- neplatné hodnoty přesnosti: 0
- chybějící zdroje polohy: 0

**Ověřené položky podle PSČ:**
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

U konkrétních objektů jsou použity ověřené body; u rozlehlých lokalit reprezentativní body uvnitř území; u historických poloh bez přesné identifikace jsou použity výslovně označené orientační body. Ty nepředstírají přesné umístění historického objektu či události. Všech 37 záznamů má vyplněný zdroj polohy.

## 6. Provozní stav

- **Auditní stav: PASS — všechny evidované nálezy jsou vyřešeny a závěrečný read-back prošel.**
- 29/29 krátkých českých master textů je nad 350 znaků; `translations.cs` přesně odpovídá masteru.
- Všech 7 jazyků obsahuje všech 378 faktů; žádné prázdné překladové texty.
- 0 duplicitních ID faktů; 0 rozdílů mezi českým masterem a `translations.cs`.
- 37/37 dříve chybějících poloh doplněno a ověřeno; 0 null poloh a 0 strukturálních/geografických chyb v cílené kontrole.
- Záznamy jsou `data_version=5`, `status=published`; cílený read-back: 47/47 V5 + published, 0 výjimek.
- **Dropbox backup VERIFIED:** `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_ZNOJEMSKO_66902-67201_2026-11-22T14-17-52-239Z/`.
- Záloha obsahuje `CZ_AUDIT_ZNOJEMSKO_66902-67201_backup.json` (3 383 767 B), `CZ_AUDIT_ZNOJEMSKO_66902-67201_restore.sql` (3 043 318 B) a `manifest.json` (3 047 B). Všechny 3 soubory byly z Dropboxu znovu načteny a SHA-256 se shoduje 3/3; manifest `validation.status=VERIFIED`, `readback_verified=true`, `verified_record_count=47`.
- Supabase `backup_work_waves`: `CZ-AUDIT-ZNOJEMSKO-66902-67201-001` → `COMPLETE`; `backup_snapshots` → `VERIFIED`.
- **Neon Europe Explorer / Production / `public.czechia_cap_records`: RESTORED** — 47/47 přesných PSČ vloženo insert-only v 5 dávkách; před importem 0 kolizí PSČ a 0 kolizí `source_record_id`; žádný existující řádek nebyl přepsán. Read-back: 47/47 `published` + `content_version=5`, 378/378 faktů, 378/378 poloh, všech 7 jazyků kompletních, `record.postcode` shoduje v 47/47. Celkový počet českých záznamů 793 → 840.
- Předimportní Neon snapshot větev: `pre-znojemsko-import-20261122` (`br-fancy-credit-bgn9ps8o`), ověřeno 793 řádků a 0 znojemských PSČ; větev zůstává zachována.
- Dropbox záloha zůstala beze změny. Read-only zámek nebyl aktivován.
- Audit, V5 publikace a záloha jsou dokončeny. Další provozní kroky se provedou pouze na výslovný pokyn uživatele.

## 7. Použité hlavní zdroje

- https://znojmoregion.cz/cs/loucky-klaster
- https://www.npu.cz/cs/pamatkova-pece/sluzby-pro-verejnost/opravujete-pamatku/inspirujte-se/81051-centrum-obnovy-spolecneho-kulturniho-dedictvi-ve-znojme
- https://znojmoregion.cz/cs/znojemske-podzemi-znojmo
- https://www.znojemskabeseda.cz/images/ZB_2025_VYROCNI_ZPRAVA_2024_OK_jednostrankova.pdf
- https://www.regionem.cz/clanek/do-tmy-vody-a-uzkych-chodeb-znojemske-podzemi-nabizi-adrenalin-z-jine-doby/
- https://dspace.jcu.cz/bitstream/handle/20.500.14390/27455/Diplomova_prace_-_Jiri_Padalik.pdf?sequence=1
- https://www.znojmocity.cz/assets/File.ashx?id_dokumenty=1577&id_org=19341
- https://www.znojemskevinobrani.cz/historie/
- https://znojmoregion.cz/cs/akce/4777
- https://www.postaonline.cz/
