# TRAVEL — MASTER PROMPT PRO TVORBU NOVÝCH NĚMECKÝCH PSČ

## 1. ÚČEL

Tento soubor je hlavní výrobní zadání pro tvorbu NOVÝCH záznamů německých poštovních směrovacích čísel (PLZ/PSČ) projektu TRAVEL.

Cílem není vyrábět pouze technicky platné JSONy.

Cílem je vytvářet **vědomostně bohaté, důkladně prozkoumané, překvapivé, ověřitelné a redakčně kvalitní záznamy**, které mohou samy o sobě fungovat jako hodnotná znalostní databáze místa.

Každý vytvořený JSON musí kvalitativně odpovídat nejlepším existujícím vzorovým záznamům projektu, nikoli pouze minimálním požadavkům schématu.

Tento prompt platí společně s:

- `data/germany/schema.json`
- `data/germany/CONTENT_STANDARD.md`
- `data/germany/sequence.json`

**Schema určuje technickou strukturu.**
**CONTENT_STANDARD určuje obsahovou a redakční kvalitu.**
**sequence.json určuje výrobní posloupnost.**
Tento prompt určuje, jak má být celý proces proveden.

Neměň `schema.json` ani `CONTENT_STANDARD.md`, pokud k tomu není výslovný samostatný pokyn.

---

# 2. ZÁKLADNÍ PRAVIDLO

Nikdy nevytvářej JSON pouze proto, aby byl formálně správný.

Výsledkem musí být:

> **maximum důvěryhodných, významných a překvapivých informací bez balastu.**

Každý záznam musí odpovědět nejen na otázku:

> „Co zde je?“

ale především:

> „Proč je toto místo zajímavé, čím je výjimečné a co by o něm běžný člověk pravděpodobně nevěděl?“

Ideální výsledek vyvolá reakci:

> „Tohle místo znám, ale tohle jsem o něm nevěděl.“

A zároveň:

> „Ověřil jsem zdroj a opravdu to tak je.“

---

# 3. AUTORITATIVNÍ PRAVIDLA

Před každou výrobou načti a respektuj:

1. `data/germany/schema.json`
2. `data/germany/CONTENT_STANDARD.md`
3. `data/germany/sequence.json`

Pokud se obsah tohoto promptu dostane do rozporu se `schema.json` nebo `CONTENT_STANDARD.md`, mají tyto soubory přednost.

Nikdy nevymýšlej vlastní pole, kategorie, priority nebo strukturu JSONu mimo aktuální schema.

---

# 4. VÝBĚR PSČ A SEQUENCE

Pracuj pouze se skutečnými německými PSČ.

Nikdy nepředpokládej, že každá číselná hodnota v určité řadě existuje.

Postup:

1. načti aktuální `sequence.json`;
2. určuj další PSČ podle jeho skutečné posloupnosti;
3. ověř, že PSČ skutečně existuje;
4. zkontroluj databázi;
5. pokud už existuje kompletní záznam, nevytvářej duplicitu;
6. pokud je nové, zpracuj ho;
7. po úspěšném vytvoření a validaci zapiš PSČ do `sequence.json` na správné místo;
8. aktualizuj také odpovídající `count`;
9. zachovej pořadí sequence.

**Nikdy nezapisuj PSČ do sequence dříve, než je jeho JSON úspěšně vytvořen a ověřen.**

Pokud skutečné PSČ v sequence chybí, nevyplňuj mezeru vymyšleným číslem.

Sequence musí obsahovat pouze skutečná PSČ určená pro produkci TRAVEL.

---

# 5. KONTROLA DATABÁZE

Před vytvořením každého nového záznamu zkontroluj existenci přesného PSČ v:

`public.postal_codes`

pro:

`country_code = "DE"`

Nikdy nevytvářej duplicitu.

Nikdy nepřepisuj hotový záznam jen proto, že je jednodušší ho vytvořit znovu.

Pokud databáze obsahuje neúplný nebo problémový záznam, nejprve ho vyhodnoť podle aktuálního workflow. Tento prompt je určen primárně pro NOVÉ záznamy, nikoli pro rework existujících záznamů.

---

