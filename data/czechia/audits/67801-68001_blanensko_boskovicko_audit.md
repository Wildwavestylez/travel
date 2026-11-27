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


## 4. Výsledek detailního auditu a provedené opravy

### Tematická úplnost
Doplněno 5 nových faktů v 7 jazycích:
- 67801 — Kateřinská jeskyně (fact_007).
- 67902 — Hugo František Salm-Reifferscheidt (fact_009).
- 67971 — Marie von Ebner-Eschenbach a její pobyty na zámku Lysice (fact_007).
- 67975 — Památník holokaustu Romů a Sintů na Moravě (fact_005).
- 68001 — Karel Absolon (fact_012).

### Opravy obsahu
- 67901 — odstraněn duplicitní fakt o zámku Lysice; primární přiřazení zůstává 67971. Jedinečná osobní vazba Marie von Ebner-Eschenbach byla zachována novým faktem v 67971.
- 67902 — fact_006 rozšířen z 328 znaků; doplněna doložená místní přezdívka „Cyrilka“ a aktualizováno všech 7 jazyků.
- 67907 — opraveny 2 neúplné překlady, všech 7 jazyků srovnáno s českým master textem.
- 67913 — fact_009, všech 7 jazyků srovnáno s aktuálním českým master textem.
- 67921 — fact_009, všech 7 jazyků srovnáno s aktuálním českým master textem.
- V cílovém rozsahu po opravách nebyl zjištěn český master text kratší než 350 znaků; kontrolované translations.cs odpovídají facts a jazykové počty odpovídají počtu faktů.

### Geografie a mapové body
- Doplněno 9 obhajitelných poloh u existujících faktů: 67933, 67934, 67953, 67961, 67972, 67973, 67974 a 67976 (u 67976 dvě polohy).
- Zbývajících 16 hodnot location=null zůstává záměrně: jde o trasy, vícebodové soubory památek, krajinné celky nebo místa bez dostatečně obhajitelného bodu. Nebyly nahrazeny representative_point ani odhadnutým středem obce.
- Po porovnání s přesným enumem schema.json opraveno 23 skutečně nepovolených hodnot location.type. Čtyři hodnoty, které se při prvním užším testu jevily jako chybné, ale ve skutečnosti jsou v českém schématu povolené (historic_factory, historic_mill, historic_park), byly obnoveny; stejně tak byl pro historický vodní mlýn použit povolený typ historic_mill.
- Trigger postal_codes_sync_explorer_map_points vytváří body pouze pro status='published'. Ručně vložené body u nepublikovaných záznamů byly odstraněny. Read-back potvrzuje 3 mapové body pro již publikované 67907 (3 fakta s polohou); pro ostatní nepublikované záznamy se body ručně nevytvářejí.

### Otevřená geografická výjimka
- 67975 — oficiální kontakt Památníku holokaustu Romů a Sintů uvádí adresu Hodonín 76, PSČ 67975. RÚIAN inventář pro 67975 však uvádí pouze Tasovice a Černovice. Fakt je přiřazen podle oficiální adresy památníku, ale rozpor zůstává označen jako REVIEW REQUIRED. sequence.json nebyl změněn.

### Stav a uzavření
- ID faktů zachována; statusy a data_version nebyly měněny.
- Jediný již publikovaný záznam v bloku je 67907 (published, V5); jeho 3 mapové body byly ověřeny.
- Žádná publikace V5, export, záloha ani změna jiné databáze nebyla provedena.
- **Výsledek:** AUDIT COMPLETE — REVIEW REQUIRED pouze pro geografické přiřazení památníku v 67975; jinak obsahové a základní strukturální kontroly prošly.
