//----------------------------------------------------------------------------------------
// File: Form.jsx
//
// Desc: Componente form per l'incapsulamento e gestione dei dati
// Path: /src/components/forms/Form
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormProvider } from '../../store/form.store';


const Form = (props) => {
  const {
    children,
    className,
    initial,
    ...rest
  } = props;

  const mergedClass = `form ${className}`;

  return (
    <FormProvider initial={initial}>
      <form
        {...rest}
        className={mergedClass}
        onSubmit={null}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string,
  initial: PropTypes.object,
};

Form.defaultProps = {
  className: '',
  initial: {},
};


export default memo(Form);
