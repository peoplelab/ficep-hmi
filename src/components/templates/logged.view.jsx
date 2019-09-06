//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Anchor from '../layouts/Anchor';
import Button from '../layouts/Button';

import '../../styles/templates/logged.style.scss';


class LoggedTemplate extends PureComponent {
  constructor(props) {
    super(props);

    this.state= {
      reverse: false
    };

    this.onReverse = this.onReverse.bind(this);
  }

  onReverse() {
    this.setState((prevState) => ({ reverse: !(prevState.reverse) }));
  }

  render() {
    const { children } = this.props;

    const containerClass = `logged__container ${this.state.reverse ? 'logged__navbar--reverse' : ''}`;
    const reverseClass = `logged__reverse-icon ${this.state.reverse ? 'ic-right-hand' : 'ic-left-hand'}`;

    return (
      <div className="logged">
        <header className="logged__header">
          HEADER
        </header>
        <section className={containerClass}>
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
            <Button className="logged__reverse" onClick={this.onReverse}>
              <i className={reverseClass} />
            </Button>
          </nav>
        </section>
        <footer className="logged__footer">
          FOOTER
        </footer>
      </div>
    );
  }
}


/**
 * Define component properties types
 */
LoggedTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * Define default value of component properties
 */
LoggedTemplate.defaultProps = {
};


export default LoggedTemplate;
