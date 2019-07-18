import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/layouts/Box/Box.index';


class Field extends PureComponent {
  render() {
    const {
      show,
    } = this.props;

    return show && (
      <Box className="login__error">
        <Box className="login__error-alert">
          <p className="login__error-message">
            Something went wrong on login
          </p>
        </Box>
      </Box>
    );
  }
}


Field.propTypes = {
  show: PropTypes.bool,
};

Field.defaultProps = {
  show: false,
};


export default Field;
