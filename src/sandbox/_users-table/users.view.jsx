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

  // renderizzazione della pagina
	render() {
  //   const [data] = Object.values(this.state.response);
  //   const response = JSON.stringify(data, undefined, 4);

    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <div className="users__container">

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
