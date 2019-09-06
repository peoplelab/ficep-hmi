//----------------------------------------------------------------------------------------
// File: tools.view.jsx
//
// Desc: Pagina per la gestione dei tools
// Path: /src/components/routes/login/tools.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// *** NOTA: "COMPONENTS" DOVR� DIVENTARE "SYSTEM/COMPONENTS" O "BASE.COMPONENTS", ECC.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ** Carica i componenti predefiniti di sistema (snippets) **
import Box from '../../layouts/Box';
import Button from '../../layouts/Button';
import List from './tools.item.list';
import Details from './tools.item.details';
import { callToolsList } from '../../../controllers/routes/tools/tools.controller';

import '../../../styles/routes/tools.style.scss';


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    // inizializzazione dello stato della pagina
    this.state = {
      list: [],
      details  : {},
      error: null,
      failure: null,
    };

    this.updateState = this.updateState.bind(this);
    this.onCallList = this.onCallList.bind(this);
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // richiesta della lista dei tools
  onCallList() {
    const dispatch = this.updateState;

    callToolsList({ dispatch });
  }

  // renderizzazione della pagina
	render() {
    return (
        <section className="tools">
          <h1 className="tools__title">
            Tools
          </h1>
          <Box className="tools__container">
            <Box className="tools__group">
              <Button className="tools__button" onClick={this.onCallList}>
                Get tools list
              </Button>
            </Box>
            <List toolsSetState={this.updateState} toolsGetState={this.state} />
            <Details toolsGetState={this.state} />
          </Box>
        </section>
    );
	}
}


ToolsRoute.propTypes = {
};

ToolsRoute.defaultProps = {
};


export default hot(ToolsRoute);
