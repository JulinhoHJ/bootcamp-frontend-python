export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  return await response.json()
}

export const getCharacter = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

  return await response.json()
}