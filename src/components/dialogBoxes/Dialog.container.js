//----------------------------------------------------------------------------------------------------
// File: Dialog.container.js
// Desc: Container delle dialog boxes
//
// Path: /src/components/dialogBoxes/Dialog.container
//----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Dialog from './view/Dialog.view';


const mapStateToProps = (state) => ({
  type: state.modal.target,
  data: state.modal.data || {},
});


export default connect(mapStateToProps)(Dialog);
