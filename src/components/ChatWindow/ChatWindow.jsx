import "./ChatWindow.css";
import MessageItem from "../MessageItem/MessageItem";

function ChatWindow() {
  const messages = [
    { id: 1, text: "Hola", sender: "other" },
    { id: 2, text: "Qué onda?", sender: "me" },
    { id: 3, text: "Todo bien", sender: "other" },
  ];

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <MessageItem
          key={msg.id}
          text={msg.text}
          sender={msg.sender}
        />
      ))}
    </div>
  );
}

export default ChatWindow;