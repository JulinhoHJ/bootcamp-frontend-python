import { useMovieStore } from "../store/movieStore";

export const useMovies = () => {
  const {
    movies,
    loading,
    error,
    fetchMovies,
    createMovie,
    updateMovie,
    deleteMovie,
  } = useMovieStore();

  return {
    movies,
    loading,
    error,
    fetchMovies,
    createMovie,
    updateMovie,
    deleteMovie,
  };
};