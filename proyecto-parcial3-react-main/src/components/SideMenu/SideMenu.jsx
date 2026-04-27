import "./SideMenu.css";

const SideMenu = () => {
    return (
        <div className="sidemenu">
            <h3 className="sidemenu__title">Menú</h3>
            <ul className="sidemenu__list">
                <li className="sidemenu__item">🏠 Inicio</li>
                <li className="sidemenu__item">🔍 Explorar</li>
                <li className="sidemenu__item">👤 Perfil</li>
                <li className="sidemenu__item">✉️ Mensajes</li>
            </ul>
        </div>
    );
};

export default SideMenu;