import React, { Component } from 'react';
import { User as cUser } from '../../controllers/routes/users/users.controller';
import PropTypes from 'prop-types';


/*
	Componente RESETPASSWORD. Reset della password di un utente.
	Props:
        userId: id utente
        onSuccess: evento onSuccess
        onFailed: evento onFailed

*/

class ResetPassword extends Component {

    // etichette in lingua
    _labels = {
        button: window.intl.resetPassword,
    };

    _userId = 0;    // id utente


    constructor(props) {
        super(props);

        this.resetPassword.bind(this);

        this._userId = this.props.userId;
    }

    resetPassword = () => {

        cUser.ResetPassword({
            data: this._userId,
            onSuccess: (response) => this.onSuccess({ newPassword: response.result }),
            onFailed: (response) => this.onFailed(response)
        });

    }


    render() {

        return (
            <button onClick={this.resetPassword}>
                {this._labels.button}
            </button>
            );
    }
}

//
// ** Define component properties types **
//
ResetPassword.propTypes = {
    userId: PropTypes.object.isRequired
};


export default ResetPassword;
