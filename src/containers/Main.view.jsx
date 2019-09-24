//-----------------------------------------------------------------------------------
// File: Main.view.jsx
//
// Desc: Componente per la gestione delle pagine dell'applicazione
// Path: /src/container/Main.view
//-----------------------------------------------------------------------------------


import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createRoutes from './Router';
import LoggedTemplate from '../components/templates/Logged.container';


// Partendo da una lista di oggetti, ritorna una lista di componeti React di tipo Route, corrispondenti alle pagine dell'applicativo
const mapRoutes = (routeProps) => {
  const {
    Component,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`} render={props => <Component {...props} />} />
  );
};


// Definizione del gestore delle pagine dell'applicativo
const MainComponent = (props) => {
  const { isUserLogged } = props;

  // Recupero delle pagine dell'applicativo
  const routes = createRoutes();

  /* #start:dev */
  const sandbox = mapRoutes(routes.sandbox); /* Pagina sandbox */
  /* #end:dev */

  return isUserLogged ? (
    <Switch>
      {/* #start:dev */}
      {sandbox}
      {/* #end:dev */}
      <LoggedTemplate>
        {routes.logged.map(mapRoutes) /* Lista delle pagine private*/}
      </LoggedTemplate>
    </Switch>
  ) : (
    <Switch>
      {/* #start:dev */}
      {sandbox}
      {/* #end:dev */}
      {mapRoutes(routes.login) /* Pagina pubblica di login */}
    </Switch>
  );
};


/**
 * Define component properties types
 */
MainComponent.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
};


export default memo(MainComponent);
