//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavBar from './Logged.item.Navbar';

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

    return (
      <div className="logged">
        <header className="logged__header">
          HEADER
        </header>
        <section className={containerClass}>
          <div className="logged__route">
            {children}
          </div>
          <NavBar reverse={this.state.reverse} onReverse={this.onReverse} />
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
