# Auditní tahák — Domažlicko 34401–34601

**Kanonické ID:** CZ-DOMAZLICKO-34401-34601  
**Auditní prompt:** `data/czechia/prompt_audit.md` V2.0  
**Stav:** PASS — kompletní sémantická kontrola 178/178 faktů a 1 068/1 068 cizojazyčných překladů dokončena; bez dalších významových vad  
**Zdroj produkčních dat:** Supabase `public.postal_codes`, `country_code = 'CZ'`

## 1. Inventář a rozsah

Rozsah auditovaný přesně podle průniku `sequence.json` a Supabase:

`34401, 34501, 34502, 34506, 34507, 34509, 34521, 34522, 34525, 34526, 34532, 34533, 34534, 34535, 34543, 34545, 34561, 34562, 34601`

- 19/19 PSČ v `sequence`.
- 19/19 PSČ v `groups`; každý kód právě jednou, žádný chybějící ani neočekávaný kód.
- 19/19 českých řádků v Supabase.
- Všech 19 kódů nalezeno v centrálním RÚIAN CSV inventáři.
- Rozsah, pořadí, `sequence.json`, `groups` ani jiné země nebyly změněny.
- Výsledný stav při aktuálním read-backu: **178 faktů v 19 záznamech** (původní počet 168 v tomto taháku byl zastaralý).

## 2. Zásadní turistická úplnost — uzavřeno

Přehled hlavních příběhů zkontrolován pro celé území. Již pokryté dominanty a příběhy zahrnují zejména Domažlice a Chodský hrad, Chody a jejich privilegia, bitvu u Domažlic 1431, Kdyni a Akci Kámen, Rýzmberk a Nový Herštejn, Pivoňský klášter, Poběžovice a Mitsuko Aoyamu, operaci Kovboj, trhanovský konflikt s Lomikarem, Baarův odkaz, Postřekov a jeho osobnosti, Holýšovský válečný průmysl a další místní historické a přírodní dominanty.

### Nově doplněné zásadní příběhy a osobnosti

- **34401 / fact_007:** Vavřinecká pouť 13. 8. 1939 a vlastenecké kázání Bohumila Staška; přibližně 120 000 účastníků podle městských materiálů.
- **34401 / fact_008:** Jindřich Jindřich — skladatel, klavírista, národopisec, sběratel více než 1 400 nápěvů a přes 4 000 textů; zakladatel sbírky dnešního Muzea Jindřicha Jindřicha.
- **34401 / fact_009:** Karel Matěj Čapek-Chod — domažlický rodák, významný český prozaik a novinář.
- **34401 / fact_010:** Jan František Hruška — rodák z Pece pod Čerchovem, významný chodský národopisec a autor Dialektického slovníku chodského.
- **34401 / fact_011:** Jan Sladký Kozina — vůdce chodského povstání narozený v Újezdě; pozdější pověst o výroku „do roka a do dne“ je výslovně odlišena od doložených skutečností.
- **34506 / fact_009:** Bitva u Brůdku roku 1040 mezi vojskem Břetislava I. a výpravou Jindřicha III.; text výslovně uvádí, že přesné bojiště není bezpečně určeno a mapový bod u kostela sv. Václava je pouze orientační pamětní místo.

Všechny nové fakty mají vlastní zdroje, kategorii, mapovou kategorii, polohu a překlady cs/de/en/es/fr/it/nl. Zachována jsou existující ID; nové ID navazují na řady konkrétních PSČ. U nových osobnostních faktů je `map_category = personality`.

## 3. Provedené opravy

### Délka českých master textů
- Nalezeno 19 faktů kratších než 350 znaků.
- Rozšířeno 9 faktů v 34543 a 10 faktů v 34601.
- Odpovídající překlady doplněny ve všech šesti cizích jazycích.
- Read-back: 0 českých master textů pod 350 znaků.

### Geografické polohy
- Původně 4 fakta s `location = null`.
- 34545: doplněn kostel sv. Martina v Blížejově a dva historické příběhy s přibližným orientačním bodem v jádru obce.
- 34561: doplněn přibližný orientační bod pro Křenovské mohyly.
- Read-back: 0 null poloh.

### Synchronizace českého masteru
- Opraveny rozdíly `facts[].text` vs. odpovídající `translations.cs[].text` u 34522 a 34535.
- Read-back po všech změnách: 0 rozdílů českého masteru.

### Sémantické přiřazení překladů

