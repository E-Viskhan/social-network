import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    userId = this.props.params.userId ? this.props.params.userId : this.props.authorizedUserId;

    componentDidMount() {
        if (this.userId) {
            this.props.getUserProfile(this.userId);
            this.props.getUserStatus(this.userId);
        }
    }

    render() {
        if (!this.userId) {
            return <Navigate to='/login'/>
        }

        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
        />
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer);