## SMACSS - Škálovatelná a modulární architektura CSS

S nápadem přišel Jonathan Snook.
Hlavní myšlenka spočívá v oddělení CSS do několika kategorií.
<br>
Může to vypadat třeba takto:
<br>

<table>
    <thead>
        <tr>
            <th class="bold">Základ</th>
            <th>Přebírá z výchozích HTML tagů</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bold">Layout</td>
            <td>.l-sidebar, .l-content</td>
        </tr>
        <tr>
            <td class="bold">Modul</td>
            <td>základní neprefixované třídy</td>
        </tr>
        <tr>
            <td class="bold">Stav</td>
            <td>.is-open, .is-selected</td>
        </tr>
        <tr>
            <td class="bold">Skin</td>
            <td>popsán v samostaném souboru</td>
        </tr>
    </tbody>
</table>



Dobrou alternativou jsou i:

[OOCSS](http://blog-svobodaweb-cz.loc/objektove-orientovane-css)

[ITCSS](http://blog-svobodaweb-cz.loc/udrzitelnost-rustu-css-pomoci-stupnovane-specificity)

[BEMCSS](http://blog-svobodaweb-cz.loc/tvorba-css-jmen-metodou-bem)
