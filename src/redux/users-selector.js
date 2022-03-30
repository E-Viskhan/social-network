import { createSelector } from "reselect";

export const getUsers = state => state.usersPage.users;
export const getUsersCleverSelector = createSelector(getUsers, users => {
    return users.filter(u => true);
});
export const getPageSize = state => state.usersPage.count;
export const getCurrentPage = state => state.usersPage.page;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;