import s from './../Dialogs.module.css';

const MessageItem = props => {
    return (
        <li className={`${s.message} ${props.message.isMyMessage ? s.outgoingMess : s.incomingMess}`}>
            {props.message.message}
        </li>
    );
};

export default MessageItem;