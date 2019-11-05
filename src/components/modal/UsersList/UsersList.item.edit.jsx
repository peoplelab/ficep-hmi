import React, { Component } from 'react';
//import { Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
// import { Field,  PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
import TextInput from '../../forms/TextInput';
import Select    from '../../forms/Select';
import PropTypes from 'prop-types';


/*
	Componente EDITITEM. Modifica di un utente.
	Props:
	- groups : elenco dei gruppi/ruoli di un utente.
	- currentUser : utente "corrente" (selezionato), json composto da:
		- id: 0
		- firstName: "",
		- lastName: "",
		- password: "",
		- groups: null,
		- isLocked: false
	- onSave : gestore del salvataggio utente
*/


class EditItem extends Component {
	// etichette in lingua
	_labels = {
		firstName: window.intl.users_field_firstname,
		lastName : window.intl.users_field_lastname,
		group    : window.intl.users_field_role,
		save     : window.intl.users_field_save,
		reset    : window.intl.users_field_reset,
		groups   : {
			ADMIN: window.intl.users_role_administrator,
			SUPERUSER: window.intl.users_role_technician,
			USER: window.intl.users_role_operator
		},
	};
	// elenco elementi (options) del dropdown gruppi/ruoli
	_groups = [];

	// valori default (vuoti)
	_emptyValues = {
		Id: 0,
		FirstName: "",
		LastName: "",
		Groups: null,
		isLocked: false
	}


	constructor(props) {
		super(props);

		this.state = {
			originalValues: this._emptyValues,									// valori originali
			currentValues : this._emptyValues,									// valori modificati dall'utente
		};

		this.handleInputChange.bind(this);
		this.btnReset_click.bind(this);
		this.btnSave_click.bind(this);

		this._groups = this.getCodeOptions(props.groups);
	}

	componentWillReceiveProps(nextProps) {
		// se currentUser di nextprops è null assegno i valori dello state a emptyValues, per evitare che ci siano errori nel "render".
		const user = (nextProps.currentUser.FirstName === null || (typeof nextProps.currentUser.FirstName === "undefined")) ? this._emptyValues : nextProps.currentUser;

		this._groups = this.getCodeOptions(nextProps.groups);
		this.setState({ originalValues: user, currentValues: user });
	}

	// elementi drop down gruppi/ruoli
	getCodeOptions(groups_list) {

		let listitems = [];

		listitems.push(<option key="0" value="0">{this._labels.group}</option>);

		listitems.push(groups_list.map((item) =>
			<option key={item.code} value={item.id}>{this._labels.groups[item.code]}</option>
		));

		return listitems;
	}

	// gestione modifica campi input
	handleInputChange = (event) => {
		let currentValues = {};

		const value = event.target.value;

		if (event.target.name.indexOf("lastName") >= 0) {
			currentValues = { ...this.state.currentValues, "LastName": value };
		} else if (event.target.name.indexOf("firstName") >= 0) {
			currentValues = { ...this.state.currentValues, "FirstName": value };
		} /*else if (event.target.name.indexOf("password") >= 0) {
			currentValues = { ...this.state.currentValues, "password": value };
		}*/ else if (event.target.name.indexOf("group") >= 0) {
			currentValues = { ...this.state.currentValues, "Groups": [{ "id": value }] };
		} else {
			currentValues = this.state.currentValues;
		}

		this.setState({ currentValues });
	};
	// gestione click Annulla
	btnReset_click = (event) => {
		event.preventDefault();
		this.setState({ ...this.state, currentValues: this._emptyValues });
	};
	// gestione click Salva
	btnSave_click = (event) => {
		event.preventDefault();

		this.props.onSave(this.state.currentValues);
	};


	render() {

		const { errorCase } = this.props;
		//  const password_classname = "users-modal__field " + ((this.state.currentValues.isLocked) ? "readonly" : "show");

		const firstName     = this.state.currentValues.FirstName || ""; // || "" serve per evitare un warning di react (A component is changing an uncontrolled input of type text to be controlled).
		const lastName      = this.state.currentValues.LastName || "";   // || "" serve per evitare un warning di react (A component is changing an uncontrolled input of type text to be controlled).
		const selectedGroup = (this.state.currentValues.Groups == null) ? "-1" : this.state.currentValues.Groups[0].id;
		const disableSelect = ((this.state.currentValues.Id === 0) ? "" : "disabled");

		const classFirstName = "field users-modal__field ";		// + (errorCase.includes('USER_MANAGEMENT_FIRSTNAME_EMPTY') ? "field--error" : "");
		const classLastName  = "field users-modal__field ";		// + (errorCase.includes('USER_MANAGEMENT_LASTNAME_EMPTY') ? "field--error" : "");
		const classGroups    = "field users-modal__field ";		// + (errorCase.includes('USER_MANAGEMENT_GROUPS_NOTSPECIFIED') ? "field--error" : "");

		const errFirstName = (errorCase.includes('USER_MANAGEMENT_FIRSTNAME_EMPTY')     ? "hasError" : "");
		const errLastName  = (errorCase.includes('USER_MANAGEMENT_LASTNAME_EMPTY')      ? "hasError" : "");
		const errGroups    = (errorCase.includes('USER_MANAGEMENT_GROUPS_NOTSPECIFIED') ? "hasError" : "");

		return (
			<>
				{/* Campo Cognome */}
				<div className={classFirstName}>
					<TextInput className={`input-large ${errFirstName}`} name="firstName" placeholder={this._labels.firstName} value={firstName} onChange={this.handleInputChange} />
				</div>
				
				{/* Campo Nome */}
				<div className={classLastName}>
					<TextInput className={`input-large ${errLastName}`} name="lastName" placeholder={this._labels.lastName} value={lastName} onChange={this.handleInputChange} />
				</div>
				
				{/* Campo Ruolo */}
				<div className={classGroups}>
					<Select className={`select-large ${disableSelect} ${errGroups}`} name="group" value={selectedGroup} onChange={this.handleInputChange} disabled={disableSelect}>
						{this._groups}
					</Select>
				</div>

				{/* Pulsante Annulla */}
				<div className="field users-modal__field users-modal__field--small">
					<button className="btn btn-light btn-large" name="btnReset" onClick={this.btnReset_click}>
						{this._labels.reset}
					</button>
				</div>
				<div className="field users-modal__field users-modal__field--small">
					<button className="btn btn-dark btn-large" name="btnSave" onClick={this.btnSave_click}>
						{this._labels.save}
					</button>
				</div>
			</>
		);
	}
}



// 
// ** Define component properties types **
//
EditItem.propTypes = {
	groups     : PropTypes.arrayOf(PropTypes.object).isRequired,
	currentUser: PropTypes.object.isRequired,
	onSave     : PropTypes.func.isRequired,
	errorCase  : PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default EditItem;
