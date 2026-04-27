import { useState } from "react";
import "./ChatList.css";

const usuarios = [
  { username: "yerik" },
  { username: "carlos" },
  { username: "christian" }
];

function ChatList({ onSelectChat }) {
  return (
    <div className="chat-list">
      {usuarios.map((user) => (
        <div
          key={user.username}
          className="chat-item"
          onClick={() => onSelectChat(user)}
        >
          {user.username}
        </div>
      ))}
    </div>
  );
}

export default ChatList;