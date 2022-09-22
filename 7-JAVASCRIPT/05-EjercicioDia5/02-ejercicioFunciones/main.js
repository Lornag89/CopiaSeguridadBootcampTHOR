console.log('**********Ejercicio 4 **********')

/*Crea una función que recibe como parámetro una fruta como string y devuelve la
posicion del array donde esté esa fruta.
Si no encuentra el elemento que devuelva -1 ;
Guarda el valor que retorna la función y imprimela en la consola
*/

const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras',
    'Uvas', 'Pomelos'];

const myIndexOf = (value, array) => {
    //Variables Auxiliares
    let position = -1

    //código/lógica que usa y modifica las variables auxiliares
    for (let i = 0; i < array.length && position === -1; i++) {
        if (value === array[i]) {
            position = i
        }
    }

    //lectura de datos y retorno de lo que sea
    return position
}

//la siguiente version es menos explicativa, pero igualmente funciona
const myIndeceOf = (value, array) => {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) return i
    }
    return -1
}

console.log(myIndexOf('Piñas', frutas))//2
console.log(myIndexOf(2, [4, 7, 5, 2]))//3
console.log(myIndexOf('chirimoyas', frutas))//-1
console.log(myIndexOf('🍒', ['🍎', '🍐', '🍌', '🍇', '🍒']))//4


console.log('**********Ejercicio 5 **********')

/*Crea una función que reciba el array de frutas y devuelva un string con todas las
frutas separadas por comas.
¡No utilizar el método join()
¡¡¡No tiene que haber una coma al final del string!!!
*/
const frutas5 = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras',
    'Uvas', 'Pomelos'];

const noComillas = (frutas5) => {

}




console.log('**********Ejercicio 6 **********')

/*Crea una función que reciba el array de frutas y que te devuelva un nuevo array al
revés.
No utilizar el método reverse*/

const frutas6 = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras',
    'Uvas', 'Pomelos'];

const myReverse = (array) => {
    const arrayReverse = []

    for (let value of array) {
        arrayReverse.unshift(value)
    }
    return arrayReverse
}

const myOtherReverse = (array) => {
    const arrayReverse = []

    for (let i = array.length - 1; i >= 0; i--) { //Recorrer array del último al primero
        arrayReverse.push(array[i])
    }
    return arrayReverse
}

console.log(myReverse(frutas6))
console.log(myOtherReverse(frutas6))



console.log('**********Ejercicio 7**********')

/*
Crear una calculadora:
Crea un bucle en el que el programa pregunta diferentes opciones (como si
fuera un menú).
Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e)
exponencial, (p) porcentaje y (x) salir.
La calculadora seguirá ejecutándose hasta que el usuario aprete la letra x que
será salir.
Para cada letra entre las opciones, crear la función que se encargará de hacer
cada operación.
Dentro de cada función, pediremos al usuario los datos necesarios para relizar
esa operación.
Que se imprima por consola el resultado de cada operación.
No hace falta que las funciones devuelvan nada, solo que impriman por consola.
Refactoriza para que haya el menor número de cosas repetidas.
*/

const sumar = (pNum1, pNum2) => {
    console.log(`${pNum1} + ${pNum2} = ${pNum1 + pNum2}`)
}

const restar = (pNum1, pNum2) => {
    console.log(`${pNum1} - ${pNum2} = ${pNum1 - pNum2}`)
}

const multiplicar = (pNum1, pNum2) => {
    console.log(`${pNum1} * ${pNum2} = ${pNum1 * pNum2}`)
}

const dividir = (pNum1, pNum2) => {
    console.log(`${pNum1} / ${pNum2} = ${pNum1 / pNum2}`)
}

const exponencial = (pBase, pExponente) => {
    console.log(`${pBase} elevado a ${pExponente} = ${pBase ** pExponente}`)
}

const porcentaje = (pBruto, pTantoPorCiento) => {
    console.log(`${pBruto}  ${pTantoPorCiento} = ${pBruto ** pTantoPorCiento}`)
}



const pedirNumero = (mensaje) => {
    let num
    do {
        num = +prompt(mensaje)
    } while (num === null || isNaN(num) || num === '') //.trim quita espacios delante y detrás, esto aclara que si pasa un string vacio siga pidiendo numero

    num = +num
    return num
}


let respuesta

do {

    respuesta = prompt(`¡Bienvenidos a mi calculadora!, ¿Qué quieres hacer?

(s) SUMAR
(r) RESTAR  
(m) MULTIPLICAR
(d) DIVIDIR
(e) EXPONENCIAL
(p) Porcentaje
(x) SALIR`)

    if (respuesta === 's') {

        //pedimos 2 números al usuario
        const num1 = pedirNumero('Dame el primer número')
        const num2 = pedirNumero('Dame el segundo número')

        //Sumamos e imprimimos por pantalla
        sumar(num1, num2)

    } else if (respuesta === 'r') {

        //Pedir 2 números
        const num1 = pedirNumero('Dame el primer número')
        const num2 = pedirNumero('Dame el segundo número')

        //restar e imprimir resultado
        restar(num1, num2)

    } else if (respuesta === 'm') {

        //Pedir 2 números
        const num1 = pedirNumero('Dame el primer número')
        const num2 = pedirNumero('Dame el segundo número')

        //multiplicar e imprimir resultado
        multiplicar(num1, num2)

    } else if (respuesta === 'd') {

        //Pedir 2 números
        const num1 = pedirNumero('Dame el primer número')
        const num2 = pedirNumero('Dame el segundo número')

        //dividir e imprimir resultado
        dividir(num1, num2)

    } else if (respuesta === 'e') {

        //Pedir 2 números
        const base = pedirNumero('Dame la base')
        const exponente = pedirNumero('Dame el exponente')

        //potencia e imprimir resultado
        exponencial(base, exponente)

    } else if (respuesta === 'p') {

        //Pedir 2 números
        const bruto = pedirNumero('Dame la base')
        const tantoPorCiento = pedirNumero('Dame el exponente')

        //porcentaje e imprimir resultado
        porcentaje(bruto, tantoPorCiento)
    }
    // else if ( respuesta === null || ||  ||  )

} while ( respuesta !== 'x') {

    console.log ('¡Adiós! 👋🏽')
}
