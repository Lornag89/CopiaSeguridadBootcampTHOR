
// Cazamos todos los elementos que vayamos a usar -> form y bookList
const form = document.querySelector('.main-form')
const bookList = document.querySelector('.book-list')

// Función que solo checkea si el campo está vacío, al final hemos hecho otra más completa
/*const checkEmptyInput = (input) => {
  // Comprobamos que el input no esté vacío    
  if (input.value.trim() === '') {
    input.classList.add('invalid')
    return true
  } else {
    input.classList.remove('invalid')
    return false
  }
}*/

const getValueAndCheckEmpty = (input) => {
  const value = input.value
  if (value.trim() !== '') {
    input.classList.remove('invalid')
    return value
  } else {
    input.classList.add('invalid')
    return null
  }
}


const handleSubmit = (event) => {
  event.preventDefault()

  // coger los valores del formulario
  // const bookTitle = form.bookTitle.value
  // const bookAuthor = form.bookAuthor.value
  // const isTitleEmpty = checkEmptyInput(form.bookTitle)
  // const isAuthorEmpty = checkEmptyInput(form.bookAuthor)
  // if (isTitleEmpty || isAuthorEmpty) return

  const bookTitle = getValueAndCheckEmpty(form.bookTitle)
  const bookAuthor = getValueAndCheckEmpty(form.bookAuthor)
  const isRead = form.isRead.checked
  if (!bookTitle || !bookAuthor) return



  // crear libro
  const bookMarkup = document.createElement('li')
  bookMarkup.className = 'book'
  
  const isReadIcon = isRead ? '👍' : '👎'
  bookMarkup.innerHTML = `
  <span class="book__title">${bookTitle} - </span>
  <span class="read-icon">${isReadIcon}</span>
  <span class="delete-icon">❌</span>`
  



  bookList.append(bookMarkup)

  
  // resetear el formulario a cero
  form.reset()
  // poner el foco en el input de título
  form.bookTitle.focus()
  

}


// event Delegation del botón de borrar
bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-icon')) {    
    event.target.parentElement.remove()
  }
})


form.addEventListener('submit', handleSubmit)