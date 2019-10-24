//----------------------------------------------------------------------------------------
// File: SessionExpired.view.jsx
//
// Desc: Widget modale, avvisa l'utente che la sesione corrente è scaduta
// Path: /src/components/dialog/SessionExpired.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '../layouts/index.layouts';
import { callLogout } from '../../controllers/api/logout.controller';

import '../../styles/dialog/SessionExpired.style.scss';


const mapLabels = () => ({ // etichette in lingua
  title: window.intl.session_expired_title,
  message: window.intl.session_expired_message,
  info: window.intl.session_expired_info,
  logout: window.intl.session_expired_logout,
});


class SessionExpired extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(state, event) {
    this.props.onClose();
    callLogout();
  }

  render() {
    return (
      <Modal
        open
        className="modal--alert modal--small session-modal"
        messages={({ title: mapLabels().title })}
        redirect={false}
        header="title"
        footer="none"
      >
        <div className="session-modal__container">
          <div className="session-modal__content">
            <p className="session-modal__message">
              {mapLabels().message}
            </p>
            <p className="session-modal__message session-modal__message--info">
              {mapLabels().info}
            </p>
          </div>
          <div className="session-modal__content">
            <Button className="session-modal__button anchor" onClick={this.onClick}>
              {mapLabels().logout}
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
  onClose: PropTypes.isRequired,
};

/**
 * Define default value of component properties
 */
SessionExpired.defaultProps = {
};


export default SessionExpired;
