import Navbar from "../components/Navbar";
import "./Explorar.css";

function Explorar() {
  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Explorar</h1>
          <p>Buscar publicaciones y usuarios</p>
        </div>

        <div className="card">
          <input type="text" placeholder="Buscar..." />
          <button>Buscar</button>
        </div>

        <div className="card">
          <p>Resultados aparecerán aquí...</p>
        </div>
      </section>
    </>
  );
}

export default Explorar;