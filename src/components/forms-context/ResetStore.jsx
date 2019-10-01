//----------------------------------------------------------------------------------------------------------
// File: ResetStore.jsx
//
// Desc: Su richiesta, forza il reset dello store
// Path: /src/components/forms/ResetStore
//----------------------------------------------------------------------------------------------------------


import React, { Fragment, memo, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';


const ResetStore = (props) => {
  const { doReset, initial } = props;

  const [, dispatch] = useContext(FormContext);

  const [state, setState] = useState({ reset: false });

  useEffect(() => {
    if (state.doReset !== doReset) {
      dispatch({
        type: types.ON_CHANGE,
        payload: initial
      });

      setState({ doReset });
    }
  }, [state.doReset, doReset, dispatch, initial]);

  return <Fragment />;
};

ResetStore.propTypes = {
  doReset: PropTypes.bool.isRequired, // 1,2 resettable -- 0 blocked
  initial: PropTypes.object.isRequired,
};

ResetStore.defaultProps = {
};


export default memo(ResetStore);
