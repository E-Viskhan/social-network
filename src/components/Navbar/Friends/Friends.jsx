import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    const friendsElements = props.friends.map(friend => <FriendItem key={friend.id} friend={friend}/>)

    return (
        <div className={s.friends}>
            <h3 className={s.friendsTitle}>Friends</h3>
            <div className={s.friendsWrapper}>{friendsElements}</div>
        </div>
    );
}

export default Friends;