//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
// import { callUsersAdd } from '../../../controllers/routes/users/users.controller';

import '../../../styles/modal/UsersList.style.scss';


class UsersList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      users: [],
      groups: [],
      currentUser: '',
     };

    this.onUpdate = this.onUpdate.bind(this);
    this.onReset = this.onReset.bind(this);

    this.intl = {
      firstName: window.intl.users_field_firstname,
      lastName: window.intl.users_field_lastname,
      password: window.intl.users_field_password,
      groups: window.intl.users_field_role,
      save: window.intl.users_field_update,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  onUpdate(event) {
    alert('onUpdate disabled');
  }

  onReset(event) {
    const { updateState } = this.props;

    updateState({ currentUser: '' });
  }

  getCodeOptions() {
    const { groups } = this.props;
    const options = groups.map(item => ({ value: item.code, message: this.toText[item.code] }));

    return options;
  }

  render() {
    const { initial } = this.props;
    const codeOptions = this.getCodeOptions();

    return (
      <>
        <Field className="users-modal__field">
          <TextInput name="firstName" placeholder={this.intl.firstName}/>
        </Field>
        <Field className="users-modal__field">
          <TextInput name="lastName" placeholder={this.intl.lastName}/>
        </Field>
        <Field className="users-modal__field">
          <PasswordInput name="password" placeholder={this.intl.password}/>
        </Field>
        <Field className="users-modal__field">
          <Select name="group">
            <option value="" disabled>{this.intl.groups}</option>
            <Option options={codeOptions} />
          </Select>
        </Field>
        <Field className="users-modal__field">
          <Submit name="form-users" required={['firstName', 'lastName', 'password', 'group']} onSubmit={this.onUpdate}>
            {this.intl.save}
          </Submit>
        </Field>
        <Field className="users-modal__field">
          <Reset className="users-modal__button users-modal__button--reset" name="form-users" initial={initial} onClick={this.onReset}>
            <i className="users-modal__icon ic-close" />
          </Reset>
        </Field>
      </>
    );
  }
}


/**
 * Define component properties types
 */
UsersList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  initial: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
UsersList.defaultProps = {
};


export default UsersList;
