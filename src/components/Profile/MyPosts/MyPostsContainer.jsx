import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({ profilePage: state.profilePage });

const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts);

export default MyPostsContainer;
