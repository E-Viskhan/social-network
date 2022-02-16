import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.dialog.id;
    const setActive = ({isActive}) => isActive ? s.active : '';

    return (
        <li className={s.dialog}>
            <NavLink to={path} className={setActive}>
                <div className={s.dialogItemWrapper}>
                    <img src={props.dialog.avatarUrl} alt="avatar"/>
                    <span>{props.dialog.name}</span>
                </div>
            </NavLink>
        </li>
    );
};

export default DialogItem;