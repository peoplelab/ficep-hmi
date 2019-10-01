//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Table } from '../../layouts/index.layouts';
import { Form } from '../../forms-context/index.form';
import { callUsersList } from '../../../controllers/routes/users/users.controller';
import { callGroupList } from '../../../controllers/routes/users/groups.controller';

import RowItem from './UsersList.item.row';
import AddUserItem from './UsersList.item.addUser';
import UpdateUserItem from './UsersList.item.updateUser';

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
    this.getUsersList = this.getUsersList.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);

    this.intl = {
      title: window.intl.users_main_title,
    };

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

  render() {
    const { users, groups, currentUser } = this.state;

    return (
      <Modal open className="users-modal modal--data modal--big" messages={({ title: this.intl.title })} header="full" footer="none">
        <Form className="users-modal__form" initial={initial}>
          <div className="users-modal__container">
              <div className="users-modal__content">
                {!currentUser ? (
                  <AddUserItem groups={groups} initial={initial} onAdd={this.getUsersList} />
                ) : (
                  <UpdateUserItem groups={groups} initial={initial} updateState={this.updateState} />
                )}
              </div>
              <div className="users-modal__content">
                <Table className="users-modal__table" headers={this.headers} data={users} >
                  {props => <RowItem {...props} updateState={this.updateState} onDelete={this.getUsersList} />}
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
