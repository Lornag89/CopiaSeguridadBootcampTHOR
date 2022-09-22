const luke = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/"
}

// Imprimir en consola:
/*
    "Nombre: Luke Skywalker"
    "Altura: 177"
*/
// Cambiad el color de pelo de "blond" a "brown"
// Listad en consola las url de las películas en las que sale
/*
    "Peli 1: https://swapi.dev/api/films/1/"
    "Peli 2: https://swapi.dev/api/films/2/"
    "Peli 3: https://swapi.dev/api/films/3/"
    "Peli 4: https://swapi.dev/api/films/6/"
*/
// Imprime en consola el color de ojos usando los corchetes para llamar a la propiedad "eye_color"

console.log( `Nombre: ${luke.name}`)
console.log( 'Altura: ' + luke.height)
luke.hair_color = "Brown"
console.log(`Color del pelo: ${luke.hair_color}`)

//Recorrer una array
for (let i in luke.films){
    console.log(`Peli ${Number(i) + 1}: ${luke.films[i]}`)
}

//sacar propiedad con corchetes
console.log('Color de ojos:' ,  luke['eye_color'])