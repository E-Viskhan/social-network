import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} dialog={d}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m}/>)

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <MessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;