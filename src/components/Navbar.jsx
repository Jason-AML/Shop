import { Carrito } from "./Carrito";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";
export const Navbar = () => {
  const { user } = useAuth();
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
          <ul
            className="navbar-nav ms-auto gap-5 px-1"
            style={{ display: "flex", alignItems: "center" }}
          >
            <li className="links">
              <NavLink to="/">Home</NavLink>
            </li>
            {!user && (
              <>
                <li className="links">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="links">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="links">
                  <NavLink to="#">Productos</NavLink>
                </li>
                <li className="links">
                  <NavLink to="#">Vender</NavLink>
                </li>
                <li className="nav-item">
                  <Carrito />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