# 6. VÝZKUM KAŽDÉHO PSČ

Každé PSČ musí být prozkoumáno individuálně.

Nikdy nevytvářej záznam tak, že pouze změníš:

- číslo PSČ;
- název města;
- souřadnice;
- okres;
- několik slov v existujícím JSONu.

Každé místo má vlastní historii, geografii, kulturní význam a okolí.

Pro každé PSČ zjisti a ověř:

- skutečné PSČ;
- město nebo obec;
- městskou část / Ortsteil, pokud je relevantní;
- okres / district;
- county / správní celek podle schématu;
- spolkovou zemi;
- reprezentativní místo;
- reprezentativní bod;
- vhodný access point;
- významné historické skutečnosti;
- významné památky;
- přírodu a krajinu;
- relevantní okolí;
- průmyslové, technické nebo dopravní dědictví;
- významné osobnosti;
- kulturní význam;
- lokální příběhy;
- skutečné hidden gems;
- důvěryhodné zdroje.

---

# 7. HLOUBKA VÝZKUMU

Výzkum nesmí skončit u prvního výsledku vyhledávání.

Nejdříve zjisti základní identitu místa.

Poté hledej jeho skutečný příběh.

Aktivně zkoumej:

### Historie
- vznik osídlení;
- důvod jeho polohy;
- historické události;
- středověký vývoj;
- městský nebo regionální rozvoj;
- války;
- změny hranic;
- významná období;
- poválečný vývoj.

### Dědictví
- významné památky;
- archeologické lokality;
- historické stavby;
- sakrální stavby;
- zámky, hrady a tvrze;
- městská struktura;
- historické technické objekty.

### Příroda
- národní parky;
- přírodní parky;
- chráněná území;
- přírodní rezervace;
- přírodní památky;
- řeky;
- jezera;
- mokřady;
- lesy;
- hory;
- údolí;
- skály;
- jeskyně;
- geologické útvary;
- výjimečné přírodní prvky.

Přírodu nikdy nepoužívej jako výplň.

Pokud je významná, vysvětli **proč**.

### Kultura a průmysl
- tradiční řemesla;
- těžba;
- výroba;
- průmyslové dědictví;
- porcelán;
- textil;
- sklářství;
- hornictví;
- energetika;
- technické památky;
- železnice;
- významné dopravní trasy;
- kulturní instituce.

### Lidé
Hledej pouze osobnosti se skutečně významnou vazbou k místu.

Nestačí, že zde někdo jednou přespal nebo krátce pobýval.

### Okolí
Přidej významné místo mimo přesnou hranici PSČ pouze tehdy, když existuje skutečná geografická nebo tematická vazba.

---

# 8. PRINCIP „PROČ PRÁVĚ TADY“

Kdekoliv je to možné, vysvětli důvod vzniku nebo významu místa.

Hledej souvislosti jako:

- říční přechod;
- obchodní cesta;
- křižovatka cest;
- hranice;
- strategická poloha;
- těžba;
- průmysl;
- zemědělství;
- železnice;
- přístav;
- lázeňství;
- náboženství;
- vojenská poloha;
- přírodní podmínky;
- turistický význam.

Nejde o seznam dat.

Jde o pochopení místa.

---

# 9. FAKTA — REDAKČNÍ KVALITA

Každý fakt musí projít testem:

1. Je pravdivý?
2. Je ověřitelný?
3. Je skutečně spojený s místem?
4. Je zajímavý?
5. Přináší konkrétní informaci?
6. Není generický?
7. Není pouze přeformulovaným turistickým sloganem?
8. Má dostatečně silný zdroj?
9. Má pro uživatele skutečnou hodnotu?
10. Pomáhá pochopit místo?

Pokud ne, fakt nepřidávej.

---

# 10. ŽÁDNÝ UMĚLÝ POČET FAKTŮ

Nikdy neplatí:

> „Každé PSČ musí mít například 9 faktů.“

Počet musí odpovídat skutečnému významu místa.

Malé místo může mít 3 vynikající fakta.

Mimořádně významné místo může mít 10, 15 nebo více kvalitních faktů.

Nikdy nepřidávej slabé informace jen proto, aby JSON vypadal bohatší.

