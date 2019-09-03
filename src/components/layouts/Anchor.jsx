//------------------------------------------------------------------------------------------------------
// File: Anchor.jsx
//
// Desc: Componente per la gestione della navigazione e il reindirizzamente all'interno dell'applicativo
// Path: /src/components/layouts/Anchor
//------------------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/layouts/Anchor.scss';


class Anchor extends PureComponent {
  render() {
    const {
      children,
      path,
      replace,
      className,
      ...rest
    } = this.props;

    const mergedClass = `anchor ${className}`;
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
  }
}


Anchor.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  replace: PropTypes.bool,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  children: null,
  replace: false,
  className: '',
};


export default Anchor;
