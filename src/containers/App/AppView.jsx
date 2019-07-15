import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import { IntlProvider } from 'react-intl';
import Main from '../Main';

import '../../style/main.scss';


class AppComponent extends PureComponent {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        {/* <IntlProvider locale={lang} messages={msg}> */}
        <BrowserRouter>
          <Main store={store} />
        </BrowserRouter>
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
