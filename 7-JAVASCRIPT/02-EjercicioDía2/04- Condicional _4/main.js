// *Ejercicio Condicional 04

//Crea un programa que te pregunte el día de la semana y te devuelve el menú de ese día.

const weekDay = prompt('Escribe un día de la semana para saber el menú')

switch (weekDay.toLowerCase()) {
    case 'lunes': {
        console.log('Hoy hay Pasta 🍝')
    }
        break
    case 'martes': {
        console.log('Hoy hay Paella 🥘')
    }
        break
    case 'miércoles': {}
    case 'miercoles': {
        console.log('Hoy hay Arroz y Albóndigas 🧆')
    }
        break
    case 'jueves': {
        console.log('Hoy hay Carne con Papas 🥩🥔')
    }
        break
    case 'viernes': {
        console.log('Hoy hay Pescado 🐟')
    }
        break
    case 'sábado': {}
    case 'sabado': {
        console.log('Hoy hay Pizza 🍕')
    }
        break
    case 'domingo': {
        console.log('Hoy hay Ensalada Cesar 🥗')
    }
        break
    default: {
        console.error('No has escogido un día correcto')
    }
}



