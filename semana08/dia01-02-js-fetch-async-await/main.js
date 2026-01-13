const url = "https://jsonplaceholder.typicode.com/users"

const fetchUsersSinRetorno = async () => {
  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
}

//fetchUsersSinRetorno()

const fetchUsersConRetorno = async () => {
  const response = await fetch(url)

  return await response.json()
}

/*fetchUsersConRetorno()
  .then(users => console.log(users))*/

const fetchUsersConManejoErrores = async () => {
  try {
    document.querySelector('#estado').textContent = 'Cargando...'

    const response = await fetch(url)

    console.log(response.status)
    if (response.status !== 200) {
      console.log('Tuvimos problemas para cargar el recurso users')
      //return
      throw new Error('ERROR HTTP: ' + response.status)
    }
    const data = await response.json()
    document.querySelector('#estado').textContent = ''
    return data
  } catch (error) {
    console.log(error)
  }

}

const renderUsers = async (users = []) => {
  const divApp = document.querySelector('#app')
  let userList = ''

  users.forEach(user => { 
    userList += `
      <h2>${user.id} - ${user.name} (${user.email})</h2>
      <p>${user.company.name}</p>
    `
  })

  divApp.innerHTML = userList
}

fetchUsersConManejoErrores()
    .then(users => {
      const filteredUsers = users.filter(user => user.address.city === 'McKenziehaven')
      document.querySelector('#total').textContent = `Hay ${users.length} usuarios`
      renderUsers(filteredUsers)
    })

// TODO: Resolver estos ejercicios
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad, la ciudad es a su elección

// Mostrar cuántos usuarios hay