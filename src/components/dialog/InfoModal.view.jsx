//----------------------------------------------------------------------------------------
// File: InfoModal.view.jsx
//
// Desc: Componente modale, informa l'utente dello stato di un'operazione
// Path: /src/components/dialog/InfoModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../layouts/index.layouts';

import '../../styles/dialog/InfoModal.style.scss';


const mapLabels = () => ({ // etichette in lingua
  title: window.intl.modal_info_title,
  subtitle: window.intl.modal_info_message,
  close: window.intl.modal_info_close,
});


const InfoModal = (props) => {
  const { message, onClose } = props;

  return (
    <Modal
      open
      className="modal--alert modal--medium info-modal"
      messages={({ title: mapLabels().title, close: mapLabels().close })}
      redirect={false}
      header="full"
      footer="alert"
      onClose={onClose}
    >
      <div className="info-modal__container">
        <div className="info-modal__content">
          <p className="info-modal__message">
            {mapLabels().subtitle}
          </p>
          {message && (
            <p className="info-modal__message">
              {message}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};


/**
 * Define component properties types
 */
InfoModal.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
InfoModal.defaultProps = {
  message: '',
};


export default memo(InfoModal);
