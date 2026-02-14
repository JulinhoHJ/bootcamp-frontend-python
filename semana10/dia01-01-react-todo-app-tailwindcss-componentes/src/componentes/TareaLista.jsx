const TareaLista = ({ tareas, onCompletado, onRemover }) => {
  return (
    <ul className="flex flex-col gap-2 p-4">
      {tareas.map(tarea => {
        return (
          <li className="flex justify-between" key={tarea.id}>
            <div className="flex gap-2">
              <input
                type="checkbox"
                onChange={() => onCompletado(tarea.id)}
                checked={tarea.completado}
              />

              {/* TODO: la clase line-through solo debe añadirse al className si tarea.completado es true */}

              <span className={ tarea.completado ? "line-through text-red-500" : '' }>
                {tarea.titulo}
              </span>
            </div>

            <button
              className="cursor-pointer"
              onClick={() => onRemover(tarea.id)}
            >
              ❌
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TareaLista