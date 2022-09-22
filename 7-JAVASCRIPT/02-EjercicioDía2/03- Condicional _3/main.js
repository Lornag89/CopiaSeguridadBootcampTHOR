// *Ejercicio Condicional 03

/*
Crea un programa que te pregunta la edad y te da el precio de la entrada que tienes que pagar:
Menores de 6 entran gratis.
De 6 a 13 años pagan 4€.
De 14 a 65 años pagan 7€.
Mayores de 65 entran gratis
*/

const userAge = prompt ('¿Qué edad tienes?')

if (userAge <= 6) {
    console.log ('Entrada Gratuita')
} else if (userAge > 6 && userAge <= 13){
    console.log ('Precio De Entrada 4€')
} else if (userAge >= 14 && userAge <= 65){
    console.log ('Precio De Entrada 7€')
} else {
    console.log ('Entrada Gratuita')
}
