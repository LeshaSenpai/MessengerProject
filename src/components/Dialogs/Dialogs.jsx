import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

const Message = ({ message }) => {
    return <div className={s.message}>{message}</div>;
};

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ];

    const messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(dialog => (
                    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                ))}
            </div>
            <div className={s.messages}>
                {messagesData.map(message => (
                    <Message key={message.id} message={message.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
