//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../layouts/Modal.view';
import {
  callUsersList,
} from '../../controllers/routes/users/users.controller';
import { callGroupList } from '../../controllers/routes/users/groups.controller';

// import '../../../styles/modal/ErrorModal.style.scss';


class Users extends Component {
	constructor(props) {
    super(props);

    this.state = {
      users: [],
      groups: [],
     };

    this.updateState = this.updateState.bind(this);

    this.getUsersList = this.getUsersList.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);
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
    // const { disabled } = this.props;

    // if (disabled) {
    //   return null;
    // }

    // const title = window.intl.modal_users_title;

    return (
      <Modal open className="users-modal" title="789" >
        <div>
          <div>123</div>
          <div>456</div>
        </div>
      </Modal>
    );
  }
}


/**
 * Define component properties types
 */
Users.propTypes = {
  // responseType: PropTypes.number.isRequired,
  // errorCode: PropTypes.string.isRequired,
  // errorsDescription: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.string),
  //   PropTypes.string,
  // ]).isRequired,
  // disabled: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
Users.defaultProps = {
};


export default Users;
