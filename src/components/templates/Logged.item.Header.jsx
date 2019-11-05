//----------------------------------------------------------------------------------------
// File: Logged.item.Header.jsx
//
// Desc: Intestazione dell'applicazione
// Path: /src/components/templates/Logged/Logged.item.Header
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { OuterClick } from '../events/index.events';
import { Button, Card, Clock } from '../layouts/index.layouts';
import { UserModal } from '../modal/index.modal';

import '../../styles/templates/logged.style.scss';


class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { openModal: false };

    this.onClick = this.onClick.bind(this);
    this.onOuterClick = this.onOuterClick.bind(this);

    this.intlCard = {
      ADMIN: window.intl.header_user_administrator,
      SUPERUSER: window.intl.header_user_technician,
      USER: window.intl.header_user_operator,
      lastaccess: window.intl.header_info_lastaccess,
    };
  }

  onClick() {
    this.setState((prevState) => ({ openModal: !(prevState.openModal) }));
  }

  onOuterClick() {
    this.setState(() => ({ openModal: false }));
  }

  render()  {
    const { username, role, culture } = this.props;
    const { openModal } = this.state;

    return (
      <header className="logged__header">
        <div className="logged__header-box logged__header-box--left">HEADER</div>
        <div className="logged__header-box logged__header-box--right">
          <OuterClick className="logged__header-outerhandler" onOuterClick={this.onOuterClick}>
            <Button className="logged__header-button" onClick={this.onClick}>
              <Card className="card--small" username={username} role={role} culture={culture} intl={this.intlCard} />
            </Button>
            <UserModal visible={openModal} onClick={this.onClick}/>
          </OuterClick>
          <Clock className="logged__header-clock" />
        </div>
      </header>
    );
  }
}


/**
 * Define component properties types
 */
Header.propTypes = {
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  culture: PropTypes.string.isRequired,
};

/**
 * Define default value of component properties
 */
Header.defaultProps = {
};


export default Header;
