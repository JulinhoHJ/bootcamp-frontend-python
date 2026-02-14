import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import LayoutBase from './layouts/LayoutBase.jsx'
import LayoutAdmin from './layouts/LayoutAdmin.jsx'
import MoviesPage from './pages/MoviesPage.jsx'

// TODO: Crear un layout solo para la ruta raiz(/) y el detalle de los personajes. Este Layout debe contener una navegación con titulo y algunos enlaces por ejemplo: Home, Login, Register

// TODO: Crear el componente LoginPage implementar el formulario login con supabase y cuando el usuario este autenticado redireccionarlo a la ruta raiz (/). Ayuda, usen el hook useNavigate para la redirección

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutBase />}>
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/register" element = {<RegisterPage />} />
      </Route>
      <Route element={<LayoutAdmin />}>
        <Route path="/" element = {<HomePage />} />
        <Route path="/characters/:id" element = {<CharacterPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
