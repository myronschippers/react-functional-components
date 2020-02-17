import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    TextField,
    Button,
    Paper,
} from '@material-ui/core';

class NewEmployee extends Component {
    state = {
        firstName: '',
        lastName: '',
        position: '',
    };
    
    changeField = (fieldKey) => (event) => {
        this.setState({
            [fieldKey]: event.target.value
        });
    }

    saveNewEmployee = (event) => {
        this.props.dispatch({
            type: 'ADD_EMPLOYEE',
            payload: {
                ...this.state
            }
        });

        this.setState({
            firstName: '',
            lastName: '',
            position: '',
        });
    }

    render() {
        return (
            <Paper className="paperPanel" elevation={3}>
                <h2>Add New Employee</h2>

                <div className="vr">
                    <TextField
                        type="text"
                        label="First Name"
                        fullWidth
                        value={this.state.firstName}
                        onChange={this.changeField('firstName')}
                    />
                </div>
                <div className="vr">
                    <TextField
                        type="text"
                        label="Last Name"
                        fullWidth
                        value={this.state.lastName}
                        onChange={this.changeField('lastName')}
                    />
                </div>
                <div className="vr">
                    <TextField
                        type="text"
                        label="Position"
                        fullWidth
                        value={this.state.position}
                        onChange={this.changeField('position')}
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={this.saveNewEmployee}
                >
                    Save
                </Button>
            </Paper>
        );
    }
}

export default connect(mapStoreToProps)(NewEmployee);
