# Audit českých PSČ — okres Český Krumlov

**Kanonické ID:** CZ-ČESKÝ-KRUMLOV-38101-38293  
**Stav:** CLOSED — V5 + PUBLISHED — READ-ONLY  
**Datum uzavření:** 18. 11. 2026  
**Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`  
**Jediný platný tahák pro tento okres.**

## Závazné vymezení rozsahu

Pouze české záznamy s `country_code='CZ'` a `county='Český Krumlov'`, přesně těchto 28 PSČ:

`38101, 38201, 38202, 38203, 38206, 38208, 38211, 38216, 38218, 38221, 38222, 38223, 38226, 38229, 38232, 38241, 38242, 38272, 38273, 38276, 38278, 38279, 38281, 38282, 38283, 38291, 38292, 38293`.

Nejde o povolení pracovat s jinými PSČ stejné číselné řady. Vždy kontrolovat také zemi a okres.

## Uzavření a ověřené výsledky

- Supabase read-back: **28/28** záznamů, všechny `data_version=5` a `status='published'`.
- Přesný inventář výše; žádné jiné české PSČ ani zahraniční záznamy nebyly změněny.
- Původních 7 placeholderů bylo zahrnuto do publikace celého okresního rozsahu.
- Dropbox záloha ověřena: JSON, restore SQL a manifest; manifest potvrzuje `record_count=28`, `validation.status=VERIFIED`, `readback_verified=true` a `verified_record_count=28`.
- SHA-256 canonical scope hash: `335a3a0fbd33eaab1cfac81052874fc2e30e2def62bc831f5e369a945a1eb774`.
- Záloha: `/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_38101-38293_2026-11-18T17-07-29-940Z/`.
- Read-only trigger: `lock_cz_38101_38293_read_only`; funkce `public.prevent_cz_38101_38293_mutation()`.
- Trigger blokuje INSERT, UPDATE a DELETE nad přesným českým inventářem; testy UPDATE a DELETE očekávaně skončily SQLSTATE `55000`. Čtení zůstává povoleno.
- Shodná textová PSČ v Německu nejsou součástí ochrany; trigger vyžaduje `country_code='CZ'`.

## GitHub evidence

Původní společný auditní soubor byl archivován jako `DEPRECATED_DO_NOT_USE_38101-38901_audit.md`. Detailní historické poznámky zůstávají v tomto archivu, ale nesmějí být používány jako aktuální instrukce.

- Publikace a záloha: commit `f7ea605f79caa78c3786174977dc75916d929ea0`
- Read-only zámek: commit `32c43700a63d6a00bb2cb90d94295c314757d1d5`

## Pravidlo pro další práci

Tento okres je uzavřen. **Neprovádět rework, audit, publikaci ani zápisy do těchto záznamů**, pokud uživatel výslovně neschválí samostatné odemčení a revizi. Pro Prachatice a Strakonice používat výhradně jejich vlastní okresní taháky.
