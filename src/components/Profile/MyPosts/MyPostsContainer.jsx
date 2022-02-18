import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            const state = store.getState();

            const updateNewPostText = (text) => {
                const action = updateNewPostTextActionCreator(text);
                store.dispatch(action)
            };

            const addPost = () => {
                const action = addPostActionCreator();
                store.dispatch(action)
            };

            return <MyPosts
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                updateNewPostText={updateNewPostText}
                addPost={addPost}
            />
        }}
    </StoreContext.Consumer>
};

export default MyPostsContainer;
