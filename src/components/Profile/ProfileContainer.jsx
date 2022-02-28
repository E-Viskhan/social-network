import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "../common/crutches/withRouter";
import {profileApi} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.params.userId ? this.props.params.userId : 2;

        profileApi.getProfile(userId).then(data => this.props.setUserProfile(data));
    }

    render() {
        return <Profile {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);