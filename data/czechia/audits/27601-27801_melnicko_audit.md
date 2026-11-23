# Finální audit PSČ 27601–27801 — Mělnicko včetně Dřís

**Kanonické ID:** `CZ-MELNICKO-27601-27801`  
**Datum auditu:** 2026-11-23  
**Pravidla:** `data/czechia/prompt_audit.md` V2.1  
**Výsledek:** **PASS — audit dokončen; 33/33 PSČ PUBLISHED V5; Dropbox BACKUP VERIFIED; Neon IMPORT VERIFIED; Dropbox záloha ponechána beze změny.**

## 1. Rozsah a inventář

Rozsah byl sestaven podle `data/czechia/sequence.json` a porovnán s referenčním RÚIAN inventářem.

- **33/33 PSČ** nalezeno v sekvenci i v Supabase.
- **291 faktů** v 33 záznamech.
- Nejvyšší skutečně evidované PSČ v tomto bloku je `27801`; žádné geografické `279xx` v sekvenci nejsou.
- **27714 — Dřísy je výslovně zahrnuto.** Záznam zůstává v tomto společném auditu; jeho okresní příslušnost `Praha-východ` je v datech zachována a není důvod vytvářet samostatný audit.
- Sekvence nebyla měněna.

Přesný seznam PSČ:

`27601, 27701, 27703, 27704, 27705, 27706, 27707, 27708, 27711, 27713, 27714, 27715, 27716, 27721, 27723, 27724, 27731, 27732, 27733, 27734, 27735, 27736, 27737, 27738, 27741, 27742, 27743, 27744, 27745, 27746, 27751, 27752, 27801`

## 2. Tematická kontrola

Byly prověřeny hlavní památky, osobnosti, události a krajinné či technické dominanty celého bloku.

Zásadní témata již mají odpovídající zastoupení, mimo jiné:

- Mělnický zámek, chrám sv. Petra a Pavla, kostnice a historické vinařství;
- soutok Labe a Vltavy a krajina Úporu–Černínovska;
- Hořínské a další labské plavební stavby;
- Kokořínsko, Kokořín, Mšeno, Nosálov a Veltrusy;
- Nelahozeves a Antonín Dvořák;
- Všetaty a Jan Palach;
- Obříství, Svatopluk Čech a Bedřich Smetana;
- Kralupy a nálet z 22. března 1945;
- Dřísy a další obce zahrnuté pod PSČ 27714.

Mělnické vinařství a soutok Labe s Vltavou se při bližší kontrole ukázaly jako již pokryté existujícími fakty. **Nebyl proto přidán nový fakt ani vytvořena duplicitní položka.** Nebyla nalezena další zásadní chybějící památka, událost nebo osobnost, která by podle odlehčených pravidel auditu vyžadovala nový záznam.

## 3. Obsahové a technické výsledky

- **0 krátkých českých master textů** pod hranicí 350 znaků.
- Před opravou bylo nalezeno **47 rozdílů** mezi českým master textem a `translations.cs`; české překladové položky byly synchronizovány s masterem. Následná kontrola: **0 rozdílů**.
- Všech šest cizojazyčných sad DE, EN, ES, FR, IT a NL má pro všech 291 faktů neprázdné texty: **1 746/1 746 položek**, bez chybějících ID.
- **9 neplatných hodnot `source.type`** bylo opraveno na povolené typy `regional` nebo `specialist`.
- **2 neplatné hodnoty `location.type`** byly opraveny na `historic_industrial_site`:
  - 27738 / `fact_005` — panský pivovar a pozůstatky tvrze ve Vysoké Libni;
  - 27745 / `fact_010` — Úžický cukrovar a železnice.
- Nebyly zjištěny neplatné hodnoty kategorií, priorit ani `map_category`.
- Nebyly zjištěny prázdné seznamy zdrojů.
- Nebyly zjištěny duplicitní názvy faktů. Dvě opakující se obecné názvové podoby kostelů označují různé stavby v různých obcích, nejde o duplicity.
- Po dokončení auditu bylo na výslovný pokyn publikováno všech **33/33 záznamů** jako `data_version=5`, `status=published`; stav byl ověřen zpětným načtením ze Supabase.

