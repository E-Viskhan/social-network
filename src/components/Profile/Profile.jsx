import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, getUserStatus, updateUserPhoto } from "../../redux/profile-reducer";

const Profile = ({ isOwner, savePhoto }) => {
    return <>
        <ProfileInfo isOwner={isOwner} savePhoto={savePhoto}/>
        <MyPosts/>
    </>;
};

const ProfileContainer = props => {
    const dispatch = useDispatch();
    const params = useParams();
    const authorizedUserId = useSelector(state => state.auth.userId);
    const userId = params.userId || authorizedUserId;

    const savePhoto = photo => {
        dispatch(updateUserPhoto(photo));
    };

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId));
            dispatch(getUserStatus(userId));
        }
    }, [userId]);

    if (!userId) return <Navigate to={'/login'}/>;

    return <Profile
        isOwner={!params.userId}
        savePhoto={savePhoto}
    />;
}

export default ProfileContainer;