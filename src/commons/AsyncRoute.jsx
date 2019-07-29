import React, { Component as ReactComponent } from 'react';


/**
 * Handle asynchronous loading of React components
 *
 * Note: if required, it sends Redux store to component
 * @param {object} store Redux store
 */
const AsyncRoute = store => /** @param {React} importComponent React async component */ importComponent => (
  class extends ReactComponent {
    constructor(props) {
      super(props);

      /**
       * Prevent setState on unmounted compoent
       */
      this._isMounted = false;

      /**
       * Load component when ready
       */
      this.state = { Component: null };
    }

    componentDidMount() {
      this._isMounted = true;
      /**
       * Retrive asynchronous the async component to render
       */
      importComponent().then((root) => {
        if (!(this._isMounted) ){
          return;
        }

        const { Component, KEY, reducers, watchers } = root;

        /**
         * Inject the async reducer into the store only if defined with an id key
         */
        if (typeof KEY === 'string' && KEY !== '' && typeof reducers !== 'undefined') {
          store.injectReducers(KEY, reducers);
        }

        /**
         * Run sagas watchers only if defined
         */
        if (typeof KEY === 'string' && KEY !== '' && Array.isArray(watchers)) {
          store.saga.run(KEY, watchers);
        }

        /**
         * Update the React component handler only when the async component is loaded
         */
        this.setState({ Component, key: KEY });
      });
    }

    componentWillUnmount() {
      if (!(this._isMounted) ){
        return;
      }
      store.saga.cancel(this.state.key);

      this._isMounted = false;
    }

    /**
     * Render the async component only when is stored into this.state
     */
    render() {
      let { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncRoute;
