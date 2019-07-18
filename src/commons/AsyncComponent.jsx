import React, { Component as ReactComponent } from 'react';

/**
 * Handle asynchronous loading of React components
 * If require, it send the Redux store to the component
 * @param {object} store
 */
const AsyncComponent = store => /** @param {React} importComponent */ importComponent => (
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
