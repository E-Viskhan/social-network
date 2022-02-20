import s from './Users.module.css'
import User from "./User";

const Users = (props) => {
    const userElements = props.users.map(user => <User key={user.id} user={user} toggleFollow={props.toggleFollow}/>);

    return (
        <ol className={s.users}>
            {userElements}
        </ol>
    );
};

export default Users;