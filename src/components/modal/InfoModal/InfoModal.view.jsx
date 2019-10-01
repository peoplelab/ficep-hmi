//----------------------------------------------------------------------------------------
// File: ChangePassword.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per la modifica della password
// Path: /src/components/modal/ChangePassword.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Modal } from '../../layouts/index.layouts';

import '../../../styles/modal/InfoModal.style.scss';


class InfoModal extends PureComponent {
  constructor(props) {
    super(props);

    this.intl = {
      title: window.intl.info_main_title,
      message: window.intl.info_main_message,
      close: window.intl.info_main_close,
    };
  }

  render() {
    return (
      <Modal open className="modal--alert modal--medium info-modal" messages={({ title: this.intl.title, close: this.intl.close })} header="full" footer="alert">
        <div className="info-modal__container">
          <div className="info-modal__content">
            <p className="info-modal__message">
              {this.intl.message}
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}


/**
 * Define component properties types
 */
InfoModal.propTypes = {
};

/**
 * Define default value of component properties
 */
InfoModal.defaultProps = {
};


export default InfoModal;
