import { fetchMovies } from './servicios.js'

fetchMovies()
  .then(data => {
    console.log(data)
  })