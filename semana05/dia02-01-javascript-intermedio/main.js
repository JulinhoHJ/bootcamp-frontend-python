// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y las que vamos a reutlizar
  console.log('Hola soy una función')
  console.log('Soy un bloque de código')
}

// Ejecutar, estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('¡Hola soy Victor!')
  console.log('Y soy fullstack')
}

imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre, nivel = 'el mejor') {
  // if (!nivel) { ❌
  //   nivel = 'el mejor'
  // }

  console.log('¡Hola soy ' + nombre + '!')
  console.log('Y soy ' + nivel)
}

imprimirUnNombre() // ¡Hola soy undefined! ❓
imprimirUnNombre('David', 'Fullstack') // ¡Hola soy David! Y soy Fullstack 😎
imprimirUnNombre('Diego') // ¡Hola soy Diego! Y soy el mejor 😎

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(39) // Mayor de edad
esMayorOMenorDeEdad(8)  // Menor de edad
esMayorOMenorDeEdad(17)  // Menor de edad

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// 7 -> 1 (2 3 4 5 6) 7

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false
  }

  for (let posibleDivisor=2; posibleDivisor < numero; posibleDivisor++) {
    console.log('esNumeroPrimo', posibleDivisor)
    if (numero % posibleDivisor === 0) {
      return false
    }
  }

  return true
}

console.log(esNumeroPrimo(7)) // true
console.log(esNumeroPrimo(10)) // false
console.log(esNumeroPrimo(15)) // false

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdadSinRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }

  // FUNCION QUE NO RETORNA NADA === undefined
}

esMayorOMenorDeEdadSinRetorno(39)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    return 'Mayor de edad'
  } else { // si es false se ejecuta
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(39)

console.log('RESULTADO:', resultado)

// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

console.log(welcome)
console.log(welcome.length)
console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())
console.log(welcome.trim()) // Remueve los espacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

console.log(avatar)
console.log(avatar.concat('victorvzn')) // Hola @mevictorvzn
console.log(avatar.replace('me', 'victorvzn')) // Hola @victorvzn
console.log(avatar.slice(0, 5)) // Retorno una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf('script')) // 10

// TIPOS DE DATOS NO PRIMITIVOS (ARRAYS, OBJECTS)

//ARRAYS

// Un arreglo va a contener elementos de cualquier tipo de dato: cadenas, números, booleanos, null, undefined, funciones, arrays, objetos, etc.

// Declarar un arreglo
const arregloVacio = []
const arregloConNombres = ['Victor', 'Liliana', 'Marcial', 'Mariana']
const listaConValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]

const listaConFunciones = [
  function () {
    console.log('Hola función')
  },
  'edad',
  123
]

console.log(arregloVacio)
console.log(arregloConNombres)
console.log(listaConValores)
console.log(listaConFunciones)

//Lectura de los elementos de un arreglo

console.log(arregloConNombres[0]) // Victor
console.log(arregloConNombres[3]) // Mariana
console.log(listaConValores[0]) // 1
console.log(listaConValores[4]) // Villazón
console.log(listaConValores[5]) // true
console.log(listaConValores[100]) // undefined
console.log(listaConValores[8]) // devolvio un arreglo
console.log(listaConValores[8][0]) // 6 -> asi accedemos a un elemento de un arreglo dentro de un arreglo

console.log(listaConFunciones[0]) // Aquí devuelve la declaración de la función sin ejecutarla
console.log(listaConFunciones[0]()) // Aquí ejecuta la función

console.log(arregloConNombres.length) // 4
console.log(listaConValores.length) // 4

// Escritura en arreglos

console.log(listaConValores[0]) // 1
listaConValores[0] = 'Grethel'
listaConValores[4] = 'Juan'
console.log(listaConValores) // [1, 'Grethel', 3, 'Juan', true, null, undefined, [6, 7, 8]]

// Operaciones sobre arreglos

// Insertar nuevos elementos al final del arreglo

arregloConNombres.push('Javascript')
arregloConNombres.push('CSS')

console.log(arregloConNombres)

// Remover elementos del final del arreglo

