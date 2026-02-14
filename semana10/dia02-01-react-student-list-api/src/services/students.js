// Aquí añadiremos las funciones necesarias para interactuar con el API

const API_URL = import.meta.env.VITE_API_URL

export const fetchStudents = async () => {
  const response = await fetch(`${API_URL}/students`)
  
  return await response.json()
}

// Crearemos una petición del tipo POST para el endpoint /students
export const createStudent = async (payload) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Mimetypes
    },
    body: JSON.stringify(payload) // Tiene que ir en formato de texto
  }

  const response = await fetch(`${API_URL}/students`, options)

  return await response.json()
}

// TODO: Remover un estudiante usando el método DELETE del recurso students

export const removeStudent = async (id) => {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`${API_URL}/students/${id}`, options)

  return await response.json()
}

export const searchStudent = async (id) => {
  const response = await fetch(`${API_URL}/students/${id}`)

  return await response.json()
}

export const updateStudent = async (data) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      city: data.city
    })
  }

  const response = await fetch(`${API_URL}/students/${data.id}`, options)

  return await response.json()
}