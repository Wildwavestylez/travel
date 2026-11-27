# Finální audit Česko — 67801–68001 (Blanensko a Boskovicko)

- **Kanonické ID:** `CZ-BLANSKO-BOSKOVICE-67801-68001`
- **Stav:** IN PROGRESS — úvodní tematická rešerše dokončena; detailní audit PSČ pokračuje
- **Auditní pravidla:** `data/czechia/prompt_audit.md` V2.1
- **Provozní limity:** `data/czechia/QUERY_LIMITS.md`
- **Zdroj pravdy:** Supabase `ipnkjcpewtdaikiyzktv`, `public.postal_codes`, pouze `country_code='CZ'`
- **Rozsah:** přesně 38 existujících PSČ dle `data/czechia/sequence.json`
- **Publikace / záloha:** neprovedena; vyžaduje následný výslovný pokyn uživatele

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

### Otevřená geografická nesrovnalost

Oficiální web památníku uvádí adresu 67975, ale sdílený RÚIAN CSV řádek 67975 obsahuje pouze obce Tasovice a Černovice, nikoli Hodonín. Neprovádět změnu `sequence.json`; ověřit a zaznamenat přesné přiřazení. Pokud zůstane nejasné, označit dotčenou položku REVIEW REQUIRED.

## 3. Provedené kontroly / další postup

- [x] Načten `prompt_audit.md` V2.1.
- [x] Načten `QUERY_LIMITS.md`.
- [x] Načteny `schema.json`, `CONTENT_STANDARD.md`, `prompt_rework.md`.
- [x] Načteny `sequence.json`, RÚIAN README, CSV inventář a import manifest.
- [x] Ověřen registr auditů; bez překryvu.
- [x] Přesný inventář 38 PSČ a cílené načtení řádků.
- [x] Úvodní tematická rešerše oblasti A.
- [ ] Detailní audit každého PSČ: B–H podle promptu, včetně všech sedmi jazyků a délky pouze českého master textu (<350 znaků).
- [ ] Ověřit případné `location=null` dle hierarchie reworku; existující neprázdné souřadnice nepřeměřovat.
- [ ] Opravit pouze potvrzené bezpečné vady, sekvenčně; po zápisu read-back pouze změněné položky.
- [ ] Dokončit kontrolu duplicit, kategorií, statusu/verze a mapových bodů v přesném rozsahu.
- [ ] Závěrečný report; publikace a záloha až na výslovný pokyn.

**Další krok:** pokračovat detailem PSČ 67801, dokončit všechny relevantní kontroly a automaticky pokračovat sekvenčně podle výše uvedeného inventáře.
