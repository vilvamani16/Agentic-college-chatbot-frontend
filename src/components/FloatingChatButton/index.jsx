
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import ChatDrawer from "../ChatDrawer";
import "./index.css";

export default function FloatingChatButton() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const handleClick = () => {
    if (user) {
      setChatOpen(!chatOpen);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Chat drawer */}
      <ChatDrawer
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Floating chat button */}
      <button
        onClick={handleClick}
        className={`floating-chat-button ${
          chatOpen ? "chat-open" : ""
        }`}
        title={
          user
            ? "Chat with EduReach Bot"
            : "Login to chat"
        }
      >
        <MessageCircle
          className={`chat-icon ${
            !chatOpen ? "chat-bounce" : ""
          }`}
        />
      </button>
    </>
  );
}
