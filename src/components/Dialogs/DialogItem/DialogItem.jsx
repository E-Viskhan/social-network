import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    const setActive = ({isActive}) => isActive ? s.active : '';

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;