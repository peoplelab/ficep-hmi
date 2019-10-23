//----------------------------------------------------------------------------------------
// File: ConfirmModal.view.jsx
//
// Desc: Componente modale, richiede all'utente di confermare un operazione o di annullarla
// Path: /src/components/modal/Dialog/ConfirmModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal } from '../../layouts/index.layouts';

import '../../../styles/modal/Dialog/ConfirmModal.style.scss';


function mapLabels(){
  return ({ // etichette in lingua
    title: window.intl.modal_confirm_title,
    message: window.intl.modal_confirm_message,
    no: window.intl.modal_confirm_no,
    yes: window.intl.modal_confirm_yes,
  });
}


function ConfirmModal(props) {
  const { open, onClose, onConfirm } = props;

  return ReactDOM.createPortal(
    <Modal
      open={open}
      className="modal--alert modal--medium warning-modal"
      messages={({ title: mapLabels().title, no: mapLabels().no, yes: mapLabels().yes })}
      redirect={false}
      header="full"
      footer="dialog"
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <div className="error-modal__container">
        <div className="error-modal__content">
          <h1 className="error-modal__title modal__title--main-title">
            {mapLabels().message}
          </h1>
        </div>
      </div>
    </Modal>
  , document.getElementById('modal'));
}


/**
 * Define component properties types
 */
ConfirmModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

/**
 * Define default value of component properties
 */
ConfirmModal.defaultProps = {
  open: false,
  onClose: null,
  onConfirm: null,
};


export default memo(ConfirmModal);
