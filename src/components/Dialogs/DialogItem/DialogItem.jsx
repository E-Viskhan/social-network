import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    const setActive = ({isActive}) => isActive ? s.active : '';

    return (
        <li className={s.dialog}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </li>
    );
};

export default DialogItem;