import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './style/sandbox.style.scss';


const SandBoxLink = (props) => (
  <Link
    className="sandbox-link"
    replace
    to="/sandbox"
  >
    Go to Sandbox
  </Link>
);


SandBoxLink.propTypes = {
};

SandBoxLink.defaultProps = {
};


export default memo(SandBoxLink);
