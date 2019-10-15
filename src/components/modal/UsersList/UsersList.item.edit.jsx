import React, { Component } from 'react';
//import { Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
import { Field,  PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
import TextInput from '../../forms/TextInput';
import PropTypes from 'prop-types';

/*
 * Componente EDITITEM. Modifica di un utente.
 * Props:
 * - groups : elenco dei gruppi/ruoli di un utente.
 * - currentUser : utente "corrente" (selezionato), json composto da:
 *                                                      - id: 0
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
        lastName: window.intl.users_field_lastname,
        password: window.intl.users_field_password,
        group: window.intl.users_field_role,
        groups: {            
            ADMIN: window.intl.users_role_administrator,
            SUPERUSER: window.intl.users_role_technician,
            USER: window.intl.users_role_operator
        },
        save: window.intl.users_field_save,
        reset: window.intl.users_field_reset,        
    };
    // elenco elementi (options) del dropdown gruppi/ruoli
    _groups = [];
    // valori default (vuoti)
    _emptyValues = {
        id: 0,
        firstName: "",
        lastName: "",
        password: "",
        groups: null,
        isLocked: false
    }


    constructor(props) {
        super(props);
               
        this.state = {
            // valori originali
            originalValues: this._emptyValues,
            // valori modificati dall'utente
            currentValues: this._emptyValues
        };

        this.handleInputChange.bind(this);
        this.btnReset_click.bind(this);
        this.btnSave_click.bind(this);

        this._groups = this.getCodeOptions(props.groups);
        //this._groups = <option key="-1" value="-1"></option>;
    }

    componentWillReceiveProps(nextProps) {
        this._groups = this.getCodeOptions(nextProps.groups);
        this.setState({ originalValues: nextProps.currentUser, currentValues: nextProps.currentUser });
    }

    // elementi drop down gruppi/ruoli
    getCodeOptions(groups_list) {

        let listitems = [];

        listitems.push(<option key="-1" value="-1">{this._labels.group}</option>);

        listitems.push(groups_list.map((item) =>
            <option key={item.code} value={item.code}>{this._labels.groups[item.code]}</option>
        ));

        return listitems;
    }
    
    // gestione modifica campi input
    handleInputChange = (event) => {
        let currentValues = {};

        const value = event.target.value;

        if (event.target.name.indexOf("lastName") >= 0) {
            currentValues = { ...this.state.currentValues, "lastName": value };
        } else if (event.target.name.indexOf("firstName") >= 0) {
            currentValues = { ...this.state.currentValues, "firstName": value };
        } else if (event.target.name.indexOf("group") >= 0) {
            currentValues = { ...this.state.currentValues, "groups": value };
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
        const password_classname = "users-modal__field " + ((this.state.currentValues.isLocked) ? "readonly" : "show");

        const firstName = this.state.currentValues.firstName;
        const lastName = this.state.currentValues.lastName;
        const selectedGroup = (this.state.currentValues.groups == null) ? "-1" : this.state.currentValues.groups[0].code;
        
        return (
            <>   
                <div className="users-modal__field">
                    <TextInput name="firstName" placeholder={this._labels.firstName} value={firstName} onChange={this.handleInputChange} />
                </div>               
                <div className="users-modal__field">
                    <TextInput name="lastName" placeholder={this._labels.lastName} value={lastName} onChange={this.handleInputChange} />
                </div>
                <div className={password_classname}>
                    <PasswordInput name="password" placeholder={this._labels.password} onChange={this.handleInputChange} />
                </div>
                <div className="users-modal__field">
                    <select name="group" value={selectedGroup} onChange={this.handleInputChange}>
                        {this._groups}
                    </select>
                </div>
                <div className="users-modal__field">
                    <button name="btnReset" onClick={this.btnReset_click}>
                        {this._labels.reset}
                    </button>
                </div>                
                <div className="users-modal__field">
                    <button name="btnSave" onClick={this.btnSave_click}>
                        {this._labels.save}
                    </button>
                </div>
            </>
        );
    }
}



/**
 * Define component properties types
 */
EditItem.propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentUser: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
};


export default EditItem;
