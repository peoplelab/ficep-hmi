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
    staticContext: _staticContext, // eslint-disable-line no-unused-vars
    ...rest
  } = props;

  const pattern = exact ? `^${path}$` : `^${path}`;
  const regex = new RegExp(pattern);

  const pathClass = regex.test(history.location.pathname) ? 'anchor--active' : '';

  const mergedClass = `anchor ${pathClass} ${className}`;
  return (
    <Link
      className={mergedClass}
      replace={replace}
      to={path}
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
  staticContext : PropTypes.any,
  replace: PropTypes.bool,
  exact: PropTypes.bool,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  children: null,
  replace: false,
  exact: false,
  className: '',
  staticContext: null,
};


export default withRouter(memo(Anchor));
