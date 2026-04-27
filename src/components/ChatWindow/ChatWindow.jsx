import { useState, useEffect } from "react";
import MessageItem from "../MessageItem/MessageItem";
import "./ChatWindow.css";

function ChatWindow({ chatActivo, usuarioActivo }) {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  if (!chatActivo || !usuarioActivo) return null;

  const chatKey =
    "chat_" +
    [usuarioActivo.user, chatActivo.username]
      .sort()
      .join("_");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(chatKey);
      setMensajes(stored ? JSON.parse(stored) : []);
    } catch (e) {
      setMensajes([]);
    }
  }, [chatKey]);

  const enviarMensaje = () => {
    if (!mensaje.trim()) return;

    const nuevo = {
      id: Date.now(),
      text: mensaje,
      sender: usuarioActivo.user,
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMensajes(prev => {
      const updated = [...prev, nuevo];

      try {
        localStorage.setItem(chatKey, JSON.stringify(updated));
      } catch (e) {
        console.error("Error guardando chat:", e);
      }

      return updated;
    });

    setMensaje("");
  };

  return (
    <div className="chat-window">
      <h3>Chat con {chatActivo.username}</h3>

      <div className="chat-messages">
        {mensajes.map(msg => (
          <MessageItem
            key={msg.id}
            text={msg.text}
            hora={msg.hora}
            sender={msg.sender === usuarioActivo.user ? "me" : "other"}
          />
        ))}
      </div>

      <div className="chat-input">
        <input
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe..."
        />

        <button onClick={enviarMensaje}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;