import s from './Users.module.css'
import {UserMinus, UserPlus} from "react-feather";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../api/api";

const User = (props) => {
    const {user, toggleFollow} = props;

    const onFollowBtn = async () => {
        let data = user.followed ? await usersApi.unfollow(user.id) : await usersApi.follow(user.id);

        if (!data.resultCode) { toggleFollow(user.id); }
    }

    return (
        <li className={s.user}>
            <NavLink to={'/profile/' + user.id}>
                <img className={s.avatar} src={user.photos.small ? user.photos.small : userPhoto} alt="User avatar"/>
            </NavLink>
            <h3 className={s.name}>{user.name}</h3>
            <span className={s.status}>{user.status}</span>
            <button onClick={onFollowBtn} className={`${s.followBtn} ${user.followed ? s.unfollow : s.follow}`}>
                {user.followed ? <UserMinus/> : <UserPlus/>}
                <span>{user.followed ? 'Unfollow' : 'Follow'}</span>
            </button>
        </li>
    );
};

export default User;