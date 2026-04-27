import { useState } from "react";
import "./AuthCard.css";

const AuthCard = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (usuario.trim() === "" || password.trim() === "") return;

    if (onLogin) {
      onLogin(usuario, password);
    }
  };

  return (
    <div className="authcard">
      <h2 className="authcard__title">Iniciar Sesión</h2>

      <input
        className="authcard__input"
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        className="authcard__input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="authcard__btn" onClick={handleSubmit}>
        Entrar
      </button>
    </div>
  );
};

export default AuthCard;