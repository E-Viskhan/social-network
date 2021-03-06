import s from './Navbar.module.css';
import '../../assets/styles/gradients.sass';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {User, MessageCircle, Tv, Music, Settings, Users} from "react-feather";

const setActive = ({ isActive }) => isActive ? s.active : '';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <NavLink to='/profile' className={setActive}>
                        <i className='bgBlueGradiant'><User/></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={setActive}>
                        <i className='bgOrangeGradiant'><MessageCircle /></i>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={setActive}>
                        <i className='bgGoldGradiant'>
                            <Tv/>
                        </i>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/users' className={setActive}>
                        <i className='bgGreenGradiant'>
                            <Users/>
                        </i>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={setActive}>
                        <i className='bgPinkGradiant'>
                            <Music/>
                        </i>
                        <span>Music</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={setActive}>
                        <i className='bgPrimaryGradiant'>
                            <Settings/>
                        </i>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
            <Friends/>
        </nav>
    );
};

export default Navbar;