//------------------------------------------------------------------------------------------
// File: Select.jsx
//
// Desc: Campo di input per la selezione e la gestione di singoli dati indicati in una lista
// Path: /src/components/forms/Select
//------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';


class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.mapOptions = this.mapOptions.bind(this);
  }

  mapOptions(data) {
    const { value, message } = data;

    return (
      <Option
        value={value}
        message={message}
        key={`option-${value}`}
      />
    );
  }

  render() {
    const {
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
        {Options}
      </select>
    );
  }
}

const shapeOptions = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)).isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};


export default Select;
