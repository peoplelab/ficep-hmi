//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../layouts/Button';
import store from '../../../store/redux.store';
import { types } from '../../../store/session.store';

import '../../../styles/modal/ErrorModal.style.scss';


const mapResult = (code, index) => (
  <li className="error-modal__item" key={`error-item-${index}`}>
    {window.intl[code]}
  </li>
);

const onClick = (event) => {
  store.dispatch({
    type: types.RESET_SESSION,
  });
};


const ErrorsModal = (props) => {
  const { disabled, responseType, errorCode, result } = props;

  if (disabled) {
    return null;
  }

  let title;
  if (responseType === 400) {
    title = window.intl[errorCode];
  }

  const List = Array.isArray(result) ? result.map(mapResult) : [];

  return (
    <div className="error-modal">
      <div className="error-modal__container">
        <div className="error-modal__content">
          <h1 className="error-modal__title">
            {title}
          </h1>
        </div>
        <div className="error-modal__content">
          <ul className="error-modal__list">
            {List}
          </ul>
        </div>
        <Button className="error-modal__button" onClick={onClick}>X</Button>
      </div>
    </div>
  );
};


const resultType = [
  PropTypes.object,
  PropTypes.arrayOf(PropTypes.string),
];


/**
 * Define component properties types
 */
ErrorsModal.propTypes = {
  responseType: PropTypes.number.isRequired,
  errorCode: PropTypes.string.isRequired,
  result: PropTypes.oneOfType(resultType).isRequired,
  disabled: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
ErrorsModal.defaultProps = {
};


export default memo(ErrorsModal);
