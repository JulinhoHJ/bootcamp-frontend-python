import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useMovieStore } from "../store/movieStore";
import Swal from "sweetalert2";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, updateMovie, loading } = useMovieStore();

  const movieToEdit = movies.find((movie) => movie.id === id);

  const [form, setForm] = useState(() => {
    if (!movieToEdit) {
      return {
        title: "",
        description: "",
        genre: "",
        year: "",
        views: "",
      };
    }

    return {
      title: movieToEdit.title || "",
      description: movieToEdit.description || "",
      genre: movieToEdit.genre || "",
      year: movieToEdit.year || "",
      views: movieToEdit.views || "",
    };
  });

  if (!movieToEdit) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();

    if (!form.title.trim() || form.title.length < 2) {
      return Swal.fire("Error", "El título debe tener al menos 2 caracteres", "error");
    }

    if (!form.description.trim() || form.description.length < 10) {
      return Swal.fire("Error", "La descripción debe tener mínimo 10 caracteres", "error");
    }

    if (!form.genre.trim()) {
      return Swal.fire("Error", "El género es obligatorio", "error");
    }

    if (form.year < 1900 || form.year > currentYear) {
      return Swal.fire("Error", "Año inválido", "error");
    }

    if (form.views < 0) {
      return Swal.fire("Error", "Las vistas no pueden ser negativas", "error");
    }

    try {

      await updateMovie(id, {
        ...form,
        year: Number(form.year),
        views: Number(form.views),
      });

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
        title: "Película actualizada 🎬"
      });

      navigate("/movies");
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-xl 
                      bg-zinc-900 border border-zinc-800 
                      rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white mb-3 text-center">
          ✏ Editar Película
        </h2>

        <p className="text-gray-400 mb-6">
          Modifica la información de esta película.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 
                      rounded-lg text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-500
                      transition"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 
                      rounded-lg text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-500
                      transition resize-none"
          />

          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 
                      rounded-lg text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-500
                      transition"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="year"
              type="number"
              value={form.year}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 
                        rounded-lg text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-red-500
                        transition"
            />

            <input
              name="views"
              type="number"
              value={form.views}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 
                        rounded-lg text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-red-500
                        transition"
            />
          </div>

          <div className="flex gap-4 pt-4">

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold 
              ${
                loading
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 duration-300 cursor-pointer"
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Actualizando...
                </div>
              ) : (
                "Actualizar"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/movies")}
              className="w-full py-3 rounded-lg font-semibold 
                        bg-zinc-800 border border-zinc-700
                        hover:bg-zinc-700 duration-300 cursor-pointer"
            >
              Regresar
            </button>

          </div>

        </form>
      </div>

    </div>

  );
};

export default EditMovie;