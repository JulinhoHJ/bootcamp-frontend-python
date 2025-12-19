const taskInput = document.getElementById('task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS
// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)
// CALLBACK: Es una función que usamos como parámetro de otras funciones
taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"
  console.log('Hice click', event.target)

  // MANEJO DEL DOM: Forma de crear un elementos dinámicamente con el DOM de Javascript
  
  // TODO: 01 Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')
  
  // TODO: 04 Añadir un input tipo checkbox al li
  const inputCheckbox = document.createElement('input')
  inputCheckbox.setAttribute('type', 'checkbox')
  li.appendChild(inputCheckbox)

  // TODO: 02 Añadir el elemento span al elemento li
  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)
  
  // TODO: 03 Añadir el elemento button al elemento li
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)
  
  taskInput.value = ''  // Limpiamos la caja de texto después de añadir la tarea

})

taskList.addEventListener('click', function(event) {
  console.log('Hice click', event.target)

  const target = event.target // El elemento presionado

  //console.log({target})

  if (target.tagName === 'BUTTON') {
    console.log('Eliminando tarea...')
    target.parentElement.remove()
  }

  // TODO: Mediante el checkbox deben tachar el texto del span para completar la tarea

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    const li = target.parentElement
    const span = li.querySelector('span')
    span.classList.toggle('checked')
  }
})