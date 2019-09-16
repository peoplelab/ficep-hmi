//------------------------------------------------------------------------------------------------------------------------------
// File: InputCard.jsx
//
// Desc: Campo di input specifico per la gestione tra dati predefiniti e dati inseriti dall'utente. Presenta un layout specifico
// Path: /src/components/forms-custom/InputCard
//------------------------------------------------------------------------------------------------------------------------------


import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import Reset from '../forms-context/Reset';
import Card from '../layouts/Card.view';
import { FormContext } from '../../store/form.store';

import * as resetIcon from '../../../public/icons/ic-close.svg';

import '../../styles/forms-custom/InputCard.style.scss';


const InputCard = (props) => {
  const {
    children,
    name,
    className,
    intl,
    initial,
  } = props;

  console.log(initial);
  const [{ data }] = useContext(FormContext);

  // se il dato predefito non è indicato, torna il componente per l'inserimento manuale dei dati
  if (data === null) {
    return children;
  }

  const mergedClass = `input-card ${className}`;

  return (
    <Box className={mergedClass}>
      <Card {...data} intl={intl} className="input-card__card" />
      <Reset className="input-card__reset" initial={initial} name={name}>
        <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
      </Reset>
    </Box>
  );
};


InputCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  initial: PropTypes.object.isRequired,
  data: PropTypes.object,
  className: PropTypes.string,
  intl: PropTypes.objectOf(PropTypes.string),
};

InputCard.defaultProps = {
  className: '',
  data: null,
  intl: {},
};


export default memo(InputCard);
