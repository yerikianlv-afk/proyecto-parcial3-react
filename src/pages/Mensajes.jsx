import Navbar from "../components/Navbar/Navbar";
import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import { useState, useEffect } from "react";
import "./Mensajes.css";

function Mensajes() {
  const [chatActivo, setChatActivo] = useState(null);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  useEffect(() => {
    const syncUser = () => {
      const user = JSON.parse(localStorage.getItem("usuarioActivo"));
      setUsuarioActivo(user);
    };

    syncUser();

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  if (!usuarioActivo) return <p>Inicia sesión</p>;

  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Mensajes</h1>
          <p>Chats y conversaciones</p>
        </div>

        <div className="mensajes-container">

          <ChatList onSelectChat={setChatActivo} />

          <div className="mensajes-chat">
            {chatActivo ? (
              <ChatWindow
                chatActivo={chatActivo}
                usuarioActivo={usuarioActivo}
              />
            ) : (
              <p className="mensajes-vacio">
                Selecciona un chat
              </p>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Mensajes;