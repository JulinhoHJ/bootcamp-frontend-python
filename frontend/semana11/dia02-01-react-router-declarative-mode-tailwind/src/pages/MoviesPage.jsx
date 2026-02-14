import { useEffect, useState } from "react"
import { fetchMovies } from "../services/movies"

const MoviesPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              {movie.title}
            </li>
          )}
        )}
      </ul>
    </div>
  )
}

export default MoviesPage