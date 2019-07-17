import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const typeValue = [
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
];


class RadioButton extends PureComponent {
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
      id,
      name,
      checked,
      className,
      value,
      onChange: _onChange, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__radio ${value === '' ? '' : 'input--edited'} ${className}`;

    return (
      <input
        className={mergedClass}
        type="radio"
        id={id || name}
        name={name}
        value={value}
        checked={checked}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}


RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(typeValue).isRequired,
  checked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
  checked: false,
  id: '',
  className: '',
};


export default RadioButton;
