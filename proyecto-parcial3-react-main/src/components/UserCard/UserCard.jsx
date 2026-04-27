import "./UserCard.css";

const UserCard = ({ username, nombre, avatar, seguidores, esAmigo, onFollow }) => {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {avatar ? (
          <img src={avatar} alt={username} />
        ) : (
          <div className="user-card__avatar-placeholder">
            {nombre?.charAt(0) || username?.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="user-card__info">
        <h4 className="user-card__nombre">{nombre || username}</h4>
        <p className="user-card__username">@{username}</p>
        <p className="user-card__seguidores">{seguidores} seguidores</p>
      </div>
      
      <div className="user-card__action">
        <button 
          className={`user-card__btn ${esAmigo ? "user-card__btn--siguiendo" : "user-card__btn--seguir"}`}
          onClick={onFollow}
        >
          {esAmigo ? "Siguiendo" : "Seguir"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;