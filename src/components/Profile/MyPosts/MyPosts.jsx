import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='15' />
        <Post message='it is my first post' likesCount='40' />
      </div>
    </div>
  );
};

export default MyPosts;
