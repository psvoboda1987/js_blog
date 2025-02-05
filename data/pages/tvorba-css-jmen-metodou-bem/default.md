---
Tvorba css jmen metodou BEM
---

Metoda BEM (Blok, Element, Modifikátor) slouží k organizaci stylopisu .css pro tvorbu webových stránek.
<br>
Dobrou alternativou jsou i:

[OOCSS](http://blog-svobodaweb-cz.loc/objektove-orientovane-css)

[SMACSS](http://blog-svobodaweb-cz.loc/skalovatelna-a-modularni-architektura-css)

[ITCSS](http://blog-svobodaweb-cz.loc/udrzitelnost-rustu-css-pomoci-stupnovane-specificity)
<br>
<br>
<table>
<thead>
<tr>
<th>Typ třídy</th>
<th>Způsob pojmenovávání</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#blok">Blok</a></td>
<td><code>.block</code></td>
</tr>
<tr>
<td><a href="#element">Element</a></td>
<td><code>.block__element</code></td>
</tr>
<tr>
<td><a href="#modifikator">Modifikátor</a></td>
<td><code>.block--modifier</code></td>
</tr>
<tr>
<td><a href="#modifikator-elementu">Modifikátor elementu</a></td>
<td><code>.block__element--modifier</code></td>
</tr>
</tbody>
</table>

Jak to funguje v praxi.
<br>
Vytvořím nezávislou, přepoužitelnou komponentu, např. produktovou kartu. Jako první označím celý blok například **.product-card**
<br>
Tu rozdělím na několik dílů, podle obsahu, který v nich bude. Vzniknou 3 elementy nesoucí jméno bloku a jméno elementu / části oddělené dvěma podtržítky: **.product-card__header**, **.product-card__body**, **.product-card__footer**
<br>
Pokud budu chtít modifikovat hlavní blok, použiji naopak dvě pomlčky: **.product-card--animated**
<br>
K modifikaci elementu přistupuji stejně: **.product-card__body--discounted**