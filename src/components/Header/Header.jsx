import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth-reducer";

const Header = props => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();

    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {isAuth ?
                    <div> <span>{login}</span> - <button onClick={() => dispatch(logout())}>Logout</button> </div> :
                    <NavLink to='/login' className={s.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;