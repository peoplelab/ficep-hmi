import React, { memo } from 'react';
import Anchor from '../components/layouts/Anchor';
// import PropTypes from 'prop-types';

import './style/sandbox.style.scss';


const SandBoxLink = (props) => (
  <Anchor
    className="sandbox-link"
    replace
    path="/sandbox"
  >
    Go to Sandbox
  </Anchor>
);


SandBoxLink.propTypes = {
};

SandBoxLink.defaultProps = {
};


export default memo(SandBoxLink);
