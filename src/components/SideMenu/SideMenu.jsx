import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {

  const menuItems = [
    { path: "/feed", label: "Inicio" },
    { path: "/explorar", label: "Explorar" },
    { path: "/perfil", label: "Perfil" },
    { path: "/mensajes", label: "Mensajes" },
    { path: "/usuarios", label: "Usuarios" }
  ];

  return (
    <div className="sidemenu">
      <h3 className="sidemenu__title">Menú</h3>

      <ul className="sidemenu__list">

        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="sidemenu__item"
            >
              {item.label}
            </NavLink>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SideMenu;