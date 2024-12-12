import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./DialogPage.module.css";
import { messagesAPI } from "../../Users/MessageAPI";

const DialogPage = () => {
  const { username } = useParams(); 
  const userMessages = messagesAPI.filter((msg) => msg.username === username);

  const [messages, setMessages] = useState(userMessages); 
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = { username: "Me", message: newMessage };
      setMessages([...messages, newMsg]); 
      setNewMessage("");
    }
  };

  return (
    <div className={s.dialogPage}>
      <h2>Chat with {username}</h2>
      <div className={s.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.username === "Me" ? s.myMessage : s.theirMessage}
          >
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <div className={s.inputArea}>
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
