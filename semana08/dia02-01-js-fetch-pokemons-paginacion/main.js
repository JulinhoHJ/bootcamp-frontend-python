// TODO: Listar los pokemons en la consola usando la pokeapi
const LIMIT = 6
let page = 1
let currentPage = 1
let totalPages = 0
let count = 0

let pokemonFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []


/*fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })*/

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1) * LIMIT
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${OFFSET}`

  const response = await fetch(url)
  const data = await response.json()

  //TODO: Agregar el id a cada pokemon dentro del arreglo results para usarlo en la imagen del pokemon
  
  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    const foundFavorite = pokemonFavorites.find(favorite =>
      favorite.id === id)
  
    return {
      ...pokemon,
      id,
      name: Boolean(foundFavorite) ? foundFavorite.name : pokemon.name,
      image: Boolean(foundFavorite) ? foundFavorite.image : image,
      isFavorite: Boolean(foundFavorite) // CAST -> Convertimos en tipo de dato a otro: objeto a boolean
    }
  })

  return {
    ...data,
    results: dataResults,
  }
}

const toggleFavorite = async(id, name, image) => {
  console.log('toggleFavorite', id)
  const foundPokemonFavorite = pokemonFavorites.filter(
    favorite => favorite.id === id
  )

  const existPokemonFavorite = foundPokemonFavorite.length > 0

  if (existPokemonFavorite) {
    // Retirar el pokemon de favoritos
    pokemonFavorites = pokemonFavorites.filter(pokemon => 
      pokemon.id !== id
    )
  } else {
    // Agregar el pokemon a favoritos
    pokemonFavorites.push({id, name, image})
  }

  localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

  const data = await fetchPokemons(page)
  renderPokemons(data.results)
  console.log(pokemonFavorites)
}

// TODO: Leer la propiedad image del pokemon y mostrarla en el formulario

const readPokemon = (pokemonId) => {
  console.log('readPokemon', pokemonId)

  const currentFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []
  const foundPokemon = currentFavorites.find(favorite => favorite.id === pokemonId)
  console.log(foundPokemon)

  const pokemonForm = document.forms['pokemonForm'] // Accedemos al formulario mediante el objeto forms
  
  pokemonForm.id.value = foundPokemon.id
  pokemonForm.name.value = foundPokemon.name
  pokemonForm.image.value = foundPokemon.image
  document.querySelector('#pokemonTitle').textContent = `#${foundPokemon.id}`
}

const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')
  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}" width="80" height="80"/>
        <div class="pokemon-item__buttons">
          <button onclick="toggleFavorite('${pokemon.id}', '${pokemon.name}', '${pokemon.image}')">
            <svg xmlns="http://www.w3.org/2000/svg" class="${pokemon.isFavorite ? 'is-favorite' : ''}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>
          </button>
          <button onclick="readPokemon('${pokemon.id}')" class="${pokemon.isFavorite ? '' : 'is-hidden'}">
            <img src="images/icon-edit.svg" alt="Editar icono" width="16"/>
          </button>
        </div>
      </article>
    `
  })

  pokemonList.innerHTML = elements
  
  totalPages = Math.ceil(count / LIMIT)

  document.querySelector('#currentPage').textContent = `${page} de ${totalPages}`

  // TODO: Actualizar el contador de pokemons favoritos

  document.querySelector('#numberPokemons').textContent = `Favoritos: ${pokemonFavorites.length}`

}

const pokemonForm = document.querySelector('#pokemonForm')
pokemonForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const pokemonFormElement = document.forms['pokemonForm']
  const id = pokemonFormElement.id.value
  const name = pokemonFormElement.name.value
  const image = pokemonFormElement.image.value

  const updatePokemons = pokemonFavorites.map(pokemon => {
    if (pokemon.id === id) {
      return {
        id,
        name,
        image
      }
    }
    return pokemon
  })

  pokemonFavorites = updatePokemons

  localStorage.setItem('pokemon-favorites', JSON.stringify(updatePokemons))
  pokemonFormElement.reset()

  const data = await fetchPokemons(page)
  renderPokemons(data.results)
})


const nextPageButton = document.querySelector('#nextPage')
nextPageButton.addEventListener('click', async (event) => {
  console.log('Click next')
  page++
  if (page > totalPages) {
    page = totalPages
    return
  }
  const dataPokemons = await fetchPokemons(page)
  renderPokemons(dataPokemons.results)
})

// TODO: Implementar los botones: anterior, primero y último. Adicionalmente actualicen la pagina actual

const prevPageButton = document.querySelector('#prevPage')
prevPageButton.addEventListener('click', async (event) => {
  console.log('Click prev')
  page--
  if (page <= 0) {
    page = 1
    return
  }
  const dataPokemons = await fetchPokemons(page)
  renderPokemons(dataPokemons.results)
})

const firstPageButton = document.querySelector('#firstPage')
firstPageButton.addEventListener('click', async (event) => {
  console.log('Click first')
  page = 1
  const dataPokemons = await fetchPokemons(page)
  renderPokemons(dataPokemons.results)
})

const lastPageButton = document.querySelector('#lastPage')
lastPageButton.addEventListener('click', async (event) => {
  console.log('Click last')
  page = totalPages
  const dataPokemons = await fetchPokemons(page)
  renderPokemons(dataPokemons.results)
})

fetchPokemons()
  .then(data => {
    console.log(data.results)
    count = data.count
    renderPokemons(data.results)
  })
