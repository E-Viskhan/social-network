import s from './SettingsTitle.module.sass';
import { ArrowLeft } from "react-feather";
import { NavLink } from "react-router-dom";

const SettingsTitle = ({ children }) => (
    <div className={s.container}>
        <NavLink to='/settings' className={s.goSettings} title='Go to Settings'><ArrowLeft/></NavLink>
        <h2>{children}</h2>
    </div>
);

export default SettingsTitle;
