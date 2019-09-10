//----------------------------------------------------------------------------------------
// File: settings.view.jsx
//
// Desc: ...
// Path: /src/components/routes/settings/settings.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Anchor from '../../layouts/Anchor';

import '../../../styles/routes/jog.style.scss';


const Jog = ({ match }) => (
  <Switch>
    <Route path={match.path} exact>
      <div className="bg-commands-jog jog">
        <div className="jog__container">
          <Anchor className="jog__anchor" exact path={match.path}>Jog</Anchor>
          <Anchor className="jog__anchor" exact path={`${match.path}/commands`}>Comandi</Anchor>
        </div>
      </div>
    </Route>
    <Route path={`${match.path}/commands`} exact>
      <div className="bg-commands-comandi jog">
        <div className="jog__container">
          <Anchor className="jog__anchor" exact path={match.path}>Jog</Anchor>
          <Anchor className="jog__anchor" exact path={`${match.path}/commands`}>Comandi</Anchor>
        </div>
      </div>
    </Route>
  </Switch>
);


Jog.propTypes = {
  match: PropTypes.object.isRequired,
};

Jog.defaultProps = {
};


export default hot(memo(Jog));
