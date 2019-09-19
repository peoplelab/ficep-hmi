//------------------------------------------------------------------------------------------------------------------------------
// File: InputCard.jsx
//
// Desc: Campo di input specifico per la gestione tra dati predefiniti e dati inseriti dall'utente. Presenta un layout specifico
// Path: /src/components/forms-custom/InputCard
//------------------------------------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ButtonData, Card } from '../layouts/index.layouts';

import * as resetIcon from '../../../public/icons/ic-close.svg';

import '../../styles/forms-custom/InputCard.style.scss';


const InputCard = (props) => {
  const {
    data,
    children,
    name,
    className,
    reset,
    onClick,
    intl,
  } = props;

  // se il dato predefito non è indicato, torna il componente per l'inserimento manuale dei dati
  if (data === null) {
    return children;
  }

  const mergedClass = `input-card ${className}`;

  return (
    <div className={mergedClass}>
      <Card
        {...data}
        name={name}
        className="input-card__card card--input"
        intl={intl}
      >
        <ButtonData className="input-card__reset" data={reset} onClick={onClick}>
          <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
        </ButtonData>
      </Card>
    </div>
  );
};


InputCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  target: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.object,
  className: PropTypes.string,
  reset: PropTypes.object,
  onClick: PropTypes.func,
  intl: PropTypes.objectOf(PropTypes.string),
};

InputCard.defaultProps = {
  className: '',
  data: null,
  reset: null,
  onClick: () => {},
  ids: {},
};


export default memo(InputCard);
