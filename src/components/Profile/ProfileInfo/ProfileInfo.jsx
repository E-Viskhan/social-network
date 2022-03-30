import s from './ProfileInfo.module.css'
import { Chrome, Facebook, GitHub, Instagram, Link2, Twitter, Youtube } from "react-feather";
import VkIcon from '../../../assets/images/VkIcon.svg';
import profileAvatar from '../../../assets/images/user.png';
import ProfileStatus from "./ProfileStatus";
import { useSelector } from "react-redux";

const ProfileInfo = props => {
    const profile = useSelector(state => state.profilePage.profile);

    if (!profile) return <></>;

    const { photos, contacts, fullName, lookingForAJob, lookingForAJobDescription } = profile;

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
            if (!contactsObj[contact]) {
                continue;
            }
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
                <img className={s.avatar} src={photos.large ? photos.large : profileAvatar} alt="Avatar"/>
                <ul className={s.contacts}>{getContactsElems(contacts)}</ul>
            </div>
            <div className={s.userInfo}>
                <h3 className={s.userName}>{fullName}</h3>
                <ProfileStatus/>
                <span className={s.lookingForAJob}>В поисках работы? - {lookingForAJob ? 'Да' : 'Нет'}</span>
                {lookingForAJobDescription ? <span>Описание работы: {lookingForAJobDescription}</span> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;