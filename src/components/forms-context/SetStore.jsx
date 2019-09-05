//-------------------------------------------------------------------------------------------
// File: SetStore.jsx
//
// Desc: Innietta nei componenti figli il dispatcher dello store context del componente padre
//       Da utilizzare per componenti form custom
// Path: /src/components/forms/SetStore
//-------------------------------------------------------------------------------------------


import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/form.store';


const SetStore = (props) => {
  const { children, event } = props;

  const [, dispatch] = useContext(FormContext);

  const newChildren = React.Children.map(children, child => {
    if (!(React.isValidElement(child))) {
      return;
    }

    return React.cloneElement(child, { [event]: dispatch });
  });

  return newChildren;
};

SetStore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  event: PropTypes.string.isRequired
};

SetStore.defaultProps = {
};


export default memo(SetStore);
