const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-red-600">
        MovieApp
      </h1>

      <div className="flex gap-4">
        <Link to="/movies" className="hover:text-red-500 transition">
          Películas
        </Link>
        <Link to="/create" className="hover:text-red-500 transition">
          Crear
        </Link>
        <button className="bg-red-600 px-4 py-1 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar