# ts-developer-salary

La aplicación está hecha completamente con typescript. 

### Para ello necesitamos hacer las siguientes instalaciones:

```
npm install -g typescript

tsc -v

tsc --init

tsc -w 
```

### Habilitar la siguiente linea de tsconfig.json: 

*Esto hace que la depuración del código en el navegador, se ejecute sobre los archivos .ts*
> "sourceMap": true,

### Otras configuraciones útiles de tsconfig son: 

*Esto evita que los comentarios pasen al .js final*
> "removeComments": true, 

*Para que todo el js quede en un único archivo y en un directorio específico*
> "module": "amd",
> "outFile": "./dist/main.js",                                  
> "outDir": "./dist/",  
