//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, TextInput, PasswordInput, Select, Option, Submit, ResetStore, Reset } from '../../forms-context/index.form';
import { callUsersAdd } from '../../../controllers/routes/users/users.controller';

import '../../../styles/modal/UsersList.style.scss';


class AddItem extends Component {
	constructor(props) {
    super(props);

    this.state = {
      doReset: false,
    };

    this.getCodeOptions = this.getCodeOptions.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    this.intl = {
      firstName: window.intl.users_field_firstname,
      lastName: window.intl.users_field_lastname,
      userName: window.intl.users_field_username,
      password: window.intl.users_field_password,
      groups: window.intl.users_field_role,
      save: window.intl.users_field_save,
      reset: window.intl.users_field_reset,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  onSuccess() {
    const { onAdd } = this.props;

    this.setState(prevState => ({ doReset: !(prevState.doReset) }));

    onAdd();
  }

  onAdd(state, event) {
    const { groups } = this.props;

    const { id } = groups.find(item => item.code === state.group);
    const data = {
      ...state,
      group: id,
    };

    callUsersAdd({ data, fn: this.onSuccess });
  }

  getCodeOptions() {
    const { groups } = this.props;
    const options = groups.map(item => ({ value: item.code, message: this.toText[item.code] }));

    return options;
  }

  render() {
    const { initial } = this.props;
    const { doReset } = this.state;
    const codeOptions = this.getCodeOptions();

    return (
        <>
            uuuuuu
        <ResetStore doReset={doReset} initial={initial} />
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
          <Submit name="form-users" required={['firstName', 'lastName', 'password', 'group']} onSubmit={this.onAdd}>
            {this.intl.save}
          </Submit>
        </Field>
        <Field className="users-modal__field">
          <Reset name="form-users" initial={initial}>
            {this.intl.reset}
          </Reset>
        </Field>
      </>
    );
  }
}


/**
 * Define component properties types
 */
AddItem.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
  initial: PropTypes.object.isRequired,
};

/**
 * Define default value of component properties
 */
AddItem.defaultProps = {
};


export default AddItem;
