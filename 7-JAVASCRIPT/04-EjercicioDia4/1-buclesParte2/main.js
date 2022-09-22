// EJERCICIO 7: Pide un numero en consola que este entre el 50 y el 100, si es incorrecto vuelve a preguntar

let numUser
do {
    numUser = prompt ('Dime un número entre 50 y 100')
} while (numUser < 50 || numUser >100)




// EJERCICIO 8: Pedir al usuario introducir un número entre 2 y 10. Si el numero noo esta entre esos valores. se le vuelve a preguntar. Una vez introducido el correcto se mostrara la tabla de multiplicar del numero elegido.

let number

do{
    number = prompt ('Dime un número del 2 al 10 y te diré su tabla de multiplicar.')
} while (number < 2 || number > 10 || isNaN(number))

for (let i = 1; i <=10; i++){
    console.log(`${number} x ${i} = ${number * i}` )
}


// EJERCICIO 9: Recorrer la siguiente lista con bucle, imprimiendo en consola el doble de cada número:
// for
// for ... Of
// for ... In
// While

const num = [1,9,3,8,5,7]


// *Resuelto con for
console.log('***********FOR*************')
for ( let i = 0; i <= num.length; i++){
    console.log(num[i] * 2)
}

// * Resuelto con for ... of
console.log('**************FOR...OF************')
for (let numero of num){
    console.log (numero * 2)
}

//*Resuelto con for ...in
console.log('**************For...In************')
for (let i of num){
    console.log (num[i] * 2)
}

// *Resuelto con while
console.log('**************While************')
let index = 0

while (index < num.length){
    console.log(num[index] * 2)
    index++
}

console.log('**************DO...While************')

let indice = 0
do{
    console.log(num[indice]*2)
    indice++
}while (indice < num.length)



