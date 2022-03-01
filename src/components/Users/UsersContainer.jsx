import {connect} from "react-redux";
import Users from "./Users";
import {
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow, toggleFollowingProgress,
    toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import {usersApi} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.count, this.props.page).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.count, pageNumber)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
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
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
    }
}

const mapStateToProps = state => ({...state.usersPage});

export default connect(mapStateToProps,
    {toggleFollow, setUsers, setPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress})(UsersContainer);