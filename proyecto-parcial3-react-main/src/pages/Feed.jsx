import "./Feed.css";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Feed = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const agregarPost = () => {
    if (mensaje.trim() === "") return;

    const nuevoPost = {
      id: Date.now(),
      autor: "Usuario",
      contenido: mensaje,
      fecha: new Date().toLocaleString()
    };

    setPublicaciones([nuevoPost, ...publicaciones]);
    setMensaje("");
  };

  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Inicio</h1>
          <p>Publicaciones recientes</p>
        </div>

        <div className="card">
          <input
            type="text"
            placeholder="Escribe algo..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <button onClick={agregarPost}>
            Publicar
          </button>
        </div>

        <div className="grid-cards">
          {publicaciones.length === 0 ? (
            <p>No hay publicaciones aún</p>
          ) : (
            publicaciones.map((post) => (
              <div key={post.id} className="card">
                <h3>{post.autor}</h3>
                <p>{post.contenido}</p>
                <small>{post.fecha}</small>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Feed;