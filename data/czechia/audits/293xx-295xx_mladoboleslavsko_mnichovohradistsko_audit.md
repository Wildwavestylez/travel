# Auditní tahák — Mladoboleslavsko a Mnichovohradišťsko (293xx–295xx)

**Kanonické ID:** `CZ-MLADOBOLESLAVSKO-MNICHOVOHRADISTSKO-293XX-295XX`  
**Stav:** IN PROGRESS — REVIEW REQUIRED — NOT PUBLISHED  
**Poslední checkpoint:** 2026-11-28  
**Rozsah:** 40 přesných PSČ podle `data/czechia/sequence.json` a `data/czechia/reference/ruian_postcodes.csv`.

## 1. Závazné podklady

Před pokračováním znovu nečíst celé soubory; v této relaci byly prostudovány:

- `data/czechia/prompt_audit.md`
- `data/czechia/QUERY_LIMITS.md`
- `data/czechia/prompt_rework.md`
- `data/czechia/schema.json`
- `data/czechia/CONTENT_STANDARD.md`
- `data/czechia/sequence.json`
- `data/czechia/reference/README.md`
- `data/czechia/reference/ruian_postcodes.csv`

**Provozní pravidlo:** jedna přesná poštovní směrovací číslice na DB operaci; jeden logický účel na SQL call; zápisy sekvenčně; po zápisu read-back pouze změněných cest. SQL request ideálně do 8 KB, výstup do 20 KB. Nepoužívat široké dotazy přes rozsah.

## 2. Přesný seznam PSČ

Sekvence a RÚIAN CSV se shodují: 40/40.

`29301, 29306, 29307, 29401, 29402, 29403, 29404, 29405, 29406, 29411, 29412, 29413, 29414, 29415, 29421, 29423, 29424, 29425, 29426, 29427, 29428, 29429, 29430, 29431, 29441, 29442, 29443, 29445, 29446, 29447, 29448, 29471, 29473, 29474, 29475, 29476, 29477, 29478, 29479, 29501`

Bez 294xx čísel, která v sequence/RÚIAN nejsou.

## 3. Stav databáze při checkpointu

- 40/40 záznamů existuje v `public.postal_codes`.
- Původní inventura: 323 faktů; po doplnění 6 osobností a odstranění 2 duplicit: **327 faktů**.
- Stav záznamů při inventuře: 22 `validated`, 18 `placeholder`; žádný záznam nebyl publikován ani převeden na V5.
- Všechny kontrolované JSON povinné klíče jsou přítomny v 40/40; `facts` je pole a `translations` objekt. Administrativní `city/county/state` jsou vyplněny.
- **29501 je zásadní blokátor:** 18 faktů, `status=placeholder`, ale `translations` je prázdný objekt — chybí všech 7 jazykových sad.
- Neprováděla se publikace V5, backup, Neon import ani read-only lock.

## 4. Provedené opravy

### 4.1 Zásadní osobnosti doplněné po turistickém průzkumu

**29301 Mladá Boleslav — přidány fakt_012 až fact_016:**

- Eva Bosáková — olympijská vítězka, 4 olympijské medaile.
- Adina Mandlová — významná filmová hvězda české kinematografie.
- Jan Železný — trojnásobný olympijský vítěz, světový rekordman.
- František Gellner — básník, prozaik, satirik a výtvarník.
- Jan Konůpek — grafik, malíř a ilustrátor, spoluzakladatel skupiny Sursum.

Všech pět má český master nad 350 znaků, všech 7 jazykových položek (cs/de/en/es/fr/it/nl) a orientační historickou polohu města. Read-back: 16 faktů, všechny jazykové sady po 16 položkách, nové CS položky přesně synchronizovány.

**29306 Kosmonosy — přidán fact_012:**

- Alois Bubák — významný český krajinář 19. století, rodák z domu čp. 16 v ulici Lípy.
- Doloženo životopisným slovníkem, městským zpravodajem a adresním bodem domu.
- Všech 7 jazykových položek přidáno; read-back potvrdil 12 faktů, 12 položek v každém jazyce a přesnou shodu CS/master.

