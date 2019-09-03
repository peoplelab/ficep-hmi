//----------------------------------------------------------------------------------------
// File: Button.jsx
//
// Desc: Pulsante per l'esecuzione di azioni
// Path: /src/components/layouts/Button
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const mergedClass = `button ${className}`;

  return (
    <button
      className={mergedClass}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
};


export default memo(Button);
