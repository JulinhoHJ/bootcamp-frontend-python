import { create } from "zustand";
import { supabase } from "../lib/supabase";
import { getMovies } from "../services/movies";

export const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,

  clearMovies: () => set({ movies: [] }),
  
  fetchMovies: async () => {
    set({ loading: true, error: null });
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuario no autenticado");
      
      const movies = await getMovies(user.id);
      set({ movies: movies || [] });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  
  createMovie: async (movieData) => {
    set({ loading: true });
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("No hay sesión activa");

      const { data, error } = await supabase
        .from("movies")
        .insert([{ ...movieData, user_id: session.user.id }])
        .select();
      
      if (error) throw error;

      set((state) => ({ movies: [...state.movies, data[0]], loading: false }));
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  
  updateMovie: async (id, movieData) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from("movies")
        .update(movieData)
        .eq("id", id)
        .select();

      if (error) throw error;

      set((state) => ({
        movies: state.movies.map(m => m.id === id ? data[0] : m),
        loading: false
      }));
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  deleteMovie: async (id) => {
    set({ loading: true });
    try {
      const { error } = await supabase
        .from("movies")
        .delete()
        .eq("id", id);
      
      if (error) throw error;

      set((state) => ({
        movies: state.movies.filter(m => m.id !== id),
        loading: false
      }));
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
}));