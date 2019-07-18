/**
 * Handle the app asynchronous routes, add the relative reducers into the store and start the sagas watchers
 * @param {React} Component React component
 * @param {string} key Reducer state key
 * @param {Function} reducers Reducers handler
 * @param {Generator} sagas Saga watchers handler
 */
const AsyncRoute = (Component, key, reducers, sagas) => store => {
  store.injectReducers(key, reducers);

  if (typeof sagas !== 'undefined') {
    store.sagaRun(sagas);
  }

  return Component;
};


export default AsyncRoute;
