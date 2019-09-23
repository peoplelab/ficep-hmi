//----------------------------------------------------------------------------------------
// File: Submit.jsx
//
// Desc: Pulsante form per la conferma e l'invio dei dati contenuti nella form corrente
// Path: /src/components/forms/Submit
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/form.store';


class Submit extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { onSubmit, name } = this.props;
    const [state] = this.context;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value: state,
      }
    };

    onSubmit(state, newEvent);
  }

  render() {
    const {
      children,
      className,
      disabled: disabledProp,
      required,
      name,
      ...rest
    } = this.props;
    const [state] = this.context;

    const mergedClass = `input input__submit ${className}`;

    const disabled = required.reduce((acc, key) => (
      acc || state[key] === undefined || state[key] === null || state[key] === ''
    ), disabledProp);

    const onClick = disabled ? undefined : this.onSubmit;

    return (
      <button
        {...rest}
        className={mergedClass}
        type="submit"
        name={name}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
      </button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
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
