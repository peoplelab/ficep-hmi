import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/layouts/Box/Box.index';


/**
 * Login form field
 *
 * Note: item own of Login route
 */
class Field extends PureComponent {
  render() {
    const {
      children,
      label,
    } = this.props;

    return (
      <Box className="login__field">
        <label className="login__label">
          {label}
        </label>
        {children}
      </Box>
    );
  }
}


Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

Field.defaultProps = {
};


export default Field;
