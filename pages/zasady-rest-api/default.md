1\. Základní principy REST

-   Bezstavovost (Statelessness): Každý požadavek od klienta k serveru musí obsahovat všechny informace nezbytné k pochopení a zpracování požadavku. Server neukládá žádný kontext o předchozích požadavcích (nepoužívá session)
    
-   Jednotné rozhraní (Uniform Interface): API používá standardní HTTP metody a strukturu URI, což zjednodušuje architekturu a zvyšuje viditelnost interakcí.
    
-   Zdroje (Resources): Vše je zdrojem, který je identifikovatelný pomocí URI (např. /users/123), nikoliv akcí
    
-   Reprezentace zdrojů: Klient manipuluje se zdroji prostřednictvím jejich reprezentace (např. JSON nebo XML), kterou server posílá
    

2\. HTTP metody (CRUD)

REST API využívá standardní HTTP metody pro operace nad daty:

-   GET: Získání dat (čtení)
    
-   POST: Vytvoření nového zdroje
    
-   PUT: Aktualizace/nahrazení existujícího zdroje
    
-   PATCH: Částečná aktualizace zdroje
    
-   DELETE: Smazání zdroje
    

3\. Návrh URI (Uniform Resource Identifier)

-   Používejte podstatná jména: URI by měly reprezentovat zdroje, nikoliv akce (např. /users místo /getAllUsers)
    
-   Hierarchie: Využívejte strukturu pro vztahy (např. /users/123/orders pro objednávky uživatele 123)
    
-   Množné číslo: Pro kolekce používejte množné číslo (např. /books místo /book)
    

4\. HTTP stavové kódy (Status Codes)

Pro informování klienta o výsledku požadavku používejte standardní kódy:

-   2xx (Úspěch): 200 OK, 201 Created, 204 No Content
    
-   4xx (Chyba klienta): 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
    
-   5xx (Chyba serveru): 500 Internal Server Error, 503 Service Unavailable
    

5\. Další doporučené postupy

-   JSON jako standard: Používejte JSON pro formátování dat (vyhněte se XML, pokud to není nutné)
    
-   Verzování: Verzujte API v URI (např. /api/v1/users), aby změny nerozbily stávající klienty
    
-   Filtrování a stránkování: Pro velké sady dat používejte parametry v dotazu (např. /users?page=2&limit=50)
    
-   Bezpečnost: Vždy používejte HTTPS a pro autorizaci využívejte standardy jako OAuth2 nebo JWT (JSON Web Tokens)