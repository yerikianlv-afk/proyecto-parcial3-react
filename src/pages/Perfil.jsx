import Navbar from "../components/Navbar/Navbar";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import PostCard from "../components/PostCard/PostCard";
import "./Perfil.css";

function Perfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  const publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];

  const misPosts = publicaciones.filter(
    (p) => p.autor === usuario?.user
  );

  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Perfil</h1>
          <p>Información del usuario</p>
        </div>

        {/* Header completo */}
        <ProfileHeader
          nombre={usuario?.user}
          username={usuario?.user}
          bio="Este es mi perfil"
          seguidores={120}
          siguiendo={80}
          publicaciones={misPosts.length}
          esMiPerfil={true}
          onEditarPerfil={() => alert("Editar perfil")}
          onConfiguracion={() => alert("Configuración")}
        />

        {/* Publicaciones */}
        <div className="grid-cards">
          {misPosts.length === 0 ? (
            <p>No tienes publicaciones aún</p>
          ) : (
            misPosts.map((post) => (
              <PostCard
                key={post.id}
                usuario={post.autor}
                contenido={post.contenido}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Perfil;