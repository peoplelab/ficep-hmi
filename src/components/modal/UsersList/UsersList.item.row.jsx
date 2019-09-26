//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ButtonData } from '../../layouts/index.layouts';
// import { callUsersList } from '../../../controllers/routes/users/users.controller';

import '../../../styles/modal/UsersList.style.scss';


class RowItem extends Component {
	constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.onDetails = this.onDetails.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.intl = {
      yes: window.intl.users_field_enable,
      no: window.intl.users_field_disable,
      update: window.intl.users_field_update,
      delete: window.intl.users_field_delete,
    };

    this.toText = {
      ADMIN: window.intl.users_role_administrator,
      SUPERUSER: window.intl.users_role_technician,
      USER: window.intl.users_role_operator,
    };
  }

  updateState(newState) {
    this.setState(newState);
  }

  onDetails(event) {
    alert('onDetails disabled');
  }

  onDelete(event) {
    alert('onDelete disabled');
  }

  render() {
    const { value, index } = this.props;
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
}


const shapeValue = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  creationDate: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};


/**
 * Define component properties types
 */
RowItem.propTypes = {
  value: PropTypes.shape(shapeValue).isRequired,
  index: PropTypes.number.isRequired
};

/**
 * Define default value of component properties
 */
RowItem.defaultProps = {
};


export default RowItem;
