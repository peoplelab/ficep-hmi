//----------------------------------------------------------------------------------------
// File: PasswordInput.jsx
//
// Desc: Campo di input per l'inserimento e la gestione delle password
// Path: /src/components/forms/PasswordInput
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const PasswordInput = (props) => {
  const {
    className,
    name,
    ...rest
  } = props;

  const mergedClass = `input-password ${className}`;

  return (
    <input
      id={name}
      {...rest}
      className={mergedClass}
      type="password"
      name={name}
    />
  );
};


PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PasswordInput.defaultProps = {
  className: '',
};


export default memo(PasswordInput);
