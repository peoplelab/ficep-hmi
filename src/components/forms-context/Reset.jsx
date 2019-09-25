//----------------------------------------------------------------------------------------
// File: Reset.jsx
//
// Desc: Pulsante form per resettare lo store ai valori iniziali indicati
// Path: /src/components/forms/Reset
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form.store';

import '../../styles/forms-context/input.scss';


class Reset extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const {
      name, initial, onClick,
    } = this.props;
    const [, dispatch] = this.context;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value: initial,
      }
    };

    dispatch({
      type: types.ON_CHANGE,
      payload: initial
    });

    if (typeof onClick === 'function') {
      onClick(newEvent);
    }
  }

  render() {
    const {
      children,
      className,
      name,
      initial: _initial, // eslint-disable-line no-unused-vars
      onClick: _onClick, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__reset ${className}`;

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


Reset.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  initial: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Reset.defaultProps = {
  children: null,
  className: '',
  onClick: null,
};


export default Reset;
