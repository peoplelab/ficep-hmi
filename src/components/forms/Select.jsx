//------------------------------------------------------------------------------------------
// File: Select.jsx
//
// Desc: Campo di input per la selezione e la gestione di singoli dati indicati in una lista
// Path: /src/components/forms/Select
//------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.mapOptions = this.mapOptions.bind(this);
  }

  mapOptions(data) {
    const { value, message } = data;

    return (
      <option value={value} key={`option-${value}`} >
        {message}
      </option>
    );
  }

  render() {
    const {
      children,
      className,
      name,
      options,
      ...rest
    } = this.props;

    const mergedClass = `input input__select ${className}`;

    const Options = options.map(this.mapOptions);

    return (
      <select
        id={name}
        {...rest}
        className={mergedClass}
        name={name}
      >
        {children}
        {Options}
      </select>
    );
  }
}

const shapeOptions = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};


Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)),
  className: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  options: [],
  className: '',
};


export default Select;
