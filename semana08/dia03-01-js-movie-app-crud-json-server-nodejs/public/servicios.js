const url = 'http://localhost:3000/movies'

export const fetchMovies = async () => {
  const response = await fetch(url) // esperar la respuesta del servidor (asincrona)
 
  return await response.json() // esperar a la conversion de JSON a Objeto JS (asincrona)
}

export const createMovie = async (form) => {
  //POST
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // mimetypes. Ej, json, xls, jpg, etc
    },
    body: JSON.stringify(form) // El body siempre tiene que ser una cadena de texto
  }

  const response = await fetch(url, options) // Por defecto usa el metodo GET

  return await response
}

export const deleteMovie = async (id) => {
  //DELETE
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`${url}/${id}`, options)

  return await response
}