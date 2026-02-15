import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  if (user) {
    return <Navigate to="/movies" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;