**Raději 6 skvělých faktů než 15 průměrných.**

---

# 11. SKLÁDÁNÍ PŘÍBĚHU

Fakta nemají být náhodnou sbírkou turistických zajímavostí.

Pokud je to vhodné, vytvoř logickou strukturu:

**místo → krajina → vznik → historie → kultura/průmysl → významné osobnosti → dědictví → okolí → hidden gems**

Fakta se mohou tematicky doplňovat.

Nesmí však být redundantní.

Dvě fakta, která říkají prakticky totéž, spoj do jednoho silnějšího faktu.

---

# 12. HIDDEN GEMS

Hidden gem je jeden z nejdůležitějších prvků kvality TRAVEL.

Hledej věci typu:

- archeologická stopa ukrytá pod známou stavbou;
- nečekaný historický detail;
- málo známý průmyslový příběh;
- vzácně dochovaný objekt;
- překvapivá přírodní zvláštnost;
- méně známá vazba na významnou osobnost;
- místní událost s širším významem;
- skutečnost, která zásadně mění pohled na známé místo.

Hidden gem musí být:

- konkrétní;
- ověřitelný;
- relevantní;
- geograficky správný;
- skutečně překvapivý nebo výjimečný.

„V obci stojí starý kostel“ není hidden gem.

„Pod dnešní stavbou se zachovaly archeologické pozůstatky původního opevnění“ hidden gem být může.

Používej kategorii `hidden_gem` a prioritu podle skutečného významu.

Díky aktuálnímu CONTENT_STANDARD může výjimečný hidden gem získat **Priority B**.

---

# 13. PRIORITY

Používej pouze priority definované aktuálním CONTENT_STANDARD:

- **A** — výjimečný význam;
- **B** — výjimečný hidden gem;
- **C** — silný regionální význam;
- **D** — lokální význam.

Priority nejsou dekorace.

Nedávej A všemu.

Nedělej umělou rovnováhu A/B/C/D.

Priority musí vyjadřovat skutečnou významnost faktu v kontextu daného místa.

---

# 14. ZDROJE

Preferuj v tomto pořadí:

1. oficiální zdroje;
2. primární zdroje;
3. archivy;
4. muzea;
5. univerzity;
6. odborné instituce;
7. kvalitní média;
8. spolehlivé regionální zdroje.

Slabé SEO weby používej pouze tehdy, pokud neexistuje lepší zdroj.

Nikdy:

- nevymýšlej zdroje;
- nevymýšlej URL;
- nepoužívej neověřené tvrzení;
- nepovažuj několik kopií stejného tvrzení za několik nezávislých zdrojů.

Jeden výborný primární zdroj je lepší než šest slabých webů.

Každý významný fakt musí být dohledatelný ke zdroji.

---

# 15. STRUKTURA FAKTU

Každý fakt musí odpovídat aktuálnímu schema:

```json
{
  "id": "fact_001",
  "title": "...",
  "text": "...",
  "category": "...",
  "priority": "A",
  "sources": ["..."]
}
```

ID musí být sekvenční:

`fact_001`, `fact_002`, `fact_003` ...

Stejné ID musí označovat stejný fakt ve všech šesti jazycích.

---

# 16. ŠEST JAZYKŮ

Každý záznam musí obsahovat:

- `cs`
- `de`
- `en`
- `es`
- `fr`
- `it`

Každý jazyk musí mít:

- `representative_place`;
- všechny fakta.

Každý překlad faktu musí mít:

- stejné `id`;
- `title`;
- `text`.

Překlady nesmí být mechanicky zkrácené.

Musí zachovat:

- význam;
- konkrétní fakta;
- data;
- jména;
- vztahy mezi událostmi;
- význam zdělení.

Jazyk musí působit přirozeně pro rodilého čtenáře.

---

# 17. TECHNICKÁ VALIDITA JSON

Před uložením musí být JSON validní proti aktuálnímu:

`data/germany/schema.json`

Zkontroluj minimálně:

- povinná pole;
- přesný formát PSČ;
- datové typy;
- souřadnice;
- povolené kategorie;
- povolené priority;
- fact ID;
- source strukturu;
- šest jazyků;
- shodu fact ID mezi jazyky;
- žádná nepovolená pole.

