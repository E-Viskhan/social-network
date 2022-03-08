import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

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
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_PAGE:
            return {...state, page: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
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
export const toggleFollowSuccess = userId => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setPage = page => ({type: SET_PAGE, page});
export const setTotalUsersCount = count => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (count, page) => {
    return (dispatch) => {
        dispatch(setPage(page));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(count, page).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const toggleFollow = (userFollowed, userId) => {
  return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      let data = userFollowed ? await usersAPI.unfollow(userId) : await usersAPI.follow(userId);
      if (!data.resultCode) { dispatch(toggleFollowSuccess(userId)); }
      dispatch(toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
