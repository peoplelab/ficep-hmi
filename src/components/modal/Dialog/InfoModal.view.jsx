//----------------------------------------------------------------------------------------
// File: InfoModal.view.jsx
//
// Desc: Componente modale, informa l'utente dello stato di un'operazione
// Path: /src/components/modal/Dialog/InfoModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal } from '../../layouts/index.layouts';

import '../../../styles/modal/Dialog/InfoModal.style.scss';


const mapLabels = () => ({ // etichette in lingua
  title: window.intl.modal_info_title,
  message: window.intl.modal_info_message,
  close: window.intl.modal_info_close,
});


const InfoModal = (props) => {
  const { open, children, onClose } = props;

  return ReactDOM.createPortal(
    <Modal
      open={open}
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
            {mapLabels().message}
          </p>
          {children && (
            <p className="info-modal__message">
              {children}
            </p>
          )}
        </div>
      </div>
    </Modal>
  , document.getElementById('modal'));
};


/**
 * Define component properties types
 */
InfoModal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

/**
 * Define default value of component properties
 */
InfoModal.defaultProps = {
  children: null,
  open: false,
  onClose: null,
};


export default memo(InfoModal);
