//----------------------------------------------------------------------------------------
// File: Modal.view.jsx
//
// Desc: layout modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/Modal.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import history from '../../models/history/history';
import Enum from '../../utils/Enum';

import '../../styles/layouts/Modal.style.scss';


const headerTypes = [
  'none',
  'title',
  'close',
  'full',
];
const footerTypes = [
  'none',
  'alert',
];

const footerEnum = Enum.from(...footerTypes);
const headerEnum = Enum.from(...headerTypes);

class Modal extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.prevOpen) {
      return {
        open: props.open,
        prevOpen: props.open,
      };
    }

    return null;
  }

	constructor(props) {
    super(props);

    const { open } = props;

    this.state = { open, prevOpen: open };

    this.onClick = this.onClick.bind(this);
    this.setFooter = this.setFooter.bind(this);
    this.setHeader = this.setHeader.bind(this);
  }

  onClick(event) {
    const { onClick, redirect } = this.props;

    if (typeof onClick === 'function') {
      onClick(event);
    }

    this.setState(prevState => ({ open: !(prevState.open) }));

    if (redirect) {
      history.goBack();
    }
  }

  setFooter() {
    const { footer, messages } = this.props;

    switch(footer) {
      case footerEnum.alert: {
        return (
          <footer className="modal__footer modal__footer--alert">
            <Button className="modal__button anchor" onClick={this.onClick}>
              {messages.close}
            </Button>
          </footer>
        );
      }
      default: {
        return null;
      }
    }
  }

  setHeader() {
    const { header, messages } = this.props;

    switch(header) {
      case headerEnum.title: {
        return (
          <header className="modal__head modal__head--title">
            <h1 className="modal__title">
              {messages.title}
            </h1>
          </header>
        );
      }
      case headerEnum.close: {
        return (
          <header className="modal__head modal__head--close">
            <Button className="modal__button" onClick={this.onClick}>
              <i className="modal__icon ic-close" />
            </Button>
          </header>
        );
      }
      case headerEnum.full: {
        return (
          <header className="modal__head modal__head--full">
            <h1 className="modal__title">
              {messages.title}
            </h1>
            <Button className="modal__button" onClick={this.onClick}>
              <i className="modal__icon ic-close" />
            </Button>
          </header>
        );
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const { children, className } = this.props;
    const { open } = this.state;

    const mergedClass = `modal ${className}`;

    const Header = this.setHeader();
    const Footer = this.setFooter();

    return open && (
      <div className={mergedClass}>
        <div className="modal__container">
          {Header}
          <section className="modal__section">
            {children}
          </section>
          {Footer}
        </div>
      </div>
    );
  }
}


/**
 * Define component properties types
 */
Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  redirect: PropTypes.bool,
  className: PropTypes.string,
  messages : PropTypes.object,
  onClick: PropTypes.func,
  footer: PropTypes.oneOf(footerTypes).isRequired,
  header: PropTypes.oneOf(headerTypes).isRequired,
};

/**
 * Define default value of component properties
 */
Modal.defaultProps = {
  children: null,
  open: false,
  redirect: true,
  className: '',
  onClick: null,
  messages: null,
};


export default Modal;
