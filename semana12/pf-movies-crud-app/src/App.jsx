import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

const App = () => {
  const { checkSession, initializing } = useAuth()

  useEffect(() => {
    checkSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initializing) {
    return <Spinner fullScreen />
  }

  return (
    <div className="min-h-screen bg-linear-to-b 
                    from-black via-zinc-900 to-black 
                    text-white">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App