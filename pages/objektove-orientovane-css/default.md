---
title: 'Objektově orientované CSS'
---

Objektově orientované psaní se na CSS objekt dívá jako na komponentu tvořenou HTML, CSS a případně JavaScriptem.
<br>
Cílem OOCSS je snadné přepoužití komponent na jiném místě stejného projektu, ale i v jiném projektu. A zajištění validního vykreslení. A zároveň oddělení základního vzhledu od úprav pro specifický projekt a tím zmenšení přenášeného množství CSS.
<br>
Zde jsou jeho hlavní principy:
## 1. Vzhled je nezávislý na struktuře
Do CSS nezahrnuju HTML. Popisuji-li komponentu CTA (call to action), vytvořím **.cta**, ne **section.cta** nebo **article.cta**
## 2. Obsah je nezávislý na kontejneru
CSS definuji pro snadnou a bezkonfliktní přepoužitelnost raději abstraktněji, tedy méně specificky. Nepoužiju tedy **.homepage .cta** ale raději **.cta-homepage**, pokud potřebuji větší specificitu.
## 3. Prioritu má nízká specifičnost
* Raději než **#id** použiju **.class**
* vynechávám pravidlo **!important**
* selektory příliš nekombinuji (**.cta.cta-primary.button**)
* nespecifikuji pořadí elementů (**.cta > .cta-header > .button**)

## 4. Vytvářím oddělené moduly
Tímto postupem si připravuji cestu pro nezávislé, konzistentní a dobře odhadnutelné chování každého prvku, který tvořím. Při použití objektu si mohu jednoduše css rozdělit a podle potřeby je zapojovat (import 'button.css'; import 'cta.css') jako elektrické pojistky.


Dobrou alternativou jsou i:

[SMACSS](http://blog-svobodaweb-cz.loc/skalovatelna-a-modularni-architektura-css)

[ITCSS](http://blog-svobodaweb-cz.loc/udrzitelnost-rustu-css-pomoci-stupnovane-specificity)

[BEMCSS](http://blog-svobodaweb-cz.loc/tvorba-css-jmen-metodou-bem)