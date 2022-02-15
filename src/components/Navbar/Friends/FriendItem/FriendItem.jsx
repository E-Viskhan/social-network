import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src={props.friend.avatarUrl}/>
            <span className={s.name}>{props.friend.name}</span>
        </div>
    );
}

export default FriendItem;