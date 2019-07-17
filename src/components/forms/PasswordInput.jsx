import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const typeValue = [
  PropTypes.number,
  PropTypes.string,
];


class PasswordInput extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;

    onChange(event);
  }

  render() {
    const {
      name,
      className,
      value,
      onChange: _onChange, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__text ${value === '' ? '' : 'input--edited'} ${className}`;

    return (
      <input
        className={mergedClass}
        type="password"
        id={name}
        name={name}
        value={value}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}


PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType(typeValue),
  onChange: PropTypes.func.isRequired,
};

PasswordInput.defaultProps = {
  className: '',
  value: '',
};


export default PasswordInput;
