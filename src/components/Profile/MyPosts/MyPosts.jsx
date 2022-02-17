import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action)
    };

    const addPost = () => {
        const action = { type: 'ADD-POST' };
        props.dispatch(action)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPostBlock}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={ addPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
