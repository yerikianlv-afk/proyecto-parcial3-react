import "./PostCard.css";

const PostCard = ({ usuario, contenido }) => {
    return (
        <div className="postcard">
            <div className="postcard__header">
                <span className="postcard__usuario">{usuario}</span>
            </div>
            <p className="postcard__contenido">{contenido}</p>
            <div className="postcard__acciones">
                <button className="postcard__btn">👍 Me gusta</button>
                <button className="postcard__btn">💬 Comentar</button>
            </div>
        </div>
    );
};

export default PostCard;