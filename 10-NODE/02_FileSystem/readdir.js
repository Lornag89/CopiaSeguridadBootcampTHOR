const fs = require('fs');
const fsPromise = require('fs/promises');

//Sincrona
const files = fs.readdirSync('../01_basicos');

console.log(files);

//Asincrona
fs.readdir('../01_basicos', (err, files) => {
    console.log(files);
});
console.log('FINAL')

//Promesas
fsPromise.readdir('../01_basicos')
    .then((files) =>{
        console.log(files);
    })
    .catch((error)=>{
        console.log(error);
    });


// Async-await

(() => {
    const filesProm = await fsPromise.readdir('../01_basicos');
    console.log(filesProm);
})();