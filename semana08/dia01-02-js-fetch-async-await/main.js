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
    const response = await fetch(url)

    console.log(response.status)
    if (response.status !== 200) {
      console.log('Tuvimos problemas para cargar el recurso users')
      //return
      throw new Error('ERROR HTTP: ' + response.status)
    }

    return await response.json()
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
  .then(users => renderUsers(users))