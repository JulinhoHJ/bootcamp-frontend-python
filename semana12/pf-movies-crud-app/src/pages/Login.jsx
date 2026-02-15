import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import Swal from 'sweetalert2';

const Login = () => {
  const { login, error, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        icon: "warning",
        title: "Campos requeridos",
        text: "Debes ingresar email y contraseña",
      });
      return;
    }

    try {
      await login(form.email, form.password);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido 🎬"
      });

      navigate("/movies");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md 
                      bg-zinc-900 border border-zinc-800 
                      rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          MovieApp
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Inicia sesión para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 
                      rounded-lg text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-500
                      transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 
                      rounded-lg text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-500
                      transition"
          />

          {error && (
            <div className="bg-red-900/40 border border-red-700 
                            text-red-400 text-sm p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold 
            ${
              loading
                ? "bg-zinc-700 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 duration-300 cursor-pointer"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Ingresando...
              </div>
            ) : (
              "Ingresar"
            )}
          </button>

          <p className="text-sm text-gray-400 text-center pt-4">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-red-500 hover:text-red-400 duration-300 font-medium"
            >
              Regístrate
            </Link>
          </p>

        </form>
      </div>

    </div>

  );
};

export default Login;