import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DialogPage.css";
import { messagesAPI } from "../../Users/MessageAPI";

interface Message {
  username: string;
  message: string;
}

const DialogPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const userMessages = messagesAPI.filter((msg) => msg.username === username);

  const [messages, setMessages] = useState<Message[]>(userMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = { username: "Me", message: newMessage };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="dialogPage">
      <h2>Chat with {username}</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.username === "Me" ? "myMessage" : "theirMessage"}
          >
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="inputArea">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DialogPage;