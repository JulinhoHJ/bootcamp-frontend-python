import { supabase } from "../lib/supabase";

export const getMovies = async (userId) => {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};
