import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useMovieStore } from "../store/movieStore";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";
import { toast } from "../utils/alerts";

const MovieForm = ({ initialData, onSubmit, loading, onCancel }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => onSubmit(e, form)} className="space-y-4">
      
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500"
      />
      
      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        rows="3"
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500 resize-none"
      />

      <input
        name="genre"
        placeholder="Género"
        value={form.genre}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-800 border border-zinc-700 
                  rounded-lg text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  transition"
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            name="year"
            placeholder="Año"
            type="number"
            value={form.year}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none"
          />
        </div>
        <div>
          <input
            name="views"
            placeholder="Vistas"
            type="number"
            value={form.views}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 disabled:bg-zinc-700 text-white cursor-pointer"
        >
          {loading ? "Actualizando..." : "Actualizar"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full py-3 rounded-lg font-semibold bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white cursor-pointer"
        >
          Regresar
        </button>
      </div>
    </form>
  );
};

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, updateMovie, loading, fetchMovies } = useMovieStore();

  const movieToEdit = movies.find((m) => m.id === id);

  useEffect(() => {
    if (movies.length === 0) fetchMovies();
  }, [fetchMovies, movies.length]);

  if (loading && !movieToEdit) return <Spinner fullScreen />;
  if (!movieToEdit) return <p className="text-center mt-10 text-white">Película no encontrada</p>;

  const handleUpdate = async (e, formData) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();

    if (!formData.title.trim() || formData.title.length < 2) {
      return Swal.fire("Error", "El título debe tener al menos 2 caracteres", "error");
    }

    if (!formData.description.trim() || formData.description.length < 10) {
      return Swal.fire("Error", "La descripción debe tener mínimo 10 caracteres", "error");
    }

    if (!formData.genre.trim()) {
      return Swal.fire("Error", "El género es obligatorio", "error");
    }

    if (formData.year < 1900 || formData.year > currentYear) {
      return Swal.fire("Error", "Año inválido", "error");
    }

    if (formData.views < 0) {
      return Swal.fire("Error", "Las vistas no pueden ser negativas", "error");
    }

    try {
      await updateMovie(id, {
        ...formData,
        year: Number(formData.year),
        views: Number(formData.views),
      });
      toast.fire({
        icon: "success",
        title: "Película actualizada 🎬"
      });
      navigate("/movies");
    } catch (error) {
      toast.fire({
        icon: "error",
        title: error.message
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">✏ Editar Película</h2>
        <p className="text-gray-400 mb-6">
          Modifica la información de esta película.
        </p>
        
        <MovieForm 
          key={movieToEdit.id} 
          initialData={movieToEdit} 
          onSubmit={handleUpdate}
          loading={loading}
          onCancel={() => navigate("/movies")}
        />
      </div>
    </div>
  );
};

export default EditMovie;