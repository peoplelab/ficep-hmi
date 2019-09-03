//----------------------------------------------------------------------------------------
// File: TextInput.jsx
//
// Desc: Campo di input per l'inserimento e la gestione di valori numerici o testuali
// Path: /src/components/forms/TextInput
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const TextInput = (props) => {
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
      type="text"
      name={name}
    />
  );
};


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
};


export default memo(TextInput);
