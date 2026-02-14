import { useState } from "react"

const App = () => {
  const DEFAULT_TAREAS = [
    {
      id: 1,
      title: 'Aprender Javascript',
      completado: true
    },
    {
      id: 2,
      title: 'Aprender CSS',
      completado: false
    },
    {
      id: 3,
      title: 'Aprender React.js + Tailwind CSS',
      completado: false
    }
  ]

  const [tareas, setTareas] = useState(DEFAULT_TAREAS)
  const [input, setInput] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()

    // TODO: 01 - Crear una nueva tarea en el estado tareas

    const nuevaTarea = {
      id: crypto.randomUUID(),
      title: input,
      completado: false
    }
    setTareas([...tareas, nuevaTarea])
    setInput('')
  }

  const handleRemover = (id) => {
    // TODO: Remover la tarea seleccionada al presionar el boton ❌
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  // Actualizar el estado de la tarea a completado
  
  const handleCompletado = (id) => {
    // TODO: 02 - Actualizar el estado de la tarea a completado
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        // Aqui vamos a modificar la propiedad completado a true o a false
        return {
          ...tarea, 
          completado: !tarea.completado
        }
      }
      return tarea
    })

    setTareas(tareasActualizadas)
  }

  const tareasCompletadas = tareas.filter(tarea => tarea.completado)

  const handleLimpiarTareasCompletadas = () => {
    const tareasActualizadas = tareas.filter(tarea => !tarea.completado)
    setTareas(tareasActualizadas)
  }

  // TODO: Renderizar la lista de tareas del estado tareas (tip: usar el map sobre el arreglo en el ul)

  return (
    <main className="flex flex-col gap-4">
      <h1>Todo App + React + Tailwind</h1>
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
        <input type="submit"
          value="Añadir"
          className="bg-blue-400 p-2" 
        />
      </form>

      <section className="bg-blue-200 flex justify-between p-4">
        <span>{tareasCompletadas.length} de {tareas.length} completados</span>

        <button 
          className="bg-green-400 p-2"
          onClick={handleLimpiarTareasCompletadas}>
          Limpiar completadas
        </button>
      </section>

      <ul className="flex flex-col gap-2 p-4">
        {tareas.map(tarea => {
          return (
            <li key={tarea.id} className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox"
                checked={tarea.completado}
                onChange={() => handleCompletado(tarea.id)}
                />
                {/* TODO: La clase line-throught solo debe añadirse al className si tarea completado es true */}
                <span className={tarea.completado ? 'line-through text-green-400' : ''}>{tarea.title}</span>
              </div>
              <button className="cursor-pointer" onClick={() => handleRemover(tarea.id)}>❌</button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default App