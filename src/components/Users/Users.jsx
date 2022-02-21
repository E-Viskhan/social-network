import s from './Users.module.css'
import axios from "axios";
import React from 'react';
import User from "./User";

class Users extends React.Component{
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {params: {count: 8}})
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        const userElements = this.props.users.map(user => <User key={user.id} user={user} toggleFollow={this.props.toggleFollow}/>);

        return (
            <ol className={s.users}>
                {userElements}
            </ol>
        );
    }
}

export default Users;