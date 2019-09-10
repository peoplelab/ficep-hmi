//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavBar from './Logged.item.Navbar';
import Header from './Logged.item.Header';
import Footer from './Logged.item.Footer';
import Jog from './Logged.item.Jog';

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
    const { children, header } = this.props;

    const containerClass = `logged__container ${this.state.reverse ? 'logged__container--reverse' : ''}`;

    return (
      <div className="logged">
        <Header {...header} />
        <section className={containerClass}>
          <div className="logged__route">
            {children}
          </div>
          <NavBar reverse={this.state.reverse} onReverse={this.onReverse} />
        </section>
        <Footer />
        <Jog />
      </div>
    );
  }
}


const shapeHeader = {
  username: PropTypes.string.isRequired,
  culture: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
};


/**
 * Define component properties types
 */
LoggedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.shape(shapeHeader),
};

/**
 * Define default value of component properties
 */
LoggedTemplate.defaultProps = {
};


export default LoggedTemplate;
