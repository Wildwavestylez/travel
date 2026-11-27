# CZ AUDIT — VYŠKOVSKO, ROUSÍNOVSKO, SLAVKOVSKO A BUČOVICKO

**Kanonické ID:** `CZ-VYSKOVSKO-SLAVKOVSKO-68201-68501`  
**Rozsah:** 68201, 68301, 68303, 68304, 68305, 68308, 68321, 68323, 68333, 68335, 68341, 68351, 68352, 68354, 68401, 68501  
**Stav:** AUDIT PASS A–H (prompt V2.1 neobsahuje samostatnou oblast I) — 16/16 PSČ; následně PUBLISHED V5 / Supabase read-back 16/16 PASS. Dropbox backup function deployed; backup execution pending — viz provozní poznámka níže. Read-only zamčení neprovedeno.  
**Další přesné PSČ:** žádné — rozsah dokončen.

## Závazné podklady načtené
- `prompt_audit.md` V2.1
- `QUERY_LIMITS.md`
- `schema.json`
- relevantní části `CONTENT_STANDARD.md` a `prompt_rework.md`
- `sequence.json`, `reference/README.md`, `reference/ruian_postcodes.csv`, `reference/ruian_import_manifest.json`
- RÚIAN feed: 2026-10-31; CSV commitovaný inventář má 2 677 PSČ a 3 023 585 řádků adresních míst.
- V registru auditů nebyl nalezen existující tahák pro tento rozsah; tento soubor je nový kanonický tahák.

## Inventář a společná turistická rešerše
Přesný inventář z `sequence.json`: 16/16 kódů výše. `sequence.json` nebyl měněn.

Hlavní tematické okruhy:
- Bitva u Slavkova 1805 a její širší bojiště: stávající fakta v bloku pokrývají několik odlišných, geograficky přiřazených míst; nevytvářet další obecné duplicity.
- Zámek Bučovice, zámek Slavkov a rod Kouniců: ověřit v příslušných záznamech, že významná architektura a osobnosti jsou pokryty.
- Josef II. ve Slavíkovicích (19. 8. 1769): v původním obsahu 68301 chyběla událost i památník; doplněno jako `fact_010`.
- Setkání císaře Františka I. a cara Alexandra I. na vyškovském zámku (28. 11. 1805): v původním obsahu 68201 chyběla tato konkrétní událost; doplněno jako `fact_011`.
- František Sušil, Alois Musil, nucené vystěhování obcí na Drahanské vrchovině a zaniklá ves Bystřec již mají tematické zastoupení v aktuálních záznamech.

Zdroje k doplněným tématům:
- Muzeum Vyškovska: https://www.muzeum-vyskovska.cz/domu/budovy-a-expozice/
- Muzeum Vyškovska — Vyškov v roce 1805: https://www.muzeum-vyskovska.cz/events/vyskov-roce-1805/
- Město Rousínov — zajímavosti: https://www.rousinov.cz/volny-cas/zajimavosti/
- Město Rousínov — památky: https://www.rousinov.cz/volny-cas/pamatky/
- Město Rousínov — pomník u Slavíkovic a trasa: https://www.rousinov.cz/volny-cas/tipy-na-vylety-1/kdy-se-zastavil-cisar-u-slavikovic-0_289.html

## Dokončená PSČ

| PSČ | Fakta | Sedm jazyků | Opravy / poznámky | Výsledek |
|---|---:|---|---|---|
| 68201 | 11 | cs/de/en/es/fr/it/nl | Doplněn `fact_011` — porada Františka I. a Alexandra I. na zámku 28. 11. 1805. Počty překladů 11/11 ve všech jazycích; 0 krátkých CS textů, 0 prázdných masterů, 0 duplicitních ID, 0 faktů bez zdrojů, 0 neplatných enumů a 0 CS/master rozdílů. Opraveny location.type (chateau→castle, castle_ruin→ruin) a source type academic→specialist. Jedna null location u vícemístného faktu ponechána. | PASS — obsah/překlady/struktura |
| 68301 | 10 | cs/de/en/es/fr/it/nl | Doplněn `fact_010` — orba Josefa II. u Slavíkovic 19. 8. 1769 a historie památníků. Počty překladů 10/10 ve všech jazycích; 0 krátkých CS textů, 0 prázdných masterů, 0 duplicitních ID, 0 faktů bez zdrojů, 0 neplatných enumů a 0 CS/master rozdílů. Opraveny location.type (town_square→historic_square, chateau→castle) a source type academic→university. Jedna null location u vícemístného faktu ponechána. | PASS — obsah/překlady/struktura |
| 68303 | 6 | cs/de/en/es/fr/it/nl | Opraveny nepovolené `location.type`: zřícenina hradu `castle_ruin` → `ruin`; přírodní koupací lokalita `natural_swimming` → `natural_feature`. Počty překladů 6/6; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. Jedna null location u plošného přírodního území ponechána. | PASS — obsah/překlady/struktura |
| 68304 | 8 | cs/de/en/es/fr/it/nl | Opraveno datum demolice Liblice B: 12. 11. 2026 (datum článku) → 15. 10. 2026 (datum odstřelu), master + 6 překladů; doplněn oficiální zdroj CRA. Opraveny nepovolené location.type: `chateau` → `castle`, `broadcast_tower` → `technical_monument`, `village_centre` → `historic_village`. Počty překladů 8/8; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. Jedna null location u širší krajinné oblasti ponechána. | PASS — obsah/překlady/struktura |
| 68305 | 5 | cs/de/en/es/fr/it/nl | Opraveny nepovolené location.type: `chateau` → `castle`, `belfry` → `monument`. Opravena významová chyba v italštině fact_002: sv. Vendelín nebyl sv. Václav. Počty překladů 5/5; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. | PASS — obsah/překlady/struktura |
| 68308 | 6 | cs/de/en/es/fr/it/nl | Opraveny map_category u fact_004 a fact_005 z nepřesných `historic_city` / `historical_monument` na `local_culture`. Počty překladů 6/6; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů; žádná null location. | PASS — obsah/překlady/struktura |

