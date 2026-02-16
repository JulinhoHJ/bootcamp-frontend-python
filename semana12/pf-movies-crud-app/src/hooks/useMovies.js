import { useEffect } from "react";
import { useMovieStore } from "../store/movieStore";
import { useShallow } from "zustand/react/shallow";

export const useMovies = () => {
  const {
    movies,
    loading,
    error,
    fetchMovies,
    createMovie,
    updateMovie,
    deleteMovie,
  } = useMovieStore(
    useShallow((state) => ({
      movies: state.movies,
      loading: state.loading,
      error: state.error,
      fetchMovies: state.fetchMovies,
      createMovie: state.createMovie,
      updateMovie: state.updateMovie,
      deleteMovie: state.deleteMovie,
    }))
  );
  
  useEffect(() => {
    if (movies.length === 0 && !loading) {
      fetchMovies();
    }
  }, [movies.length, loading, fetchMovies]);

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