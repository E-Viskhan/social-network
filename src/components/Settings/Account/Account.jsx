import SettingsTitle from "../SettingsTitle";
import s from './Account.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../../../redux/profile-reducer";
import AccountForm from "./AccountForm";
import Preloader from "../../common/Preloader/Preloader";

const Account = ({ fullName, lookingJob, lookingJobDesc }) => {
    if (!fullName) return <Preloader/>

    return (
        <>
            <SettingsTitle>Account Details</SettingsTitle>
            <div className={s.container}>
                <AccountForm fullName={fullName} lookingJob={lookingJob} lookingJobDesc={lookingJobDesc}/>
            </div>
        </>
    );
};

const AccountMain = props => {
    const userId = useSelector(state => state.auth.userId);
    const fullName = useSelector(state => state.profilePage.profile.fullName);
    const lookingJob = useSelector(state => state.profilePage.profile.lookingForAJob);
    const lookingJobDesc = useSelector(state => state.profilePage.profile.lookingForAJobDescription);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile(userId));
    }, []);

    const accountProps = { fullName, lookingJob, lookingJobDesc };

    return <Account {...accountProps}/>;
};

export default AccountMain;