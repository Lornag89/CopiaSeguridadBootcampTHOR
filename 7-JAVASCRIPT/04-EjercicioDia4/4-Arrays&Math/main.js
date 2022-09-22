

//* EJERCICIO 01
console.log('**********Ejercicio 1 **********')
// Crea 3 arrays:
// El primero tendrá 5 números.
// El segundo se llamará pares y el tercero impares . Ambos estarán vacíos.
// Multiplica cada uno de los números del primer array por un número aleatorio entre 1
// y 10:
// Si el resultado es par, guarda ese número en el array de pares y si es impar en
// el otro.
// Mostrar por consola:
// La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
// El array de pares e impar

const number2 = [5, -7, 13, 20, -4]
const even = []
const odd = []

for (let num of number2) {
    const random = Math.ceil(Math.random() * 10)  //Num del 1 al 10
    const result = (num * random)
    console.log(`${num} x ${random} = ${num * random}`)

    if (result % 2 === 0) {
        even.push(result)
    } else {
        odd.push(result)
    }
}
console.log(`Pares -->, ${even}`)
console.log(`Impares -->', ${odd}`)


console.log('**********EJERCICIO2**********')

/*Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya
escribiendo.
Imprime el array por consola.
Cuando acabe, suma el total de todos los números.
Imprime en consola la suma total, la raíz cuadrada del total y también éste
último pero redondeado al alta.
*/
const arrayToFill = []

for (let i = 1; i <= 5; i++) {
    const useNum = prompt('Dime un número entero')
    arrayToFill.push(useNum)
}
console.log(arrayToFill)

let total = 0
for (let useNum of arrayToFill) {
    total += useNum
}
console.log('Total -->', total)






console.log('**********EJERCICIO3**********')

/*Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos
incluidos).
Luego elimina del array todos los números pares y en lugar de ellos ponemos el
string "los impares molan" .
*/

let emptyArray = []

for (let i = 0; i <= 10; i++) {
    let random1 = Math.ceil(Math.random() * (33 - 23) + 23);

    emptyArray.push(random1);
}
console.log(emptyArray)


for (let i = 0; i < emptyArray.length; i++) {
    if (emptyArray[i] % 2 === 0) {
        emptyArray.splice(i, 1, 'Los Impares Molan')
    }
}
console.log(emptyArray)

// **********EJERCICIO 4 **********

/*Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.
Elimina todas las vocales de la frase e imprime la nueva frase por consola como un
string.
*/

const phrase = prompt('Escribe una frase')

const phraseArray = phrase.split('');
console.log(phraseArray);

const letter = phraseArray[i].toLowerCase()
for (i = 0; i < phraseArray.length; i++) {
    if (letter[i] === "a" ||
        letter[i] === "e" ||
        letter[i] === "i" ||
        letter[i] === "o" ||
        letter[i] === "u") {
        letter.splice(i, 1, '');
    }
}
console.log(phraseArray.join(""))















