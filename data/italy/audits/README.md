# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **Obsahový audit A–I PASS pro všech 63 faktů / 441 překladů v 59100; 8 předchozích validovaných CAP PASS. Celý blok zůstává REVIEW REQUIRED pouze kvůli `59100.workflow_status=placeholder`.** Dodatečné `fact_062–063` byly samostatně čtenářsky, věcně a strukturálně auditovány; lifecycle nebyl automaticky změněn. Žádná publikace, záloha ani read-only lock.|
| IT-59100 | 59100 — Prato | [59100_prato_rework.md](59100_prato_rework.md) | **Rework checkpoint: 61 facts / 427 translations reader-reviewed; facts 062–063 added afterwards. Current Neon row: 63 facts / 441 translation entries; structural parity checks pass; workflow_status=placeholder. Final audit remains pending.** |
| IT-00040-00059 | 00040–00059 | [00040-00059_audit.md](00040-00059_audit.md) | **Audit A–I pending. Neon inventory: 19 existing CAP / 257 facts; 00056 absent (not to be created); 00042–00045 placeholder; 00047 has empty translations in all seven languages.** |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
