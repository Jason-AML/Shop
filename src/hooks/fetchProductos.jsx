import { useState, useEffect } from "react";

export const fetchProductos = () => {
  const [producto, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.log("error", err);
        setError(err);
      }
    };
    fetchData();
  }, []);
  return { producto, error };
};
