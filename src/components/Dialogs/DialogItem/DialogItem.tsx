import React from "react";
import { NavLink } from "react-router-dom";
import "../Dialogs.css";

interface DialogItemProps {
  id: number;
  name: string;
}

const DialogItem: React.FC<DialogItemProps> = ({ id, name }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className="dialog active">
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;