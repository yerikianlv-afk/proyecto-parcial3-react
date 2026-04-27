import Navbar from "../components/Navbar/Navbar";
import "./Mensajes.css";

function Mensajes() {
  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Mensajes</h1>
          <p>Chats y conversaciones</p>
        </div>

        <div className="card">
          <p>No tienes mensajes nuevos</p>
        </div>

        <div className="card">
          <h3>Chat ejemplo</h3>
          <p>Último mensaje...</p>
        </div>
      </section>
    </>
  );
}

export default Mensajes;