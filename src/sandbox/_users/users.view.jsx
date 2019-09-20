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
import { } from '../../controllers/routes/users/users.controller';
import { } from '../../controllers/routes/users/groups.controller';
import { } from '../../controllers/api/session.controller';

import '../style/users.style.scss';


class UsersRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.getusersList = this.getusersList.bind(this);
    this.getuserDetail = this.getuserDetail.bind(this);
    this.exportUser = this.exportUser.bind(this);
    this.getGroupsList = this.getGroupsList.bind(this);
    this.getPermissionsList = this.getPermissionsList.bind(this);
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }

  getusersList(event) {

  }

  getuserDetail(event) {
    const { data } = event;
  }

  exportUser(event) {

  }

  getGroupsList(event) {

  }

  getPermissionsList(event) {

  }

  addUserToGroup(event) {

  }

  removeUserFromGroup(event) {

  }

  checkSession(event) {

  }

  // renderizzazione della pagina
	render() {
    const url = 0;
    const request = 0;
    const response = 0;

    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">
            <h2 className="users__sub-title">Actions</h2>
            <div className="users__section users__container">
              <div className="users__section users__actions">
                <h3>Users</h3>
                <ul>
                  <li>
                    <Button className="users__action-button" onClick={this.getusersList}>
                      List
                    </Button>
                  </li>
                  <li>
                    <ButtonData className="users__action-button" onClick={this.getuserDetail} data={1}>
                      Details admin
                    </ButtonData>
                  </li>
                  <li>
                    <ButtonData className="users__action-button" onClick={this.getuserDetail} data={2}>
                      Details super
                    </ButtonData>
                  </li>
                  <li>
                    <ButtonData className="users__action-button" onClick={this.getuserDetail} data={3}>
                      Details user
                    </ButtonData>
                  </li>
                  <li>
                    <Button className="users__action-button" onClick={this.exportUser}>
                      Export
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="users__section users__actions">
                <h3>Groups</h3>
                <ul>
                  <li>
                    <Button className="users__action-button" onClick={this.getGroupsList}>
                      List
                    </Button>
                  </li>
                  <li>
                    <Button className="users__action-button" onClick={this.getPermissionsList}>
                      Permissions
                    </Button>
                  </li>
                </ul>
              </div>
              {/* <div className="users__section users__actions">
                <h3>Users and groups</h3>
                <ul>
                  <li>
                    <Button className="users__action-button" onClick={this.addUserToGroup}>
                      Add
                    </Button>
                  </li>
                  <li>
                    <Button className="users__action-button" onClick={this.removeUserFromGroup}>
                      Delete
                    </Button>
                  </li>
                </ul>
              </div> */}
              <div className="users__section users__actions">
                <h3>Session</h3>
                <ul>
                  <li>
                    <Button className="users__action-button" onClick={this.checkSession}>
                      Check
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="users__section users__container">
              <div className="users__section users__data">
                <h2 className="users__sub-title">URL</h2>
                <div className="users__code">
                  {url}
                </div>
              </div>
              <div className="users__section users__data">
                <h2 className="users__sub-title">Request</h2>
                <div className="users__code">
                  {request}
                </div>
              </div>
              <div className="users__section users__data">
                <h2 className="users__sub-title">Response</h2>
                <div className="users__code">
                  {response}
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
