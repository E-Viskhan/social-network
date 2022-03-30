import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";

const MyPosts = props => {
    const posts = useSelector(state => state.profilePage.posts);
    const postsElements = posts.map(p => <Post key={p.id} postText={p.postText} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostForm/>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
