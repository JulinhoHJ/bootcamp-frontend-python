const elPalabra = document.querySelector('.ahorcado__palabra')
const elBotones = document.querySelector('.ahorcado__botones')
const elResultado = document.querySelector('.ahorcado__resultado')
const elReiniciar = document.querySelector('.ahorcado__reiniciar')

//elPalabra.textContent = 'HOLA'
const PALABRA_RESPUESTA = 'JAVASCRIPT'
let letrasAdivinadas = ''
const ALFABETO = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('') // Arreglo

const renderizarAlfabeto = () => {
  ALFABETO.forEach(letra => {
    const boton = document.createElement('button')
    boton.textContent = letra
    boton.className = 'bg-blue-500 p-2 text-white font-bold text-2xl cursor-pointer hover:bg-blue-600 duration-300 rounded'
    
    boton.addEventListener('click', function(event) {
      letrasAdivinadas += letra
      elPalabra.textContent = PALABRA_RESPUESTA
        .split('')
        .map(letra => letrasAdivinadas.includes(letra) ? letra : '_')
        .join('')

      if (!elPalabra.textContent.includes('_')) {
        elResultado.classList.toggle('hidden')
        elReiniciar.classList.toggle('hidden')
      }
    })

    elBotones.appendChild(boton)
    
  })
}
// TODO: Reiniciar el juego al presionar el boton '¡Empezar de nuevo!
elReiniciar.addEventListener('click', function(event) {
  elPalabra.textContent = '___________'
  letrasAdivinadas = ''
  elResultado.classList.add('hidden')
  elReiniciar.classList.add('hidden')
})

renderizarAlfabeto()