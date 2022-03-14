import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
};

const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
                if (!data.resultCode) {
                    const {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            });
    };
};

export const login = (email, password, rememberMe) => {
    debugger;
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            debugger;
            const { userId } = data.data;
            // dispatch(setAuthUserData(userId, login, email));
        })
    }
}

export default authReducer;
