//----------------------------------------------------------------------------------------
// File: ChangePassword.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per la modifica della password
// Path: /src/components/modal/ChangePassword.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Modal } from '../../layouts/index.layouts';
//import { Form, Field, PasswordInput, Submit, Validation, ResetStore } from '../../forms-context/index.form';
import PasswordInput from '../../forms-context/PasswordInput';
import { Modal, Table } from '../../layouts/index.layouts';
import { Form } from '../../forms-context/index.form';
import { ChangePassword as cChangePassword } from '../../../controllers/routes/users/users.controller';
import {
    User as cUser,
} from '../../../controllers/routes/users/users.controller';
import { ModalHandler } from '../../../controllers/common/modal.handler';
import { LoggedUser as cLoggedUser } from '../../../controllers/session/loggeduser.controller';

//import { callUsersPassword } from '../../../controllers/routes/users/users.controller';

// import '../../../styles/modal/ErrorModal.style.scss';


const initial = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const required = ['oldPassword', 'newPassword', 'confirmPassword'];


class ChangePassword extends PureComponent {



    //this.intl = {
    //  title: window.intl.password_main_title,
    //  oldPassword: window.intl.password_field_old,
    //  newPassword: window.intl.password_field_new,
    //  confirmPassword: window.intl.password_field_confirm,
    //  update: window.intl.password_action_submit,
    //  };

    _labels = {
        title: window.intl.password_main_title,
        oldPassword: window.intl.password_field_old,
        newPassword: window.intl.password_field_new,
        confirmPassword: window.intl.password_field_confirm,
        // update: window.intl.password_action_submit,
        save: window.intl.password_action_submit,
    };
    _emptyValues = {
        id: 0,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    }

    constructor(props) {
        super(props);

        this.state = {
            showModal: true,
            currentValues: this._emptyValues,
        };
    //    this.onSubmit.bind(this);
    }
    // gestione modifica campi input
    handleInputChange = (event) => {
        let currentValues = {};

        const value = event.target.value;

        if (event.target.name.indexOf("oldPassword") >= 0) {
            currentValues = { ...this.state.currentValues, "oldPassword": value };
        } else if (event.target.name.indexOf("newPassword") >= 0) {
            currentValues = { ...this.state.currentValues, "newPassword": value };
        } else if (event.target.name.indexOf("confirmPassword") >= 0) {
            currentValues = { ...this.state.currentValues, "confirmPassword": value };
        } else {
            currentValues = this.state.currentValues;
        }

        this.setState({ currentValues });
    };

    // gestione click Salva
    onUpdate = (event) => {

        event.preventDefault();
        let data = this.state.currentValues;
        //const x = cLoggedUser.Get();
        //const { currentUser } = x;
        //console.log("x: " + x);
        //console.log("currentUser: "+currentUser);
        //data.id= parseInt(currentUser);
       // cChangePassword({ data });

        cUser.ChangePassword({
            data,
            onSuccess: (response) => {
                this.setState({ showModal: false });
                ModalHandler.Success();
               this.setState({ showModal: true });
                   
                
            },
            onFailed: (response) => {
                ModalHandler.Error({ errorCode: response.dataprocessed.errorCode, errorsList: response.dataprocessed.result });
            }
        });
    }
       // this.onValidation = this.onValidation.bind(this);


        //onSubmit(state, event) {
        //    callUsersPassword({ data: state });

        //    this.setState(prevState => ({ doReset: !(prevState.doReset) }));
        //}

        //onValidation(state) {
        //    const { oldPassword, newPassword, confirmPassword } = state;
        //    return (
        //        typeof oldPassword !== 'undefined'
        //        && typeof newPassword !== 'undefined'
        //        && typeof confirmPassword !== 'undefined'
        //        && oldPassword !== newPassword
        //        && confirmPassword === newPassword
        //    );
        //}

        render() {
          //  const { doReset } = this.state;
            {/* <Modal open className="modal--data modal--small password-modal" messages={({ title: this.intl.title })} header="full" footer="none">
        <Form className="password-modal__form" initial={initial}>
          <ResetStore doReset={doReset} initial={initial} />
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
                <Submit name="form-password" required={required} onSubmit={this.onSubmit}>
                  {this.intl.update}
                </Submit>
              </Field>
            </div>
          </div>
        </Form>
        </Modal>*/}

            return (

                <Modal open={this.state.showModal} className=" modal--data modal--small" messages={({ title: this._labels.title })} header="full" footer="none">
                    <Form className="users-modal__form" initial={initial}>
                        <div className="password-modal__container">
                            <div className="password-modal__content">
                                <div className="password-modal__field">
                                    <PasswordInput name="oldPassword" placeholder={this._labels.oldPassword} onChange={this.handleInputChange} />
                                </div>
                                <div className="password-modal__field">
                                    <PasswordInput name="newPassword" placeholder={this._labels.newPassword} onChange={this.handleInputChange} />
                                </div>
                                <div className="password-modal__field">
                                    <PasswordInput name="confirmPassword" placeholder={this._labels.confirmPassword} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="password-modal__content">
                                    <div className="field users-modal__field users-modal__field--small">
                                    <button className="input input__submit" name="btnSave" onClick={this.onUpdate}>
                                            {this._labels.save}
                                        </button>
                                </div>
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
    currentUser: PropTypes.number.isRequired
};

/**
 * Define default value of component properties
 */
ChangePassword.defaultProps = {
    currentUser:0
};


export default ChangePassword;
