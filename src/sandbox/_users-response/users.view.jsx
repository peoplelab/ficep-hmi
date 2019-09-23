//----------------------------------------------------------------------------------------
// File: users.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users/users.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import Button from '../../components/layouts/Button';
import ButtonData from '../../components/layouts/ButtonData';
import {
  callUsersList, callUsersDetails, callUsersExport, callUsersAddToGroup, callUsersDeleteFromGroup
} from '../../controllers/routes/users/users.controller';
import { callGroupList, callGroupPermissions } from '../../controllers/routes/users/groups.controller';
import { callTokenSessionCheck } from '../../controllers/api/session.controller';

import '../style/users.style.scss';


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
    this.setState({ response: newState });
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

  // renderizzazione della pagina
	render() {
    const [data] = Object.values(this.state.response);
    const response = JSON.stringify(data, undefined, 4);

    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">
            <div className="users__section users__container">
            <h2 className="users__sub-title">Actions</h2>
              <div className="users__section users__actions">
                <h3 className="users__section-title">Users</h3>
                <div>
                  <Button className="users__action-button" onClick={this.getusersList}>
                    List
                  </Button>
                  <ButtonData className="users__action-button" onClick={this.getuserDetail} data={1}>
                    Details admin
                  </ButtonData>
                  <ButtonData className="users__action-button" onClick={this.getuserDetail} data={2}>
                    Details super
                  </ButtonData>
                  <ButtonData className="users__action-button" onClick={this.getuserDetail} data={3}>
                    Details user
                  </ButtonData>
                  <Button className="users__action-button" onClick={this.exportUser}>
                    Export
                  </Button>
                </div>
              </div>
              <div className="users__section users__actions">
                <h3 className="users__section-title">Groups</h3>
                <div>
                  <Button className="users__action-button" onClick={this.getGroupsList}>
                    List
                  </Button>
                  <ButtonData className="users__action-button" onClick={this.getPermissionsList} data={1}>
                    Permissions admin
                  </ButtonData>
                  <ButtonData className="users__action-button" onClick={this.getPermissionsList} data={2}>
                    Permissions super
                  </ButtonData>
                  <ButtonData className="users__action-button" onClick={this.getPermissionsList} data={3}>
                    Permissions user
                  </ButtonData>
                  <ButtonData className="users__action-button" onClick={this.getPermissionsList} data={4}>
                    Permissions unknown
                  </ButtonData>
                </div>
              </div>
              <div className="users__section users__actions">
                <h3 className="users__section-title">Users and groups</h3>
                <div>
                  <Button className="users__action-button" onClick={this.addUserToGroup}>
                    Add user to admin group
                  </Button>
                  <Button className="users__action-button" onClick={this.removeUserFromGroup}>
                    Remove user from admin group
                  </Button>
                </div>
              </div>
              <div className="users__section users__actions">
                <h3 className="users__section-title">Session</h3>
                <div>
                  <Button className="users__action-button" onClick={this.checkSession}>
                    Check
                  </Button>
                </div>
              </div>
            </div>
            <div className="users__section users__container">
              <div className="users__section users__data">
                <h2 className="users__sub-title">Response</h2>
                <div className="users__code">
                  <pre>
                    {response}
                  </pre>
                </div>
              </div>
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
