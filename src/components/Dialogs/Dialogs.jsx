import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ArrowRight} from "react-feather";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem dialog={d}/>)
    let messagesElements = props.messages.map(m => <Message message={m}/>)

    const onAddMessage = (e) => {
        e.preventDefault();
        props.addMessage();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <form onSubmit={onAddMessage}>
                    <input type="text"
                           placeholder='Start typing...'
                           value={props.newMessageText}
                           onChange={onMessageChange}
                    />
                    <button type="submit"><ArrowRight/></button>
                </form>
            </div>
        </div>
    );
};

export default Dialogs;