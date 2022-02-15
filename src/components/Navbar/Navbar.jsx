import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const setActive = ({ isActive }) => isActive ? s.active : '';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <NavLink to='/profile' className={setActive}>
                        <i className={s.bgPrimaryGradiant + ' ' + s.profileIcon}></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={setActive}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={setActive}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={setActive}>Settings</NavLink>
                </li>
            </ul>
            <Friends friends={props.state.Friends}/>
        </nav>
    );
};

export default Navbar;