## Funkcionální programování

# Funkcionální programování
Funkcionální programování má dvě hlavní zásady.
1. píšeme čisté, samostatné funkce
2. vyhýbáme se způsobování vedlejších efektů a mutací

## Čisté funkce
Nemají žádný vedlejší efekt a jsou stálé, tedy dávají za všech okolností stejné výsledky. 2 + 2 jsou vždy 4. Nezapisujeme tedy změnu nějakého stavu aplikace. Výhody jsou snadná testovatelnost (nemusíme nastavovat nějaké konkrétní podmínky).
## Funkce vyššího řádu
Funkce vyššího řádu jsou takové funkce, které pracují s funkcí na vstupu nebo ji vrací na výstupu (případně obojí). Typické příklady jsou filter(), map(), reduce(), any(), all(), ...
## Omezení mutací
Pokud na začátku získáváme data z databáze a následně s nimi potřebujeme nějak pracovat abychom dostali výsledky, uložíme si výstup z čistých funkcí do nové proměnné. **Nepřepisujeme** původní data. Zjednodušuje nám to testování (**dohledatelnost**) a **předvidatelnost** aplikace. Celý kód je tak více **transparentní** a je možné zalogovat si průběh programu a zjistit, kdy dostáváme jaká data aniž bychom o ně postupně přišli změnou jejich hodnoty nebo typu.
## Rekurze
Rekurze je opakování funkce. Zavoláním sebe sama uvnitř definice může funkce vyřešit komplexní problém rozdělením na několik podproblémů stejného typu. Je ale potřeba správně nastavit podmínku (pojistku) proti zacyklení. Příkladem může být časový odpočet, kdy si nastavím od kolika chci počítat směrem dolů a například 0 jako koncový stav. Výhody jsou v některých případech jednodušší zápis, rychlejší zpracování (na některých datových strukturách)
## Konverze argumentů 1:1
Je technikou rozfázování funkce s více argumenty na N počet funkcí s jediným argumentem. Je to výhodné, pokud funkci používáme několikrát a po nějaké době najdeme chybu a potřebujeme ji opravit. Nemusíme tak opravovat všechny výskyty, stačí opravit původní vstup. Když si např. chceme sestavit rozpočtovou aplikaci a zadáme dobře položky, které potřebujeme nakoupit, zjistíme kolik peněz nám na konci bude přebývat nebo chybět. Abychom nemuseli opravovat vše, opravíme jen vstupní parametr, výši rozpočtu. A podobně jako v excelu nám na to stačí změnit jedinou buňku.
## Částečná aplikace
Pokud neznáme všechny vstupní paramerty na začátku, můžeme vrátit funkci, která při zavolání doplní zbylé parametry. Příkladem by mohla být dražba. Nastavíme nějakou základní vyvolávací cenu a umožníme každému účastníkovi k základu přihodit určitou částku. Nevíme přesně, kolikrát bude zájemci přihozeno, vždy tak vytvoříme novou funkci, která k aktuální částce přihodí sumu, kterou si danný účastník zvolí. Nejvyšší nabídka vyhrává.
## Kompozice
Funkce se dají snadno spojovat. Tímto způsobem pracuje většina Unixových systémů. Můžeme například zadat: druháMocnina(sečti(2, odečti(4, 1)). Výsledek je 25 (2 + (4-1)^2.
