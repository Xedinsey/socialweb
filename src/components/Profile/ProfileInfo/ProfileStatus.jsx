import React, {Component} from 'react';

class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.props.status}/>
                    </div>
                }
            </>
        );
    }
};

export default ProfileStatus;