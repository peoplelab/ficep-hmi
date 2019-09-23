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
import FooterUsers from './footer.users.view';
import FooterDetails from './footer.details.view';
import { Form } from '../../components/forms-context/index.form';

import '../style/users.style.scss';


const headers = {
  users: [
    'id',
    'firstName',
    'lastName',
    'userName',
    'isActive',
    'creationDate',
    'action',
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
  details: [
    'id',
    'firstName',
    'lastName',
    'userName',
    'isActive',
    'creationDate',
  ],
  detailsGroups: [
    'id',
    'code',
    'description',
  ]
};


const initial = {
  username: '',
  password: '',
  group: '3',
};

const initialGroups = {
  group: '3',
};


class UsersRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      users: [],
      groups: [],
      permissions: [],
      details: {},
      currentUser: null,
     };

    this.updateState = this.updateState.bind(this);

    this.userDetail = this.userDetail.bind(this);

    this.getUsersList = this.getUsersList.bind(this);
    this.getUserDetail = this.getUserDetail.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);
    this.getPermissionsList = this.getPermissionsList.bind(this);

    this.checkSession = this.checkSession.bind(this);
    this.exportGroups = this.exportGroups.bind(this);
    this.exportUser = this.exportUser.bind(this);

    this.addUser = this.addUser.bind(this);
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);

    this.templateUsers = this.templateUsers.bind(this);
    this.templateDetailGroups = this.templateDetailGroups.bind(this);
    this.templateGroups = this.templateGroups.bind(this);
    this.templateDetail = this.templateDetail.bind(this);
  }

  componentDidMount() {
    this.getUsersList();
    this.getGroupsList();
  }

  updateState(newState) {
    this.setState(newState);
  }

  addUser(state, event) {
    console.log('addUser', state, event);
    // this.getUsersList();
  }
  removeUser(event) {
    console.log('removeUser', event.data, event);
    // this.getUsersList();
  }

  getUsersList() {
    const dispatch = this.updateState;

    callUsersList({ dispatch });
  }

  userDetail(id) {
    const dispatch = this.updateState;

    callUsersDetails({ dispatch, data: id });
  }

  getUserDetail(event) {
    const { data } = event;

    this.userDetail(data);

    this.setState(() => ({ currentUser: data }));
  }

  exportGroups(event) {
    console.log('exportGroups', event);
  }

  exportUser(event) {
    const dispatch = this.updateState;

    callUsersExport({ dispatch });
  }

  getGroupsList() {
    const dispatch = this.updateState;

    callGroupList({ dispatch });
  }

  getPermissionsList(event) {
    const dispatch = this.updateState;
    const { data } = event;

    callGroupPermissions({ dispatch, data });
  }

  addUserToGroup(state, event) {
    const dispatch = this.updateState;
    const data = {
      idUser: this.state.currentUser,
      idGroup: state.group,
    };

    callUsersAddToGroup({
      dispatch,
      data,
      fn: () => { this.userDetail(this.state.currentUser); }
    });
  }

  removeUserFromGroup(event) {
    const dispatch = this.updateState;
    const data = {
      idUser: 3,
      idGroup: 1,
    };

    callUsersDeleteFromGroup({
      dispatch,
      data,
      fn: () => { this.userDetail(this.state.currentUser); }
    });
  }

  checkSession(event) {
    const dispatch = this.updateState;

    callTokenSessionCheck({ dispatch });
  }

  templateUsers({ value, index }) {
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
          <ButtonData data={id} onClick={this.getuserDetail}>
            {id}
          </ButtonData>
        </td>
        <td className="table__cell">{firstName}</td>
        <td className="table__cell">{lastName}</td>
        <td className="table__cell">{userName}</td>
        <td className="table__cell">{isActive}</td>
        <td className="table__cell">{creationDate}</td>
        <td className="table__cell">
          <ButtonData onClick={this.removeUser} data={id}>
            Remove
          </ButtonData>
        </td>
      </tr>
    );
  }

  templateDetailGroups({ value, index }) {
    const {
      id,
      code,
      description,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">{id}</td>
        <td className="table__cell">{code}</td>
        <td className="table__cell">{description}</td>
        <td className="table__cell">
          <ButtonData onClick={this.removeUserFromGroup} data={id}>
            Remove
          </ButtonData>
        </td>
      </tr>
    );
  }

  templateGroups({ value, index }) {
    const {
      id,
      code,
      description,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">
          <ButtonData data={id} onClick={this.getPermissionsList}>
            {id}
          </ButtonData>
        </td>
        <td className="table__cell">{code}</td>
        <td className="table__cell">{description}</td>
      </tr>
    );
  }

  templateDetail({ value, index }) {
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
        <td className="table__cell">{id}</td>
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
    const { users, groups, permissions, details } = this.state;

    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">
            <div>
              <h2>Users details</h2>
              <Accordion open>
                <h3>Users</h3>
                <Form initial={initial}>
                  <Table headers={headers.users} data={users} footer={<FooterUsers onSubmit={this.addUser} groups={groups} />} >
                    {this.templateUsers}
                  </Table>
                </Form>
              </Accordion>
              <Accordion open>
                <h3>Detail</h3>
                <Table headers={headers.details} data={[details]} >
                  {this.templateDetail}
                </Table>
                <Form initial={initialGroups}>
                  <Table headers={headers.detailsGroups} data={details.groups} footer={<FooterDetails onSubmit={this.addUserToGroup} groups={groups} />} >
                    {this.templateDetailGroups}
                  </Table>
                </Form>
              </Accordion>
            </div>
            <div>
              <h2>Groups details</h2>
              <Accordion open>
                <h3>Groups</h3>
                  <Table headers={headers.groups} data={groups} >
                    {this.templateGroups}
                  </Table>
              </Accordion>
              <Accordion open>
                <h3>Permissions</h3>
                <Table open headers={headers.permissions} data={permissions}/>
              </Accordion>
            </div>
            <div>
              <h2>Tools group</h2>
              <Accordion open>
                <h3>Tools</h3>
                <div>
                  <Button onClick={this.checkSession}>
                    Check Session
                  </Button>
                  <Button onClick={this.exportGroups}>
                    Export groups
                  </Button>
                  <Button onClick={this.exportUser}>
                    Export users
                  </Button>
                </div>
              </Accordion>
            </div>
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
