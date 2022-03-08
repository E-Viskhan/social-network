import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {id: 1, postText: 'Hi, how are you?', likesCount: 14},
        {id: 2, postText: "it's my first post", likesCount: 15}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_POST:
            const newPost = {id: 5, postText: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
};

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPost = () => ({type: ADD_POST});
const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId = 2) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)));
};

export default profileReducer;