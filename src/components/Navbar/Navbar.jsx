import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {User, MessageCircle, Tv, Music, Settings} from "react-feather";

const setActive = ({ isActive }) => isActive ? s.active : '';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <NavLink to='/profile' className={setActive}>
                        <i className={s.bgBlueGradiant}><User/></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={setActive}>
                        <i className={s.bgOrangeGradiant}><MessageCircle /></i>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={setActive}>
                        <i className={s.bgGoldGradiant}>
                            <Tv/>
                        </i>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={setActive}>
                        <i className={s.bgPinkGradiant}>
                            <Music/>
                        </i>
                        <span>Music</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={setActive}>
                        <i className={s.bgPrimaryGradiant}>
                            <Settings/>
                        </i>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
            <Friends friends={props.navbar.friends}/>
        </nav>
    );
};

export default Navbar;