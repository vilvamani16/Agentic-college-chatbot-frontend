import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Minus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { sendMessage } from "../../services/chat.service";
import "./index.css";

const quickQuestions = [
  "What courses do you offer?",
  "Tell me about placements",
  "What is the fee structure?",
  "How to apply for admissions?",
];

export default function ChatDrawer({ open, onClose }) {
  const { user } = useAuth();

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi ${
        user?.name?.split(" ")[0] || "there"
      }! I'm EduReach Bot. Ask me anything about courses, fees, admissions, or campus life.`,
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const messagesEndRef = useRef(null);

  // Start from 2 because initial message has id: 1
  const messageIdRef = useRef(2);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (text) => {
    const messageText = text || input.trim();

    if (!messageText || sending) return;

    const userMsg = {
      id: messageIdRef.current++,
      text: messageText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const data = await sendMessage(messageText);

      const botMsg = {
        id: messageIdRef.current++,
        text: data.message,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);

      const errorMsg = {
        id: messageIdRef.current++,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <div className="chat-drawer">

      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-bot-icon">
            <Bot />
          </div>

          <div>
            <h3>EduReach Bot</h3>
            <p>Ask me anything</p>
          </div>
        </div>

        <div className="chat-header-actions">
          <button onClick={onClose}>
            <Minus />
          </button>

          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-row ${
              msg.sender === "user"
                ? "user-message"
                : "bot-message"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="message-avatar bot-avatar">
                <Bot />
              </div>
            )}

            <div
              className={`message-bubble ${
                msg.sender === "user"
                  ? "user-bubble"
                  : "bot-bubble"
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === "user" && (
              <div className="message-avatar user-avatar">
                <User />
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {sending && (
          <div className="message-row bot-message">
            <div className="message-avatar bot-avatar">
              <Bot />
            </div>

            <div className="typing-bubble">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="quick-questions">
          <p>Quick questions:</p>

          <div className="quick-question-list">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            disabled={sending}
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || sending}
          >
            <Send />
          </button>
        </div>
      </div>

    </div>
  );
}