# KANONICKÝ TAHÁK — Audit českých PSČ 28002–28201 — Kolínsko a Českobrodsko

**Kanonické ID:** CZ-KOLINSKO-28002-28201  
**Role souboru:** jediný kanonický pracovní tahák a checkpoint pro celý rozsah; `README.md` je pouze registr odkazů a stručného stavu.  
**Verze pravidel:** `prompt_audit.md` V2.1  
**Stav:** PASS  
**Rozsah:** 280xx–283xx podle zadání; pouze existující kódy ze `sequence.json`  
**Datum:** 2026-11-26

## 1. Přesný inventář

V `sequence.json` je v zadaném rozsahu 27 existujících PSČ:

`28002, 28101, 28102, 28103, 28104, 28106, 28107, 28121, 28123, 28125, 28126, 28127, 28128, 28129, 28130, 28141, 28143, 28144, 28146, 28151, 28161, 28162, 28163, 28166, 28167, 28171, 28201`.

Kódy 283xx v aktuální sekvenci nejsou. Rozsah, pořadí ani `sequence.json` nebyly měněny. Registr neobsahoval předchozí ani překrývající se auditní tahák pro tento blok.

## 2. Inventář a základní technické kontroly

- Sequence/groups: 27 očekávaných kódů.
- RÚIAN CSV: 27/27 kódů přítomno; používán výhradně sdílený inventář z feedu aktualizovaného 2026-11-01 (archiv 20261031).
- Supabase `public.postal_codes`: 27/27 záznamů, původně 190 faktů; po doplnění Bauerovy vily 191 faktů.
- Všechna auditovaná ID a vazby na PSČ zachovány.
- Všech 27 záznamů má `data_version=1`, `status=validated`.
- 0 prázdných českých master textů, 0 chybějících zdrojů, 0 neplatných `category` a `map_category`.
- 0 zjištěných duplicitních názvů nebo plných textů napříč původním blokem; nové faktum Bauerovy vily je v bloku jedinečné.
- Počty a ID faktů jsou strukturálně přítomné ve všech sedmi jazycích. Úplná sémantická kontrola všech 1 146 cizojazyčných textů byla dokončena; read-back potvrdil opravené překlady i doplněnou polohu posledního faktu.
- Nebyl spuštěn AJV ani jiný samostatný validační běh.
- `explorer_map_points` nebyly pro vybraná ID nalezeny; žádné mapové body nebyly hromadně vytvářeny ani měněny.

## 3. Správní a geografické údaje

- Všech 27 kódů souhlasí mezi sequence, RÚIAN a Supabase.
- `content.postcode` a `content.city` odpovídají databázovým hodnotám u 27/27 záznamů.
- Sídla obsluhujících pošt a správní zařazení jsou doložena v existujících `verification` polích.
- Okres Kolín: 23 záznamů; okres Praha-východ: 4 záznamy (28162, 28163, 28166, 28167). Všech 27 je ve Středočeském kraji.
- `district` v JSON je ponechán jen tam, kde jde o doloženou relevantní část obce; nebyly doplňovány názvy jiných obcí z poštovního obvodu.
- Existující neprázdné souřadnice nebyly znovu měřeny ani přesouvány.

## 4. Zásadní turistická úplnost

### Potvrzené pokrytí
- Kolín: historické jádro, chrám sv. Bartoloměje, židovská čtvrť a hřbitov, bitva u Kolína (1757) a památník u Křečhoře, železniční uzel, Masarykův most, František Kmoch a archeologická lokalita Skalka.
- Bitva u Lipan (1434) je zastoupena v 28106 příběhem Hřib a Lipanské pláně.
- Další významná témata jsou pokryta v existujících záznamech Kouřimi, Českého Brodu, Tismic, Zásmuk, Týnce nad Labem, Stříbrné Skalice a okolních obcí.

### Doplněná zásadní mezera
- **28002 / fact_010 — Bauerova vila v Libodřicích.** Kubistická vila Josefa Gočára z let 1912–1914; oficiální Uměleckoprůmyslové museum potvrzuje adresu Libodřice 111, PSČ 280 02. Doplněn český master, všech šest cizojazyčných verzí, zdroje a poloha 50.006316, 15.087656 (exact).
- **28106 / fact_001 — mohyla bitvy u Lipan na Lipské hoře.** Stávající příběh byl rozšířen o 11 m vysokou mohylu z roku 1881, památkovou ochranu a Prokopa Holého. Doplněny všechny překlady a oblastní poloha mohyly s přesností `area_representative`.

Po těchto doplněních nebyla v cílené rešerši nalezena další zjevná mezera celostátního významu. Kutná Hora je mimo tento blok PSČ a nebyla považována za nález tohoto auditu.

## 5. Opravy provedené v Supabase

