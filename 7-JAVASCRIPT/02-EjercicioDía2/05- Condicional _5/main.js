// *Ejercicio Condicional 05 */

/*
Escribe un programa que pida al usuario el número del mes (un número entre 1 y 12 y 
que muestre el número de días que tiene ese mes. 
No tendremos en cuenta los años bisiestos.
Si se introduce un número mayor que 12 o menor que 1, se mostrará un mensaje 
indicando al usuario que el mes elegido es incorrecto.
*/

const month = +prompt('Elige un número del mes entre el 1-12)')

if (month >= 1 && month <= 12) {

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        console.log('Tiene 31 Días')
    } else if (month === 2) {
        console.log('Tiene 28 Días')
    } else {
        console.log('Tiene 30 Días')
    }
} else {
 console.error('¡Tiene que ser un mes entre 1 y 12');
}
