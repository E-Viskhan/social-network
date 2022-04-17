import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { Button } from "@mui/material";

const Header = props => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();

    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>
                        <span>{login} - </span>
                        <Button color='error' variant='contained' size='small'
                                onClick={() => dispatch(logout())}>Logout</Button>
                    </div>
                    : <NavLink to='/login' className={s.loginLink}>
                        <Button>Login</Button>
                    </NavLink>
                }
            </div>
        </header>
    );
};

export default Header;