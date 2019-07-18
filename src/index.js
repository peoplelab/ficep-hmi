import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
//import App from './containers/App';
import App from './containers/App/App.index.js';
import createStore from './store/store.index';


if (process.env.NODE_ENV !== 'PRODUCTION') {
  setConfig({ logLevel: 'debug' });
}

// eslint-disable-next-line no-underscore-dangle
const store = createStore();


ReactDOM.render(
  React.createElement(App, { store }, null),
  document.getElementById('root'),
);
