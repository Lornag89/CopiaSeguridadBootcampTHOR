import { getValueAndCheckEmpty } from "./helpers/getValueAndCheckEmpty.js"
const allMovies = [
    {
        id: 1,
        title: 'Harry Potter',
        genre: 'Aventuras',
        isSeen: false,
    },
    {
        id: 2,
        title: 'Robocop',
        genre: 'Acción',
        isSeen: true,
    }
]

let counterID = 2

const form = document.querySelector('.main-form')
const movieList = document.querySelector('.movie-list')

const printMovies = () => {
    //vaciar caja peliculas
    movieList.innerHTML = ''

    //imprimimos lista nueva peliculas en caja
    allMovies.forEach((movieObj)=>{
        const movieMarkUp = document.createElement('article')
        movieMarkUp.className = 'movie d-flex align-items-center rounded px-2 py-1'
        movieMarkUp.innerHTML = `
                <h2 class="movie__tittle fs-5 mb-0 me-2">${movieObj.title}</h2>
                <span class="movie__genre badge text-bg-adventure me-auto">${movieObj.genre}</span>
                <i class="icon isSeen-icon bi bi-eye-slash fs-3 text-info me-2"></i>
                <i class="icon delete-icon bi bi-trash fs-3 text-danger"></i>
        `

        movieList.append(movieMarkUp)
    })
}


const handleSubmit = (event) => {
    event.preventDefault()

    const title = getValueAndCheckEmpty(form.movieTitle)
    const genre = getValueAndCheckEmpty(form.movieGenre)
    if (title === null || genre === null) return

    //generamos un nuevo objeto película
    counterID++
    const newMovie = {
        id: counterID,
        title: title,
        genre: genre,
        isSeen: form.movieIsSeen.checked
    }

    //Añadir la nueva pelicula a nuestra base de datos
    allMovies.push(newMovie)

    printMovies()
}

form.addEventListener('submit', handleSubmit)