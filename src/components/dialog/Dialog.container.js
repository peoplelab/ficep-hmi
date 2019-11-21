import { connect } from 'react-redux';
//import Dialog from './Dialog.view';
import Dialog from '../dialogBoxes/view/Dialog.view';


const mapStateToProps = (state) => ({
  type: state.modal.target,
  data: state.modal.data || {},
});


export default connect(mapStateToProps)(Dialog);
