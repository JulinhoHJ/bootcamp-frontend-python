import { supabase } from "../lib/supabase"

export const fetchMovies = async () => {
  const response = await supabase.from('movies').select('*')

  return response.data
}