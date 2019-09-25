//----------------------------------------------------------------------------------------
// File: RadioButton.jsx
//
// Desc: Campo di input per la selezione e la gestione di singoli dati data una scelta multipla
// Path: /src/components/forms/RadioButton
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';

import '../../styles/forms-context/input.scss';


class RadioButton extends PureComponent {
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

    const mergedClass = `input input__radio ${className}`;

    return (
      <input
        id={name}
        {...rest}
        className={mergedClass}
        type="radio"
        name={name}
        value={state[name]}
        onChange={this.onChange}
      />
    );
  }
}


RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onTest: PropTypes.func,
};

RadioButton.defaultProps = {
  className: '',
  onChange: null,
  onTest: null,
};


export default RadioButton;