### 4.2 Krátké české texty

Opraveny a přeloženy ve všech jazycích:

- 29412/fact_003 — 497 znaků.
- 29412/fact_009 — 495 znaků.
- 29415/fact_004 — 466 znaků.
- 29415/fact_008 — 479 znaků.

Všechny nyní překračují minimum 350 znaků.

### 4.3 Synchronizace češtiny

`translations.cs.facts` synchronizováno přesně z masteru pro:

- 29402 — read-back 4/4, mismatch 0.
- 29423 — read-back 12/12, mismatch 0.

### 4.4 Duplicitní a chybně přiřazené fakty odstraněny

- 29401/fact_007 — lovecký zámeček v Maníkovicích odstraněn z 29401; primární přiřazení je 29501, kde je již fact_007.
- 29404/fact_005 — Ema Destinnová / zámek Domousnice odstraněn z 29404; správné přiřazení a související fakt je 29448/fact_002.
- Odstranění provedeno z českého masteru i všech 7 jazykových polí. Ostatní ID a pořadí zachována.

### 4.5 Neplatné mapové kategorie

Opraveno 6 hodnot na platné `historical_monument`:

- 29426/fact_001
- 29427/fact_003
- 29429/fact_005
- 29447/fact_002
- 29473/fact_003
- 29474/fact_003

Původní neplatné hodnoty: `memorial_site` a `historic_monument`. Při původní kontrole nebyly nalezeny neplatné hodnoty `category`.

### 4.6 Doplněné polohy

Doplněno 18 původně chybějících poloh:

- 29307/fact_001, fact_003, fact_004
- 29413/fact_013
- 29423/fact_012
- 29424/fact_002, fact_003
- 29425/fact_002
- 29428/fact_001, fact_006
- 29442/fact_003, fact_005
- 29443/fact_001, fact_002, fact_003, fact_006
- 29445/fact_005
- 29446/fact_005

Počet původních `location:null`: 28. Zbývá **10**.

## 5. Zbývající location:null

### Doložené důvody — předběžně přijatelné výjimky

- 29406/fact_010 — pravěká sídliště zjištěná při stavbě I/16; jde o více archeologických lokalit.
- 29423/fact_002 — pravěké osídlení Čisté zahrnuje více nálezových míst.
- 29423/fact_008 — přesné místo nálezu železného depotu není doloženo.
- 29423/fact_010 — historická cesta již není v terénu jednoznačně sledovatelná a jde o delší trasu.
- 29423/fact_011 — přesná poloha historického koupaliště není spolehlivě určena.
- 29425/fact_001 — archeologické nálezy a pohřebiště bez bezpečně určeného bodu.
- 29448/fact_003 — text pojednává o rozptýlené textilní výrobě; jednotlivé provozy nejsou spolehlivě lokalizovány.

### Ještě prověřit

- 29301/fact_009 — EVL Bezděčín je plošná lokalita; potřebuje oficiální polygon a bezpečný reprezentativní bod.
- 29425/fact_003 — rodný dům Jana Nepomuka Krouského čp. 12; dohledat přesný adresní bod, neumisťovat automaticky na kostel.
- 29428/fact_005 — boží muka na severním okraji Chotětova; dohledat přesný bod u křižovatky.

## 6. Turistická a historická úplnost — zásadní zjištění

Potvrzené nebo silně doložené tematické body:

