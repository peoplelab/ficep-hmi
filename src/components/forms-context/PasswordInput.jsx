//----------------------------------------------------------------------------------------
// File: PasswordInput.jsx
//
// Desc: Campo di input per l'inserimento e la gestione delle password
// Path: /src/components/forms/PasswordInput
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';


class PasswordInput extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onChange, onTest } = this.props;
    const { name, value } = event.target;
    const [, dispatch] = this.context;

    let test = typeof onTest !== 'function' || onTest(event);

    if (test) {
      dispatch({
        type: types.ON_CHANGE,
        payload: {
          [name]: value,
        }
      });
    }

    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  render() {
    const {
      className,
      name,
      onChange: _onChange, // eslint-disable-line no-unused-vars
      onTest: _onTest, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;
    const [state] = this.context;

    const mergedClass = `input input__password ${className}`;

    return (
      <input
        id={name}
        {...rest}
        className={mergedClass}
        type="password"
        name={name}
        value={state[name]}
        onChange={this.onChange}
      />
    );
  }
}


PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onTest: PropTypes.func,
};

PasswordInput.defaultProps = {
  className: '',
  onChange: null,
  onTest: null,
};


export default PasswordInput;
