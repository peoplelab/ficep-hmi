//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Pagina pubblica principale
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box    from '../../layouts/Box';
import Anchor from '../../layouts/Anchor';
import Button from '../../layouts/Button';
import { callLogout } from '../../../controllers/routes/logout/logout.controller';
import LoggedTemplate from '../../templates/logged.view';

import '../../../styles/routes/home.style.scss';


class HomeRoute extends PureComponent {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
  }

  // chimata a logout
	onLogout() {
    // in assenza di parametri nella funzione del controller, è necessario passare sempre un oggetto vuoto
		callLogout({});
	}

  // renderizzazione della pagina
	render() {
    const { isUserLogged } = this.props;

    if (isUserLogged) {
      return (
        <LoggedTemplate>
          <section className="home__logged">
            <h1 className="home__title">
              Home page
            </h1>
            <Box className="home__container">
              {isUserLogged && (
                <Button
                  className="home__button"
                  onClick={this.onLogout}
                  disabled={false}
                >
                  Logout
                </Button>
              )}
            </Box>
          </section>
        </LoggedTemplate>
      );
    }

    return (
      <Box className="home">
        <nav className="home__nav">
          <ul className="home__list">
            <li className="home__item">
              <Anchor path="/login">
                Vai a <b>Login</b>
              </Anchor>
            </li>
          </ul>
        </nav>
        <Box className="home__route">
          <h1 className="home__title">
            Home page
          </h1>
        </Box>
      </Box>
		);
	}
}


/**
 * Define component properties types
 */
HomeRoute.propTypes = {
  isUserLogged: PropTypes.bool.isRequired
};

/**
 * Define default value of component properties
 */
HomeRoute.defaultProps = {
};


export default HomeRoute;
