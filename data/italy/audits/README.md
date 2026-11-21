# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **REVIEW REQUIRED pro celý rozsah pouze kvůli 59100 placeholderu; 8 validovaných CAP PASS (A–I)** — aktuální inventář 9 řádků (8 `validated`, 1 `placeholder`), 118 faktů (55 validovaných + 63 placeholder). Technický read-back všech 9 řádků: povinná pole, 7 jazyků, pořadí ID, italské mirrory, délky masterů a zdrojové vazby bez nálezu. `59100` není finálně auditován, dokud nedokončí rework a nepřejde řádně do `validated`; žádná publikace, záloha ani read-only lock.|
| IT-59100 | 59100 — Prato | [59100_prato_rework.md](59100_prato_rework.md) | **Rework checkpoint: 61 facts / 427 translations reader-reviewed; facts 062–063 added afterwards. Current Neon row: 63 facts / 441 translation entries; structural parity checks pass; workflow_status=placeholder. Final audit remains pending.** |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
