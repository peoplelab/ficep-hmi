//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Anchor from '../layouts/Anchor';

import dashboard from '../../../public/icons/ic-dashboard.svg';
import programs from '../../../public/icons/ic-folder.svg';
import settings from '../../../public/icons/ic-settings.svg';
import tools from '../../../public/icons/ic-tools.svg';

import '../../styles/templates/logged.style.scss';


const HomeRoute = (props) => {
  const { children } = props;

  return (
    <div className="logged">
      <header className="logged__header">
        HEADER
      </header>
      <section className="logged__container">
        <div className="logged__route">
          {children}
        </div>
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
          <div>
            Item
          </div>
        </nav>
      </section>
      <footer className="logged__footer">
        FOOTER
      </footer>
    </div>
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
