//-----------------------------------------------------------------------------------------------
// File: users.item.list.jsx
//
// Desc: Elemento proprio della pagina users per la visualizzazione della lista degli utenti
// Path: /src/sandbox/_users/users.item.list
//-----------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/layouts/Box';


// intestazioni delle colonne della tabella degli utenti
const header = (
  <tr key="users-header">
    <th>id</th>
    <th>firstName</th>
    <th>lastName</th>
    <th>userName</th>
    <th>isActive</th>
    <th>groups</th>
    <th>creationDate</th>
  </tr>
);


class ListItem extends PureComponent {
	constructor(props) {
    super(props);

    this.mapList = this.mapList.bind(this);
  }

  // render della lista degli utenti
  mapList(data) {
    const {
      id,
      firstName,
      lastName,
      userName,
      isActive,
      groups,
      creationDate,
     } = data;

    const [{ id: idGroup, code, description }] = groups;

    return (
      <tr key={`user-${userName}`}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{userName}</td>
        <td>{isActive ? 'Yes' : 'No'}</td>
        <td>
          <ul>
            <li>id: {idGroup}</li>
            <li>code: {code}</li>
            <li>description: {description}</li>
          </ul>
        </td>
        <td>{creationDate}</td>
      </tr>
    );
  }

  // render della sezione della tabella degli utenti
	render() {
    const { usersGetState } = this.props;

    const { list } = usersGetState;

    if (!(Array.isArray(list)) || list.length === 0) {
      return null;
    }

    const Table = list.map(this.mapList);

    return (
      <Box className="users__group">
        <h2 className="users__sub-title">
          List
        </h2>
        <table className="users__table">
          <thead>
            {header}
          </thead>
          <tbody>
            {Table}
          </tbody>
        </table>
      </Box>
    );
	}
}


ListItem.propTypes = {
  usersSetState: PropTypes.func.isRequired,
  usersGetState: PropTypes.object.isRequired,
};

ListItem.defaultProps = {
};


export default ListItem;
