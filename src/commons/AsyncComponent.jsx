import React, { Component as ReactComponent } from 'react';

/**
 * Handle asynchronous loading of React components
 * Note: if required, it sends Redux store to component
 * @param {object} store Redux store
 */
const AsyncComponent = store => /** @param {React} importComponent React async component */ importComponent => (
  class extends ReactComponent {
    constructor(props) {
      super(props);

      this.state = { Component: null };
    }

    componentDidMount() {
      /**
       * Retrive asynchronous the async component to render
       */
      importComponent().then((component) => {
        let Component = component.default;

        /**
         * If store param is defined, inject it into the component
         */
        if (typeof store !== 'undefined') {
          Component = Component(store);
        }

        /**
         * Update the React component handler only when the async component is loaded
         */
        this.setState({ Component });
      });
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

export default AsyncComponent;
