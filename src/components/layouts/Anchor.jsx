//------------------------------------------------------------------------------------------------------
// File: Anchor.jsx
//
// Desc: Componente per la gestione della navigazione e il reindirizzamente all'interno dell'applicativo
// Path: /src/components/layouts/Anchor
//------------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../styles/layouts/Anchor.scss';


const Anchor = (props) => {
  const {
    children,
    path,
    history,
    replace,
    className,
    exact,
    current,
    staticContext: _staticContext, // eslint-disable-line no-unused-vars
    location: _location, // eslint-disable-line no-unused-vars
    match: _match, // eslint-disable-line no-unused-vars
    ...rest
  } = props;

  const pattern = exact ? `^${path}$` : `^${path}`;
  const regex = new RegExp(pattern);

  let to;
  if (current) {
    const currentPath = history.location.pathname === '/' ? '' : history.location.pathname;
    to = currentPath + path;
  } else {
    to = path;
  }

  const pathClass = regex.test(history.location.pathname) ? 'anchor--active' : '';

  const mergedClass = `anchor ${pathClass} ${className}`;
  return (
    <Link
      className={mergedClass}
      replace={replace}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};


Anchor.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  history : PropTypes.object.isRequired,
  replace: PropTypes.bool,
  exact: PropTypes.bool,
  current: PropTypes.bool,
  className: PropTypes.string,

  staticContext : PropTypes.any,
  location : PropTypes.any,
  match : PropTypes.any,
};

Anchor.defaultProps = {
  children: null,
  replace: false,
  exact: false,
  current: false,
  className: '',

  staticContext: null,
  location: null,
  match: null,
};


export default withRouter(memo(Anchor));
