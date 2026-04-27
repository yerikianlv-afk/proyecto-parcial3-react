import "./ProfileHeader.css";

const ProfileHeader = ({ 
  nombre, 
  username, 
  bio, 
  avatar, 
  seguidores, 
  siguiendo,
  publicaciones,
  esMiPerfil,
  onEditarPerfil,
  onConfiguracion
}) => {
  return (
    <div className="profile-header">
      <div className="profile-header__portada"></div>
      
      <div className="profile-header__contenido">
        <div className="profile-header__avatar">
          {avatar ? (
            <img src={avatar} alt={nombre} />
          ) : (
            <div className="profile-header__avatar-placeholder">
              {nombre?.charAt(0) || username?.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="profile-header__info">
          <div className="profile-header__principal">
            <div>
              <h1 className="profile-header__nombre">{nombre}</h1>
              <p className="profile-header__username">@{username}</p>
            </div>
            
            {esMiPerfil ? (
              <div className="profile-header__acciones">
                <button className="profile-header__btn" onClick={onEditarPerfil}>
                  Editar perfil
                </button>
                <button className="profile-header__btn" onClick={onConfiguracion}>
                  Configuracion
                </button>
              </div>
            ) : (
              <button className="profile-header__btn profile-header__btn--seguir">
                Seguir
              </button>
            )}
          </div>
          
          {bio && <p className="profile-header__bio">{bio}</p>}
          
          <div className="profile-header__estadisticas">
            <div className="profile-header__estadistica">
              <span className="profile-header__estadistica-valor">{publicaciones}</span>
              <span className="profile-header__estadistica-label">Publicaciones</span>
            </div>
            <div className="profile-header__estadistica">
              <span className="profile-header__estadistica-valor">{seguidores}</span>
              <span className="profile-header__estadistica-label">Seguidores</span>
            </div>
            <div className="profile-header__estadistica">
              <span className="profile-header__estadistica-valor">{siguiendo}</span>
              <span className="profile-header__estadistica-label">Siguiendo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;