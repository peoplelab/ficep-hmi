import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';


class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.mapOptions = this.mapOptions.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;

    onChange(event);
  }

  mapOptions(data) {
    const { value, message } = data;

    return (<Option value={value} message={message} />);
  }

  render() {
    const {
      name,
      className,
      value,
      options,
      onChange: _onChange, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__select ${value === '' ? '' : 'input--edited'} ${className}`;

    const Options = options.map(this.mapOptions);

    return (
      <select
        className={mergedClass}
        id={name}
        name={name}
        value={value}
        onChange={this.onChange}
        {...rest}
      >
        {Options}
      </select>
    );
  }
}


const typeValue = [
  PropTypes.number,
  PropTypes.string,
];

const shapeOptions = {
  deafult: PropTypes.bool,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)).isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType(typeValue),
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  className: '',
  value: '',
};


export default Select;
