//----------------------------------------------------------------------------------------
// File: ChangePassword.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per la modifica della password
// Path: /src/components/modal/ChangePassword.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button } from '../../layouts/index.layouts';
import { callLogout } from '../../../controllers/api/logout.controller';

import '../../../styles/modal/SessionExpired.style.scss';


class SessionExpired extends PureComponent {
  constructor(props) {
    super(props);

    this.intl = {
      title: window.intl.session_expired_title,
      message: window.intl.session_expired_message,
      info: window.intl.session_expired_info,
      logout: window.intl.session_expired_logout,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(state, event) {
    callLogout();
  }

  render() {
    return (
      <Modal open className="modal--alert modal--small session-modal" messages={({ title: this.intl.title })} header="title" footer="none">
        <div className="session-modal__container">
          <div className="session-modal__content">
            <p className="session-modal__message">
              {this.intl.message}
            </p>
            <p className="session-modal__message session-modal__message--info">
              {this.intl.info}
            </p>
          </div>
          <div className="session-modal__content">
            <Button className="session-modal__button anchor" onClick={this.onClick}>
              {this.intl.logout}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}


/**
 * Define component properties types
 */
SessionExpired.propTypes = {
};

/**
 * Define default value of component properties
 */
SessionExpired.defaultProps = {
};


export default SessionExpired;
