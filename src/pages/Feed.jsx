import "./Feed.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import PostCard from "../components/PostCard/PostCard";
import SideMenu from "../components/SideMenu/SideMenu";

const Feed = () => {

  const [publicaciones, setPublicaciones] = useState(() => {
    const data = localStorage.getItem("publicaciones");
    return data ? JSON.parse(data) : [];
  });

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
  }, [publicaciones]);

  const agregarPost = () => {
    if (mensaje.trim() === "") return;

    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

    const nuevoPost = {
      id: Date.now(),
      autor: usuario ? usuario.user : "Usuario",
      contenido: mensaje,
      fecha: new Date().toLocaleString()
    };

    setPublicaciones([nuevoPost, ...publicaciones]);
    setMensaje("");
  };

  return (
    <>
      <Navbar />

      <div className="feed-layout">

        {/* 🔥 SIDEBAR (ESTO TE FALTABA) */}
        <aside className="feed-sidebar">
          <SideMenu />
        </aside>

        {/* CONTENIDO */}
        <section className="page feed-content">

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
                <PostCard
                  key={post.id}
                  usuario={post.autor}
                  contenido={post.contenido}
                />
              ))
            )}
          </div>

        </section>
      </div>
    </>
  );
};

export default Feed;