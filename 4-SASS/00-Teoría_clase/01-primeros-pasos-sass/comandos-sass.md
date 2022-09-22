# Comandos Sass

`sass --version` -> Te muestra la versión que tienes instalada de Sass



## Para compilar archivos sueltos

`sass ruta-archivo.scss ruta-archivo.css` -> Compila el archivo .scss a otro archivo .css

`sass --watch ruta-archivo.scss ruta-archivo.css` -> Compila el archivo y además se queda vigilando

`sass -w ruta-archivo.scss ruta-archivo.css` -> lo mismo que antes pero versión corta



## Para compilar carpetas enteras

`sass -w ruta-carpeta-sass:ruta-carpeta-css`

`sass -w sass:css` -> Este suele ser el comando que más se utiliza (Siempre que estemos dentro de la carpeta que tenga las carpetas ==sass== y ==css==)

