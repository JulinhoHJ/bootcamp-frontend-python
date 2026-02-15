import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useMovieStore } from "../store/movieStore";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, updateMovie } = useMovieStore();

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

    await updateMovie(id, {
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
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditMovie;