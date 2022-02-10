import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg' />
      <div>{props.message}</div>
      <div>like {props.likesCount}</div>
    </div>
  );
};

export default Post;
