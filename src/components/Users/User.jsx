import s from './Users.module.css'
import {UserMinus, UserPlus} from "react-feather";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <li className={s.user}>
            <NavLink to={'/profile/' + props.user.id}>
                <img className={s.avatar} src={props.user.photos.small ? props.user.photos.small : userPhoto} alt="User avatar"/>
            </NavLink>
            <h3 className={s.name}>{props.user.name}</h3>
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