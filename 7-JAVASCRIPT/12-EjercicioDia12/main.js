const misFrutas = [
{
    nombre: "plรกtano",
    emoticono: "๐",
    cantidad: 10,
    procedencia: "Canarias",
},
{
    nombre: "manzana",
    emoticono: "๐",
    cantidad: 5,
    procedencia: "Madrid",
},
{
    nombre: "cereza",
    emoticono: "๐",
    cantidad: 7,
    procedencia: "Madrid",
},
{
    nombre: "aguacate",
    emoticono: "๐ฅ",
    cantidad: 2,
    procedencia: "Valencia",
},
];

const frutaMayorCinco = misFrutas.filter((frutaObj)  => {
    return frutaObj.cantidad > 5 ? true : false
})
console.log(frutaMayorCinco)

const frutaOrigen = misFrutas.filter((frutaObj)  => {
    return frutaObj.procedencia === 'Madrid' ? true : false
})
console.log(frutaOrigen)

const frutaMenorCinco = misFrutas.find((fruta)  => {
    return fruta.cantidad < 5 ? true : false
})
console.log(`Solo quedan ${frutaMenorCinco.cantidad} ${frutaMenorCinco.emoticono}`)


const frutaOrigen2 = misFrutas.filter((frutaObj)  => {
    return frutaObj.procedencia === 'Canarias' ? true : false
})
console.log(frutaOrigen2)
