import s from "./Pagination.module.css";

const Pagination = ({ page, count, totalUsersCount, onPageChanged }) => {
    const pagesCount = Math.ceil(totalUsersCount / count);
    const pages = [...Array(15 || pagesCount).keys()].map(i => ++i);

    const pageNumberElements = pages.map(p => {
        const className = page === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber;

        return <li key={p} onClick={() => onPageChanged(p)} className={className}>{p}</li>
    });

    return <ol className={s.listPages}>{pageNumberElements}</ol>
};

export default Pagination;