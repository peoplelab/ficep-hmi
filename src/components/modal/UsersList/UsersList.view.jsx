//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Table, ButtonData } from '../../layouts/index.layouts';
import { Form, Field, TextInput, PasswordInput, Select, Option, Submit } from '../../forms-context/index.form';
import {
  callUsersList,
} from '../../../controllers/routes/users/users.controller';
import { callGroupList } from '../../../controllers/routes/users/groups.controller';

import '../../../styles/modal/UsersList.style.scss';


const initial = {
  firstName: '',
  lastName: '',
  password: '',
  group: '',
};

class UsersList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      users: [],
      groups: [],
      currentUser: '',
     };

    this.updateState = this.updateState.bind(this);
    this.onDetails = this.onDetails.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onReset = this.onReset.bind(this);
    this.getUsersList = this.getUsersList.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);
    this.templateUsers = this.templateUsers.bind(this);
    this.getCodeOptions = this.getCodeOptions.bind(this);
    this.templateAddUser = this.templateAddUser.bind(this);

    this.headers = {
      firstName: window.intl.users_headers_firstname,
      lastName: window.intl.users_headers_lastname,
      userName: window.intl.users_headers_username,
      isActive: window.intl.users_headers_isactive,
      creationDate: window.intl.users_headers_creationdate,
      groups: window.intl.users_headers_role,
      update: '',
      delete: '',
    };

    this.intl = {
      yes: window.intl.users_field_enable,
      no: window.intl.users_field_disable,
      update: window.intl.users_field_update,
      delete: window.intl.users_field_delete,
      firstName: window.intl.users_field_firstname,
      lastName: window.intl.users_field_lastname,
      userName: window.intl.users_field_username,
      password: window.intl.users_field_password,
      groups: window.intl.users_field_role,
      save: window.intl.users_field_save,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  componentDidMount() {
    this.getUsersList();
    this.getGroupsList();
  }

  updateState(newState) {
    this.setState(newState);
  }

  onDetails(event) {
    alert('onDetails disabled');
  }

  onAdd(state, event) {
    console.log('onAdd disabled', state);
  }

  onUpdate(event) {
    alert('onUpdate disabled');
  }

  onDelete(event) {
    alert('onDelete disabled');
  }

  onReset(event) {
    this.updateState({ id: NaN });
  }

  getUsersList() {
    const dispatch = this.updateState;

    callUsersList({ dispatch });
  }

  getGroupsList() {
    const dispatch = this.updateState;

    callGroupList({ dispatch });
  }

  getCodeOptions() {
    const { groups } = this.state;
    const options = groups.map(item => ({ value: item.code, message: this.toText[item.code] }));

    return options;
  }

  templateAddUser() {
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
          <Submit name="form-users" required={['firstName', 'lastName', 'password', 'group']} onSubmit={this.onAdd}>
            {this.intl.save}
          </Submit>
        </Field>
      </>
    );
  }

  templateUsers(data) {
    const { value, index } = data;
    const {
      firstName,
      lastName,
      userName,
      isActive,
      creationDate,
      groups,
    } = value;

    const [{ code }] = groups;

    return (
      <Fragment key={`table-row-${index}`} >
        <td className="table__cell">{firstName}</td>
        <td className="table__cell">{lastName}</td>
        <td className="table__cell">{userName}</td>
        <td className="table__cell">{isActive ? this.intl.yes : this.intl.no}</td>
        <td className="table__cell">{creationDate.split(/T|\..*/).join(' ')}</td>
        <td className="table__cell">{this.toText[code]}</td>
        <td className="table__cell">
          <ButtonData className="users-modal__button users-modal__button--delete" data={userName} onClick={this.onDetails} >
            {this.intl.update}
          </ButtonData>
        </td>
        <td className="table__cell">
          <ButtonData className="users-modal__button users-modal__button--delete" data={userName} onClick={this.onDelete} >
            {this.intl.delete}
          </ButtonData>
        </td>
      </Fragment>
    );
  }

  render() {
    const { users } = this.state;

    return (
      <Modal open className="users-modal modal--data" title={window.intl.users_main_title} >
        <Form className="users-modal__form" initial={initial}>
          <div className="users-modal__container">
              <div className="users-modal__content">
                {this.templateAddUser()}
              </div>
              <div className="users-modal__content">
                <Table className="users-modal__table" headers={this.headers} data={users} >
                  {this.templateUsers}
                </Table>
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
UsersList.propTypes = {
};

/**
 * Define default value of component properties
 */
UsersList.defaultProps = {
};


export default UsersList;
