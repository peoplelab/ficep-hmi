//----------------------------------------------------------------------------------------
// File: users.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users/users.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import {
  callUsersList, callUsersDetails, callUsersExport, callUsersAddToGroup, callUsersDeleteFromGroup
} from '../../controllers/routes/users/users.controller';
import { callGroupList, callGroupPermissions } from '../../controllers/routes/users/groups.controller';
import { callTokenSessionCheck } from '../../controllers/api/session.controller';

import { Button, ButtonData } from '../../components/layouts/index.layouts';
import Accordion from './Accordion.view';
import Table from './Table.view';
import Footer from './footer.view';

import '../style/users.style.scss';


const headers = {
  users: [
    'id',
    'firstName',
    'lastName',
    'userName',
    'isActive',
    'creationDate',
  ],
  groups: [
    'id',
    'code',
    'description',
  ],
  permissions: [
    'id',
    'code',
    'description',
  ],
};


class UsersRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = { response: { } };

    this.updateState = this.updateState.bind(this);
    this.getusersList = this.getusersList.bind(this);
    this.getuserDetail = this.getuserDetail.bind(this);
    this.exportUser = this.exportUser.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);
    this.getPermissionsList = this.getPermissionsList.bind(this);
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  getusersList(event) {
    const dispatch = this.updateState;

    callUsersList({ dispatch });
  }

  getuserDetail(event) {
    const dispatch = this.updateState;
    const { data } = event;

    callUsersDetails({ dispatch, data });
  }

  exportUser(event) {
    const dispatch = this.updateState;

    callUsersExport({ dispatch });
  }

  getGroupsList(event) {
    const dispatch = this.updateState;

    callGroupList({ dispatch });
  }

  getPermissionsList(event) {
    const dispatch = this.updateState;
    const { data } = event;

    callGroupPermissions({ dispatch, data });
  }

  addUserToGroup(event) {
    const dispatch = this.updateState;
    const data = {
      idUser: 3,
      idGroup: 1,
    };

    callUsersAddToGroup({ dispatch, data });
  }

  removeUserFromGroup(event) {
    const dispatch = this.updateState;
    const data = {
      idUser: 3,
      idGroup: 1,
    };

    callUsersDeleteFromGroup({ dispatch, data });
  }

  checkSession(event) {
    const dispatch = this.updateState;

    callTokenSessionCheck({ dispatch });
  }

  templateRow({ value, index }) {
    const {
      id,
      firstName,
      lastName,
      userName,
      isActive,
      creationDate,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">
          <ButtonData data={id}>
            {id}
          </ButtonData>
        </td>
        <td className="table__cell">{firstName}</td>
        <td className="table__cell">{lastName}</td>
        <td className="table__cell">{userName}</td>
        <td className="table__cell">{isActive}</td>
        <td className="table__cell">{creationDate}</td>
      </tr>
    );
  }

  // renderizzazione della pagina
	render() {
  //   const [data] = Object.values(this.state.response);
  //   const response = JSON.stringify(data, undefined, 4);

    const { users, groups, permissions } = this.state;

    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">
            <Accordion>
              <h3>Users</h3>
              <Table headers={headers.users} data={users} footer={Footer}>
                {this.templateRow}
              </Table>
            </Accordion>
            <Accordion>
              <h3>Groups</h3>
              <Table headers={headers.groups} data={groups}/>
            </Accordion>
            <Accordion>
              <h3>Permissions</h3>
              <Table headers={headers.permissions} data={permissions}/>
            </Accordion>
            <Accordion>
              <h3>Tools</h3>
              <div>
                <Button>
                  Check Session
                </Button>
                <Button>
                  Export groups
                </Button>
                <Button>
                  Export users
                </Button>
              </div>
            </Accordion>
          </div>
        </section>
    );
	}
}


UsersRoute.propTypes = {
};

UsersRoute.defaultProps = {
};


export default hot(UsersRoute);
