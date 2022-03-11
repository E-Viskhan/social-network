import React from 'react';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => this.setState( { editMode: true } );
    deactivateEditMode = () => {
        this.setState( { editMode: false } );
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = e => {
        this.setState({ status: e.target.value });
    };

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input type="text" autoFocus value={this.state.status || 'Status...'}
                             onBlur={this.deactivateEditMode} onChange={this.onStatusChange}/>
                    : <span className={s.statusText} onClick={this.activateEditMode}>{this.props.status}</span>
                }
            </>
        );
    }
}