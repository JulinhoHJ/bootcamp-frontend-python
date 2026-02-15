import { create } from "zustand";
import { supabase } from "../lib/supabase";
import { getMovies } from "../services/movies";

export const useMovieStore = create((set, get) => ({
  movies: [],
  loading: false,
  error: null,

  clearMovies: () => set({ movies: [] }),
  
  fetchMovies: async (userId) => {
    set({ loading: true, error: null, movies: [] });
    
    try {
      if (!userId) throw new Error("Usuario no autenticado");
      /* const { data } = await supabase.auth.getUser();
      const userId = data.user?.id; */
      
      
      const movies = await getMovies(userId);
      
      set({ movies });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  
  createMovie: async (movieData) => {
    set({ loading: true, error: null });

    const { data: { session }, error: sessionError } =
      await supabase.auth.getSession();
      
      if (sessionError || !session?.user?.id) {
        set({ loading: false });
        throw new Error("Usuario no autenticado");
      }
      
      const userId = session.user.id;

      const { data, error } = await supabase
      .from("movies")
      .insert([{ ...movieData, user_id: userId }])
      .select();
      
      if (error) {
        set({ loading: false });
        throw new Error(error.message);
      }
      
      if (!data || data.length === 0) {
        set({ loading: false });
        throw new Error("No autorizado para crear película");
      }

    await get().fetchMovies();

    set({ loading: false });
  },
  
  updateMovie: async (id, movieData) => {
    set({ loading: true, error: null });
    
    const { data, error } = await supabase
    .from("movies")
      .update(movieData)
      .eq("id", id)
      .select();

    if (error) {
      set({ loading: false });
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      set({ loading: false });
      throw new Error("No autorizado para actualizar esta película");
    }
    
    await get().fetchMovies();

    set({ loading: false });
  },

  deleteMovie: async (id) => {
    set({ loading: true, error: null });
    
    const { data, error } = await supabase
    .from("movies")
    .delete()
    .eq("id", id)
    .select();
    
    if (error) {
      set({ loading: false });
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      set({ loading: false });
      throw new Error("No autorizado para eliminar");
    }
    
    await get().fetchMovies();

    set({ loading: false });
  },

}));