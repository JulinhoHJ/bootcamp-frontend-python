import { create } from "zustand";
import { supabase } from "../lib/supabase";

export const useMovieStore = create((set, get) => ({
  movies: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true });
    const user = supabase.auth.getUser();

    const { data, error } = await supabase
      .from("movies")
      .select("*")
      .eq("user_id", (await user).data.user?.id);

    if (error) {
      set({ error: error.message });
    } else {
      set({ movies: data });
    }
    set({ loading: false });
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