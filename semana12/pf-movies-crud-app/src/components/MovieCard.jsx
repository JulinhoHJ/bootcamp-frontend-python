import { useNavigate } from "react-router";
import { useMovieStore } from "../store/movieStore";
import Swal from "sweetalert2";
import { toast } from "../utils/alerts";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { deleteMovie } = useMovieStore();

  const handleDelete = async () => {
    if (!movie?.id) {
      toast.fire({
        icon: "error",
        title: "No se encontró un ID válido para esta película"
      });
      return;
    }

    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta película será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      try {
        await deleteMovie(movie.id);
        toast.fire({
          icon: "success",
          title: "Película eliminada 🎬"
        });
      } catch (error) {
        toast.fire({
          icon: "error",
          title: error.message
        });
      }
    }

  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300 flex flex-col h-full">
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-red-500 mb-2">
          {movie?.title || 'Sin título'}
        </h3>

        <p className="text-sm text-gray-400 mb-5 line-clamp-2">
          {movie?.description || 'No hay descripción disponible'}
        </p>
        
        <div className="text-xs text-gray-500 mb-5 space-y-2">
          <div className="flex justify-between">
            <span>🎭 {movie.genre}</span>
            <span>📅 {movie.year}</span>
          </div>
          
          <div className="">
            👁️ {movie.views} vistas
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <button 
            onClick={() => navigate(`/movies/edit/${movie.id}`)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-1 rounded-lg transition cursor-pointer"
          >
            Editar
          </button>
          <button 
            onClick={handleDelete}
            className="flex-1 bg-red-600 hover:bg-red-700 py-1 rounded-lg transition cursor-pointer"
          >
            Eliminar
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MovieCard;