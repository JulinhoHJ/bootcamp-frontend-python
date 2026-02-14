import { useState } from "react"

import Avatar from "boring-avatars";

const App = () => {
  const DEFAULT_STUDENTS = [
    // {
    //   id: "1",
    //   name: "Bulma",
    //   city: 'Chiclayo'
    // },
    // {
    //   id: "2",
    //   name: "Goku",
    //   city: 'Trujillo'
    // },
    // {
    //   id: "3",
    //   name: "Vegeta",
    //   city: 'Lima'
    // }
  ]

  // TODO: Crear un estado y listar los estudiantes del arreglo DEFAULT_STUDENTS
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem('STUDENTS') ?? '[]')
  })

  const [form, setForm] = useState({
    id: '',
    name: '',
    city: '',
  })

  // TODO: Implementar el boton eliminar de cada estudiante.
  const handleRemove = (id) => {
    const updatedStudents = students.filter(student => student.id !== id)

    setStudents(updatedStudents)

    localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
  }

  // TODO: Implementar el boton editar (recupera la data del estado form en el formulario)

  const handleUpdate = (id) => {
    const studentFound = students.find(student => {
      return student.id === id
    })

    setForm(studentFound)
  }

  const handleSave = (event) => {
    event.preventDefault() // Evitamos que la página se actualice

    const isNew = form.id === ''

    if (isNew) {
      const newStudent = {
        name: form.name,
        city: form.city,
        id: crypto.randomUUID()
      }

      const updatedStudents = [...students, newStudent]

      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
    } else {
      // Aquí editamos un estudiante existente
      // TODO: IMplementar el guarddo del estudiante en el estado student cuando existe
      const updatedStudents = students.map(student => {
        // Buscar el estudiante con el id
        if (student.id === form.id) {
          return {
            ...student,
            name: form.name,
            city: form.city
          }
        }
        return student
      })

      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
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