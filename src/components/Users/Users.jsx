import s from './Users.module.css'
import axios from "axios";
import React from 'react';
import User from "./User";

class Users extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {params: {count: this.props.pageSize, page: this.props.currentPage}})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {params: {count: this.props.pageSize, page: pageNumber}})
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        const userElements = this.props.users.map(user => <User key={user.id} user={user} toggleFollow={this.props.toggleFollow}/>);
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];

        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
            if (i > 9) {break;}
        }

        const pageNumberElements = pages.map(p => <li onClick={() => this.onPageChanged(p)}
                           className={this.props.currentPage === p ? s.pageNumber + ' ' +s.selectedPage : s.pageNumber}>
                    {p}
                </li>
            );

        return (
            <div className={s.container}>
                <ol className={s.listPages}>{pageNumberElements}</ol>
                <ol className={s.users}>{userElements}</ol>
            </div>
        );
    }
}

export default Users;