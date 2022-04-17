import { Chrome, Facebook, GitHub, Instagram, Link2, Twitter, Youtube } from "react-feather";
import VkIcon from "../../../assets/images/VkIcon.svg";
import s from "./ProfileInfo.module.css";

const Contacts = ({ contacts }) => {
    const getContactIcon = contactType => {
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

    for (let contact in contacts) {
        if (contacts[contact]) {
            const contactElem = <li key={contact} className={s.contact}>
                    {getContactIcon(contact)}
                    <span>{contacts[contact]}</span>
                </li>
            contactsElems.push(contactElem);
        }
    }

    if(!contactsElems.length) return <></>

    return <ul className={s.contacts}>{contactsElems}</ul>;
};

export default Contacts;