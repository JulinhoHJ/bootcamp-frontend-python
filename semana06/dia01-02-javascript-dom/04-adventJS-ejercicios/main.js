/*1.
Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.
*/
const listaTodosRegalos = ['carrito', 'muneca', 'poke#mon', '#pelota', 'avion', 'camion', 'her#oe']
const regalosSinDefectos = listaTodosRegalos.filter(function (regalo) {
  return !regalo.includes('#')
})
console.log('Ejercicio 01 -> Lista de regalos:', listaTodosRegalos)
console.log('Ejercicio 01 -> Regalos sin defectos:', regalosSinDefectos)
/*2.
La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

toy: el nombre del juguete (string)
quantity: cuántas unidades hay que fabricar (number)
Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

Cada juguete repetido tantas veces como indique quantity
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
*/
const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

function manufactureGifts(production) {
  const gifts = []

  production.forEach(function (item) {
    if (item.quantity > 0) {
      for (let i = 0; i < item.quantity; i++) {
        gifts.push(item.toy)
      }
    }
  })

  return gifts
}

const result1 = manufactureGifts(production1)
console.log('Ejercicio 02 -> Lista de producción: ', result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log('Ejercicio 02 -> Lista de producción: ', result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log('Ejercicio 02 -> Lista de producción: ', result3)
// []

/*3.
En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?
*/
function drawGift(size, symbol) {
  if (size < 2) return ''
  const gift = []
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        gift.push(symbol)
      } else if (j === 0 || j === size - 1) {
        gift.push(symbol)
      } else {
        gift.push(' ')
      }
    }
    if (i < size - 1) gift.push('\n')
  }
  return gift.join('')
}

const g1 = drawGift(4, '*')
console.log('Ejercicio 03')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log('Ejercicio 03')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log('Ejercicio 03')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log('Ejercicio 03')
console.log(g4)
// ""  pobre becario…

/*4.
Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]

Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1

El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.
*/
function decodeSantaPin(code) {
  const blocks = code.match(/\[.*?\]/g)
  if (!blocks) return null

  const digits = []

  for (const block of blocks) {
    if (block === '[<]') {
      if (digits.length === 0) return null
      digits.push(digits[digits.length - 1])
      continue
    }

    let value = Number(block[1])
    const operations = block.slice(2, -1)

    for (const op of operations) {
      if (op === '+') value++
      if (op === '-') value--
    }

    value = (value + 10) % 10
    digits.push(value)
  }

  return digits.length >= 4
    ? digits.slice(0, 4).join('')
    : null
}

console.log('Ejercicio 04: ', decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log('Ejercicio 04: ', decodeSantaPin('[9+][0-][4][<]'))
// "0944"

console.log('Ejercicio 04: ', decodeSantaPin('[1+][2-]'))
// null (solo 2 dígitos)

/*5.
Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.

🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos.
*/
const takeoff = '2025*12*25@00|00|00 NP'

function timeUntilTakeOff(fromTime, takeOffTime) {
  function toTimestampSeconds(elfTime) {
    const clean = elfTime.replace(' NP', '')
    const [datePart, timePart] = clean.split('@')

    const [year, month, day] = datePart.split('*').map(Number)
    const [hour, minute, second] = timePart.split('|').map(Number)

    return Math.floor(
      Date.UTC(year, month - 1, day, hour, minute, second) / 1000
    )
  }

  const fromSeconds = toTimestampSeconds(fromTime)
  const takeOffSeconds = toTimestampSeconds(takeOffTime)

  return Math.floor(takeOffSeconds - fromSeconds)
}


// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log('Ejercicio 05: ', timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// justo en el momento exacto
console.log('Ejercicio 05: ', timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
// 0

// 12 segundos después del despegue
console.log('Ejercicio 05: ', timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))
// -12