import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "../../hoc/withRouter";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.params.userId);
    }

    render() {
        return <Profile profile={this.props.profile} />
    }

}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);