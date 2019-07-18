/**
 * Handle the app asynchronous routes, add the relative reducers into the store and start the sagas watchers
 * @param {React} Component
 * @param {string} key
 * @param {Function} reducers
 * @param {Generator} sagas
 */
const AsyncRoute = (Component, key, reducers, sagas) => store => {
  store.injectReducers(key, reducers);

  if (typeof sagas !== 'undefined') {
    store.sagaRun(sagas);
  }

  return Component;
};


export default AsyncRoute;
