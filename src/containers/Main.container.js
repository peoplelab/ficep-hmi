//----------------------------------------------------------------------------------------------------
// File: Main.container.js
//
// Desc: Gestore della comunicazione tra lo store globale e il componente per la gestione delle pagine
// Path: /src/container/Main.container
//----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Main from './Main.view';
import { logged } from '../presenters/session.presenter';


// Traforma gli stati Redux in proprietà del componente React
const mapStateToProps = state => ({
  isUserLogged: logged(state), // Verifica che l'utente sia in possesso di credenziali valide
  // refreshToken: state.refreshToken || '', // Recupera il valore corrente del refreshToken
});


// connette la view del componente React con lo store di Redux
export default connect(mapStateToProps)(Main);
