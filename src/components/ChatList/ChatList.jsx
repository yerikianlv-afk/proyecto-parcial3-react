import "./ChatList.css";

function ChatList() {
  const chats = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Pedro" },
  ];

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item">
          {chat.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;