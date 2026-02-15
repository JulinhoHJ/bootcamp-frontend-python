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
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">✏ Editar Película</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="views"
          type="number"
          value={form.views}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer w-full p-2 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Actualizando..." : "Actualizar"}
        </button>

      </form>
    </div>
  );
};

export default EditMovie;