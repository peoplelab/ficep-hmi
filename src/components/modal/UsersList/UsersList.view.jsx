//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Table } from '../../layouts/index.layouts';
import { Field, TextInput } from '../../forms-context/index.form';
import FormItem from './UsersList.item.form';
import {
  callUsersList,
} from '../../../controllers/routes/users/users.controller';
import { callGroupList } from '../../../controllers/routes/users/groups.controller';

import '../../../styles/modal/UsersList.style.scss';


const initial = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  group: '',
};

class UsersList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      users: [],
      groups: [],
      initialUpdate: {
        id: '',
        ...initial
      },
     };

    this.updateState = this.updateState.bind(this);

    this.getUsersList = this.getUsersList.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);

    this.templateUsers = this.templateUsers.bind(this);

    this.headers = {
      id: '',
      firstName: window.intl.users_headers_firstname,
      lastName: window.intl.users_headers_lastname,
      userName: window.intl.users_headers_username,
      isActive: window.intl.users_headers_isactive,
      creationDate: window.intl.users_headers_creationdate,
      groups: window.intl.users_headers_role,
      update: '',
      delete: '',
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

  getUsersList() {
    const dispatch = this.updateState;

    callUsersList({ dispatch });
  }

  getGroupsList() {
    const dispatch = this.updateState;

    callGroupList({ dispatch });
  }

  templateUsers(data) {
    const { value, index } = data;
    const {
      id,
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
        <td className="table__cell table__cell--id">
          {id}
        </td>
        <td className="table__cell">{firstName}</td>
        <td className="table__cell">{lastName}</td>
        <td className="table__cell">{userName}</td>
        <td className="table__cell">{isActive ? 'yes' : 'no'}</td>
        <td className="table__cell">{creationDate.split(/T|\..*/).join(' ')}</td>
        <td className="table__cell">{this.toText[code]}</td>
        <td className="table__cell">
          UP
        </td>
        <td className="table__cell">
          DEL
        </td>
      </Fragment>
    );
  }

  render() {
    const { users, initialUpdate, groups } = this.state;

    return (
      <Modal open className="users-modal modal--data" title={window.intl.users_main_title} >
        <div className="users-modal__container">
          <div className="users-modal__content">
            {initialUpdate.id === '' ? (
              <FormItem initial={initial} groups={groups} onSubmit={() => {}} label="ADD"/>
            ) : (
              <FormItem initial={initial} groups={groups} onSubmit={() => {}} label="UPDATE">
                <Field>
                  <TextInput name="id" />
                </Field>
              </FormItem>
            )}
          </div>
          <div className="users-modal__content">
            <Table className="users-modal__table" headers={this.headers} data={users} >
              {this.templateUsers}
            </Table>
          </div>
        </div>
      </Modal>
    );
  }
}

// import { Form, Field, TextInput, , , Submit } from '../forms-context/index.form';


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