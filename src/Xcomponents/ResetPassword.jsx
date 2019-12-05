//----------------------------------------------------------------------------------------
// File: ResetPassword.jsx
// Desc: Reset della password di un utente.
//
// Path: /src/widgets/common
//----------------------------------------------------------------------------------------
//	** Scheda Componente **
//	COMPONENT NAME: ResetPassword
//		Pulsante di richiesta reset password
//	PROPS:
//		userId   : ID utente
//		onSuccess: callback associata all'evento onSuccess
//		onFailed : callback associata all'evento onFailed
//----------------------------------------------------------------------------------------


	// ** Definizione import **
	import React, {Component} from 'react';
	import PropTypes          from 'prop-types';
//	import {User as cUser}    from '../../controllers/routes/users/users.controller';
	import {User as cUser}    from 'userController';


	// ** Definizione componente **
	class ResetPassword extends Component {

		// Carica le etichette in lingua
		_labels = {
			button: window.intl.reset_password_message,
		};
		_userId = 0;    // id utente


		constructor(props) {
			super(props);
			this.resetPassword.bind(this);
			this._userId = props.data;
		}

		resetPassword = () => {

			cUser.ResetPassword(
				this.props.data,
				(response) => this.props.onSuccess(
					{ newPassword: response.dataprocessed.result }),
				(response) => this.props.onFailed(response)
			);

		}


		render() {

			return (
				<button onClick={this.resetPassword} className={this.props.className}>
					{this._labels.button}
				</button>
			);
		}
	}

	//
	// ** Define component properties types **
	//
	ResetPassword.propTypes = {
		data: PropTypes.number.isRequired,
		onSuccess: PropTypes.func.isRequired,
		onFailed: PropTypes.func.isRequired,
		className: PropTypes.string
	};

	ResetPassword.defaultProps = { className: "" };
	export default ResetPassword;