**Společné technické zjištění:** U všech šesti dokončených řádků je `data_version=1`; prvních pět má `status=placeholder`, 68308 má `status=validated`. Status/verze nebyly změněny. Pro vybraná ID nebyly nalezeny žádné řádky v `explorer_map_points`; během běžného auditu se mapové body nevytvářejí a publikace nebyla požadována.

| 68321 | 8 | cs/de/en/es/fr/it/nl | Opraveny nepovolené kategorie/map_category; historické příběhy vesnic a vystěhování mají map_category `local_culture`, Zelená hora má `archaeological_site` a vyhlídka `viewpoint_landscape`. 8/8 překladů ve všech jazycích; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů ani CS/master rozdílů; 0 null locations. | PASS |
| 68323 | 7 | cs/de/en/es/fr/it/nl | Opraveny category/map_category a location.type: historická centra měst `historic_city` → `historic_settlement` (map_category zůstává dle tématu). 7/7 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů ani CS/master rozdílů; 0 null locations. | PASS |
| 68333 | 15 | cs/de/en/es/fr/it/nl | Doplněn `fact_015` — František Král (1921–2001), pilot československých leteckých jednotek RAF a rodák z Nesovic; podklady VÚA, Slavkovské bojiště a místní knihovna. Doplněna area_representative poloha Letošova do fact_013; fact_006 a fact_014 zůstávají null (lesní kámen a neurčené místo Hrádku). Opraveny map_category fact_010 a fact_014 na `local_culture`; opraveny source types reference→regional/news. 15/15 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů ani CS/master rozdílů; 2 null locations. | PASS |

| 68335 | 6 | cs/de/en/es/fr/it/nl | Opraven nizozemský překlad fact_001: odstraněna nepodložená Klokbekercultuur, ponechána pouze kultura se šňůrovou keramikou. 6/6 překladů ve všech jazycích; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů, neplatných source type ani CS/master rozdílů; 0 null locations. | PASS |
| 68341 | 10 | cs/de/en/es/fr/it/nl | Opraveno historické označení císaře: František I. jako rakouský císař a František II. jako římský císař; doplněno, že car přenocoval na zámku a císař v domě správce panství. Source ID převedeny na přímé URL podle schema, odstraněny nepovolené `id` vlastnosti. 10/10 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 0 null locations. | PASS |
| 68351 | 6 | cs/de/en/es/fr/it/nl | Fact_006 map_category `historic_city` → `local_culture`; source ID převedeny na URL a odstraněny nepovolené `id` vlastnosti. 6/6 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 0 null locations. | PASS |
| 68352 | 11 | cs/de/en/es/fr/it/nl | Fact_011 map_category `historic_city` → `local_culture`. Poloha pramene Šaratica v Kalužinách zpřesněna podle odborné mapy Preslia (±100 m); nahrazen nevhodný adresní zdroj. Source ID převedeny na URL, source registry sjednocen se schema. 11/11 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 0 null locations. | PASS |
| 68354 | 10 | cs/de/en/es/fr/it/nl | Fact_007 a fact_010 map_category `historic_city` → `local_culture`. Source ID převedeny na URL; source type `media` → `news`. Opravena italština fact_009: sv. Alois přeložen jako San Luigi, nikoli neexistující podoba Sant'Aluisio. 10/10 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 1 null location u vícemístného faktu fact_010. | PASS |
| 68401 | 12 | cs/de/en/es/fr/it/nl | Kompletní jazykový a strukturální audit; všechny kategorie, map_category, location.type, priority, accuracy a zdroje odpovídají schema. 12/12 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 0 null locations. | PASS |
| 68501 | 15 | cs/de/en/es/fr/it/nl | Doplněny čtyři významné osobnosti: František Götz (dramaturg), Václav Sedláček (učitel a oběť nacismu), Jaroslav Vykoupil (olympijský sprinter) a František Luska (profesor pediatrie). U Lusky opraven rozpor v místním zdroji: oficiální historie České dětské nemocnice potvrzuje úmrtí v roce 1942, nikoli 1945. Doplněna poloha Bohatých Málkovic; opravena francouzština fact_009. 15/15 překladů; 0 krátkých, prázdných, duplicitních, bez zdrojů, neplatných enumů/source type, nerozřešených zdrojů ani CS/master rozdílů; 1 null location u kombinovaného příběhu Kojátky/Šardičky. | PASS |

