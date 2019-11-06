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
import { Anchor } from '../../layouts/index.layouts';

import '../../../styles/routes/tools.style.scss';


const Tools = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/materials`}>
      <div className="bg-tools-materiali tools columns flex-top">
        <Anchor className="tools__anchor text-cc" exact path={match.path}>
          {window.intl.tools_tab_machine}
        </Anchor>
        <p className="anchor tools__anchor text-cc" >
          {window.intl.tools_tab_database}
        </p>
        <Anchor className="tools__anchor text-cc" exact path={`${match.path}/materials`}>
          {window.intl.tools_tab_materials}
        </Anchor>
      </div>
    </Route>
    <Route path={match.path}>
      <div className="bg-tools-macchina tools">
        <Anchor className="tools__anchor text-cc" exact path={match.path}>
          {window.intl.tools_tab_machine}
        </Anchor>
        <p className="anchor tools__anchor text-cc" >
          {window.intl.tools_tab_database}
        </p>
        <Anchor className="tools__anchor text-cc" exact path={`${match.path}/materials`}>
          {window.intl.tools_tab_materials}
        </Anchor>
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
