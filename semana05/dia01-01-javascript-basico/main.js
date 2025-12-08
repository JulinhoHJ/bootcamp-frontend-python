// COMENTARIOS

//console.log("!Hola Javascript desde un archivo externo!");

/*
  Esto 
  es un 
  comentario de
  múltiples líneas
*/

// TIPOS DE DATOS

//PRIMITIVOS: 
// * Number (Números), String (cadena de texto), Boolean (true, false)
// * undefined, null, BigInt, Symbol, ...

//NUMBERS, para js los enteros, decimales, son Numbers
console.log(20)
console.log(12.50)
console.log(-56)

console.log(typeof 20) // Number
console.log(typeof 12.50) // Number
console.log(typeof -56) // Number

//STRINGS, para js son cadenas de texto
console.log("Hola")
console.log("Hola, como estas?")

console.log(typeof "Hola") // String
console.log(typeof "Hola, como estas?") // String

//BOOLEANS -> verdadero (true) o falso (false)
console.log(true)
console.log(false)

console.log(typeof true) // Boolean
console.log(typeof false) // Boolean

//UNDEFINED, lo asigna Javascript a una variable cuando no se le asigna ningún valor

let nombre // No hemos asignado ningún valor a la variable
console.log(nombre) // undefined
console.log(typeof nombre) // undefined

//NULL, no tiene valor una variable

//let apellido = undefined; // ❌
let apellido = null // ✅
console.log(apellido) // null
console.log(typeof apellido) // object

// BIGINTS, son números grandes
const bigInt = 12345678901234567890n
console.log(bigInt)
console.log(typeof bigInt) // BigInt

// SYMBOLS, son identificadores únicos
const symbol = Symbol("hola")
console.log(symbol)
console.log(typeof symbol) // symbol

// VARIABLES Y CONSTANTES
// * Nos sirven para guardar datos en memoria y reutilizarlas o modificarlas durante el tiempo que nuestro programa se esté ejecutando.

// ECMA Script 6 (ES6) introdució la palabra reservada let y const para declarar variables y constantes.
// let, se usa cuando el valor cambia
// const, se usa cuando el valor no cambia

// CONST -> ES6 (Si es recomendable usar actualmente)

const edad = 55  // es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 17
const PI = 3.14
const nombre2 = "Julinho"

console.log(edad)
console.log(_edad)

// LET -> ES6 (Si es recomendable usar actualmente)

let edad2 = 35  // Nota: no es obligatorio inicializarlo
console.log(edad2)

edad2 = "89" // Lo sobreescribe con un tipo de dato nuevo
console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 1)
console.log(1 - 1)
console.log(1 * 1)
console.log(1 / 1)
console.log(1 % 1) // Resto de la división

console.log(2 ** 3)
console.log(Math.pow(2, 3))

// OPERADOR DE ASIGNACIÓN

const genero = "femenino"
console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operadores de igualdad no estricta (==)
// Devuelve un valor boolean (true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == "1") // true
console.log(1 != "1") // false

// Operadores de igualdad estricta (===)
// Devuelve un valor boolean (true o false)
// Este operador toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === "1") // false
console.log(1 !== "1") // true

// OPERADORES LÓGICOS (AND, OR, NOT)

console.log(true && false) // false -> AND (Se tiene que cumplir los dos lados de la comparación)
console.log(true || false) // true -> OR (Se tiene que cumplir al menos uno de los lados de la comparación)
console.log(!true) // false -> NOT (Transforma el valor a su contrario)

// OPERADOR DE CADENA

const saludo = "Hola"
const nombreCompleto = "Julinho HJ"
const miEdad = 31

console.log(saludo + ", " + nombreCompleto + ". Tienes " + miEdad + " años.")

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = "codigo"
const cadena2 = "cadaga"

console.log(cadena1.length === cadena2.length)

// 2. Retornar true si un numero es menor que 40 sino devolver false
let numero = 30
console.log(numero < 40)
numero = 50
console.log(numero < 40)

// 3. Retornar True si un numero es menor que 60 sino devolver False
let numero2 = 10
console.log(numero2 < 60)
numero2 = 80
console.log(numero2 < 60)

// 4. Retornar True si un numero es par sino devolver False
let numero3 = 4
console.log(numero3 % 2 === 0)
numero3 = 3
console.log(numero3 % 2 === 0)

// 5. Retornar True si un numero es impar sino devolver false
let numero4 = 5
console.log(numero4 % 2 === 1)
numero4 = 4
console.log(numero4 % 2 === 1)

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 10
const altura = 20
console.log(base * altura / 2)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
const numero5 = 100
console.log(numero5 ** 3)

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%
const monto = 1000
console.log("SOCIO A: S/. " + monto * 0.3)
console.log("SOCIO B: S/. " + monto * 0.2)
console.log("SOCIO C: S/. " + monto * 0.6)

// CONDICIONALES

//IF

if (true) {
  // ejecutar este código
}

const numero6 = 35
const esPar = numero6 % 2 === 0

if (esPar) {
  console.log("El número es par")
}

// IF ELSE

if (true) {
  // ejecutar este código
} else {
  // ejecutar este código
}

// ELSE IF

if (true) {
  // ejecutar este código
} else if (true) {
  // ejecutar este código
} else {
  // ejecutar este código
}

let hero = "Spiderman"

if (hero === "Batman") {
  console.log("¡Hola soy Bruce!")
} else if (hero === "Spiderman") {
  console.log("¡Hola soy Peter!")
} else if (hero === "IronMan") {
  console.log("¡Hola soy Tony!")
} else {
  console.log("¡No eres un héroe!")
}

// CONDICIONALES (SWITCH)

switch (true) {
  case true:
    console.log("ejecutar este código")
    break
  case false:
    console.log("ejecutar este código")
    break
  default:
    console.log("ejecutar este código")
    break
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)
// for (inicialización; condición; incremento) 

for (let i = 0; i < 5; i++) {
  console.log(i)
}
// i = i + 1 === i++

// WHILE (Sirve para repetir una o varias instrucciones)
// while (condición) 

let i = 0
while (i < 5) {
  console.log(i)
  i = i + 1
}

// DO WHILE (Sirve para repetir una o varias instrucciones)
// do {
//   instrucciones
// } while (condición)

let j = 0
do {
  console.log(j)
  j++
} while (j < 5)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
const edadPersona = 39
if (edadPersona >= 18) {
  console.log('Ejercicio 1: ', 'Mayor de edad')
} else {
  console.log('Ejercicio 1: ', 'Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
let idioma = 'inglés'
if (idioma === 'español') {
  console.log('Ejercicio 2: ', 'Hola')
} else if (idioma === 'inglés') {
  console.log('Ejercicio 2: ', 'Hello')
} else if (idioma === 'aimara') {
  console.log('Ejercicio 2: ', 'kamisaraki')
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
const num = 30
if (num % 3 === 0 && num % 5 === 0) {
  console.log('Ejercicio 3: ', 'fizzbuzz')
} else if (num % 3 === 0) {
  console.log('Ejercicio 3: ', 'fizz')
} else if (num % 5 === 0) {
  console.log('Ejercicio 3: ', 'buzz')
} else {
  console.log('Ejercicio 3: ', num)
}

// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
let num2 = 7;
let esPrimo = true;
for (let i = 2; i < num2; i++) {
  if (num2 % i === 0) {
    esPrimo = false;
    break;
  }
}
console.log("Ejercicio 4:", esPrimo);

// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
let num3 = 0
while (num3 < 10) {
  console.log('Ejercicio 5: ', num3)
  num3 = num3 + 2
}