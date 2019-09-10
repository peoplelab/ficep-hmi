//----------------------------------------------------------------------------------------
// File: Box.jsx
//
// Desc: Componente React con il ruolo di contenitore generico
// Path: /src/components/layouts/Box
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Anchor from '../layouts/Anchor';


const Footer = (props) => (
  <div className="logged__jog" >
    <Anchor className="logged__anchor anchor--circle" exact path="/jog">
      <i className="anchor__icon ic-arrow-drag" />
    </Anchor>
  </div>
);


Footer.propTypes = {
};

Footer.defaultProps = {
};


export default memo(Footer);
