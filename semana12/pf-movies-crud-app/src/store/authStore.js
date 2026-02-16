import { create } from "zustand";
import { supabase } from "../lib/supabase";
import { useMovieStore } from "./movieStore";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  initializing: true,

  register: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      set({ user: data.user, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      set({ user: data.user, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await supabase.auth.signOut();
      set({ user: null, loading: false });
      useMovieStore.getState().clearMovies(); 
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  checkSession: async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      set({ user: session?.user || null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ initializing: false });
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user || null;
      set({ user: currentUser });
      
      if (!currentUser) {
        useMovieStore.getState().clearMovies();
      }
    });
  },
}));