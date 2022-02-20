const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/pf-icon1.png',
            fullName: 'Dmitry K.',
            status: 'I am looking for a job right now...',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: false
        },
        {
            id: 2,
            avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/pf-icon4.png',
            fullName: 'Sasha D.',
            status: 'Believe yourself!',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: false
        },
        {
            id: 3,
            avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/pf-icon6.png',
            fullName: 'Sergey S.',
            status: 'I like football!!!',
            location: {country: 'Ukraine', city: 'Kiev'},
            followed: true
        },
        {
            id: 4,
            avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/pf-icon8.png',
            fullName: 'Andrew T.',
            status: 'I am free to help you to create good Video Production',
            location: {country: 'United State', city: 'Philadelphia'},
            followed: true
        },
    ]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};
export const toggleFollowAC = (userId) => ({type: TOOGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
