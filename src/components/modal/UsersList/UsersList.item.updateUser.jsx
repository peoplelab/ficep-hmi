//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
import { callEditUser } from '../../../controllers/routes/users/users.controller';


class UpdateItem extends Component {
	constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    this.intl = {
      firstName: window.intl.users_field_firstname,
      lastName: window.intl.users_field_lastname,
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
    const { onUpdate } = this.props;
    onUpdate();
    this.onReset();
  }

  onUpdate(state, event) {
    const { currentUser } = this.props;

    const data = {
      idUser: parseInt(currentUser),
      firstName: state.firstName,
      lastName: state.lastName,
    };

    callEditUser({ data, fn: this.onSuccess });
  }

  onReset(event) {
    const { updateState } = this.props;

    updateState({ currentUser: NaN });
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
            sssss
        <Field className="users-modal__field">
          <TextInput name="firstName" placeholder={this.intl.firstName}/>
        </Field>
        <Field className="users-modal__field">
          <TextInput name="lastName" placeholder={this.intl.lastName}/>
        </Field>
        <Field className="users-modal__field">
          <PasswordInput name="password" placeholder={this.intl.password} disabled/>
        </Field>
        <Field className="users-modal__field">
          <Select name="group" disabled>
            <option value="" disabled>{this.intl.groups}</option>
            <Option options={codeOptions} />
          </Select>
        </Field>
        <Field className="users-modal__field">
          <Submit name="form-users" required={['firstName', 'lastName', 'group']} onSubmit={this.onUpdate}>
            {this.intl.save}
          </Submit>
        </Field>
        <Field className="users-modal__field">
          <Reset name="form-users" initial={initial} onClick={this.onReset}>
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
UpdateItem.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  initial: PropTypes.object.isRequired,
  currentUser: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
UpdateItem.defaultProps = {
};


export default UpdateItem;
