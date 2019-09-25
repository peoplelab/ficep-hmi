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
      firstName: window.intl.users_headers_firstname,
      lastName: window.intl.users_headers_lastname,
      userName: window.intl.users_headers_username,
      isActive: window.intl.users_headers_isactive,
      creationDate: window.intl.users_headers_creationdate,
      groups: window.intl.users_headers_role,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  getCodeOptions() {
    const { groups } = this.props;
    const options = groups.map(item => {
console.log(item);
console.log(item.code);
      return ({ value: item.code, massage: this.toText[item.code] });
    });

    return options;
  }

  render() {
    const { initial, children, onSubmit, label } = this.props;
    const codeOptions = this.getCodeOptions();

    console.log(codeOptions);
    return (
      <Form initial={initial}>
        {children}
        <Field>
          <TextInput name="firstName" placeholder={window.intl.users_placeholder_firstname}/>
        </Field>
        <Field>
          <TextInput name="lastName" placeholder={window.intl.users_placeholder_lastname}/>
        </Field>
        <Field>
          <TextInput name="userName" placeholder={window.intl.users_placeholder_username}/>
        </Field>
        <Field>
          <PasswordInput name="password" placeholder={window.intl.users_placeholder_password}/>
        </Field>
        <Field>
          <Select name="group">
            <option value="" disabled>{window.intl.users_placeholder_role}</option>
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
