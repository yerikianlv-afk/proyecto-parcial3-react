import Navbar from "../components/Navbar/Navbar";
import "./Perfil.css";

function Perfil() {
  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Perfil</h1>
          <p>Información del usuario</p>
        </div>

        <div className="card">
          <h3>Usuario</h3>
          <p>@usuario</p>
        </div>

        <div className="card">
          <p>Publicaciones del usuario aparecerán aquí</p>
        </div>
      </section>
    </>
  );
}

export default Perfil;