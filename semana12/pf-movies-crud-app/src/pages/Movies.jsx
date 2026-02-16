import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner.jsx";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Movies = () => {
  const { user } = useAuth();
  const { movies, error, loading, fetchMovies } = useMovies();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchMovies(user.id);
    }
  }, [user?.id, fetchMovies]);

  if (!user) return <Spinner fullScreen />;
  if (loading && movies.length !== 0) return <Spinner fullScreen />;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-zinc-900 to-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mx-auto">🎬 Mis Películas</h1>
      </div>

      {movies.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl py-16 px-6 text-center shadow-lg">

          <div className="text-6xl mb-4">☹️</div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Aún no tienes películas
          </h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Empieza agregando tu primera película y construye tu colección personal.
          </p>

          <button
            onClick={() => navigate("/movies/new")}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium duration-300 cursor-pointer"
          >
            + Crear mi primera película
          </button>

        </div>
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