# Finální audit Česko — 67801–68001 (Blanensko a Boskovicko)

- **Kanonické ID:** `CZ-BLANSKO-BOSKOVICE-67801-68001`
- **Stav:** AUDIT COMPLETE — REVIEW ACCEPTED BY USER; PUBLISHED V5
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.1
- **Provozní limity:** `data/czechia/QUERY_LIMITS.md`
- **Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`, `public.postal_codes`, pouze `country_code='CZ'`
- **Rozsah:** přesně 38 existujících PSČ dle `data/czechia/sequence.json`
- **Publikace:** 38/38 záznamů nastaveno na `data_version=5`, `status='published'`; přesný read-back PASS. **Záloha:** VERIFIED — dedikovaná Edge Function, Dropbox JSON + restore SQL + manifest, SHA-256 read-back 3/3 PASS.

## 1. Přesný inventář

`67801, 67901, 67902, 67903, 67904, 67905, 67906, 67907, 67911, 67913, 67914, 67915, 67921, 67922, 67923, 67924, 67931, 67932, 67933, 67934, 67935, 67936, 67937, 67938, 67939, 67951, 67952, 67953, 67961, 67962, 67963, 67971, 67972, 67973, 67974, 67975, 67976, 68001`

- 38/38 kódů existuje v sekvenci.
- 38/38 cílových řádků bylo cíleně načteno v jednotlivých operacích s filtrem `country_code='CZ'` a přesným `postal_code`.
- Nebyla čtena celá tabulka ani jiné země.
- Registr auditů neobsahoval předchozí ani překrývající se tahák pro tento rozsah.

## 2. Úvodní tematická rešerše — oblast A

Hlavní tematické dominanty již pokryté v datech: Moravský kras (Punkevní jeskyně, Macocha, Balcarka, Sloupsko-šošůvské jeskyně, Kůlna, Býčí skála, Výpustek, Rudické propadání), poutní chrám ve Křtinách, boskovický hrad/zámek/židovská čtvrť, zámky Lysice, Rájec, Kunštát a Letovice, Stará huť a průmyslové dědictví Blanska, olešnický modrotisk, významné osobnosti a válečné příběhy.

### Silné nálezy — doplnit po ověření a následně read-back

1. **67801 — Kateřinská jeskyně.** Chybí mezi existujícími fakty. Správa jeskyní ČR potvrzuje adresu Lažánky 216, Blansko 678 01. Kandidát HIGH. Zdroje: https://www.katerinska.caves.cz/ ; https://bozkovske.caves.cz/system/files/2025-12/SJCR_cenik2026_cz.pdf
2. **67975 — Památník holokaustu Romů a Sintů na Moravě, Hodonín u Kunštátu.** Chybí mezi existujícími fakty. Muzeum romské kultury potvrzuje autentické místo protektorátního tábora 1942–1943 a oficiální adresu Hodonín 76, 679 75 Hodonín. Ministerstvo kultury uvádí 207 obětí včetně dětí. Kandidát HIGH. Zdroje: https://www.rommuz.cz/cs/hodonin-u-kunstatu/o-pamatniku/ ; https://www.rommuz.cz/cs/hodonin-u-kunstatu/o-pamatniku/historie-arealu/ ; https://www.mk.gov.cz/novinky-a-media-cs-4/5841cs-pieta-uctila-obeti-holokaustu-romu-a-sintu-na-morave
3. **68001 — Karel Absolon (1877–1960).** Narodil se v Boskovicích; významný speleolog, archeolog a paleontolog, spojený s výzkumem Moravského krasu a objevem Věstonické venuše. V existujících faktech 68001 chybí osobnostní fakt. Kandidát HIGH. Zdroje: https://biography.hiu.cas.cz/wiki/ABSOLON_Karel_1877%E2%80%931960 ; https://www.casopis.ochranaprirody.cz/z-historie-ochrany-prirody/karel-absolon/
4. **Hugo František Salm-Reifferscheidt.** Prověřit, zda jeho regionální průmyslový a vědecký význam zasluhuje samostatný osobnostní fakt; narodil se ve Vídni, nikoli v regionu. Zatím bez opravy.

### Hraniční geografická poznámka

Památník v 67975 je přiřazen podle oficiální adresy Hodonín 76. Možný hraniční vztah k sousednímu okresu Žďár nad Sázavou přijme uživatel k následné terénní kontrole. Při auditu Žďárska zabránit duplicitě a nepřebírat památník do sousedního bloku.

## 3. Provedené kontroly / další postup

- [x] Načten `prompt_audit.md` V2.1.
- [x] Načten `QUERY_LIMITS.md`.
- [x] Načteny `schema.json`, `CONTENT_STANDARD.md`, `prompt_rework.md`.
- [x] Načteny `sequence.json`, RÚIAN README, CSV inventář a import manifest.
- [x] Ověřen registr auditů; bez překryvu.
- [x] Přesný inventář 38 PSČ a cílené načtení řádků.
- [x] Úvodní tematická rešerše oblasti A.
- [x] Detailní audit každého PSČ: B–H podle promptu; opravy a read-back zaznamenány níže.
- [x] Polohy prověřeny podle auditních pravidel; záměrné null hodnoty ponechány s důvodem.
- [x] Potvrzené bezpečné vady opraveny sekvenčně a ověřeny read-backem.
- [x] Kontrola duplicit, kategorií a mapových bodů dokončena; publikace V5 verified.
- [x] Závěrečný report a publikace dokončeny; záloha čeká na spuštění.

**Další krok:** audit a publikace dokončeny; zbývá provést zálohu přes ověřený a dostupný mechanismus.


## 4. Výsledek detailního auditu a provedené opravy

### Tematická úplnost
Doplněno 5 nových faktů v 7 jazycích:
- 67801 — Kateřinská jeskyně (fact_007).
- 67902 — Hugo František Salm-Reifferscheidt (fact_009).
- 67971 — Marie von Ebner-Eschenbach a její pobyty na zámku Lysice (fact_007).
- 67975 — Památník holokaustu Romů a Sintů na Moravě (fact_005).
- 68001 — Karel Absolon (fact_012).

### Opravy obsahu
- 67901 — odstraněn duplicitní fakt o zámku Lysice; primární přiřazení zůstává 67971. Jedinečná osobní vazba Marie von Ebner-Eschenbach byla zachována novým faktem v 67971.
- 67902 — fact_006 rozšířen z 328 znaků; doplněna doložená místní přezdívka „Cyrilka“ a aktualizováno všech 7 jazyků.
- 67907 — opraveny 2 neúplné překlady, všech 7 jazyků srovnáno s českým master textem.
- 67913 — fact_009, všech 7 jazyků srovnáno s aktuálním českým master textem.
- 67921 — fact_009, všech 7 jazyků srovnáno s aktuálním českým master textem.
- V cílovém rozsahu po opravách nebyl zjištěn český master text kratší než 350 znaků; kontrolované translations.cs odpovídají facts a jazykové počty odpovídají počtu faktů.

### Geografie a mapové body
- Doplněno 9 obhajitelných poloh u existujících faktů: 67933, 67934, 67953, 67961, 67972, 67973, 67974 a 67976 (u 67976 dvě polohy).
- Zbývajících 16 hodnot location=null zůstává záměrně: jde o trasy, vícebodové soubory památek, krajinné celky nebo místa bez dostatečně obhajitelného bodu. Nebyly nahrazeny representative_point ani odhadnutým středem obce.
- Po porovnání s přesným enumem schema.json opraveno 23 skutečně nepovolených hodnot location.type. Čtyři hodnoty, které se při prvním užším testu jevily jako chybné, ale ve skutečnosti jsou v českém schématu povolené (historic_factory, historic_mill, historic_park), byly obnoveny; stejně tak byl pro historický vodní mlýn použit povolený typ historic_mill.
- Trigger postal_codes_sync_explorer_map_points vytváří body pouze pro status='published'. Ručně vložené body u nepublikovaných záznamů byly odstraněny. Read-back potvrzuje 3 mapové body pro již publikované 67907 (3 fakta s polohou); pro ostatní nepublikované záznamy se body ručně nevytvářejí.

### Otevřená geografická výjimka
- 67975 — oficiální kontakt Památníku holokaustu Romů a Sintů uvádí adresu Hodonín 76, PSČ 67975. RÚIAN inventář pro 67975 však uvádí pouze Tasovice a Černovice. Fakt je přiřazen podle oficiální adresy památníku, ale rozpor zůstává označen jako REVIEW REQUIRED. sequence.json nebyl změněn.

### Stav a uzavření
- ID faktů zachována; při následné publikaci se změnily pouze `status` a `data_version` přesně podle oddílu 5.
- Po publikaci je celý blok 38/38 `published`, V5; celkem 252 mapových bodů.
- Záloha zatím nebyla provedena; změny jiné databáze nebyly provedeny.
- **Výsledek:** AUDIT COMPLETE — REVIEW REQUIRED pouze pro geografické přiřazení památníku v 67975; jinak obsahové a základní strukturální kontroly prošly.


## 5. Publikace V5 a read-back

38/38 existujících českých PSČ přesně z inventáře tohoto taháku: `data_version=5`, `status='published'`. Přesný read-back: 38 řádků, 38 unikátních PSČ, 38/38 published V5, 0 výjimek; po synchronizaci 252 mapových bodů. ID a obsah záznamů, `sequence.json` a jiné země beze změny.

## 6. Záloha — VERIFIED

- Vytvořena a nasazena dedikovaná Supabase Edge Function `travel-backup-cz-67801-68001-blanensko-boskovicko-audited` (verze 2).
- Funkce je pevně svázána s přesným inventářem 38 PSČ a ID 10527–10564; před exportem ověřuje `country_code=CZ`, `data_version=5`, `status=published`, region Jihomoravský kraj a přesnou shodu všech záznamů.
- Před ostrým během proběhl read-only preview. První verze kontroly chybně předpokládala mapový bod pro každý fakt; kontrola odhalila 268 faktů, z toho 252 s polohou a 16 bez polohy. Funkce byla opravena tak, aby ověřovala všech 252 geolokovaných faktů proti 252 mapovým bodům. Preview následně prošel: 38 PSČ, 268 faktů, 252 geolokovaných faktů, 252 mapových bodů, 1 CZ validační schéma; 38/38 published V5.
- Ostrá záloha vytvořena v Dropboxu:
  `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_BLANENSKO_BOSKOVICKO_67801-68001_2026-11-27T18-08-08-280Z/`
- Obsahuje přesně tři požadované soubory:
  - `CZ_AUDIT_BLANENSKO_BOSKOVICKO_67801-68001_backup.json` — 2 416 384 B
  - `CZ_AUDIT_BLANENSKO_BOSKOVICKO_67801-68001_restore.sql` — 2 158 264 B
  - `manifest.json` — 2 888 B
- Edge Function provedla upload v režimu add-only, read-back každého souboru a SHA-256 porovnání. Všechny tři soubory mají `verified=true` a shodný očekávaný / načtený hash.
- Manifest potvrzuje `validation.status=VERIFIED`, `readback_verified=true`, `verified_record_count=38`, `verified_scope_hash=fa76f70f6e20e86872851f8dc5eff54f1c279da717943f8a2f5fc767b777fa92`.
- Supabase `backup_snapshots`: záznam `CZ-AUDIT-BLANENSKO-BOSKOVICKO-67801-68001-2026-11-27T18-08-08-280Z`, status `VERIFIED`, 38 záznamů. Work wave `CZ-AUDIT-BLANENSKO-BOSKOVICKO-67801-68001-001` má status `COMPLETE`.
- Ověřený obsah: 38 PSČ, 268 faktů, 252 geolokovaných faktů, 252 mapových bodů, 1 validační schéma. Bez čtení nesouvisejících PSČ nebo jiných zemí.

**Výsledek:** PUBLISHED V5 + BACKUP VERIFIED. Otevřená geografická výjimka 67975 zůstává zdokumentována výše; záloha zachycuje aktuální publikovaný stav beze změny.
