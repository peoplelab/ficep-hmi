//----------------------------------------------------------------------------------------
// File: UsersList.item.form.jsx
//
// Desc: Elemento form della modale Users
// Path: /src/components/modal/UsersList/UsersList.item.form.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, TextInput, PasswordInput, Select, Option, Submit } from '../../forms-context/index.form';
// import {
//   callUsersList,
// } from '../../controllers/routes/users/users.controller';
// import { callGroupList } from '../../controllers/routes/users/groups.controller';

// import '../../styles/modal/FormItem.style.scss';


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
    const { initial, children, onSubmit, label } = this.props;
    const codeOptions = this.getCodeOptions();

    return (
      <Form initial={initial}>
        {children}
        <Field>
          <TextInput name="firstName" placeholder={this.intl.firstName}/>
        </Field>
        <Field>
          <TextInput name="lastName" placeholder={this.intl.lastName}/>
        </Field>
        <Field>
          <TextInput name="userName" placeholder={this.intl.userName}/>
        </Field>
        <Field>
          <PasswordInput name="password" placeholder={this.intl.password}/>
        </Field>
        <Field>
          <Select name="group">
            <option value="" disabled>{this.intl.groups}</option>
            <Option options={codeOptions} />
          </Select>
        </Field>
        <Submit name="form-users" required={['firstName', 'lastName', 'userName', 'password', 'group']} onSubmit={onSubmit}>
          {label}
        </Submit>
      </Form>
    );
  }
}


/**
 * Define component properties types
 */
FormItem.propTypes = {
  children: PropTypes.element,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  initial: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * Define default value of component properties
 */
FormItem.defaultProps = {
  children: null,
};


export default FormItem;
