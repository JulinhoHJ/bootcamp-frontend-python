import { Link, Outlet } from "react-router"
import { useAuth } from "../hooks/auth"
import { useNavigate } from "react-router"

const LayoutAdmin = () => {
  const { user, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <>
      <header className="bg-blue-300 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">React router - Admin</h1>
          <nav className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <span>Bienvenido, {user?.user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </div>

      </header>
      
      <Outlet />
    </>
    
  )
}

export default LayoutAdmin