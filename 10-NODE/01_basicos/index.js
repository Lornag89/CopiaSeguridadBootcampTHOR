const colors = require('colors');
const axios = require('axios').default;

console.log('Hola Node'.green.underline);

//Descargo con Axios los datos de los personajes de breaking bad
axios.get('https://breakingbadapi.com/api/characters')
    .then((response) => {
        const personajes = response.data;
        // const imagenes = [];
        // for (let personaje of personajes){
        // imagenes.push(personaje.img);
        // }
        // console.log(imagenes);
        const imagenes = personajes.map((personaje) => {
            return personaje.img;
        });
            console.log(imagenes);
    })  //Resolución de promesa positiva
    
    .catch((error) =>{
        console.log(error);
    })//Resolución de promesa negativa