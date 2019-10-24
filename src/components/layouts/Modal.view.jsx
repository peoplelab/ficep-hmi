//----------------------------------------------------------------------------------------
// File: Modal.view.jsx
//
// Desc: layout modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/Modal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
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
  'dialog',
];

const footerEnum = Enum.from(...footerTypes);
const headerEnum = Enum.from(...headerTypes);


class Modal extends Component {
	constructor(props) {
    super(props);

    this.state = { open: props.open };

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.setFooter = this.setFooter.bind(this);
    this.setHeader = this.setHeader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  onClick() {
    const { redirect } = this.props;

    this.setState(prevState => ({ open: false }));

    if (redirect) {
      history.goBack();
    }
  }

  onClose(event) {
    const { onClose } = this.props;

    if (typeof onClose === 'function') {
      onClose(event);
    }

    this.onClick(event);
  }

  onConfirm(event) {
    const { onConfirm } = this.props;

    if (typeof onConfirm === 'function') {
      onConfirm(event);
    }

    this.onClick(event);
  }

  setFooter() {
    const { footer, messages } = this.props;

    switch(footer) {
      case footerEnum.alert: {
        return (
          <footer className="modal__footer modal__footer--alert">
            <Button className="modal__button anchor" onClick={this.onClose}>
              {messages.close}
            </Button>
          </footer>
        );
      }
      case footerEnum.dialog: {
        return (
          <footer className="modal__footer modal__footer--alert">
            <Button className="modal__button anchor YESS" onClick={this.onConfirm}>
              {messages.yes}
            </Button>
            <Button className="modal__button anchor NOO" onClick={this.onClose}>
              {messages.no}
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
            <Button className="modal__button" onClick={this.onClose}>
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
            <Button className="modal__button" onClick={this.onClose}>
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
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
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
  onClose: null,
  onConfirm: null,
  messages: null,
};


export default Modal;
