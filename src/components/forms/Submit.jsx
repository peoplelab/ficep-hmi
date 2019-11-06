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
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(event);
  }

  render() {
    const {
      children,
      className,
      name,
      onSubmit: _onSubmit, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `btn ${className}`;

    return (
      <button
        {...rest}
        className={mergedClass}
        type="submit"
        name={name}
        onClick={this.onSubmit}
        >
        {children}
      </button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  children: null,
  className: '',
};


export default Submit;
