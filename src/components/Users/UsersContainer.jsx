import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsers,
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleFollowingProgress,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as usersSelector from './../../redux/users-selector'
import React from "react";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.count, pageNumber);
    }

    render() {
        return <Users users={this.props.users}
                      toggleFollow={this.props.toggleFollow}
                      totalUsersCount={this.props.totalUsersCount}
                      count={this.props.count}
                      page={this.props.page}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
        />
    }
}

const mapStateToProps = state => ({
    users: usersSelector.getUsers(state),
    count: usersSelector.getPageSize(state),
    page: usersSelector.getCurrentPage(state),
    totalUsersCount: usersSelector.getTotalUsersCount(state),
    isFetching: usersSelector.getIsFetching(state),
    followingInProgress: usersSelector.getFollowingInProgress(state)
});

export default connect(mapStateToProps,
    {
        toggleFollow, setUsers, setPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowingProgress, getUsers})(UsersContainer);