**Nepoužívej pole, která schema nepovoluje.**

Pokud schema vyžaduje konkrétní strukturu, schema má přednost před starším vzorem JSONu.

---

# 18. GEOGRAFICKÁ KONTROLA

Reprezentativní bod musí skutečně reprezentovat dané místo.

Access point musí být zvolen rozumně pro geografickou reprezentaci/virtuální příjezd podle pravidel projektu.

Ověř:

- že souřadnice leží v relevantním území;
- že nedošlo k záměně města;
- že nejde o střed sousedního místa;
- že representative point a access point nejsou zaměněny.

Pokud je geografický údaj nejistý, nehádej.

---

# 19. FOTOGRAFIE

Pole `photo` musí odpovídat aktuálnímu schématu.

Pokud není ověřená fotografie vhodná pro uložení, použij hodnotu povolenou aktuálním schematem, typicky `null`.

Nevymýšlej autora, licenci ani URL.

---

# 20. DATABASE ZÁPIS

Po dokončení výzkumu vytvoř kompletní záznam v:

`public.postal_codes`

s:

`country_code = "DE"`

Zapiš:

- správné PSČ;
- správná metadata;
- kompletní JSON do příslušného `content`;
- zdroje podle aktuální struktury databáze;
- aktuální `data_version`;
- správný status podle existujícího workflow.

Nikdy neukládej nekompletní JSON jen proto, aby záznam existoval.

---

# 21. SEQUENCE — POVINNÝ KROK PO ÚSPĚŠNÉM ZÁPISU

Po úspěšném zápisu a ověření databázového záznamu musí být PSČ zapsáno také do:

`data/germany/sequence.json`

Pravidla:

1. PSČ musí být skutečné;
2. musí být zpracované;
3. databázový záznam musí existovat;
4. JSON musí být validní;
5. PSČ musí být vloženo na správné místo v pořadí;
6. nesmí vzniknout duplicita;
7. aktualizuj `count`;
8. zachovej ostatní položky beze změny.

**Sequence nikdy nesmí tvrdit, že bylo PSČ zpracováno, pokud jeho JSON nebyl skutečně úspěšně vytvořen a ověřen.**

---

# 22. FINÁLNÍ REDAKČNÍ AUDIT

Před každým uložením proveď samostatnou redakční kontrolu.

Ptej se:

### Obsah
- Je záznam opravdu vědomostně bohatý?
- Obsahuje historii, pokud je relevantní?
- Obsahuje přírodu, pokud je relevantní?
- Obsahuje významné dědictví?
- Obsahuje okolí, pokud má skutečnou vazbu?
- Hledal jsem hidden gem?
- Nezůstala mi důležitá známá skutečnost mimo záznam?

### Kvalita
- Je každý fakt konkrétní?
- Je každý fakt zajímavý?
- Je každý fakt ověřitelný?
- Neobsahuje text balast?
- Neopakují se fakta?
- Nejsou priority přehnané?
- Jsou hidden gems opravdu hidden gems?

### Zdroje
- Je každý důležitý claim dohledatelný?
- Jsou použity co nejsilnější dostupné zdroje?
- Nejsou URL vymyšlené?

### Překlady
- Existuje všech šest jazyků?
- Mají všechny stejné fact ID?
- Nechybí žádný fakt?
- Jsou překlady významově úplné a přirozené?

### Technika
- Projde JSON schema?
- Jsou souřadnice správné?
- Nejsou žádná nepovolená pole?
- Neexistuje duplicita v databázi?

Pokud odpověď na některou z důležitých otázek zní NE, záznam ještě není hotový.

---

# 23. ZÁKAZ „DOBRÉHO DOST“

Neakceptuj první použitelnou verzi.

Pokud výzkum odhalí lepší zdroj, lepší fakt nebo zajímavější souvislost, použij ji.

Pokud je text příliš obecný, přepiš ho.

Pokud je hidden gem slabý, vyřaď ho a hledej lepší.

Pokud je fakt pouze turistická fráze, nahraď ho konkrétní informací.

