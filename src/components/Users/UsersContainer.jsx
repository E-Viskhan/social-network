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

const mapStateToProps = state => ({...state.usersPage});

export default connect(mapStateToProps,
    {
        toggleFollow, setUsers, setPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowingProgress, getUsers})(UsersContainer);