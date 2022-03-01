import User from './User';
import s from './Users.module.css';
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    const userElements = props.users.map(user => {
        return <User key={user.id} user={user} toggleFollow={props.toggleFollow}
                     followingInProgress={props.followingInProgress}
                     toggleFollowingProgress={props.toggleFollowingProgress}
        />
    });

    const pagesCount = Math.ceil(props.totalUsersCount / props.count);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i > 9) {
            break;
        }
    }

    const pageNumberElements = pages.map(p => {
        return (
            <li
                key={p}
                onClick={() => props.onPageChanged(p)}
                className={props.page === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber}
            >{p}</li>
        );
    });

    return (
        <>
            {/*{props.isFetching ? <Preloader/> : null}*/}
            <ol className={s.listPages}>{pageNumberElements}</ol>
            <ol className={s.users}>{userElements}</ol>
        </>
    );
};

export default Users;
