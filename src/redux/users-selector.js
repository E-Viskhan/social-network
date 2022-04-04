import { createSelector } from "reselect";

export const selectUsers = state => state.usersPage.users;
export const selectUsersCleverSelector = createSelector(selectUsers, users => {
    return users.filter(u => true);
});
export const selectPageSize = state => state.usersPage.count;
export const selectCurrentPage = state => state.usersPage.page;
export const selectCountUsersOnPage = state => state.usersPage.count;
export const selectTotalUsersCount = state => state.usersPage.totalUsersCount;
export const selectFollowingInProgress = state => state.usersPage.followingInProgress;