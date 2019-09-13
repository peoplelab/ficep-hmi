import React, { memo } from 'react';
import { Switch, Route } from "react-router";               // Gestore della navigazione
import Anchor from '../components/layouts/Anchor';
// import PropTypes from 'prop-types';

import './style/sandbox.style.scss';


const SandBoxLink = (props) => (
  <Switch>
    <Route path="/sandbox"/>
    <Route>
      <Anchor
        className="sandbox-link"
        replace
        path="/sandbox"
      >
        Go to Sandbox
      </Anchor>
    </Route>
  </Switch>
);


SandBoxLink.propTypes = {
};

SandBoxLink.defaultProps = {
};


export default memo(SandBoxLink);
