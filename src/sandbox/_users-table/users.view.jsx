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

import { Button, Accordion, Table } from '../../components/layouts/index.layouts';
import FooterUsers from './footer.users.view';
import FooterDetails from './footer.details.view';
import { Form } from '../../components/forms-context/index.form';
import { templateUsers, templateDetail, templateDetailGroups, templateGroups } from './users.item.templates';

import '../style/users-tab.style.scss';


const headers = {
  users: ['id', 'firstName', 'lastName', 'userName', 'isActive', 'creationDate', 'action'],
  groups: ['id', 'code', 'description'],
  permissions: ['id', 'code', 'description'],
  details: ['id', 'firstName', 'lastName', 'userName', 'isActive', 'creationDate'],
  detailsGroups: ['id', 'code', 'description']
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
      code: null,
     };

    this.updateState = this.updateState.bind(this);
    this.updateStateCode = this.updateStateCode.bind(this);

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
  }

  componentDidMount() {
    this.getUsersList();
    this.getGroupsList();
  }

  updateState(newState) {
    this.setState(newState);
  }

  updateStateCode(newState) {
    this.setState({ code: Object.values(newState) });
  }

  addUser(state, event) {
    alert('Not enable!');
    console.log('addUser', state, event);
    // this.getUsersList();
  }
  removeUser(event) {
    alert('Not enable!');
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
    alert('Not enable!');
    console.log('exportGroups', event);
  }

  exportUser(event) {
    const dispatch = this.updateStateCode;

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
    const dispatch = this.updateStateCode;

    callTokenSessionCheck({ dispatch });
  }

  // renderizzazione della pagina
	render() {
    const { users, groups, permissions, details, code } = this.state;

    return (
        <section className="users users--tab">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">
            <div className="users__content">
              <h2>Users details</h2>
              <Accordion open>
                <h3>Users</h3>
                <Form initial={initial}>
                  <Table headers={headers.users} data={users} footer={<FooterUsers onSubmit={this.addUser} groups={groups} />} >
                    {templateUsers(this.getUserDetail, this.removeUser)}
                  </Table>
                </Form>
              </Accordion>
              <Accordion open>
                <h3>Detail</h3>
                <Table headers={headers.details} data={[details]} >
                  {templateDetail}
                </Table>
                <Form initial={initialGroups}>
                  <Table headers={headers.detailsGroups} data={details.groups} footer={<FooterDetails onSubmit={this.addUserToGroup} groups={groups} />} >
                    {templateDetailGroups(this.removeUserFromGroup)}
                  </Table>
                </Form>
              </Accordion>
            </div>
            <div className="users__content">
              <h2>Groups details</h2>
              <Accordion open>
                <h3>Groups</h3>
                  <Table headers={headers.groups} data={groups} >
                    {templateGroups(this.getPermissionsList)}
                  </Table>
              </Accordion>
              <Accordion open>
                <h3>Permissions</h3>
                <Table open headers={headers.permissions} data={permissions}/>
              </Accordion>
            </div>
            <div className="users__content">
              <h2>Tools group</h2>
              <Accordion open>
                <h3>Tools</h3>
                <div className="users__button-group">
                  <Button className="users__button" onClick={this.checkSession}>
                    Check Session
                  </Button>
                  <Button className="users__button" onClick={this.exportGroups}>
                    Export groups
                  </Button>
                  <Button className="users__button" onClick={this.exportUser}>
                    Export users
                  </Button>
                </div>
                <div className="users__code">
                  <pre>
                    {JSON.stringify(code, null, 4)}
                  </pre>
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
