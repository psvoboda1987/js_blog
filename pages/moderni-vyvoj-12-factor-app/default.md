## Moderní vývoj - 12 factor App

**12 faktorů** je soupis dobrých a osvědčených zásad, které vycházejí ze zkušenosti odborníků z cloudové platformy [Heroku](www.heroku.com). Ta hostuje tisíce aplikací v různých programovacích jazycích. Když dali vývojáři hlavy a zkušenosti dohromady, sepsali 12 zásad, které se vyplatí více či méně dodržet pro téměř všechny moderní aplikace. Zejména ty, které běží jako služby.
<br>
Jaké jsou hlavní zásady?
## I. Zdrojový kód
Jeden zdrojový kód, který je uložen ve verzovacím systému. Zdroj může mít více prostředí (vývoj, test, produkce)
## II. Závislosti
Konkrétně specifikované a izolované závislosti (např. package.json)
## III. Konfigurace
Nastavení je uložené v prostředí (test.env, prod.env) a zároveň není uložené ve verzovacím systému
## IV. Podporné služby
Podporné a pomocné služby (cURL) jsou připojené zdroje a chováme se k nim v podstatě jako k závislostem
## V. Build, release, run
Fáze tvorby, vydání a běhu jsou odděleny
## VI. Procesy
Aplikace běží v jednom nebo více bezestavových procesech, které jsou odděleny
## VII. Vazba na port
Služby se exportují přes porty a tím jsou od sebe odděleny
## VIII. Souběžnost
Škálování probíhá pomocí modelu procesů, neřeší se přímo v aplikaci
## IX. Disponibilita zdrojů
Maximalizace robustnosti rychlým startem a citlivým vypnutím
## X. Vývojová a produkční shodnost
Vývojové, testovací a produkční prostředí jsou si maximálně podobná (např. všude používám MySQL)
## XI. Logy
Logy jsou proudy událostí, dávají informace o tom, co se kdy a kde stalo
## XII. Admin procesy
Správcovské úlohy se spouští jako jednorázové procesy (nespouští se manuálně z příkazové řádky, aby šly shodně zopakovat)
