import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getInitialSession = async () => {
      const { data, _error } = await supabase.auth.getSession()

      setUser(data.session)
    }

    getInitialSession()
  }, [])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    const { _data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) throw error

    //console.log(data, data.session)

    //setUser(data?.session ?? null)
  }

  const logout = async () => {
    await supabase.auth.signOut()

    //setUser(null)
  }

  return {
    user,
    login,
    logout
  }
}