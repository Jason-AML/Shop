import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { toast } from "react-toastify";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`${email} Bienvenido`);
      console.log(email, password);
    } catch (error) {
      toast.error(`no se ha podido iniciar sesion`);
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Inicia sesion</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="" />
        <input
          type="email"
          placeholder="Ej: susan123@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};
