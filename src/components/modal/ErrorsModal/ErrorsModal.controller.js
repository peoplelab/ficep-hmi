//-----------------------------------------------------------------------------------------------------
// File: ErrorsModal.controller.js
//
// Desc: Gestore della comunicazione tra lo store globale e il template delle pagine con utente loggato
// Path: /src/container/ErrorsModal.controller
//-----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import ErrorsModal from './ErrorsModal.view';
import { pathOr } from '../../../presenters/utils';

const responseType = state => pathOr(NaN, ['responseType'], state);
const errorCode = state => pathOr('', ['errorCode'], state);
const result = state => pathOr([], ['result'], state);

const disabled = state => responseType(state) === 200 || isNaN(responseType(state));


// Traforma gli stati Redux in proprietà del componente React
const mapStateToProps = state => ({
  responseType: responseType(state),
  errorCode: errorCode(state),
  result: result(state),
  disabled: disabled(state),
});


// connette la view del componente React con lo store di Redux
export default connect(mapStateToProps)(ErrorsModal);
