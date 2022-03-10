import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    toggleEditMode = () => this.setState( { editMode: !this.state.editMode } )

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input type="text" autoFocus value={this.props.status} onBlur={this.toggleEditMode}/>
                    : <span onClick={this.toggleEditMode}>{this.props.status}</span>
                }
            </>
        );
    }
}