let numeroActual = '0'
let operador = '' // +, -, *, /, etc
let operando = '' // es cualquier numero

// const inputDisplay = document.getElementById('inputDisplay')

// Consultando un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
// Consultando múltiples elementos a la vez
const buttons = document.querySelectorAll('.button')

console.log(buttons)

buttons.forEach(function(button) {
  // console.log(button)

  button.addEventListener('click', function(event) {
    // console.log('Hice click', event.target) // target es el boton presionado

    const botonSeleccionado = event.target
    const botonTexto = botonSeleccionado.textContent

    console.log(botonTexto)

    // TODO: Agregar la lógica de la calculadora

    /*if (!isNaN(botonTexto)) {
      if (numeroActual === '0') {
        numeroActual = botonTexto
      } else {
        numeroActual += botonTexto
      }
      inputDisplay.value = numeroActual
      return
    }

    if (botonTexto === 'CE') {
      numeroActual = '0'
      operador = ''
      operando = ''
      inputDisplay.value = numeroActual
      return
    }

    if (['+', '-', '*'].includes(botonTexto)) {
      operando = numeroActual
      operador = botonTexto
      numeroActual = '0'
      return
    }

    if (botonTexto === '=') {
      let resultado = 0

      const num1 = Number(operando)
      const num2 = Number(numeroActual)

      if (operador === '+') resultado = num1 + num2
      if (operador === '-') resultado = num1 - num2
      if (operador === '*') resultado = num1 * num2

      numeroActual = resultado.toString()
      inputDisplay.value = numeroActual
      operador = ''
      operando = ''
    }*/

    //Paso 02: Evaluamos el operador seleccionado
    if ('+-*'.includes(botonTexto)) {
      operador = botonTexto
      operando = Number(numeroActual) // Guardamos temporalmente el número actual
      numeroActual = '0'
    } else if (botonTexto === '=') {
      // Paso 03: Cuando presionamos el botón =
      // Aqui realizamos las operaciones en base al número actual y el operando

      //TODO: Añadir la lógica para sorportar las operaciones de resta y multiplicación
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (botonTexto === 'CE') {
      // Paso 04: Cuando presionamos el botón CE
      // Limpiamos operando, operador y numeroActual
      numeroActual = '0'
      operador = ''
      operando = ''
    }
    else {
      //Paso 01: Evaluar cuando presionamos algún número
      numeroActual = Number(numeroActual + botonTexto)
    }
    
    inputDisplay.value = numeroActual

  })
})