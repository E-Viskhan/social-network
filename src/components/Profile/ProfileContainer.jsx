import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "../common/crutches/withRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.params.userId);
    }

    render() {
        return <Profile {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);