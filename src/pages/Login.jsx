import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard/AuthCard";
import "./Login.css";

const usuarios = [
  { user: "yerik", pass: "1234" },
  { user: "carlos", pass: "1234" },
  { user: "christian", pass: "1234" }
];

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (usuario, password) => {
    const encontrado = usuarios.find(
      u => u.user === usuario && u.pass === password
    );

    if (!encontrado) {
      alert("Usuario incorrecto");
      return;
    }

    localStorage.setItem("usuarioActivo", JSON.stringify(encontrado));

    navigate("/feed");
  };

  return (
    <div className="login-container">
      <AuthCard onLogin={handleLogin} />
    </div>
  );
}