import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import "./Carrito.css";
export const Carrito = () => {
  const { carrito, agregarAlCarrito, quitarUnidad, eliminarProducto } =
    useCarrito();

  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  return (
    <div className="container-modal">
      {/* Botón para abrir el modal */}
      {!modalAbierto && (
        <button onClick={abrirModal} className="btn btn-primary ">
          Ver Carrito ({carrito.length})
        </button>
      )}

      {/* Modal */}
      {modalAbierto && (
        <div className="modal-backdrop-custom ">
          <div className="modal-dialog-custom">
            <div
              className="modal-body"
              style={{ maxHeight: "70dvh", overflowY: "auto" }}
            >
              {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
              ) : (
                <ul className="list-group">
                  {carrito.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.title}</strong>
                        <figure>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="image-modal"
                          />
                        </figure>
                        <br />${item.price.toFixed(2)} x {item.cantidad}
                      </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => quitarUnidad(item.id)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => agregarAlCarrito(item)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => eliminarProducto(item.id)}
                        >
                          🗑
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-footer">
              <strong>Total: ${total.toFixed(2)}</strong>
              <button onClick={cerrarModal} className="btn btn-secondary">
                Cerrar
              </button>
              <button className="btn btn-primary">Finalizar compra</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
