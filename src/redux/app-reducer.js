import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = 'social-network/app/INITIALIZED_SUCCESSFULLY';

const initialState = { initialized: false };

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY:
            return { ...state, initialized: true };
        default:
            return state;
    }
};

const initializedSuccessfully = () => ({ type: INITIALIZED_SUCCESSFULLY });

export const initializeApp = () => async dispatch => {
    await Promise.all([
        dispatch(getAuthUserData())
    ]);
    dispatch(initializedSuccessfully());
};

export default appReducer;
