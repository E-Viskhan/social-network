import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { Button } from "@mui/material";
import DropDownMenu from "./DropDownMenu";

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {isAuth
                    ? <DropDownMenu login={login} logout={logout}/>
                    : <NavLink to='/login' className={s.loginLink}>
                        <Button>Login</Button>
                    </NavLink>
                }
            </div>
        </header>
    );
};

const HeaderMain = props => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();

    const headerProps = { isAuth, login, logout: () => dispatch(logout()) };

    return <Header {...headerProps}/>;
};

export default HeaderMain;