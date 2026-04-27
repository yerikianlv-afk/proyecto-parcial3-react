import "./MessageItem.css";

function MessageItem({ text, sender }) {
  return (
    <div className={`message ${sender === "me" ? "me" : "other"}`}>
      <p>{text}</p>
    </div>
  );
}

export default MessageItem;