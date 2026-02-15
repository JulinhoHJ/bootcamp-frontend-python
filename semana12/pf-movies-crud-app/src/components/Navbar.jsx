import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black border-b border-zinc-800 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">
          <Link to="/movies">MovieApp</Link>
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {user && (
            <>
              <Link
                to="/movies"
                className="hover:text-red-500 transition"
              >
                Películas
              </Link>

              <Link
                to="/movies/new"
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition"
              >
                + Crear
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:text-red-500 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-red-500 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;