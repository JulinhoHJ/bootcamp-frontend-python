import { useEffect, useState } from "react"
import { fetchCharacters } from "../services/characters"
import { Link } from "react-router"

// TODO: Crear la página CharacterPage y asociar los datos del personaje con el id que se visita. Titulo, boton regresar al home, imagen, name, species, status

const HomePage = () => {
  // TODO: Listar los personajes(characters) de la api de Rick and Morty y deben mostrar los campos: image, id, name, race, location
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(data => setCharacters(data.results))
  }, [])
  return (
    <main className="m-4">
      <h1 className="text-3xl font-bold text-center">Home Page - Characters</h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {characters.map(character => {
          return (
            <Link
              key={character.id}
              className="bg-yellow-300 rounded-lg p-4 flex flex-col justify-evenly items-center gap-1"
              to={`/characters/${character.id}`}
            >
              <img src={character.image} alt="" width={100} />
              <div className="font-bold text-xl">#{character.id}</div>
              <div className="font-bold text-3xl text-center">{character.name}</div>
              <div className="font-bold bg-orange-300 text-slate-800 p-2 rounded-lg uppercase">{character.species}</div>
              <div className="font-bold text-center">{character.location.name}</div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}

export default HomePage