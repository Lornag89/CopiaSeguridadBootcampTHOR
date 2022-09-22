// Primero tenemos que cazar los elementos que queramos escuchar sus eventos
const h1 = document.querySelector('h1')
const button = document.querySelector('button')

//Creamos Funcion aparte Con Evento
const hasHechoClick = () => {
    console.log('Has hecho clic en botón.')
}

const cambiosH1 = () => { 
    h1.textContent = 'Texto Cambiado Al Hacer Click'
}


button.addEventListener('click', hasHechoClick)
button.addEventListener('click', cambiosH1)


//Funcion Anonima

button.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'lightblue'
  })

