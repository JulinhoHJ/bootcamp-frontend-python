import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Spinner from "./Spinner";

const PublicRoute = () => {
  const { user, initializing } = useAuth();

  if (initializing) return <Spinner fullScreen />;

  if (user) {
    return <Navigate to="/movies" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;