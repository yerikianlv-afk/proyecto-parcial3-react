import { useState } from "react";
import "./PostCard.css";

const PostCard = ({ usuario, contenido }) => {
  const [likes, setLikes] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarComentario = () => {
    if (texto.trim() === "") return;

    setComentarios([...comentarios, texto]);
    setTexto("");
  };

  return (
    <div className="postcard">
      <div className="postcard__header">
        <span className="postcard__usuario">{usuario}</span>
      </div>

      <p className="postcard__contenido">{contenido}</p>

      <div className="postcard__acciones">
        <button onClick={() => setLikes(likes + 1)}>
          👍 {likes}
        </button>

        <button>
          💬 {comentarios.length}
        </button>
      </div>

      <div className="postcard__comentarios">
        {comentarios.map((c, i) => (
          <p key={i} className="postcard__comentario">{c}</p>
        ))}

        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button onClick={agregarComentario}>
          Comentar
        </button>
      </div>
    </div>
  );
};

export default PostCard;