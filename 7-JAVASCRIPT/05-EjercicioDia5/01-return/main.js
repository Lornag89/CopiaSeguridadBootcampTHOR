//* EJERCICIO 12
console.log('**********Ejercicio 12 **********')

/*
Escribe un programa que pida un número mayor que 1 y que devuelva si el número
es primo o no.
Un número es primo si SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1
*/

const isPrime = (pNum) => { //Auxiliar

    let isPrime = true

    for (let i = 2; i < pNum && isPrime; i++) {
        if (pNum % i === 0) {
            isPrime = false
        }
    }

    return isPrime
}

console.log(isPrime(7))
console.log(isPrime(8))



console.log('********** Ejercicio 2 **********')

/*Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.
Elimina todas las vocales de la frase e imprime la nueva frase por consola como un
string.
*/

const removeVocals = (phrase) => {

const phraseArray = phrase.split('');
console.log(phraseArray);
const arrayVocals = ['a', 'á', 'ä', 'à', 'e', 'é', 'ë', 'è', 'i', 'í', 'ï', 'ì', 'o', 'ó', 'ö', 'ò', 'u', 'ú', 'ü', 'ù',]


for (let i in phraseArray){
    const letter = phraseArray[i].toLowerCase()
    if (arrayVocals.includes(letter)){
        phraseArray.splice(i, 1, '')
    }
}
return phraseArray.join("")
}

console.log(removeVocals('zapato'))