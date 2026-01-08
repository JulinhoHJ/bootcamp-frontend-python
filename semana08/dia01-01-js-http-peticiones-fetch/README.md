# Asincronía

### Asincronía en JS

JS no espera a que algo lento termine

```js
console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 20000 ms')
}, 2000); // 

console.log('Fin de mi programa')


Empezando mi programa
Fin de mi programa
Esta línea tardará 2 segundos o 20000 ms
```

## API

Una API es un mensajero que lleva pedidos(peticiones) y trae respuestas.

Nuestras aplicaciones web, no va directo a la base de datos.
Nuestra aplicación web siempre habla con una API.

Ejemplo: Cliente -> Mesero (API) -> Cocina (BACKEND o BASE DE DATOS)

## HTTP + Verbos HTTP

HTTP -> Es un protocolo de comunicación (Hypertext Transfer Protocol)

HTTP es el lenguage que las aplicaciones web para comunicarse

Ejemplos:
http://127.0.0.1:5500
https://youtube.com

### Verbos HTTP

GET       -> Obtener datos
POST      -> Crear datos
PUT       -> Actualizar datos
PATCH     -> Actualizar datos pero de una forma más atómica
DELETE    -> Eliminar datos

## Formato JSON

Es un formato estándar para enviar datos

Formato javascript con un objeto valido

```js
{
  nombre: 'Victor',
  edad: 39
}
```

Este es el formato JSON adecuado:

```json
{
  "nombre": "Victor",
  "edad": 39,
  "encedido": true
}
```

En JS:

```js
JSON.stringify({ name: 'Alonso' }) // Convertimos a una cadena de texto con el formato JSON
JSON.parse('{ "name": "Alonso" }') // Convertimos una cadena de texto con el formato JSON a un objeto JS
```