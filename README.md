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
### ¿Por qué typescript?
La definición de tipos en TS, nos ayuda a detectar errores fácilmente. Incluso, con algunos editores, los errores son indicados mientras escribimos el código.
De otra manera deberíamos escribir varios test unitarios para detectar este tipo de errores y quizás no lleguemos a cubrir lo mismo que TS.

## Ver documentación
Acceda a https://federicoromani.github.io/ts-developer-profile/docs/modules

## Resultados de ejemplo
Acceda a https://federicoromani.github.io/ts-developer-profile/

## Configuración de la app
Para la configuración, los archivos importantes son el de webpack.config.js, tsconfig.json y package.json
