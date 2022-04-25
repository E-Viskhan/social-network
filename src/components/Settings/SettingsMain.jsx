import s from './Settings.module.sass'
import '../../assets/styles/gradients.sass';
import { NavLink, Route, Routes } from "react-router-dom";
import { ArrowRight, Home, Twitter } from "react-feather";
import Account from "./Account/Account";
import Social from "./Social/Social";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SettingsItem = ({ Icon, iconBg, path, children }) => (
    <li><NavLink to={'/settings/' + path}>
        <i className={iconBg}><Icon/></i>
        <span>{children}</span>
        <ArrowRight className={s.arrow}/>
    </NavLink></li>
);

const Settings = props => (
    <div className={s.container}>
        <h2>Settings</h2>
        <div className={s.general}>General</div>
        <ul>
            <SettingsItem Icon={Home} iconBg='bgPrimaryGradiant' path='account'>Account Information</SettingsItem>
            <SettingsItem Icon={Twitter} iconBg='bgGoldGradiant' path='social'>Social Network</SettingsItem>
        </ul>
    </div>
);

const SettingsMain = props => {
    const isAuth = useSelector(state => state.auth.isAuth);

    if (!isAuth) return <Navigate to='/login'/>

    return <div className={s.settings}>
        <Routes>
            <Route path='' element={<Settings/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/social' element={<Social/>}/>
        </Routes>
    </div>;
};

export default SettingsMain;