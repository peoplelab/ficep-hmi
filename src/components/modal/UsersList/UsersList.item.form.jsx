//----------------------------------------------------------------------------------------
// File: UsersList.item.form.jsx
//
// Desc: Elemento form della modale Users
// Path: /src/components/modal/UsersList/UsersList.item.form.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, TextInput, PasswordInput, Select, Option, Submit, Reset } from '../../forms-context/index.form';

import '../../../styles/modal/UsersList.style.scss';


const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  group: '',
};


class FormItem extends Component {
	constructor(props) {
    super(props);

    this.getCodeOptions = this.getCodeOptions.bind(this);

    this.intl = {
      firstName: window.intl.users_field_firstname,
      lastName: window.intl.users_field_lastname,
      userName: window.intl.users_field_username,
      password: window.intl.users_field_password,
      groups: window.intl.users_field_role,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  getCodeOptions() {
    const { groups } = this.props;
    const options = groups.map(item => ({ value: item.code, message: this.toText[item.code] }));

    return options;
  }

  render() {
    const { onSubmit, label, onReset, id } = this.props;
    const codeOptions = this.getCodeOptions();

    return (
      <Form className="users-modal__form" initial={initialState}>
        {!isNaN(id) && (
        <Field className="users-modal__field">
          <Reset className="users-modal__button users-modal__button--reset" name="form-users" initial={initialState} onClick={onReset}>
            <i className="users-modal__icon ic-close" />
          </Reset>
        </Field>
        )}
        <Field className="users-modal__field">
          <TextInput name="firstName" placeholder={this.intl.firstName}/>
        </Field>
        <Field className="users-modal__field">
          <TextInput name="lastName" placeholder={this.intl.lastName}/>
        </Field>
        <Field className="users-modal__field">
          <TextInput name="userName" placeholder={this.intl.userName}/>
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
          <Submit name="form-users" required={['firstName', 'lastName', 'userName', 'password', 'group']} onSubmit={onSubmit}>
            {label}
          </Submit>
        </Field>
      </Form>
    );
  }
}


/**
 * Define component properties types
 */
FormItem.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

/**
 * Define default value of component properties
 */
FormItem.defaultProps = {
  children: null,
};


export default FormItem;
