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

import '../../../styles/routes/tools.style.scss';


const Tools = ({match}) => (
  <Switch>
    <Route path={match.path} exact>
      <div className="bg-tools-macchina tools">
        <Anchor className="tools__anchor" path="/tools">Utensili macchina</Anchor>
        <Anchor className="tools__anchor" path="/tools/database">Database utensili</Anchor>
        <Anchor className="tools__anchor" path="/tools/materials">Materiali</Anchor>
      </div>
    </Route>
    <Route path={`/${match.path}/materials`} exact>
      <div className="bg-tools-meteriali tools">
        <Anchor className="tools__anchor" path="/tools">Utensili macchina</Anchor>
        <Anchor className="tools__anchor" path="/tools/database">Database utensili</Anchor>
        <Anchor className="tools__anchor" path="/tools/materials">Materiali</Anchor>
      </div>
    </Route>
    <Route path={`/${match.path}/database`} exact>
      <div className="tools">
        <Anchor className="tools__anchor" path="/tools">Utensili macchina</Anchor>
        <Anchor className="tools__anchor" path="/tools/database">Database utensili</Anchor>
        <Anchor className="tools__anchor" path="/tools/materials">Materiali</Anchor>
      </div>
    </Route>
  </Switch>
);


Tools.propTypes = {
  match: PropTypes.object.isRequired,
};

Tools.defaultProps = {
};


export default hot(memo(Tools));
