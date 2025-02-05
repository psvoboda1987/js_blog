---
Objektově orientované programování
---

## Objektově orientované programování
OOP je hitem posledních několika desítek let. Většina slušných programovacích jazyků využití objektů podporuje. **Objekty přinášejí mnoho výhod**, ale samozřejmě nejsou odpovědí na vše.
<br>
Při správném použití **abstrakce** a **dědičnosti** lze objekty velmi efektivně využít. Moje oblíbená metoda využití objektů je **ORM**. Tedy tvorba entit, které představují záznamy v databázi. A to jak pro zápis, tak pro čtení dat.
<br>
Dědičnost oceníte hlavně v momentě, kdy chcete určitou část objektu **zapouzdřit**. A tím **zabránit nevhodné manipulaci** s důležitou částí jeho struktury, funkcionality nebo vlastností. Další velká výhoda je navázání nové třídy, která slouží jako vzor pro tvorbu objektů, na rodiče a zachování původní funkcionality. Pokud se tedy vyskytne unikátní situace, mohu použít **"přetíženou"** metodu, ale zároveň se nemusím starat o kopírování původní definice z rodiče. Obě metody mám tedy přístupné a snadno volatelné.
<br>
Objekty tak snadno mohou měnit část svého charakteru a je možno je **tvořit dynamicky**, například pomocí návrhového vzoru "factory". Metoda sama rozhodne o tom, jaký objekt se má vytvořit na základě vstupních faktů.
<br>
Tvorba nového objektu může být ale svízelná v momentě, kdy jeho vytvoření je výkonově náročné a přitom použití objektu je pouze na krátkou dobu. To samé platí pro dědičnost, která může snadno přetéct a být jednak méně přehledná a navíc **přebytečná**. Objekt, který dědí spoustu metod, ale využívá jen pár nemusí být moc efektivní.
<br>
I to se dá ale řešit. Dědění není povinné. A rozšíření funkcionality může být řízeno principem **kompozice**. Tedy tak, že do kompoziční metody vložím objekt a přidám k němu určitou metodu. To je výhodné zejména v momentě, kdy potřebuji netypickou kombinaci funkcionality vlastností. Mohu na objekt navléct jen určité kusy, které potřebuji a nepořizovat si celý set.
[Ukázka kompozičního principu OOP](https://github.com/psvoboda1987/oop_composition_method)
<br>
Jak to tak bývá, pro efektivní práci s OOP je potřeba vědět, **kdy je co vhodné použít** a kde a za jakých okolností to nasadit. Často se projekt dá zvládnout jediným principem, někdy je lepší kombinace. Málokdy existuje tzv. "zlaté kladivo", které umí vyřešit všechny úkoly. Někdy je potřeba zatlouct hřebík, někdy je lepší zavrtat vrut.