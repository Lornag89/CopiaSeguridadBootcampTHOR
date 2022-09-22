/** 
*
**OBJETIVO: Leer y mostrar por consola el contenido de todos los ficheros de extensión .md que se encuentren dentro de un directorio concreto
*
**-Tenemos que recuperar todos los ficheros contenidos dentro de la carpeta (readdir)
*   *-¿Qué me deuvelve el método readdir? - Hacer console.log para verlo
**-Leemos el contenido de aquellos ficheros que tengan extensión .md(readFile)
*
*/ 


//?Primero requerimos libreria filesystem

const fs = require('fs');
const fsPromise = require('fs/promises');

//?segundo queremos leer carpeta y filtrar .md
// fs.readdir('./ficheros', (err, files)=>{
//     for (let file of files){
//         if(file.endsWith('.md')){
//         const data = fs.readFileSync(`./ficheros/${files}`, 'utf-8' );
//         console.log(data);
//         }
//     }
// });

//!PROMESAS 

(async ()=>{
    const files = await fsPromise.readdir('./ficheros');
    //? filter ya nos devuelve un booleano, quitamos los if y else ... funcion flecha siempre devuelve un return si quitamos {}
    const filesMd = files.filter((file)=>file.endsWith('.md'));

    //Ahora leemos el contenido de aquellos ficheros que tengan extensión .md(readFile)
    for (let file of filesMd){
        const data = await fsPromise.readFile(`./ficheros/${file}`, 'utf-8');
        console.log(data);
    }
})();
