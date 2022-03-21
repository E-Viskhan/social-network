import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm";

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} postText={p.postText} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostForm addPost={props.addPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
