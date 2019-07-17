import React, { Component as ReactComponent } from 'react';

const AsyncRoute = (Component, key, reducers, sagas)  => store => (
  class extends ReactComponent {
    componentDidMount() {
      store.injectReducers(key, reducers);
      store.saga.run(key, sagas);
    }

    componentWillUnmount() {
      store.injectReducers();
      store.saga.remove(key);
    }

    render() {
      return <Component {...this.props} />;
    }
  }
);

export default AsyncRoute;
