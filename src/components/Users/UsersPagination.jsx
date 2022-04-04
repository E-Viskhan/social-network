import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCountUsersOnPage, selectCurrentPage, selectTotalUsersCount } from "../../redux/users-selector";
import { setPage } from "../../redux/users-reducer";

const UsersPagination = props => {
    const dispatch = useDispatch();
    const page = useSelector(state => selectCurrentPage(state));
    const count = useSelector(state => selectCountUsersOnPage(state));
    const totalUsersCount = useSelector(state => selectTotalUsersCount(state));
    const pagesCount = Math.ceil(totalUsersCount / count);

    const handleChange = (event, page) => {
        dispatch(setPage(page));
    };

    return <Pagination count={pagesCount} page={page} onChange={handleChange}
                       color='primary' showFirstButton showLastButton
                       siblingCount={2} {...props}
    />;
};

export default UsersPagination;
