import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';
import { useDispatch, useSelector } from "react-redux";
import { updateUserStatus } from "../../../redux/profile-reducer";

const ProfileStatus = ({ isOwner }) => {
    const dispatch = useDispatch();
    const globalStatus = useSelector(state => state.profilePage.status);
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(globalStatus);

    useEffect(() => setStatus(globalStatus), [globalStatus]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateUserStatus(status));
    };
    const onStatusChange = e => setStatus(e.target.value);

    if (!isOwner) return <span>{globalStatus}</span>;

    return (
        <>
            {editMode
                ? <input type="text" autoFocus value={status}
                         onChange={onStatusChange} onBlur={deactivateEditMode}/>
                : <span
                    className={s.statusText}
                    onClick={activateEditMode}>{globalStatus || 'click for set status'}</span>
            }
        </>
    );
};

export default ProfileStatus;