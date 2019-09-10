//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Template delle pagine del flusso privato
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OuterClick from '../common/OuterClick';
import Button from '../layouts/Button';
import Card from '../layouts/Card.view';
import Clock from '../layouts/Clock.view';
import UserModal from '../modal/UserModal.view';

import '../../styles/templates/logged.style.scss';


class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { openModal: false };

    this.onClick = this.onClick.bind(this);
    this.onOuterClick = this.onOuterClick.bind(this);
  }

  onClick() {
    this.setState((prevState) => ({ openModal: !(prevState.openModal) }));
  }

  onOuterClick() {
    this.setState(() => ({ openModal: false }));
  }

  render()  {
    const { username, groups, culture } = this.props;
    const { openModal } = this.state;

    return (
      <header className="logged__header">
        <div className="logged__header-box logged__header-box--left">HEADER</div>
        <div className="logged__header-box logged__header-box--right">
          <Button className="logged__header-button" onClick={this.onClick}>
            <Card className="logged__header-card" username={username} groups={groups} culture={culture} />
          </Button>
          <Clock className="logged__header-clock" />
          <OuterClick onOuterClick={this.onOuterClick}>
            <UserModal visible={openModal} />
          </OuterClick>
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
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  culture: PropTypes.string.isRequired,
};

/**
 * Define default value of component properties
 */
Header.defaultProps = {
};


export default Header;
