import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ArrowRight} from "react-feather";
import React from "react";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} dialog={d}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m}/>)

    const onAddMessage = (e) => {
        e.preventDefault();
        props.addMessage();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    if (!props.isAuth) return <Navigate to='/login'/>

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <form onSubmit={onAddMessage}>
                    <input type="text"
                           placeholder='Start typing...'
                           value={props.dialogsPage.newMessageText}
                           onChange={onMessageChange}
                    />
                    <button type="submit"><ArrowRight/></button>
                </form>
            </div>
        </div>
    );
};

export default Dialogs;