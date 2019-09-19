import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Anchor from '../components/layouts/Anchor';
import Tools from './_tools/tools.view';
import Cultures from './_cultures/cultures.view';
import Users from './_users/users.view';

import './style/sandbox.style.scss';


const Sandbox = ({ match }) => (
  <div className="sandbox">
    <div className="sandbox__link-box">
      <Anchor className="sandbox__link" path="/" exact>
        Home
      </Anchor>
      <Anchor className="sandbox__link" path={`${match.path}`} exact>
        Sandbox
      </Anchor>
      <Anchor className="sandbox__link" path={`${match.path}/tools`} exact>
        Sandbox/Tools
      </Anchor>
      <Anchor className="sandbox__link" path={`${match.path}/cultures`} exact>
        Sandbox/Cultures
      </Anchor>
      <Anchor className="sandbox__link" path={`${match.path}/users`} exact>
        Sandbox/users
      </Anchor>
    </div>
    <div className="sandbox__route-box">
      <Switch>
        <Route path={`${match.path}`} exact>
          <div className="sandbox__route">
            <p className="sandbox__message">
              {`Clicca su un pulsante per selezionare la pagina dei componenti e/o servizi api che vuoi testare ;)`}
            </p>
          </div>
        </Route>
        <Route path={`${match.path}/tools`} exact>
          <Tools />
        </Route>
        <Route path={`${match.path}/cultures`} exact>
          <Cultures />
        </Route>
        <Route path={`${match.path}/users`} exact>
          <Users />
        </Route>
      </Switch>
    </div>
  </div>
);


Sandbox.propTypes = {
  match: PropTypes.object.isRequired,
};

Sandbox.defaultProps = {
};


export default hot(memo(Sandbox));
