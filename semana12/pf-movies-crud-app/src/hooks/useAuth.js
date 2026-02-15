import { useAuthStore } from "../store/authStore";

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

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkSession,
  };
};