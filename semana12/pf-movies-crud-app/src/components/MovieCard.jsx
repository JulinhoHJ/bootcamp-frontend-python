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
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{movie.title}</h2>

      <p className="text-gray-600 text-sm mb-2">
        {movie.description}
      </p>

      <div className="text-sm text-gray-500 mb-3">
        🎭 {movie.genre} | 📅 {movie.year}
      </div>

      <div className="text-sm text-gray-400 mb-4">
        👁 {movie.views} vistas
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/movies/edit/${movie.id}`)}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          Editar
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default MovieCard;