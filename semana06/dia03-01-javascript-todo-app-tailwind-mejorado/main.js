const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar Javascript',
    completed: false
  },
  {
    id: 'tarea-2',
    title: 'Salir al receso',
    completed: true
  },
  {
    id: 'tarea-3',
    title: 'Resolver el reto de la semana',
    completed: false
  }
]

function renderTasks(tasks = []) {
  //console.log('Renderizando tareas...', tasks)
  let lista = ''
  tasks.forEach(task => {
    //console.log(task)
    //lista = lista + '<li>' + task.title + '</li>'
    lista = lista + `
      <li class="flex flex-row gap-4 items-center justify-center">
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}"/>
        <div class="w-full ${task.completed ? 'text-green-700 line-through' : ''}">
          ` + task.title + `
        </div>
        <div class="flex flex-row gap-2">
          <button class="border border-green-400 font-medium text-sm text-green-400 px-2 py-1 rounded-lg hover:bg-green-400 hover:text-white duration-300 cursor-pointer">
            Editar
          </button>
          <button class="border border-red-500 font-medium text-sm text-red-500 px-2 py-1 rounded-lg hover:bg-red-500 hover:text-white duration-300 cursor-pointer" data-id="${task.id}">
            Remover
          </button>
        </div>
      </li>
    `
  })
  //console.log(lista)
  taskList.innerHTML = lista
}

// TODO - 01 Al presionar enter en la caja de texto debemos agregar una nueva tarea a la lista

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Lógica para agregar una nueva tarea

    // const value = event.target.value
    const { value } = event.target // target es un objeto

    console.log(value)
    
    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }
    //console.log(newTask)
    tasks.push(newTask)
    renderTasks(tasks)
    taskInput.value = ''
  }
})

taskList.addEventListener('click', function(event) {
  const { target } = event
  if (target.tagName === 'BUTTON' && target.textContent.includes('Remover')) {
    console.log('Eliminando tarea...')
    const { id } = target.dataset // id que queremos eliminar en data-id
    console.log(id)
    tasks = tasks.filter(task => task.id !== id)
    renderTasks(tasks)
  }

  // TODO: Al presionar el check debe completarse la tarea en el arreglo de tasks
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    const { id } = target.dataset
    //console.log(id)
    const task = tasks.find(task => task.id === id)
    task.completed = !task.completed
    renderTasks(tasks)
  }
})

// TODO: Al hacer click en el botón 'Limpiar tareas completadas' debemos remover todas las tareas completadas. Hay que llamar al método renden también

taskClear.addEventListener('click', function(event) {
  tasks = tasks.filter(task => !task.completed)
  renderTasks(tasks)
})

renderTasks(tasks)