import { fetchDragonBall } from "./services.js"

fetchDragonBall()
  .then(data => {
    console.log(data.items)
  })
