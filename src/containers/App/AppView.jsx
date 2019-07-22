import React, { Component } from 'react';
import { Router } from "react-router"; // Handle navigation into the app
// import { BrowserRouter } from 'react-router-dom'; // Handle navigation into the app
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'; // conncet Redux store with React virtual DOM
// import { IntlProvider } from 'react-intl'; // Internationalization of React application
import Main from '../Main'; // Handle routes tree
import history from '../../commons/history'; // Browser history handler
import { getUserIP } from '../../commons/userIP'; // Get user ip address
import { action } from '../../store/actions/session.actions';

import '../../style/main.scss'; // apply common style to application



/**
 * Define root structor of the app
 */
class AppComponent extends Component {
  componentDidMount() {
    const { store } = this.props;
    const params = {
      dispatch: store.dispatch,
      action: action.USER_IP,
    };

    getUserIP(params);
  }
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        {/* <IntlProvider locale={lang} messages={msg}> */}
        <Router history={history}>
          <Main store={store} />
        </Router>
        {/* </IntlProvider> */}
      </Provider>
    );
  }
}


AppComponent.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

AppComponent.defaultProps = {
};


export default AppComponent;
