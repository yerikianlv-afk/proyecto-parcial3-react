import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";

function ChatPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ChatList />
      <ChatWindow />
    </div>
  );
}

export default ChatPage;