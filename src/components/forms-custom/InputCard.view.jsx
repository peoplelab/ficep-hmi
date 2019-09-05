//------------------------------------------------------------------------------------------------------------------------------
// File: InputCard.jsx
//
// Desc: Campo di input specifico per la gestione tra dati predefiniti e dati inseriti dall'utente. Presenta un layout specifico
// Path: /src/components/forms-custom/InputCard
//------------------------------------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import ButtonData from '../layouts/ButtonData';
import Card from '../layouts/Card.view';

import * as resetIcon from '../../../public/icons/icon-close.svg';

import '../../styles/forms-custom/InputCard.style.scss';


const InputCard = (props) => {
  const {
    data,
    children,
    name,
    className,
    reset,
    onClick,
  } = props;

  // se il dato predefito non è indicato, torna il componente per l'inserimento manuale dei dati
  if (data === null) {
    return children;
  }

  const mergedClass = `input-card ${className}`;

  return (
    <Box className={mergedClass}>
      <Card
        {...data}
        name={name}
        className="input-card__card"
      />
      <ButtonData className="input-card__reset" data={reset} onClick={onClick}>
        <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
      </ButtonData>
    </Box>
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
};

InputCard.defaultProps = {
  className: '',
  data: null,
  reset: null,
  onClick: () => {},
};


export default memo(InputCard);
