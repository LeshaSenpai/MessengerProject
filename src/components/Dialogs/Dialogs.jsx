import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={s.dialog}>{message}</div>;
};

const Dialogs = () => {
  const dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem key={d.id} id={d.id} name={d.name} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((m) => (
          <Message key={m.id} message={m.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
