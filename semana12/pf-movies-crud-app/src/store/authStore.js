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

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      set({ loading: false });
      throw new Error(error.message);
    }

    set({ user: data.user, loading: false });
  },

  login: async (email, password) => {
    set({ loading: true, error: null });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      set({ loading: false });
      throw new Error(error.message);
    }

    set({ user: data.user, loading: false });
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
    useMovieStore.getState().clearMovies();
  },

  checkSession: async () => {
    try {
      const { data } = await supabase.auth.getSession();
      set({ user: data.session?.user || null });
    } finally {
      set({ initializing: false });
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user || null });
    });
  },
}));