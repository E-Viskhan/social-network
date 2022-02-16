import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPostBlock}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
