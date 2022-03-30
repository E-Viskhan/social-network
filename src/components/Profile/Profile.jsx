import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, getUserStatus } from "../../redux/profile-reducer";

const Profile = props => {
    const dispatch = useDispatch();
    const params = useParams();
    const authorizedUserId = useSelector(state => state.auth.userId);
    const userId = params.userId ? params.userId : authorizedUserId;

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId));
            dispatch(getUserStatus(userId));
        }
    }, []);

    if (!userId) return <Navigate to={'/login'}/>;

    return (
        <>
            <ProfileInfo/>
            <MyPosts/>
        </>
    );
};

export default Profile;