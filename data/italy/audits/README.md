# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-00118-00139 | 00118–00139 | [00118-00139_audit.md](00118-00139_audit.md) | **PUBLISHED V5 — 2026-11-27: 20 CAP / 139 facts / 973 translation entries. Final A–I audit PASS; all 22 initially null locations individually reviewed, two resolved and 20 retained null with documented reasons. Eight invalid map_category values corrected; two Czech texts expanded to ≥350 characters. Final read-back confirms 20/20 `workflow_status=published`, `record.status=published`, `data_version=5`; 0 lifecycle/version mismatches. No Dropbox backup or read-only lock performed.** |
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **Obsahový audit A–I PASS pro všech 63 faktů / 441 překladů v 59100; 8 předchozích validovaných CAP PASS. Celý blok zůstává REVIEW REQUIRED pouze kvůli `59100.workflow_status=placeholder`.** Dodatečné `fact_062–063` byly samostatně čtenářsky, věcně a strukturálně auditovány; lifecycle nebyl automaticky změněn. Žádná publikace, záloha ani read-only lock.|
| IT-59100 | 59100 — Prato | [59100_prato_rework.md](59100_prato_rework.md) | **Rework checkpoint: 61 facts / 427 translations reader-reviewed; facts 062–063 added afterwards. Current Neon row: 63 facts / 441 translation entries; structural parity checks pass; workflow_status=placeholder. Final audit remains pending.** |
| IT-00060-00079 | 00060–00079 | [00060-00079_audit.md](00060-00079_audit.md) | **PUBLISHED V5 — 2026-11-27: A–I audit PASS pro 18 CAP / 205 facts. 1 435 překladových položek v sedmi jazycích; všech 205 českých textů ≥350 znaků. Schema validace 18/18 PASS, 0 chyb. Čtyři dříve null lokace mají doložené orientační body; null count 0. Neon read-back: 18/18 `workflow_status=published`, `record.status=published`, `data_version=5`; 0 lifecycle/version mismatch. Dropbox záloha čeká na ověřený italský exportní mechanismus a cílovou složku.** |
| IT-00040-00059 | 00040–00059 | [00040-00059_audit.md](00040-00059_audit.md) | **PUBLISHED V5 — 2026-11-27: 19 existing CAP / 257 facts; 00056 absent. A–I content and technical checks PASS; Operazione Shingle overlap explicitly accepted. Rework 00052–00054 and 00058/fact_014 complete. All 257 Czech texts meet 350 characters; seven-language ID/order parity passes. Neon read-back confirms 19/19 rows with workflow_status=published, record.status=published, data_version=5. No backup or read-only lock performed.** |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
