import { useState } from "react"
import { useAuth } from "../hooks/auth"
import { useNavigate } from "react-router"

const LoginPage = () => {
  const { login, user } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    await login(email, password)

    console.log(user?.email, user)

    if (user) {
      // redirigimos a la ruta /
      navigate('/')
    }
  }

  return (
    <>
      <h2>Login son supabase</h2>

      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>

        <input type="submit" value="Login" />

      </form>
    </>
  )
}

export default LoginPage