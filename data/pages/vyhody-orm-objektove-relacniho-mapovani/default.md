---
Výhody ORM - objektově relačního mapování
---

**Objektově relační mapování** zajišťuje konverzi dat mezi **relační databází** a objektově orientovaným programovacím jazykem.
<br>
Zajišťuje tedy, aby se mohl správně vytvořit objekt, který reprezentuje jednu entitu (jednotku) z databáze. **Entita** může být jeden řádek v tabulce nebo přesně **definovaná množina dat**. Například při přihlášení do aplikace vznikne jeden konkrétní uživatel.
<br>
Vytvoření konkrétního objektu dává vývojáři možnost snadno a jednotně pracovat se správnými daty bez nutnosti psát SQL. Tato **automatizace** velmi **urychluje vývoj** nových funkcionalit a výrazně **snižuje riziko chyby** v datových operacích (čtení, tvorba, změna nebo mazání dat). Dále umožňuje snadné uchování a správy logiky z jednoho místa.
<br>
OOP navíc poskytuje vývojáři možnost pracovat s objektovou **dědičností**, kterou relační databáze neumožňuje. A lze tak snadno definovat pravomoce, rozsah umožněných činností. Neposlední výhodou je znovu použitelnost kódu bez nutnosti opakovat stejné příkazy.
#### Ukázky
**vytvoření nového uživatele v tabulce pomocí objektu:**
<br>
<pre><code>
$user = new User();
$user->set('name', $data['name']);
$user->set(surname', $data['surname']);
$user->set('age', $data['age']);
$user->save();
</code></pre>

**načtení konkrétního uživatele z tabulky:**
<pre><code>
$user = new User([
    'email' => $data['email'],
    'password' => $data['password'],
]);
return $user->getData();
</code></pre>