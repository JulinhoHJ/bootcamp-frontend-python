const LIMIT = 10

export const fetchDragonBall = async (page = 1) => {
  const url = `https://dragonball-api.com/api/characters?page=${page}&limit=${LIMIT}`

  const response = await fetch(url)
  return await response.json()
}