- Zámek Mnichovo Hradiště a setkání tří panovníků / Svaté aliance v roce 1833 — kandidát je v 29501/fact_001; při sémantické kontrole ověřit, že text explicitně uvádí rok a účastníky.
- Drábské světničky a Valečov — zahrnuty v 29501/fact_002 a fact_003.
- Bedřich Smetana a Jabkenice — prověřit explicitní zastoupení v 29445.
- Laurin & Klement a automobilová historie Mladé Boleslavi — ověřit rozsah a případné duplicity v 29301.
- **Vysoká priorita: bitva u Mnichova Hradiště dne 28. 6. 1866.** 29501/fact_004 na Mužském zmiňuje válku 1866 pouze obecně a památníky v širší krajině; nepopisuje samotnou bitvu. VHU uvádí útok Prusů u Ševčína a Bílé Hlíně, ústup rakousko-saských vojsk přes Jizeru, zapálení mostu u zámku a pokračování boje směrem k Bosni a Valečovu. Doporučení: rozšířit 29501/fact_004 nebo vytvořit samostatný fakt až po vyřešení překladů 29501.
- Další osobnosti narozené v Mladé Boleslavi, které byly doplněny: Eva Bosáková, Adina Mandlová, Jan Železný, František Gellner, Jan Konůpek. Kosmonoský Alois Bubák doplněn do 29306.

Významné zdroje pro další práci:

- Vojenský historický ústav: https://www.vhu.cz/zacatek-valky-roku-1866-na-ceskem-bojisti/
- Město Mnichovo Hradiště, Kamelot 03/2016: https://www.mnhradiste.cz/data/stories/dokumenty/kamelot/2016/03_kamelot_2016.pdf
- Český olympijský tým — Eva Bosáková: https://www.olympijskytym.cz/athlete/eva-vechtova
- Český olympijský tým — Jan Železný: https://www.olympijskytym.cz/athlete/jan-zelezny
- Česká divadelní encyklopedie — Adina Mandlová: https://encyklopedie.idu.cz/index.php?Itemid=297&catid=11&id=4089%3Amandlova-adina&lang=cs&option=com_content&view=article
- Biografický slovník českých zemí — František Gellner: https://biography.hiu.cas.cz/wiki/GELLNER_Franti%C5%A1ek_1881-%3F1914
- Biografický slovník českých zemí — Jan Konůpek: https://biography.hiu.cas.cz/wiki/KON%C5%AEPEK_Jan_1883%E2%80%931950
- Biografický slovník českých zemí — Alois Bubák: https://biography.hiu.cas.cz/wiki/BUB%C3%81K_Alois_1824%E2%80%931870

## 7. Otevřené kontroly — audit není dokončen

1. Kompletní individuální sémantická kontrola de/en/es/fr/it/nl pro všech 327 faktů. Dosud byly plně zpracovány nové položky a opravené texty; zbytek není sémanticky uzavřen.
2. 29501: doplnit překladovou strukturu všech 18 faktů do 7 jazyků; do té doby ponechat `REVIEW REQUIRED` a `placeholder`.
3. Rozšířit historický kontext bitvy 28. 6. 1866 v 29501.
4. Dokončit 3 zbývající geolokační ověření z oddílu 5.
5. Prověřit duplicity názvů, textů a zdrojových URL napříč všemi 40 PSČ.
6. Provést reklamní scan ve všech jazycích.
7. Dokončit kontrolu oficiálních sídel obsluhujících pošt a případné top-level synchronizace administrativních polí.
8. Provést závěrečný strukturální a enum validation read-back všech 40 PSČ.
9. Zkontrolovat a synchronizovat mapové body; dosud nebyla provedena kontrola tabulky mapových bodů.

## 8. Pravidla dokončení

- Neprovádět `data_version=5`, `status=published`, Neon import, backup ani read-only lock bez výslovného navazujícího pokynu uživatele.
- Nezasahovat do existujících platných souřadnic.
- Nepřidávat výplňový obsah; null ponechat, pokud bod nelze spolehlivě doložit.
- Po dokončení každého PSČ zaznamenat stručný checkpoint: počet faktů, 7 jazyků, opravy, validace, nevyřešené výjimky.
- Pokračovat přesně podle `sequence.json`; nevracet se k již uzavřenému PSČ bez konkrétní vady nebo nového důkazu.

**Další krok po obnovení práce:** pokračovat od 29301 — dokončit individuální sémantickou kontrolu všech 7 jazyků pro 16 faktů, poté 29306 (12 faktů), dále sekvenčně. Nezačínat znovu inventuru rozsahu ani opakovat již potvrzené opravy.
