//----------------------------------------------------------------------------------------
// File: Area.jsx
//
// Desc: Abilita/Disabilita un determinato insieme di elementi React
//       Non usare direttamente, preferire le "classi figlie" admin, super o user
// Path: /src/components/session/Area
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Area = (props) => {
  const {
    children,
    enable,
    reverse,
  } = props;

  if (reverse) {
    return !enable && (
      <>
        {children}
      </>
    );
  }

  return enable && (
    <>
      {children}
    </>
  );
};


Area.propTypes = {
  children: PropTypes.node.isRequired,
  enable: PropTypes.bool.isRequired,
  reverse: PropTypes.bool,
};

Area.defaultProps = {
  reverse: false,
};


export default memo(Area);
