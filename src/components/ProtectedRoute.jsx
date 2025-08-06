import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <span>Cargando...</span>;
  }
  return user ? children : <Navigate to="/login" />;
};
