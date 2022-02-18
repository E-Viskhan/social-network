import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} postText={p.postText} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    const onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPostBlock}>
                <textarea
                    ref={newPostElement}
                    value={props.profilePage.newPostText}
                    onChange={onPostChange}/>
                <button onClick={ onAddPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
