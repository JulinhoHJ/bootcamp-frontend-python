import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App