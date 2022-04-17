import s from './ProfileInfo.module.css'
import profileAvatar from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts";
import { useSelector } from "react-redux";

const ProfileInfo = ({ isOwner, savePhoto }) => {
    const profile = useSelector(state => state.profilePage.profile);

    if (!profile) return <></>;

    const { photos, contacts, fullName, lookingForAJob, lookingForAJobDescription } = profile;

    const onMainPhotoSelected = e => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={s.container}>
            <div className={s.userCard}>
                <img className={s.avatar} src={photos.large || profileAvatar} alt="Avatar"/>
                {isOwner && <input type='file' accept='image/jpg, image/jpeg, image/png' className={s.fileInput} onChange={onMainPhotoSelected}/>}
                <Contacts contacts={contacts}/>
            </div>
            <div className={s.userInfo}>
                <h3 className={s.userName}>{fullName}</h3>
                <ProfileStatus isOwner={isOwner}/>
                <span className={s.lookingForAJob}>В поисках работы? - {lookingForAJob ? 'Да' : 'Нет'}</span>
                {lookingForAJobDescription ? <span>Описание работы: {lookingForAJobDescription}</span> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;