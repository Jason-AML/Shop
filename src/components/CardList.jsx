import { fetchProductos } from "../hooks/fetchProductos";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";
export const CardList = () => {
  const { agregarAlCarrito } = useCarrito();
  const { producto, error } = fetchProductos();
  if (error) {
    return <p>Error al cargar productos</p>;
  }
  if (producto.length === 0) {
    return <p>Cargando...</p>;
  }
  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    toast.success(`${producto.title} agregado al carrito!`);
  };
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 gx-4 gy-4">
        {producto.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title" style={{ minHeight: "48px" }}>
                  {producto.title}
                </h5>
              </div>
              <div className="card-footer d-flex flex-column ">
                <p className="card-text fw-bold">${producto.price}</p>
                <button
                  className="btn btn-primary "
                  onClick={() => handleAgregar(producto)}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