## 4. Geografická kontrola

Doplněno **11 dosud chybějících objektů polohy**:

- 27705: `fact_005` — bývalá škola Jeviněves;
- 27708: `fact_007` — Ledčice, reprezentativní bod území;
- 27715: `fact_003` — blatné hradiště Na Hradišti;
- 27715: `fact_008` — oblast zaniklého Tišického jezera u ústí Košáteckého potoka;
- 27721: `fact_007` — bunkr P2/53/D1Z u Tupadel;
- 27738: `fact_004` — pomník padlým v Radouni;
- 27738: `fact_006` — Vysoká Libeň, reprezentativní bod archeologického území;
- 27744: `fact_004` — historické jádro Zlosyně;
- 27745: `fact_008` — dům čp. 12 v Zátvoru spojený s Vítězslavem Hálkem;
- 27745: `fact_009` — intravilán Kozomína, reprezentativní bod oblasti archeologického nálezu;
- 27751: `fact_015` — velkostatek Nelahozeves, reprezentativní bod hospodářského areálu.

Všechny nově doplněné polohy mají vyplněný zdroj a používají přesnost `exact`, `approximate` nebo `area_representative` podle povahy místa. Doplňovaly se pouze chybějící polohy; existující souřadnice nebyly plošně znovu ověřovány.

**Jedna poloha zůstává záměrně null:** 27705 / `fact_001` — Hrádek u Jeviněvsi. NPÚ lokalitu popisuje jako zalesněný ostroh na západním okraji obce a zpřístupňuje její polygon v mapovém podkladu, ale nepodařilo se bezpečně určit stabilní bodové souřadnice. Bod nebyl odhadnut od oka; null je ponecháno záměrně.

Dvě původně neplatné hodnoty typu polohy byly opraveny podle schématu. U všech 11 nově doplněných poloh byla ověřena registrace odpovídajícího zdroje v `content.sources`.

## 5. Mapové body

Mapové body byly kontrolovány pouze pro přesná ID vybraných 33 záznamů. Před publikací byly existující mapové body evidovány u PSČ 27736, 27741, 27742 a 27743; ruční zásah do mapového indexu nebyl proveden.

Po publikaci trigger `postal_codes_sync_explorer_map_points` automaticky synchronizoval všechny polohy faktů do `explorer_map_points`: **290/290 faktů s polohou má právě jeden odpovídající mapový bod**, 0 chybějících a 0 nadbytečných. Jediná záměrná poloha `null` (27705 / `fact_001`) zůstala bez mapového bodu.

## 6. Publikace, Dropbox backup a Neon import

### Supabase — PUBLISHED V5

- Na výslovný pokyn uživatele bylo publikováno všech **33/33 PSČ**: `data_version=5`, `status=published`.
- Read-back potvrdil přesný seznam 33 PSČ, 291 faktů a 0 výjimek.
- Trigger `postal_codes_sync_explorer_map_points` synchronizoval **290/290 mapových bodů**, 0 chybějících a 0 nadbytečných; 1 záměrný null zůstal bez bodu.
- Samostatná validace pomocí AJV nebo `pg_jsonschema` nebyla deklarována; proběhly cílené strukturální a enum kontroly podle `schema.json` a `CONTENT_STANDARD.md`.

### Dropbox — BACKUP VERIFIED

