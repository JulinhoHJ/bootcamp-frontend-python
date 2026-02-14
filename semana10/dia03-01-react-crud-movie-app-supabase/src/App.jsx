import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"
import { fetchMovies } from "./services/movies"

const App = () => {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({
    name: ''
  })

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [session, setSession] = useState(null)

  useEffect(() => {
     fetchMovies()
      .then(data => setMovies(data))
  }, [])

  // si existe la sesion, lo guardamos en el state
  useEffect(() => {
    const getInitialSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log(error)
      setSession(data.session)
    }

    getInitialSession()
  }, [])

  const handleSave = async (event) => {
    event.preventDefault()

    console.log('Creando la película', form)

    const response = await supabase.from('movies').insert([
      {
        name: form.name,
        // user_id: session.user.id // Opcion no tan segura, mejor es añadir un campo por defecto al campo user_id y además dar permisos de inserción solo a las peliculas asociadas al usuario autenticado
      }
    ])
    console.log(response)
    fetchMovies()
      .then(data => setMovies(data))

    setForm({
      name: ''
    })
  }

  // TODO: Eliminar las películas usando supabase agregando una política para eliminar registros.

  const handleDelete = async (id) => {
    console.log(id)
    const { data, error } = await supabase.from('movies').delete().eq('id', id)

    if (error) {
      console.log(error.message)
      return
    }

    console.log(data)

    fetchMovies()
      .then(data => setMovies(data))
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      console.log(error.message)
      return
    }

    console.log(data.session, data.user)

    setSession(data.session)
  } 

  const handleLogout = async () => {
    await supabase.auth.signOut()

    setSession(null)
  }

  return (
    <div>
      <section>
        {!session
        ? (
          <>
            <h1 className="text-2xl">Login</h1>

            <form onSubmit={handleLogin}>
              <input
                name="email"
                placeholder="Email"
                className="border"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <input type="submit" value="Login" className="bg-blue-300" />
            </form>
          </>
        ) : (
          <div className="flex gap-4">
            <h1 className="text-2xl">Bienvenido, {session?.user?.email}</h1>
            <button className="bg-red-400" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </section>
      
      {session && (
        <section>
          <h1 className="text-2xl">Movies</h1>

          <form onSubmit={handleSave}>
            <input
              type="text"
              name="name"
              className="border"
              placeholder="Nombre de la película"
              required
              onChange={
                (event) => setForm((prev) => ({ ...prev, name: event.target.value })) // cuando se trabajo con state y se usa un objeto
              }
              value={form.name}
            />
            <input
              type="submit"
              value="Guardar"
              className="bg-orange-300"
            />
          </form>

          <h1 className="text-2xl">Lista de películas</h1>

          <ul className="list-disc list-inside pl-8">
            {movies.map(movie => {
              return (
                <li key={movie.id} className="">
                  {movie.name}
                  <button onClick={() => handleDelete(movie.id)}>❌</button>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default App