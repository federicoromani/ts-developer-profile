# Perfiles de desarrolladores web

La aplicación está hecha completamente con typescript. Además hago uso de node y webpack para transpilar.
La idea es mostrar la implementación del patrón *Abtract Factory*, los beneficios que tiene ts en el desarrollo.

A continuación se plantea un problema simple, que sirve para mostrar este patrón.

Imaginemos que somos especialistas en selección IT y una consultora nos pide 3 perfiles backend con diferente experiencia y determinados parametros, entre ellos, rango salarial y stack tecnológico. Se requiere un junior, un semisenior y un senior.

Una forma de plantear la solución, sería la siguiente:

```
 * --------------------------------------------------------
 * | ConcreteFactories → |      BACKEND      |  FRONTEND  |
 * | AsbtractProducts  ↓ |                   |            |
 * |---------------------|-------------------|------------|
 * | • JUNIOR            | BackendJunior     | .......... |
 * | • SEMISENIOR        | BackendSemisenior | .......... |
 * | • SENIOR            | BackendSenior     | .......... |
 * --------------------------------------------------------
```
## Ver documentación
Acceda a https://federicoromani.github.io/ts-developer-profile/docs/modules

## Ver resultados
Acceda a https://federicoromani.github.io/ts-developer-profile/

## Configuración de la app
Para la configuración los archivos importantes son el de webpack.config.js, tsconfig.json y package.json
