import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {Chrome, Facebook, GitHub, Instagram, Link2, Twitter, Youtube} from "react-feather";
import VkIcon from '../../../assets/images/VkIcon.svg';
import profileAvatar from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        // return <Preloader/>
        return <></>;
    }

    const { profile } = props;

    const getContactsElems = (contactsObj) => {
        const getContactIcon = (contactType) => {
            const FACEBOOK = 'facebook';
            const GITHUB = 'github';
            const INSTAGRAM = 'instagram';
            const MAINLINK = 'mainLink';
            const TWITTER = 'twitter';
            const VK = 'vk';
            const WEBSITE = 'website';
            const YOUTUBE = 'youtube';

            switch (contactType) {
                case FACEBOOK:
                    return <Facebook/>
                case GITHUB:
                    return <GitHub/>
                case INSTAGRAM:
                    return <Instagram/>
                case MAINLINK:
                    return <Link2/>
                case TWITTER:
                    return <Twitter/>
                case VK:
                    return <img src={VkIcon} alt="Vk Icon"/>;
                case WEBSITE:
                    return <Chrome/>
                case YOUTUBE:
                    return <Youtube/>
            }
        }
        const contactsElems = [];

        for (let contact in contactsObj) {
            if (!contactsObj[contact]) {continue;}
            const contactElem =
                <li key={contact} className={s.contact}>
                    {getContactIcon(contact)}
                    <span>{contactsObj[contact]}</span>
                </li>
            contactsElems.push(contactElem);
        }

        return contactsElems;
    };

    return (
        <div className={s.container}>
            <div className={s.userCard}>
                <img className={s.avatar} src={profile.photos.large ? profile.photos.large : profileAvatar} alt="Avatar"/>
                <ul className={s.contacts}>{getContactsElems(profile.contacts)}</ul>
            </div>
            <div className={s.userInfo}>
                <h3 className={s.userName}>{profile.fullName}</h3>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                <span className={s.lookingForAJob}>В поисках работы? - {profile.lookingForAJob ? 'Да' : 'Нет'}</span>
                {profile.lookingForAJobDescription ? <span>Описание работы: {profile.lookingForAJobDescription}</span> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;