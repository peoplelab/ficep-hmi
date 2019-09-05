//------------------------------------------------------------------------------------------------------
// File: GetStore.jsx
//
// Desc: Espone l'oggetto state, dello store context del componente padre, al componente React chiamante
// Path: /src/components/forms/GetStore
//------------------------------------------------------------------------------------------------------


import React, { Fragment, memo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/form.store';


const GetStore = (props) => {
  const {
    getter,
  } = props;

  const [state] = useContext(FormContext);

  useEffect(() => { getter(state); });

  return <Fragment />;
};

GetStore.propTypes = {
  getter: PropTypes.func.isRequired,
};

GetStore.defaultProps = {
};


export default memo(GetStore);
