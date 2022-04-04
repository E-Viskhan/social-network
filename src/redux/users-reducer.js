import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = 'social-network/users/TOGGLE_FOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_PAGE = 'social-network/users/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    count: 8,
    page: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u)
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_PAGE:
            return { ...state, page: action.page };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

const toggleFollowSuccess = userId => ({ type: TOGGLE_FOLLOW, userId });
const setUsers = users => ({ type: SET_USERS, users });
export const setPage = page => ({ type: SET_PAGE, page });
const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (count, page) => async dispatch => {
    dispatch(setPage(page));
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(count, page);
    const { items, totalCount } = data;

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(items));
    dispatch(setTotalUsersCount(totalCount));
};


export const toggleFollow = (userFollowed, userId) => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId));

    const data = userFollowed ? await usersAPI.unfollow(userId) : await usersAPI.follow(userId);
    const { resultCode } = data;

    if (!resultCode) {
        dispatch(toggleFollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
