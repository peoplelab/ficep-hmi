import {
  applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers.index';
import sagas from './controllers/controllers.index';
import { injectAsyncReducers, reducerConstructor } from '../commons/reducers';
// import SagaHandler from '../commons/sagas';


const { NODE_ENV } = process.env;

const storeConstructor = (initialState = {}) => {
  // Redux Dev-Tools
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers = (
    typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && NODE_ENV !== 'PRODUCTION'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  );

  // Saga middleware
  const saga = createSagaMiddleware();

  // Enhancer
  const enhancer = composeEnhancers(applyMiddleware(saga));

  const combinedReducers = reducerConstructor(reducers);

  // Create store
  const store = createStore(combinedReducers, initialState, enhancer);
  store.asyncReducers = {};

  // Inject async reducers
  store.injectReducers = injectAsyncReducers(store, reducers);

  // Handle sagas
  store.sagaRun = saga.run;
  store.sagaRun(sagas);

  // Hot loader
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const hotReducers = require('./reducers').default;
      const { asyncReducers } = store;
      store.replaceReducer(reducerConstructor(hotReducers, asyncReducers));
    });
  }

  return store;
};


export default storeConstructor;