Pokud místo skutečně nemá více kvalitních faktů, nepřidávej balast.

**Výsledkem musí být nejlepší dostupná verze, ne první verze, která projde schematem.**

---

# 24. AUTONOMNÍ PROVOZ

Po spuštění pracuj samostatně:

**najdi další PSČ → ověř → prozkoumej → napiš fakta → najdi zdroje → vytvoř JSON → přelož → validuj → zapiš do databáze → ověř zápis → zapiš do sequence → pokračuj**

Nezastavuj po každém PSČ kvůli otázce:

- „Mám pokračovat?“
- „Chceš další?“
- „Mám to uložit?“
- „Je to takhle dobré?“

Pokud není skutečný systémový problém, pokračuj autonomně.

---

# 25. CHYBY

Pokud nelze jedno PSČ dokončit:

1. nevytvářej neúplný záznam;
2. nezapisuj ho do sequence;
3. zaznamenej důvod;
4. pokračuj dalším PSČ, pokud problém není systémový.

Jedno problematické PSČ nesmí bezdůvodně zastavit celou dávku.

---

# 26. RESUMOVATELNOST

Každé spuštění musí bezpečně navázat tam, kde předchozí skončilo.

Na začátku:

1. načti sequence;
2. zjisti aktuální pozici;
3. zkontroluj databázi;
4. zjisti již vytvořené záznamy;
5. pokračuj dalším vhodným skutečným PSČ.

Nikdy zbytečně nezačínej znovu od začátku.

---

# 27. BEZPEČNOST

Nikdy:

- nemaž existující záznamy;
- nemaž databázovou tabulku;
- nepřepisuj hotové záznamy bez důvodu;
- neměň schema;
- neměň CONTENT_STANDARD;
- neměň aplikační kód;
- neměň RLS bez výslovného pokynu;
- nevytvářej duplicity;
- neukládej service-role klíče;
- neměň Supabase projekt.

Tento prompt má oprávnění pouze k produkci nových dat a aktualizaci příslušné sequence podle výše uvedených pravidel.

---

# 28. PRIORITA KVALITY

Pokud je konflikt mezi:

**rychlostí × množstvím × kvalitou**

vždy vyhrává:

**KVALITA.**

Je lepší vytvořit jeden mimořádně kvalitní záznam než deset slabých.

Každý záznam má být schopen obstát jako samostatná znalostní jednotka TRAVEL.

---

# 29. VÝSTUP PO DOKONČENÍ DÁVKY

Po dokončení dávky uveď stručně:

- zpracovaná PSČ;
- úspěšně vytvořená PSČ;
- přeskočená PSČ;
- neúspěšná PSČ;
- důvody případných chyb;
- poslední zpracované PSČ;
- další PSČ v sequence.

Nevypisuj zbytečně celý JSON, pokud o něj není požádáno.

---

# 30. FINÁLNÍ DEFINICE HOTOVÉHO ZÁZNAMU

Záznam je HOTOVÝ pouze tehdy, když současně platí:

1. PSČ je skutečné;
2. nebyla vytvořena duplicita;
3. místo bylo individuálně prozkoumáno;
4. fakta jsou konkrétní a významná;
5. obsah odpovídá CONTENT_STANDARD;
6. byly aktivně hledány hidden gems;
7. příroda a okolí byly posouzeny;
8. zdroje jsou důvěryhodné;
9. všechna tvrzení jsou ověřitelná;
10. JSON odpovídá schema.json;
11. existuje všech šest jazyků;
12. překlady odpovídají faktům;
13. souřadnice jsou ověřené;
14. záznam byl úspěšně uložen do databáze;
15. PSČ bylo následně správně zapsáno do sequence.json.

**Teprve potom pokračuj na další PSČ.**

---

## HLAVNÍ VÝROBNÍ PRINCIP

TRAVEL nemá být databáze, která pouze ví, **kde co je**.

TRAVEL má být databáze, která umí vysvětlit:

**co tam je → proč to tam je → proč je to důležité → co je na tom překvapivé → co o tom stojí za to vědět → a odkud to víme.**

Každý nový německý postcode JSON musí být vytvořen právě tímto způsobem.
