//----------------------------------------------------------------------------------------
// File: tools.view.jsx
//
// Desc: ...
// Path: /src/components/routes/settings/tools.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Anchor from '../../layouts/Anchor';

import '../../../styles/routes/tools.style.scss';


const Tools = ({ match }) => (
  <Switch>
    <Route path={match.path} exact>
      <div className="bg-tools-macchina tools">
        <Anchor className="tools__anchor" exact path={match.path}>Utensili macchina</Anchor>
        <p className="anchor tools__anchor" >Database utensili</p>
        <Anchor className="tools__anchor" exact path={`${match.path}/materials`}>Materiali</Anchor>
      </div>
    </Route>
    <Route path={`${match.path}/materials`} exact>
      <div className="bg-tools-materiali tools">
        <Anchor className="tools__anchor" exact path={match.path}>Utensili macchina</Anchor>
        <p className="anchor tools__anchor" >Database utensili</p>
        <Anchor className="tools__anchor" exact path={`${match.path}/materials`}>Materiali</Anchor>
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
