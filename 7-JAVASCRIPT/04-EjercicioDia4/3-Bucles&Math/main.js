// *EJERCICIO 6
console.log('**********Ejercicio 6 **********')

/*Complicando el ejercicio de Bucles 02. Haz un programa que muestre las tablas
del 1 al 10 todas seguidas.
Pensad bien cómo resolverlo, recomendacion: Escribe el resultado que
queremos como comentario para descifrar el algoritmo que tienes que usar.
*/

for (let i = 1; i <= 10; i++) {
    console.log('*****Tabla Del' + i + '*****')

    for (j = 1; j <= 10; j++) {
        console.log(`${i} x ${j}`)

    }
}

//* EJERCICIO 7
console.log('**********Ejercicio 7 **********')

/*Escribe un programa que pida al usuario introducir un número entero entre 50 y
100, el cuadro de texto volverá a aparecer si el número es menor o mayor.
*/


//* EJERCICIO 9
console.log('**********Ejercicio 9 **********')

/*Con un while construye y muestra por consola un "triángulo" de 7 líneas como el
siguiente:
Bucles 10.
Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:
let estrellas = 7;
/ resultado
*
**
*
****
*****
******
*******
*/

const stars = 7
let asterisk = '*'
const loop = 10

while (loop <= 10) {
    for (let i = 1; i <= stars; i++) {
        console.log(asterisk)
        asterisk += '*'
    }
    break;
}

//* EJERCICIO 11
console.log('**********Ejercicio 11 **********')

const arrayNum = [3, 0, 11, 25, 114, 23, 30, 3, 9, 54]
let positive = 0
let negative = 0
let zero = 0


for (let i = 0; i <= arrayNum.length; i++) {

    if (arrayNum[i] > 0) {
        positive++
    } else if (arrayNum[i] < 0) {
        negative++
    } else if (arrayNum[i] === 0) {
        zero++
    }
}

console.log('El Array tiene: ${positive} números POSITIVOS, ${negative} números NEGATIVOS y ${zero} CEROS')


//* EJERCICIO 12
console.log('**********Ejercicio 12 **********')

/*
Escribe un programa que pida un número mayor que 1 y que devuelva si el número
es primo o no.
Un número es primo si SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1
*/

const num = prompt('Dime un número mayor que 1')
let prime = true

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false
    }
}

if (prime){
    console.log (`El numero ${num} es primo`)

}else {console.log (`El numero ${num} no es primo`)
}


//* EJERCICIO 13
console.log('**********Ejercicio 13 **********')

/*Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y
100.
Se considera que cuando el usuario introduce un valor, éste es siempre válido.
Con cada intento del jugador, el programa le dice si el número secreto es mayor
o menor.
El jugador tiene 6 intentos para adivinar el número.
Para crear un número aleatorio real utilizamos este código:
*/

const secret = Math.floor((Math.random() * 100) + 1);
let attempt = 6
let numUser = prompt('Escribe un número del 1 al 100 para adivinar mi número')
let winner = true

while (attempt !== 1){

    if (numUser > secret){
        attempt--
        console.log('El número secreto es MENOR. Prueba otra vez, te quedan' + attempt + 'intentos.')
        numUser = prompt('Escribe un número del 1 al 100 para adivinar mi número')
    }else if (numUser < secret){
        attempt --
        console.log('El número secreto es MAYOR. Prueba otra vez, te quedan' + attempt + 'intentos.')
        numUser = prompt('Escribe un número del 1 al 100 para adivinar mi número')
    }else {
        console.log('¡Has Ganado! 🏆🥳')
    }
    break;
}

if ( attempt === 0){ 
    console.log ('Se te han acabado los intentos. ¡Has perdido!😢')
}