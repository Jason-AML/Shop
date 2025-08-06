import { useState, useEffect } from "react";

export const fetchProductos = () => {
  const [producto, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error("Error en la respuesta del servidor");

        const data = await res.json();
        setProductos(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log("Error:", err);
          setError(err);
        }
      }
    };

    fetchData();

    // Cancelar la petición si el componente se desmonta
    return () => {
      controller.abort();
    };
  }, []);
  return { producto, error };
};
