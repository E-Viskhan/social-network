import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ArrowRight} from "react-feather";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem dialog={d}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m}/>)

    const newMessageElement = React.createRef();

    const addMessage = (e) => {
        e.preventDefault();
        const action = addMessageActionCreator();
        props.dispatch(action);
    };

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        const action = updateNewMessageTextActionCreator(text);
        props.dispatch(action)
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <form onSubmit={addMessage}>
                    <input ref={newMessageElement}
                           type="text"
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