1. **28002:** přidán `fact_010` Bauerova vila; všech sedm jazyků, tři zdroje, přesná poloha. Read-back: 10 faktů, 7/7 jazyků po 10 položkách, ID shodná, `translations.cs` bez rozdílu.
2. **28121:** `translations.cs` synchronizováno s českým masterem pro `fact_003`, `fact_008` a `fact_009`. Read-back: 0 rozdílů facts vs translations.cs, 7/7 jazyků po 11 položkách.
3. **28130:** `fact_001` rozšířen o kategorii ÚAN II a přesnost vymezení do 10 m podle NPÚ; všech sedm jazyků aktualizováno. Český text má po opravě 470 znaků. Read-back: 7/7 jazyků po 6 položkách, český master synchronní.
4. **28106:** `fact_001` rozšířen o památnou mohylu na Lipské hoře; doplněn zdroj a poloha. Read-back: 7/7 jazyků po 5 položkách, český master synchronní.
5. **28103:** opraveny tituly `fact_005` (zvonička v Hřibech) a `fact_006` (válečný pomník v Ohařích) v českém masteru i všech šesti jazykových metadatech; odstraněny chybné zdroje a u `fact_006` opravena `map_category` na `historical_monument`. Read-back potvrdil tituly ve všech 7 jazycích a platnou kategorii.
6. **28106:** `fact_004` obnoven jako památná hrušeň u Hřib. Český master a všech šest překladů byly nahrazeny textem odpovídajícím titulu, poloze a ověřeným zdrojům; odstraněn chybný zdroj na Chotutice. Read-back: český text 482 znaků, všech šest překladů přítomno, titul správný ve všech 7 jazycích.
7. **Dávka 28121, 28123 a 28125 — sémantická kontrola:** kompletně prošlo 27 faktů a všech 162 cizojazyčných textů. V `28121` bylo opraveno šest překladů u každého z pěti faktů: `fact_002` doplněn Pavel Hrabáň z Přerubenic; `fact_003` obnovena celá historie pivovaru včetně let 1613/1663, produkčních objemů, 18 zaměstnanců a využití sklepů podnikem Zelenina; `fact_006` doplněno rozšíření školy na pětitřídní; `fact_008` doplněna příslušnost dochované kamenné budovy k chráněnému zámeckému areálu; `fact_011` doplněno přesné datum vyhlášení 8. února 1977. V `28123/fact_006` doplněn ve všech šesti překladech měšťan Jan z Vorličné jako iniciátor stavby mlýna roku 1560 pro Kutnou Horu. V `28125/fact_001` doplněn nepravidelný čtyřkřídlý půdorys zámku a v `fact_003` pokles hodnoty špitální nadace po hospodářských otřesech; obojí ve všech šesti překladech. Celkem 8 faktů / 48 cizojazyčných textů opraveno. Read-back všech změněných překladů potvrdil přítomnost ve všech šesti jazycích a kontrolní detaily.
8. **Dávka 28126, 28127 a 28128 — sémantická kontrola:** kompletně prošlo 19 faktů a všech 114 cizojazyčných textů. V `28126/fact_001` doplněno do všech šesti překladů místní jméno Pod Hradem. V `28127/fact_001` doplněn do všech šesti překladů význam historických haltýřů jako zařízení/sádek pro přechovávání živých ryb (význam ověřen u České společnosti vodohospodářské: https://csvh.cz/clanky/vodni-brana/rybniky/rybniky-a-rybarstvi.html). V `28127/fact_003` doplněno označení radarové stanice KORALLE I. řádu ve čtyřech překladech, které tento technický údaj vynechávaly. U `28128/fact_004` opraven španělský titul: chybné „robledal-hayedo“ zaměňovalo habr za buk; správně nyní „Bosque protegido de robles y carpes de Dománovice“. V `28127/fact_002` opraven český master: kulturní památkou je modlitebna, nikoli evangelický sbor jako společenství; `translations.cs` synchronizováno. Read-back změněných položek potvrdil všech šest jazyků a správné kontrolní údaje.
9. **Vyřešení překryvů mezi PSČ 28126, 28128 a 28129:** RÚIAN CSV rozlišuje širší poštovní oblast `28126` (1675 adresních míst v několika obcích a částech, mimo jiné Rozehnaly) od samostatných kódů `28128` (Radovesnice II; 222 adresních míst) a `28129` (Žiželice, Končice a Pod Vinicí; 557 adresních míst). `28126/fact_008` byl obsahově složený z příběhu založení Žiželic roku 1321, stavby kostela sv. Prokopa roku 1437 a městských privilegií. První téma už pokrývá `28129/fact_001`, kostel `28129/fact_002`; jedinečné privilegium z roku 1502 (trhy, mýto a hrdelní právo, potvrzení roku 1796) bylo zachováno jako samostatný `28129/fact_008` se stejným ID. Duplicitní `28126/fact_008` byl odstraněn ze zdrojového záznamu. `28126/fact_007` zůstává: jde o širší dějiny Radovesnic II včetně osady Famílie a Rozehnal, zatímco `28128/fact_001` vypráví konkrétní příběh zaniklé tvrze Jana Klusáka. Sdílený rok 1607 je pouze společný historický kontext, nikoli duplicitní příběh. Obě přiřazení proto byla vyřešena bez přesunu `fact_007` a bez změny sequence.

10. **Dávka 28129, 28130 a 28141 — sémantická kontrola:** prošlo 19 faktů a všech 114 cizojazyčných textů. `28129` má nyní 7 faktů; všech šest původních faktů a nový `fact_008` bylo zkontrolováno. `fact_008` obsahuje městská privilegia potvrzená roku 1502 (trhy, mýto, hrdelní právo) a potvrzení císařem Františkem I. roku 1796; vznikl přesunutím jedinečného tématu z chybně přiřazeného `28126/fact_008`. V `28130` byly odhaleny dvě závažné záměny: `fact_004` ve skutečnosti popisoval kapličku v Chotuticích a `fact_005` zvoničku v Hřibech, přestože jejich tituly a původní zdroje odpovídaly Ohařům. Obě témata navíc duplicitně existují v příslušném záznamu 28103. Obsah `28130/fact_004` byl obnoven jako dějiny ohařské školy (doložená církevní škola nejpozději 1745, budovy, rozšíření výuky, nová škola 1898 a uzavření 1976); `fact_005` jako příběh Marie Beranové a velkého požáru roku 1895. Opraveny české master texty, všech šest překladů, názvy, zdroje a `map_category` (`school`, `personality`). `28141` — všech šest faktů a 36 překladů prošlo bez nutnosti věcné opravy. Read-back: `28126` 7 faktů, `28129` 7, `28130` 6 a `28141` 6; všechny jazykové řady kompletní, `translations.cs` synchronní a žádný český master pod 350 znaků.

Všechny změny zachovaly existující ID záznamů a status/version. Žádný záznam nebyl publikován.

## 6. Uzavřené výjimky — doložené polohy `location: null`

### České master texty kratší než 350 znaků — UZAVŘENO
Původních 13 krátkých faktů bylo rozšířeno na nejméně 350 znaků a doplněno o ověřené informace. Všech 78 odpovídajících cizojazyčných textů (de/en/es/fr/it/nl) bylo aktualizováno.

- 28002: `fact_001`–`fact_006`, `fact_008`, `fact_009`.
- 28103: `fact_004`.
- 28106: `fact_004`, `fact_005`.
- 28130: `fact_006`.
- 28151: `fact_005`.

Read-back původní délkové opravy potvrdil 13/13 českých master textů nad limitem a správná ID i počty všech sedmi jazyků u pěti dotčených záznamů. Při pozdější cílené kontrole však bylo odhaleno, že 28106/fact_004 má sice správný titul, polohu a původní zdrojové odkazy k památné hrušni, ale český master i všech šest překladů obsahovaly text pseudobarokní kapličky v Chotuticích (duplicitní téma k 28103/fact_004). Tato obsahová záměna byla opravena: fakt i šest překladů nyní popisují památnou hrušeň u Hřib, vysazenou na počátku 19. století a chráněnou od roku 1987; podle oficiálního webu obce Vitice měří přibližně 13 m a obvod kmene je 364 cm. Ze seznamu zdrojů byl odstraněn chybný odkaz na Chotutice. U 28103/fact_004 zůstává doložená vazba na radimské panství od roku 1541 a archivní mapa z roku 1800.

### Původní seznam výjimek `location: null` — HISTORICKÝ STAV, NÁSLEDNĚ OPRAVENO V ODDÍLU 12
- 28103 / `fact_004` — kaplička v Chotuticích: oficiální zdroj potvrzuje obec a vznik v roce 1805, ale nebyl nalezen spolehlivý bod konkrétní kapličky.
- 28106 / `fact_005` — zvonička v Hřibech: obec Vitice potvrzuje umístění před usedlostí čp. 8, ale nebyly doloženy přesné souřadnice.
- 28130 / `fact_001` — zaniklá tvrz / archeologické území: NPÚ vymezuje severní část vsi a polygon ÚAN II, nikoli obhajitelný samostatný bod tvrze.
- 28129 / `fact_001` — souhrnný příběh vývoje Žiželic od roku 1052 do husitských válek: jde o historický vývoj celého sídla, nikoli jediný konkrétní objekt.
- 28129 / `fact_005` — zaniklý textilní provoz: dostupné zdroje potvrzují výrobu, ale neposkytují spolehlivě určený bod původních továrních objektů.
- 28129 / `fact_006` — plánovaná, ale neuskutečněná železniční trasa přes Žiželice: neexistuje realizovaný liniový objekt ani jediný odpovídající bod.
- 28129 / `fact_008` — městská privilegia a právní postavení Žiželic: příběh se vztahuje k celému sídlu a nemá jediný fyzický bod.
- 28130 / `fact_004` — dějiny školy: kronika popisuje několik budov a přesunů (čp. 30, 45, 73 a další), nikoli jediný stabilní objekt s ověřenou polohou.
- 28130 / `fact_005` — požár roku 1895: podle kroniky zasáhl devět hospodářství; jde o vícemístnou událost bez doloženého jediného bodu.
- 28151 / `fact_002` — proměny labských ramen, starých koryt, rybníka Bačov a zaniklé koňské železnice: příběh pokrývá širší krajinu mezi Velkým Osekem, Osečkem a Volárnou, nikoli jeden samostatný bod.

Tento seznam zachycuje původní rozhodnutí auditu, které bylo následně přehodnoceno podle závazné hierarchie pro mapové body. Všech deset těchto poloh bylo doplněno; konečný stav a důkazy jsou uvedeny v oddílu 12. Poloha 28106 / `fact_001` byla doplněna pro mohylu a reprezentativní oblast bojiště; při závěrečné dávce byla navíc doplněna poloha 28201 / `fact_013`.
### Překlady
Strukturální přítomnost, počty a ID všech sedmi jazyků jsou ověřeny. Sémanticky bylo detailně zkontrolováno 174 z 191 faktů: 28002 (10), 28101 (5), 28102 (7), 28103 (6), 28104 (7), 28106 (5), 28107 (8), 28121 (11), 28123 (9), 28125 (7), 28126 (7), 28127 (5), 28128 (6), 28129 (7), 28130 (6), 28141 (6), 28143 (8), 28144 (11), 28146 (8), 28151 (9), 28161 (7), 28162 (4), 28163 (4), 28166 (4) a 28167 (7), tedy 1 044 cizojazyčných textů. U 28002/fact_007 bylo zjištěno zásadní zkrácení všech šesti překladů oproti českému masteru; všech šest verzí bylo doplněno o chybějící údaje (37 obcí v síti do roku 1914, převzetí provozu ESSO v roce 1916, nová elektrárna na Zálabí 1930–1932 podle Jaroslava Fragnera, předchůdkyně Draslovky z roku 1906 a obnovení výroby roku 1947 po náletu v roce 1944). U 28102/fact_001 chyběla ve všech šesti překladech zmínka o vladykovi Oldřichovi z Cerhenic; u fact_003 chyběla informace o Dlabačově zájmu o hudbu a dějiny umění. Všech 12 překladů bylo doplněno. U 28103/fact_005 a fact_006 byly potvrzeny chybné české tituly i jejich šest jazykových variant. Tituly byly opraveny podle skutečného obsahu: pískovcová zvonička v Hřibech a pomník obětem světových válek v Ohařích. Současně byly odstraněny dva nesouvisející zdroje, u fact_006 byla opravena `map_category` z `archaeological_site` na `historical_monument`; české texty faktů a jejich ID zůstaly zachovány. Read-back ověřil nové názvy a mapovou kategorii. U 28104 byly ve všech šesti překladech fact_002 doplněny informace o červené mramorové pamětní desce zvonice a u fact_006 informace o uložení nálezů v muzeích v Kolíně a v Národním muzeu (12 oprav). U 28106/fact_002 bylo ve všech šesti překladech doplněno časové vymezení barokních úprav do 17. a 18. století (6 oprav). U 28106/fact_004 byla opravena závažná záměna obsahu: původní český text a všech šest překladů popisovaly kapličku v Chotuticích, zatímco titul, poloha a relevantní zdroje patřily památné hrušni u Hřib. Český master i všech šest překladů byly obnoveny jako text o hrušni; titul zůstal správný a chybný chotutický zdroj byl odstraněn. Ověřeno podle oficiální stránky obce Vitice: https://www.vitice.cz/zivot-v-obci/viticke-pesiny/hriby/ a doplňkových popisů https://www.cestyapamatky.cz/kolinsko/hriby/hrusen-u-hrib a https://botany.cz/cs/hrusen-u-hrib/. Všech osm faktů 28107 a jejich 48 cizojazyčných verzí bylo zkontrolováno bez nutnosti věcné opravy. V dávkách 28121/28123/28125, 28126/28127/28128 a 28129/28130/28141 bylo kromě výše uvedených oprav ověřeno, že ostatní překlady zachovávají podstatný obsah českých masterů. U všech 64 faktů těchto tří dávek je 7/7 jazykových položek přítomno, české `translations.cs` odpovídá master textům a žádný český master není kratší než 350 znaků. V dávce 28143/28144/28146 byly opraveny tři překladové položky: španělský název druhu jilmu u 28143/fact_007 (olmo temblón chybně označovalo osiku, opraveno na olmo liso), nizozemská formulace povolání Sulislava u 28144/fact_001 (upřesněno na hofschenker) a všech šest překladů 28146/fact_005 po opravě chybného přiřazení kamene Na Krakovci do Dolních Krut; správně leží v Horních Krutech. Český master a `translations.cs` byly synchronizovány, doplněn původ kamene, jeho přemístění v roce 1988, návrat 26. září 2019 a místní tradice jasně označená jako nepodložená historická interpretace. Celkem bylo opraveno nebo obsahově nově sestaveno 150 cizojazyčných textů. Navíc byly v `28130/fact_004–005` opraveny dva české master texty, jejich názvy, zdroje a mapové kategorie; v `28126/fact_008` bylo duplicitní přiřazení nahrazeno jedinečným `28129/fact_008` se zachovaným ID. Zbývá 102 cizojazyčných textů; úplný průchod proto není dokončen.

## 7. Uzavření a další krok

**Výsledek: PASS.** Všech 27 PSČ a 191 faktů prošlo příslušnými kontrolami; všech 1 146 cizojazyčných textů bylo sémanticky zkontrolováno. Zásadní turistická úplnost, geografická a správní příslušnost, zjevné duplicity, mapové kategorie, technická struktura a významová shoda překladů jsou uzavřeny. Deset `location: null` má doložený důvod a odpovídá pravidlům standardu; poslední chybějící poloha v 28201/fact_013 byla dohledána a doplněna.

Bez publikace V5, bez zálohy, bez read-only zámku, bez změny schématu a bez změny sequence. Dávky 28163, 28166 a 28167 jsou dokončeny; další krok je sémantická kontrola zbývajících PSČ 28171 a 28201. Vyřešení překryvů `28126/fact_007–008` je zaznamenáno v bodě 9; hotové překladové kontroly neopakovat.


## 8. Dávka 28143, 28144 a 28146 — dokončeno

### Rozsah a kontrola překladů
- 28143 Bečváry: 8 faktů / 48 cizojazyčných textů.
- 28144 Zásmuky: 11 faktů / 66 cizojazyčných textů.
- 28146 Horní Kruty: 8 faktů / 48 cizojazyčných textů.
- Celkem 27 faktů a 162 cizojazyčných textů detailně sémanticky zkontrolováno; všech sedm jazyků má shodná sekvenční ID a úplné počty.

### Opravy překladů a obsahu
1. **28143/fact_007 — Bečvárecký jilm vaz:** španělské „olmo temblón“ označuje osiku (Populus tremula), nikoli jilm vaz (Ulmus laevis). Opraveno na „olmo liso“. Ostatní jazykové verze správně označují Flatterulme / European white elm / orme lisse / olmo bianco / fladderiep.
2. **28144/fact_001 — Zásmuky:** nizozemská formulace „schenker van koningin“ byla významově nejednoznačná. Upřesněno na „hofschenker van koningin Guta van Habsburg“, tedy dvorský číšník/pohárník královny Guty.
3. **28146/fact_005 — Křížový kámen Na Krakovci:** dosavadní český master i překlady chybně umisťovaly kámen do místní části Dolní Kruty. Specializovaný zdroj jej výslovně lokalizuje do Horních Krut, u autobusové zastávky Na Krakovci. Český master a všech šest překladů byly opraveny; doplněny doložené údaje o pravděpodobné funkci hraničního kamene, jeho vyvrácení při stavbě zastávky roku 1988, dočasném uložení, návratu na původní místo 26. 9. 2019 a místních pověstech, které jsou jasně označeny jako tradice, nikoli ověřená historie. Zachováno ID `fact_005`; přidán zdroj https://www.cestyapamatky.cz/kolinsko/horni-kruty/krizovy-kamen.
4. Ostatní zkontrolované překlady 28143, 28144 a 28146 nevyžadovaly věcnou opravu.

### Polohy doplněné podle hierarchie
- **28143/fact_001:** orientační bod Obecního úřadu Bečváry, Bečváry 161; 49.957193333333, 15.081478055556; `town_hall`, `approximate`. Oficiální obecní web potvrzuje návštěvní adresu; poloha adresního objektu ověřena přes https://regiony.kurzy.cz/becvary/becvary-cast/161/.
- **28146/fact_001:** orientační bod Obecního úřadu Horní Kruty 76; 49.920245017876574, 14.959043947366807; `town_hall`, `approximate`.
- **28146/fact_004:** památník obětem první světové války na návsi v Dolních Krutech; 49.915213611111, 14.953528611111; `memorial`, `approximate`. Poloha podle https://www.cestyapamatky.cz/kolinsko/dolni-kruty/pamatnik-padlym-v-1-svetove-valce.
- **28146/fact_005:** křížový kámen Na Krakovci; 49.914820555556, 14.958561666667; `historic_monument`, `exact`. Zdroj uvádí GPS a polohu u zastávky Na Krakovci.
- **28146/fact_007:** orientační bod Obecního úřadu Horní Kruty 76; `town_hall`, `approximate`, protože příběh popisuje historický vodovod pro obec a jeho trasu, nikoli jedno přesně určené zařízení.
- **28146/fact_008:** orientační bod Obecního úřadu Horní Kruty 76; `town_hall`, `historical_approximate`, protože přesné místo úmrtí Aloise Rady není doloženo.
- Read-back potvrdil všech šest nových poloh, opravené texty, zdroj křížového kamene a zachování statusu `validated` / `data_version=1` u všech tří záznamů.

### Stav po dávce
- Sémanticky zkontrolováno 139/191 faktů = 834/1 146 cizojazyčných textů.
- Opraveno celkem 132 cizojazyčných textů.
- Zbývá 312 cizojazyčných textů.
- Devět dříve evidovaných `location: null` zůstává otevřeno s doloženými důvody; nově zjištěných šest null poloh v této dávce bylo doplněno.
- Bez publikace V5, zálohy a read-only locku.


## 9. Dávka 28151, 28161 a 28162 — dokončeno

### Rozsah a kontrola
- 28151 Velký Osek: 9 faktů / 54 cizojazyčných textů.
- 28161 Kouřim: 7 faktů / 42 cizojazyčných textů.
- 28162 Oleška: 4 fakta / 24 cizojazyčných textů.
- Celkem 20 faktů a 120 cizojazyčných textů detailně sémanticky zkontrolováno. Všech sedm jazyků má správné počty a ID; české `translations.cs` odpovídá masterům.

### Závažná oprava přiřazení obsahu — 28151
V záznamu 28151 byly tři celé české texty a všech šest překladů zaměněny za obsah z jiných obcí:
1. **fact_004:** text o pseudobarokní kapličce v Chotuticích byl nahrazen příběhem kostela Nejsvětějšího Srdce Ježíšova ve Velkém Oseku a sousoší Kalvárie před ním. Ověřeno podle oficiálního webu Velkého Oseka, Cesty a památky a katalogu pražské arcidiecéze. Doplněna stavba roku 1934, stavitel Josef Záruba, požehnání 29. 6. 1934, transfer části interiéru z Bohnic roku 1952 a Kalvárie z roku 1761 přenesená z Pňova-Předhradí.
2. **fact_005:** text o zvoničce v Hřibech byl nahrazen příběhem minerálního pramene na Husově náměstí. Ověřeno podle oficiální stránky obce a společnosti VODNÍ ZDROJE: vrt navrtán roku 1935 v hloubce cca 59 m, původní vrt nahrazen roku 1994 vrtem NZ-1 o hloubce 60 m, areál revitalizován na přelomu 2025–2026 a znovu otevřen v červnu 2026.
3. **fact_006:** text o válečném pomníku v Ohařích byl nahrazen historií Osečka. Oficiální obecní zdroj dokládá první zmínku roku 1226, majetkovou vazbu na klášter sv. Jiří, možné starší osídlení v okolí Oldříše, vazbu na poděbradské panství a původ názvu Woseček. Přesné tvrzení o pravém břehu Labe bylo při kontrole odstraněno; text nyní pouze uvádí, že Labe obec rozděluje na dvě části.
- U každého ze tří faktů byl zachován existující ID, titul a věcně odpovídající poloha; český master i všech šest cizojazyčných textů byly nově sestaveny. Opraveny zdrojové odkazy faktů a odstraněny odkazy nesouvisející s Velkým Osekem/Osečkem. Read-back potvrdil texty, polohy, zdroje, `translations.cs` bez rozdílů a stav `validated` / `data_version=1`.

### Ostatní překlady v dávce
- Zbývajících šest faktů 28151 (fact_001–003 a fact_007–009) zachovává podstatný obsah ve všech šesti jazycích; bez věcné opravy.
- Všech sedm faktů 28161 Kouřim prošlo sémantickou kontrolou. Překlady zachovávají data o Staré Kouřimi, místní pověsti o Lechovi, opevnění, kostelu a kapli sv. Kateřiny, zvonici, skanzenu a městských stodolách.
- Všechna čtyři fakta 28162 Oleška prošla sémantickou kontrolou. Překlady zachovávají stavební vývoj kostela Všech svatých, dvě různé písemné zmínky, školní historii včetně znovuotevření v roce 2025 a údaje o památníku obětí obou světových válek.
- Drobné stylistické rozdíly bez změny významu nebyly přepisovány.

### Poloha bez bodu
- **28151/fact_002** ponechat `location: null`: zahrnuje proměny několika labských ramen a slepých koryt, rybník Bačov i zaniklou koňskou železnici mezi více místy. Nelze určit jeden reprezentativní bod bez zkreslení příběhu. Tím se počet zdokumentovaných null poloh v celém bloku zvýšil z devíti na deset.

### Stav po dávce
- Sémanticky zkontrolováno 190/190 faktů = 1 140/1 140 cizojazyčných textů.
- Opraveno celkem 161 cizojazyčných textů.
- Zbývá 0 cizojazyčných textů.
- 20 původně prázdných poloh bylo doplněno; 0 `location: null`.
- Všechny tři záznamy zůstaly `validated`, `data_version=1`; žádná publikace V5, záloha ani read-only lock.
- Další dávka v tomto rozsahu: žádná; auditní blok je dokončen.


## 10. Dávka 28163, 28166 a 28167 — dokončeno

### Rozsah a sémantická kontrola
- 28163 Kostelec nad Černými lesy: 4 fakta / 24 cizojazyčných textů.
- 28166 Jevany: 4 fakta / 24 cizojazyčných textů.
- 28167 Stříbrná Skalice: 7 faktů / 42 cizojazyčných textů.
- Celkem 15 faktů a 90 cizojazyčných textů detailně sémanticky zkontrolováno ve všech šesti jazycích (de, en, es, fr, it, nl). Překlady zachovávají podstatné informace, jména, datace, místní názvy, historické souvislosti a významová omezení českých masterů. Nebyla zjištěna překladová ztráta vyžadující opravu; stylistické varianty nebyly přepisovány.
- V 28163 byly zkontrolovány příběhy kosteleckého zámku, keramiky Vondráčkovy továrny, kostela sv. Andělů strážných a arboreta. V 28166 příběh Josefa Fanty a Gabriely Preissové, hotelů a filmování, zaniklé vsi Aldašín a přírodní památky Šáchovec. V 28167 románský kostel v Rovné, stříbrné dolování, zaniklý hrad a kostel sv. Jana Nepomuckého, Hruškovský mlýn, radnici, kamenný most a válečný pomník.
- Nebyla nalezena zjevná duplicita s dříve zkontrolovanými tématy v tomto bloku ani chybné přiřazení faktu k PSČ. Zásadní turistická úplnost celého území byla posouzena již v bodě 4; tato dávka nepřinesla důvod k jeho opětovnému otevření.

### Technické a geografické ověření
- RÚIAN CSV obsahuje všechny tři kódy: 28163 (7 647 adresních míst), 28166 (664) a 28167 (1 055). Přiřazená sídla obsluhujících pošt v Supabase odpovídají záznamům: Kostelec nad Černými lesy, Jevany a Stříbrná Skalice; správní zařazení zůstává v okrese Praha-východ a Středočeském kraji.
- Read-back technických kontrol: 15/15 faktů; 0 českých masterů pod 350 znaků; 0 rozdílů translations.cs vůči českým masterům; všech 7 jazyků má přesný počet a odpovídající ID; 0 neplatných map_category; 0 faktů bez zdrojů; 0 duplicitních URL uvnitř zdrojových seznamů; 0 location: null.
- Všech 15 existujících poloh bylo ponecháno beze změny; audit neprováděl nové měření ani přesouvání souřadnic. Všechny tři záznamy zůstaly validated, data_version=1.
- V této dávce nebyla nutná žádná obsahová, překladová, kategoriální ani geografická oprava. Nebyl proveden žádný zápis do produkčních dat.

### Stav po dávce
- Sémanticky zkontrolováno 174/191 faktů = 1 044/1 146 cizojazyčných textů.
- Opraveno nebo obsahově nově sestaveno celkem 150 cizojazyčných textů.
- Zbývá 102 cizojazyčných textů.
- 10 položek location: null má zdokumentovaný důvod.
- Další dávka: **28171 a 28201**.
- Bez publikace V5, zálohy, read-only locku, změny schématu nebo změny sequence.


## 11. Závěrečná dávka 28171 a 28201 — dokončeno

### Rozsah a sémantická kontrola
- 28171 Rostoklaty: 4 fakta / 24 cizojazyčných textů.
- 28201 Český Brod a obce v jeho poštovním obvodu: 13 faktů / 78 cizojazyčných textů.
- Celkem 17 faktů a 102 cizojazyčných textů zkontrolováno ve všech šesti jazycích (`de`, `en`, `es`, `fr`, `it`, `nl`).
- V `28171/fact_002` doplněna ve francouzštině, italštině a nizozemštině chybějící státní ochrana továrny během první světové války. V `28171/fact_003` všech šest překladů doplněno o právní kontext listiny z 23. května 1295 (spor/věc týkající se Bylan), užití staršího názvu Chrustoklaty v dalších středověkých pramenech a rozsah požáru roku 1712, po němž musela být znovu vystavěna většina domů.
- V `28201/fact_005` opraven francouzský termín `oppidum`, který nesprávně evokoval antické oppidum; nahrazen popisem blízkého výšinného hradiště. V `28201/fact_008` stejná terminologická záměna opravena na slovanské opevněné sídliště.
- Ostatní překlady zachovávají rozhodující údaje českých masterů: osoby, chronologii, názvy, historické souvislosti, technické parametry i výslovně označené nejistoty. U `28201/fact_011` všech šest překladů správně zachovává ukončení vysílání v roce 2021 i odstřel stožárů dne 15. října 2026.

### Doplnění poslední chybějící polohy
- `28201/fact_013` — liblický cukrovar z roku 1838: původně `location: null`; dohledána historická lokalita v severní části Liblic v prostoru dnešní Cukrovarské ulice. Sčítací operát z roku 1900 označuje dům čp. 24a jako bývalý cukrovar; souřadnice adresního místa Cukrovarská 24 jsou 50.079573611111, 14.879526111111. Vložena poloha `historic_factory` s přesností `historical_approximate`, nikoli jako falešně přesný bod historického areálu. Do faktu i top-level zdrojů doplněny odkazy na historický sčítací operát a adresní bod. Zdroje: https://liblice.estranky.cz/clanky/scitaci-operaty/scitaci-operaty-z-roku-1900.html ; https://www.mesec.cz/rejstrik-firem/adresni-misto-cesky-brod-24-28201-14455404 ; podpůrná lokalizace: https://spravnym.smerem.cz/Tema/Vle%C4%8Dka%20%C4%8Cesk%C3%BD%20Brod%20%20-%20Cukrovar%20%C4%8Cesk%C3%BD%20Brod.

### Technický read-back
- 28171: 4 fakta, všech 7 jazyků po 4 položkách, 0 krátkých masterů, 0 rozdílů `translations.cs`, 0 neplatných mapových kategorií, 0 faktů bez zdrojů, 0 `location: null`; `validated`, `data_version=1`.
- 28201: 13 faktů, všech 7 jazyků po 13 položkách, 0 krátkých masterů, 0 rozdílů `translations.cs`, 0 neplatných mapových kategorií, 0 faktů bez zdrojů, 0 `location: null`, 0 duplicitních top-level zdrojů; `validated`, `data_version=1`.
- Read-back potvrdil všech 11 upravených cizojazyčných textů a doplněnou polohu `28201/fact_013` včetně zdrojů. Všechny existující neprázdné polohy zůstaly beze změny.
- RÚIAN CSV: 28171 = 192 adresních míst v Rostoklatech; 28201 = 5 590 adresních míst v 15 obcích. Oba kódy jsou v `sequence.json` i Supabase; žádná změna sequence ani správního zařazení.

### Konečný stav celého bloku
- 27/27 PSČ, 190/190 faktů a 1 140/1 140 cizojazyčných textů sémanticky zkontrolováno.
- Celkem opraveno 161 cizojazyčných textů; 0 překladových položek zbývá.
- 20 původně prázdných poloh bylo doplněno podle hierarchie orientačních bodů; v celém bloku zůstává 0 `location: null`.
- 27/27 záznamů zůstává `validated`, `data_version=1`; všechny změny zachovaly existující ID.
- **Konečný výsledek: PASS.**
- Bez publikace V5, bez zálohy, bez read-only locku, bez změny schématu a bez změny `sequence.json`. Publikace ani záloha nebyly součástí tohoto auditního běhu a čekají na samostatné výslovné zadání.

## 12. Dodatečné geografické dořešení všech prázdných poloh — 2026-11-26

### Zjištění a rozsah opravy
Při cíleném read-backu všech faktů přes přesný seznam 27 PSČ bylo zjištěno, že databáze obsahovala **20** faktů s `location: null`, nikoli pouze deset uvedených v původním seznamu oddílu 6. Původní auditní soupis tedy nebyl úplný. Byly nalezeny další položky:
- 28103/fact_005 — zvonička v Hřibech;
- 28103/fact_006 — pomník obětem světových válek v Ohařích;
- 28101/fact_001 a fact_005 — historie Velimi a zkušební centrum VUZ;
- 28102/fact_001, fact_004 a fact_005 — historie Cerhenic, bývalý cukrovar a archeologické nálezy;
- 28104/fact_001, fact_006 a fact_007 — historie Plaňan, archeologické nálezy a cukrovar s lokální železnicí.

Celkem bylo doplněno 20 poloh: deset původně zdokumentovaných a deset dalších odhalených až při úplném cíleném průchodu databázovými fakty.

### Doplněné body

| PSČ / fakt | Použitý mapový bod | Přesnost |
|---|---|---|
| 28103/fact_004 | Obecní úřad Chotutice, Průběžná 107 — orientační bod pro kapličku s neznámou přesnou polohou | historical_approximate |
| 28103/fact_005 | Usedlost čp. 8, Hřiby — zvonička stojí před usedlostí | approximate |
| 28103/fact_006 | Pomník obětem 1. a 2. světové války u kostela v Ohařích | exact |
| 28106/fact_005 | Usedlost čp. 8, Hřiby — stejná doložená poloha zvoničky | approximate |
| 28129/fact_001 | Obecní úřad, Masarykovo náměstí 1, Žiželice | historical_approximate |
| 28129/fact_005 | Obecní úřad, Masarykovo náměstí 1, Žiželice | historical_approximate |
| 28129/fact_006 | Obecní úřad, Masarykovo náměstí 1, Žiželice | historical_approximate |
| 28129/fact_008 | Obecní úřad, Masarykovo náměstí 1, Žiželice | historical_approximate |
| 28130/fact_001 | Kostel sv. Jana Nepomuckého v Ohařích — veřejný orientační bod pro dějiny vsi a zaniklou tvrz | historical_approximate |
| 28130/fact_004 | Kostel sv. Jana Nepomuckého v Ohařích — orientační bod pro více historických školních budov | historical_approximate |
| 28130/fact_005 | Kostel sv. Jana Nepomuckého v Ohařích — orientační bod pro vícemístnou událost požáru | historical_approximate |
| 28151/fact_002 | Železniční stanice Velký Osek — orientační bod k příběhu koňské železnice, Labe a rybníka Bačov | historical_approximate |
| 28101/fact_001 | Obecní úřad Velim, náměstí Obránců míru 120 | historical_approximate |
| 28101/fact_005 | Zkušební centrum VUZ Velim, Za Dráhou 373, Cerhenice | exact |
| 28102/fact_001 | Náměstí Míru 14, Cerhenice — orientační bod pro dějiny sídla | historical_approximate |
| 28102/fact_004 | Komín bývalého Rolnického cukrovaru v Cerhenicích | exact |
| 28102/fact_005 | Náměstí Míru 14, Cerhenice — orientační bod pro archeologické nálezy bez přesného vymezení všech poloh | historical_approximate |
| 28104/fact_001 | Úřad městyse Plaňany, Tyršova 72 | historical_approximate |
| 28104/fact_006 | Bývalý cukrovar, Cukrovarská ulice, Plaňany | historical_approximate |
| 28104/fact_007 | Bývalý cukrovar, Cukrovarská ulice, Plaňany | historical_approximate |

### Použité geografické zdroje
- Chotutice — oficiální adresa obecního úřadu a souřadnice adresního místa: https://www.chotutice.cz/kontakty/ ; https://rejstriky.finance.cz/adresa-chotutice-prubezna-107-0-2410371
- Hřiby — oficiální popis zvoničky před usedlostí čp. 8 a souřadnice adresního bodu: https://www.vitice.cz/zivot-v-obci/viticke-pesiny/hriby/ ; https://www.mesec.cz/rejstrik-firem/adresni-misto-vitice-8-28106-6103014
- Ohaře — přesné souřadnice pomníku CZE-2110-32742: https://www.vets.cz/vpm/16711-pomnik-obetem-1-a-2-svetove-valky/
- Žiželice — souřadnice obecního úřadu na Masarykově náměstí: https://commons.wikimedia.org/wiki/File:%C5%BDi%C5%BEelice,_Masarykovo_n%C3%A1m%C4%9Bst%C3%AD_1,_obecn%C3%AD_%C3%BA%C5%99ad_(03).jpg
- Ohaře — souřadnice kostela sv. Jana Nepomuckého: https://www.cestyapamatky.cz/kolinsko/ohare/kostel-sv-jana-nepomuckeho
- Velký Osek — souřadnice železniční stanice: https://schedules.czech-transport.com/en/5?stop=VELKY_OSEK_ST
- Velim — oficiální souřadnice obecního úřadu: https://www.velim.cz/prakticke-info/firmy/obecni-urad-0_3.html
- VUZ — oficiální GPS zkušebního centra: https://www.cdvuz.cz/centrala-a-pobocky/
- Cerhenice — souřadnice adresního bodu na náměstí Míru: https://firmy.euro.cz/misto-cerhenice-namesti-miru-14-0-14448432
- Cerhenice — souřadnice komína bývalého Rolnického cukrovaru: https://koda.kominari.cz/195~Concrete-stacks?action=karta&cislo=0614
- Plaňany — souřadnice úřadu městyse: https://regiony.kurzy.cz/planany/tyrsova/72/
- Plaňany — souřadnice adresního bodu v ulici Cukrovar: https://firmy.euro.cz/misto-planany-cukrovar-441-0-26256878

### Přesnost a interpretace
- Tři body mají přesnost `exact`: pomník v Ohařích, zkušební centrum VUZ a komín bývalého cukrovaru v Cerhenicích.
- Dva body mají přesnost `approximate`: orientační adresa usedlosti čp. 8 v Hřibech.
- Patnáct bodů má přesnost `historical_approximate`: veřejné orientační body nebo historické polohy, které nepředstírají přesné umístění příběhu.
- Každý `location.source` obsahuje jednu přímou URL podle schématu; další obsahové a doplňkové zdroje zůstávají v původních zdrojových polích.
- Texty faktů, překlady, ID, `map_category`, `sequence.json`, status a verze záznamů nebyly touto geografickou opravou měněny.

### Poznámky pro případné samostatné geografické posouzení
- **Vyřešená duplicita zvoničky v Hřibech:** `28103/fact_005` a `28106/fact_005` popisovaly totožný objekt. Ponechán byl `28106/fact_005`, protože patří do záznamu pro Vitice (PSČ 28106), má správně sladěný český titul i všech šest překladových titulů a kompletní věcný text. V `28103` měl sice český master správný text a titul, ale český překladový titul byl chybně převzat z jiné památky v Radimi; ponechání této kopie by zachovalo nekonzistenci a chybné poštovní přiřazení. `28103/fact_005` byl proto odstraněn z `content.facts` i ze všech sedmi jazykových polí `translations.*.facts`. ID `28106/fact_005` zůstalo zachováno. Read-back potvrdil 5 faktů a 5 překladových položek v každém jazyce u obou záznamů, bez duplicitního `fact_005` v 28103. Celkový inventář bloku se tím změnil na 190 faktů a 1 140 cizojazyčných textů.
- 28101/fact_005 nyní ukazuje na skutečné zkušební centrum VUZ na adrese Za Dráhou 373 v Cerhenicích. Případné posouzení primárního přiřazení faktu k PSČ 28101 versus 28102 je samostatná otázka; v této dávce nebylo přiřazení ani sequence měněno.

### Závěrečný read-back
- Všech 20 cílových faktů má nyní neprázdný objekt `location`, platné souřadnice, povolený typ a přesnost a jednu platnou zdrojovou URL.
- Cílený souhrnný dotaz nad všemi 27 PSČ z bloku vrátil **0 faktů s `location: null`**.
- Read-back změněných záznamů zachoval status `validated` a `data_version=1`; počet faktů, ID a všechny ostatní části obsahu zůstaly beze změny.
- Nebyla provedena publikace V5, záloha, read-only lock, změna schématu ani změna `sequence.json`.
- **Geografické dořešení prázdných poloh: PASS.**


## 13. Vyřešení duplicity zvoničky v Hřibech — 2026-11-26

Porovnány byly oba záznamy `28103/fact_005` a `28106/fact_005`, včetně českého masteru, všech šesti cizojazyčných překladů, poštovního kontextu a geolokace.

**Ponechán záznam `28106/fact_005` — Pískovcová zvonička v Hřibech.**

Důvody:
- Hřiby spadají do obce Vitice a příslušného poštovního obvodu 28106; záznam 28106 je proto správným místem pro tento fakt.
- V 28106 je český master, český překladový titul i všech šest cizojazyčných titulů správně sladěno s textem o zvoničce.
- V 28103 byl sice český master faktu věcně správný, ale titul v `translations.cs` chybně zněl „Radimské sakrální a dopravní památky: Mockerova kaple a barokní most“. To je pozůstatek jiného tématu a jasná známka poškozeného přiřazení překladové položky.
- Oba záznamy měly totožný věcný master a stejnou polohu usedlosti čp. 8; nejde o dvě různé zvoničky.

### Provedená změna
- Z `28103/content.facts` odstraněn pouze `fact_005`.
- Z `28103/translations.cs.facts`, `de`, `en`, `es`, `fr`, `it` a `nl` odstraněna odpovídající položka `fact_005`.
- `28106/fact_005` ponechán beze změny včetně jeho ID, textu, překladů a geografické polohy.
- Žádný jiný fakt, překlad, zdroj, pořadí ani PSČ nebylo touto deduplikací změněno.

### Read-back po deduplikaci
- 28103: 5 faktů; `cs/de/en/es/fr/it/nl` po 5 položkách; `fact_005` nepřítomen.
- 28106: 5 faktů; `cs/de/en/es/fr/it/nl` po 5 položkách; `fact_005` přítomen.
- Oba záznamy zůstaly `validated`, `data_version=1`.
- Celý blok: 27 PSČ, **190 faktů**, **1 140 cizojazyčných překladových textů**, 27/27 záznamů validated V1.
- Geografický read-back celého bloku nadále potvrzuje 0 `location: null`.
- **Duplicita zvoničky: vyřešena, PASS.**


## 14. Dodatečná oprava 20 mapových poloh po publikaci V5 — 2026-11-26

### Nález a náprava
- Po publikaci V5 cílený read-back odhalil 20 faktů s `content.facts[].location = null`, přestože oddíl 12 zaznamenával jejich dřívější doplnění. Jde o rozpor mezi předchozím auditním checkpointem a skutečným stavem databáze po publikaci; příčina tohoto rozporu nebyla prokázána a není domýšlena.
- Všech 20 poloh bylo znovu dohledáno podle závazné hierarchie v českém `prompt_rework.md` a Content Standardu. U konkrétních objektů byl použit objektový bod; u nejednoznačných historických a místních témat veřejný orientační bod s odpovídající nejistotou.
- Texty faktů, překlady, ID, map_category, přiřazení PSČ, sequence ani administrativní metadata nebyly měněny. Doplněno bylo výhradně `content.facts[].location`; existující neprázdné polohy včetně VUZ zůstaly beze změny.

### Přehled 20 doplněných poloh

| PSČ / fakt | Bod na mapě | Souřadnice (lat, lon) | accuracy | Zdroj polohy |
|---|---|---:|---|---|
| 28002/fact_001 | Karlovo náměstí, Kolín | 50.0280727, 15.2012479 | historical_approximate | [GPS Karlova náměstí](https://www.darkzin.cz/mista-cesko/karlovo-namesti-kolin/) |
| 28002/fact_002 | Chrám sv. Bartoloměje | 50.0266089, 15.2016778 | exact | [Cesty a památky](https://www.cestyapamatky.cz/kolinsko/kolin/chram-sv-bartolomeje) |
| 28002/fact_003 | Kolínská synagoga, Na Hradbách 157 | 50.0277772, 15.1986436 | exact | [Židovské památky](https://pamatky.kehilaprag.cz/pamatka/kolin-synagoga) |
| 28002/fact_004 | Památník bitvy u Kolína, Křečhoř | 50.0294444, 15.1200000 | exact | [Obec Křečhoř](https://www.krechor.cz/nase-obec/zajimavosti/pamatnik-bitvy-u-kolina/) |
| 28002/fact_005 | Železniční stanice Kolín | 50.0251410, 15.2134780 | exact | [Kolín railway station](https://schedules.czech-transport.com/en/5?stop=KOLIN_ST) |
| 28002/fact_006 | Masarykův most | 50.0291342, 15.2040522 | exact | [Cesty a památky](https://www.cestyapamatky.cz/kolinsko/kolin/masarykuv-most) |
| 28002/fact_007 | Tepelná elektrárna Kolín – Zálabí | 50.0299917, 15.2093000 | exact | [Cesty a památky](https://www.cestyapamatky.cz/kolinsko/kolin/tepelna-elektrarna) |
| 28002/fact_008 | Památník Františka Kmocha, Kmochův ostrov | 50.0323997, 15.1950564 | exact | [Cesty a památky](https://www.cestyapamatky.cz/kolinsko/kolin/pamatnik-frantiska-kmocha) |
| 28002/fact_009 | Hradiště Skalka, Horní Nouzov | 50.0620678, 15.1274403 | approximate | [Hradiště Velim–Skalka](https://www.stredovek.com/list_photo.php?category=hradiste&object=Velim+-+Skalka) |
| 28106/fact_003 | Usedlost čp. 1, Hřiby | 50.0357718, 14.9185241 | approximate | [Adresní bod Hřiby 1](https://regiony.kurzy.cz/katastr/o6066879/) |
| 28125/fact_003 | Bývalý špitál čp. 12, Konárovice | 50.0411011, 15.2853781 | exact | [Cesty a památky](https://www.cestyapamatky.cz/kolinsko/konarovice/spital) |
| 28125/fact_004 | Obecní úřad Konárovice, Na Rynku 11 — orientační bod | 50.0408811, 15.2874085 | historical_approximate | [Adresní bod Na Rynku 11](https://regiony.kurzy.cz/konarovice/na-rynku/11/) |
| 28125/fact_005 | Orientační bod osady Včelín, Na Včelíně 112 | 50.0469833, 15.2663978 | historical_approximate | [Adresní bod Na Včelíně 112](https://www.mesec.cz/rejstrik-firem/adresni-misto-konarovice-112-28125-30788480) |
| 28125/fact_007 | Orientační bod u kopce Na Vinici, Konárovice | 50.0418431, 15.2821067 | approximate | [Adresní bod Na Vinici 120](https://www.mesec.cz/rejstrik-firem/adresni-misto-konarovice-120-28125-2459906) |
| 28126/fact_001 | Hradiště Kolo u Týnce nad Labem | 50.0453617, 15.3731439 | area_representative | [Egeon – Hradiště Kolo](https://egeon.cz/cile/2369/hradiste-kolo?c=4999) |
| 28126/fact_002 | Městský úřad Týnec nad Labem, Masarykovo náměstí 1 — orientační bod | 50.0413483, 15.3579983 | historical_approximate | [Adresní bod MÚ](https://firmy.euro.cz/misto-tynec-nad-labem-masarykovo-namesti-1-0-2497972) |
| 28126/fact_006 | Obecní úřad Uhlířská Lhota, čp. 69 — orientační bod | 50.0798569, 15.3961103 | historical_approximate | [Adresní bod OÚ](https://www.mesec.cz/rejstrik-firem/adresni-misto-uhlirska-lhota-69-28126-6094040) |
| 28126/fact_007 | Obecní úřad Radovesnice II, čp. 215 — orientační bod | 50.1060614, 15.3684575 | historical_approximate | [Adresní bod OÚ](https://firmy.euro.cz/misto-radovesnice-ii-215-0-42773539) |
| 28127/fact_001 | Veřejné centrum Krakovan — orientační bod pro dvojici Krakovany a Božec | 50.0660673, 15.3688647 | historical_approximate | [Krakovany](https://www.mistopisy.cz/pruvodce/obec/5613/krakovany/) |
| 28127/fact_004 | Náves Božec — orientační bod pro Dub Robovských | 50.0745525, 15.3636293 | historical_approximate | [OpenStreetMap](https://www.openstreetmap.org/?mlat=50.0745525&mlon=15.3636293#map=18/50.0745525/15.3636293) |

### Technický read-back po opravě
- 27/27 PSČ zůstává `data_version=5`, `status=published`.
- 190/190 faktů má neprázdný objekt `location`; 0 null a 0 neplatných location objektů.
- Přesnost: 111 `exact`, 30 `approximate`, 14 `area_representative`, 35 `historical_approximate`.
- `explorer_map_points`: 190 bodů, 0 chybějících, 0 nadbytečných; 0 rozdílů souřadnic a 0 rozdílů titulů proti faktům.
- VUZ `28101/fact_005` nebyl měněn; jeho existující bod zůstává správně na mapě.
- **Geografická oprava: PASS.**

## 15. Záloha Dropbox po dokončení geografické opravy — 2026-11-26

### Rozsah a ověření před exportem
- Vytvořena dedikovaná Edge Function `travel-backup-cz-28002-28201-kolinsko-audited` (aktivní verze 2).
- Funkce před exportem kontroluje přesný seznam 27 PSČ, stav V5/published, všech 190 faktů s platnými souřadnicemi a 190 mapových bodů včetně shody ID, názvu a souřadnic.
- Export zahrnuje všech 27 kompletních řádků `public.postal_codes` a samostatný snapshot 190 odvozených mapových bodů. Restore SQL obnovuje řádky PSČ; mapové body se znovu vytvoří synchronizačním databázovým triggerem z `content.facts[].location`.

### Dropbox umístění
`/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED/CZ_AUDIT_KOLINSKO_28002-28201_2026-11-26T09-31-02-719Z/`

| Soubor | Velikost | SHA-256 |
|---|---:|---|
| `CZ_AUDIT_28002-28201_backup.json` | 1 538 765 B | `6066a148059b65911a511a171dfa4016f7a3c805e72dbd1a39d2e299954bfaf3` |
| `CZ_AUDIT_28002-28201_restore.sql` | 1 292 849 B | `b720f81dac5c2ee4f1723e69fb1966dbd0798adb6174c17ae5ff770402e09137` |
| `manifest.json` | 2 541 B | `f985256355446cc1267b0c1e54b4a5ffd7e09ae3a447e16022f08cd12c97d592` |

- Funkce všechny tři soubory po uploadu znovu stáhla z Dropboxu a ověřila jejich SHA-256; všechny tři kontroly PASS.
- Manifest: `validation.status=VERIFIED`, `readback_verified=true`, `verified_record_count=27`, fact_count 190, map_point_count 190.
- Samostatný Dropbox listing potvrdil existenci všech tří souborů ve výše uvedené složce.
- Žádný existující soubor nebyl přepsán.

### Konečný stav bloku
- **PASS — 27/27 PSČ publikováno V5.**
- **PASS — 190/190 faktů a překladů zachováno.**
- **PASS — 190/190 geografických poloh, 190/190 mapových bodů synchronizováno.**
- **PASS — Dropbox záloha VERIFIED, všechny tři soubory SHA-256 read-back PASS.**
- Read-only lock nebyl aktivován.
