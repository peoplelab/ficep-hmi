import React, { Component as ReactComponent } from 'react';


/**
 * Handle asynchronous loading of React components
 *
 * Note: if required, it sends Redux store to component
 * @param {React} importComponent React async component
 */
const AsyncComponent = importComponent => (
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
      importComponent().then((component) => {
        if (!(this._isMounted) ){
          return;
        }

        let Component = component.default;

        /**
         * Update the React component handler only when the async component is loaded
         */
        this.setState({ Component });
      });
    }

    componentWillUnmount() {
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

export default AsyncComponent;
