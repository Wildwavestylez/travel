# Registr auditních taháků — Itálie

**Stav:** Aktivní auditní taháky podle `data/italy/prompt_audit.md` V1.1.

| Kanonické ID | Rozsah | Kanonický tahák | Stav |
|---|---|---|---|
| IT-59011-59100 | 59011–59100 | [59011-59100_audit.md](59011-59100_audit.md) | **IN PROGRESS — REVIEW REQUIRED (audit not complete)** — 9 řádků (8 validated, 1 placeholder), 61 faktů; A CLOSED; B CLOSED; C CLOSED: všech 55 faktů geograficky použitelné pro mapu, spor CAP u Pieve di San Pietro není blokující; D CLOSED; E PARTIAL: všechny enumy platné; 3 schválené sémantické opravy map_category (park_garden, historic_city, personality) zapsány do Neonu a ověřeny read-backem; zbývá případná další kontrola sémantiky; F PARTIAL: opraveny 4 fakty (59015/008–009, 59016/007–008) v cs/de/en/es/fr, it mirror ověřen, původní nl zachována; read-back 7/7 unikátních jazyků u každého faktu; opraveny 3 drobné jazykové chyby 59013; prompt rework i audit nyní povolují bezpečné překladové opravy bez dílčího schvalování; závěrečný čtenářský audit zbývá; G PASS: strukturální kontrola 8 validovaných záznamů/55 faktů, povinná pole, typy, zdroje a pořadí ID ve všech 7 překladech bez chyb; lifecycle promptu sjednocen se schema/DB: pouze workflow_status, bez record.status/data_version; H CLOSED: 55/55 poloh neprázdných a číselných, bez konkrétního důkazu zjevné chyby; žádné plošné přeměřování ani změna souřadnic; I PARTIAL: bez potvrzené reklamy, zbývá cílené ověřování tvrzení a náhrada vedlejšího CAP zdroje 59021/004; bez publikace, zálohy a read-only zamčení |

## Pravidla registru
- Před novým auditem ověř, zda již neexistuje tahák pro stejný nebo překrývající se rozsah.
- Pro každý auditovaný rozsah používej jediný kanonický tahák podle aktuálního italského `prompt_audit.md`.
- Dokončené kontroly neopakuj; eviduj skutečné nálezy, opravy a otevřené kroky.
- Registr obsahuje pouze odkazy a stručný stav; podrobnosti patří do kanonického taháku.
