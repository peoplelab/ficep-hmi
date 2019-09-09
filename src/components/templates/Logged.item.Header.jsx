//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from '../layouts/Card.view';
import Clock from '../layouts/Clock.view';

import '../../styles/templates/logged.style.scss';


const Header = (props) => {
  const { username, groups, culture } = props;

  return (
    <header className="logged__header">
      <div className="logged__header-box logged__header-box--left">HEADER</div>
      <div className="logged__header-box logged__header-box--right">
        <Card className="logged__header-card" username={username} groups={groups} culture={culture} />
        <Clock className="logged__header-clock" />
      </div>
    </header>
  );
};


/**
 * Define component properties types
 */
Header.propTypes = {
  username: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  culture: PropTypes.string.isRequired,
};

/**
 * Define default value of component properties
 */
Header.defaultProps = {
};


export default memo(Header);
