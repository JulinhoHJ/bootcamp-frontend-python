import { useMovieStore } from "../store/movieStore";
import { useEffect } from "react";

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

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    loading,
    error,
    createMovie,
    updateMovie,
    deleteMovie,
  };
};