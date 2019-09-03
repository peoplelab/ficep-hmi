//-----------------------------------------------------------------------------------
// File: Main.view.jsx
//
// Desc: Componente per la gestione delle pagine dell'applicazione
// Path: /src/container/Main.view
//-----------------------------------------------------------------------------------


import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createRoutes from './Router';
// import { SessionValidity } from '../controllers/session.controller';


// Partendo da una lista di oggetti, ritorna una lista di componeti React di tipo Route, corrispondenti alle pagine dell'applicativo
const mapRoutes = (routeProps) => {
  const {
    Component,
    Store,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`}>
      {!Store ? (
        <Component />
      ) : (
        <Store>
          <Component />
        </Store>
      )}
    </Route>
  );
};


// Definizione del gestore delle pagine dell'applicativo
class MainComponent extends Component {
  // constructor(props) {
  //   super(props);

  //   this.timer = null;
  // }

  // // Viene verificato se il refreshToken è stato aggiornato
  // // In caso affermativo, viene inizizializzato un nuovo timer in componentDidUpdate
  // // In caso contrario, vengono bloccati eventuali aggiornamenti
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.refreshToken !== this.props.refreshToken;
  // }

  // A componente montato, viene avviato un timer una volta che l'utente ha fatto login
  // Una volta scaduto il timer, verrà invalidato, lato client, il refreshToken e la sessione corrente
  // La durata di vita del refreshToken e della sessione è indicata, nella response del servizio di login, da refreshExpiredAt
  // componentDidUpdate() {
  //   clearTimeout(this.timer);

  //   this.timer = SessionValidity();
  // }

  render() {
    const { isUserLogged } = this.props;

    // Recupero delle pagine dell'applicativo
    const routes = createRoutes();

    const Primary = routes.primary.map(mapRoutes);                   // Lista delle pagine pubbliche
    const Logged = isUserLogged && routes.logged.map(mapRoutes);     // Lista delle pagine private
    // const Secondary = routes.secondary.map(mapRoutes);               // Pagine pubbliche di supporto
    // const Messages = isUserLogged && routes.messages.map(mapRoutes); // Pagine private di supporto
    // const External = routes.external.map(mapRoutes);                 // Lista delle landing page esterne all'applicativo

    return (
      <Switch>
        {Primary}
        {Logged}
        {/* {Secondary} */}
        {/* {Messages} */}
        {/* {External} */}
      </Switch>
    );
  }
}


/**
 * Define component properties types
 */
MainComponent.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  // refreshToken: PropTypes.string.isRequired,
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
};


export default MainComponent;
