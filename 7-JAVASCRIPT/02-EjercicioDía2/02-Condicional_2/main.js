// *Ejercicio Condicional 02

/*Pedir al usuario un número entero. Al recibirlo, escribir en consola lo siguiente:
Si el valor es positivo o negativo.
Si es impar o par.
Si es múltiplo de 5 (que solo aparezca el mensaje si lo es).
Si el valor es mayor que 100, si es menor que 100 o si es igual a 100.
Consideraremos el 0 como positivo
*/

const numero = Number (prompt ('Introduce un número entero'))

if (numero >= 0){
    console.log ('Número Positivo')
}else if (numero < 0){
    console.log ('Número Negativo')
}

if (numero % 2 === 0){
    console.log ('Número Par')
}else {
    console.log ('Número Impar')
}

if (numero % 5 === 0){
    console.log ('Es Múltiplo de 5')
}

if (numero > 100 ){
    console.log ('Es mayor que 100')
}else if (numero === 0){
    console.log ('Es igual a 100')
}else {
    console.log ('Es menor que 100')
}
