import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>LinkNetwork</h2>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Quiénes Somos</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contáctenos</Link></li>
        <li><Link to="/gallery">Galería</Link></li>
      </ul>
    </nav>
  );
}