- Při porovnání titulů a duplicit napříč sedmi jazykovými poli byla nalezena záměna u **34401 / fact_017**: český master popisuje Draženovské dožínky roku 1924 s J. Š. Baarem, ale `translations.cs`, `de`, `en`, `es`, `fr`, `it`, `nl` obsahovaly texty Vavřinecké pouti z `fact_007`.
- Všech sedm překladových položek `fact_017` bylo nahrazeno odpovídající verzí Draženovských dožínek podle českého masteru. ID, pořadí faktů, zdroje, lokace a master text zůstaly zachovány.
- Read-back potvrdil správný český master a anglickou verzi; následné dávkové kontroly potvrdily **0 rozdílů `translations.cs`**, **0 duplicitních názvů a textů** napříč jazykovými poli.
- Byla dokončena individuální sémantická kontrola všech **178/178 faktů** a všech **1 068/1 068 cizojazyčných textů** v jazycích de/en/es/fr/it/nl proti českému masteru. Nebyla nalezena žádná další významová záměna, vynechání zásadního historického údaje ani změna míry jistoty tvrzení.
- Zkrácené překlady byly posuzovány podle zachování významu, nikoli podle mechanické délky; všechny prošly.
- Při závěrečném průchodu byla navíc opravena slepená věta po údaji o zvonu z roku 1727 u `34601/fact_003` v českém masteru a všech jazykových polích; read-back potvrdil opravu.

## 4. Technické kontroly — read-back PASS

Poslední dávková kontrola Supabase potvrdila:

- 19 PSČ / **178 faktů / 1 246 jazykových položek** (178 × 7).
- 0 krátkých českých master textů.
- 0 null poloh.
- 0 neplatných `category`, `priority` a `map_category`.
- 0 neplatných nebo neúplných objektů `location`.
- 0 faktů bez zdrojů.
- 0 chybějících překladových řádků v sedmi jazycích.
- 0 rozdílů `translations.cs` proti českému masteru.
- 0 duplicitních překladových ID.
- 0 duplicitních názvů a textů překladů po opravě `34401/fact_017`.
- 0 chybějících povinných polí faktů.
- 0 reklamních/propagačních formulací v cíleném vícejazyčném scanu.
- Všech 19 záznamů zůstává `status = validated`, `data_version = 1`.

AJV ani samostatný validační běh nebyl spuštěn — podle promptu V2.0 není požadován.

## 5. Otevřené položky a výsledek

**PASS — kompletní sémantická kontrola dokončena.** Všech 178/178 faktů a 1 068/1 068 cizojazyčných překladů bylo jednotlivě porovnáno s českým masterem. Jediná dříve nalezená záměna `34401/fact_017` byla opravena ve všech sedmi jazykových polích ještě před touto kontrolou; při úplném průchodu nebyla nalezena žádná další významová vada.

Nejsou evidovány žádné otevřené CRITICAL nebo HIGH věcné, geografické, kategoriální, strukturální ani sémantické vady.

## 6. Publikace, záloha a read-only zamčení

- **Publikace dokončena:** všech 19/19 PSČ má `status = published` a `data_version = 5`; Supabase read-back potvrdil přesný inventář bez výjimek.
- **Obsah zachován:** 19 záznamů a 178 faktů; žádné změny `sequence.json`, `groups`, schématu, Content Standardu ani rework promptu.
- **Záloha VERIFIED:** Dropbox `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_34401-34601_2026-11-19T18-25-25-775Z/`; obsahuje `CZ_AUDIT_34401-34601_backup.json`, `CZ_AUDIT_34401-34601_restore.sql` a `manifest.json`. Manifest potvrzuje 19 záznamů, `validation.status = VERIFIED`, `readback_verified = true` a shodu SHA-256.
- **Read-only zamčeno v Supabase:** trigger `lock_cz_domazlicko_34401_34601_read_only` na `public.postal_codes`, funkce `prevent_cz_domazlicko_34401_34601_mutation()`. Chrání přesně těchto 19 PSČ (CZ) proti INSERT, UPDATE a DELETE a také proti přesunu z chráněného rozsahu nebo do něj. Odmítnutí používá SQLSTATE `55000`; odemčení je možné pouze výslovnou, revidovanou migrací.
- **Testy zámku PASS:** pokusy UPDATE (34401), DELETE (34501) a INSERT (34601) byly všechny odmítnuty SQLSTATE `55000`. Testy nezměnily data.
- Závěrečný read-back: 19/19 `published` V5, 178 faktů, 0 výjimek. Zámek je aktivní (`tgenabled = O`).
