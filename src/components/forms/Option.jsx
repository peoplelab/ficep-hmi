import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';



class Option extends PureComponent {
  render() {
    const {
      message,
      value,
    } = this.props;

    return (
      <option value={value}>
        {message}
      </option>
    );
  }
}


Option.propTypes = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Option.defaultProps = {
};


export default Option;
