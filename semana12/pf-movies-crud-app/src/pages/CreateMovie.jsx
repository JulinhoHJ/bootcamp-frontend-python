import { useState } from "react";
import { useMovieStore } from "../store/movieStore";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateMovie = () => {
  const navigate = useNavigate();
  const { createMovie, loading } = useMovieStore();

  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
    year: "",
    views: "",
  });

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
      await createMovie({
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
        title: "Película creada 🎬"
      });

      navigate("/movies");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">➕ Nueva Película</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <input
          name="title"
          placeholder="Título"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          name="description"
          placeholder="Descripción"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="genre"
          placeholder="Género"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="year"
          placeholder="Año"
          onChange={handleChange}
          type="number"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="views"
          placeholder="Vistas"
          onChange={handleChange}
          type="number"
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer w-full p-2 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>

      </form>
    </div>
  );
};

export default CreateMovie;