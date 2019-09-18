//----------------------------------------------------------------------------------------
// File: Logged.item.Jog.jsx
//
// Desc: Link alle pagine dei comandi
// Path: /src/components/templates/Logged/Logged.item.Jog
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Anchor } from '../layouts/index.layouts';


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
