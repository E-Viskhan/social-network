import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';
import { connect } from "react-redux";
import { updateUserStatus } from "../../../redux/profile-reducer";

const ProfileStatus = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = e => setStatus(e.target.value);

    return (
        <>
            {editMode
                ? <input type="text" autoFocus value={status}
                         onChange={onStatusChange} onBlur={deactivateEditMode}/>
                : <span className={s.statusText} onClick={activateEditMode}>{props.status}</span>
            }
        </>
    );
};

const mapStateToProps = state => ({ status: state.profilePage.status });

export default connect(mapStateToProps, { updateUserStatus })(ProfileStatus);