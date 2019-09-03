//----------------------------------------------------------------------------------------
// File: ButtonForm.jsx
//
// Desc: Pulsante form per la selezione di dati specifici al click del mouse
// Path: /src/components/forms/ButtonForm
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonForm extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { name, value, onClick } = this.props;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value,
      }
    };

    onClick(newEvent);
  }

  render() {
    const {
      children,
      className,
      name,
      value: _value, // eslint-disable-line no-unused-vars
      onClick: _onClick, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__button ${className}`;

    return name && (
      <button
        {...rest}
        className={mergedClass}
        name={name}
        type="button"
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}


ButtonForm.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
};

ButtonForm.defaultProps = {
  children: null,
  className: '',
  value: undefined,
  onClick: null,
};


export default ButtonForm;
