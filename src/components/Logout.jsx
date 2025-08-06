import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { toast } from "react-toastify";

export const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    toast.success(`Vuelve pronto`);
  };
  return <button onClick={handleLogout}>Cerrar sesión</button>;
};
