# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **Obsahový audit A–I PASS pro všech 63 faktů / 441 překladů v 59100; 8 předchozích validovaných CAP PASS. Celý blok zůstává REVIEW REQUIRED pouze kvůli `59100.workflow_status=placeholder`.** Dodatečné `fact_062–063` byly samostatně čtenářsky, věcně a strukturálně auditovány; lifecycle nebyl automaticky změněn. Žádná publikace, záloha ani read-only lock.|
| IT-59100 | 59100 — Prato | [59100_prato_rework.md](59100_prato_rework.md) | **Rework checkpoint: 61 facts / 427 translations reader-reviewed; facts 062–063 added afterwards. Current Neon row: 63 facts / 441 translation entries; structural parity checks pass; workflow_status=placeholder. Final audit remains pending.** |
| IT-00040-00059 | 00040–00059 | [00040-00059_audit.md](00040-00059_audit.md) | **Refresh 2026-11-27: 19 existing CAP / 257 facts; 00056 absent. A/B/C/D/E/F/G/H/I PASS for content and technical checks. The Operazione Shingle overlap (00042/fact_003 and 00048/fact_004) is explicitly accepted and retained. Rework 00052–00054 and 00058/fact_014 is complete; Punta della Vipera is 00058/fact_014 and Ponte di Statua is 00054/fact_016. All 257 Czech texts meet 350 characters; 133 translation branches have matching IDs/order. Overall REVIEW REQUIRED only because 00042–00045 still carry placeholder lifecycle despite developed master content; no lifecycle change or publication, backup or read-only lock was made.** |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
