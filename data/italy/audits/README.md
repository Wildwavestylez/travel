# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **Obsahový audit A–I PASS pro všech 63 faktů / 441 překladů v 59100; 8 předchozích validovaných CAP PASS. Celý blok zůstává REVIEW REQUIRED pouze kvůli `59100.workflow_status=placeholder`.** Dodatečné `fact_062–063` byly samostatně čtenářsky, věcně a strukturálně auditovány; lifecycle nebyl automaticky změněn. Žádná publikace, záloha ani read-only lock.|
| IT-59100 | 59100 — Prato | [59100_prato_rework.md](59100_prato_rework.md) | **Rework checkpoint: 61 facts / 427 translations reader-reviewed; facts 062–063 added afterwards. Current Neon row: 63 facts / 441 translation entries; structural parity checks pass; workflow_status=placeholder. Final audit remains pending.** |
| IT-00060-00079 | 00060–00079 | [00060-00079_audit.md](00060-00079_audit.md) | **IN PROGRESS / REVIEW REQUIRED — 18 CAP / 202 facts. Mechanical SQL consistency checks pass; translation corrections in 00062/fact_001–008 and category correction in 00077/fact_015. A–I not yet closed; 00066/fact_008 source conflict open. No publication.** |
| IT-00040-00059 | 00040–00059 | [00040-00059_audit.md](00040-00059_audit.md) | **PUBLISHED V5 — 2026-11-27: 19 existing CAP / 257 facts; 00056 absent. A–I content and technical checks PASS; Operazione Shingle overlap explicitly accepted. Rework 00052–00054 and 00058/fact_014 complete. All 257 Czech texts meet 350 characters; seven-language ID/order parity passes. Neon read-back confirms 19/19 rows with workflow_status=published, record.status=published, data_version=5. No backup or read-only lock performed.** |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
