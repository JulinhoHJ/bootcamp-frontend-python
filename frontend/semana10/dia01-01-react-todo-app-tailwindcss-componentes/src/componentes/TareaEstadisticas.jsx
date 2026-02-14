const TareaEstadisticas = ({ tareas, onLimpiarTareasCompletadas }) => {
  const tareasCompletadas = tareas.filter(tarea => tarea.completado)

  return (
    <section className="bg-blue-200 flex justify-between p-4">
      <span>
        {tareasCompletadas.length} de {tareas.length} completadas
      </span>

      <button
        className="bg-green-400 p-2"
        onClick={onLimpiarTareasCompletadas}
      >
        Limpiar completadas
      </button>
    </section>
  )
}

export default TareaEstadisticas