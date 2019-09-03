//----------------------------------------------------------------------------------------
// File: Submit.jsx
//
// Desc: Pulsante form per la conferma e l'invio dei dati contenuti nella form corrente
// Path: /src/components/forms/Submit
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Submit extends PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { onSubmit, name, value } = this.props;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value,
      }
    };

    onSubmit(value, newEvent);
  }

  render() {
    const {
      children,
      className,
      disabled: disabledProp,
      required,
      name,
      value,
      ...rest
    } = this.props;

    const mergedClass = `input input__submit ${className}`;

    const disabled = required.reduce((acc, key) => (
      acc || value[key] === undefined || value[key] === null || value[key] === ''
    ), disabledProp);

    return (
      <button
        {...rest}
        className={mergedClass}
        type="button"
        name={name}
        disabled={disabled}
        onClick={this.onSubmit}
        >
        {children}
      </button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  disabled: false,
  className: '',
  required: [],
};


export default Submit;
