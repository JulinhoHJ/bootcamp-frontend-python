// useEffect, no ayuda a controlar el ciclo de vida un componente
// CREACIÓN, ACTUALIZACIÓN Y ELIMINACIÓN DEL COMPONENTE

import { useState } from "react"
import { useEffect } from "react"

import Avatar from "boring-avatars";
import { createStudent, fetchStudents, removeStudent, searchStudent, updateStudent } from "./services/students";
import Swal from 'sweetalert2'

const App = () => {
  const [contador, setContador] = useState(0)

  console.log(setContador)

  const [students, setStudents] = useState([])

  useEffect(() => {
    console.log('CICLO DE VIDA: CREACIÓN / ACTUALIZACIÓN')
  }, [contador]) // Se ejecuta el useEffect al cargar el componente la primera vez

  useEffect(() => {
    console.log('LA PRIMERA VEZ')
    fetchStudents() // Devuelve una promesa
      .then(data => setStudents(data))
  }, []) // Este useEffect se ejecuta la primera vez

  const [form, setForm] = useState({
      id: '',
      name: '',
      city: '',
    })
  
    // TODO: Implementar el boton eliminar de cada estudiante.
    const handleRemove = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          
          const response = await removeStudent(id)
          console.log(response)
          const dataStudents = await fetchStudents()
    
          setStudents(dataStudents)
        }
      });

    }
  
    // TODO: Implementar el boton editar (recupera la data del estado form en el formulario) desde el recurso student de mockapi
  
    const handleUpdate = async (id) => {
      const response = await searchStudent(id)
      console.log(response)
      setForm(response)
    }
  
    const handleSave = async (event) => {
      event.preventDefault() // Evitamos que la página se actualice
  
      const isNew = form.id === ''
  
      if (isNew) {
        const newStudent = {
          name: form.name,
          city: form.city,
          // id: crypto.randomUUID()
        }

        const response = await createStudent(newStudent)

        console.log(response)

        const dataStudents = await fetchStudents()

        setStudents(dataStudents)
  
        // const updatedStudents = [...students, newStudent]
  
        // setStudents(updatedStudents)
      } else {
        // Aquí editamos un estudiante existente
        // TODO: IMplementar el guarddo del estudiante en el estado student cuando existe
        const response = await updateStudent(form)
        console.log(response)
        const dataStudents = await fetchStudents()

        setStudents(dataStudents)
      }
  
      setForm({
        id: '',
        name: '',
        city: ''
      })
  
      console.log('Creando un nuevo estudiante!', form)
    }
  
    const handleChange = (event) => {
      const { name, value } = event.target
  
      setForm({ ...form, [name]: value })
    }

  return (
    <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center text-slate-700 font-bold mb-4">Student CRUD</h1>

      <form
        className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg border"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
            onChange={handleChange}
            value={form.name}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            onChange={handleChange}
            value={form.city}
          />
        </label>

        <div className="flex gap-4">
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
            type="submit"
            value="Save"
          />
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
            type="reset"
            value="Limpiar"
          />
        </div>
      </form>

      <pre>{JSON.stringify(form)}</pre>

      <h2 className="text-center text-slate-700 font-bold my-4">Student List</h2>

      <section className="mt-4 flex flex-col gap-2">

        { students.length === 0 && (
          <p className="font-light text-center bg-slate-200 p-8">
            No hay estudiantes
          </p>
        )}

        {students.map(student => {
          return (
            <div
              key={student.id}
              className="flex justify-between items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border"
            >
              <Avatar name={student.name} variant="beam" size={48} />
              <div className="text-left">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button onClick={() => handleUpdate(student.id)}>✏</button>
                <button onClick={() => handleRemove(student.id)}>❌</button>
              </div>
            </div>
          )
        })}

      </section>

      <pre className="mt-6 bg-slate-200 p-4">{JSON.stringify(students, null, 2)}</pre>
    </main>
  )
}

export default App