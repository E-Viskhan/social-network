import User from './User';
import s from './Users.module.css';
import Pagination from "../common/Pagination/Pagination";

const Users = ({ page, count, totalUsersCount, users, followingInProgress, onPageChanged, toggleFollow }) => {
    const userElements = users.map(user => {
        const userProps = { user, toggleFollow, followingInProgress };

        return <User key={user.id} {...userProps}/>
    });

    const paginationProps = { page, count, totalUsersCount, onPageChanged };

    return (
        <>
            <Pagination {...paginationProps}/>
            <ol className={s.users}>{userElements}</ol>
        </>
    );
};

export default Users;