arregloConNombres.pop()
console.log(arregloConNombres)


// Insertar un elemento en una posición determinada

const arreglo = [...arregloConNombres] // Copia el arreglo
console.log(arreglo)

arreglo.splice(1, 0, 'HTML') // inserta HTML en la posición 1
console.log(arreglo)
console.log(arregloConNombres)

// Eliminar un elemento

console.log(arregloConNombres)
arregloConNombres.splice(2, 1)
console.log(arregloConNombres)

// Otras funciones: slice (Investiguen)

// EJERCICIOS

// EJERCICIO: Lista de Invitados

// Tienen un arreglo con los nombres de las personas invitadas a una fiesta.

// 01 - Declara el arreglo con 5 nombres.
let invitados = ["Ana", "Luis", "María", "Pedro", "Carla"];

// 02 - Muestra en consola todos los nombres.
console.log('Ejercicio, Item 02', invitados);
// 03 - Agrega un nuevo invitado al final de la lista.
invitados.push('Julinho')
console.log('Ejercicio, Item 03', invitados);
// 04 - Inserta un invitado al inicio de la lista.
invitados.splice(0, 0, 'Wilmer')
console.log('Ejercicio, Item 04', invitados);
// 05 - Elimina al último invitado de la lista.
invitados.pop()
console.log('Ejercicio, Item 05', invitados);
// 06 - Elimina al primer invitado de la lista.
invitados.splice(0, 1)
console.log('Ejercicio, Item 06', invitados);
// 07 - Muestra cuántos invitados hay actualmente.
console.log('Ejercicio, Item 07', invitados.length);
// 08 - Reemplaza el segundo invitado de la lista por otro nombre.
invitados[1] = 'Julinho'
console.log('Ejercicio, Item 08', invitados);

// EJERCICIOS DE ALGORITMOS

// 1. Encontrar el mayor número
// Dado un arreglo de números, encuentra el número más grande sin usar Math.max.

const valores = [600, 10, 30, 15, 0, 100]
function encontrarMayor(numeros) {
  let numMayor = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numMayor) {
      numMayor = numeros[i]
    }
  }
  return numMayor
}

console.log('Ejercicio 01: El mayor número es', encontrarMayor(valores));

// 2. Contar pares e impares
// Dado un arreglo de números, muestra cuántos son pares y cuántos son impares.

const num = [600, 10, 30, 15, 0, 100];

function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return [pares, impares];
}
console.log('Ejercicio 02: Cantidad de pares: ', contarParesImpares(num)[0]);
console.log('Ejercicio 02: Cantidad de impares: ', contarParesImpares(num)[1]);


// 3. Invertir un arreglo
// Dado un arreglo, crea otro arreglo con los elementos en orden inverso sin usar .reverse().
// 👉 Pista: usa un bucle desde el final hacia el inicio.

const orden = [10, 20, 30, 40, 50]

function invertirOrden(arreglo) {
  let arregloInvertido = []

  for (let i = arreglo.length - 1; i >= 0; i--) {
    arregloInvertido.push(arreglo[i])
  }
  return arregloInvertido
}
console.log('Ejercicio 03: El arreglo invertido es', invertirOrden(orden));

// 4. Buscar un elemento
// Pide un nombre y verifica si está en el arreglo de invitados.
// Si está, muestra el índice donde se encuentra; si no, indica que no existe.

const listaInvitados = ['Juana', 'Giancarlos', 'Julinho', 'Hugo', 'Karol', 'Geraldine']

function buscarInvitado(invitado) {
  const index = listaInvitados.indexOf(invitado)

  if (index !== -1) {
    console.log('Ejercicio 04: El invitado se encuentra en el indice: ', index);
  } else {
    console.log('Ejercicio 04: El invitado no se existe');
  }
}
let buscar = 'Julinho'
buscarInvitado(buscar)
buscar = 'Dajanna'
buscarInvitado(buscar)

// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.
// 👉 Pista: usa un arreglo auxiliar y verifica antes de insertar.

const listaDuplicados = ['Julinho', 'Julinho', 'Julio', 'Wilmer', 'Junino', 'Wilmer', 'Dajanna']

