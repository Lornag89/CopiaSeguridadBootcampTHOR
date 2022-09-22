// *Ejercicio Condicional 01

/*
Pedir al usuario una nota de examen del 0 al 10.
Si es mayor de 5 mostrar el texto Aprobado
Si es igual que 5, mostrar Aprobado por los pelos
Si es menor, mostrar Suspendido
*/

const num1 = 5
const notaUsuario = Number (prompt ('Pon tu nota de examen'))
// const notaUsuario = +prompt ('Pon tu nota de examen') -->También es válido

if (notaUsuario>num1){
    console.log ('Aprobado')
}else if (notaUsuario===num1){
    console.log ('Aprobado por los pelos')
}else{
    console.log ('Suspendido')
} 
