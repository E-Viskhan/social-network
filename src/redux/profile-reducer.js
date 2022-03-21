import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {id: 1, postText: 'Hi, how are you?', likesCount: 14},
        {id: 2, postText: "it's my first post", likesCount: 15}
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 5, postText: action.postText, likesCount: 0};

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPost = postText => ({type: ADD_POST, postText});
const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)));
};
export const getUserStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(data => dispatch(setUserStatus(data)));
};
export const updateUserStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(data => {
        if (!data.resultCode) { dispatch(setUserStatus(status)); }
    });
};

export default profileReducer;