//----------------------------------------------------------------------------------------
// File: Submit.jsx
//
// Desc: Pulsante form per la conferma e l'invio dei dati contenuti nella form corrente
// Path: /src/components/forms/Submit
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';

import '../../styles/forms-context/input.scss';


class Submit extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { onSubmit, name, resettable, initial } = this.props;
    const [state, dispatch] = this.context;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value: state,
      }
    };

    onSubmit(state, newEvent);

    if (resettable) {
      dispatch({
        type: types.ON_CHANGE,
        payload: initial
      });
    }
  }

  render() {
    const {
      children,
      name,
      disabled: disabledProp,
      resettable: _resettable, // eslint-disable-line no-unused-vars
      className,
      initial: _initial, // eslint-disable-line no-unused-vars
      required,
      onSubmit: _onSubmit, // eslint-disable-line no-unused-vars
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
  resettable: PropTypes.bool,
  className: PropTypes.string,
  initial: PropTypes.object,
  required: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  disabled: false,
  resettable: false,
  className: '',
  initial: null,
  required: [],
};


export default Submit;
