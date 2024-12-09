import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./DialogPage.module.css";

const DialogPage = () => {
  const { username } = useParams(); 
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "Alice" },
    { text: "Hi there!", sender: "Me" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "Me" }]);
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
            className={msg.sender === "Me" ? s.myMessage : s.theirMessage}
          >
            <strong>{msg.sender}: </strong>
            {msg.text}
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
