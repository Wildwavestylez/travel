# Auditní tahák — Domažlicko 34401–34601

**Kanonické ID:** CZ-DOMAZLICKO-34401-34601  
**Auditní prompt:** `data/czechia/prompt_audit.md` V2.0  
**Stav:** REVIEW REQUIRED — technické a obsahové opravy provedeny; zbývá úplná sémantická kontrola starších překladů  
**Zdroj produkčních dat:** Supabase `public.postal_codes`, `country_code = 'CZ'`

## 1. Inventář a rozsah

Rozsah auditovaný přesně podle průniku `sequence.json` a Supabase:

`34401, 34501, 34502, 34506, 34507, 34509, 34521, 34522, 34525, 34526, 34532, 34533, 34534, 34535, 34543, 34545, 34561, 34562, 34601`

- 19/19 PSČ v `sequence`.
- 19/19 PSČ v `groups`; každý kód právě jednou, žádný chybějící ani neočekávaný kód.
- 19/19 českých řádků v Supabase.
- Všech 19 kódů nalezeno v centrálním RÚIAN CSV inventáři.
- Rozsah, pořadí, `sequence.json`, `groups` ani jiné země nebyly změněny.
- Výsledný stav: 168 faktů v 19 záznamech.

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

## 4. Technické kontroly — read-back PASS

Poslední dávková kontrola Supabase potvrdila:

- 19 PSČ / 168 faktů.
- 0 krátkých českých master textů.
- 0 null poloh.
- 0 neplatných `category`, `priority` a `map_category`.
- 0 neplatných nebo neúplných objektů `location`.
- 0 faktů bez zdrojů.
- 0 chybějících překladových řádků v sedmi jazycích.
- 0 rozdílů `translations.cs` proti českému masteru.
- 0 duplicitních překladových ID.
- 0 duplicitních názvů faktů uvnitř PSČ.
- 0 chybějících povinných polí faktů.
- 0 reklamních/propagačních formulací v cíleném vícejazyčném scanu.
- Všech 19 záznamů zůstává `status = validated`, `data_version = 1`.

AJV ani samostatný validační běh nebyl spuštěn — podle promptu V2.0 není požadován.

## 5. Otevřené položky a výsledek

**REVIEW REQUIRED — jediná otevřená oblast:** úplná sémantická kontrola všech starších překladů de/en/es/fr/it/nl napříč 168 fakty. Strukturální přítomnost, přiřazení ID, neprázdnost a synchronizace češtiny jsou ověřeny; nové překlady doplněných faktů byly zkontrolovány při tvorbě. Starší cizojazyčné texty nebyly všechny jednotlivě sémanticky porovnány s českým masterem, proto audit zatím neoznačuji jako PASS.

Nejsou evidovány žádné otevřené CRITICAL nebo HIGH věcné, geografické, kategoriální ani strukturální vady.

## 6. Publikace, záloha a zamčení

- Nic nebylo publikováno: 19/19 zůstává `validated`, `data_version = 1`.
- Záloha nebyla spuštěna.
- Read-only zamčení nebylo spuštěno.
- `sequence.json`, schéma, Content Standard a rework prompt zůstaly beze změny.
- Po dokončení otevřené sémantické kontroly znovu vyhodnotit výsledek. Publikaci, zálohu a zamčení provádět pouze na výslovný pokyn uživatele.
