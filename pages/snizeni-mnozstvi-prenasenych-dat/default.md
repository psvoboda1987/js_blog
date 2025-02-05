---
Snížení množství přenášených dat
---

Všichni máme rádi rychlost, zejména když jde o techniku. Způsobů jak dosáhnout je několik.
<br>
Čím méně dat se do webové stránky přenáší, tím má lepší odezvu a čas potřebný k načtení se zkracuje.
<br>
Jak se dá snadno a rychle optimalizovat množství dat potřebných k chodu stránky nebo aplikace?
<br>
Velcí hráči jako je Google a Amazon vsází na rychlost a spolehlivost oproti krásnému designu. Pokud nejste zaměřeni na design (architekti, fotografové, grafici) možná vaše stránky mohou být jednodušší. Méně je někdy více.
## Eliminace
Jednoduše odstraňte vše, co není potřebné k načtení. Množství dat se ihned zmenší a rychlost rázem poskočí minimálně o stupeň.
<br>
Může to být font, který je sice hezký, ale ne tak důležitý, jako bleskově reagující stránka / aplikace. Nebo knihovna, která animuje prvky na stránce. Při první návštěvě to udělá dobrý dojem, ale časem se to člověku ohraje a přestane si toho všímat.
<br>
Pozornost návštěvníka by měla být zaměřena na dosažení jeho cíle (domluvení schůzky, rezervace nebo koupě produktu, registrování se...)
## Zpoždění
Pokud zdroj chcete přece jen načíst, můžete tento proces odložit. Zejména načítání velkých zdrojů dat jako jsou obrázky, audio a video záznamy, které jsou navíc až pod hlavní obrazovkou se vyplatí zpozdit.
## Transformace
Místo velkého bitmapového obrázku (.jpg, .png), kde velikost souboru záleží na velikosti jeho rozlišení můžete použít **vektor** (.svg), který je datově nenáročný v jakémkoli rozlišení.
<br>
Pokud přece jen potřebujete bitmapy, vyplatí se určitě je alespoň optimalizovat.
## Optimalizace
Na internetu tradičně nepotřebujete a většinou ani nechcete dávat své obrázky v tiskové kvalitě. Optimalizovat se dá několika způsoby. Váš grafik nebo vývojář by měl vědět, která bije. Nejjednodušší způsoby, kterými můžete dosáhnout snížení velikosti obrázků obvykle zahrnují:
* Volba správného formátu
* Zmenšení rozlišení
* Komprese
* Snížení barevné hloubky
* Snížení počtu obrázků na stránce (princip eliminace)

## Delegace
Zdroje, které načítáte můžete delegovat na speciálně nastavené serverové služby, zkráceně známé jako **CDN** (Content Delivery Network) - tedy síť pro doručování obsahu. Sem můžete zahrnout JavaScriptové frameworky a knihovny.
<br>
Další způsob využití delegace je zobrazení náhledu obrázku (**thumbnail**) v minimální velikosti a větší verzi zobrazit až po kliknutí na miniaturu.
## Kešování
Zdroje, které načítáte často je dobré tzv. zakešovat. Tedy uložit na uživatelův přístroj a načítat je jen tehdy, pokud se jejich obsah změní.
<br>
Typicky se kešují loga, obsah v hlavičce a patičce atd. Kešovat se dají například i **výsledky častého hledání**, např. top 5 nejprodávanějších nebo nejlevnějších produktů.
## Líné načtení
Načtení se dá odložit i tzv. líným způsobem. V praxi to znamená, že se zdroje, které nejsou potřeba ihned, jakmile uživatel přijde na stránku načtou až potřeba budou.
<br>
Příkladem jsou obrázky v dolní části stránky, nebo načtení doporučených článků na konci stránky. Načtení lze spustit například tím, že uživatel ke zdroji doskroluje.
<br>
Mnoho uživatelů na stránku jen vstoupí, ale stránku ani nepročtou, nepodívají se na konec. Nemá tedy smysl na každé načtení posílat všechny zdroje, když je využije jen část uživatelů.
## Stránkování
Svým způsobem je klasické stránkování dobrou metodou, jak snížit počet načtených dat. Často užívanou je zejména na stránkách s velkým počtem článků (blog, novinky) nebo produktů (e-shop). Na každou stránku se tak dostane jen např. 10 článků nebo 20 produktů. Rychlost reakce a zatížení serveru i při velkém množství uživatelů je pro server zvladatelné.
<br>
Stránkování lze použít i např. na **vícekrokovém formuláři**, který má hodně políček. Zamezíte tak tomu, aby uživatel dlouho něco vyplňoval a pak mu validátor řekl, že požadované uživatelské jméno není dostupné apod. Nebo aby při pohledu na to, kolik věcí musí vyplnit neodešel s úlekem rovnou.
## Asynchronní načtení
Načtení velkého obsahu, který by jinak zpomalil celkové načtení stránky a doby, kdy s ní může uživatel pracovat se dá provést asynchronně, tedy v pozadí. Jakmile je obsah k dispozici, zobrazí se.
<br>
Tímto způsobem se navíc nemusí načítat ani zakešovaný obsah hlavičky a patičky. Načítají se tak jen ty data, která se opravdu mění (text článku, produkty na stránce).
## Rozdělení
Někdy stačí prostě dělat stránky kratší a jednodušší. Pro uživatele to bude srozumitelnější a nebude zahlcen příliš mnoho informacemi najednou.
<br>
Například můžeme napsat adresu restaurace, kterou chceme uživateli doporučit a její recenzi dát do **samostatného odkazu**.
<br>
Výborným řešením jak na dělení dat je **výpis**. Nejčastěji se sním opět setkáte na blogu nebo e-shopu. Ve výpisu jsou náhledy produktů se zkráceným popisem nebo pár hlavními parametry. Případně nadpis a zkrácený text článku (cca prvních 100 - 250 písmen).

### Ukázka
Vyrobil jsem příklad líného načtení na blogu, kde se další příspěvky načtou po zaskrolování dolů na konec stránky. Je to vlastně určitý způsob stránkování. Skrolovat se dá tak dlouho, dokud má databáze co posílat.
