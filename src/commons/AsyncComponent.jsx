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
      importComponent().then((component) => {
        let Component = component.default;

        if (typeof store !== 'undefined') {
          Component = Component(store);
        }

        this.setState({ Component });
      });
    }

    render() {
      let { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;
