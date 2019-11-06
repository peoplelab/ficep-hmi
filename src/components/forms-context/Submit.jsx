//----------------------------------------------------------------------------------------
// File: Submit.jsx
//
// Desc: Pulsante form per la conferma e l'invio dei dati contenuti nella form corrente
// Path: /src/components/forms/Submit
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/form.store';

// import '\.\./\.\./styles/forms-context/input\.scss';


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
      name,
      disabled: disabledProp,
      className,
      required,
      onSubmit: _onSubmit, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;
    const [state] = this.context;
    const { validity, ...fields } = state;

    const mergedClass = `btn btn-large btn-dark ${className}`;

    const disabled = required.reduce((acc, key) => (
      acc || fields[key] === undefined || fields[key] === null || fields[key] === ''
    ), disabledProp || validity === false);

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
