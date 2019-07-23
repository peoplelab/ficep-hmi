//----------------------------------------------------------------------------------------
// File: Tools.container.js		[components]
//
// Desc: Definizione del container della pagina "Gestione Tools"
// Path: /src/routes/Tools/components
//----------------------------------------------------------------------------------------

import { connect } from 'react-redux';														// Componente React: core package per React Router
import { withRouter } from 'react-router-dom';												// Componente React: core package per Redux (gestore semplificato dello stato)

import Tools from './Tools.view';															// Import del Template .JSX associato
import { action } from '../controllers/Tools.actions';										// Importa le definizioni delle actions
import { JsonToString } from './Tools.presenter';											// Libreria per le funzionalità specifiche della View (render)
import { stateOr } from '../../../commons/selectors';										// COMMON HANDLER di inizializzazione e gestione dei selectors
 

const mapDispatchToProps = {
  callToolsList: () => action.CALL_TOOLS_LIST(),
  callToolDetails: id => action.CALL_TOOL_DETAILS({ id }),
};

const mapStateToProps = state => ({
  list: state.Tools.list.data,
  id: state.Tools.currentID,
  details: JsonToString(stateOr(state, 'state.Tools.details.data', null)),
});


const ToolsContainer = connect(mapStateToProps, mapDispatchToProps)(Tools);

export default withRouter(ToolsContainer);
