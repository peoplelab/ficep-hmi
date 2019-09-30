//----------------------------------------------------------------------------------------
// File: ChangePassword.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per la modifica della password
// Path: /src/components/modal/ChangePassword.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Modal } from '../../layouts/index.layouts';
import { Form, Field, PasswordInput, Submit, Validation } from '../../forms-context/index.form';

import '../../../styles/modal/ErrorModal.style.scss';


const initial = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const required = ['oldPassword', 'newPassword', 'confirmPassword'];


class ChangePassword extends PureComponent {
  constructor(props) {
    super(props);

    this.intl = {
      title: window.intl.password_main_title,
      oldPassword: window.intl.password_field_old,
      newPassword: window.intl.password_field_new,
      confirmPassword: window.intl.password_field_confirm,
      update: window.intl.password_action_submit,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidation = this.onValidation.bind(this);
  }

  onSubmit(state, event) {
    alert('disabled');

    console.log(state);
  }

  onValidation(state) {
    const { oldPassword, newPassword, confirmPassword } = state;
    return (
      typeof oldPassword !== 'undefined'
      && typeof newPassword !== 'undefined'
      && typeof confirmPassword !== 'undefined'
      && oldPassword !== newPassword
      && confirmPassword === newPassword
    );
  }

  render() {
    return (
      <Modal open className="modal--data modal--small password-modal" title={this.intl.title}>
        <Form className="password-modal__form" initial={initial}>
          <Validation onValidation={this.onValidation} />
          <div className="password-modal__container">
            <div className="password-modal__content">
              <Field className="password-modal__field">
                <PasswordInput name="oldPassword" placeholder={this.intl.oldPassword} />
              </Field>
              <Field className="password-modal__field">
                <PasswordInput name="newPassword" placeholder={this.intl.newPassword} />
              </Field>
              <Field className="password-modal__field">
                <PasswordInput name="confirmPassword" placeholder={this.intl.confirmPassword} />
              </Field>
            </div>
            <div className="password-modal__content">
              <Field className="users-modal__field">
                <Submit name="form-password" required={required} onSubmit={this.onSubmit} resettable initial={initial}>
                  {this.intl.update}
                </Submit>
              </Field>
            </div>
          </div>
        </Form>
      </Modal>
    );
  }
}


/**
 * Define component properties types
 */
ChangePassword.propTypes = {
};

/**
 * Define default value of component properties
 */
ChangePassword.defaultProps = {
};


export default ChangePassword;
