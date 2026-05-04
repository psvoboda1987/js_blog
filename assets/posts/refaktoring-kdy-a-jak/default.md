## Refaktoring kdy a jak

### Co je to refaktorování kódu?
Je to podobné jako když probíráte skříň s oblečením. Něco vám už není, něco už je obnošené ale hodí se ještě třeba na chatu. Něco vyšlo z módy nebo jste to nahradili něčím lepším, praktičtějším nebo hezčím.
<br>
S kódem je to podobné. Důležité je, aby se v zdrojovém kódu nehromadily duplicity, mrtvý kód a kód, který byl nahrazen, protože je nefunkční nebo nezabezpečený, neprošel testy.
### Proč jsou problematické duplicity?
Protože zhoršují čitelnost a přehlednost. Pokud nevím jasně, která ze dvou nebo více stejně či podobně pojmenovaných funkcí se spustí, nemůžu ručit za výsledek a jeho správnost. A jestli se v tom nevyznám já, tak kolegové to budou mít případně o to horší. Může to být výsledek špatného sloučení dvou verzí z GITu. Pokud se zachovala starší podoba funkce, kde chybí úpravy, objeví se stejný problém znovu.
<br>
### Proč je mrtvý kód nebezpečný?
Protože počítače umí dělat věci a rozhodnutí rychleji než lidé. Tisíckrát rychleji. To ale platí i pro dělání chyb, pokud mají špatné nebo neplatné instrukce. Společnost [Knight Capital Group](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/) přišla o 365 milionů dolarů za 45 minut. A to jen protože se spustil kus kódu, který byl 8 let starý a neplatný.
### Kdy je vhodná doba na refaktoring?
* kód je nepřehledný
* kód obsahuje duplicity
* je potřeba zrychlit zpracování
* změnily se požadavky
* zlepšily se vaše znalosti
