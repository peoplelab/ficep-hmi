import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/layouts/Box/Box.index';


/**
 * Login Error banner
 *
 * Note: item own of Login route
 */
class LoginError extends PureComponent {
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


LoginError.propTypes = {
  show: PropTypes.bool,
};

LoginError.defaultProps = {
  show: false,
};


export default LoginError;
