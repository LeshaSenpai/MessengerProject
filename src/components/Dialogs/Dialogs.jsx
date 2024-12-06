import React from "react";
import { observer } from "mobx-react-lite";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsStore} from "../../stores/DialogsStore";

const Dialogs = observer(() => {
  const dialogsElements = dialogsStore.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  const messagesElements = dialogsStore.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
});

export default Dialogs;
