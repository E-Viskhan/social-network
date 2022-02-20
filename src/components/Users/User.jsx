import s from './Users.module.css'
import {UserMinus, UserPlus} from "react-feather";

const User = (props) => {
    return (
        <li className={s.user}>
            <img className={s.avatar} src={props.user.avatarUrl} alt="User avatar"/>
            <h3 className={s.name}>{props.user.fullName}</h3>
            <span className={s.status}>{props.user.status}</span>
            <button
                onClick={() => props.toggleFollow(props.user.id)}
                className={`${s.followBtn} ${props.user.followed ? s.unfollow : s.follow}`}
            >
                {props.user.followed ? <UserMinus/> : <UserPlus/>}
                <span>{props.user.followed ? 'Unfollow' : 'Follow'}</span>
            </button>
        </li>
    );
};

export default User;