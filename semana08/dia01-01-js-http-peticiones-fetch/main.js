// Asincronía

// JS no espera a que algo lento termine
// JS sigue ejecutando mientras algo se procesa en segundo plano

console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 20000 ms')
}, 2000); // 

console.log('Fin de mi programa')

// Formato JSON

console.log(JSON.stringify({ name: 'Alonso' }))
console.log(JSON.parse('{ "name": "Alonso" }'))

// OBJETIVO: Traer información en formato JSON desde una URL

/*
const url = "https://jsonplaceholder.typicode.com/todos"
*/
// fetch(url) devuelve una promesa

// Estados de una promesa -> pending, fulfilled, rejected

/*fetch(url)
  .then(response => response.json()) // se ejecuta cuando la respuesta llegó correctamente y además convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data) // Aqui podemos usar el objeto JS
    console.log(data[0].title)
  })*/

/*
const renderTodos = (todos = []) => {
  const divApp = document.querySelector('#app')
  let todoList = ''

  todos.forEach(todo => {
    todoList += `<h2>${todo.id} - ${todo.title}</h2>`
  })

  divApp.innerHTML = todoList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderTodos(data)
  })
  .catch(error => {

    // sirve para controlar errores inesperados
    console.log(error)
  })
*/

// TODO: Renderizar la lista de posts del servicio jsonplaceholder con su titulo, id y body

const url = "https://jsonplaceholder.typicode.com/posts"

const renderPosts = (posts = []) => {
  const divApp = document.querySelector('#app')
  let todoList = ''

  posts.forEach(post => {
    todoList += `
      <h2>${post.id} - ${post.title}</h2>
      <p>${post.body}</p>
    `
  })

  divApp.innerHTML = todoList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderPosts(data)
  })
  .catch(error => {
    console.log(error)
  })

