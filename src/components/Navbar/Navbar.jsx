import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  const links = [
    { path: "/feed", label: "Inicio" },
    { path: "/explorar", label: "Explorar" },
    { path: "/perfil", label: "Perfil" },
    { path: "/mensajes", label: "Mensajes" }
  ];

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

            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}>
                  {link.label}
                </NavLink>
              </li>
            ))}

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