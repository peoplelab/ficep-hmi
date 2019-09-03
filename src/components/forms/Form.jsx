//----------------------------------------------------------------------------------------
// File: Form.jsx
//
// Desc: Componente form per l'incapsulamento e gestione dei dati
// Path: /src/components/forms/Form
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Form = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const mergedClass = `form ${className}`;

  return (
    <form
      {...rest}
      className={mergedClass}
      onSubmit={null}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};


export default memo(Form);
