import React, { useState } from "react";
import "./Chatbot.css";
import Card from "./Card";

function ChatbotApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, type: "user" }]);
      // Implement chat logic here, process input, get response, and update messages state
      setInput("");
    }
  };
  const GetMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, type: "bot" }]);
      // Implement chat logic here, process input, get response, and update messages state
      setInput("");
    }
  };

  return (
    // <Card className="">
    <div className="chatbot-app">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={GetMessage}>Receive</button>
      </div>
    </div>
    // </Card>
  );
}

export default ChatbotApp;
