//----------------------------------------------------------------------------------------------------------
// File: Validation.jsx
//
// Desc: Espone l'oggetto state dello store context al componente padre per eseguire la validazione dei dati
// Path: /src/components/forms/Validation
//----------------------------------------------------------------------------------------------------------


import React, { Fragment, memo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';


const Validation = (props) => {
  const {
    onValidation,
  } = props;

  const [state, dispatch] = useContext(FormContext);

  useEffect(() => {
    const validity = onValidation(state);

    dispatch({
      type: types.ON_CHANGE,
      payload: { validity }
    });
  });

  return <Fragment />;
};

Validation.propTypes = {
  onValidation: PropTypes.func.isRequired,
};

Validation.defaultProps = {
};


export default memo(Validation);