function eliminarDuplicados(arreglo) {
  let listaSinDuplicados = []

  for (let i = 0; i < arreglo.length; i++) {
    if (listaSinDuplicados.indexOf(arreglo[i]) === -1) {
      listaSinDuplicados.push(arreglo[i])
    }
  }
  return listaSinDuplicados
}
console.log('Ejercicio 05: El arreglo sin duplicados es', eliminarDuplicados(listaDuplicados));

// 6. Palíndromo con arreglos
// Verifica si una palabra es palíndroma (se lee igual al derecho y al revés).
// 👉 Pista: conviértela en arreglo de letras y compárala con su inverso.

const palabra = 'sanas'
function esPalindroma(texto) {
  let arregloLetras = texto.split('')
  let arregloLetrasInvertido = [...arregloLetras].reverse() 

  return arregloLetras.join('') === arregloLetrasInvertido.join('');
}
if (esPalindroma(palabra)) {
  console.log('Ejercicio 06: La palabra es palíndroma')
} else {
  console.log('Ejercicio 06: La palabra no es palíndroma')
}

// 7. Suma de todos los elementos
// Dado un arreglo de números, calcula la suma total de sus elementos sin usar reduce.
// 👉 Pista: acumula con un for.

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumaNumeros(arreglo) {
  let suma = 0

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i]
  }
  return suma
}
console.log('Ejercicio 07: La suma de los elementos es', sumaNumeros(arregloNumeros))
// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.

const numerosRepetidos = [1, 10, 2, 3, 4, 3, 6, 1, 1, 1, 10, 10, 4, 10, 10, 1]
const numerosSinRepetidos = eliminarDuplicados(numerosRepetidos)

function numeroMasRepetido(repetidos, sinRepetidos) {
  let resultado = [];
  let maxRepeticiones = 0;
  for (let i = 0; i < sinRepetidos.length; i++) {
    let contador = 0
    for (let j = 0; j < repetidos.length; j++) {
      if (sinRepetidos[i] === repetidos[j]) {
        contador++
      }
    }
    if (contador > maxRepeticiones) {
      maxRepeticiones = contador;
      resultado = [sinRepetidos[i]];
    } else if (contador === maxRepeticiones) {
      resultado.push(sinRepetidos[i]);
    }
  }
  return resultado
}
const resul = numeroMasRepetido(numerosRepetidos, numerosSinRepetidos);
if (resul.length === 1) {
  console.log('Ejercicio 08: El número más repetido es ', numeroMasRepetido(numerosRepetidos, numerosSinRepetidos))
} else {
  console.log('Ejercicio 08: Los números más repetidos son ', numeroMasRepetido(numerosRepetidos, numerosSinRepetidos))
}

// 9. Ordenar un arreglo (básico)
// Ordena un arreglo de números de menor a mayor sin usar .sort().
// 👉 Pista: algoritmo de burbuja (intercambiar elementos si están desordenados).

const number = [120, 10, 80, 60, 250]

function ordenarNumeros(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let resultado = numeros[j]
        numeros[j] = numeros[j + 1]
        numeros[j + 1] = resultado
      }
    }
  }
  return numeros
}
console.log('Ejercicio 09: Arreglo ordenado de menor a mayor:', ordenarNumeros(number))

// 10. Intercalar dos arreglos
// Dado dos arreglos [1,2,3] y ['a','b','c'], crea uno nuevo: [1,'a',2,'b',3,'c'].
// 👉 Pista: usa un for que recorra en paralelo.

const arreglo1 = [1, 2, 3]
const arreglo2 = ['a', 'b', 'c']

function intercalarArreglos(arreglo1, arreglo2) {
  let arreglo = []
  for (let i = 0; i < arreglo1.length; i++) {
    arreglo.push(arreglo1[i])
    arreglo.push(arreglo2[i])
  }
  return arreglo
}
console.log('Ejercicio 10: Arreglo intercalado:', intercalarArreglos(arreglo1, arreglo2))

// TODO: Investiguen cada uno de los métodos de arreglos que muestro en la siguiente línea

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, sort,forEach, etc.)