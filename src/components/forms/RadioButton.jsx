//---------------------------------------------------------------------------------------------
// File: RadioButton.jsx
//
// Desc: Campo di input per la selezione e la gestione di singoli dati data una scelta multipla
// Path: /src/components/forms/RadioButton
//---------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const RadioButton = (props) => {
    const {
      className,
      name,
      ...rest
    } = props;

    const mergedClass = `input input__text ${className}`;

    return (
      <input
        id={name}
        {...rest}
        className={mergedClass}
        type="radio"
        name={name}
      />
    );
  };


RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  className: '',
};


export default memo(RadioButton);
