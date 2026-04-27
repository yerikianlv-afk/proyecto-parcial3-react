import "./MessageItem.css";

function MessageItem({ text, sender, hora }) {
  return (
    <div className={`message ${sender === "me" ? "me" : "other"}`}>
      <p>{text}</p>
      <span className="hora">{hora}</span>
    </div>
  );
}

export default MessageItem;