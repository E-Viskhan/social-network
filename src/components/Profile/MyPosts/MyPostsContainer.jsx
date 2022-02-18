import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const updateNewPostText = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };

    const addPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action)
    };

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
        />
    );
};

export default MyPostsContainer;
