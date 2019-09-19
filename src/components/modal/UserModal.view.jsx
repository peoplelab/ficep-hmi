//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../layouts/index.layouts';
import AdminArea from '../common/Area/Area.admin';
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
      <>
        <AdminArea>
          <section className="user-modal user-modal--admin">
            <div className="user-modal__bg bg-user-modal-admin" />
            <Button
              className="user-modal__button-2 anchor"
              disabled
            >
              {window.intl.user_info_management}
            </Button>
            <Button
              className="user-modal__button anchor"
              onClick={this.onLogout}
            >
            { window.intl.user_action_logout}
            </Button>
          </section>
        </AdminArea>
        <AdminArea reverse>
          <section className="user-modal">
            <div className="user-modal__bg bg-user-modal" />
            <Button
              className="user-modal__button anchor"
              onClick={this.onLogout}
            >
              {window.intl.user_action_logout}
            </Button>
          </section>
        </AdminArea>
      </>
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