- Dedikovaná Supabase Edge Function: `travel-backup-cz-27601-27801-melnicko`.
- Work wave: `CZ-AUDIT-MELNICKO-27601-27801-001` — `COMPLETE`; `backup_snapshots` — `VERIFIED`.
- Backup ID: `CZ-AUDIT-MELNICKO-27601-27801-2026-11-23T18-03-57-535Z`.
- Složka: `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_MELNICKO_27601-27801_2026-11-23T18-03-57-535Z/`
- JSON: `CZ_AUDIT_MELNICKO_27601-27801_backup.json` — 2 269 056 B; SHA-256 `244cd2fcd52914d01044758f80c30a0b03890c2bbf65cb50a4ec663dd45ee767`.
- Restore SQL: `CZ_AUDIT_MELNICKO_27601-27801_restore.sql` — 2 000 191 B; SHA-256 `bd1a8678199dc7afae1dac873fb1e827b7adbc473a85c0e9722f7cb21c04a141`.
- Manifest: `manifest.json` — 2 620 B; SHA-256 `234e35a925057941c80277b43ccd5f305062c62cafc185abf3c22d5d1da994cd`.
- Všechny tři soubory byly po uploadu z Dropboxu znovu načteny; **3/3 SHA-256 read-back PASS**. Manifest potvrzuje `validation.status=VERIFIED`, `readback_verified=true`, `verified_record_count=33`.
- Scope hash: `7702dee54ae0503af3a903a9c3198c144ff526068fd65cb09e3ce5c7f4060643`.
- Dropbox záloha je vedena jako neměnná historická kopie s `delete_after=null`; **po importu do Neonu zůstává v Dropboxu beze změny**.

### Neon — IMPORT VERIFIED

- Cíl: **Europe Explorer → Production → `neondb.public.czechia_cap_records`**.
- Před importem byla vytvořena ochranná větev `pre-melnicko-27601-27801-import-20261123` (`br-bitter-voice-bglrxthz`) z produkční větve. Tato větev zachovává stav před importem: 909 záznamů a 0 PSČ Mělnicka.
- Před importem bylo v produkční tabulce ověřeno 0 kolizí PSČ a 0 kolizí `source_record_id` pro rozsah ID 8857–8889.
- Z ověřeného JSON souboru přímo z Dropboxu bylo vloženo **33/33 záznamů** metodou `INSERT ... ON CONFLICT DO NOTHING`, v pěti dávkách. Žádný existující řádek nebyl přepsán ani odstraněn.
- Finální read-back: **33/33 PSČ**, 33/33 `published` + `content_version=5`; **291 faktů**; všech 7 jazykových sad (CS, DE, EN, ES, FR, IT, NL) má 291/291 položek; `record.postcode` souhlasí v 33/33; 33 unikátních zdrojových ID 8857–8889.
- Zvlášť ověřeno `27714`: city Dřísy, county Praha-východ, 9 faktů, `source_record_id=8867`.
- Celkový počet záznamů v české Neon tabulce po importu: **942** (před importem 909).
- Ochranná větev zůstává zachována; Dropboxová záloha nebyla po importu měněna.

### Ostatní provozní stav

- Nebyl aktivován read-only lock; nebyl součástí uživatelského pokynu.
- `sequence.json` zůstává beze změny.

## 7. Použité podklady

Interní podklady:

- `data/czechia/prompt_audit.md`
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/sequence.json`
- `data/czechia/reference/ruian_postcodes.csv`
- `data/czechia/audits/README.md`

Externí podklady pro tematické a geografické ověření zahrnovaly zejména NPÚ / Státní archeologický seznam, MAS Vyhlídky Mělnicko, CENIA, ČRS SÚS, odbornou studii o pravěké krajině u Tišic, obecní weby Jeviněvsi, Mělnického Vtelna, Zálezlic, Kozomína a Nelahozevsi, Místopisný průvodce, Kurzy.cz a Hrady-zříceniny.cz.

---

**Konečný stav: PASS / PUBLISHED V5 / BACKUP VERIFIED / NEON IMPORT VERIFIED.** 33/33 PSČ, 291 faktů, 290 mapových bodů; jediná nevyplněná poloha je zdokumentovaná jako záměrný null. Dropbox obsahuje trvalou ověřenou zálohu a zůstává beze změny.
