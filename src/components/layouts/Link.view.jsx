//----------------------------------------------------------------------------------------
// File: Link.jsx
//
// Desc: Pulsante per l'apertura di link
// Path: /src/components/layouts/Link
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import '../../styles/layouts/Link.style.scss';


const Link = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const mergedClass = `link columns flex-between btn btn-transparent ${className}`;

  return (
    <Button className={mergedClass} {...rest} >
      <span className="link__section" >
        {children}
      </span>
      <span className="link__section" >
        <i className="link__icon ic-arrow-link" />
      </span>
    </Button>
  );
};


Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  className: '',
};


export default memo(Link);
