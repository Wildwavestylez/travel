# CZ AUDIT — VYŠKOVSKO, ROUSÍNOVSKO, SLAVKOVSKO A BUČOVICKO

**Kanonické ID:** `CZ-VYSKOVSKO-SLAVKOVSKO-68201-68501`  
**Rozsah:** 68201, 68301, 68303, 68304, 68305, 68308, 68321, 68323, 68333, 68335, 68341, 68351, 68352, 68354, 68401, 68501  
**Stav:** AUDIT IN PROGRESS — 6/16 PSČ kompletně zkontrolováno; bez publikace, zálohy a read-only zamčení.  
**Další přesné PSČ:** 68321.

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
| 68201 | 11 | cs/de/en/es/fr/it/nl | Doplněn `fact_011` — porada Františka I. a Alexandra I. na zámku 28. 11. 1805. Počty překladů 11/11 ve všech jazycích; 0 krátkých CS textů, 0 prázdných masterů, 0 duplicitních ID, 0 faktů bez zdrojů, 0 neplatných enumů. Jedna null location u vícemístného faktu ponechána. | PASS — obsah/překlady/struktura |
| 68301 | 10 | cs/de/en/es/fr/it/nl | Doplněn `fact_010` — orba Josefa II. u Slavíkovic 19. 8. 1769 a historie památníků. Počty překladů 10/10 ve všech jazycích; 0 krátkých CS textů, 0 prázdných masterů, 0 duplicitních ID, 0 faktů bez zdrojů, 0 neplatných enumů. Jedna null location u vícemístného faktu ponechána. | PASS — obsah/překlady/struktura |
| 68303 | 6 | cs/de/en/es/fr/it/nl | Opraveny nepovolené `location.type`: zřícenina hradu `castle_ruin` → `ruin`; přírodní koupací lokalita `natural_swimming` → `natural_feature`. Počty překladů 6/6; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. Jedna null location u plošného přírodního území ponechána. | PASS — obsah/překlady/struktura |
| 68304 | 8 | cs/de/en/es/fr/it/nl | Opraveno datum demolice Liblice B: 12. 11. 2026 (datum článku) → 15. 10. 2026 (datum odstřelu), master + 6 překladů; doplněn oficiální zdroj CRA. Opraveny nepovolené location.type: `chateau` → `castle`, `broadcast_tower` → `technical_monument`, `village_centre` → `historic_village`. Počty překladů 8/8; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. Jedna null location u širší krajinné oblasti ponechána. | PASS — obsah/překlady/struktura |
| 68305 | 5 | cs/de/en/es/fr/it/nl | Opraveny nepovolené location.type: `chateau` → `castle`, `belfry` → `monument`. Opravena významová chyba v italštině fact_002: sv. Vendelín nebyl sv. Václav. Počty překladů 5/5; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů. | PASS — obsah/překlady/struktura |
| 68308 | 6 | cs/de/en/es/fr/it/nl | Opraveny map_category u fact_004 a fact_005 z nepřesných `historic_city` / `historical_monument` na `local_culture`. Počty překladů 6/6; 0 krátkých, prázdných, duplicitních, bez zdrojů i neplatných enumů; žádná null location. | PASS — obsah/překlady/struktura |

**Společné technické zjištění:** U všech šesti dokončených řádků je `data_version=1`; prvních pět má `status=placeholder`, 68308 má `status=validated`. Status/verze nebyly změněny. Pro vybraná ID nebyly nalezeny žádné řádky v `explorer_map_points`; během běžného auditu se mapové body nevytvářejí a publikace nebyla požadována.

## Částečně provedené opravy — PSČ stále otevřená
- **68321:** opraveny kategorie/map_category: fact_002 `religious_heritage` → `heritage_and_monuments`; fact_003 `archaeology` → `history` a `archaeological_site`; fact_006 map_category `landscape` → `viewpoint_landscape`; fact_008 map_category `heritage` → `historical_monument`. Kompletní jazykový audit a validace ještě neproběhly.
- **68323:** opraveny fact_004 map_category `heritage` → `historical_monument`; fact_006 category `museums_and_culture` → `culture_and_industry`; fact_007 map_category `memorial` → `historical_monument`. Kompletní jazykový audit a validace ještě neproběhly.

## Normalizované pole city
V 10 řádcích bylo normalizované `public.postal_codes.city` synchronizováno s `content.city`: 68201, 68301, 68308, 68321, 68323, 68333, 68352, 68354, 68401, 68501. `content.city` je určeno obcí fyzického sídla obsluhující pošty; zbývá při kontrole příslušných PSČ ověřit shodu s oficiální adresou pošty. Ostatní správní pole nebyla měněna.

## Otevřené kontroly
1. Dokončit jedno PSČ po druhém od 68321; nepřeskakovat rozpracované opravy.
2. U každého zbylého PSČ zkontrolovat všech sedm jazyků, českou délku ≥350 znaků, zdroje, kategorie, map_category a všechny `location.type` podle aktuálního schema.
3. Dokončit rychlou kontrolu zjevných duplicit a jediného primárního přiřazení napříč celým blokem.
4. Ověřit administrativní `city/county/state/district` podle skutečné fyzické adresy obsluhující pošty a RÚIAN inventáře; neodvozovat sídlo pošty pouze z názvu PSČ.
5. U null location postupovat podle oddílu G prompt_audit a hierarchie prompt_rework; ponechat null, pokud jde o vícemístný nebo plošný příběh bez obhajitelného bodu.
6. Na konci shrnout status/verzi; nepublikovat, nezálohovat ani nezamykat bez výslovného pokynu.

## Přesný další krok
Pokračovat načtením jediného cílového řádku **68321**, dokončit jeho sedmijazyčný audit, ověřit změny kategorií a provést kompaktní read-back/validaci. Poté pokračovat 68323, 68333, 68335, 68341, 68351, 68352, 68354, 68401 a 68501 v tomto pořadí.
