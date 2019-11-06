//----------------------------------------------------------------------------------------
// File: Reset.jsx
//
// Desc: Pulsante form per il reset del valore dei campi della form corrente
// Path: /src/components/forms/Reset
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Reset extends PureComponent {
  constructor(props) {
    super(props);

    this.onReset = this.onReset.bind(this);
  }

  onReset(event) {
    event.preventDefault();
    const { onReset } = this.props;

    onReset(event);
  }

  render() {
    const {
      children,
      className,
      name,
      onReset: _onReset, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `btn ${className}`;

    return (
      <button
        {...rest}
        className={mergedClass}
        type="reset"
        name={name}
        onClick={this.onReset}
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
  onReset: PropTypes.func.isRequired,
};

Reset.defaultProps = {
  children: null,
  className: '',
};


export default Reset;
