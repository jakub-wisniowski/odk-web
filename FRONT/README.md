# FRONT

Przed odpaleniem zainstaluj zależności: `npm i`


## Budowanie

Budowanie projektu komendą `ng build --prod`. Artefakty trafiają do katalogu `dist/`.

## Scully

Generowanie stron statycznych: `npm run scully -- --scanRoutes`. Artefakty trafiają do katalogu `odk-web`.

## Podgląd strony

Serwer lokalny: `npm run scully:serve`. Serwuje aplikację angularową na jednym porcie, a na drugim aplikację w scully.
Po wyłączeniu javascriptu w przeglądarce strona w scully powinna nadal działać. Minus jest taki, że przestaje działać bootstrap, więc niektóre style i funkcjonalności się rozjeżdżają. Trzeba to będzie poprawić.

