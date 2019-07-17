import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // only for route components
import TestModel from './testModel.view';
import { testmodelCall, onUrlChange } from '../controllers/testModel.actions';
import { stringifyData } from '../controllers/testModel.selectors';


const mapDispatchToProps = {

	MyFunc: testmodelCall,
  onUrlChange,

};

const mapStateToProps = state => ({
	//data: state.TestModel.data,
	data: state.TestModel_pippo.data,

	// Gestione ritorno
	// myInputValue: state.TestModel_pippo.data,
	myInputValue: stringifyData(state),
	//myInputValue: state.TestModel_pippo.total_pages,
	url: state.TestModel_pippo.url,

});


const TestModelContainer = connect(mapStateToProps, mapDispatchToProps)(TestModel);

export default withRouter(TestModelContainer);
