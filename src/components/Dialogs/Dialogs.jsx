import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import React from "react";
import MessageForm from "./MessageForm";
import { useSelector } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Dialogs = props => {
    const dialogs = useSelector(state => state.dialogs.dialogs);
    const messages = useSelector(state => state.dialogs.messages);
    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} dialog={d}/>)
    const messagesElements = messages.map(m => <MessageItem key={m.id} message={m}/>)

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>{dialogsElements}</ul>
            <div className={s.messagesBlock}>
                <ul className={s.messages}>{messagesElements}</ul>
                <MessageForm/>
            </div>
        </div>
    );
};

export default compose(
    withAuthRedirect
)(Dialogs);