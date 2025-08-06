import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`${email} se ha registrado correctamente`);
      console.log(email, password);
    } catch (error) {
      toast.error(`no se ha podido registrar`);
      console.log(error);
    }
  };
  return (
    <div>
      <h2>REGISTRO</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="" />
        <input
          type="email"
          placeholder="Ej: susan123@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
