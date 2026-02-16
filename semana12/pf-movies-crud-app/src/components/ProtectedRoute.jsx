import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Spinner from "./Spinner";

const ProtectedRoute = () => {
  const { user, initializing } = useAuth();

  if (initializing) return <Spinner fullScreen />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;