//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import Anchor from '../layouts/Anchor';

import '../../styles/templates/logged.style.scss';


const HomeRoute = (props) => {
  const { children } = props;

  return (
    <Box className="logged">
      <nav className="logged__nav">
        <ul className="logged__list">
          <li className="logged__item">
            <Anchor className="logged__anchor" path="/">
              Vai a <b>Home</b>
            </Anchor>
          </li>
          <li className="logged__item">
            <Anchor className="logged__anchor" path="/tools">
              Vai a <b>Tools</b>
            </Anchor>
          </li>
          <li className="logged__item">
            <Anchor className="logged__anchor" path="/cultures">
              Vai a <b>Cultures</b>
            </Anchor>
          </li>
        </ul>
      </nav>
      <Box className="logged__route">
        {children}
      </Box>
    </Box>
  );
};


/**
 * Define component properties types
 */
HomeRoute.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * Define default value of component properties
 */
HomeRoute.defaultProps = {
};


export default memo(HomeRoute);
