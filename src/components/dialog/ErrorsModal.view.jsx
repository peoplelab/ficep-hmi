//----------------------------------------------------------------------------------------
// File: ErrorsModal.view.jsx
//
// Desc: Componente modale, avverte l'utente di eventuali errori tornati da un model
// Path: /src/components/dialog/ErrorsModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../layouts/index.layouts';

import intlDefault from '../../../public/translations/login/default.json';

import '../../styles/dialog/ErrorModal.style.scss';


function mapLabels(){
  return ({ // etichette in lingua
    title: window.intl.modal_error_title || intlDefault.modal_error_title,
    message: window.intl.modal_error_message || intlDefault.modal_error_message,
    code: window.intl.modal_error_code || intlDefault.modal_error_code,
    details: window.intl.modal_error_details || intlDefault.modal_error_details,
    close: window.intl.modal_error_close || intlDefault.modal_error_close,
    error: errorCode => window.intl[errorCode] || intlDefault[errorCode] || errorCode,
  });
}

function mapErrorsList(errorCode, index) {
  const errorMessage = mapLabels().error(errorCode);

  return (
    <li className="modal-error__list-item" key={'error-' + index}>
      {errorMessage}
    </li>
  );
}


function ErrorModal(props) {
    const { errorCode, errorsList, onClose } = props;

    const genericError = mapLabels().error(errorCode);
    const ItemsList = errorsList.map(mapErrorsList);

  return (
    <Modal
      open
      className="modal--alert modal--medium error-modal"
      messages={({ title: mapLabels().title, close: mapLabels().close })}
      redirect={false}
      header="full"
      footer="alert"
      onClose={onClose}
    >
      <div className="error-modal__container">
        <div className="error-modal__content">
          <h1 className="error-modal__title modal__title--main-title">
            {mapLabels().message}
          </h1>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--message">
            {mapLabels().code}
          </p>
          <p className="error-modal__text error-modal__text--main">
            {genericError}
          </p>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--details">
            {mapLabels().details}
          </p>
          <ul className="error-modal__list">
            {ItemsList}
          </ul>
        </div>
      </div>
    </Modal>
  );
}


/**
 * Define component properties types
 */
ErrorModal.propTypes = {
  errorCode: PropTypes.string,
  errorsList: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
ErrorModal.defaultProps = {
  errorCode: '',
  errorsList: [],
};


export default memo(ErrorModal);
