import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createRoutes from '../../routes/routes.index.js';


/**
 * Iterate an array of objects to return the application routes
 * @param {*} routeProps Route properties
 */
const mapRoutes = (routeProps) => {
  const {
    component,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`} component={component} />
  );
};


/**
 *
 */
class MainComponent extends PureComponent {
  render() {
    const { store } = this.props;

    const routes = createRoutes(store);

    const Primary = routes.primary.map(mapRoutes);

    return (
      <Switch>
        {/* <Template> */}
          {Primary}
        {/* </Template> */}
      </Switch>
    );
  }
}


/**
 * Define component properties types
 */
MainComponent.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
};


export default MainComponent;
