import { useNavigate } from "react-router";
import { useMovieStore } from "../store/movieStore";
import Swal from "sweetalert2";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { deleteMovie } = useMovieStore();

  const handleDelete = async () => {
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

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Película eliminada 🎬"
        });
      } catch (error) {
        //Swal.fire("Error", error.message, "error");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: error.message
        });
      }
    }

  };

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border border-zinc-800">
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-400 mb-5 line-clamp-2">
          {movie.description}
        </p>

        <div className="flex justify-between text-xs text-gray-500 mb-5">
          <span>🎭 {movie.genre}</span>
          <span>📅 {movie.year}</span>
        </div>
        
        <div className="text-xs text-gray-500 mb-5">
          👁️ {movie.views} vistas
        </div>

        <div className="flex gap-2">
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