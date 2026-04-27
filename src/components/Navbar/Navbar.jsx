import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  const logout = () => {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "/";
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        <h2 className="navbar__brand">MiniRed</h2>

        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li><NavLink to="/feed">Inicio</NavLink></li>
            <li><NavLink to="/explorar">Explorar</NavLink></li>
            <li><NavLink to="/perfil">Perfil</NavLink></li>
            <li><NavLink to="/mensajes">Mensajes</NavLink></li>
          </ul>
        </nav>

        <div className="navbar__user">
          <div className="navbar__avatar">
            {usuario?.user?.charAt(0).toUpperCase()}
          </div>

          <span>{usuario?.user}</span>

          <button onClick={logout}>Salir</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;