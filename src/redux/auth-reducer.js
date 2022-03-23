import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true};
        case DELETE_USER_DATA:
            return {...initialState}
        default:
            return state;
    }
};

const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, payload: {userId, login, email}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA})


export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (!data.resultCode) {
            const {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email));
        }
    });
};

export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            const {resultCode, messages} = data;

            if (!resultCode) {
                dispatch(getAuthUserData())
            } else {
                const serverErrors = {serverErrors: messages};
                setStatus(serverErrors);
            }
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (!data.resultCode) {
                dispatch(deleteAuthUserData())
            }
        });
    }
}


export default authReducer;
