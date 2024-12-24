---
title: 'Moderní vývoj - MVC'
---

MVC znamená Model View Controller. Je to tedy pojmenování částí aplikace podle toho, co jednotlivá část dělá, za co má zodpovědnost.
<br>
Představte si, že máte aplikaci napsanou v jediném souboru. V praxi rychle poznáte, že to má řadu nevýhod.
<br>
* ztěžuje vám to přepoužití jednotlivých částí a funkcionalit na jiném projektu, protože ho v dlouhém kódu musíte trpělivě vyzobávat
* ztěžuje vám to testování
* zpomaluje to práci se souborem, protože se v něm špatně orientuje
* komplikuje to práci v týmu, protože když jeden řeší vzhled a druhý data, oba mění stejný soubor a vznikají jim tak neustále konflikty ve verzovacím systému
* komplikuje to odstraňování chyb, protože chyba může být v čemkoliv - HTML, CSS, SQL, JS...
* navíc je použití několika značkovacích, skriptovacích a programovacích jazyků v jednom souboru nepřehledné a editor je z toho také zmatený

Jak se tomu vyhnout? Jednoduše, rozdělení do několika vrstev, kde se řeší jen jedna věc. Jak to vypadá v realitě, když navštívíte firmu?
<br>
Přijdete osobně na _adresu sídla_. Dorazíte na _recepci_, kde vás vrátný nebo recepční požádá o popis toho, co zde chcete, případně kam jdete. Vy mu to řeknete a on vás nasměruje, případně udělá telefonát osobě vedoucí daný úsek ve firmě. Od ní po telefonu dostane info, že je to v pořádku, že vás má pustit a dát vám žlutou _návštěvnickou kartu_. Vy dojdete na místo a jednáte s osobou, za kterou jste přišli, ona vám dá vizitku, abyste příště mohli zavolat přímo jí.
<br>
Pokud navštívíte firmu na internetu, je to v základu stejné. Přijdete na _webovou adresu_. Tam uvidíte domovskou / _hlavní stránku_, která vám popíše, kam se můžete dostat a odnaviguje vás tam, kam potřebujete. To je vizuální část, tedy **View** (_recepční_). Ta vám aniž o tom třeba víte dá nějaký _token_, návštěvnický variabilní symbol. O přesměrování ke správným datům se stará nějaká řídící struktura, **Controller** (_vstupní karta_ a její naprogramování). A zde vám **Model** (_obchodník_) předá data. Namodeluje vám např. hypotéku na bydlení nebo leasing na auto.
<br>
MVC tedy není nic nového. Je to jen použití toho, jak se úlohy rozdělují běžně v praxi. Jako v našem příkladu: recepční, obchodník a vedoucí.