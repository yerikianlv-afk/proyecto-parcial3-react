import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return(
        <header className="navbar">
            <div className="navbar__container">
                <h2 className="navbar__brand">MiniRed</h2>

                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        <li>
                            <NavLink to="/feed">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explorar">Explorar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil">Perfil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mensajes">Mensaje</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
