import React, { PureComponent } from 'react';
import { Router } from "react-router"; // Handle navigation into the app
// import { BrowserRouter } from 'react-router-dom'; // Handle navigation into the app
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'; // conncet Redux store with React virtual DOM
// import { IntlProvider } from 'react-intl'; // Internationalization of React application
import Main from '../Main'; // Handle routes tree
import history from '../../commons/history'; // Browser history handler

import '../../style/main.scss'; // apply common style to application



/**
 * Define root structor of the app
 */
class AppComponent extends PureComponent {
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
