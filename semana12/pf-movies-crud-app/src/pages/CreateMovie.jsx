import { useState } from "react";
import { useMovieStore } from "../store/movieStore";
import { useNavigate } from "react-router";

const CreateMovie = () => {
  const navigate = useNavigate();
  const { createMovie } = useMovieStore();

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

    if (!form.title || !form.description || !form.genre) {
      return alert("Completa todos los campos requeridos 🔥");
    }

    await createMovie({
      title: form.title,
      description: form.description,
      genre: form.genre,
      year: Number(form.year),
      views: Number(form.views),
    });

    navigate("/movies");
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
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;