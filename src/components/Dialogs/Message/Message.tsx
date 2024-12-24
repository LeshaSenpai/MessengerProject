import React from "react";
import "../Dialogs.css";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <div className="dialog">{message}</div>;
};

export default Message;