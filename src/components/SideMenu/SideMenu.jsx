import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <h3 className="sidemenu__title">Menú</h3>

      <ul className="sidemenu__list">
        <li>
          <NavLink to="/feed" className="sidemenu__item">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/explorar" className="sidemenu__item">
            Explorar
          </NavLink>
        </li>
        <li>
          <NavLink to="/perfil" className="sidemenu__item">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/mensajes" className="sidemenu__item">
            Mensajes
          </NavLink>

          <Link to="/usuarios"> Usuarios </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;