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
    initializing,
  } = useAuthStore();

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkSession,
    initializing,
  };
};