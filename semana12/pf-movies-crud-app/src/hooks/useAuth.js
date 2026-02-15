import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export const useAuth = () => {
  const {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkSession,
  } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
};