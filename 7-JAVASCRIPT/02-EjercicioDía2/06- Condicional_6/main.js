// *Ejercicio Condicional 06 */

/*
Escribe un programa que pida la hora al usuario, preguntando las horas, minutos y 
segundos.
Se mostrará en pantalla la hora elegida por el usuario un segundo más tarde.
Si no se pasa una hora correcta se mostrará un mensaje al usuario.
*/

let hour = +prompt('Introduce las horas')
let minute = +prompt('Introduce los minutos')
let second = +prompt('Introduce los segundos')


if (second >= 0 && second <= 59) {
    second++
} if (second === 60) {
    second = (second - 60)
} if (second === 0) {
    minute++
} if (minute === 60) {
    minute = 0
} if (second === 0 && minute === 0){
    hour++
} 

if (second >= 0 || second < 59 && minute >= 0 || minute >= 59 && hour >= 0 || hour < 59) {
    console.log(hour + 'h' + minute + 'min' + second + 'sec')
} else {
    console.error('Valor de hora erroneo');
}























