---
Moderní vývoj - DRY vs. WET
---

### Don´t repeat yourself - neopakuj se
Proč je dodržování tohoto vývojového pravidla důležité a prospěšné?
<br>
Pokud má 1 informace 1 zdroj, pak jeho změnou se projeví v celém systému.
<br>
Já osobně cítím, že tento způsob organizace je použitelný nejen v programování, ale v organizaci jakýchkoliv informací. Ať je to seznam úkolů (todo list) nebo seznam příjmů a výdajů. Pokud je mám na více místech, např. z důvodu zálohování dat, je to problém, pokud se nesynchronizují. A je jen otázkou, zda z toho bude problém menší či větší.
<br>
Pokud mám navíc 2 různé, nesynchronizované zdroje dat, které se mírně liší, většinou je to po nějakém čase obtížné rozhodnout, který z nich je ten správný. A v zdrojovém kódu je to to samé. Rozhodnout v případě konfliktu dat, které se perou o 1 místo je riskantní operace. Pokud je vše dobře zaverzované, dá se to většinou vyřešit, ale vždy je to plýtvání časem a energií na něco, čemu se dalo předejít.

**WET** jako protiklad má několik vtipných a trefných popisků:
* Write everything twice
* Write every time
* We enjoy typing
* Waste everyone´s time