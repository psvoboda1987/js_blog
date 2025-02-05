---
Pár tipů na rychlejší Javascript
---

Před tím, než se zamyslím, jak napsat dobrý kód nebo zlepšit stávající se raději zeptám na pár otázek.
* Musím to vůbec řešit?
* Musím to řešit Javascriptem?
* Jak to udělat co nejlépe?
* Bude lepší něco přidat, odebrat, nebo upravit?

Rychlost by neměla jít na úkor funkčnosti, použitelnosti a kompatibilitě. Používání novinek z posledního vydání ES není vždy úplně ten nejlepší krok.
### Jaké chyby jsem nejčastěji dělal při programování
* přílišný důraz na technické detaily (minimalizace počtu řádků, proměnných)
* přehnaná optimalizace (refactoring dříve, než jsem změřil výkonnost)
* používání nadbytečných metod

**Příklady nevhodných kroků:**
* transformace typu Array.from() jen kvůli napsání smyčky .forEach()
* použití ryze funkčního stylu programování na elementy, které se tak často nemění
* transformace dat, vedoucí ke ztrátě informace o původním datovém vstupu
* výběr pomocí querySelectorAll() místo getElementsByClass() nebo getElementsByTagName()
* ukládání proměnných, které se použijí v kódu jen jednou
* neukládání proměnných, které se používají několikrát
* použití knihovny typu jQuery na pár funkčních celků, kde to není nutné
* nevyužití vhodné, dobře napsané a spolehlivé knihovny tam, kde se to hodí
* nevhodné pojmenování funkcí a proměnných (zvyšuje čas potřebný na porozumění kódu ostatním)
* nepoužití linteru, debuggeru, striktního módu a podobných pomůcek, které běžné chyby najdou ještě před spuštěním
* příliš málo validací (naivní spoléhání, že vždy přijde správný vstup a vše bude vždy dostupné)
* příliš mnoho validací (způsobené zejména jejich nepochopením)
* malá nebo téměř žádná míra testování
* použití horkých novinek nebo beta verzí třetí strany bez delšího testování
* nevyužití automatizace

Když to shrnu, většina chyb se stane, když člověk vybere nevhodnou alternativu z několika možností. Nebo když se přibližuje extrémům v jednom nebo druhém konci spektra.