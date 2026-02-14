import { useState } from "react"

const TareaFormulario = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
      event.preventDefault()

      // TODO: 01 - Crear una nueva tarea en el estado tareas
      
      const nuevaTarea = {
        id: crypto.randomUUID(),
        titulo: input,
        completado: false
      }
      console.log(nuevaTarea)

      onSubmit(nuevaTarea)

      setInput('')
    }


  return (
    <form
      className="flex gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border p-1"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <input
        type="submit"
        value="Añadir"
        className="bg-blue-400 p-2"
      />
    </form>
  )
}

export default TareaFormulario