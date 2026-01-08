const botonMenos = document.querySelector('#botonMenos')
const botonMas = document.querySelector('#botonMas')
const inputCantidad = document.querySelector('#inputCantidad')

let contador = 1

botonMas.addEventListener('click', (event) => {
  event.preventDefault() // Evita que el formulario actualice la página completamente

  contador = contador + 1

  // TODO: Validar si el número de producto excede la cantidad de 10

  inputCantidad.value = contador
})

botonMenos.addEventListener('click', (event) => {
  event.preventDefault() // Evita que el formulario actualice la página completamente

  contador = contador - 1

  // TODO: Validar si el número de producto la cantidad llega a uno

  inputCantidad.value = contador
})