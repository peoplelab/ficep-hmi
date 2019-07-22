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
 * Define and handle navigation components routes
 */
class MainComponent extends PureComponent {
  render() {
    /**
     * Retrive the store to inject it into the routes
     */
    const { store, isUserLogged } = this.props;

    /**
     * Inject the store into the routes and retrive their map
     */
    const routes = createRoutes(store);

    /**
     * List of primary routes
     */
    const Primary = routes.primary.map(mapRoutes);
    const Secondary = routes.secondary.map(mapRoutes);
    const Logged = isUserLogged ? routes.logged.map(mapRoutes) : [];
    const Messages = isUserLogged ? routes.messages.map(mapRoutes) : [];
    const External = routes.external.map(mapRoutes);

    return (
      <Switch>
        {/* <Template> */}
          {Primary}
        {/* </Template> */}
        {Secondary}
        {Logged}
        {Messages}
        {External}
      </Switch>
    );
  }
}


/**
 * Define component properties types
 */
MainComponent.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isUserLogged: PropTypes.bool,
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
  isUserLogged: false,
};


export default MainComponent;
