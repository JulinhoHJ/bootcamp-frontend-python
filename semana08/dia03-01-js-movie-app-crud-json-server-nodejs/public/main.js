import { createMovie, deleteMovie, fetchMovies } from './servicios.js'

const renderMovies = (movies = []) => {
  // TODO: Renderizar las peliculas usando la plantilla del tbody
  const moviesList = document.querySelector('.movies__list')
  let elements = ''

  movies.forEach(movie => {
    elements += `
      <tr>
        <td>
          ${movie.id}
        </td>
        <td>
          <img
            src="${movie.image}" width="100" height="150"
          />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div>
            <strong>Release:</strong> ${movie.release}
          </div>
          <div>
            <strong>Summary:</strong> ${movie.summary}
          </div>
        </td>
        <td>
          <div>
            <button>
              ✏
            </button>
            <button class="movies__remove" data-id="${movie.id}">
              ❌
            </button>
          </div>
        </td>
      </tr>
    `
  })
  moviesList.innerHTML = elements

  // TODO: remover una pelicula cuando presionamos el boton ❌
  const removeButtons = document.querySelectorAll('.movies__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      //1. Extraer el id de la pelicula a eliminar
      const { id } = event.target.dataset
      //2. Eliminar la pelicula en el servidor
      const confirmDelete = confirm('¿Estás seguro de eliminar esta pelicula?') // Devuelve un booleano
      if (confirmDelete) {
        await deleteMovie(id)
        //3. Actualizar la lista de peliculas
        const movies = await fetchMovies()
        renderMovies(movies)
      }
    })
  })

  // TODO: Llenar el formulario de pelicula con la data de la pelicula seleccionado cuando presionamos en el botón ✏ y guardar la edición.
}

const moviesForm = document.querySelector('#moviesForm')

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault() // Evita que el formulario actualice la página
  console.log('Guardando la pelicula...')

  // 1. Extraer los datos del formulario
  const peliculasForm = document.forms['moviesForm']
  const name = peliculasForm.name.value
  const image = peliculasForm.image.value
  const release = peliculasForm.release.value
  const genreId = peliculasForm.genreId.value
  const summary = peliculasForm.summary.value

  // 2. Crear la nueva pelicula en el servidor
  const newMovie = {
    name,
    image,
    release,
    genreId,
    summary
  }

  try {
    const response = await createMovie(newMovie)
    if (!response.ok) {
      console.log('La pélicula no se guardó correctamente')
      return
    }
    console.log('La pélicula se guardó correctamente')
  } catch (error) {
    console.log(error) // Errores inesperados
  }
  // 3. Actualizar la lista de peliculas
  const movies = await fetchMovies()
  renderMovies(movies)
  // 4. Limpiar el formulario
  peliculasForm.reset()

})

fetchMovies()
  .then(data => {
    renderMovies(data)
  })