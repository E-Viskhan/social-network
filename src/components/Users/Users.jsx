import User from './User';
import s from './Users.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectCountUsersOnPage, selectCurrentPage, selectUsers } from "../../redux/users-selector";
import UsersPagination from "./UsersPagination";
import { useEffect } from "react";
import { getUsers } from "../../redux/users-reducer";

const Users = props => {
    const dispatch = useDispatch();
    const count = useSelector(state => selectCountUsersOnPage(state));
    const page = useSelector(state => selectCurrentPage(state));

    useEffect(() => {
        dispatch(getUsers(count, page));
    }, [page]);

    const users = useSelector(state => selectUsers(state));
    const usersElements = users.map(user => <User key={user.id} user={user}/>);

    return (
        <>
            <UsersPagination />
            <ol className={s.users}>{usersElements}</ol>
        </>
    );
};

export default Users;
