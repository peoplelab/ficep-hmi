//-------------------------------------------------------------------------------------------
// File: SetStore.jsx
//
// Desc: Innietta nei componenti figli il dispatcher dello store context del componente padre
//       Da utilizzare per componenti form custom
// Path: /src/components/forms/SetStore
//-------------------------------------------------------------------------------------------


import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';


const SetStore = (props) => {
  const { children, event, setter } = props;

  const [state, dispatcher] = useContext(FormContext);

  const dispatch = (payload) => {
    dispatcher({
      type: types.ON_CHANGE,
      payload,
    });
  };

  const hanlder = setter(state, dispatch);

  const newChildren = React.Children.map(children, child => React.cloneElement(child, { [event]: hanlder }));

  return newChildren;
};

SetStore.propTypes = {
  children: PropTypes.element.isRequired,
  event: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};

SetStore.defaultProps = {
};


export default memo(SetStore);
