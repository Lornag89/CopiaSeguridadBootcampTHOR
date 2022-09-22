const fs = require('fs');
const fsPromise = require('fs/promises'); //librería promesa

//*Síncrona
const content = fs.readFileSync('./ficheros/uno.md', 'utf-8');
console.log(content);

//*Asincrona
fs.readFile('./ficheros/uno.md', 'utf-8', (err,data) =>{});

//utf-8 configuración donde hay ñ
//()=>{} añadimos funcion con callback y luego pasamos parámetros err y data(contenido fichero)

//*Promesas
fsPromise.readFile('./ficheros/uno.md', 'utf-8')
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{ 
        console.log(err);
    });

    //*Async- await
    (async () =>{
        const data = await fsPromise.readFile('./ficheros/uno.md', 'utf-8');
        console.log(data);
    })();
