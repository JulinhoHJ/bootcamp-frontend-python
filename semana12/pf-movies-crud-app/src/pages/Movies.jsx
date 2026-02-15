import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";

const Movies = () => {
  const { movies, loading, error } = useMovies();
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🎬 Mis Películas</h1>

        <button
          onClick={() => navigate("/movies/new")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer"
        >
          + Nueva Película
        </button>
      </div>

      {movies.length === 0 ? (
        <p className="text-gray-500">No tienes películas registradas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;