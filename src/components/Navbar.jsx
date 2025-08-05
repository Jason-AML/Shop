import { Carrito } from "./Carrito";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid container-nav">
        <a className="navbar-brand" href="#">
          Shopping
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {" "}
            {/* ← aquí el cambio */}
            <li className="nav-item">
              <Carrito />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
