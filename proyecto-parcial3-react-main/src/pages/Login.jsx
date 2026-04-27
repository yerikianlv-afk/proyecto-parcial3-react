import React, { useState } from "react";
import "./Login.css"; 

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Usuario:", usuario);
    console.log("Password:", password);

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Iniciar Sesión</h1>
        <p>Accede a tu cuenta</p>

        <label>Usuario</label>
        <input
          type="text"
          placeholder="Escribe tu usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Escribe tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}