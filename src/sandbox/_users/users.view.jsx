//----------------------------------------------------------------------------------------
// File: users.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users/users.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import Box from '../../components/layouts/Box';
import Button from '../../components/layouts/Button';
// import List from './users.item.list';
import { callUsersList } from '../../controllers/routes/users/users.controller';

import '../style/users.style.scss';


class UsersRoute extends PureComponent {
	constructor(props) {
    super(props);

    // inizializzazione dello stato della pagina
    this.state = {
      list: [],
      error: null,
      failure: null,
    };

    this.updateState = this.updateState.bind(this);
    this.onCallList = this.onCallList.bind(this);
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // richiesta della lista degli utenti
  onCallList() {
    const dispatch = this.updateState;

    callUsersList({ dispatch });
  }

  // renderizzazione della pagina
	render() {
    return (
        <section className="users">
          <h1 className="users__title">
            Users
          </h1>
          <Box className="users__container">
            <Box className="users__group">
              <Button className="users__button" onClick={this.onCallList}>
                Get users list
              </Button>
            </Box>
            <Box className="users__group">
              {JSON.stringify(this.state.list)}
            </Box>
            {/* <List usersSetState={this.updateState} usersGetState={this.state} /> */}
          </Box>
        </section>
    );
	}
}


UsersRoute.propTypes = {
};

UsersRoute.defaultProps = {
};


export default hot(UsersRoute);
