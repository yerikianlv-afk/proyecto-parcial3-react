import "./AuthCard.css";

const AuthCard = () => {
    return (
        <div className="authcard">
            <h2 className="authcard__title">Iniciar Sesion</h2>
            <input className="authcard__input" type="text" placeholder="Usuario" />
            <input className="authcard__input" type="password" placeholder="Contraseña" />
            <button className="authcard__btn">Entrar</button>
        </div>
    );
};

export default AuthCard;