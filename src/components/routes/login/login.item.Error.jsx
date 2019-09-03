//----------------------------------------------------------------------------------------
// File: login.item.Error.jsx
//
// Desc: Elemento proprio della login per la visualizzazione di un messaggio di errore
// Path: /src/components/routes/login/login.item.Error
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../layouts/Box';


class ErrorItem extends PureComponent {
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


ErrorItem.propTypes = {
  show: PropTypes.bool,
};

ErrorItem.defaultProps = {
  show: false,
};


export default ErrorItem;
