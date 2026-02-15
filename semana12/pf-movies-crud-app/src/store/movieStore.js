import { create } from "zustand";
import { supabase } from "../lib/supabase";
import { getMovies } from "../services/movies";

export const useMovieStore = create((set, get) => ({
  movies: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true, error: null });

    try {
      const { data } = await supabase.auth.getUser();
      const userId = data.user?.id;

      if (!userId) throw new Error("Usuario no autenticado");

      const movies = await getMovies(userId);

      set({ movies });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  createMovie: async (movieData) => {
  set({ loading: true });

  const user = await supabase.auth.getUser();

  const { error } = await supabase
    .from("movies")
    .insert([{ ...movieData, user_id: user.data.user.id }]);

  if (error) {
    set({ error: error.message, loading: false });
    return;
  }

  await get().fetchMovies();

  set({ loading: false });
  },

  updateMovie: async (id, movieData) => {
    set({ loading: true });

    const { error } = await supabase
      .from("movies")
      .update(movieData)
      .eq("id", id);

    if (error) {
      set({ error: error.message, loading: false });
      return;
    }

    await get().fetchMovies();

    set({ loading: false });
  },

  deleteMovie: async (id) => {
  set({ loading: true });

  const { error } = await supabase
    .from("movies")
    .delete()
    .eq("id", id);

  if (error) {
    set({ error: error.message, loading: false });
    return;
  }

  await get().fetchMovies();

  set({ loading: false });
  },

}));