import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/layout/Box/Box.index';


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
