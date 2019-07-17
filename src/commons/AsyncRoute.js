const AsyncRoute = (Component, key, reducers, sagas) => store => {
  store.injectReducers(key, reducers);

  if (typeof sagas !== 'undefined') {
    store.sagaRun(sagas);
  }

  return Component;
};


export default AsyncRoute;
