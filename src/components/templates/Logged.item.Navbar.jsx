//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Anchor from '../layouts/Anchor';
import Button from '../layouts/Button';

import '../../styles/templates/logged.style.scss';


const Navbar = (props) => {
  const { reverse, onReverse } = props;

  const reverseClass = `logged__reverse-icon ${reverse ? 'ic-right-hand' : 'ic-left-hand'}`;

  return (
    <nav className="logged__navbar">
      <ul className="logged__list">
        <li className="logged__item">
          <Anchor className="logged__anchor anchor--tile" path="/">
            <i className="anchor__icon ic-dashboard" />
          </Anchor>
        </li>
        <li className="logged__item">
          <Anchor className="logged__anchor anchor--tile" path="/programs">
            <i className="anchor__icon ic-programs" />
          </Anchor>
        </li>
        <li className="logged__item">
          <Anchor className="logged__anchor anchor--tile" path="/tools">
            <i className="anchor__icon ic-tools" />
          </Anchor>
        </li>
        <li className="logged__item">
          <Anchor className="logged__anchor anchor--tile" path="/settings">
            <i className="anchor__icon ic-settings" />
          </Anchor>
        </li>
      </ul>
      <Button className="logged__reverse" onClick={onReverse}>
        <i className={reverseClass} />
      </Button>
    </nav>
  );
};


/**
 * Define component properties types
 */
Navbar.propTypes = {
  reverse: PropTypes.bool.isRequired,
  onReverse: PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
Navbar.defaultProps = {
};


export default memo(Navbar);
