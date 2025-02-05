## Užitečné návrhové vzory

Některé návrhové vzory jsou velmi užitečné a je vhodné je použít tam, kde se hodí. Zde je 5 populárních vzorů.
## Adaptér
Funguje jako dekorace. Je to přizpůsobení se konkrétním detailům. Jeho použití nám dává možnost rychle reagovat na změnu některých detailů v naší aplikaci. Typickým příkladem může být třída pro umožnení komunikace s různými typy databáze. Metody zůstanou stejné, proto kód, který používají například objekty (vytvoř, změň, načti, odstraň) nemusí být měněn. Mnozí z vás asi znají cestovní adaptér pro vaši nabíječku.
## Fasáda
Je v podstatě interface, který může zjednodušovat komplexní problémy na jednoduché příkazy. Všechny operace, které je potřeba vykonat se tak delegují o kus dál. Velmi to připomíná fungování ORM objektů, které umožňují jednoduchou komunikaci s databází. Objektu dám např. jednoduché metody (vytvoř, změň, načti, odstraň). Jejich detaily mohou být propojeny právě výše zmíněným adaptérem, aby se zamezilo problémům mezi MSSQL a MySQL.
## Továrna
Továrna slouží na dynamickou tvorbu objektů (většinou na základě vstupních parametrů). Vytvoříme nový objekt a vnitřní skrytá logika rozhodne o tom, jaký typ objektu se vytvoří. Opět slouží ke zjednodušení  práce s aplikací a ponechání složitějších procesů na pozadí.
## Strategie
Chování třídy upravujeme podle potřeb za běhu. Vytvoříme jeden nebo více objektů s rozdílnou strategií a kontextový objekt. Do kontextu dáváme data podle zvolené strategie. Příkladem může být kalkulačka, kde měníme operace plus / minus / krát / děleno. A čísla se zpracovávají odlišným způsobem.
## Pozorovatel
Pozorovatel nebo posluchač se používá se tam, kde je mezi objekty vazba 1:N. Pokud se jeden objekt změní, pozorovatel o tom automaticky předá info závislým objektům. Je to jeden ze způsobů, jak dosáhnout reaktivity.
## Singleton
Neboli jedináček je objekt třídy, která dovoluje pouze jedinou instanci. Výhoda je v tom, že se zabrání tvorbě velkého množství objektů, které by unavily a zpomalily server. Dále to zjednodušuje práci se zdroji jako jsou databáze nebo soubory na disku. Objektu se může vytvořit seznam úkolů a on je splní v daném pořadí. Změny se tak zapíšou a uloží a je jednodušší předcházet kolizi při zápisu změn.
