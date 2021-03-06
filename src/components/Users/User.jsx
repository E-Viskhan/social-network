import s from './Users.module.css'
import { UserMinus, UserPlus } from "react-feather";
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollow } from "../../redux/users-reducer";

const User = ({ user }) => {
        const dispatch = useDispatch();
        const followingInProgress = useSelector(state => state.usersPage.followingInProgress);

        const onFollowBtn = () => dispatch(toggleFollow(user.followed, user.id));

        return (
            <li className={s.user}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.avatar} src={user.photos.small ? user.photos.small : userPhoto} alt="User avatar"/>
                </NavLink>
                <h3 className={s.name}>{user.name}</h3>
                <span className={s.status}>{user.status}</span>
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={onFollowBtn}
                        className={`${s.followBtn} ${user.followed ? s.unfollow : s.follow}`}>
                    {user.followed ? <UserMinus/> : <UserPlus/>}
                    <span>{user.followed ? 'Unfollow' : 'Follow'}</span>
                </button>
            </li>
        );
    }
;

export default User;