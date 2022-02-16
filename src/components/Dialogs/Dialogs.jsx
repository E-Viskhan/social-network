import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ArrowRight} from "react-feather";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem dialog={d}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m}/>)

    const newMessageElement = React.createRef();

    const addMessage = (e) => {
        e.preventDefault();
        const text = newMessageElement.current.value;
        alert(text)
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <form onSubmit={addMessage}>
                    <input ref={newMessageElement} type="text" placeholder='Start typing...'/>
                    <button type="submit"><ArrowRight/></button>
                </form>
            </div>
        </div>
    );
};

export default Dialogs;