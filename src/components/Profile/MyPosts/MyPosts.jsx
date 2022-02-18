import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

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
