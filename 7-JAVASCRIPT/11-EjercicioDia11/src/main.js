
// Cazamos todos los elementos que vayamos a usar -> form y bookList
const form = document.querySelector('.main-form')
const bookList = document.querySelector('.book-list')


// Creamos la función que se encargará del submit --> handleSubmit ()
  // prevenimos que recargue la página
  
const handleSubmit = (event) => {
  event.preventDefault()

  // coger los valores del formulario --> bookTitle y isRead
  const bookTitle = form.bookTitle.value
  const isRead = form.isRead.checked

  
  // Comprobamos que el input no esté vacío
    // si está vacío le ponemos la clase .invalid al input y retornamos
    // si no está vacío continuamos
  if (bookTitle.trim() === '') {
    form.bookTitle.classList.add('invalid')
    return
  } else {
    form.bookTitle.classList.remove('invalid')
  }

/*
  // Crear un nuevo elemento en el DOM con el libro que hemos guardado
  const bookMarkup = document.createElement('li')
  bookMarkup.className = 'book'
  
  const isReadIcon = isRead ? '👍' : '👎'
  bookMarkup.innerHTML = `
  <span class="book__title">${bookTitle} - </span>
  <span class="read-icon">${isReadIcon}</span>
  <span class="delete-icon">❌</span>`

 
  // Para borrar el elemento, en este caso podemos directamente buscar el elemento dentro del LI que hemos creado y decirle que escuchamos su "click" y que borramos el libro.
  bookMarkup.querySelector('.delete-icon').addEventListener('click', () => {
    bookMarkup.remove()
  })
  
  // Añadirlo en el DOM dentro de bookList ⬆ flecha(el <ul> de html)
  bookList.append(bookMarkup)
*/
  
  // opción cuando no hemos guardado el LI, por ejemplo si directamente hubieramos hecho un innerHTML += `` directamente a la lista UL
  const isReadIcon = isRead ? '👍' : '👎'
  bookList.innerHTML += `
  <li class="book">
    <span class="book__title">${bookTitle} - </span>
    <span class="read-icon">${isReadIcon}</span>
    <span class="delete-icon">❌</span>
  </li>`



  // resetear el formulario a cero
  form.reset()
  // poner el foco en el input de título
  form.bookTitle.focus()
  

}



// esto es el event Delegation que he usado en la opción en la que no hemos creado ningún LI
bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-icon')) {    
    event.target.parentElement.remove()
  }
})


// Escuchamos el submit del formulario
form.addEventListener('submit', handleSubmit)