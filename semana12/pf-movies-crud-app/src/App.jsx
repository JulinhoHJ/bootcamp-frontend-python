import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
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