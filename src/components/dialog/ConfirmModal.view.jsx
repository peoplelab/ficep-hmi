//----------------------------------------------------------------------------------------
// File: ConfirmModal.view.jsx
//
// Desc: Componente modale, richiede all'utente di confermare un operazione o di annullarla
// Path: /src/components/dialog/ConfirmModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../layouts/index.layouts';

import '../../styles/dialog/Dialog.style.scss';


function mapLabels(){
  return ({ // etichette in lingua
    title: window.intl.modal_confirm_title,
    message: window.intl.modal_confirm_message,
    no: window.intl.modal_confirm_no,
    yes: window.intl.modal_confirm_yes,
  });
}


function ConfirmModal(props) {
  const { onConfirm, onClose } = props;

  return (
    <Modal
      open
      className="modal--alert modal--medium dialog"
      messages={({ title: mapLabels().title, no: mapLabels().no, yes: mapLabels().yes })}
      redirect={false}
      header="full"
      footer="dialog"
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <div className="dialog__container rows full-size">
        <div className="dialog__content full-width">
          <h1 className="dialog__title">
            {mapLabels().message}
          </h1>
        </div>
      </div>
    </Modal>
  );
}


/**
 * Define component properties types
 */
ConfirmModal.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
ConfirmModal.defaultProps = {
  onConfirm: null,
};


export default memo(ConfirmModal);
