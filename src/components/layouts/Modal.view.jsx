//----------------------------------------------------------------------------------------
// File: Modal.view.jsx
//
// Desc: layout modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/Modal.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import '../../styles/layouts/Modal.style.scss';


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
  }

  onClick(event) {
    const { onClick } = this.props;

    if (typeof onClick === 'function') {
      onClick(event);
    }

    this.setState(prevState => ({ open: !(prevState.open) }));
  }

  render() {
    const { children, className, disabled, title } = this.props;
    const { open } = this.state;

    const mergedClass = `modal ${className}`;

    return open && (
      <div className={mergedClass}>
        <div className="modal__container">
          {!disabled && (
            <header className="modal__head">
              <h1 className="modal__title">
                {title}
              </h1>
              <Button className="modal__button" onClick={this.onClick}>
                <i className="modal__icon ic-close" />
              </Button>
            </header>
          )}
          <section className="modal__section">
            {children}
          </section>
        </div>
      </div>
    );
  }
}


/**
 * Define component properties types
 */
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Define default value of component properties
 */
Modal.defaultProps = {
  disabled: false,
  open: false,
  className: '',
  title: '',
  onClick: null,
};


export default Modal;
