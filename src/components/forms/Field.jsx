import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box/Box.index';


/**
 * Form field
 */
class Field extends PureComponent {
  render() {
    const {
      children,
      label,
    } = this.props;

    return (
      <Box className="field">
        <label className="field__label">
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
