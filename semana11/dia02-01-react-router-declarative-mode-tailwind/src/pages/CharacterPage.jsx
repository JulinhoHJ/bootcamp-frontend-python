import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'
import { getCharacter } from '../services/characters'

const CharacterPage = () => {
  const { id } = useParams()

  const [character, setCharacter] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    getCharacter(id)
      .then(data => setCharacter(data))
  }, [])

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <main>
      <h1>Character detail #{id}</h1>

      <Link to='/'>⬅ Regresar al inicio</Link>

      <button onClick={handleBackHome}>⬅ Regresar al inicio</button>

      <pre>{JSON.stringify(character, null, 2)}</pre>
    </main>
  )
}

export default CharacterPage