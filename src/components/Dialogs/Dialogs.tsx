import React from "react";
import { observer } from "mobx-react-lite";
import "./Dialogs.css";
import { DialogsStore } from "../../stores/DialogsStore";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

interface DialogsProps {
  store: DialogsStore;
}

const Dialogs: React.FC<DialogsProps> = ({ store }) => {
  const dialogsElements = store.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  const messagesElements = store.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className="dialogs">
      <div className="dialogsItems">{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export default observer(Dialogs);