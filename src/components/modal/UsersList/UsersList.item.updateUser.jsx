//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, TextInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
// import { Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';
import { callUpdateUser } from '../../../controllers/routes/users/users.controller';


class UpdateItem extends Component {
	constructor(props) {
    super(props);

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

  onUpdate(state, event) {
    const { currentUser, updateState: dispatch } = this.props;

    const data = {
      idUser: currentUser.id,
      firstName: state.firstName,
      lastName: state.lastName,
      idGroupAdd: state.group,
      idGroupDelete: currentUser.group[0],
    };

    callUpdateUser({ data, dispatch });
  }

  onReset(event) {
    const { updateState } = this.props;

    updateState({ currentUser: null });
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
        {/* <Field className="users-modal__field">
          <PasswordInput name="password" placeholder={this.intl.password}/>
        </Field> */}
        <Field className="users-modal__field">
          <Select name="group">
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
UpdateItem.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  initial: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
UpdateItem.defaultProps = {
};


export default UpdateItem;
