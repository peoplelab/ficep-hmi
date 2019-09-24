//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import store from '../../../store/redux.store';
import { types } from '../../../store/session.store';
import Modal from '../../layouts/Modal.view';

import intl from '../../../../public/translations/login/default.json';

import '../../../styles/modal/ErrorModal.style.scss';


const intlHandler = id => window.intl[id] || intl[id] || id;


const mapResult = (code, index) => (
  <li className="error-modal__item" key={`error-item-${index}`}>
    {intlHandler(code)}
  </li>
);

const onClick = (event) => {
  store.dispatch({
    type: types.RESET_ERROR,
  });
};


const ErrorsModal = (props) => {
  const { disabled, responseType, errorCode, errorsDescription } = props;

  if (disabled) {
    return null;
  }

  const title = intlHandler("modal_error_title");
  const message = intlHandler("modal_error_message");
  const code = intlHandler("modal_error_code");
  const details = intlHandler("modal_error_details");

  let main = null;
  let description = null;

  if (responseType === 400) {
    main = intlHandler(errorCode || 'modal_error_technical');
    description = errorsDescription.length > 0 && (
      <ul className="error-modal__list">
        {errorsDescription.map(mapResult)}
      </ul>
    );
  } else if (responseType === 500) {
    main = intlHandler("modal_error_server");
    description = (
      <p className="error-modal__text error-modal__text--description">
        {errorsDescription}
      </p>
    );
  }

  return (
    <Modal open className="modal--error error-modal" title={title} onClick={onClick} redirect={false}>
      <div className="error-modal__container">
        <div className="error-modal__content">
          <h1 className="error-modal__title modal__title--main-title">
            {message}
          </h1>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--message">
            {code}
          </p>
          <p className="error-modal__text error-modal__text--main">
            {main}
          </p>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--details">
            {details}
          </p>
          {description}
        </div>
      </div>
    </Modal>
  );
};


/**
 * Define component properties types
 */
ErrorsModal.propTypes = {
  responseType: PropTypes.number.isRequired,
  errorCode: PropTypes.string.isRequired,
  errorsDescription: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
ErrorsModal.defaultProps = {
};


export default memo(ErrorsModal);
