import { Navigate, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Movies from "../pages/Movies";
import CreateMovie from "../pages/CreateMovie";
import EditMovie from "../pages/EditMovie";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/new" element={<CreateMovie />} />
        <Route path="/movies/edit/:id" element={<EditMovie />} />
      </Route>

      <Route path="*" element={<Navigate to="/movies" />} />
    </Routes>
  );
};

export default AppRouter;