## Neuzavřené opravy
Žádné. Všech 16 PSČ prošlo auditní kontrolou; zbylé null locations jsou zdůvodněné vícemístné nebo plošné příběhy, nikoli opomenuté body.

## Normalizované pole city
V 10 řádcích bylo normalizované `public.postal_codes.city` synchronizováno s `content.city`: 68201, 68301, 68308, 68321, 68323, 68333, 68352, 68354, 68401, 68501. Následná kontrola všech 16 PSČ podle adresních detailů České pošty (postaonline.cz) a oficiální stránky obce Studnice potvrdila, že `city` odpovídá obci fyzického sídla příslušné pošty: 68201 Vyškov; 68301 Rousínov; 68303 Luleč; 68304 Drnovice; 68305 Račice-Pístovice; 68308 Studnice; 68321 Pustiměř; 68323 Ivanovice na Hané; 68333 Nesovice; 68335 Letonice; 68341 Bohdalice-Pavlovice; 68351 Holubice; 68352 Křenovice; 68354 Otnice; 68401 Slavkov u Brna; 68501 Bučovice. Ověření: oficiální stránka České pošty pro jednotlivé pobočky (včetně 68201 a 68301) a stránka obce Studnice pro adresu Studnice 66. Ostatní správní pole nebyla měněna.

## Závěrečná kontrola
- RÚIAN inventář obsahuje všech 16 přesných PSČ; dohromady 35 461 adresních míst. Počty podle kódů jsou v pořadí sequence.json: 8 371; 4 183; 1 208; 1 795; 760; 366; 1 350; 1 716; 2 205; 505; 1 045; 518; 2 135; 1 649; 3 977; 3 678.
- Normalizované `city` bylo u 10 řádků synchronizováno s `content.city`; shoda byla ověřena pro všech 16 řádků a porovnána s oficiálním seznamem pošt a RÚIAN. Všech 16 PSČ je v referenčním CSV.
- Všech 16 řádků má sedm překladů se shodným počtem faktů; závěrečná kontrola `translations.cs` proti master `facts` skončila u všech na 0 rozdílů (v 68304 byl nalezen a opraven jeden rozdíl v datu demolice Liblice B).
- Pro všechna fakta platí: žádný český text pod 350 znaků, žádné prázdné povinné texty, žádná duplicitní ID, žádné prázdné zdroje, žádné neplatné priority/accuracy/category/map_category/location.type ani source type. Source ID struktury v 68341, 68351, 68352 a 68354 byly převedeny na URL strings dle schema.
- Křížová kontrola: setkání panovníků ve Vyškově (28. 11. 1805) a Bohdalicích (29. 11. 1805) jsou dvě odlišné události; vysídlení Drahanské vrchoviny v 68308 a 68321 popisuje různé skupiny obcí a lokální dopady, nikoli duplicitní fakta.
- `explorer_map_points`: pro žádné z 16 ID nebyl nalezen mapový bod; nové body nebyly vytvářeny.
- Publikace: všech 16 existujících řádků bylo sekvenčně nastaveno na `data_version=5`, `status='published'`. Přesný read-back každého PSČ potvrdil 16/16 bez výjimky.
- Zálohovací funkce: vytvořena a nasazena dedikovaná Supabase Edge Function `travel-backup-cz-68201-68501-vyskovsko-audited` (ACTIVE, v1; `verify_jwt=false`, chráněná jedinečným run klíčem). Zdrojový template bez živého klíče je uložen v `supabase/functions/travel-backup-cz-68201-68501-vyskovsko-audited/index.ts`. Funkce má pevný allowlist 16 PSČ a ID 10565–10580, vyžaduje V5/published a 146 faktů, ověřuje 0 mapových bodů podle auditního baseline, načítá pouze přesný rozsah + CZ validační schéma, vytváří JSON + restore SQL + manifest do timestampované složky `TRAVEL_BACKUP/AUDITED`, nahrává add-only a provádí SHA-256 read-back každého souboru. Funkce byla ověřena read-backem kódu v Supabase; preview/ostrý běh zatím nebyl spuštěn, protože dostupné nástroje v tomto běhu neposkytují přímé volání Edge Function a webový přístup k endpointu skončil jako nedostupný. Dropbox záloha proto zůstává PENDING; nebyla vytvořena žádná záložní složka ani soubor.

## Výsledek
Audit A–H: PASS. `prompt_audit.md` V2.1 neobsahuje oblast I. Oblast B byla po dokončení taháku doplněna ověřením fyzického sídla všech 16 pošt. Publikace V5 / published: 16/16 PASS. Záloha Dropbox: pending — chybí dedikovaná ověřená funkce pro tento rozsah a tří-souborový auditní formát. Read-only lock neproveden.
