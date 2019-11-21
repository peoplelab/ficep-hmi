//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
// Desc: Componente per la gestione delle modali dell'applicazione
//
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
	const routes = createRoutes();										// Recupero delle pagine dell'applicativo

	return (
		<>
			<Switch>
			{isUserLogged && routes.modal.map(mapRoutes) /* Lista delle pagine private modali */}
			</Switch>
			{mapRoutes(routes.dialog)}
		</>
	);
};


// ** Define component properties types **
Modals.propTypes = {
	isUserLogged: PropTypes.bool.isRequired,
};

// ** Define default value of component properties **
Modals.defaultProps = {};


export default memo(Modals);
