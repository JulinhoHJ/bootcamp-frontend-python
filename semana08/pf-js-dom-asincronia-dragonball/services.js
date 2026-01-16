const url = 'https://dragonball-api.com/api/characters'

export const fetchDragonBall = async () => {
  const response = await fetch(url)
  return await response.json()
}