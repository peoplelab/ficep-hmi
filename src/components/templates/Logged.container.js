//----------------------------------------------------------------------------------------------------
// File: Main.container.js
//
// Desc: Gestore della comunicazione tra lo store globale e il componente per la gestione delle pagine
// Path: /src/container/Main.container
//----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Logged from './Logged.view';

const header = state => ({
  username: state.username || '',
  culture: state.culture || '',
  groups: state.groups || '',
});


// Traforma gli stati Redux in proprietà del componente React
const mapStateToProps = state => ({
  header: header(state),
  state,
});


// connette la view del componente React con lo store di Redux
export default connect(mapStateToProps)(Logged);