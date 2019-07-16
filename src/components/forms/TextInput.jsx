import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const typeValue = [
  PropTypes.number,
  PropTypes.string,
];


class TextInput extends PureComponent {
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
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType(typeValue),
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  className: '',
  value: '',
};


export default TextInput;
