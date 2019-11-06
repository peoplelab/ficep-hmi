//----------------------------------------------------------------------------------------
// File: ChangePassword.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per la modifica della password
// Path: /src/components/modal/ChangePassword.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../layouts/index.layouts';
import { Form, PasswordInput } from '../../forms/index.form';
import { User as cUser} from '../../../controllers/routes/users/users.controller';
import { ModalHandler } from '../../../controllers/common/modal.handler';
import history from '../../../models/history/history';



const initial = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

// const required = ['oldPassword', 'newPassword', 'confirmPassword'];


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

        cUser.ChangePassword({
            data,
            onSuccess: (response) => {
                ModalHandler.Success({ onSuccess: this.closeModal });

            },
            onFailed: (response) => {
                ModalHandler.Error({ errorCode: response.dataprocessed.errorCode, errorsList: response.dataprocessed.result });
            }
        });
    }
    closeModal = () => {
        history.goBack();
    }


    render() {
        return (
                <Modal open={true} className=" modal--data modal--small" messages={({ title: this._labels.title })} header="full" footer="none">
                    <Form className="users-modal__form" initial={initial}>
                        <div className="password-modal__container">
                            <div className="password-modal__content">
                                <div className="password-modal__field">
                                    <PasswordInput className="input-large" name="oldPassword" placeholder={this._labels.oldPassword} onChange={this.handleInputChange} />
                                </div>
                                <div className="password-modal__field">
                                    <PasswordInput className="input-large" name="newPassword" placeholder={this._labels.newPassword} onChange={this.handleInputChange} />
                                </div>
                                <div className="password-modal__field">
                                    <PasswordInput className="input-large" name="confirmPassword" placeholder={this._labels.confirmPassword} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="password-modal__content">
                                    <div className="field users-modal__field users-modal__field--small">
                                    <button className="btn btn-large btn-dark" name="btnSave" onClick={this.onUpdate}>
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
