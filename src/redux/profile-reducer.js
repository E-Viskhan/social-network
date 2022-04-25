import { profileAPI } from "../api/api";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SET_USER_PHOTOS = 'social-network/profile/SET_USER_PHOTOS';

const initialState = {
    posts: [
        { id: 1, postText: 'Hi, how are you?', likesCount: 14 },
        { id: 2, postText: "it's my first post", likesCount: 15 }
    ],
    profile: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescriptions: null,
        fullName: null,
        photos: {
            large: null,
            small: null
        }
    },
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const id = state.posts.length + 1;
            const { postText } = action;
            const newPost = { id, postText, likesCount: 0 };

            return { ...state, posts: [...state.posts, newPost] };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_USER_STATUS:
            return { ...state, status: action.status }
        case SET_USER_PHOTOS:
            return {...state, profile: {...state.profile, photos: {...action.photos}}}
        default:
            return state;
    }
};

export const addPost = postText => ({ type: ADD_POST, postText });
export const deletePost = postId => ({ type: DELETE_POST, postId });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = status => ({ type: SET_USER_STATUS, status });
const setUserPhotos = photos => ({ type: SET_USER_PHOTOS, photos });

export const getUserProfile = userId => async dispatch => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatus = userId => async dispatch => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};
export const updateUserStatus = status => async dispatch => {
    const data = await profileAPI.updateStatus(status);
    const { resultCode } = data;

    if (!resultCode) {
        dispatch(setUserStatus(status));
    }
};

export const updateUserPhoto = photo => async dispatch => {
    const data = await profileAPI.updatePhoto(photo);
    const { resultCode, data: { photos } } = data;

    if (!resultCode) {
        dispatch(setUserPhotos(photos));
    }
};

export default profileReducer;