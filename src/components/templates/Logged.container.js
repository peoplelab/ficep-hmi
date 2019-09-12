//-----------------------------------------------------------------------------------------------------
// File: Main.container.js
//
// Desc: Gestore della comunicazione tra lo store globale e il template delle pagine con utente loggato
// Path: /src/container/Main.container
//-----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Logged from './Logged.view';
import { pathOr } from '../../presenters/utils';

const header = state => ({
  username: pathOr('', ['result', 'username'], state),
  culture: pathOr('', ['result', 'culture'], state),
  role: pathOr('', ['result', 'groups', 0], state),
});


// Traforma gli stati Redux in proprietà del componente React
const mapStateToProps = state => ({
  header: header(state),
  state,
});


// connette la view del componente React con lo store di Redux
export default connect(mapStateToProps)(Logged);
