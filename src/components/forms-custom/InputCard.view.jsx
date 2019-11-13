//------------------------------------------------------------------------------------------------------------------------------
// File: InputCard.jsx
//
// Desc: Campo di input specifico per la gestione tra dati predefiniti e dati inseriti dall'utente. Presenta un layout specifico
// Path: /src/components/forms-custom/InputCard
//------------------------------------------------------------------------------------------------------------------------------


import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import Reset from '../forms-context/Reset';
import { Card } from '../layouts/index.layouts';
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

  const [{ data }] = useContext(FormContext);

  // se il dato predefito non è indicato, torna il componente per l'inserimento manuale dei dati
  if (data === null) {
    return children;
  }

  const mergedClass = `input-card columns flex-between full-width ${className}`;

  [data.role] = data.groups;

  return (
    <div className={mergedClass}>
      <Card {...data} intl={intl} className="card--input columns flex-between flex-wrap fill full-height" />
      <Reset className="input-card__reset input__reset--simple btn btn-tansparent btn-icon" initial={initial} name={name}>
        <img className="input-card__reset-icon full-width" src={resetIcon} alt="reset" />
      </Reset>
    </div>
  );
};


InputCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  initial: PropTypes.object.isRequired,
  className: PropTypes.string,
  intl: PropTypes.objectOf(PropTypes.string),
};

InputCard.defaultProps = {
  className: '',
  intl: {},
};


export default memo(InputCard);
