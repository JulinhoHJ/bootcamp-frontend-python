const url = 'http://localhost:3000/movies'

export const fetchMovies = async () => {
  const response = await fetch(url) // esperar la respuesta del servidor (asincrona)
 
  return await response.json() // esperar a la conversion de JSON a Objeto JS (asincrona)
}
