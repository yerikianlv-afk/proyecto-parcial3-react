import "./MessageItem.css";

function MessageItem({ text, sender, hora }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-text">{text}</div>
      <span className="message-time">{hora}</span>
    </div>
  );
}

export default MessageItem;