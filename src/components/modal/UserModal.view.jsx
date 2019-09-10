//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Pagina pubblica principale
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../layouts/Button';
import { callLogout } from '../../controllers/routes/logout/logout.controller';

import '../../styles/modal/UserModal.style.scss';


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
    const { visible } = this.props;

    return visible && (
      <section className="user-modal">
        <div className="user-modal__bg bg-user-modal" />
        <Button
          className="user-modal__button anchor"
          onClick={this.onLogout}
        >
          Logout
        </Button>
      </section>
    );
	}
}


/**
 * Define component properties types
 */
HomeRoute.propTypes = {
  visible: PropTypes.bool
};

/**
 * Define default value of component properties
 */
HomeRoute.defaultProps = {
  visible: false,
};


export default HomeRoute;
