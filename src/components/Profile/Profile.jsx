import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://zafardartravels.com/wp-content/uploads/2013/08/istanbul-turkey-825x385.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;