//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Componente per la gestione delle modali dell'applicazione
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import createRoutes from './Router';


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


const Modals = (props) => {

  const { isUserLogged } = props;

  // Recupero delle pagine dell'applicativo
  const routes = createRoutes();

  return (
    <Switch>
      {isUserLogged && routes.modal.map(mapRoutes) /* Lista delle pagine private modali */}
      {mapRoutes(routes.error) /* Modale pubblica degli errori */}
    </Switch>
  );
};


/**
 * Define component properties types
 */
Modals.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
Modals.defaultProps = {
};


export default memo(Modals);
