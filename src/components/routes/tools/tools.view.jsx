//----------------------------------------------------------------------------------------
// File: settings.view.jsx
//
// Desc: ...
// Path: /src/components/routes/settings/settings.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route

const Tools = (props) => (
  <Switch>
    <Route path="/tools" exact>
      <div className="bg-tools-macchina" />
    </Route>
    <Route path={`/tools/materials`} exact>
      <div className="bg-tools-meteriali" />
    </Route>
  </Switch>
);


Tools.propTypes = {
};

Tools.defaultProps = {
};


export default hot(memo(Tools));
