import { fetchDragonBall } from "./services.js"

let page = 1
let totalPages = 0

let dragonballsFavorites = JSON.parse(localStorage.getItem('dragonballs-favorites')) ?? []

const renderDragonBalls = (dragonballs = []) => {
  const dragonBallList = document.querySelector('#dragonBallList')
  let html = ''

  dragonballs.forEach(dragonball => {

    const isFavorite = dragonballsFavorites.some(
      favorite => favorite.id == dragonball.id
    )

    html += `
      <article class="relative grid gap-2 justify-center bg-gray-800 rounded-2xl py-6 border-4 border-gray-500">
        <button class="dragonball__favorite absolute top-3 right-3 inline-flex items-center justify-center rounded-full ${isFavorite ? 'text-red-500 bg-black/60' : 'text-gray-400 bg-black/40'} p-2 transition cursor-pointer hover:scale-110 active:scale-95" data-id="${dragonball.id}">
          <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-10 w-10 fill-current">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>
        </button>
        
        <img src="${dragonball.image}" alt="${dragonball.name}" class="h-80 w-auto mx-auto"/>
        <h2 class="text-center text-white text-3xl py-4 font-semibold">${dragonball.name}</h2>
        <div class="flex gap-2 justify-center">
          <span class="inline-flex items-center rounded-md bg-${(dragonball.gender==='Male') ? 'blue':'pink'}-400/10 px-2 py-1 text-sm font-medium text-${(dragonball.gender==='Male') ? 'blue':'pink'}-400 inset-ring inset-ring-${(dragonball.gender==='Male') ? 'blue':'pink'}-400/30">${dragonball.gender}</span>
          <span class="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-sm font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20">${dragonball.race}</span>
        </div>
      </article>
    `
  })

  dragonBallList.innerHTML = html

  const favoritesButtons = document.querySelectorAll('.dragonball__favorite')

  favoritesButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const { id } = event.currentTarget.dataset
      console.log('toggleFavorite', id)
      const foundDragonBallFavorite = dragonballsFavorites.filter(
        favorite => favorite.id === id
      )

      const existDragonBallFavorite = foundDragonBallFavorite.length > 0

      if (existDragonBallFavorite) {
        dragonballsFavorites = dragonballsFavorites.filter(dragonball => 
          dragonball.id !== id
        )
      } else {
        dragonballsFavorites.push({id})
      }
      
      localStorage.setItem('dragonballs-favorites', JSON.stringify(dragonballsFavorites))

      const dataDragonBalls = await fetchDragonBall(page)
      renderDragonBalls(dataDragonBalls.items)

    })
  })

  document.querySelector('#currentPage').textContent = page
  document.querySelector('#totalPage').textContent = totalPages

}

const firstPageButton = document.querySelector('#firstPage')
firstPageButton.addEventListener('click', async (event) => {
  console.log('Click first')
  page = 1
  const dataDragonBalls = await fetchDragonBall(page)
  renderDragonBalls(dataDragonBalls.items)
})

const prevPageButton = document.querySelector('#prevPage')
prevPageButton.addEventListener('click', async (event) => {
  console.log('Click prev')
  page--
  if (page <= 0) {
    page = 1
    return
  }
  const dataDragonBalls = await fetchDragonBall(page)
  renderDragonBalls(dataDragonBalls.items)
})

const nextPageButton = document.querySelector('#nextPage')
nextPageButton.addEventListener('click', async (event) => {
  console.log('Click next')
  page++
  if (page > totalPages) {
    page = totalPages
    return
  }
  const dataDragonBalls = await fetchDragonBall(page)
  renderDragonBalls(dataDragonBalls.items)
})

const lastPageButton = document.querySelector('#lastPage')
lastPageButton.addEventListener('click', async (event) => {
  console.log('Click last')
  page = totalPages
  const dataDragonBalls = await fetchDragonBall(page)
  renderDragonBalls(dataDragonBalls.items)
})

fetchDragonBall()
  .then(data => {
    totalPages = data.meta.totalPages
    renderDragonBalls(data.items)
  })