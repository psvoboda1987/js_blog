## Moderní vývoj - SOLID

Slyšeli jste o objektově orientovaném vývoji? Pak jste pravděpodobně slyšeli o zkratce SOLID.
<br>
Co znamená? Nejprve v originálním znění.
<br>
**S**ingle responsibility
**O**pen for addition, closed for modification
**L**iskov substitution principle
**I**nterface seggregation
**D**ependency inversion (big->small == OK, small->bug != OK)
<br>
A nyní v češtině a zjednodušeně:
<br>
## Jediná zodpovědnost
Třída, pomocí které vytvoříme nový objekt by měla být logickým celkem. Měla by řešit jen to, co od ní potřebujeme. Pokud máme třídu **Obdélník**, neměla by se zabývat ničím jiným. Pokud chceme vytvořit kruh, napíšeme si třídu **Kruh**. Je vhodné tyto dvě třídy oddělit. Pokud se v něčem shodují, jsou si podobné, můžeme je propojit s rodičem **Tvar**. Ta může mít abstraktní podobu a nastavit, že objekt má metodu **spočítejObsah()**.
## Objekt je možno rozšířit ale ne modifikovat
Pokud potřebujeme novou funkcionalitu, ponecháme třídu v původním stavu a doplníme ji o novou funkci **spočítejObvod()**. Nebudeme měnit to, co už ve tříde je, protože je to pravděpodobně otestováno, zaverzováno a požito jinde. Změnou v předchozím obsahu třídy bychom mohli změnit funkcionalitu a tím dostat jiné výsledky, než které potřebujeme. Je tedy lepší novou funkci zkopírovat z původní, přejmenovat ji a upravit dle potřeb.
## Liskovové princip nahraditelnosti
Každá podtřída by měla být schopna nahradit svého rodiče. Podtřída **Obdélník** by v metodě **spočítejObsah()** měla například vracet stejný typ hodnoty jako **Tvar**. Buď obě vrací číslo nebo textový řetězec. Ale ne jednou tak a podruhé jinak.
## Oddělený interface
Uživatel nesmí být nucen implementovat metody, které nepoužívá. Vytvoříme tedy **InterfaceTvaru**, který implementuje metody **spočítejObvod()** a **spočítejObsah()** je to v pořádku. Pokud bychom ale do něj zahrnuli i metodu **spočítejObjem()**, je to už nežádoucí. Protože tvar je 2D a objem potřebuje k výpočtu 3 rozměry. Pokud je metoda **spočítejObjem()** v testovacím režimu a není doladěná, budou se nám hlásit chyby z metody, kterou nepoužíváme ani nepotřebujeme. Je tedy potřeba vytvořit **InterfaceTělesa**, který může použít 2D metody i novou metodu řešící objem tělesa.
## Logické nastavení závislostí a priorit
Třída, která komunikuje z databází by neměla být závislá na tom, jestli ji data předá driver typu MSSQL nebo MySQL. A je vhodné ji proto napsat _abstraktněji_ nebo jinak řečeno volněji. A to tak, že používá **db_driver** a nezáleží jakého typu. Pokud tedy nefunguje driver, chybu jdeme hledat a řešit tam. Pokud nefunguje třída, která data zpracovává, také víme, kam se podívat.
<br>
Pokud bychom změnili později typ databáze, museli bychom přepsat metody, které jsme již implementovali a tím bychom porušili druhý princip!
